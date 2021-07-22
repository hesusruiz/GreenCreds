var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import {settingsGet, settingsPut} from "../db.js";
import {inflate} from "../_snowpack/pkg/pako.js";
import {log} from "../log.js";
import trustedPublicKeys from "../json/all_jwk_keys.json.proxy.js";
import prePublicKeys from "../json/pre_jwk_keys.json.proxy.js";
import valueSets from "../json/value-sets.json.proxy.js";
import ukRawKeys from "../json/uk_jwk_keys.json.proxy.js";
export var trustedList = {
  get: async function(kid) {
    if (!kid) {
      log.myerror("kid is undefined");
      return void 0;
    }
    let entry = trustedPublicKeys[kid];
    if (entry === void 0) {
      log.myerror(`kid ${kid} not found`);
      return void 0;
    }
    let jwk = entry["jwk"];
    if (jwk === void 0) {
      log.myerror(`JWK for kid ${kid} not found`);
      return void 0;
    }
    return jwk;
  }
};
function inUKList(kid) {
  for (let i = 0; i < ukRawKeys.length; i++) {
    if (ukRawKeys[i].kid == kid) {
      return ukRawKeys[i].publicKey;
    }
  }
  return void 0;
}
async function getTrustedKey(kid) {
  if (!kid) {
    log.myerror("kid is undefined");
    return void 0;
  }
  let entry = trustedPublicKeys[kid];
  if (entry) {
    console.log(`kid "${kid}" found in EU_PRO trusted list`);
    return {
      kid,
      publicKey: entry.jwk,
      list: "EU_PRO",
      format: "jwk"
    };
  }
  log.mywarn(`kid "${kid}" not found in EU_PRO trusted list`);
  for (let i = 0; i < ukRawKeys.length; i++) {
    if (ukRawKeys[i].kid == kid) {
      console.log(`kid "${kid}" found in UK_PRO trusted list`);
      return {
        kid,
        publicKey: ukRawKeys[i].publicKey,
        list: "UK_PRO",
        format: "spki"
      };
    }
  }
  log.mywarn(`kid "${kid}" not found in UK_PRO trusted list`);
  if (prePublicKeys.includes(kid)) {
    log.mywarn(`kid "${kid}" found in EU PREPRODUCTION trusted list`);
    return {
      kid,
      publicKey: void 0,
      list: "EU_PREPRODUCTION",
      format: void 0
    };
  }
  log.myerror(`KEY ${kid} not found in any Trusted List`);
  return {
    kid,
    publicKey: void 0,
    list: void 0,
    format: void 0
  };
}
export var vs = {
  get: function(key, valueSetName) {
    if (!key) {
      return "N/A";
    }
    let valueSet = valueSets[valueSetName];
    if (!valueSet) {
      return key;
    }
    let values = valueSet["valueSetValues"];
    if (!values) {
      return key;
    }
    let value = values[key];
    if (!value) {
      return key;
    }
    return value["display"];
  }
};
const KEYPAIR = 1;
const SYMMETRIC = 2;
function ab2str(buf) {
  return String.fromCharCode.apply(null, new Uint8Array(buf));
}
function str2ab(str) {
  const buf = new ArrayBuffer(str.length);
  const bufView = new Uint8Array(buf);
  for (let i = 0, strLen = str.length; i < strLen; i++) {
    bufView[i] = str.charCodeAt(i);
  }
  return buf;
}
class DGCKey {
  constructor() {
  }
  static async fromSPKI(SPKI) {
    const binaryDerString = window.atob(SPKI);
    const binaryDer = str2ab(binaryDerString);
    const extractable = true;
    const format = "spki";
    let algorithm = {
      name: "ECDSA",
      namedCurve: "P-256"
    };
    let key = await crypto.subtle.importKey(format, binaryDer, algorithm, extractable, ["verify"]);
    return key;
  }
  static async fromJWK(jwk) {
    const extractable = true;
    const format = "jwk";
    const keyType = jwk["kty"];
    let algorithm;
    if (keyType == "EC") {
      algorithm = {
        name: "ECDSA",
        namedCurve: "P-256"
      };
    } else if (keyType == "RSA") {
      algorithm = {
        name: "RSA-PSS",
        hash: "SHA-256"
      };
    } else {
      throw new Error(`Invalid key type specified: ${jwk["kty"]}`);
    }
    let keyUsages = jwk["d"] ? ["sign"] : ["verify"];
    let key = await crypto.subtle.importKey(format, jwk, algorithm, extractable, keyUsages);
    return key;
  }
  static async generateECDSAKeyPair() {
    const extractable = true;
    const algorithm = {
      name: "ECDSA",
      namedCurve: "P-256"
    };
    const keyUsages = ["sign", "verify"];
    let keyPair = await crypto.subtle.generateKey(algorithm, extractable, keyUsages);
    return keyPair;
  }
  static async generateEncryptionKey() {
    let key = await crypto.subtle.generateKey({
      name: "AES-GCM",
      length: 256
    }, true, ["encrypt", "decrypt"]);
    return key;
  }
  static async exportToJWK(key) {
    let keyJWK = await crypto.subtle.exportKey("jwk", key);
    return keyJWK;
  }
  static async exportToPEM(key) {
    let keyJWK = await crypto.subtle.exportKey("spki", key);
    return keyJWK;
  }
  static async importFromPEMRaw(keyPEMString) {
    const binaryDerString = window.atob(keyPEMString);
    console.log(binaryDerString);
    const binaryDer = str2ab(binaryDerString);
    console.log(binaryDer);
    let key = await crypto.subtle.importKey("spki", binaryDer, {
      name: "ECDSA",
      namedCurve: "P-256"
    }, true, ["verify"]);
    return key;
  }
  static async sign(key, bytes) {
    if (key.type != "private") {
      throw new Error("Not a private key");
    }
    let signature = await window.crypto.subtle.sign({
      name: "ECDSA",
      hash: {name: "SHA-256"}
    }, key, bytes);
    return signature;
  }
  static async verify(key, signature, bytes) {
    if (key.type != "public") {
      throw new Error("Not a public key");
    }
    console.log("Inside VERIFY", key);
    let result;
    try {
      result = await window.crypto.subtle.verify({
        name: "ECDSA",
        hash: {name: "SHA-256"}
      }, key, signature, bytes);
    } catch (error) {
      throw `Verification of payload failed: ${error}`;
    }
    console.log("Result:", result);
    return result;
  }
  static async encryptMessage(key, bytes) {
    if (key.type != "secret") {
      throw new Error("Not a symmetric encryption key");
    }
    let iv = crypto.getRandomValues(new Uint8Array(12));
    let ciphertext = await crypto.subtle.encrypt({
      name: "AES-GCM",
      iv
    }, key, bytes);
    return {iv, ciphertext};
  }
  static async decryptMessage(key, iv, ciphertext) {
    if (key.type != "secret") {
      throw new Error("Not a symmetric encryption key");
    }
    let decrypted = await window.crypto.subtle.decrypt({
      name: "AES-GCM",
      iv
    }, key, ciphertext);
    return decrypted;
  }
}
function uint(bytes) {
  var value = bytes[0];
  var i = bytes.length;
  for (let j = 1; j < i; j = j + 1) {
    value = value * 256;
    value = value + bytes[j];
  }
  return value;
}
function bigint(bytes) {
  var value = BigInt(bytes[0]);
  var i = bytes.length;
  for (let j = 1; j < i; j = j + 1) {
    value = value * 256n;
    value = value + BigInt(bytes[j]);
  }
  return value;
}
var aCode = "a".charCodeAt(0);
var fCode = "f".charCodeAt(0);
var ACode = "A".charCodeAt(0);
var FCode = "F".charCodeAt(0);
var zeroCode = "0".charCodeAt(0);
var nineCode = "9".charCodeAt(0);
function charValue(char) {
  var c = char.charCodeAt(0);
  if (c >= aCode && c <= fCode) {
    return c - aCode + 10;
  }
  if (c >= ACode && c <= FCode) {
    return c - ACode + 10;
  }
  if (c >= zeroCode && c <= nineCode) {
    return c - zeroCode;
  }
}
function hexStr2bytes(hexString) {
  if (hexString.length % 2 > 0) {
    console.log("ERROR: Hex String length incorrect");
    return void 0;
  }
  var array = new Uint8Array(hexString.length / 2);
  for (let i = 0; i < hexString.length; i = i + 2) {
    var code1 = charValue(hexString[i]);
    var code2 = charValue(hexString[i + 1]);
    array[i / 2] = code1 * 16 + code2;
  }
  return array;
}
const lutArray = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f"
];
function bytes2hexStr(bytes) {
  var hexStr = "";
  for (let i = 0; i < bytes.length; i = i + 1) {
    nibHigh = bytes[i] >>> 4;
    nibLow = bytes[i] & 15;
    hexStr = hexStr + lutArray[nibHigh] + lutArray[nibLow];
  }
  return hexStr;
}
const baseSize = 45;
const baseSizeSquared = 2025;
const chunkSize = 2;
const encodedChunkSize = 3;
const smallEncodedChunkSize = 2;
const byteSize = 256;
const encoding = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  " ",
  "$",
  "%",
  "*",
  "+",
  "-",
  ".",
  "/",
  ":"
];
var decoding;
function encodeB45(byteArrayArg) {
  if (byteArrayArg === null || byteArrayArg === void 0)
    throw new Error("byteArrayArg is null or undefined.");
  const wholeChunkCount = Math.trunc(byteArrayArg.length / chunkSize);
  const resultSize = wholeChunkCount * encodedChunkSize + (byteArrayArg.length % chunkSize === 1 ? smallEncodedChunkSize : 0);
  if (resultSize === 0)
    return "";
  const result = new Array(resultSize);
  var resultIndex = 0;
  const wholeChunkLength = wholeChunkCount * chunkSize;
  for (let i = 0; i < wholeChunkLength; ) {
    const value = byteArrayArg[i++] * byteSize + byteArrayArg[i++];
    result[resultIndex++] = encoding[value % baseSize];
    result[resultIndex++] = encoding[Math.trunc(value / baseSize) % baseSize];
    result[resultIndex++] = encoding[Math.trunc(value / baseSizeSquared) % baseSize];
  }
  if (byteArrayArg.length % chunkSize === 0)
    return result.join("");
  result[result.length - 2] = encoding[byteArrayArg[byteArrayArg.length - 1] % baseSize];
  result[result.length - 1] = byteArrayArg[byteArrayArg.length - 1] < baseSize ? encoding[0] : encoding[Math.trunc(byteArrayArg[byteArrayArg.length - 1] / baseSize) % baseSize];
  return result.join("");
}
function decodeB45(utf8StringArg) {
  if (utf8StringArg === null || utf8StringArg === void 0)
    throw new Error("utf8StringArg is null or undefined.");
  if (utf8StringArg.length === 0)
    return [];
  var remainderSize = utf8StringArg.length % encodedChunkSize;
  if (remainderSize === 1)
    throw new Error("utf8StringArg has incorrect length.");
  if (decoding === void 0) {
    decoding = {};
    for (let i = 0; i < encoding.length; ++i)
      decoding[encoding[i]] = i;
  }
  const buffer = new Array(utf8StringArg.length);
  for (let i = 0; i < utf8StringArg.length; ++i) {
    const found = decoding[utf8StringArg[i]];
    if (found === void 0)
      throw new Error("Invalid character at position ".concat(i).concat("."));
    buffer[i] = found;
  }
  const wholeChunkCount = Math.trunc(buffer.length / encodedChunkSize);
  var result = new Array(wholeChunkCount * chunkSize + (remainderSize === chunkSize ? 1 : 0));
  var resultIndex = 0;
  const wholeChunkLength = wholeChunkCount * encodedChunkSize;
  for (let i = 0; i < wholeChunkLength; ) {
    const val = buffer[i++] + baseSize * buffer[i++] + baseSizeSquared * buffer[i++];
    result[resultIndex++] = Math.trunc(val / byteSize);
    result[resultIndex++] = val % byteSize;
  }
  if (remainderSize === 0)
    return result;
  result[result.length - 1] = buffer[buffer.length - 2] + baseSize * buffer[buffer.length - 1];
  return result;
}
function decodeToUtf8String(utf8StringArg) {
  var data = decodeB45(utf8StringArg);
  var str = "";
  var count = data.length;
  for (let i = 0; i < count; ++i)
    str += String.fromCharCode(data[i]);
  return str;
}
const CBOR_Magic_ID = 55799;
const COSE_Sign = 98;
const COSE_Sign1 = 18;
const MT_INTEGER = 0;
const MT_NEGINTEGER = 1;
const MT_BYTES = 2;
const MT_UTF8 = 3;
const MT_ARRAY = 4;
const MT_MAP = 5;
const MT_TAG = 6;
const MT_FLOAT = 7;
const CWT_ALG = 1;
const CWT_KID = 4;
const utf8Encoder = new TextEncoder();
const utf8Decoder = new TextDecoder();
var CWT_ALG_TO_JWT = new Map();
CWT_ALG_TO_JWT.set(-7, "ES256");
CWT_ALG_TO_JWT.set(-37, "RSA");
const _CWT = class {
  static encode(value) {
    var data = new ArrayBuffer(256);
    var dataView = new DataView(data);
    var lastLength;
    var offset = 0;
    function prepareWrite(length) {
      var newByteLength = data.byteLength;
      var requiredLength = offset + length;
      while (newByteLength < requiredLength)
        newByteLength <<= 1;
      if (newByteLength !== data.byteLength) {
        var oldDataView = dataView;
        data = new ArrayBuffer(newByteLength);
        dataView = new DataView(data);
        var uint32count = offset + 3 >> 2;
        for (var i = 0; i < uint32count; ++i)
          dataView.setUint32(i << 2, oldDataView.getUint32(i << 2));
      }
      lastLength = length;
      return dataView;
    }
    function commitWrite() {
      offset += lastLength;
    }
    function writeFloat64(value2) {
      commitWrite(prepareWrite(8).setFloat64(offset, value2));
    }
    function writeUint8(value2) {
      commitWrite(prepareWrite(1).setUint8(offset, value2));
    }
    function writeUint8Array(value2) {
      var dataView2 = prepareWrite(value2.length);
      for (var i = 0; i < value2.length; ++i)
        dataView2.setUint8(offset + i, value2[i]);
      commitWrite();
    }
    function writeUint16(value2) {
      commitWrite(prepareWrite(2).setUint16(offset, value2));
    }
    function writeUint32(value2) {
      commitWrite(prepareWrite(4).setUint32(offset, value2));
    }
    function writeUint64(value2) {
      var low = value2 % POW_2_32;
      var high = (value2 - low) / POW_2_32;
      var dataView2 = prepareWrite(8);
      dataView2.setUint32(offset, high);
      dataView2.setUint32(offset + 4, low);
      commitWrite();
    }
    function writeTypeAndLength(type, length) {
      if (length < 24) {
        writeUint8(type << 5 | length);
      } else if (length < 256) {
        writeUint8(type << 5 | 24);
        writeUint8(length);
      } else if (length < 65536) {
        writeUint8(type << 5 | 25);
        writeUint16(length);
      } else if (length < 4294967296) {
        writeUint8(type << 5 | 26);
        writeUint32(length);
      } else {
        writeUint8(type << 5 | 27);
        writeUint64(length);
      }
    }
    function encodeItem(value2) {
      var i;
      if (value2 === false)
        return writeUint8(244);
      if (value2 === true)
        return writeUint8(245);
      if (value2 === null)
        return writeUint8(246);
      if (value2 === void 0)
        return writeUint8(247);
      switch (typeof value2) {
        case "number":
          if (Math.floor(value2) === value2) {
            if (0 <= value2 && value2 <= POW_2_53) {
              return writeTypeAndLength(MT_INTEGER, value2);
            }
            if (-POW_2_53 <= value2 && value2 < 0) {
              return writeTypeAndLength(MT_NEGINTEGER, -(value2 + 1));
            }
          }
          writeUint8(251);
          return writeFloat64(value2);
        case "string":
          var utf8data = [];
          for (i = 0; i < value2.length; ++i) {
            var charCode = value2.charCodeAt(i);
            if (charCode < 128) {
              utf8data.push(charCode);
            } else if (charCode < 2048) {
              utf8data.push(192 | charCode >> 6);
              utf8data.push(128 | charCode & 63);
            } else if (charCode < 55296) {
              utf8data.push(224 | charCode >> 12);
              utf8data.push(128 | charCode >> 6 & 63);
              utf8data.push(128 | charCode & 63);
            } else {
              charCode = (charCode & 1023) << 10;
              charCode |= value2.charCodeAt(++i) & 1023;
              charCode += 65536;
              utf8data.push(240 | charCode >> 18);
              utf8data.push(128 | charCode >> 12 & 63);
              utf8data.push(128 | charCode >> 6 & 63);
              utf8data.push(128 | charCode & 63);
            }
          }
          writeTypeAndLength(MT_UTF8, utf8data.length);
          return writeUint8Array(utf8data);
        default:
          var length;
          if (Array.isArray(value2)) {
            length = value2.length;
            writeTypeAndLength(MT_ARRAY, length);
            for (i = 0; i < length; ++i)
              encodeItem(value2[i]);
          } else if (value2 instanceof Uint8Array) {
            writeTypeAndLength(MT_BYTES, value2.length);
            writeUint8Array(value2);
          } else if (value2 instanceof Map) {
            length = value2.size;
            writeTypeAndLength(MT_MAP, length);
            for (let [key2, val] of value2) {
              encodeItem(key2);
              encodeItem(val);
            }
          } else {
            var keys = Object.keys(value2);
            length = keys.length;
            writeTypeAndLength(MT_MAP, length);
            for (i = 0; i < length; ++i) {
              var key = keys[i];
              encodeItem(key);
              encodeItem(value2[key]);
            }
          }
      }
    }
    encodeItem(value);
    return data.slice(0, offset);
  }
  static async verifyCWT(_cwt, verificationKey) {
    let [ph, uph, payload, signature] = _CWT.decode(_cwt);
    let zeroBstr = new Uint8Array(0);
    const Sig_structure = ["Signature1", ph, zeroBstr, payload];
    let Sig_structure_encoded = _CWT.encode(Sig_structure);
    let verified = false;
    try {
      verified = await DGCKey.verify(verificationKey, signature, Sig_structure_encoded);
      console.log("VERIFIED:", verified);
    } catch (error) {
      console.log("ERROR:", error);
    }
    return verified;
  }
  static decode(data, tagger, simpleValue) {
    var dataView = new DataView(data);
    var offset = 0;
    if (typeof tagger !== "function")
      tagger = function(value) {
        return value;
      };
    if (typeof simpleValue !== "function")
      simpleValue = function() {
        return void 0;
      };
    function commitRead(length, value) {
      offset += length;
      return value;
    }
    function readArrayBuffer(length) {
      return commitRead(length, new Uint8Array(data, offset, length));
    }
    function readFloat16() {
      var tempArrayBuffer = new ArrayBuffer(4);
      var tempDataView = new DataView(tempArrayBuffer);
      var value = readUint16();
      var sign = value & 32768;
      var exponent = value & 31744;
      var fraction = value & 1023;
      if (exponent === 31744)
        exponent = 255 << 10;
      else if (exponent !== 0)
        exponent += 127 - 15 << 10;
      else if (fraction !== 0)
        return (sign ? -1 : 1) * fraction * POW_2_24;
      tempDataView.setUint32(0, sign << 16 | exponent << 13 | fraction << 13);
      return tempDataView.getFloat32(0);
    }
    function readFloat32() {
      return commitRead(4, dataView.getFloat32(offset));
    }
    function readFloat64() {
      return commitRead(8, dataView.getFloat64(offset));
    }
    function readUint8() {
      return commitRead(1, dataView.getUint8(offset));
    }
    function readUint16() {
      return commitRead(2, dataView.getUint16(offset));
    }
    function readUint32() {
      return commitRead(4, dataView.getUint32(offset));
    }
    function readUint64() {
      return readUint32() * POW_2_32 + readUint32();
    }
    function readBreak() {
      if (dataView.getUint8(offset) !== 255)
        return false;
      offset += 1;
      return true;
    }
    function readLength(additionalInformation) {
      if (additionalInformation < 24)
        return additionalInformation;
      if (additionalInformation === 24)
        return readUint8();
      if (additionalInformation === 25)
        return readUint16();
      if (additionalInformation === 26)
        return readUint32();
      if (additionalInformation === 27)
        return readUint64();
      if (additionalInformation === 31)
        return -1;
      throw "Invalid length encoding";
    }
    function readIndefiniteStringLength(majorType) {
      var initialByte = readUint8();
      if (initialByte === 255)
        return -1;
      var length = readLength(initialByte & 31);
      if (length < 0 || initialByte >> 5 !== majorType)
        throw "Invalid indefinite length element";
      return length;
    }
    function appendUtf16Data(utf16data, length) {
      for (var i = 0; i < length; ++i) {
        var value = readUint8();
        if (value & 128) {
          if (value < 224) {
            value = (value & 31) << 6 | readUint8() & 63;
            length -= 1;
          } else if (value < 240) {
            value = (value & 15) << 12 | (readUint8() & 63) << 6 | readUint8() & 63;
            length -= 2;
          } else {
            value = (value & 15) << 18 | (readUint8() & 63) << 12 | (readUint8() & 63) << 6 | readUint8() & 63;
            length -= 3;
          }
        }
        if (value < 65536) {
          utf16data.push(value);
        } else {
          value -= 65536;
          utf16data.push(55296 | value >> 10);
          utf16data.push(56320 | value & 1023);
        }
      }
    }
    function decodeItem() {
      var initialByte = readUint8();
      var majorType = initialByte >> 5;
      var additionalInformation = initialByte & 31;
      var i;
      var length;
      if (majorType === MT_FLOAT) {
        switch (additionalInformation) {
          case 25:
            return readFloat16();
          case 26:
            return readFloat32();
          case 27:
            return readFloat64();
        }
      }
      length = readLength(additionalInformation);
      if (length < 0 && (majorType < 2 || 6 < majorType))
        throw "Invalid length";
      switch (majorType) {
        case MT_INTEGER:
          return length;
        case MT_NEGINTEGER:
          return -1 - length;
        case MT_BYTES:
          if (length < 0) {
            var elements = [];
            var fullArrayLength = 0;
            while ((length = readIndefiniteStringLength(majorType)) >= 0) {
              fullArrayLength += length;
              elements.push(readArrayBuffer(length));
            }
            var fullArray = new Uint8Array(fullArrayLength);
            var fullArrayOffset = 0;
            for (i = 0; i < elements.length; ++i) {
              fullArray.set(elements[i], fullArrayOffset);
              fullArrayOffset += elements[i].length;
            }
            return fullArray;
          }
          return readArrayBuffer(length);
        case MT_UTF8:
          var utf16data = [];
          if (length < 0) {
            while ((length = readIndefiniteStringLength(majorType)) >= 0)
              appendUtf16Data(utf16data, length);
          } else {
            appendUtf16Data(utf16data, length);
          }
          return String.fromCharCode.apply(null, utf16data);
        case MT_ARRAY:
          var retArray;
          if (length < 0) {
            console.log("INDEFINITE LENGTH ARRAY");
            retArray = [];
            while (!readBreak())
              retArray.push(decodeItem());
          } else {
            retArray = new Array(length);
            for (i = 0; i < length; ++i)
              retArray[i] = decodeItem();
          }
          return retArray;
        case MT_MAP:
          var retMap = new Map();
          for (i = 0; i < length || length < 0 && !readBreak(); ++i) {
            var key = decodeItem();
            retMap.set(key, decodeItem());
          }
          return retMap;
        case MT_TAG:
          return tagger(decodeItem(), length);
        case 7:
          switch (length) {
            case 20:
              return false;
            case 21:
              return true;
            case 22:
              return null;
            case 23:
              return void 0;
            default:
              return simpleValue(length);
          }
      }
    }
    var ret = decodeItem();
    if (offset !== data.byteLength)
      throw "Remaining bytes";
    return ret;
  }
  static async decodeCWT(data, verify) {
    var dataView = new DataView(data);
    function decodeHeadersOld(protectedHeaders2, unprotectedHeaders2) {
      const CWT_ALG2 = 1;
      const CWT_KID2 = 4;
      protectedHeaders2 = protectedHeaders2.slice();
      let headers2 = _CWT.decode(protectedHeaders2.buffer);
      let headersJWT = new Map();
      for (let [key, value] of headers2) {
        switch (key) {
          case CWT_ALG2: {
            let alg = CWT_ALG_TO_JWT.get(value);
            if (alg == void 0) {
              throw `Undefined algorithm: ${value}`;
            }
            headersJWT.set("alg", alg);
            break;
          }
          case CWT_KID2: {
            let kid = bytes2hexStr(value);
            headersJWT.set("kid", kid);
            break;
          }
          default:
            break;
        }
      }
      for (let [key, value] of unprotectedHeaders2) {
        switch (key) {
          case CWT_KID2: {
            let kid = bytes2hexStr(value);
            headersJWT.set("kid", kid);
            break;
          }
          default:
            break;
        }
      }
      return headersJWT;
    }
    function decodeHeaders(protectedHeaders2, unprotectedHeaders2) {
      let newProtectedHeaders = protectedHeaders2.slice();
      let headers2 = _CWT.decode(newProtectedHeaders.buffer);
      let alg_number = headers2.get(CWT_ALG);
      if (alg_number === void 0) {
        throw "Missing algorithm in protected headers";
      }
      let alg_string = CWT_ALG_TO_JWT.get(alg_number);
      if (alg_string === void 0) {
        throw `Invalid algorithm specified: ${alg_number}`;
      }
      let headers_obj = {};
      headers_obj["alg"] = alg_string;
      let kid = headers2.get(CWT_KID);
      if (kid === void 0) {
        kid = unprotectedHeaders2.get(CWT_KID);
      }
      if (kid === void 0) {
        throw "Missing kid in headers";
      }
      let kid_str = "";
      for (let i = 0; i < kid.length; i++) {
        kid_str = kid_str + String.fromCodePoint(kid[i]);
      }
      kid_str = window.btoa(kid_str);
      headers_obj["kid"] = kid_str;
      return headers_obj;
    }
    function decodePayloadAsObject(payload2) {
      const CWT_ISS = 1;
      const CWT_SUB = 2;
      const CWT_AUD = 3;
      const CWT_EXP = 4;
      const CWT_NBF = 5;
      const CWT_IAT = 6;
      const CWT_CTI = 7;
      const HCERT2 = -260;
      const EU_DCC = 1;
      const T_VACCINATION = "v";
      const T_TEST = "t";
      const T_RECOVERY = "r";
      payload2 = payload2.slice();
      let decodedPayload = _CWT.decode(payload2.buffer);
      payload2 = {};
      for (let [key, value] of decodedPayload) {
        switch (key) {
          case CWT_ISS:
            payload2["iss"] = value;
            break;
          case CWT_SUB:
            payload2["sub"] = value;
            break;
          case CWT_AUD:
            payload2["aud"] = value;
            break;
          case CWT_EXP:
            payload2["exp"] = value;
            break;
          case CWT_NBF:
            payload2["nbf"] = value;
            break;
          case CWT_IAT:
            payload2["iat"] = value;
            break;
          case CWT_CTI:
            payload2["cti"] = value;
            break;
          default:
            break;
        }
      }
      let hcert = decodedPayload.get(HCERT2);
      if (hcert == void 0) {
        throw "No hcert found";
      }
      let euCovid = hcert.get(EU_DCC);
      if (euCovid == void 0) {
        throw "No EU COVID certificate found";
      }
      try {
        payload2["version"] = euCovid.get("ver");
        payload2["foreName"] = euCovid.get("nam").get("fn");
        payload2["givenName"] = euCovid.get("nam").get("gn");
        payload2["fullName"] = payload2["foreName"] + ", " + payload2["givenName"];
        payload2["dateOfBirth"] = euCovid.get("dob");
      } catch (error) {
        throw `Error accessing required common fields: ${error}`;
      }
      let c;
      if (euCovid.get("v")) {
        payload2["certType"] = T_VACCINATION;
        c = euCovid.get("v")[0];
      } else if (euCovid.get("r")) {
        payload2["certType"] = T_RECOVERY;
        c = euCovid.get("r")[0];
      } else if (euCovid.get("t")) {
        payload2["certType"] = T_TEST;
        c = euCovid.get("t")[0];
      } else {
        throw `Invalid EU COVID certificate type`;
      }
      if (payload2["certType"] === T_VACCINATION) {
        payload2["diseaseTargeted"] = vs.get(c.get("tg"), "disease-agent-targeted");
        payload2["vaccineProphylaxis"] = vs.get(c.get("vp"), "vaccine-prophylaxis");
        payload2["medicinalProduct"] = vs.get(c.get("mp"), "vaccine-medicinal-product");
        payload2["manufacturer"] = vs.get(c.get("ma"), "vaccine-mah-manf");
        payload2["doseNumber"] = c.get("dn");
        payload2["doseTotal"] = c.get("sd");
        payload2["dateVaccination"] = c.get("dt");
        payload2["country"] = vs.get(c.get("co"), "country-2-codes");
        payload2["certificateIssuer"] = c.get("is");
        payload2["uniqueIdentifier"] = c.get("ci");
      } else if (payload2["certType"] === T_TEST) {
        payload2["diseaseTargeted"] = vs.get(c.get("tg"), "disease-agent-targeted");
        payload2["typeTest"] = vs.get(c.get("tt"), "test-type");
        payload2["testName"] = c.get("nm");
        payload2["manufacturer"] = vs.get(c.get("ma"), "test-manf");
        payload2["timeSample"] = c.get("sc");
        payload2["testResult"] = vs.get(c.get("tr"), "test-result");
        payload2["testingCentre"] = c.get("tc");
        payload2["country"] = vs.get(c.get("co"), "country-2-codes");
        payload2["certificateIssuer"] = c.get("is");
        payload2["uniqueIdentifier"] = c.get("ci");
      } else if (payload2["certType"] === T_RECOVERY) {
        payload2["diseaseTargeted"] = vs.get(c.get("tg"), "disease-agent-targeted");
        payload2["datePositive"] = c.get("fr");
        payload2["dateFrom"] = c.get("df");
        payload2["dateUntil"] = c.get("du");
        payload2["country"] = vs.get(c.get("co"), "country-2-codes");
        payload2["certificateIssuer"] = c.get("is");
        payload2["uniqueIdentifier"] = c.get("ci");
      }
      return payload2;
    }
    function decodePayload(payload2) {
      const CWT_ISS = 1;
      const CWT_SUB = 2;
      const CWT_AUD = 3;
      const CWT_EXP = 4;
      const CWT_NBF = 5;
      const CWT_IAT = 6;
      const CWT_CTI = 7;
      payload2 = payload2.slice();
      let decodedPayload = _CWT.decode(payload2.buffer);
      payload2 = new Map();
      for (let [key, value] of decodedPayload) {
        switch (key) {
          case CWT_ISS:
            payload2.set("iss", value);
            break;
          case CWT_SUB:
            payload2.set("sub", value);
            break;
          case CWT_AUD:
            payload2.set("aud", value);
            break;
          case CWT_EXP:
            payload2.set("exp", value);
            break;
          case CWT_NBF:
            payload2.set("nbf", value);
            break;
          case CWT_IAT:
            payload2.set("iat", value);
            break;
          case CWT_CTI:
            payload2.set("cti", value);
            break;
          default:
            break;
        }
      }
      let hcert = decodedPayload.get(-260);
      if (hcert == void 0) {
        throw "No hcert found";
      }
      let euCovid = hcert.get(1);
      if (euCovid == void 0) {
        throw "No EU COVID certificate found";
      }
      let euCovidMap = new Map();
      euCovidMap.set("euCovid", euCovid);
      payload2.set("hcert", euCovidMap);
      return payload2;
    }
    var initialByte = dataView.getUint8(0);
    var mt = initialByte >> 5;
    var additionalInformation = initialByte & 31;
    if (mt != MT_TAG) {
      throw new Error(`COSE object must start with a tag: ${mt}`);
    }
    if (additionalInformation != COSE_Sign1) {
      throw new Error(`Not a COSE Single signature, tag: ${additionalInformation}`);
    }
    data = data.slice(1);
    let [protectedHeaders, unprotectedHeaders, payload, signature] = _CWT.decode(data);
    let headers = decodeHeaders(protectedHeaders, unprotectedHeaders);
    let verified = false;
    if (verify) {
      let kid = headers["kid"];
      let k = await getTrustedKey(kid);
      if (k.list === "EU_PRO") {
        console.log(k);
        let verificationKey = await DGCKey.fromJWK(k.publicKey);
        verified = await _CWT.verifyCWT(data, verificationKey);
      } else if (k.list === "UK_PRO") {
        let verificationKey = await DGCKey.fromSPKI(k.publicKey);
        verified = await _CWT.verifyCWT(data, verificationKey);
      } else if (k.list === "EU_PREPRODUCTION") {
        verified = "PRE";
      }
    }
    payload = decodePayloadAsObject(payload);
    console.log("Payload:", payload);
    return [headers, payload, signature, verified];
  }
  static async decodeHC1QR(data, verify = false) {
    if (!data.startsWith("HC1:")) {
      throw new Error("Certificate does not start with 'HC1:'");
    }
    data = data.slice(4);
    let cvdCompressed = decodeB45(data);
    cvdCompressed = new Uint8Array(cvdCompressed);
    let coseCVD = inflate(cvdCompressed);
    let [headers, payload, signature, verified] = await _CWT.decodeCWT(coseCVD.buffer, verify);
    return [headers, payload, signature, verified];
  }
  static displayMB(ib) {
    var majorType = ib >> 5;
    var additionalInformation = ib & 31;
    var i;
    var length = additionalInformation;
    if (majorType === MT_FLOAT) {
      console.log("FLOAT");
    }
    switch (majorType) {
      case MT_INTEGER:
        console.log(`Integer ${length}`);
        return;
      case MT_NEGINTEGER:
        console.log(`Negative Integer ${-1 - length}`);
        return;
      case MT_BYTES:
        console.log(`Bstr ${length}`);
        return `Bstr ${length}`;
      case MT_UTF8:
        console.log(`String ${length}`);
        return;
      case MT_ARRAY:
        console.log(`Array ${length}`);
        return;
      case MT_MAP:
        console.log(`Map ${length}`);
        return;
      case MT_TAG:
        console.log(`Tag ${length}`);
        return;
      case 7:
        switch (length) {
          case 20:
            console.log(`FALSE`);
            return;
          case 21:
            console.log(`TRUE`);
            return;
          case 22:
            console.log(`NULL`);
            return;
          case 23:
            console.log(`UNDEFINED`);
            return;
          default:
            console.log(`Simple Value`);
            return;
        }
    }
  }
};
export let CWT = _CWT;
__publicField(CWT, "POW_2_24", 5960464477539063e-23);
__publicField(CWT, "POW_2_32", 4294967296);
__publicField(CWT, "POW_2_53", Number.MAX_SAFE_INTEGER);
export class HCERT {
  constructor() {
  }
  static async renderSummary(key, cred) {
    let hcert = await CWT.decodeHC1QR(cred["encoded"], false);
    let payload = hcert[1];
    console.log("renderSummary", cred);
    let displayName = "Unrecognized";
    let cred_date = "Unrecognized";
    if (payload["certType"] == "v") {
      displayName = "EU COVID VACCINATION";
      cred_date = payload.dateVaccination;
    } else if (payload["certType"] == "t") {
      displayName = "EU COVID TEST";
      cred_date = payload.timeSample;
    } else if (payload["certType"] == "r") {
      displayName = "EU COVID RECOVERY";
      cred_date = payload.dateFrom;
    }
    let html = `
        <div class="card my-3 shadow">
            <a onclick="displayCredentialFromKey('${key}')">
            <div class="card-body">
                <h5 class="card-title">${payload.fullName}</h5>
                <p>${displayName}</p>
                <p>${cred_date}</p>
            </div>
            </a>
        </div>
        `;
    return html;
  }
  static renderDetail(cred) {
    let payload = cred[1];
    let html = "Unrecognized";
    if (payload["certType"] == "v") {
      html = `
            <div class="container mb-2 border bg-light">
                <div class="hcert title">EU DIGITAL COVID CERTIFICATE</div>
                <div class="hcert subtitle">Vaccination</div>
            </div>

            <div class="container mb-2 border">
                <div class="mb-2">
                    <div class="etiqueta mt-3">Name</div>
                    <div class="valor mb-3">${payload.fullName}</div>
                </div>
                <div>
                    <div class="etiqueta">Date of birth</div>
                    <div class="valor">${payload.dateOfBirth}</div>
                </div>
            </div>

            <div class="container">
                <div class="hcert subtitle">Vaccination details</div>
            </div>

            <div class="container mb-2 border">
                <div class="row">
                    <div class="col">
                        <div class="etiqueta mt-3">Certificate identifier</div>
                        <div class="etiqueta mb-3 text-break"><strong>${payload.uniqueIdentifier}</strong></div>

                        <div class="etiqueta">Certificate issuer</div>
                        <div class="valor">${payload.certificateIssuer}</div>
                    </div>

                </div>
            </div>

            <div class="container mb-2 border">
                <div class="row">
                    <div class="col">
                        <div class="etiqueta mt-3">Disease targeted</div>
                    </div>
                    <div class="col">
                        <div class="valor mt-3">${payload.diseaseTargeted}</div>
                    </div>
                </div>
            </div>

            <div class="container border">

                <div class="row mb-3">

                    <div class="col-sm">
                        <div class="etiqueta mt-3">Vaccine/profilaxis targeted</div>
                        <div class="valor mb-3">${payload.vaccineProphylaxis}</div>

                        <div class="etiqueta">Vaccine medicinal product</div>
                        <div class="valor mb-3">${payload.medicinalProduct}</div>

                        <div class="etiqueta">Manufacturer</div>
                        <div class="valor">${payload.manufacturer}</div>

                    </div>

                    <div class="col-sm">
                        <div class="etiqueta mt-3">Dose number/Total doses</div>
                        <div class="valor mb-3">${payload.doseNumber}/${payload.doseTotal}</div>

                        <div class="etiqueta">Date of vaccination</div>
                        <div class="valor mb-3">${payload.dateVaccination}</div>

                        <div class="etiqueta">Member State of vaccination</div>
                        <div class="valor">${payload.country}</div>
                    </div>
                </div>

            </div>
            `;
    }
    if (payload["certType"] == "t") {
      html = `
            <div class="container mb-2 border bg-light">
                <div class="hcert title">EU DIGITAL COVID CERTIFICATE</div>
                <div class="hcert subtitle">Test</div>
            </div>

            <div class="container mb-2 border">
                <div class="mb-2">
                    <div class="etiqueta mt-3">Name</div>
                    <div class="valor mb-3">${payload.fullName}</div>
                </div>
                <div>
                    <div class="etiqueta">Date of birth</div>
                    <div class="valor">${payload.dateOfBirth}</div>
                </div>
            </div>

            <div class="container">
                <div class="hcert subtitle">Test details</div>
            </div>

            <div class="container mb-2 border">
                <div class="row">
                    <div class="col">
                        <div class="etiqueta mt-3">Certificate identifier</div>
                        <div class="etiqueta mb-3 text-break"><strong>${payload.uniqueIdentifier}</strong></div>

                        <div class="etiqueta">Certificate issuer</div>
                        <div class="valor">${payload.certificateIssuer}</div>        
                    </div>

                </div>
            </div>

            <div class="container mb-2 border">
                <div class="row">
                    <div class="col">
                        <div class="etiqueta mt-3">Disease targeted</div>
                    </div>
                    <div class="col">
                        <div class="valor mt-3">${payload.diseaseTargeted}</div>
                    </div>
                </div>
            </div>

            <div class="container border">

                <div class="row mb-3">

                    <div class="col-sm">
                        <div class="etiqueta mt-3">Test Name</div>
                        <div class="valor mb-3">${payload.typeTest}</div>

                        <div class="etiqueta">Manufacturer</div>
                        <div class="valor">${payload.manufacturer}</div>

                    </div>

                    <div class="col-sm">
                        <div class="etiqueta mt-3">Test Result</div>
                        <div class="valor mb-3">${payload.testResult}</div>

                        <div class="etiqueta">Date/Time of Sample Collection</div>
                        <div class="valor mb-3">${payload.timeSample}</div>

                        <div class="etiqueta">Testing Centre</div>
                        <div class="valor">${payload.testingCentre}</div>
                    </div>
                </div>

            </div>
            `;
    }
    if (payload["certType"] == "r") {
      html = `
            <div class="container mb-2 border bg-light">
                <div class="hcert title">EU DIGITAL COVID CERTIFICATE</div>
                <div class="hcert subtitle">Recovery</div>
            </div>
            
            <div class="container mb-2 border">
                <div class="mb-2">
                    <div class="etiqueta mt-3">Name</div>
                    <div class="valor mb-3">${payload.fullName}</div>
                </div>
                <div>
                    <div class="etiqueta">Date of birth</div>
                    <div class="valor">${payload.dateOfBirth}</div>
                </div>
            </div>
            
            <div class="container">
                <div class="hcert subtitle">Recovery details</div>
            </div>
            
            <div class="container mb-2 border">
                <div class="row">
                  <div class="col">
                    <div class="etiqueta mt-3">Disease targeted</div>
                  </div>
                  <div class="col">
                    <div class="valor mt-3">${payload.diseaseTargeted}</div>
                  </div>
                </div>
            </div>
            
            
            <div class="container border">
            
                <div class="row mb-3">
            
                    <div class="col-sm">
                        <div class="etiqueta mt-3">Date of positive</div>
                        <div class="valor mb-3">${payload.datePositive}</div>
                    </div>            
            
                    <div class="col-sm">
                        <div class="etiqueta mt-3">Valid from</div>
                        <div class="valor mb-3">${payload.dateFrom}</div>
                    </div>
            
                    <div class="col-sm">
                        <div class="etiqueta mt-3">Valid to</div>
                        <div class="valor">${payload.dateUntil}</div>
                    </div>
            
                </div>
            
            </div>
            
            <div class="container mb-2 border">
                <div class="row">
                    <div class="col">
                        <div class="etiqueta mt-3">Certificate identifier</div>
                        <div class="etiqueta mb-3 text-break"><strong>${payload.uniqueIdentifier}</strong></div>
            
                        <div class="etiqueta">Certificate issuer</div>
                        <div class="valor">${payload.certificateIssuer}</div>        
            
                        <div class="etiqueta">Country of Test</div>
                        <div class="valor">${payload.country}</div>        
            
                    </div>
            
                </div>
            </div>
            `;
    }
    return html;
  }
}
