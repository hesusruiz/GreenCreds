function fixProto(target, prototype) {
  var setPrototypeOf = Object.setPrototypeOf;
  setPrototypeOf ? setPrototypeOf(target, prototype) : target.__proto__ = prototype;
}
function fixStack(target, fn) {
  if (fn === void 0) {
    fn = target.constructor;
  }
  var captureStackTrace = Error.captureStackTrace;
  captureStackTrace && captureStackTrace(target, fn);
}
var __extends = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) {
        if (b2.hasOwnProperty(p)) {
          d2[p] = b2[p];
        }
      }
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var CustomError = function(_super) {
  __extends(CustomError2, _super);
  function CustomError2(message) {
    var _newTarget = this.constructor;
    var _this = _super.call(this, message) || this;
    Object.defineProperty(_this, "name", {
      value: _newTarget.name,
      enumerable: false,
      configurable: true
    });
    fixProto(_this, _newTarget.prototype);
    fixStack(_this);
    return _this;
  }
  return CustomError2;
}(Error);
var __extends$1 = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (b2.hasOwnProperty(p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var Exception = function(_super) {
  __extends$1(Exception2, _super);
  function Exception2(message) {
    if (message === void 0) {
      message = void 0;
    }
    var _this = _super.call(this, message) || this;
    _this.message = message;
    return _this;
  }
  Exception2.prototype.getKind = function() {
    var ex = this.constructor;
    return ex.kind;
  };
  Exception2.kind = "Exception";
  return Exception2;
}(CustomError);
var __extends$2 = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (b2.hasOwnProperty(p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var ArgumentException = function(_super) {
  __extends$2(ArgumentException2, _super);
  function ArgumentException2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  ArgumentException2.kind = "ArgumentException";
  return ArgumentException2;
}(Exception);
var __extends$3 = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (b2.hasOwnProperty(p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var IllegalArgumentException = function(_super) {
  __extends$3(IllegalArgumentException2, _super);
  function IllegalArgumentException2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  IllegalArgumentException2.kind = "IllegalArgumentException";
  return IllegalArgumentException2;
}(Exception);
var BinaryBitmap = function() {
  function BinaryBitmap2(binarizer) {
    this.binarizer = binarizer;
    if (binarizer === null) {
      throw new IllegalArgumentException("Binarizer must be non-null.");
    }
  }
  BinaryBitmap2.prototype.getWidth = function() {
    return this.binarizer.getWidth();
  };
  BinaryBitmap2.prototype.getHeight = function() {
    return this.binarizer.getHeight();
  };
  BinaryBitmap2.prototype.getBlackRow = function(y, row) {
    return this.binarizer.getBlackRow(y, row);
  };
  BinaryBitmap2.prototype.getBlackMatrix = function() {
    if (this.matrix === null || this.matrix === void 0) {
      this.matrix = this.binarizer.getBlackMatrix();
    }
    return this.matrix;
  };
  BinaryBitmap2.prototype.isCropSupported = function() {
    return this.binarizer.getLuminanceSource().isCropSupported();
  };
  BinaryBitmap2.prototype.crop = function(left, top, width, height) {
    var newSource = this.binarizer.getLuminanceSource().crop(left, top, width, height);
    return new BinaryBitmap2(this.binarizer.createBinarizer(newSource));
  };
  BinaryBitmap2.prototype.isRotateSupported = function() {
    return this.binarizer.getLuminanceSource().isRotateSupported();
  };
  BinaryBitmap2.prototype.rotateCounterClockwise = function() {
    var newSource = this.binarizer.getLuminanceSource().rotateCounterClockwise();
    return new BinaryBitmap2(this.binarizer.createBinarizer(newSource));
  };
  BinaryBitmap2.prototype.rotateCounterClockwise45 = function() {
    var newSource = this.binarizer.getLuminanceSource().rotateCounterClockwise45();
    return new BinaryBitmap2(this.binarizer.createBinarizer(newSource));
  };
  BinaryBitmap2.prototype.toString = function() {
    try {
      return this.getBlackMatrix().toString();
    } catch (e) {
      return "";
    }
  };
  return BinaryBitmap2;
}();
var __extends$4 = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (b2.hasOwnProperty(p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var ChecksumException = function(_super) {
  __extends$4(ChecksumException2, _super);
  function ChecksumException2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  ChecksumException2.getChecksumInstance = function() {
    return new ChecksumException2();
  };
  ChecksumException2.kind = "ChecksumException";
  return ChecksumException2;
}(Exception);
var Binarizer = function() {
  function Binarizer2(source) {
    this.source = source;
  }
  Binarizer2.prototype.getLuminanceSource = function() {
    return this.source;
  };
  Binarizer2.prototype.getWidth = function() {
    return this.source.getWidth();
  };
  Binarizer2.prototype.getHeight = function() {
    return this.source.getHeight();
  };
  return Binarizer2;
}();
var System = function() {
  function System2() {
  }
  System2.arraycopy = function(src, srcPos, dest, destPos, length) {
    while (length--) {
      dest[destPos++] = src[srcPos++];
    }
  };
  System2.currentTimeMillis = function() {
    return Date.now();
  };
  return System2;
}();
var __extends$5 = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (b2.hasOwnProperty(p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var IndexOutOfBoundsException = function(_super) {
  __extends$5(IndexOutOfBoundsException2, _super);
  function IndexOutOfBoundsException2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  IndexOutOfBoundsException2.kind = "IndexOutOfBoundsException";
  return IndexOutOfBoundsException2;
}(Exception);
var __extends$6 = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (b2.hasOwnProperty(p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var ArrayIndexOutOfBoundsException = function(_super) {
  __extends$6(ArrayIndexOutOfBoundsException2, _super);
  function ArrayIndexOutOfBoundsException2(index, message) {
    if (index === void 0) {
      index = void 0;
    }
    if (message === void 0) {
      message = void 0;
    }
    var _this = _super.call(this, message) || this;
    _this.index = index;
    _this.message = message;
    return _this;
  }
  ArrayIndexOutOfBoundsException2.kind = "ArrayIndexOutOfBoundsException";
  return ArrayIndexOutOfBoundsException2;
}(IndexOutOfBoundsException);
var __values = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return {value: o && o[i++], done: !o};
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var Arrays = function() {
  function Arrays2() {
  }
  Arrays2.fill = function(a, val) {
    for (var i = 0, len = a.length; i < len; i++)
      a[i] = val;
  };
  Arrays2.fillWithin = function(a, fromIndex, toIndex, val) {
    Arrays2.rangeCheck(a.length, fromIndex, toIndex);
    for (var i = fromIndex; i < toIndex; i++)
      a[i] = val;
  };
  Arrays2.rangeCheck = function(arrayLength, fromIndex, toIndex) {
    if (fromIndex > toIndex) {
      throw new IllegalArgumentException("fromIndex(" + fromIndex + ") > toIndex(" + toIndex + ")");
    }
    if (fromIndex < 0) {
      throw new ArrayIndexOutOfBoundsException(fromIndex);
    }
    if (toIndex > arrayLength) {
      throw new ArrayIndexOutOfBoundsException(toIndex);
    }
  };
  Arrays2.asList = function() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    return args;
  };
  Arrays2.create = function(rows, cols, value) {
    var arr = Array.from({length: rows});
    return arr.map(function(x) {
      return Array.from({length: cols}).fill(value);
    });
  };
  Arrays2.createInt32Array = function(rows, cols, value) {
    var arr = Array.from({length: rows});
    return arr.map(function(x) {
      return Int32Array.from({length: cols}).fill(value);
    });
  };
  Arrays2.equals = function(first, second) {
    if (!first) {
      return false;
    }
    if (!second) {
      return false;
    }
    if (!first.length) {
      return false;
    }
    if (!second.length) {
      return false;
    }
    if (first.length !== second.length) {
      return false;
    }
    for (var i = 0, length_1 = first.length; i < length_1; i++) {
      if (first[i] !== second[i]) {
        return false;
      }
    }
    return true;
  };
  Arrays2.hashCode = function(a) {
    var e_1, _a;
    if (a === null) {
      return 0;
    }
    var result = 1;
    try {
      for (var a_1 = __values(a), a_1_1 = a_1.next(); !a_1_1.done; a_1_1 = a_1.next()) {
        var element = a_1_1.value;
        result = 31 * result + element;
      }
    } catch (e_1_1) {
      e_1 = {error: e_1_1};
    } finally {
      try {
        if (a_1_1 && !a_1_1.done && (_a = a_1.return))
          _a.call(a_1);
      } finally {
        if (e_1)
          throw e_1.error;
      }
    }
    return result;
  };
  Arrays2.fillUint8Array = function(a, value) {
    for (var i = 0; i !== a.length; i++) {
      a[i] = value;
    }
  };
  Arrays2.copyOf = function(original, newLength) {
    return original.slice(0, newLength);
  };
  Arrays2.copyOfUint8Array = function(original, newLength) {
    if (original.length <= newLength) {
      var newArray = new Uint8Array(newLength);
      newArray.set(original);
      return newArray;
    }
    return original.slice(0, newLength);
  };
  Arrays2.copyOfRange = function(original, from, to) {
    var newLength = to - from;
    var copy = new Int32Array(newLength);
    System.arraycopy(original, from, copy, 0, newLength);
    return copy;
  };
  Arrays2.binarySearch = function(ar, el, comparator) {
    if (comparator === void 0) {
      comparator = Arrays2.numberComparator;
    }
    var m = 0;
    var n = ar.length - 1;
    while (m <= n) {
      var k = n + m >> 1;
      var cmp = comparator(el, ar[k]);
      if (cmp > 0) {
        m = k + 1;
      } else if (cmp < 0) {
        n = k - 1;
      } else {
        return k;
      }
    }
    return -m - 1;
  };
  Arrays2.numberComparator = function(a, b) {
    return a - b;
  };
  return Arrays2;
}();
var Integer = function() {
  function Integer2() {
  }
  Integer2.numberOfTrailingZeros = function(i) {
    var y;
    if (i === 0)
      return 32;
    var n = 31;
    y = i << 16;
    if (y !== 0) {
      n -= 16;
      i = y;
    }
    y = i << 8;
    if (y !== 0) {
      n -= 8;
      i = y;
    }
    y = i << 4;
    if (y !== 0) {
      n -= 4;
      i = y;
    }
    y = i << 2;
    if (y !== 0) {
      n -= 2;
      i = y;
    }
    return n - (i << 1 >>> 31);
  };
  Integer2.numberOfLeadingZeros = function(i) {
    if (i === 0) {
      return 32;
    }
    var n = 1;
    if (i >>> 16 === 0) {
      n += 16;
      i <<= 16;
    }
    if (i >>> 24 === 0) {
      n += 8;
      i <<= 8;
    }
    if (i >>> 28 === 0) {
      n += 4;
      i <<= 4;
    }
    if (i >>> 30 === 0) {
      n += 2;
      i <<= 2;
    }
    n -= i >>> 31;
    return n;
  };
  Integer2.toHexString = function(i) {
    return i.toString(16);
  };
  Integer2.toBinaryString = function(intNumber) {
    return String(parseInt(String(intNumber), 2));
  };
  Integer2.bitCount = function(i) {
    i = i - (i >>> 1 & 1431655765);
    i = (i & 858993459) + (i >>> 2 & 858993459);
    i = i + (i >>> 4) & 252645135;
    i = i + (i >>> 8);
    i = i + (i >>> 16);
    return i & 63;
  };
  Integer2.truncDivision = function(dividend, divisor) {
    return Math.trunc(dividend / divisor);
  };
  Integer2.parseInt = function(num, radix) {
    if (radix === void 0) {
      radix = void 0;
    }
    return parseInt(num, radix);
  };
  Integer2.MIN_VALUE_32_BITS = -2147483648;
  Integer2.MAX_VALUE = Number.MAX_SAFE_INTEGER;
  return Integer2;
}();
var BitArray = function() {
  function BitArray2(size, bits) {
    if (size === void 0) {
      this.size = 0;
      this.bits = new Int32Array(1);
    } else {
      this.size = size;
      if (bits === void 0 || bits === null) {
        this.bits = BitArray2.makeArray(size);
      } else {
        this.bits = bits;
      }
    }
  }
  BitArray2.prototype.getSize = function() {
    return this.size;
  };
  BitArray2.prototype.getSizeInBytes = function() {
    return Math.floor((this.size + 7) / 8);
  };
  BitArray2.prototype.ensureCapacity = function(size) {
    if (size > this.bits.length * 32) {
      var newBits = BitArray2.makeArray(size);
      System.arraycopy(this.bits, 0, newBits, 0, this.bits.length);
      this.bits = newBits;
    }
  };
  BitArray2.prototype.get = function(i) {
    return (this.bits[Math.floor(i / 32)] & 1 << (i & 31)) !== 0;
  };
  BitArray2.prototype.set = function(i) {
    this.bits[Math.floor(i / 32)] |= 1 << (i & 31);
  };
  BitArray2.prototype.flip = function(i) {
    this.bits[Math.floor(i / 32)] ^= 1 << (i & 31);
  };
  BitArray2.prototype.getNextSet = function(from) {
    var size = this.size;
    if (from >= size) {
      return size;
    }
    var bits = this.bits;
    var bitsOffset = Math.floor(from / 32);
    var currentBits = bits[bitsOffset];
    currentBits &= ~((1 << (from & 31)) - 1);
    var length = bits.length;
    while (currentBits === 0) {
      if (++bitsOffset === length) {
        return size;
      }
      currentBits = bits[bitsOffset];
    }
    var result = bitsOffset * 32 + Integer.numberOfTrailingZeros(currentBits);
    return result > size ? size : result;
  };
  BitArray2.prototype.getNextUnset = function(from) {
    var size = this.size;
    if (from >= size) {
      return size;
    }
    var bits = this.bits;
    var bitsOffset = Math.floor(from / 32);
    var currentBits = ~bits[bitsOffset];
    currentBits &= ~((1 << (from & 31)) - 1);
    var length = bits.length;
    while (currentBits === 0) {
      if (++bitsOffset === length) {
        return size;
      }
      currentBits = ~bits[bitsOffset];
    }
    var result = bitsOffset * 32 + Integer.numberOfTrailingZeros(currentBits);
    return result > size ? size : result;
  };
  BitArray2.prototype.setBulk = function(i, newBits) {
    this.bits[Math.floor(i / 32)] = newBits;
  };
  BitArray2.prototype.setRange = function(start, end) {
    if (end < start || start < 0 || end > this.size) {
      throw new IllegalArgumentException();
    }
    if (end === start) {
      return;
    }
    end--;
    var firstInt = Math.floor(start / 32);
    var lastInt = Math.floor(end / 32);
    var bits = this.bits;
    for (var i = firstInt; i <= lastInt; i++) {
      var firstBit = i > firstInt ? 0 : start & 31;
      var lastBit = i < lastInt ? 31 : end & 31;
      var mask = (2 << lastBit) - (1 << firstBit);
      bits[i] |= mask;
    }
  };
  BitArray2.prototype.clear = function() {
    var max = this.bits.length;
    var bits = this.bits;
    for (var i = 0; i < max; i++) {
      bits[i] = 0;
    }
  };
  BitArray2.prototype.isRange = function(start, end, value) {
    if (end < start || start < 0 || end > this.size) {
      throw new IllegalArgumentException();
    }
    if (end === start) {
      return true;
    }
    end--;
    var firstInt = Math.floor(start / 32);
    var lastInt = Math.floor(end / 32);
    var bits = this.bits;
    for (var i = firstInt; i <= lastInt; i++) {
      var firstBit = i > firstInt ? 0 : start & 31;
      var lastBit = i < lastInt ? 31 : end & 31;
      var mask = (2 << lastBit) - (1 << firstBit) & 4294967295;
      if ((bits[i] & mask) !== (value ? mask : 0)) {
        return false;
      }
    }
    return true;
  };
  BitArray2.prototype.appendBit = function(bit) {
    this.ensureCapacity(this.size + 1);
    if (bit) {
      this.bits[Math.floor(this.size / 32)] |= 1 << (this.size & 31);
    }
    this.size++;
  };
  BitArray2.prototype.appendBits = function(value, numBits) {
    if (numBits < 0 || numBits > 32) {
      throw new IllegalArgumentException("Num bits must be between 0 and 32");
    }
    this.ensureCapacity(this.size + numBits);
    for (var numBitsLeft = numBits; numBitsLeft > 0; numBitsLeft--) {
      this.appendBit((value >> numBitsLeft - 1 & 1) === 1);
    }
  };
  BitArray2.prototype.appendBitArray = function(other) {
    var otherSize = other.size;
    this.ensureCapacity(this.size + otherSize);
    for (var i = 0; i < otherSize; i++) {
      this.appendBit(other.get(i));
    }
  };
  BitArray2.prototype.xor = function(other) {
    if (this.size !== other.size) {
      throw new IllegalArgumentException("Sizes don't match");
    }
    var bits = this.bits;
    for (var i = 0, length_1 = bits.length; i < length_1; i++) {
      bits[i] ^= other.bits[i];
    }
  };
  BitArray2.prototype.toBytes = function(bitOffset, array, offset, numBytes) {
    for (var i = 0; i < numBytes; i++) {
      var theByte = 0;
      for (var j = 0; j < 8; j++) {
        if (this.get(bitOffset)) {
          theByte |= 1 << 7 - j;
        }
        bitOffset++;
      }
      array[offset + i] = theByte;
    }
  };
  BitArray2.prototype.getBitArray = function() {
    return this.bits;
  };
  BitArray2.prototype.reverse = function() {
    var newBits = new Int32Array(this.bits.length);
    var len = Math.floor((this.size - 1) / 32);
    var oldBitsLen = len + 1;
    var bits = this.bits;
    for (var i = 0; i < oldBitsLen; i++) {
      var x = bits[i];
      x = x >> 1 & 1431655765 | (x & 1431655765) << 1;
      x = x >> 2 & 858993459 | (x & 858993459) << 2;
      x = x >> 4 & 252645135 | (x & 252645135) << 4;
      x = x >> 8 & 16711935 | (x & 16711935) << 8;
      x = x >> 16 & 65535 | (x & 65535) << 16;
      newBits[len - i] = x;
    }
    if (this.size !== oldBitsLen * 32) {
      var leftOffset = oldBitsLen * 32 - this.size;
      var currentInt = newBits[0] >>> leftOffset;
      for (var i = 1; i < oldBitsLen; i++) {
        var nextInt = newBits[i];
        currentInt |= nextInt << 32 - leftOffset;
        newBits[i - 1] = currentInt;
        currentInt = nextInt >>> leftOffset;
      }
      newBits[oldBitsLen - 1] = currentInt;
    }
    this.bits = newBits;
  };
  BitArray2.makeArray = function(size) {
    return new Int32Array(Math.floor((size + 31) / 32));
  };
  BitArray2.prototype.equals = function(o) {
    if (!(o instanceof BitArray2)) {
      return false;
    }
    var other = o;
    return this.size === other.size && Arrays.equals(this.bits, other.bits);
  };
  BitArray2.prototype.hashCode = function() {
    return 31 * this.size + Arrays.hashCode(this.bits);
  };
  BitArray2.prototype.toString = function() {
    var result = "";
    for (var i = 0, size = this.size; i < size; i++) {
      if ((i & 7) === 0) {
        result += " ";
      }
      result += this.get(i) ? "X" : ".";
    }
    return result;
  };
  BitArray2.prototype.clone = function() {
    return new BitArray2(this.size, this.bits.slice());
  };
  return BitArray2;
}();
var DecodeHintType;
(function(DecodeHintType2) {
  DecodeHintType2[DecodeHintType2["OTHER"] = 0] = "OTHER";
  DecodeHintType2[DecodeHintType2["PURE_BARCODE"] = 1] = "PURE_BARCODE";
  DecodeHintType2[DecodeHintType2["POSSIBLE_FORMATS"] = 2] = "POSSIBLE_FORMATS";
  DecodeHintType2[DecodeHintType2["TRY_HARDER"] = 3] = "TRY_HARDER";
  DecodeHintType2[DecodeHintType2["CHARACTER_SET"] = 4] = "CHARACTER_SET";
  DecodeHintType2[DecodeHintType2["ALLOWED_LENGTHS"] = 5] = "ALLOWED_LENGTHS";
  DecodeHintType2[DecodeHintType2["ASSUME_CODE_39_CHECK_DIGIT"] = 6] = "ASSUME_CODE_39_CHECK_DIGIT";
  DecodeHintType2[DecodeHintType2["ASSUME_GS1"] = 7] = "ASSUME_GS1";
  DecodeHintType2[DecodeHintType2["RETURN_CODABAR_START_END"] = 8] = "RETURN_CODABAR_START_END";
  DecodeHintType2[DecodeHintType2["NEED_RESULT_POINT_CALLBACK"] = 9] = "NEED_RESULT_POINT_CALLBACK";
  DecodeHintType2[DecodeHintType2["ALLOWED_EAN_EXTENSIONS"] = 10] = "ALLOWED_EAN_EXTENSIONS";
})(DecodeHintType || (DecodeHintType = {}));
var DecodeHintType$1 = DecodeHintType;
var __extends$7 = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (b2.hasOwnProperty(p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var FormatException = function(_super) {
  __extends$7(FormatException2, _super);
  function FormatException2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  FormatException2.getFormatInstance = function() {
    return new FormatException2();
  };
  FormatException2.kind = "FormatException";
  return FormatException2;
}(Exception);
var __values$1 = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return {value: o && o[i++], done: !o};
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var CharacterSetValueIdentifiers;
(function(CharacterSetValueIdentifiers2) {
  CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["Cp437"] = 0] = "Cp437";
  CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["ISO8859_1"] = 1] = "ISO8859_1";
  CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["ISO8859_2"] = 2] = "ISO8859_2";
  CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["ISO8859_3"] = 3] = "ISO8859_3";
  CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["ISO8859_4"] = 4] = "ISO8859_4";
  CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["ISO8859_5"] = 5] = "ISO8859_5";
  CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["ISO8859_6"] = 6] = "ISO8859_6";
  CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["ISO8859_7"] = 7] = "ISO8859_7";
  CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["ISO8859_8"] = 8] = "ISO8859_8";
  CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["ISO8859_9"] = 9] = "ISO8859_9";
  CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["ISO8859_10"] = 10] = "ISO8859_10";
  CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["ISO8859_11"] = 11] = "ISO8859_11";
  CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["ISO8859_13"] = 12] = "ISO8859_13";
  CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["ISO8859_14"] = 13] = "ISO8859_14";
  CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["ISO8859_15"] = 14] = "ISO8859_15";
  CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["ISO8859_16"] = 15] = "ISO8859_16";
  CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["SJIS"] = 16] = "SJIS";
  CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["Cp1250"] = 17] = "Cp1250";
  CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["Cp1251"] = 18] = "Cp1251";
  CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["Cp1252"] = 19] = "Cp1252";
  CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["Cp1256"] = 20] = "Cp1256";
  CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["UnicodeBigUnmarked"] = 21] = "UnicodeBigUnmarked";
  CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["UTF8"] = 22] = "UTF8";
  CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["ASCII"] = 23] = "ASCII";
  CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["Big5"] = 24] = "Big5";
  CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["GB18030"] = 25] = "GB18030";
  CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["EUC_KR"] = 26] = "EUC_KR";
})(CharacterSetValueIdentifiers || (CharacterSetValueIdentifiers = {}));
var CharacterSetECI = function() {
  function CharacterSetECI2(valueIdentifier, valuesParam, name) {
    var e_1, _a;
    var otherEncodingNames = [];
    for (var _i = 3; _i < arguments.length; _i++) {
      otherEncodingNames[_i - 3] = arguments[_i];
    }
    this.valueIdentifier = valueIdentifier;
    this.name = name;
    if (typeof valuesParam === "number") {
      this.values = Int32Array.from([valuesParam]);
    } else {
      this.values = valuesParam;
    }
    this.otherEncodingNames = otherEncodingNames;
    CharacterSetECI2.VALUE_IDENTIFIER_TO_ECI.set(valueIdentifier, this);
    CharacterSetECI2.NAME_TO_ECI.set(name, this);
    var values = this.values;
    for (var i = 0, length_1 = values.length; i !== length_1; i++) {
      var v = values[i];
      CharacterSetECI2.VALUES_TO_ECI.set(v, this);
    }
    try {
      for (var otherEncodingNames_1 = __values$1(otherEncodingNames), otherEncodingNames_1_1 = otherEncodingNames_1.next(); !otherEncodingNames_1_1.done; otherEncodingNames_1_1 = otherEncodingNames_1.next()) {
        var otherName = otherEncodingNames_1_1.value;
        CharacterSetECI2.NAME_TO_ECI.set(otherName, this);
      }
    } catch (e_1_1) {
      e_1 = {error: e_1_1};
    } finally {
      try {
        if (otherEncodingNames_1_1 && !otherEncodingNames_1_1.done && (_a = otherEncodingNames_1.return))
          _a.call(otherEncodingNames_1);
      } finally {
        if (e_1)
          throw e_1.error;
      }
    }
  }
  CharacterSetECI2.prototype.getValueIdentifier = function() {
    return this.valueIdentifier;
  };
  CharacterSetECI2.prototype.getName = function() {
    return this.name;
  };
  CharacterSetECI2.prototype.getValue = function() {
    return this.values[0];
  };
  CharacterSetECI2.getCharacterSetECIByValue = function(value) {
    if (value < 0 || value >= 900) {
      throw new FormatException("incorect value");
    }
    var characterSet = CharacterSetECI2.VALUES_TO_ECI.get(value);
    if (characterSet === void 0) {
      throw new FormatException("incorect value");
    }
    return characterSet;
  };
  CharacterSetECI2.getCharacterSetECIByName = function(name) {
    var characterSet = CharacterSetECI2.NAME_TO_ECI.get(name);
    if (characterSet === void 0) {
      throw new FormatException("incorect value");
    }
    return characterSet;
  };
  CharacterSetECI2.prototype.equals = function(o) {
    if (!(o instanceof CharacterSetECI2)) {
      return false;
    }
    var other = o;
    return this.getName() === other.getName();
  };
  CharacterSetECI2.VALUE_IDENTIFIER_TO_ECI = new Map();
  CharacterSetECI2.VALUES_TO_ECI = new Map();
  CharacterSetECI2.NAME_TO_ECI = new Map();
  CharacterSetECI2.Cp437 = new CharacterSetECI2(CharacterSetValueIdentifiers.Cp437, Int32Array.from([0, 2]), "Cp437");
  CharacterSetECI2.ISO8859_1 = new CharacterSetECI2(CharacterSetValueIdentifiers.ISO8859_1, Int32Array.from([1, 3]), "ISO-8859-1", "ISO88591", "ISO8859_1");
  CharacterSetECI2.ISO8859_2 = new CharacterSetECI2(CharacterSetValueIdentifiers.ISO8859_2, 4, "ISO-8859-2", "ISO88592", "ISO8859_2");
  CharacterSetECI2.ISO8859_3 = new CharacterSetECI2(CharacterSetValueIdentifiers.ISO8859_3, 5, "ISO-8859-3", "ISO88593", "ISO8859_3");
  CharacterSetECI2.ISO8859_4 = new CharacterSetECI2(CharacterSetValueIdentifiers.ISO8859_4, 6, "ISO-8859-4", "ISO88594", "ISO8859_4");
  CharacterSetECI2.ISO8859_5 = new CharacterSetECI2(CharacterSetValueIdentifiers.ISO8859_5, 7, "ISO-8859-5", "ISO88595", "ISO8859_5");
  CharacterSetECI2.ISO8859_6 = new CharacterSetECI2(CharacterSetValueIdentifiers.ISO8859_6, 8, "ISO-8859-6", "ISO88596", "ISO8859_6");
  CharacterSetECI2.ISO8859_7 = new CharacterSetECI2(CharacterSetValueIdentifiers.ISO8859_7, 9, "ISO-8859-7", "ISO88597", "ISO8859_7");
  CharacterSetECI2.ISO8859_8 = new CharacterSetECI2(CharacterSetValueIdentifiers.ISO8859_8, 10, "ISO-8859-8", "ISO88598", "ISO8859_8");
  CharacterSetECI2.ISO8859_9 = new CharacterSetECI2(CharacterSetValueIdentifiers.ISO8859_9, 11, "ISO-8859-9", "ISO88599", "ISO8859_9");
  CharacterSetECI2.ISO8859_10 = new CharacterSetECI2(CharacterSetValueIdentifiers.ISO8859_10, 12, "ISO-8859-10", "ISO885910", "ISO8859_10");
  CharacterSetECI2.ISO8859_11 = new CharacterSetECI2(CharacterSetValueIdentifiers.ISO8859_11, 13, "ISO-8859-11", "ISO885911", "ISO8859_11");
  CharacterSetECI2.ISO8859_13 = new CharacterSetECI2(CharacterSetValueIdentifiers.ISO8859_13, 15, "ISO-8859-13", "ISO885913", "ISO8859_13");
  CharacterSetECI2.ISO8859_14 = new CharacterSetECI2(CharacterSetValueIdentifiers.ISO8859_14, 16, "ISO-8859-14", "ISO885914", "ISO8859_14");
  CharacterSetECI2.ISO8859_15 = new CharacterSetECI2(CharacterSetValueIdentifiers.ISO8859_15, 17, "ISO-8859-15", "ISO885915", "ISO8859_15");
  CharacterSetECI2.ISO8859_16 = new CharacterSetECI2(CharacterSetValueIdentifiers.ISO8859_16, 18, "ISO-8859-16", "ISO885916", "ISO8859_16");
  CharacterSetECI2.SJIS = new CharacterSetECI2(CharacterSetValueIdentifiers.SJIS, 20, "SJIS", "Shift_JIS");
  CharacterSetECI2.Cp1250 = new CharacterSetECI2(CharacterSetValueIdentifiers.Cp1250, 21, "Cp1250", "windows-1250");
  CharacterSetECI2.Cp1251 = new CharacterSetECI2(CharacterSetValueIdentifiers.Cp1251, 22, "Cp1251", "windows-1251");
  CharacterSetECI2.Cp1252 = new CharacterSetECI2(CharacterSetValueIdentifiers.Cp1252, 23, "Cp1252", "windows-1252");
  CharacterSetECI2.Cp1256 = new CharacterSetECI2(CharacterSetValueIdentifiers.Cp1256, 24, "Cp1256", "windows-1256");
  CharacterSetECI2.UnicodeBigUnmarked = new CharacterSetECI2(CharacterSetValueIdentifiers.UnicodeBigUnmarked, 25, "UnicodeBigUnmarked", "UTF-16BE", "UnicodeBig");
  CharacterSetECI2.UTF8 = new CharacterSetECI2(CharacterSetValueIdentifiers.UTF8, 26, "UTF8", "UTF-8");
  CharacterSetECI2.ASCII = new CharacterSetECI2(CharacterSetValueIdentifiers.ASCII, Int32Array.from([27, 170]), "ASCII", "US-ASCII");
  CharacterSetECI2.Big5 = new CharacterSetECI2(CharacterSetValueIdentifiers.Big5, 28, "Big5");
  CharacterSetECI2.GB18030 = new CharacterSetECI2(CharacterSetValueIdentifiers.GB18030, 29, "GB18030", "GB2312", "EUC_CN", "GBK");
  CharacterSetECI2.EUC_KR = new CharacterSetECI2(CharacterSetValueIdentifiers.EUC_KR, 30, "EUC_KR", "EUC-KR");
  return CharacterSetECI2;
}();
var __extends$8 = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (b2.hasOwnProperty(p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var UnsupportedOperationException = function(_super) {
  __extends$8(UnsupportedOperationException2, _super);
  function UnsupportedOperationException2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  UnsupportedOperationException2.kind = "UnsupportedOperationException";
  return UnsupportedOperationException2;
}(Exception);
var StringEncoding = function() {
  function StringEncoding2() {
  }
  StringEncoding2.decode = function(bytes, encoding) {
    var encodingName = this.encodingName(encoding);
    if (this.customDecoder) {
      return this.customDecoder(bytes, encodingName);
    }
    if (typeof TextDecoder === "undefined" || this.shouldDecodeOnFallback(encodingName)) {
      return this.decodeFallback(bytes, encodingName);
    }
    return new TextDecoder(encodingName).decode(bytes);
  };
  StringEncoding2.shouldDecodeOnFallback = function(encodingName) {
    return !StringEncoding2.isBrowser() && encodingName === "ISO-8859-1";
  };
  StringEncoding2.encode = function(s, encoding) {
    var encodingName = this.encodingName(encoding);
    if (this.customEncoder) {
      return this.customEncoder(s, encodingName);
    }
    if (typeof TextEncoder === "undefined") {
      return this.encodeFallback(s);
    }
    return new TextEncoder().encode(s);
  };
  StringEncoding2.isBrowser = function() {
    return typeof window !== "undefined" && {}.toString.call(window) === "[object Window]";
  };
  StringEncoding2.encodingName = function(encoding) {
    return typeof encoding === "string" ? encoding : encoding.getName();
  };
  StringEncoding2.encodingCharacterSet = function(encoding) {
    if (encoding instanceof CharacterSetECI) {
      return encoding;
    }
    return CharacterSetECI.getCharacterSetECIByName(encoding);
  };
  StringEncoding2.decodeFallback = function(bytes, encoding) {
    var characterSet = this.encodingCharacterSet(encoding);
    if (StringEncoding2.isDecodeFallbackSupported(characterSet)) {
      var s = "";
      for (var i = 0, length_1 = bytes.length; i < length_1; i++) {
        var h = bytes[i].toString(16);
        if (h.length < 2) {
          h = "0" + h;
        }
        s += "%" + h;
      }
      return decodeURIComponent(s);
    }
    if (characterSet.equals(CharacterSetECI.UnicodeBigUnmarked)) {
      return String.fromCharCode.apply(null, new Uint16Array(bytes.buffer));
    }
    throw new UnsupportedOperationException("Encoding " + this.encodingName(encoding) + " not supported by fallback.");
  };
  StringEncoding2.isDecodeFallbackSupported = function(characterSet) {
    return characterSet.equals(CharacterSetECI.UTF8) || characterSet.equals(CharacterSetECI.ISO8859_1) || characterSet.equals(CharacterSetECI.ASCII);
  };
  StringEncoding2.encodeFallback = function(s) {
    var encodedURIstring = btoa(unescape(encodeURIComponent(s)));
    var charList = encodedURIstring.split("");
    var uintArray = [];
    for (var i = 0; i < charList.length; i++) {
      uintArray.push(charList[i].charCodeAt(0));
    }
    return new Uint8Array(uintArray);
  };
  return StringEncoding2;
}();
var StringUtils = function() {
  function StringUtils2() {
  }
  StringUtils2.castAsNonUtf8Char = function(code, encoding) {
    if (encoding === void 0) {
      encoding = null;
    }
    var e = encoding ? encoding.getName() : this.ISO88591;
    return StringEncoding.decode(new Uint8Array([code]), e);
  };
  StringUtils2.guessEncoding = function(bytes, hints) {
    if (hints !== null && hints !== void 0 && hints.get(DecodeHintType$1.CHARACTER_SET) !== void 0) {
      return hints.get(DecodeHintType$1.CHARACTER_SET).toString();
    }
    var length = bytes.length;
    var canBeISO88591 = true;
    var canBeShiftJIS = true;
    var canBeUTF8 = true;
    var utf8BytesLeft = 0;
    var utf2BytesChars = 0;
    var utf3BytesChars = 0;
    var utf4BytesChars = 0;
    var sjisBytesLeft = 0;
    var sjisKatakanaChars = 0;
    var sjisCurKatakanaWordLength = 0;
    var sjisCurDoubleBytesWordLength = 0;
    var sjisMaxKatakanaWordLength = 0;
    var sjisMaxDoubleBytesWordLength = 0;
    var isoHighOther = 0;
    var utf8bom = bytes.length > 3 && bytes[0] === 239 && bytes[1] === 187 && bytes[2] === 191;
    for (var i = 0; i < length && (canBeISO88591 || canBeShiftJIS || canBeUTF8); i++) {
      var value = bytes[i] & 255;
      if (canBeUTF8) {
        if (utf8BytesLeft > 0) {
          if ((value & 128) === 0) {
            canBeUTF8 = false;
          } else {
            utf8BytesLeft--;
          }
        } else if ((value & 128) !== 0) {
          if ((value & 64) === 0) {
            canBeUTF8 = false;
          } else {
            utf8BytesLeft++;
            if ((value & 32) === 0) {
              utf2BytesChars++;
            } else {
              utf8BytesLeft++;
              if ((value & 16) === 0) {
                utf3BytesChars++;
              } else {
                utf8BytesLeft++;
                if ((value & 8) === 0) {
                  utf4BytesChars++;
                } else {
                  canBeUTF8 = false;
                }
              }
            }
          }
        }
      }
      if (canBeISO88591) {
        if (value > 127 && value < 160) {
          canBeISO88591 = false;
        } else if (value > 159) {
          if (value < 192 || value === 215 || value === 247) {
            isoHighOther++;
          }
        }
      }
      if (canBeShiftJIS) {
        if (sjisBytesLeft > 0) {
          if (value < 64 || value === 127 || value > 252) {
            canBeShiftJIS = false;
          } else {
            sjisBytesLeft--;
          }
        } else if (value === 128 || value === 160 || value > 239) {
          canBeShiftJIS = false;
        } else if (value > 160 && value < 224) {
          sjisKatakanaChars++;
          sjisCurDoubleBytesWordLength = 0;
          sjisCurKatakanaWordLength++;
          if (sjisCurKatakanaWordLength > sjisMaxKatakanaWordLength) {
            sjisMaxKatakanaWordLength = sjisCurKatakanaWordLength;
          }
        } else if (value > 127) {
          sjisBytesLeft++;
          sjisCurKatakanaWordLength = 0;
          sjisCurDoubleBytesWordLength++;
          if (sjisCurDoubleBytesWordLength > sjisMaxDoubleBytesWordLength) {
            sjisMaxDoubleBytesWordLength = sjisCurDoubleBytesWordLength;
          }
        } else {
          sjisCurKatakanaWordLength = 0;
          sjisCurDoubleBytesWordLength = 0;
        }
      }
    }
    if (canBeUTF8 && utf8BytesLeft > 0) {
      canBeUTF8 = false;
    }
    if (canBeShiftJIS && sjisBytesLeft > 0) {
      canBeShiftJIS = false;
    }
    if (canBeUTF8 && (utf8bom || utf2BytesChars + utf3BytesChars + utf4BytesChars > 0)) {
      return StringUtils2.UTF8;
    }
    if (canBeShiftJIS && (StringUtils2.ASSUME_SHIFT_JIS || sjisMaxKatakanaWordLength >= 3 || sjisMaxDoubleBytesWordLength >= 3)) {
      return StringUtils2.SHIFT_JIS;
    }
    if (canBeISO88591 && canBeShiftJIS) {
      return sjisMaxKatakanaWordLength === 2 && sjisKatakanaChars === 2 || isoHighOther * 10 >= length ? StringUtils2.SHIFT_JIS : StringUtils2.ISO88591;
    }
    if (canBeISO88591) {
      return StringUtils2.ISO88591;
    }
    if (canBeShiftJIS) {
      return StringUtils2.SHIFT_JIS;
    }
    if (canBeUTF8) {
      return StringUtils2.UTF8;
    }
    return StringUtils2.PLATFORM_DEFAULT_ENCODING;
  };
  StringUtils2.format = function(append) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i];
    }
    var i = -1;
    function callback(exp, p0, p1, p2, p3, p4) {
      if (exp === "%%")
        return "%";
      if (args[++i] === void 0)
        return void 0;
      exp = p2 ? parseInt(p2.substr(1)) : void 0;
      var base = p3 ? parseInt(p3.substr(1)) : void 0;
      var val;
      switch (p4) {
        case "s":
          val = args[i];
          break;
        case "c":
          val = args[i][0];
          break;
        case "f":
          val = parseFloat(args[i]).toFixed(exp);
          break;
        case "p":
          val = parseFloat(args[i]).toPrecision(exp);
          break;
        case "e":
          val = parseFloat(args[i]).toExponential(exp);
          break;
        case "x":
          val = parseInt(args[i]).toString(base ? base : 16);
          break;
        case "d":
          val = parseFloat(parseInt(args[i], base ? base : 10).toPrecision(exp)).toFixed(0);
          break;
      }
      val = typeof val === "object" ? JSON.stringify(val) : (+val).toString(base);
      var size = parseInt(p1);
      var ch = p1 && p1[0] + "" === "0" ? "0" : " ";
      while (val.length < size)
        val = p0 !== void 0 ? val + ch : ch + val;
      return val;
    }
    var regex = /%(-)?(0?[0-9]+)?([.][0-9]+)?([#][0-9]+)?([scfpexd%])/g;
    return append.replace(regex, callback);
  };
  StringUtils2.getBytes = function(str, encoding) {
    return StringEncoding.encode(str, encoding);
  };
  StringUtils2.getCharCode = function(str, index) {
    if (index === void 0) {
      index = 0;
    }
    return str.charCodeAt(index);
  };
  StringUtils2.getCharAt = function(charCode) {
    return String.fromCharCode(charCode);
  };
  StringUtils2.SHIFT_JIS = CharacterSetECI.SJIS.getName();
  StringUtils2.GB2312 = "GB2312";
  StringUtils2.ISO88591 = CharacterSetECI.ISO8859_1.getName();
  StringUtils2.EUC_JP = "EUC_JP";
  StringUtils2.UTF8 = CharacterSetECI.UTF8.getName();
  StringUtils2.PLATFORM_DEFAULT_ENCODING = StringUtils2.UTF8;
  StringUtils2.ASSUME_SHIFT_JIS = false;
  return StringUtils2;
}();
var StringBuilder = function() {
  function StringBuilder2(value) {
    if (value === void 0) {
      value = "";
    }
    this.value = value;
  }
  StringBuilder2.prototype.enableDecoding = function(encoding) {
    this.encoding = encoding;
    return this;
  };
  StringBuilder2.prototype.append = function(s) {
    if (typeof s === "string") {
      this.value += s.toString();
    } else if (this.encoding) {
      this.value += StringUtils.castAsNonUtf8Char(s, this.encoding);
    } else {
      this.value += String.fromCharCode(s);
    }
    return this;
  };
  StringBuilder2.prototype.appendChars = function(str, offset, len) {
    for (var i = offset; offset < offset + len; i++) {
      this.append(str[i]);
    }
    return this;
  };
  StringBuilder2.prototype.length = function() {
    return this.value.length;
  };
  StringBuilder2.prototype.charAt = function(n) {
    return this.value.charAt(n);
  };
  StringBuilder2.prototype.deleteCharAt = function(n) {
    this.value = this.value.substr(0, n) + this.value.substring(n + 1);
  };
  StringBuilder2.prototype.setCharAt = function(n, c) {
    this.value = this.value.substr(0, n) + c + this.value.substr(n + 1);
  };
  StringBuilder2.prototype.substring = function(start, end) {
    return this.value.substring(start, end);
  };
  StringBuilder2.prototype.setLengthToZero = function() {
    this.value = "";
  };
  StringBuilder2.prototype.toString = function() {
    return this.value;
  };
  StringBuilder2.prototype.insert = function(n, c) {
    this.value = this.value.substr(0, n) + c + this.value.substr(n + c.length);
  };
  return StringBuilder2;
}();
var BitMatrix = function() {
  function BitMatrix2(width, height, rowSize, bits) {
    this.width = width;
    this.height = height;
    this.rowSize = rowSize;
    this.bits = bits;
    if (height === void 0 || height === null) {
      height = width;
    }
    this.height = height;
    if (width < 1 || height < 1) {
      throw new IllegalArgumentException("Both dimensions must be greater than 0");
    }
    if (rowSize === void 0 || rowSize === null) {
      rowSize = Math.floor((width + 31) / 32);
    }
    this.rowSize = rowSize;
    if (bits === void 0 || bits === null) {
      this.bits = new Int32Array(this.rowSize * this.height);
    }
  }
  BitMatrix2.parseFromBooleanArray = function(image) {
    var height = image.length;
    var width = image[0].length;
    var bits = new BitMatrix2(width, height);
    for (var i = 0; i < height; i++) {
      var imageI = image[i];
      for (var j = 0; j < width; j++) {
        if (imageI[j]) {
          bits.set(j, i);
        }
      }
    }
    return bits;
  };
  BitMatrix2.parseFromString = function(stringRepresentation, setString, unsetString) {
    if (stringRepresentation === null) {
      throw new IllegalArgumentException("stringRepresentation cannot be null");
    }
    var bits = new Array(stringRepresentation.length);
    var bitsPos = 0;
    var rowStartPos = 0;
    var rowLength = -1;
    var nRows = 0;
    var pos = 0;
    while (pos < stringRepresentation.length) {
      if (stringRepresentation.charAt(pos) === "\n" || stringRepresentation.charAt(pos) === "\r") {
        if (bitsPos > rowStartPos) {
          if (rowLength === -1) {
            rowLength = bitsPos - rowStartPos;
          } else if (bitsPos - rowStartPos !== rowLength) {
            throw new IllegalArgumentException("row lengths do not match");
          }
          rowStartPos = bitsPos;
          nRows++;
        }
        pos++;
      } else if (stringRepresentation.substring(pos, pos + setString.length) === setString) {
        pos += setString.length;
        bits[bitsPos] = true;
        bitsPos++;
      } else if (stringRepresentation.substring(pos, pos + unsetString.length) === unsetString) {
        pos += unsetString.length;
        bits[bitsPos] = false;
        bitsPos++;
      } else {
        throw new IllegalArgumentException("illegal character encountered: " + stringRepresentation.substring(pos));
      }
    }
    if (bitsPos > rowStartPos) {
      if (rowLength === -1) {
        rowLength = bitsPos - rowStartPos;
      } else if (bitsPos - rowStartPos !== rowLength) {
        throw new IllegalArgumentException("row lengths do not match");
      }
      nRows++;
    }
    var matrix = new BitMatrix2(rowLength, nRows);
    for (var i = 0; i < bitsPos; i++) {
      if (bits[i]) {
        matrix.set(Math.floor(i % rowLength), Math.floor(i / rowLength));
      }
    }
    return matrix;
  };
  BitMatrix2.prototype.get = function(x, y) {
    var offset = y * this.rowSize + Math.floor(x / 32);
    return (this.bits[offset] >>> (x & 31) & 1) !== 0;
  };
  BitMatrix2.prototype.set = function(x, y) {
    var offset = y * this.rowSize + Math.floor(x / 32);
    this.bits[offset] |= 1 << (x & 31) & 4294967295;
  };
  BitMatrix2.prototype.unset = function(x, y) {
    var offset = y * this.rowSize + Math.floor(x / 32);
    this.bits[offset] &= ~(1 << (x & 31) & 4294967295);
  };
  BitMatrix2.prototype.flip = function(x, y) {
    var offset = y * this.rowSize + Math.floor(x / 32);
    this.bits[offset] ^= 1 << (x & 31) & 4294967295;
  };
  BitMatrix2.prototype.xor = function(mask) {
    if (this.width !== mask.getWidth() || this.height !== mask.getHeight() || this.rowSize !== mask.getRowSize()) {
      throw new IllegalArgumentException("input matrix dimensions do not match");
    }
    var rowArray = new BitArray(Math.floor(this.width / 32) + 1);
    var rowSize = this.rowSize;
    var bits = this.bits;
    for (var y = 0, height = this.height; y < height; y++) {
      var offset = y * rowSize;
      var row = mask.getRow(y, rowArray).getBitArray();
      for (var x = 0; x < rowSize; x++) {
        bits[offset + x] ^= row[x];
      }
    }
  };
  BitMatrix2.prototype.clear = function() {
    var bits = this.bits;
    var max = bits.length;
    for (var i = 0; i < max; i++) {
      bits[i] = 0;
    }
  };
  BitMatrix2.prototype.setRegion = function(left, top, width, height) {
    if (top < 0 || left < 0) {
      throw new IllegalArgumentException("Left and top must be nonnegative");
    }
    if (height < 1 || width < 1) {
      throw new IllegalArgumentException("Height and width must be at least 1");
    }
    var right = left + width;
    var bottom = top + height;
    if (bottom > this.height || right > this.width) {
      throw new IllegalArgumentException("The region must fit inside the matrix");
    }
    var rowSize = this.rowSize;
    var bits = this.bits;
    for (var y = top; y < bottom; y++) {
      var offset = y * rowSize;
      for (var x = left; x < right; x++) {
        bits[offset + Math.floor(x / 32)] |= 1 << (x & 31) & 4294967295;
      }
    }
  };
  BitMatrix2.prototype.getRow = function(y, row) {
    if (row === null || row === void 0 || row.getSize() < this.width) {
      row = new BitArray(this.width);
    } else {
      row.clear();
    }
    var rowSize = this.rowSize;
    var bits = this.bits;
    var offset = y * rowSize;
    for (var x = 0; x < rowSize; x++) {
      row.setBulk(x * 32, bits[offset + x]);
    }
    return row;
  };
  BitMatrix2.prototype.setRow = function(y, row) {
    System.arraycopy(row.getBitArray(), 0, this.bits, y * this.rowSize, this.rowSize);
  };
  BitMatrix2.prototype.rotate180 = function() {
    var width = this.getWidth();
    var height = this.getHeight();
    var topRow = new BitArray(width);
    var bottomRow = new BitArray(width);
    for (var i = 0, length_1 = Math.floor((height + 1) / 2); i < length_1; i++) {
      topRow = this.getRow(i, topRow);
      bottomRow = this.getRow(height - 1 - i, bottomRow);
      topRow.reverse();
      bottomRow.reverse();
      this.setRow(i, bottomRow);
      this.setRow(height - 1 - i, topRow);
    }
  };
  BitMatrix2.prototype.getEnclosingRectangle = function() {
    var width = this.width;
    var height = this.height;
    var rowSize = this.rowSize;
    var bits = this.bits;
    var left = width;
    var top = height;
    var right = -1;
    var bottom = -1;
    for (var y = 0; y < height; y++) {
      for (var x32 = 0; x32 < rowSize; x32++) {
        var theBits = bits[y * rowSize + x32];
        if (theBits !== 0) {
          if (y < top) {
            top = y;
          }
          if (y > bottom) {
            bottom = y;
          }
          if (x32 * 32 < left) {
            var bit = 0;
            while ((theBits << 31 - bit & 4294967295) === 0) {
              bit++;
            }
            if (x32 * 32 + bit < left) {
              left = x32 * 32 + bit;
            }
          }
          if (x32 * 32 + 31 > right) {
            var bit = 31;
            while (theBits >>> bit === 0) {
              bit--;
            }
            if (x32 * 32 + bit > right) {
              right = x32 * 32 + bit;
            }
          }
        }
      }
    }
    if (right < left || bottom < top) {
      return null;
    }
    return Int32Array.from([left, top, right - left + 1, bottom - top + 1]);
  };
  BitMatrix2.prototype.getTopLeftOnBit = function() {
    var rowSize = this.rowSize;
    var bits = this.bits;
    var bitsOffset = 0;
    while (bitsOffset < bits.length && bits[bitsOffset] === 0) {
      bitsOffset++;
    }
    if (bitsOffset === bits.length) {
      return null;
    }
    var y = bitsOffset / rowSize;
    var x = bitsOffset % rowSize * 32;
    var theBits = bits[bitsOffset];
    var bit = 0;
    while ((theBits << 31 - bit & 4294967295) === 0) {
      bit++;
    }
    x += bit;
    return Int32Array.from([x, y]);
  };
  BitMatrix2.prototype.getBottomRightOnBit = function() {
    var rowSize = this.rowSize;
    var bits = this.bits;
    var bitsOffset = bits.length - 1;
    while (bitsOffset >= 0 && bits[bitsOffset] === 0) {
      bitsOffset--;
    }
    if (bitsOffset < 0) {
      return null;
    }
    var y = Math.floor(bitsOffset / rowSize);
    var x = Math.floor(bitsOffset % rowSize) * 32;
    var theBits = bits[bitsOffset];
    var bit = 31;
    while (theBits >>> bit === 0) {
      bit--;
    }
    x += bit;
    return Int32Array.from([x, y]);
  };
  BitMatrix2.prototype.getWidth = function() {
    return this.width;
  };
  BitMatrix2.prototype.getHeight = function() {
    return this.height;
  };
  BitMatrix2.prototype.getRowSize = function() {
    return this.rowSize;
  };
  BitMatrix2.prototype.equals = function(o) {
    if (!(o instanceof BitMatrix2)) {
      return false;
    }
    var other = o;
    return this.width === other.width && this.height === other.height && this.rowSize === other.rowSize && Arrays.equals(this.bits, other.bits);
  };
  BitMatrix2.prototype.hashCode = function() {
    var hash = this.width;
    hash = 31 * hash + this.width;
    hash = 31 * hash + this.height;
    hash = 31 * hash + this.rowSize;
    hash = 31 * hash + Arrays.hashCode(this.bits);
    return hash;
  };
  BitMatrix2.prototype.toString = function(setString, unsetString, lineSeparator) {
    if (setString === void 0) {
      setString = "X ";
    }
    if (unsetString === void 0) {
      unsetString = "  ";
    }
    if (lineSeparator === void 0) {
      lineSeparator = "\n";
    }
    return this.buildToString(setString, unsetString, lineSeparator);
  };
  BitMatrix2.prototype.buildToString = function(setString, unsetString, lineSeparator) {
    var result = new StringBuilder();
    for (var y = 0, height = this.height; y < height; y++) {
      for (var x = 0, width = this.width; x < width; x++) {
        result.append(this.get(x, y) ? setString : unsetString);
      }
      result.append(lineSeparator);
    }
    return result.toString();
  };
  BitMatrix2.prototype.clone = function() {
    return new BitMatrix2(this.width, this.height, this.rowSize, this.bits.slice());
  };
  return BitMatrix2;
}();
var __extends$9 = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (b2.hasOwnProperty(p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var NotFoundException = function(_super) {
  __extends$9(NotFoundException2, _super);
  function NotFoundException2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  NotFoundException2.getNotFoundInstance = function() {
    return new NotFoundException2();
  };
  NotFoundException2.kind = "NotFoundException";
  return NotFoundException2;
}(Exception);
var __extends$a = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (b2.hasOwnProperty(p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var GlobalHistogramBinarizer = function(_super) {
  __extends$a(GlobalHistogramBinarizer2, _super);
  function GlobalHistogramBinarizer2(source) {
    var _this = _super.call(this, source) || this;
    _this.luminances = GlobalHistogramBinarizer2.EMPTY;
    _this.buckets = new Int32Array(GlobalHistogramBinarizer2.LUMINANCE_BUCKETS);
    return _this;
  }
  GlobalHistogramBinarizer2.prototype.getBlackRow = function(y, row) {
    var source = this.getLuminanceSource();
    var width = source.getWidth();
    if (row === void 0 || row === null || row.getSize() < width) {
      row = new BitArray(width);
    } else {
      row.clear();
    }
    this.initArrays(width);
    var localLuminances = source.getRow(y, this.luminances);
    var localBuckets = this.buckets;
    for (var x = 0; x < width; x++) {
      localBuckets[(localLuminances[x] & 255) >> GlobalHistogramBinarizer2.LUMINANCE_SHIFT]++;
    }
    var blackPoint = GlobalHistogramBinarizer2.estimateBlackPoint(localBuckets);
    if (width < 3) {
      for (var x = 0; x < width; x++) {
        if ((localLuminances[x] & 255) < blackPoint) {
          row.set(x);
        }
      }
    } else {
      var left = localLuminances[0] & 255;
      var center = localLuminances[1] & 255;
      for (var x = 1; x < width - 1; x++) {
        var right = localLuminances[x + 1] & 255;
        if ((center * 4 - left - right) / 2 < blackPoint) {
          row.set(x);
        }
        left = center;
        center = right;
      }
    }
    return row;
  };
  GlobalHistogramBinarizer2.prototype.getBlackMatrix = function() {
    var source = this.getLuminanceSource();
    var width = source.getWidth();
    var height = source.getHeight();
    var matrix = new BitMatrix(width, height);
    this.initArrays(width);
    var localBuckets = this.buckets;
    for (var y = 1; y < 5; y++) {
      var row = Math.floor(height * y / 5);
      var localLuminances_1 = source.getRow(row, this.luminances);
      var right = Math.floor(width * 4 / 5);
      for (var x = Math.floor(width / 5); x < right; x++) {
        var pixel = localLuminances_1[x] & 255;
        localBuckets[pixel >> GlobalHistogramBinarizer2.LUMINANCE_SHIFT]++;
      }
    }
    var blackPoint = GlobalHistogramBinarizer2.estimateBlackPoint(localBuckets);
    var localLuminances = source.getMatrix();
    for (var y = 0; y < height; y++) {
      var offset = y * width;
      for (var x = 0; x < width; x++) {
        var pixel = localLuminances[offset + x] & 255;
        if (pixel < blackPoint) {
          matrix.set(x, y);
        }
      }
    }
    return matrix;
  };
  GlobalHistogramBinarizer2.prototype.createBinarizer = function(source) {
    return new GlobalHistogramBinarizer2(source);
  };
  GlobalHistogramBinarizer2.prototype.initArrays = function(luminanceSize) {
    if (this.luminances.length < luminanceSize) {
      this.luminances = new Uint8ClampedArray(luminanceSize);
    }
    var buckets = this.buckets;
    for (var x = 0; x < GlobalHistogramBinarizer2.LUMINANCE_BUCKETS; x++) {
      buckets[x] = 0;
    }
  };
  GlobalHistogramBinarizer2.estimateBlackPoint = function(buckets) {
    var numBuckets = buckets.length;
    var maxBucketCount = 0;
    var firstPeak = 0;
    var firstPeakSize = 0;
    for (var x = 0; x < numBuckets; x++) {
      if (buckets[x] > firstPeakSize) {
        firstPeak = x;
        firstPeakSize = buckets[x];
      }
      if (buckets[x] > maxBucketCount) {
        maxBucketCount = buckets[x];
      }
    }
    var secondPeak = 0;
    var secondPeakScore = 0;
    for (var x = 0; x < numBuckets; x++) {
      var distanceToBiggest = x - firstPeak;
      var score = buckets[x] * distanceToBiggest * distanceToBiggest;
      if (score > secondPeakScore) {
        secondPeak = x;
        secondPeakScore = score;
      }
    }
    if (firstPeak > secondPeak) {
      var temp = firstPeak;
      firstPeak = secondPeak;
      secondPeak = temp;
    }
    if (secondPeak - firstPeak <= numBuckets / 16) {
      throw new NotFoundException();
    }
    var bestValley = secondPeak - 1;
    var bestValleyScore = -1;
    for (var x = secondPeak - 1; x > firstPeak; x--) {
      var fromFirst = x - firstPeak;
      var score = fromFirst * fromFirst * (secondPeak - x) * (maxBucketCount - buckets[x]);
      if (score > bestValleyScore) {
        bestValley = x;
        bestValleyScore = score;
      }
    }
    return bestValley << GlobalHistogramBinarizer2.LUMINANCE_SHIFT;
  };
  GlobalHistogramBinarizer2.LUMINANCE_BITS = 5;
  GlobalHistogramBinarizer2.LUMINANCE_SHIFT = 8 - GlobalHistogramBinarizer2.LUMINANCE_BITS;
  GlobalHistogramBinarizer2.LUMINANCE_BUCKETS = 1 << GlobalHistogramBinarizer2.LUMINANCE_BITS;
  GlobalHistogramBinarizer2.EMPTY = Uint8ClampedArray.from([0]);
  return GlobalHistogramBinarizer2;
}(Binarizer);
var __extends$b = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (b2.hasOwnProperty(p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var HybridBinarizer = function(_super) {
  __extends$b(HybridBinarizer2, _super);
  function HybridBinarizer2(source) {
    var _this = _super.call(this, source) || this;
    _this.matrix = null;
    return _this;
  }
  HybridBinarizer2.prototype.getBlackMatrix = function() {
    if (this.matrix !== null) {
      return this.matrix;
    }
    var source = this.getLuminanceSource();
    var width = source.getWidth();
    var height = source.getHeight();
    if (width >= HybridBinarizer2.MINIMUM_DIMENSION && height >= HybridBinarizer2.MINIMUM_DIMENSION) {
      var luminances = source.getMatrix();
      var subWidth = width >> HybridBinarizer2.BLOCK_SIZE_POWER;
      if ((width & HybridBinarizer2.BLOCK_SIZE_MASK) !== 0) {
        subWidth++;
      }
      var subHeight = height >> HybridBinarizer2.BLOCK_SIZE_POWER;
      if ((height & HybridBinarizer2.BLOCK_SIZE_MASK) !== 0) {
        subHeight++;
      }
      var blackPoints = HybridBinarizer2.calculateBlackPoints(luminances, subWidth, subHeight, width, height);
      var newMatrix = new BitMatrix(width, height);
      HybridBinarizer2.calculateThresholdForBlock(luminances, subWidth, subHeight, width, height, blackPoints, newMatrix);
      this.matrix = newMatrix;
    } else {
      this.matrix = _super.prototype.getBlackMatrix.call(this);
    }
    return this.matrix;
  };
  HybridBinarizer2.prototype.createBinarizer = function(source) {
    return new HybridBinarizer2(source);
  };
  HybridBinarizer2.calculateThresholdForBlock = function(luminances, subWidth, subHeight, width, height, blackPoints, matrix) {
    var maxYOffset = height - HybridBinarizer2.BLOCK_SIZE;
    var maxXOffset = width - HybridBinarizer2.BLOCK_SIZE;
    for (var y = 0; y < subHeight; y++) {
      var yoffset = y << HybridBinarizer2.BLOCK_SIZE_POWER;
      if (yoffset > maxYOffset) {
        yoffset = maxYOffset;
      }
      var top_1 = HybridBinarizer2.cap(y, 2, subHeight - 3);
      for (var x = 0; x < subWidth; x++) {
        var xoffset = x << HybridBinarizer2.BLOCK_SIZE_POWER;
        if (xoffset > maxXOffset) {
          xoffset = maxXOffset;
        }
        var left = HybridBinarizer2.cap(x, 2, subWidth - 3);
        var sum = 0;
        for (var z = -2; z <= 2; z++) {
          var blackRow = blackPoints[top_1 + z];
          sum += blackRow[left - 2] + blackRow[left - 1] + blackRow[left] + blackRow[left + 1] + blackRow[left + 2];
        }
        var average = sum / 25;
        HybridBinarizer2.thresholdBlock(luminances, xoffset, yoffset, average, width, matrix);
      }
    }
  };
  HybridBinarizer2.cap = function(value, min, max) {
    return value < min ? min : value > max ? max : value;
  };
  HybridBinarizer2.thresholdBlock = function(luminances, xoffset, yoffset, threshold, stride, matrix) {
    for (var y = 0, offset = yoffset * stride + xoffset; y < HybridBinarizer2.BLOCK_SIZE; y++, offset += stride) {
      for (var x = 0; x < HybridBinarizer2.BLOCK_SIZE; x++) {
        if ((luminances[offset + x] & 255) <= threshold) {
          matrix.set(xoffset + x, yoffset + y);
        }
      }
    }
  };
  HybridBinarizer2.calculateBlackPoints = function(luminances, subWidth, subHeight, width, height) {
    var maxYOffset = height - HybridBinarizer2.BLOCK_SIZE;
    var maxXOffset = width - HybridBinarizer2.BLOCK_SIZE;
    var blackPoints = new Array(subHeight);
    for (var y = 0; y < subHeight; y++) {
      blackPoints[y] = new Int32Array(subWidth);
      var yoffset = y << HybridBinarizer2.BLOCK_SIZE_POWER;
      if (yoffset > maxYOffset) {
        yoffset = maxYOffset;
      }
      for (var x = 0; x < subWidth; x++) {
        var xoffset = x << HybridBinarizer2.BLOCK_SIZE_POWER;
        if (xoffset > maxXOffset) {
          xoffset = maxXOffset;
        }
        var sum = 0;
        var min = 255;
        var max = 0;
        for (var yy = 0, offset = yoffset * width + xoffset; yy < HybridBinarizer2.BLOCK_SIZE; yy++, offset += width) {
          for (var xx = 0; xx < HybridBinarizer2.BLOCK_SIZE; xx++) {
            var pixel = luminances[offset + xx] & 255;
            sum += pixel;
            if (pixel < min) {
              min = pixel;
            }
            if (pixel > max) {
              max = pixel;
            }
          }
          if (max - min > HybridBinarizer2.MIN_DYNAMIC_RANGE) {
            for (yy++, offset += width; yy < HybridBinarizer2.BLOCK_SIZE; yy++, offset += width) {
              for (var xx = 0; xx < HybridBinarizer2.BLOCK_SIZE; xx++) {
                sum += luminances[offset + xx] & 255;
              }
            }
          }
        }
        var average = sum >> HybridBinarizer2.BLOCK_SIZE_POWER * 2;
        if (max - min <= HybridBinarizer2.MIN_DYNAMIC_RANGE) {
          average = min / 2;
          if (y > 0 && x > 0) {
            var averageNeighborBlackPoint = (blackPoints[y - 1][x] + 2 * blackPoints[y][x - 1] + blackPoints[y - 1][x - 1]) / 4;
            if (min < averageNeighborBlackPoint) {
              average = averageNeighborBlackPoint;
            }
          }
        }
        blackPoints[y][x] = average;
      }
    }
    return blackPoints;
  };
  HybridBinarizer2.BLOCK_SIZE_POWER = 3;
  HybridBinarizer2.BLOCK_SIZE = 1 << HybridBinarizer2.BLOCK_SIZE_POWER;
  HybridBinarizer2.BLOCK_SIZE_MASK = HybridBinarizer2.BLOCK_SIZE - 1;
  HybridBinarizer2.MINIMUM_DIMENSION = HybridBinarizer2.BLOCK_SIZE * 5;
  HybridBinarizer2.MIN_DYNAMIC_RANGE = 24;
  return HybridBinarizer2;
}(GlobalHistogramBinarizer);
var LuminanceSource = function() {
  function LuminanceSource2(width, height) {
    this.width = width;
    this.height = height;
  }
  LuminanceSource2.prototype.getWidth = function() {
    return this.width;
  };
  LuminanceSource2.prototype.getHeight = function() {
    return this.height;
  };
  LuminanceSource2.prototype.isCropSupported = function() {
    return false;
  };
  LuminanceSource2.prototype.crop = function(left, top, width, height) {
    throw new UnsupportedOperationException("This luminance source does not support cropping.");
  };
  LuminanceSource2.prototype.isRotateSupported = function() {
    return false;
  };
  LuminanceSource2.prototype.rotateCounterClockwise = function() {
    throw new UnsupportedOperationException("This luminance source does not support rotation by 90 degrees.");
  };
  LuminanceSource2.prototype.rotateCounterClockwise45 = function() {
    throw new UnsupportedOperationException("This luminance source does not support rotation by 45 degrees.");
  };
  LuminanceSource2.prototype.toString = function() {
    var row = new Uint8ClampedArray(this.width);
    var result = new StringBuilder();
    for (var y = 0; y < this.height; y++) {
      var sourceRow = this.getRow(y, row);
      for (var x = 0; x < this.width; x++) {
        var luminance = sourceRow[x] & 255;
        var c = void 0;
        if (luminance < 64) {
          c = "#";
        } else if (luminance < 128) {
          c = "+";
        } else if (luminance < 192) {
          c = ".";
        } else {
          c = " ";
        }
        result.append(c);
      }
      result.append("\n");
    }
    return result.toString();
  };
  return LuminanceSource2;
}();
var __extends$c = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (b2.hasOwnProperty(p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var InvertedLuminanceSource = function(_super) {
  __extends$c(InvertedLuminanceSource2, _super);
  function InvertedLuminanceSource2(delegate) {
    var _this = _super.call(this, delegate.getWidth(), delegate.getHeight()) || this;
    _this.delegate = delegate;
    return _this;
  }
  InvertedLuminanceSource2.prototype.getRow = function(y, row) {
    var sourceRow = this.delegate.getRow(y, row);
    var width = this.getWidth();
    for (var i = 0; i < width; i++) {
      sourceRow[i] = 255 - (sourceRow[i] & 255);
    }
    return sourceRow;
  };
  InvertedLuminanceSource2.prototype.getMatrix = function() {
    var matrix = this.delegate.getMatrix();
    var length = this.getWidth() * this.getHeight();
    var invertedMatrix = new Uint8ClampedArray(length);
    for (var i = 0; i < length; i++) {
      invertedMatrix[i] = 255 - (matrix[i] & 255);
    }
    return invertedMatrix;
  };
  InvertedLuminanceSource2.prototype.isCropSupported = function() {
    return this.delegate.isCropSupported();
  };
  InvertedLuminanceSource2.prototype.crop = function(left, top, width, height) {
    return new InvertedLuminanceSource2(this.delegate.crop(left, top, width, height));
  };
  InvertedLuminanceSource2.prototype.isRotateSupported = function() {
    return this.delegate.isRotateSupported();
  };
  InvertedLuminanceSource2.prototype.invert = function() {
    return this.delegate;
  };
  InvertedLuminanceSource2.prototype.rotateCounterClockwise = function() {
    return new InvertedLuminanceSource2(this.delegate.rotateCounterClockwise());
  };
  InvertedLuminanceSource2.prototype.rotateCounterClockwise45 = function() {
    return new InvertedLuminanceSource2(this.delegate.rotateCounterClockwise45());
  };
  return InvertedLuminanceSource2;
}(LuminanceSource);
var __extends$d = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (b2.hasOwnProperty(p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var HTMLCanvasElementLuminanceSource = function(_super) {
  __extends$d(HTMLCanvasElementLuminanceSource2, _super);
  function HTMLCanvasElementLuminanceSource2(canvas) {
    var _this = _super.call(this, canvas.width, canvas.height) || this;
    _this.canvas = canvas;
    _this.tempCanvasElement = null;
    _this.buffer = HTMLCanvasElementLuminanceSource2.makeBufferFromCanvasImageData(canvas);
    return _this;
  }
  HTMLCanvasElementLuminanceSource2.makeBufferFromCanvasImageData = function(canvas) {
    var imageData = canvas.getContext("2d").getImageData(0, 0, canvas.width, canvas.height);
    return HTMLCanvasElementLuminanceSource2.toGrayscaleBuffer(imageData.data, canvas.width, canvas.height);
  };
  HTMLCanvasElementLuminanceSource2.toGrayscaleBuffer = function(imageBuffer, width, height) {
    var grayscaleBuffer = new Uint8ClampedArray(width * height);
    for (var i = 0, j = 0, length_1 = imageBuffer.length; i < length_1; i += 4, j++) {
      var gray = void 0;
      var alpha = imageBuffer[i + 3];
      if (alpha === 0) {
        gray = 255;
      } else {
        var pixelR = imageBuffer[i];
        var pixelG = imageBuffer[i + 1];
        var pixelB = imageBuffer[i + 2];
        gray = 306 * pixelR + 601 * pixelG + 117 * pixelB + 512 >> 10;
      }
      grayscaleBuffer[j] = gray;
    }
    return grayscaleBuffer;
  };
  HTMLCanvasElementLuminanceSource2.prototype.getRow = function(y, row) {
    if (y < 0 || y >= this.getHeight()) {
      throw new IllegalArgumentException("Requested row is outside the image: " + y);
    }
    var width = this.getWidth();
    var start = y * width;
    if (row === null) {
      row = this.buffer.slice(start, start + width);
    } else {
      if (row.length < width) {
        row = new Uint8ClampedArray(width);
      }
      row.set(this.buffer.slice(start, start + width));
    }
    return row;
  };
  HTMLCanvasElementLuminanceSource2.prototype.getMatrix = function() {
    return this.buffer;
  };
  HTMLCanvasElementLuminanceSource2.prototype.isCropSupported = function() {
    return true;
  };
  HTMLCanvasElementLuminanceSource2.prototype.crop = function(left, top, width, height) {
    _super.prototype.crop.call(this, left, top, width, height);
    return this;
  };
  HTMLCanvasElementLuminanceSource2.prototype.isRotateSupported = function() {
    return true;
  };
  HTMLCanvasElementLuminanceSource2.prototype.rotateCounterClockwise = function() {
    this.rotate(-90);
    return this;
  };
  HTMLCanvasElementLuminanceSource2.prototype.rotateCounterClockwise45 = function() {
    this.rotate(-45);
    return this;
  };
  HTMLCanvasElementLuminanceSource2.prototype.getTempCanvasElement = function() {
    if (this.tempCanvasElement === null) {
      var tempCanvasElement = this.canvas.ownerDocument.createElement("canvas");
      tempCanvasElement.width = this.canvas.width;
      tempCanvasElement.height = this.canvas.height;
      this.tempCanvasElement = tempCanvasElement;
    }
    return this.tempCanvasElement;
  };
  HTMLCanvasElementLuminanceSource2.prototype.rotate = function(angle) {
    var tempCanvasElement = this.getTempCanvasElement();
    var tempContext = tempCanvasElement.getContext("2d");
    var angleRadians = angle * HTMLCanvasElementLuminanceSource2.DEGREE_TO_RADIANS;
    var width = this.canvas.width;
    var height = this.canvas.height;
    var newWidth = Math.ceil(Math.abs(Math.cos(angleRadians)) * width + Math.abs(Math.sin(angleRadians)) * height);
    var newHeight = Math.ceil(Math.abs(Math.sin(angleRadians)) * width + Math.abs(Math.cos(angleRadians)) * height);
    tempCanvasElement.width = newWidth;
    tempCanvasElement.height = newHeight;
    tempContext.translate(newWidth / 2, newHeight / 2);
    tempContext.rotate(angleRadians);
    tempContext.drawImage(this.canvas, width / -2, height / -2);
    this.buffer = HTMLCanvasElementLuminanceSource2.makeBufferFromCanvasImageData(tempCanvasElement);
    return this;
  };
  HTMLCanvasElementLuminanceSource2.prototype.invert = function() {
    return new InvertedLuminanceSource(this);
  };
  HTMLCanvasElementLuminanceSource2.DEGREE_TO_RADIANS = Math.PI / 180;
  return HTMLCanvasElementLuminanceSource2;
}(LuminanceSource);
var VideoInputDevice = function() {
  function VideoInputDevice2(deviceId, label, groupId) {
    this.deviceId = deviceId;
    this.label = label;
    this.kind = "videoinput";
    this.groupId = groupId || void 0;
  }
  VideoInputDevice2.prototype.toJSON = function() {
    return {
      kind: this.kind,
      groupId: this.groupId,
      deviceId: this.deviceId,
      label: this.label
    };
  };
  return VideoInputDevice2;
}();
var __awaiter = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = function(thisArg, body) {
  var _ = {label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: []}, f, y, t, g;
  return g = {next: verb(0), throw: verb(1), return: verb(2)}, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f)
      throw new TypeError("Generator is already executing.");
    while (_)
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
          return t;
        if (y = 0, t)
          op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return {value: op[1], done: false};
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2])
              _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return {value: op[0] ? op[1] : void 0, done: true};
  }
};
var __values$2 = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return {value: o && o[i++], done: !o};
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var BrowserCodeReader = function() {
  function BrowserCodeReader2(reader, timeBetweenScansMillis, _hints) {
    if (timeBetweenScansMillis === void 0) {
      timeBetweenScansMillis = 500;
    }
    this.reader = reader;
    this.timeBetweenScansMillis = timeBetweenScansMillis;
    this._hints = _hints;
    this._stopContinuousDecode = false;
    this._stopAsyncDecode = false;
    this._timeBetweenDecodingAttempts = 0;
  }
  Object.defineProperty(BrowserCodeReader2.prototype, "hasNavigator", {
    get: function() {
      return typeof navigator !== "undefined";
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(BrowserCodeReader2.prototype, "isMediaDevicesSuported", {
    get: function() {
      return this.hasNavigator && !!navigator.mediaDevices;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(BrowserCodeReader2.prototype, "canEnumerateDevices", {
    get: function() {
      return !!(this.isMediaDevicesSuported && navigator.mediaDevices.enumerateDevices);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(BrowserCodeReader2.prototype, "timeBetweenDecodingAttempts", {
    get: function() {
      return this._timeBetweenDecodingAttempts;
    },
    set: function(millis) {
      this._timeBetweenDecodingAttempts = millis < 0 ? 0 : millis;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(BrowserCodeReader2.prototype, "hints", {
    get: function() {
      return this._hints;
    },
    set: function(hints) {
      this._hints = hints || null;
    },
    enumerable: false,
    configurable: true
  });
  BrowserCodeReader2.prototype.listVideoInputDevices = function() {
    return __awaiter(this, void 0, void 0, function() {
      var devices, videoDevices, devices_1, devices_1_1, device, kind, deviceId, label, groupId, videoDevice;
      var e_1, _a;
      return __generator(this, function(_b) {
        switch (_b.label) {
          case 0:
            if (!this.hasNavigator) {
              throw new Error("Can't enumerate devices, navigator is not present.");
            }
            if (!this.canEnumerateDevices) {
              throw new Error("Can't enumerate devices, method not supported.");
            }
            return [4, navigator.mediaDevices.enumerateDevices()];
          case 1:
            devices = _b.sent();
            videoDevices = [];
            try {
              for (devices_1 = __values$2(devices), devices_1_1 = devices_1.next(); !devices_1_1.done; devices_1_1 = devices_1.next()) {
                device = devices_1_1.value;
                kind = device.kind === "video" ? "videoinput" : device.kind;
                if (kind !== "videoinput") {
                  continue;
                }
                deviceId = device.deviceId || device.id;
                label = device.label || "Video device " + (videoDevices.length + 1);
                groupId = device.groupId;
                videoDevice = {deviceId, label, kind, groupId};
                videoDevices.push(videoDevice);
              }
            } catch (e_1_1) {
              e_1 = {error: e_1_1};
            } finally {
              try {
                if (devices_1_1 && !devices_1_1.done && (_a = devices_1.return))
                  _a.call(devices_1);
              } finally {
                if (e_1)
                  throw e_1.error;
              }
            }
            return [2, videoDevices];
        }
      });
    });
  };
  BrowserCodeReader2.prototype.getVideoInputDevices = function() {
    return __awaiter(this, void 0, void 0, function() {
      var devices;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            return [4, this.listVideoInputDevices()];
          case 1:
            devices = _a.sent();
            return [2, devices.map(function(d) {
              return new VideoInputDevice(d.deviceId, d.label);
            })];
        }
      });
    });
  };
  BrowserCodeReader2.prototype.findDeviceById = function(deviceId) {
    return __awaiter(this, void 0, void 0, function() {
      var devices;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            return [4, this.listVideoInputDevices()];
          case 1:
            devices = _a.sent();
            if (!devices) {
              return [2, null];
            }
            return [2, devices.find(function(x) {
              return x.deviceId === deviceId;
            })];
        }
      });
    });
  };
  BrowserCodeReader2.prototype.decodeFromInputVideoDevice = function(deviceId, videoSource) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            return [4, this.decodeOnceFromVideoDevice(deviceId, videoSource)];
          case 1:
            return [2, _a.sent()];
        }
      });
    });
  };
  BrowserCodeReader2.prototype.decodeOnceFromVideoDevice = function(deviceId, videoSource) {
    return __awaiter(this, void 0, void 0, function() {
      var videoConstraints, constraints;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            this.reset();
            if (!deviceId) {
              videoConstraints = {facingMode: "environment"};
            } else {
              videoConstraints = {deviceId: {exact: deviceId}};
            }
            constraints = {video: videoConstraints};
            return [4, this.decodeOnceFromConstraints(constraints, videoSource)];
          case 1:
            return [2, _a.sent()];
        }
      });
    });
  };
  BrowserCodeReader2.prototype.decodeOnceFromConstraints = function(constraints, videoSource) {
    return __awaiter(this, void 0, void 0, function() {
      var stream;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            return [4, navigator.mediaDevices.getUserMedia(constraints)];
          case 1:
            stream = _a.sent();
            return [4, this.decodeOnceFromStream(stream, videoSource)];
          case 2:
            return [2, _a.sent()];
        }
      });
    });
  };
  BrowserCodeReader2.prototype.decodeOnceFromStream = function(stream, videoSource) {
    return __awaiter(this, void 0, void 0, function() {
      var video, result;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            this.reset();
            return [4, this.attachStreamToVideo(stream, videoSource)];
          case 1:
            video = _a.sent();
            return [4, this.decodeOnce(video)];
          case 2:
            result = _a.sent();
            return [2, result];
        }
      });
    });
  };
  BrowserCodeReader2.prototype.decodeFromInputVideoDeviceContinuously = function(deviceId, videoSource, callbackFn) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            return [4, this.decodeFromVideoDevice(deviceId, videoSource, callbackFn)];
          case 1:
            return [2, _a.sent()];
        }
      });
    });
  };
  BrowserCodeReader2.prototype.decodeFromVideoDevice = function(deviceId, videoSource, callbackFn) {
    return __awaiter(this, void 0, void 0, function() {
      var videoConstraints, constraints;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            if (!deviceId) {
              videoConstraints = {facingMode: "environment"};
            } else {
              videoConstraints = {deviceId: {exact: deviceId}};
            }
            constraints = {video: videoConstraints};
            return [4, this.decodeFromConstraints(constraints, videoSource, callbackFn)];
          case 1:
            return [2, _a.sent()];
        }
      });
    });
  };
  BrowserCodeReader2.prototype.decodeFromConstraints = function(constraints, videoSource, callbackFn) {
    return __awaiter(this, void 0, void 0, function() {
      var stream;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            return [4, navigator.mediaDevices.getUserMedia(constraints)];
          case 1:
            stream = _a.sent();
            return [4, this.decodeFromStream(stream, videoSource, callbackFn)];
          case 2:
            return [2, _a.sent()];
        }
      });
    });
  };
  BrowserCodeReader2.prototype.decodeFromStream = function(stream, videoSource, callbackFn) {
    return __awaiter(this, void 0, void 0, function() {
      var video;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            this.reset();
            return [4, this.attachStreamToVideo(stream, videoSource)];
          case 1:
            video = _a.sent();
            return [4, this.decodeContinuously(video, callbackFn)];
          case 2:
            return [2, _a.sent()];
        }
      });
    });
  };
  BrowserCodeReader2.prototype.stopAsyncDecode = function() {
    this._stopAsyncDecode = true;
  };
  BrowserCodeReader2.prototype.stopContinuousDecode = function() {
    this._stopContinuousDecode = true;
  };
  BrowserCodeReader2.prototype.attachStreamToVideo = function(stream, videoSource) {
    return __awaiter(this, void 0, void 0, function() {
      var videoElement;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            videoElement = this.prepareVideoElement(videoSource);
            this.addVideoSource(videoElement, stream);
            this.videoElement = videoElement;
            this.stream = stream;
            return [4, this.playVideoOnLoadAsync(videoElement)];
          case 1:
            _a.sent();
            return [2, videoElement];
        }
      });
    });
  };
  BrowserCodeReader2.prototype.playVideoOnLoadAsync = function(videoElement) {
    var _this = this;
    return new Promise(function(resolve, reject) {
      return _this.playVideoOnLoad(videoElement, function() {
        return resolve();
      });
    });
  };
  BrowserCodeReader2.prototype.playVideoOnLoad = function(element, callbackFn) {
    var _this = this;
    this.videoEndedListener = function() {
      return _this.stopStreams();
    };
    this.videoCanPlayListener = function() {
      return _this.tryPlayVideo(element);
    };
    element.addEventListener("ended", this.videoEndedListener);
    element.addEventListener("canplay", this.videoCanPlayListener);
    element.addEventListener("playing", callbackFn);
    this.tryPlayVideo(element);
  };
  BrowserCodeReader2.prototype.isVideoPlaying = function(video) {
    return video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2;
  };
  BrowserCodeReader2.prototype.tryPlayVideo = function(videoElement) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_b) {
        switch (_b.label) {
          case 0:
            if (this.isVideoPlaying(videoElement)) {
              console.warn("Trying to play video that is already playing.");
              return [2];
            }
            _b.label = 1;
          case 1:
            _b.trys.push([1, 3, , 4]);
            return [4, videoElement.play()];
          case 2:
            _b.sent();
            return [3, 4];
          case 3:
            _b.sent();
            console.warn("It was not possible to play the video.");
            return [3, 4];
          case 4:
            return [2];
        }
      });
    });
  };
  BrowserCodeReader2.prototype.getMediaElement = function(mediaElementId, type) {
    var mediaElement = document.getElementById(mediaElementId);
    if (!mediaElement) {
      throw new ArgumentException("element with id '" + mediaElementId + "' not found");
    }
    if (mediaElement.nodeName.toLowerCase() !== type.toLowerCase()) {
      throw new ArgumentException("element with id '" + mediaElementId + "' must be an " + type + " element");
    }
    return mediaElement;
  };
  BrowserCodeReader2.prototype.decodeFromImage = function(source, url) {
    if (!source && !url) {
      throw new ArgumentException("either imageElement with a src set or an url must be provided");
    }
    if (url && !source) {
      return this.decodeFromImageUrl(url);
    }
    return this.decodeFromImageElement(source);
  };
  BrowserCodeReader2.prototype.decodeFromVideo = function(source, url) {
    if (!source && !url) {
      throw new ArgumentException("Either an element with a src set or an URL must be provided");
    }
    if (url && !source) {
      return this.decodeFromVideoUrl(url);
    }
    return this.decodeFromVideoElement(source);
  };
  BrowserCodeReader2.prototype.decodeFromVideoContinuously = function(source, url, callbackFn) {
    if (source === void 0 && url === void 0) {
      throw new ArgumentException("Either an element with a src set or an URL must be provided");
    }
    if (url && !source) {
      return this.decodeFromVideoUrlContinuously(url, callbackFn);
    }
    return this.decodeFromVideoElementContinuously(source, callbackFn);
  };
  BrowserCodeReader2.prototype.decodeFromImageElement = function(source) {
    if (!source) {
      throw new ArgumentException("An image element must be provided.");
    }
    this.reset();
    var element = this.prepareImageElement(source);
    this.imageElement = element;
    var task;
    if (this.isImageLoaded(element)) {
      task = this.decodeOnce(element, false, true);
    } else {
      task = this._decodeOnLoadImage(element);
    }
    return task;
  };
  BrowserCodeReader2.prototype.decodeFromVideoElement = function(source) {
    var element = this._decodeFromVideoElementSetup(source);
    return this._decodeOnLoadVideo(element);
  };
  BrowserCodeReader2.prototype.decodeFromVideoElementContinuously = function(source, callbackFn) {
    var element = this._decodeFromVideoElementSetup(source);
    return this._decodeOnLoadVideoContinuously(element, callbackFn);
  };
  BrowserCodeReader2.prototype._decodeFromVideoElementSetup = function(source) {
    if (!source) {
      throw new ArgumentException("A video element must be provided.");
    }
    this.reset();
    var element = this.prepareVideoElement(source);
    this.videoElement = element;
    return element;
  };
  BrowserCodeReader2.prototype.decodeFromImageUrl = function(url) {
    if (!url) {
      throw new ArgumentException("An URL must be provided.");
    }
    this.reset();
    var element = this.prepareImageElement();
    this.imageElement = element;
    var decodeTask = this._decodeOnLoadImage(element);
    element.src = url;
    return decodeTask;
  };
  BrowserCodeReader2.prototype.decodeFromVideoUrl = function(url) {
    if (!url) {
      throw new ArgumentException("An URL must be provided.");
    }
    this.reset();
    var element = this.prepareVideoElement();
    var decodeTask = this.decodeFromVideoElement(element);
    element.src = url;
    return decodeTask;
  };
  BrowserCodeReader2.prototype.decodeFromVideoUrlContinuously = function(url, callbackFn) {
    if (!url) {
      throw new ArgumentException("An URL must be provided.");
    }
    this.reset();
    var element = this.prepareVideoElement();
    var decodeTask = this.decodeFromVideoElementContinuously(element, callbackFn);
    element.src = url;
    return decodeTask;
  };
  BrowserCodeReader2.prototype._decodeOnLoadImage = function(element) {
    var _this = this;
    return new Promise(function(resolve, reject) {
      _this.imageLoadedListener = function() {
        return _this.decodeOnce(element, false, true).then(resolve, reject);
      };
      element.addEventListener("load", _this.imageLoadedListener);
    });
  };
  BrowserCodeReader2.prototype._decodeOnLoadVideo = function(videoElement) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            return [4, this.playVideoOnLoadAsync(videoElement)];
          case 1:
            _a.sent();
            return [4, this.decodeOnce(videoElement)];
          case 2:
            return [2, _a.sent()];
        }
      });
    });
  };
  BrowserCodeReader2.prototype._decodeOnLoadVideoContinuously = function(videoElement, callbackFn) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            return [4, this.playVideoOnLoadAsync(videoElement)];
          case 1:
            _a.sent();
            this.decodeContinuously(videoElement, callbackFn);
            return [2];
        }
      });
    });
  };
  BrowserCodeReader2.prototype.isImageLoaded = function(img) {
    if (!img.complete) {
      return false;
    }
    if (img.naturalWidth === 0) {
      return false;
    }
    return true;
  };
  BrowserCodeReader2.prototype.prepareImageElement = function(imageSource) {
    var imageElement;
    if (typeof imageSource === "undefined") {
      imageElement = document.createElement("img");
      imageElement.width = 200;
      imageElement.height = 200;
    }
    if (typeof imageSource === "string") {
      imageElement = this.getMediaElement(imageSource, "img");
    }
    if (imageSource instanceof HTMLImageElement) {
      imageElement = imageSource;
    }
    return imageElement;
  };
  BrowserCodeReader2.prototype.prepareVideoElement = function(videoSource) {
    var videoElement;
    if (!videoSource && typeof document !== "undefined") {
      videoElement = document.createElement("video");
      videoElement.width = 200;
      videoElement.height = 200;
    }
    if (typeof videoSource === "string") {
      videoElement = this.getMediaElement(videoSource, "video");
    }
    if (videoSource instanceof HTMLVideoElement) {
      videoElement = videoSource;
    }
    videoElement.setAttribute("autoplay", "true");
    videoElement.setAttribute("muted", "true");
    videoElement.setAttribute("playsinline", "true");
    return videoElement;
  };
  BrowserCodeReader2.prototype.decodeOnce = function(element, retryIfNotFound, retryIfChecksumOrFormatError) {
    var _this = this;
    if (retryIfNotFound === void 0) {
      retryIfNotFound = true;
    }
    if (retryIfChecksumOrFormatError === void 0) {
      retryIfChecksumOrFormatError = true;
    }
    this._stopAsyncDecode = false;
    var loop = function(resolve, reject) {
      if (_this._stopAsyncDecode) {
        reject(new NotFoundException("Video stream has ended before any code could be detected."));
        _this._stopAsyncDecode = void 0;
        return;
      }
      try {
        var result = _this.decode(element);
        resolve(result);
      } catch (e) {
        var ifNotFound = retryIfNotFound && e instanceof NotFoundException;
        var isChecksumOrFormatError = e instanceof ChecksumException || e instanceof FormatException;
        var ifChecksumOrFormat = isChecksumOrFormatError && retryIfChecksumOrFormatError;
        if (ifNotFound || ifChecksumOrFormat) {
          return setTimeout(loop, _this._timeBetweenDecodingAttempts, resolve, reject);
        }
        reject(e);
      }
    };
    return new Promise(function(resolve, reject) {
      return loop(resolve, reject);
    });
  };
  BrowserCodeReader2.prototype.decodeContinuously = function(element, callbackFn) {
    var _this = this;
    this._stopContinuousDecode = false;
    var loop = function() {
      if (_this._stopContinuousDecode) {
        _this._stopContinuousDecode = void 0;
        return;
      }
      try {
        var result = _this.decode(element);
        callbackFn(result, null);
        setTimeout(loop, _this.timeBetweenScansMillis);
      } catch (e) {
        callbackFn(null, e);
        var isChecksumOrFormatError = e instanceof ChecksumException || e instanceof FormatException;
        var isNotFound = e instanceof NotFoundException;
        if (isChecksumOrFormatError || isNotFound) {
          setTimeout(loop, _this._timeBetweenDecodingAttempts);
        }
      }
    };
    loop();
  };
  BrowserCodeReader2.prototype.decode = function(element) {
    var binaryBitmap = this.createBinaryBitmap(element);
    return this.decodeBitmap(binaryBitmap);
  };
  BrowserCodeReader2.prototype.createBinaryBitmap = function(mediaElement) {
    var ctx = this.getCaptureCanvasContext(mediaElement);
    this.drawImageOnCanvas(ctx, mediaElement);
    var canvas = this.getCaptureCanvas(mediaElement);
    var luminanceSource = new HTMLCanvasElementLuminanceSource(canvas);
    var hybridBinarizer = new HybridBinarizer(luminanceSource);
    return new BinaryBitmap(hybridBinarizer);
  };
  BrowserCodeReader2.prototype.getCaptureCanvasContext = function(mediaElement) {
    if (!this.captureCanvasContext) {
      var elem = this.getCaptureCanvas(mediaElement);
      var ctx = elem.getContext("2d");
      this.captureCanvasContext = ctx;
    }
    return this.captureCanvasContext;
  };
  BrowserCodeReader2.prototype.getCaptureCanvas = function(mediaElement) {
    if (!this.captureCanvas) {
      var elem = this.createCaptureCanvas(mediaElement);
      this.captureCanvas = elem;
    }
    return this.captureCanvas;
  };
  BrowserCodeReader2.prototype.drawImageOnCanvas = function(canvasElementContext, srcElement) {
    canvasElementContext.drawImage(srcElement, 0, 0);
  };
  BrowserCodeReader2.prototype.decodeBitmap = function(binaryBitmap) {
    return this.reader.decode(binaryBitmap, this._hints);
  };
  BrowserCodeReader2.prototype.createCaptureCanvas = function(mediaElement) {
    if (typeof document === "undefined") {
      this._destroyCaptureCanvas();
      return null;
    }
    var canvasElement = document.createElement("canvas");
    var width;
    var height;
    if (typeof mediaElement !== "undefined") {
      if (mediaElement instanceof HTMLVideoElement) {
        width = mediaElement.videoWidth;
        height = mediaElement.videoHeight;
      } else if (mediaElement instanceof HTMLImageElement) {
        width = mediaElement.naturalWidth || mediaElement.width;
        height = mediaElement.naturalHeight || mediaElement.height;
      }
    }
    canvasElement.style.width = width + "px";
    canvasElement.style.height = height + "px";
    canvasElement.width = width;
    canvasElement.height = height;
    return canvasElement;
  };
  BrowserCodeReader2.prototype.stopStreams = function() {
    if (this.stream) {
      this.stream.getVideoTracks().forEach(function(t) {
        return t.stop();
      });
      this.stream = void 0;
    }
    if (this._stopAsyncDecode === false) {
      this.stopAsyncDecode();
    }
    if (this._stopContinuousDecode === false) {
      this.stopContinuousDecode();
    }
  };
  BrowserCodeReader2.prototype.reset = function() {
    this.stopStreams();
    this._destroyVideoElement();
    this._destroyImageElement();
    this._destroyCaptureCanvas();
  };
  BrowserCodeReader2.prototype._destroyVideoElement = function() {
    if (!this.videoElement) {
      return;
    }
    if (typeof this.videoEndedListener !== "undefined") {
      this.videoElement.removeEventListener("ended", this.videoEndedListener);
    }
    if (typeof this.videoPlayingEventListener !== "undefined") {
      this.videoElement.removeEventListener("playing", this.videoPlayingEventListener);
    }
    if (typeof this.videoCanPlayListener !== "undefined") {
      this.videoElement.removeEventListener("loadedmetadata", this.videoCanPlayListener);
    }
    this.cleanVideoSource(this.videoElement);
    this.videoElement = void 0;
  };
  BrowserCodeReader2.prototype._destroyImageElement = function() {
    if (!this.imageElement) {
      return;
    }
    if (this.imageLoadedListener !== void 0) {
      this.imageElement.removeEventListener("load", this.imageLoadedListener);
    }
    this.imageElement.src = void 0;
    this.imageElement.removeAttribute("src");
    this.imageElement = void 0;
  };
  BrowserCodeReader2.prototype._destroyCaptureCanvas = function() {
    this.captureCanvasContext = void 0;
    this.captureCanvas = void 0;
  };
  BrowserCodeReader2.prototype.addVideoSource = function(videoElement, stream) {
    try {
      videoElement.srcObject = stream;
    } catch (err) {
      videoElement.src = URL.createObjectURL(stream);
    }
  };
  BrowserCodeReader2.prototype.cleanVideoSource = function(videoElement) {
    try {
      videoElement.srcObject = null;
    } catch (err) {
      videoElement.src = "";
    }
    this.videoElement.removeAttribute("src");
  };
  return BrowserCodeReader2;
}();
var Result = function() {
  function Result2(text, rawBytes, numBits, resultPoints, format, timestamp) {
    if (numBits === void 0) {
      numBits = rawBytes == null ? 0 : 8 * rawBytes.length;
    }
    if (timestamp === void 0) {
      timestamp = System.currentTimeMillis();
    }
    this.text = text;
    this.rawBytes = rawBytes;
    this.numBits = numBits;
    this.resultPoints = resultPoints;
    this.format = format;
    this.timestamp = timestamp;
    this.text = text;
    this.rawBytes = rawBytes;
    if (numBits === void 0 || numBits === null) {
      this.numBits = rawBytes === null || rawBytes === void 0 ? 0 : 8 * rawBytes.length;
    } else {
      this.numBits = numBits;
    }
    this.resultPoints = resultPoints;
    this.format = format;
    this.resultMetadata = null;
    if (timestamp === void 0 || timestamp === null) {
      this.timestamp = System.currentTimeMillis();
    } else {
      this.timestamp = timestamp;
    }
  }
  Result2.prototype.getText = function() {
    return this.text;
  };
  Result2.prototype.getRawBytes = function() {
    return this.rawBytes;
  };
  Result2.prototype.getNumBits = function() {
    return this.numBits;
  };
  Result2.prototype.getResultPoints = function() {
    return this.resultPoints;
  };
  Result2.prototype.getBarcodeFormat = function() {
    return this.format;
  };
  Result2.prototype.getResultMetadata = function() {
    return this.resultMetadata;
  };
  Result2.prototype.putMetadata = function(type, value) {
    if (this.resultMetadata === null) {
      this.resultMetadata = new Map();
    }
    this.resultMetadata.set(type, value);
  };
  Result2.prototype.putAllMetadata = function(metadata) {
    if (metadata !== null) {
      if (this.resultMetadata === null) {
        this.resultMetadata = metadata;
      } else {
        this.resultMetadata = new Map(metadata);
      }
    }
  };
  Result2.prototype.addResultPoints = function(newPoints) {
    var oldPoints = this.resultPoints;
    if (oldPoints === null) {
      this.resultPoints = newPoints;
    } else if (newPoints !== null && newPoints.length > 0) {
      var allPoints = new Array(oldPoints.length + newPoints.length);
      System.arraycopy(oldPoints, 0, allPoints, 0, oldPoints.length);
      System.arraycopy(newPoints, 0, allPoints, oldPoints.length, newPoints.length);
      this.resultPoints = allPoints;
    }
  };
  Result2.prototype.getTimestamp = function() {
    return this.timestamp;
  };
  Result2.prototype.toString = function() {
    return this.text;
  };
  return Result2;
}();
var BarcodeFormat;
(function(BarcodeFormat2) {
  BarcodeFormat2[BarcodeFormat2["AZTEC"] = 0] = "AZTEC";
  BarcodeFormat2[BarcodeFormat2["CODABAR"] = 1] = "CODABAR";
  BarcodeFormat2[BarcodeFormat2["CODE_39"] = 2] = "CODE_39";
  BarcodeFormat2[BarcodeFormat2["CODE_93"] = 3] = "CODE_93";
  BarcodeFormat2[BarcodeFormat2["CODE_128"] = 4] = "CODE_128";
  BarcodeFormat2[BarcodeFormat2["DATA_MATRIX"] = 5] = "DATA_MATRIX";
  BarcodeFormat2[BarcodeFormat2["EAN_8"] = 6] = "EAN_8";
  BarcodeFormat2[BarcodeFormat2["EAN_13"] = 7] = "EAN_13";
  BarcodeFormat2[BarcodeFormat2["ITF"] = 8] = "ITF";
  BarcodeFormat2[BarcodeFormat2["MAXICODE"] = 9] = "MAXICODE";
  BarcodeFormat2[BarcodeFormat2["PDF_417"] = 10] = "PDF_417";
  BarcodeFormat2[BarcodeFormat2["QR_CODE"] = 11] = "QR_CODE";
  BarcodeFormat2[BarcodeFormat2["RSS_14"] = 12] = "RSS_14";
  BarcodeFormat2[BarcodeFormat2["RSS_EXPANDED"] = 13] = "RSS_EXPANDED";
  BarcodeFormat2[BarcodeFormat2["UPC_A"] = 14] = "UPC_A";
  BarcodeFormat2[BarcodeFormat2["UPC_E"] = 15] = "UPC_E";
  BarcodeFormat2[BarcodeFormat2["UPC_EAN_EXTENSION"] = 16] = "UPC_EAN_EXTENSION";
})(BarcodeFormat || (BarcodeFormat = {}));
var BarcodeFormat$1 = BarcodeFormat;
var ResultMetadataType;
(function(ResultMetadataType2) {
  ResultMetadataType2[ResultMetadataType2["OTHER"] = 0] = "OTHER";
  ResultMetadataType2[ResultMetadataType2["ORIENTATION"] = 1] = "ORIENTATION";
  ResultMetadataType2[ResultMetadataType2["BYTE_SEGMENTS"] = 2] = "BYTE_SEGMENTS";
  ResultMetadataType2[ResultMetadataType2["ERROR_CORRECTION_LEVEL"] = 3] = "ERROR_CORRECTION_LEVEL";
  ResultMetadataType2[ResultMetadataType2["ISSUE_NUMBER"] = 4] = "ISSUE_NUMBER";
  ResultMetadataType2[ResultMetadataType2["SUGGESTED_PRICE"] = 5] = "SUGGESTED_PRICE";
  ResultMetadataType2[ResultMetadataType2["POSSIBLE_COUNTRY"] = 6] = "POSSIBLE_COUNTRY";
  ResultMetadataType2[ResultMetadataType2["UPC_EAN_EXTENSION"] = 7] = "UPC_EAN_EXTENSION";
  ResultMetadataType2[ResultMetadataType2["PDF417_EXTRA_METADATA"] = 8] = "PDF417_EXTRA_METADATA";
  ResultMetadataType2[ResultMetadataType2["STRUCTURED_APPEND_SEQUENCE"] = 9] = "STRUCTURED_APPEND_SEQUENCE";
  ResultMetadataType2[ResultMetadataType2["STRUCTURED_APPEND_PARITY"] = 10] = "STRUCTURED_APPEND_PARITY";
})(ResultMetadataType || (ResultMetadataType = {}));
var ResultMetadataType$1 = ResultMetadataType;
var DecoderResult = function() {
  function DecoderResult2(rawBytes, text, byteSegments, ecLevel, structuredAppendSequenceNumber, structuredAppendParity) {
    if (structuredAppendSequenceNumber === void 0) {
      structuredAppendSequenceNumber = -1;
    }
    if (structuredAppendParity === void 0) {
      structuredAppendParity = -1;
    }
    this.rawBytes = rawBytes;
    this.text = text;
    this.byteSegments = byteSegments;
    this.ecLevel = ecLevel;
    this.structuredAppendSequenceNumber = structuredAppendSequenceNumber;
    this.structuredAppendParity = structuredAppendParity;
    this.numBits = rawBytes === void 0 || rawBytes === null ? 0 : 8 * rawBytes.length;
  }
  DecoderResult2.prototype.getRawBytes = function() {
    return this.rawBytes;
  };
  DecoderResult2.prototype.getNumBits = function() {
    return this.numBits;
  };
  DecoderResult2.prototype.setNumBits = function(numBits) {
    this.numBits = numBits;
  };
  DecoderResult2.prototype.getText = function() {
    return this.text;
  };
  DecoderResult2.prototype.getByteSegments = function() {
    return this.byteSegments;
  };
  DecoderResult2.prototype.getECLevel = function() {
    return this.ecLevel;
  };
  DecoderResult2.prototype.getErrorsCorrected = function() {
    return this.errorsCorrected;
  };
  DecoderResult2.prototype.setErrorsCorrected = function(errorsCorrected) {
    this.errorsCorrected = errorsCorrected;
  };
  DecoderResult2.prototype.getErasures = function() {
    return this.erasures;
  };
  DecoderResult2.prototype.setErasures = function(erasures) {
    this.erasures = erasures;
  };
  DecoderResult2.prototype.getOther = function() {
    return this.other;
  };
  DecoderResult2.prototype.setOther = function(other) {
    this.other = other;
  };
  DecoderResult2.prototype.hasStructuredAppend = function() {
    return this.structuredAppendParity >= 0 && this.structuredAppendSequenceNumber >= 0;
  };
  DecoderResult2.prototype.getStructuredAppendParity = function() {
    return this.structuredAppendParity;
  };
  DecoderResult2.prototype.getStructuredAppendSequenceNumber = function() {
    return this.structuredAppendSequenceNumber;
  };
  return DecoderResult2;
}();
var AbstractGenericGF = function() {
  function AbstractGenericGF2() {
  }
  AbstractGenericGF2.prototype.exp = function(a) {
    return this.expTable[a];
  };
  AbstractGenericGF2.prototype.log = function(a) {
    if (a === 0) {
      throw new IllegalArgumentException();
    }
    return this.logTable[a];
  };
  AbstractGenericGF2.addOrSubtract = function(a, b) {
    return a ^ b;
  };
  return AbstractGenericGF2;
}();
var GenericGFPoly = function() {
  function GenericGFPoly2(field, coefficients) {
    if (coefficients.length === 0) {
      throw new IllegalArgumentException();
    }
    this.field = field;
    var coefficientsLength = coefficients.length;
    if (coefficientsLength > 1 && coefficients[0] === 0) {
      var firstNonZero = 1;
      while (firstNonZero < coefficientsLength && coefficients[firstNonZero] === 0) {
        firstNonZero++;
      }
      if (firstNonZero === coefficientsLength) {
        this.coefficients = Int32Array.from([0]);
      } else {
        this.coefficients = new Int32Array(coefficientsLength - firstNonZero);
        System.arraycopy(coefficients, firstNonZero, this.coefficients, 0, this.coefficients.length);
      }
    } else {
      this.coefficients = coefficients;
    }
  }
  GenericGFPoly2.prototype.getCoefficients = function() {
    return this.coefficients;
  };
  GenericGFPoly2.prototype.getDegree = function() {
    return this.coefficients.length - 1;
  };
  GenericGFPoly2.prototype.isZero = function() {
    return this.coefficients[0] === 0;
  };
  GenericGFPoly2.prototype.getCoefficient = function(degree) {
    return this.coefficients[this.coefficients.length - 1 - degree];
  };
  GenericGFPoly2.prototype.evaluateAt = function(a) {
    if (a === 0) {
      return this.getCoefficient(0);
    }
    var coefficients = this.coefficients;
    var result;
    if (a === 1) {
      result = 0;
      for (var i = 0, length_1 = coefficients.length; i !== length_1; i++) {
        var coefficient = coefficients[i];
        result = AbstractGenericGF.addOrSubtract(result, coefficient);
      }
      return result;
    }
    result = coefficients[0];
    var size = coefficients.length;
    var field = this.field;
    for (var i = 1; i < size; i++) {
      result = AbstractGenericGF.addOrSubtract(field.multiply(a, result), coefficients[i]);
    }
    return result;
  };
  GenericGFPoly2.prototype.addOrSubtract = function(other) {
    if (!this.field.equals(other.field)) {
      throw new IllegalArgumentException("GenericGFPolys do not have same GenericGF field");
    }
    if (this.isZero()) {
      return other;
    }
    if (other.isZero()) {
      return this;
    }
    var smallerCoefficients = this.coefficients;
    var largerCoefficients = other.coefficients;
    if (smallerCoefficients.length > largerCoefficients.length) {
      var temp = smallerCoefficients;
      smallerCoefficients = largerCoefficients;
      largerCoefficients = temp;
    }
    var sumDiff = new Int32Array(largerCoefficients.length);
    var lengthDiff = largerCoefficients.length - smallerCoefficients.length;
    System.arraycopy(largerCoefficients, 0, sumDiff, 0, lengthDiff);
    for (var i = lengthDiff; i < largerCoefficients.length; i++) {
      sumDiff[i] = AbstractGenericGF.addOrSubtract(smallerCoefficients[i - lengthDiff], largerCoefficients[i]);
    }
    return new GenericGFPoly2(this.field, sumDiff);
  };
  GenericGFPoly2.prototype.multiply = function(other) {
    if (!this.field.equals(other.field)) {
      throw new IllegalArgumentException("GenericGFPolys do not have same GenericGF field");
    }
    if (this.isZero() || other.isZero()) {
      return this.field.getZero();
    }
    var aCoefficients = this.coefficients;
    var aLength = aCoefficients.length;
    var bCoefficients = other.coefficients;
    var bLength = bCoefficients.length;
    var product = new Int32Array(aLength + bLength - 1);
    var field = this.field;
    for (var i = 0; i < aLength; i++) {
      var aCoeff = aCoefficients[i];
      for (var j = 0; j < bLength; j++) {
        product[i + j] = AbstractGenericGF.addOrSubtract(product[i + j], field.multiply(aCoeff, bCoefficients[j]));
      }
    }
    return new GenericGFPoly2(field, product);
  };
  GenericGFPoly2.prototype.multiplyScalar = function(scalar) {
    if (scalar === 0) {
      return this.field.getZero();
    }
    if (scalar === 1) {
      return this;
    }
    var size = this.coefficients.length;
    var field = this.field;
    var product = new Int32Array(size);
    var coefficients = this.coefficients;
    for (var i = 0; i < size; i++) {
      product[i] = field.multiply(coefficients[i], scalar);
    }
    return new GenericGFPoly2(field, product);
  };
  GenericGFPoly2.prototype.multiplyByMonomial = function(degree, coefficient) {
    if (degree < 0) {
      throw new IllegalArgumentException();
    }
    if (coefficient === 0) {
      return this.field.getZero();
    }
    var coefficients = this.coefficients;
    var size = coefficients.length;
    var product = new Int32Array(size + degree);
    var field = this.field;
    for (var i = 0; i < size; i++) {
      product[i] = field.multiply(coefficients[i], coefficient);
    }
    return new GenericGFPoly2(field, product);
  };
  GenericGFPoly2.prototype.divide = function(other) {
    if (!this.field.equals(other.field)) {
      throw new IllegalArgumentException("GenericGFPolys do not have same GenericGF field");
    }
    if (other.isZero()) {
      throw new IllegalArgumentException("Divide by 0");
    }
    var field = this.field;
    var quotient = field.getZero();
    var remainder = this;
    var denominatorLeadingTerm = other.getCoefficient(other.getDegree());
    var inverseDenominatorLeadingTerm = field.inverse(denominatorLeadingTerm);
    while (remainder.getDegree() >= other.getDegree() && !remainder.isZero()) {
      var degreeDifference = remainder.getDegree() - other.getDegree();
      var scale = field.multiply(remainder.getCoefficient(remainder.getDegree()), inverseDenominatorLeadingTerm);
      var term = other.multiplyByMonomial(degreeDifference, scale);
      var iterationQuotient = field.buildMonomial(degreeDifference, scale);
      quotient = quotient.addOrSubtract(iterationQuotient);
      remainder = remainder.addOrSubtract(term);
    }
    return [quotient, remainder];
  };
  GenericGFPoly2.prototype.toString = function() {
    var result = "";
    for (var degree = this.getDegree(); degree >= 0; degree--) {
      var coefficient = this.getCoefficient(degree);
      if (coefficient !== 0) {
        if (coefficient < 0) {
          result += " - ";
          coefficient = -coefficient;
        } else {
          if (result.length > 0) {
            result += " + ";
          }
        }
        if (degree === 0 || coefficient !== 1) {
          var alphaPower = this.field.log(coefficient);
          if (alphaPower === 0) {
            result += "1";
          } else if (alphaPower === 1) {
            result += "a";
          } else {
            result += "a^";
            result += alphaPower;
          }
        }
        if (degree !== 0) {
          if (degree === 1) {
            result += "x";
          } else {
            result += "x^";
            result += degree;
          }
        }
      }
    }
    return result;
  };
  return GenericGFPoly2;
}();
var __extends$e = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (b2.hasOwnProperty(p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var ArithmeticException = function(_super) {
  __extends$e(ArithmeticException2, _super);
  function ArithmeticException2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  ArithmeticException2.kind = "ArithmeticException";
  return ArithmeticException2;
}(Exception);
var __extends$f = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (b2.hasOwnProperty(p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var GenericGF = function(_super) {
  __extends$f(GenericGF2, _super);
  function GenericGF2(primitive, size, generatorBase) {
    var _this = _super.call(this) || this;
    _this.primitive = primitive;
    _this.size = size;
    _this.generatorBase = generatorBase;
    var expTable = new Int32Array(size);
    var x = 1;
    for (var i = 0; i < size; i++) {
      expTable[i] = x;
      x *= 2;
      if (x >= size) {
        x ^= primitive;
        x &= size - 1;
      }
    }
    _this.expTable = expTable;
    var logTable = new Int32Array(size);
    for (var i = 0; i < size - 1; i++) {
      logTable[expTable[i]] = i;
    }
    _this.logTable = logTable;
    _this.zero = new GenericGFPoly(_this, Int32Array.from([0]));
    _this.one = new GenericGFPoly(_this, Int32Array.from([1]));
    return _this;
  }
  GenericGF2.prototype.getZero = function() {
    return this.zero;
  };
  GenericGF2.prototype.getOne = function() {
    return this.one;
  };
  GenericGF2.prototype.buildMonomial = function(degree, coefficient) {
    if (degree < 0) {
      throw new IllegalArgumentException();
    }
    if (coefficient === 0) {
      return this.zero;
    }
    var coefficients = new Int32Array(degree + 1);
    coefficients[0] = coefficient;
    return new GenericGFPoly(this, coefficients);
  };
  GenericGF2.prototype.inverse = function(a) {
    if (a === 0) {
      throw new ArithmeticException();
    }
    return this.expTable[this.size - this.logTable[a] - 1];
  };
  GenericGF2.prototype.multiply = function(a, b) {
    if (a === 0 || b === 0) {
      return 0;
    }
    return this.expTable[(this.logTable[a] + this.logTable[b]) % (this.size - 1)];
  };
  GenericGF2.prototype.getSize = function() {
    return this.size;
  };
  GenericGF2.prototype.getGeneratorBase = function() {
    return this.generatorBase;
  };
  GenericGF2.prototype.toString = function() {
    return "GF(0x" + Integer.toHexString(this.primitive) + "," + this.size + ")";
  };
  GenericGF2.prototype.equals = function(o) {
    return o === this;
  };
  GenericGF2.AZTEC_DATA_12 = new GenericGF2(4201, 4096, 1);
  GenericGF2.AZTEC_DATA_10 = new GenericGF2(1033, 1024, 1);
  GenericGF2.AZTEC_DATA_6 = new GenericGF2(67, 64, 1);
  GenericGF2.AZTEC_PARAM = new GenericGF2(19, 16, 1);
  GenericGF2.QR_CODE_FIELD_256 = new GenericGF2(285, 256, 0);
  GenericGF2.DATA_MATRIX_FIELD_256 = new GenericGF2(301, 256, 1);
  GenericGF2.AZTEC_DATA_8 = GenericGF2.DATA_MATRIX_FIELD_256;
  GenericGF2.MAXICODE_FIELD_64 = GenericGF2.AZTEC_DATA_6;
  return GenericGF2;
}(AbstractGenericGF);
var __extends$g = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (b2.hasOwnProperty(p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var ReedSolomonException = function(_super) {
  __extends$g(ReedSolomonException2, _super);
  function ReedSolomonException2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  ReedSolomonException2.kind = "ReedSolomonException";
  return ReedSolomonException2;
}(Exception);
var __extends$h = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (b2.hasOwnProperty(p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var IllegalStateException = function(_super) {
  __extends$h(IllegalStateException2, _super);
  function IllegalStateException2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  IllegalStateException2.kind = "IllegalStateException";
  return IllegalStateException2;
}(Exception);
var ReedSolomonDecoder = function() {
  function ReedSolomonDecoder2(field) {
    this.field = field;
  }
  ReedSolomonDecoder2.prototype.decode = function(received, twoS) {
    var field = this.field;
    var poly = new GenericGFPoly(field, received);
    var syndromeCoefficients = new Int32Array(twoS);
    var noError = true;
    for (var i = 0; i < twoS; i++) {
      var evalResult = poly.evaluateAt(field.exp(i + field.getGeneratorBase()));
      syndromeCoefficients[syndromeCoefficients.length - 1 - i] = evalResult;
      if (evalResult !== 0) {
        noError = false;
      }
    }
    if (noError) {
      return;
    }
    var syndrome = new GenericGFPoly(field, syndromeCoefficients);
    var sigmaOmega = this.runEuclideanAlgorithm(field.buildMonomial(twoS, 1), syndrome, twoS);
    var sigma = sigmaOmega[0];
    var omega = sigmaOmega[1];
    var errorLocations = this.findErrorLocations(sigma);
    var errorMagnitudes = this.findErrorMagnitudes(omega, errorLocations);
    for (var i = 0; i < errorLocations.length; i++) {
      var position = received.length - 1 - field.log(errorLocations[i]);
      if (position < 0) {
        throw new ReedSolomonException("Bad error location");
      }
      received[position] = GenericGF.addOrSubtract(received[position], errorMagnitudes[i]);
    }
  };
  ReedSolomonDecoder2.prototype.runEuclideanAlgorithm = function(a, b, R) {
    if (a.getDegree() < b.getDegree()) {
      var temp = a;
      a = b;
      b = temp;
    }
    var field = this.field;
    var rLast = a;
    var r = b;
    var tLast = field.getZero();
    var t = field.getOne();
    while (r.getDegree() >= (R / 2 | 0)) {
      var rLastLast = rLast;
      var tLastLast = tLast;
      rLast = r;
      tLast = t;
      if (rLast.isZero()) {
        throw new ReedSolomonException("r_{i-1} was zero");
      }
      r = rLastLast;
      var q = field.getZero();
      var denominatorLeadingTerm = rLast.getCoefficient(rLast.getDegree());
      var dltInverse = field.inverse(denominatorLeadingTerm);
      while (r.getDegree() >= rLast.getDegree() && !r.isZero()) {
        var degreeDiff = r.getDegree() - rLast.getDegree();
        var scale = field.multiply(r.getCoefficient(r.getDegree()), dltInverse);
        q = q.addOrSubtract(field.buildMonomial(degreeDiff, scale));
        r = r.addOrSubtract(rLast.multiplyByMonomial(degreeDiff, scale));
      }
      t = q.multiply(tLast).addOrSubtract(tLastLast);
      if (r.getDegree() >= rLast.getDegree()) {
        throw new IllegalStateException("Division algorithm failed to reduce polynomial?");
      }
    }
    var sigmaTildeAtZero = t.getCoefficient(0);
    if (sigmaTildeAtZero === 0) {
      throw new ReedSolomonException("sigmaTilde(0) was zero");
    }
    var inverse = field.inverse(sigmaTildeAtZero);
    var sigma = t.multiplyScalar(inverse);
    var omega = r.multiplyScalar(inverse);
    return [sigma, omega];
  };
  ReedSolomonDecoder2.prototype.findErrorLocations = function(errorLocator) {
    var numErrors = errorLocator.getDegree();
    if (numErrors === 1) {
      return Int32Array.from([errorLocator.getCoefficient(1)]);
    }
    var result = new Int32Array(numErrors);
    var e = 0;
    var field = this.field;
    for (var i = 1; i < field.getSize() && e < numErrors; i++) {
      if (errorLocator.evaluateAt(i) === 0) {
        result[e] = field.inverse(i);
        e++;
      }
    }
    if (e !== numErrors) {
      throw new ReedSolomonException("Error locator degree does not match number of roots");
    }
    return result;
  };
  ReedSolomonDecoder2.prototype.findErrorMagnitudes = function(errorEvaluator, errorLocations) {
    var s = errorLocations.length;
    var result = new Int32Array(s);
    var field = this.field;
    for (var i = 0; i < s; i++) {
      var xiInverse = field.inverse(errorLocations[i]);
      var denominator = 1;
      for (var j = 0; j < s; j++) {
        if (i !== j) {
          var term = field.multiply(errorLocations[j], xiInverse);
          var termPlus1 = (term & 1) === 0 ? term | 1 : term & ~1;
          denominator = field.multiply(denominator, termPlus1);
        }
      }
      result[i] = field.multiply(errorEvaluator.evaluateAt(xiInverse), field.inverse(denominator));
      if (field.getGeneratorBase() !== 0) {
        result[i] = field.multiply(result[i], xiInverse);
      }
    }
    return result;
  };
  return ReedSolomonDecoder2;
}();
var Table;
(function(Table2) {
  Table2[Table2["UPPER"] = 0] = "UPPER";
  Table2[Table2["LOWER"] = 1] = "LOWER";
  Table2[Table2["MIXED"] = 2] = "MIXED";
  Table2[Table2["DIGIT"] = 3] = "DIGIT";
  Table2[Table2["PUNCT"] = 4] = "PUNCT";
  Table2[Table2["BINARY"] = 5] = "BINARY";
})(Table || (Table = {}));
var Decoder = function() {
  function Decoder2() {
  }
  Decoder2.prototype.decode = function(detectorResult) {
    this.ddata = detectorResult;
    var matrix = detectorResult.getBits();
    var rawbits = this.extractBits(matrix);
    var correctedBits = this.correctBits(rawbits);
    var rawBytes = Decoder2.convertBoolArrayToByteArray(correctedBits);
    var result = Decoder2.getEncodedData(correctedBits);
    var decoderResult = new DecoderResult(rawBytes, result, null, null);
    decoderResult.setNumBits(correctedBits.length);
    return decoderResult;
  };
  Decoder2.highLevelDecode = function(correctedBits) {
    return this.getEncodedData(correctedBits);
  };
  Decoder2.getEncodedData = function(correctedBits) {
    var endIndex = correctedBits.length;
    var latchTable = Table.UPPER;
    var shiftTable = Table.UPPER;
    var result = "";
    var index = 0;
    while (index < endIndex) {
      if (shiftTable === Table.BINARY) {
        if (endIndex - index < 5) {
          break;
        }
        var length_1 = Decoder2.readCode(correctedBits, index, 5);
        index += 5;
        if (length_1 === 0) {
          if (endIndex - index < 11) {
            break;
          }
          length_1 = Decoder2.readCode(correctedBits, index, 11) + 31;
          index += 11;
        }
        for (var charCount = 0; charCount < length_1; charCount++) {
          if (endIndex - index < 8) {
            index = endIndex;
            break;
          }
          var code = Decoder2.readCode(correctedBits, index, 8);
          result += StringUtils.castAsNonUtf8Char(code);
          index += 8;
        }
        shiftTable = latchTable;
      } else {
        var size = shiftTable === Table.DIGIT ? 4 : 5;
        if (endIndex - index < size) {
          break;
        }
        var code = Decoder2.readCode(correctedBits, index, size);
        index += size;
        var str = Decoder2.getCharacter(shiftTable, code);
        if (str.startsWith("CTRL_")) {
          latchTable = shiftTable;
          shiftTable = Decoder2.getTable(str.charAt(5));
          if (str.charAt(6) === "L") {
            latchTable = shiftTable;
          }
        } else {
          result += str;
          shiftTable = latchTable;
        }
      }
    }
    return result;
  };
  Decoder2.getTable = function(t) {
    switch (t) {
      case "L":
        return Table.LOWER;
      case "P":
        return Table.PUNCT;
      case "M":
        return Table.MIXED;
      case "D":
        return Table.DIGIT;
      case "B":
        return Table.BINARY;
      case "U":
      default:
        return Table.UPPER;
    }
  };
  Decoder2.getCharacter = function(table, code) {
    switch (table) {
      case Table.UPPER:
        return Decoder2.UPPER_TABLE[code];
      case Table.LOWER:
        return Decoder2.LOWER_TABLE[code];
      case Table.MIXED:
        return Decoder2.MIXED_TABLE[code];
      case Table.PUNCT:
        return Decoder2.PUNCT_TABLE[code];
      case Table.DIGIT:
        return Decoder2.DIGIT_TABLE[code];
      default:
        throw new IllegalStateException("Bad table");
    }
  };
  Decoder2.prototype.correctBits = function(rawbits) {
    var gf;
    var codewordSize;
    if (this.ddata.getNbLayers() <= 2) {
      codewordSize = 6;
      gf = GenericGF.AZTEC_DATA_6;
    } else if (this.ddata.getNbLayers() <= 8) {
      codewordSize = 8;
      gf = GenericGF.AZTEC_DATA_8;
    } else if (this.ddata.getNbLayers() <= 22) {
      codewordSize = 10;
      gf = GenericGF.AZTEC_DATA_10;
    } else {
      codewordSize = 12;
      gf = GenericGF.AZTEC_DATA_12;
    }
    var numDataCodewords = this.ddata.getNbDatablocks();
    var numCodewords = rawbits.length / codewordSize;
    if (numCodewords < numDataCodewords) {
      throw new FormatException();
    }
    var offset = rawbits.length % codewordSize;
    var dataWords = new Int32Array(numCodewords);
    for (var i = 0; i < numCodewords; i++, offset += codewordSize) {
      dataWords[i] = Decoder2.readCode(rawbits, offset, codewordSize);
    }
    try {
      var rsDecoder = new ReedSolomonDecoder(gf);
      rsDecoder.decode(dataWords, numCodewords - numDataCodewords);
    } catch (ex) {
      throw new FormatException(ex);
    }
    var mask = (1 << codewordSize) - 1;
    var stuffedBits = 0;
    for (var i = 0; i < numDataCodewords; i++) {
      var dataWord = dataWords[i];
      if (dataWord === 0 || dataWord === mask) {
        throw new FormatException();
      } else if (dataWord === 1 || dataWord === mask - 1) {
        stuffedBits++;
      }
    }
    var correctedBits = new Array(numDataCodewords * codewordSize - stuffedBits);
    var index = 0;
    for (var i = 0; i < numDataCodewords; i++) {
      var dataWord = dataWords[i];
      if (dataWord === 1 || dataWord === mask - 1) {
        correctedBits.fill(dataWord > 1, index, index + codewordSize - 1);
        index += codewordSize - 1;
      } else {
        for (var bit = codewordSize - 1; bit >= 0; --bit) {
          correctedBits[index++] = (dataWord & 1 << bit) !== 0;
        }
      }
    }
    return correctedBits;
  };
  Decoder2.prototype.extractBits = function(matrix) {
    var compact = this.ddata.isCompact();
    var layers = this.ddata.getNbLayers();
    var baseMatrixSize = (compact ? 11 : 14) + layers * 4;
    var alignmentMap = new Int32Array(baseMatrixSize);
    var rawbits = new Array(this.totalBitsInLayer(layers, compact));
    if (compact) {
      for (var i = 0; i < alignmentMap.length; i++) {
        alignmentMap[i] = i;
      }
    } else {
      var matrixSize = baseMatrixSize + 1 + 2 * Integer.truncDivision(Integer.truncDivision(baseMatrixSize, 2) - 1, 15);
      var origCenter = baseMatrixSize / 2;
      var center = Integer.truncDivision(matrixSize, 2);
      for (var i = 0; i < origCenter; i++) {
        var newOffset = i + Integer.truncDivision(i, 15);
        alignmentMap[origCenter - i - 1] = center - newOffset - 1;
        alignmentMap[origCenter + i] = center + newOffset + 1;
      }
    }
    for (var i = 0, rowOffset = 0; i < layers; i++) {
      var rowSize = (layers - i) * 4 + (compact ? 9 : 12);
      var low = i * 2;
      var high = baseMatrixSize - 1 - low;
      for (var j = 0; j < rowSize; j++) {
        var columnOffset = j * 2;
        for (var k = 0; k < 2; k++) {
          rawbits[rowOffset + columnOffset + k] = matrix.get(alignmentMap[low + k], alignmentMap[low + j]);
          rawbits[rowOffset + 2 * rowSize + columnOffset + k] = matrix.get(alignmentMap[low + j], alignmentMap[high - k]);
          rawbits[rowOffset + 4 * rowSize + columnOffset + k] = matrix.get(alignmentMap[high - k], alignmentMap[high - j]);
          rawbits[rowOffset + 6 * rowSize + columnOffset + k] = matrix.get(alignmentMap[high - j], alignmentMap[low + k]);
        }
      }
      rowOffset += rowSize * 8;
    }
    return rawbits;
  };
  Decoder2.readCode = function(rawbits, startIndex, length) {
    var res = 0;
    for (var i = startIndex; i < startIndex + length; i++) {
      res <<= 1;
      if (rawbits[i]) {
        res |= 1;
      }
    }
    return res;
  };
  Decoder2.readByte = function(rawbits, startIndex) {
    var n = rawbits.length - startIndex;
    if (n >= 8) {
      return Decoder2.readCode(rawbits, startIndex, 8);
    }
    return Decoder2.readCode(rawbits, startIndex, n) << 8 - n;
  };
  Decoder2.convertBoolArrayToByteArray = function(boolArr) {
    var byteArr = new Uint8Array((boolArr.length + 7) / 8);
    for (var i = 0; i < byteArr.length; i++) {
      byteArr[i] = Decoder2.readByte(boolArr, 8 * i);
    }
    return byteArr;
  };
  Decoder2.prototype.totalBitsInLayer = function(layers, compact) {
    return ((compact ? 88 : 112) + 16 * layers) * layers;
  };
  Decoder2.UPPER_TABLE = [
    "CTRL_PS",
    " ",
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
    "CTRL_LL",
    "CTRL_ML",
    "CTRL_DL",
    "CTRL_BS"
  ];
  Decoder2.LOWER_TABLE = [
    "CTRL_PS",
    " ",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "CTRL_US",
    "CTRL_ML",
    "CTRL_DL",
    "CTRL_BS"
  ];
  Decoder2.MIXED_TABLE = [
    "CTRL_PS",
    " ",
    "\\1",
    "\\2",
    "\\3",
    "\\4",
    "\\5",
    "\\6",
    "\\7",
    "\b",
    "	",
    "\n",
    "\\13",
    "\f",
    "\r",
    "\\33",
    "\\34",
    "\\35",
    "\\36",
    "\\37",
    "@",
    "\\",
    "^",
    "_",
    "`",
    "|",
    "~",
    "\\177",
    "CTRL_LL",
    "CTRL_UL",
    "CTRL_PL",
    "CTRL_BS"
  ];
  Decoder2.PUNCT_TABLE = [
    "",
    "\r",
    "\r\n",
    ". ",
    ", ",
    ": ",
    "!",
    '"',
    "#",
    "$",
    "%",
    "&",
    "'",
    "(",
    ")",
    "*",
    "+",
    ",",
    "-",
    ".",
    "/",
    ":",
    ";",
    "<",
    "=",
    ">",
    "?",
    "[",
    "]",
    "{",
    "}",
    "CTRL_UL"
  ];
  Decoder2.DIGIT_TABLE = [
    "CTRL_PS",
    " ",
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
    ",",
    ".",
    "CTRL_UL",
    "CTRL_US"
  ];
  return Decoder2;
}();
var MathUtils = function() {
  function MathUtils2() {
  }
  MathUtils2.round = function(d) {
    if (d === NaN)
      return 0;
    if (d <= Number.MIN_SAFE_INTEGER)
      return Number.MIN_SAFE_INTEGER;
    if (d >= Number.MAX_SAFE_INTEGER)
      return Number.MAX_SAFE_INTEGER;
    return d + (d < 0 ? -0.5 : 0.5) | 0;
  };
  MathUtils2.distance = function(aX, aY, bX, bY) {
    var xDiff = aX - bX;
    var yDiff = aY - bY;
    return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
  };
  MathUtils2.sum = function(array) {
    var count = 0;
    for (var i = 0, length_1 = array.length; i !== length_1; i++) {
      var a = array[i];
      count += a;
    }
    return count;
  };
  return MathUtils2;
}();
var Float = function() {
  function Float2() {
  }
  Float2.floatToIntBits = function(f) {
    return f;
  };
  Float2.MAX_VALUE = Number.MAX_SAFE_INTEGER;
  return Float2;
}();
var ResultPoint = function() {
  function ResultPoint2(x, y) {
    this.x = x;
    this.y = y;
  }
  ResultPoint2.prototype.getX = function() {
    return this.x;
  };
  ResultPoint2.prototype.getY = function() {
    return this.y;
  };
  ResultPoint2.prototype.equals = function(other) {
    if (other instanceof ResultPoint2) {
      var otherPoint = other;
      return this.x === otherPoint.x && this.y === otherPoint.y;
    }
    return false;
  };
  ResultPoint2.prototype.hashCode = function() {
    return 31 * Float.floatToIntBits(this.x) + Float.floatToIntBits(this.y);
  };
  ResultPoint2.prototype.toString = function() {
    return "(" + this.x + "," + this.y + ")";
  };
  ResultPoint2.orderBestPatterns = function(patterns) {
    var zeroOneDistance = this.distance(patterns[0], patterns[1]);
    var oneTwoDistance = this.distance(patterns[1], patterns[2]);
    var zeroTwoDistance = this.distance(patterns[0], patterns[2]);
    var pointA;
    var pointB;
    var pointC;
    if (oneTwoDistance >= zeroOneDistance && oneTwoDistance >= zeroTwoDistance) {
      pointB = patterns[0];
      pointA = patterns[1];
      pointC = patterns[2];
    } else if (zeroTwoDistance >= oneTwoDistance && zeroTwoDistance >= zeroOneDistance) {
      pointB = patterns[1];
      pointA = patterns[0];
      pointC = patterns[2];
    } else {
      pointB = patterns[2];
      pointA = patterns[0];
      pointC = patterns[1];
    }
    if (this.crossProductZ(pointA, pointB, pointC) < 0) {
      var temp = pointA;
      pointA = pointC;
      pointC = temp;
    }
    patterns[0] = pointA;
    patterns[1] = pointB;
    patterns[2] = pointC;
  };
  ResultPoint2.distance = function(pattern1, pattern2) {
    return MathUtils.distance(pattern1.x, pattern1.y, pattern2.x, pattern2.y);
  };
  ResultPoint2.crossProductZ = function(pointA, pointB, pointC) {
    var bX = pointB.x;
    var bY = pointB.y;
    return (pointC.x - bX) * (pointA.y - bY) - (pointC.y - bY) * (pointA.x - bX);
  };
  return ResultPoint2;
}();
var DetectorResult = function() {
  function DetectorResult2(bits, points) {
    this.bits = bits;
    this.points = points;
  }
  DetectorResult2.prototype.getBits = function() {
    return this.bits;
  };
  DetectorResult2.prototype.getPoints = function() {
    return this.points;
  };
  return DetectorResult2;
}();
var __extends$i = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (b2.hasOwnProperty(p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var AztecDetectorResult = function(_super) {
  __extends$i(AztecDetectorResult2, _super);
  function AztecDetectorResult2(bits, points, compact, nbDatablocks, nbLayers) {
    var _this = _super.call(this, bits, points) || this;
    _this.compact = compact;
    _this.nbDatablocks = nbDatablocks;
    _this.nbLayers = nbLayers;
    return _this;
  }
  AztecDetectorResult2.prototype.getNbLayers = function() {
    return this.nbLayers;
  };
  AztecDetectorResult2.prototype.getNbDatablocks = function() {
    return this.nbDatablocks;
  };
  AztecDetectorResult2.prototype.isCompact = function() {
    return this.compact;
  };
  return AztecDetectorResult2;
}(DetectorResult);
var WhiteRectangleDetector = function() {
  function WhiteRectangleDetector2(image, initSize, x, y) {
    this.image = image;
    this.height = image.getHeight();
    this.width = image.getWidth();
    if (initSize === void 0 || initSize === null) {
      initSize = WhiteRectangleDetector2.INIT_SIZE;
    }
    if (x === void 0 || x === null) {
      x = image.getWidth() / 2 | 0;
    }
    if (y === void 0 || y === null) {
      y = image.getHeight() / 2 | 0;
    }
    var halfsize = initSize / 2 | 0;
    this.leftInit = x - halfsize;
    this.rightInit = x + halfsize;
    this.upInit = y - halfsize;
    this.downInit = y + halfsize;
    if (this.upInit < 0 || this.leftInit < 0 || this.downInit >= this.height || this.rightInit >= this.width) {
      throw new NotFoundException();
    }
  }
  WhiteRectangleDetector2.prototype.detect = function() {
    var left = this.leftInit;
    var right = this.rightInit;
    var up = this.upInit;
    var down = this.downInit;
    var sizeExceeded = false;
    var aBlackPointFoundOnBorder = true;
    var atLeastOneBlackPointFoundOnBorder = false;
    var atLeastOneBlackPointFoundOnRight = false;
    var atLeastOneBlackPointFoundOnBottom = false;
    var atLeastOneBlackPointFoundOnLeft = false;
    var atLeastOneBlackPointFoundOnTop = false;
    var width = this.width;
    var height = this.height;
    while (aBlackPointFoundOnBorder) {
      aBlackPointFoundOnBorder = false;
      var rightBorderNotWhite = true;
      while ((rightBorderNotWhite || !atLeastOneBlackPointFoundOnRight) && right < width) {
        rightBorderNotWhite = this.containsBlackPoint(up, down, right, false);
        if (rightBorderNotWhite) {
          right++;
          aBlackPointFoundOnBorder = true;
          atLeastOneBlackPointFoundOnRight = true;
        } else if (!atLeastOneBlackPointFoundOnRight) {
          right++;
        }
      }
      if (right >= width) {
        sizeExceeded = true;
        break;
      }
      var bottomBorderNotWhite = true;
      while ((bottomBorderNotWhite || !atLeastOneBlackPointFoundOnBottom) && down < height) {
        bottomBorderNotWhite = this.containsBlackPoint(left, right, down, true);
        if (bottomBorderNotWhite) {
          down++;
          aBlackPointFoundOnBorder = true;
          atLeastOneBlackPointFoundOnBottom = true;
        } else if (!atLeastOneBlackPointFoundOnBottom) {
          down++;
        }
      }
      if (down >= height) {
        sizeExceeded = true;
        break;
      }
      var leftBorderNotWhite = true;
      while ((leftBorderNotWhite || !atLeastOneBlackPointFoundOnLeft) && left >= 0) {
        leftBorderNotWhite = this.containsBlackPoint(up, down, left, false);
        if (leftBorderNotWhite) {
          left--;
          aBlackPointFoundOnBorder = true;
          atLeastOneBlackPointFoundOnLeft = true;
        } else if (!atLeastOneBlackPointFoundOnLeft) {
          left--;
        }
      }
      if (left < 0) {
        sizeExceeded = true;
        break;
      }
      var topBorderNotWhite = true;
      while ((topBorderNotWhite || !atLeastOneBlackPointFoundOnTop) && up >= 0) {
        topBorderNotWhite = this.containsBlackPoint(left, right, up, true);
        if (topBorderNotWhite) {
          up--;
          aBlackPointFoundOnBorder = true;
          atLeastOneBlackPointFoundOnTop = true;
        } else if (!atLeastOneBlackPointFoundOnTop) {
          up--;
        }
      }
      if (up < 0) {
        sizeExceeded = true;
        break;
      }
      if (aBlackPointFoundOnBorder) {
        atLeastOneBlackPointFoundOnBorder = true;
      }
    }
    if (!sizeExceeded && atLeastOneBlackPointFoundOnBorder) {
      var maxSize = right - left;
      var z = null;
      for (var i = 1; z === null && i < maxSize; i++) {
        z = this.getBlackPointOnSegment(left, down - i, left + i, down);
      }
      if (z == null) {
        throw new NotFoundException();
      }
      var t = null;
      for (var i = 1; t === null && i < maxSize; i++) {
        t = this.getBlackPointOnSegment(left, up + i, left + i, up);
      }
      if (t == null) {
        throw new NotFoundException();
      }
      var x = null;
      for (var i = 1; x === null && i < maxSize; i++) {
        x = this.getBlackPointOnSegment(right, up + i, right - i, up);
      }
      if (x == null) {
        throw new NotFoundException();
      }
      var y = null;
      for (var i = 1; y === null && i < maxSize; i++) {
        y = this.getBlackPointOnSegment(right, down - i, right - i, down);
      }
      if (y == null) {
        throw new NotFoundException();
      }
      return this.centerEdges(y, z, x, t);
    } else {
      throw new NotFoundException();
    }
  };
  WhiteRectangleDetector2.prototype.getBlackPointOnSegment = function(aX, aY, bX, bY) {
    var dist = MathUtils.round(MathUtils.distance(aX, aY, bX, bY));
    var xStep = (bX - aX) / dist;
    var yStep = (bY - aY) / dist;
    var image = this.image;
    for (var i = 0; i < dist; i++) {
      var x = MathUtils.round(aX + i * xStep);
      var y = MathUtils.round(aY + i * yStep);
      if (image.get(x, y)) {
        return new ResultPoint(x, y);
      }
    }
    return null;
  };
  WhiteRectangleDetector2.prototype.centerEdges = function(y, z, x, t) {
    var yi = y.getX();
    var yj = y.getY();
    var zi = z.getX();
    var zj = z.getY();
    var xi = x.getX();
    var xj = x.getY();
    var ti = t.getX();
    var tj = t.getY();
    var CORR = WhiteRectangleDetector2.CORR;
    if (yi < this.width / 2) {
      return [
        new ResultPoint(ti - CORR, tj + CORR),
        new ResultPoint(zi + CORR, zj + CORR),
        new ResultPoint(xi - CORR, xj - CORR),
        new ResultPoint(yi + CORR, yj - CORR)
      ];
    } else {
      return [
        new ResultPoint(ti + CORR, tj + CORR),
        new ResultPoint(zi + CORR, zj - CORR),
        new ResultPoint(xi - CORR, xj + CORR),
        new ResultPoint(yi - CORR, yj - CORR)
      ];
    }
  };
  WhiteRectangleDetector2.prototype.containsBlackPoint = function(a, b, fixed, horizontal) {
    var image = this.image;
    if (horizontal) {
      for (var x = a; x <= b; x++) {
        if (image.get(x, fixed)) {
          return true;
        }
      }
    } else {
      for (var y = a; y <= b; y++) {
        if (image.get(fixed, y)) {
          return true;
        }
      }
    }
    return false;
  };
  WhiteRectangleDetector2.INIT_SIZE = 10;
  WhiteRectangleDetector2.CORR = 1;
  return WhiteRectangleDetector2;
}();
var GridSampler = function() {
  function GridSampler2() {
  }
  GridSampler2.checkAndNudgePoints = function(image, points) {
    var width = image.getWidth();
    var height = image.getHeight();
    var nudged = true;
    for (var offset = 0; offset < points.length && nudged; offset += 2) {
      var x = Math.floor(points[offset]);
      var y = Math.floor(points[offset + 1]);
      if (x < -1 || x > width || y < -1 || y > height) {
        throw new NotFoundException();
      }
      nudged = false;
      if (x === -1) {
        points[offset] = 0;
        nudged = true;
      } else if (x === width) {
        points[offset] = width - 1;
        nudged = true;
      }
      if (y === -1) {
        points[offset + 1] = 0;
        nudged = true;
      } else if (y === height) {
        points[offset + 1] = height - 1;
        nudged = true;
      }
    }
    nudged = true;
    for (var offset = points.length - 2; offset >= 0 && nudged; offset -= 2) {
      var x = Math.floor(points[offset]);
      var y = Math.floor(points[offset + 1]);
      if (x < -1 || x > width || y < -1 || y > height) {
        throw new NotFoundException();
      }
      nudged = false;
      if (x === -1) {
        points[offset] = 0;
        nudged = true;
      } else if (x === width) {
        points[offset] = width - 1;
        nudged = true;
      }
      if (y === -1) {
        points[offset + 1] = 0;
        nudged = true;
      } else if (y === height) {
        points[offset + 1] = height - 1;
        nudged = true;
      }
    }
  };
  return GridSampler2;
}();
var PerspectiveTransform = function() {
  function PerspectiveTransform2(a11, a21, a31, a12, a22, a32, a13, a23, a33) {
    this.a11 = a11;
    this.a21 = a21;
    this.a31 = a31;
    this.a12 = a12;
    this.a22 = a22;
    this.a32 = a32;
    this.a13 = a13;
    this.a23 = a23;
    this.a33 = a33;
  }
  PerspectiveTransform2.quadrilateralToQuadrilateral = function(x0, y0, x1, y1, x2, y2, x3, y3, x0p, y0p, x1p, y1p, x2p, y2p, x3p, y3p) {
    var qToS = PerspectiveTransform2.quadrilateralToSquare(x0, y0, x1, y1, x2, y2, x3, y3);
    var sToQ = PerspectiveTransform2.squareToQuadrilateral(x0p, y0p, x1p, y1p, x2p, y2p, x3p, y3p);
    return sToQ.times(qToS);
  };
  PerspectiveTransform2.prototype.transformPoints = function(points) {
    var max = points.length;
    var a11 = this.a11;
    var a12 = this.a12;
    var a13 = this.a13;
    var a21 = this.a21;
    var a22 = this.a22;
    var a23 = this.a23;
    var a31 = this.a31;
    var a32 = this.a32;
    var a33 = this.a33;
    for (var i = 0; i < max; i += 2) {
      var x = points[i];
      var y = points[i + 1];
      var denominator = a13 * x + a23 * y + a33;
      points[i] = (a11 * x + a21 * y + a31) / denominator;
      points[i + 1] = (a12 * x + a22 * y + a32) / denominator;
    }
  };
  PerspectiveTransform2.prototype.transformPointsWithValues = function(xValues, yValues) {
    var a11 = this.a11;
    var a12 = this.a12;
    var a13 = this.a13;
    var a21 = this.a21;
    var a22 = this.a22;
    var a23 = this.a23;
    var a31 = this.a31;
    var a32 = this.a32;
    var a33 = this.a33;
    var n = xValues.length;
    for (var i = 0; i < n; i++) {
      var x = xValues[i];
      var y = yValues[i];
      var denominator = a13 * x + a23 * y + a33;
      xValues[i] = (a11 * x + a21 * y + a31) / denominator;
      yValues[i] = (a12 * x + a22 * y + a32) / denominator;
    }
  };
  PerspectiveTransform2.squareToQuadrilateral = function(x0, y0, x1, y1, x2, y2, x3, y3) {
    var dx3 = x0 - x1 + x2 - x3;
    var dy3 = y0 - y1 + y2 - y3;
    if (dx3 === 0 && dy3 === 0) {
      return new PerspectiveTransform2(x1 - x0, x2 - x1, x0, y1 - y0, y2 - y1, y0, 0, 0, 1);
    } else {
      var dx1 = x1 - x2;
      var dx2 = x3 - x2;
      var dy1 = y1 - y2;
      var dy2 = y3 - y2;
      var denominator = dx1 * dy2 - dx2 * dy1;
      var a13 = (dx3 * dy2 - dx2 * dy3) / denominator;
      var a23 = (dx1 * dy3 - dx3 * dy1) / denominator;
      return new PerspectiveTransform2(x1 - x0 + a13 * x1, x3 - x0 + a23 * x3, x0, y1 - y0 + a13 * y1, y3 - y0 + a23 * y3, y0, a13, a23, 1);
    }
  };
  PerspectiveTransform2.quadrilateralToSquare = function(x0, y0, x1, y1, x2, y2, x3, y3) {
    return PerspectiveTransform2.squareToQuadrilateral(x0, y0, x1, y1, x2, y2, x3, y3).buildAdjoint();
  };
  PerspectiveTransform2.prototype.buildAdjoint = function() {
    return new PerspectiveTransform2(this.a22 * this.a33 - this.a23 * this.a32, this.a23 * this.a31 - this.a21 * this.a33, this.a21 * this.a32 - this.a22 * this.a31, this.a13 * this.a32 - this.a12 * this.a33, this.a11 * this.a33 - this.a13 * this.a31, this.a12 * this.a31 - this.a11 * this.a32, this.a12 * this.a23 - this.a13 * this.a22, this.a13 * this.a21 - this.a11 * this.a23, this.a11 * this.a22 - this.a12 * this.a21);
  };
  PerspectiveTransform2.prototype.times = function(other) {
    return new PerspectiveTransform2(this.a11 * other.a11 + this.a21 * other.a12 + this.a31 * other.a13, this.a11 * other.a21 + this.a21 * other.a22 + this.a31 * other.a23, this.a11 * other.a31 + this.a21 * other.a32 + this.a31 * other.a33, this.a12 * other.a11 + this.a22 * other.a12 + this.a32 * other.a13, this.a12 * other.a21 + this.a22 * other.a22 + this.a32 * other.a23, this.a12 * other.a31 + this.a22 * other.a32 + this.a32 * other.a33, this.a13 * other.a11 + this.a23 * other.a12 + this.a33 * other.a13, this.a13 * other.a21 + this.a23 * other.a22 + this.a33 * other.a23, this.a13 * other.a31 + this.a23 * other.a32 + this.a33 * other.a33);
  };
  return PerspectiveTransform2;
}();
var __extends$j = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (b2.hasOwnProperty(p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var DefaultGridSampler = function(_super) {
  __extends$j(DefaultGridSampler2, _super);
  function DefaultGridSampler2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  DefaultGridSampler2.prototype.sampleGrid = function(image, dimensionX, dimensionY, p1ToX, p1ToY, p2ToX, p2ToY, p3ToX, p3ToY, p4ToX, p4ToY, p1FromX, p1FromY, p2FromX, p2FromY, p3FromX, p3FromY, p4FromX, p4FromY) {
    var transform = PerspectiveTransform.quadrilateralToQuadrilateral(p1ToX, p1ToY, p2ToX, p2ToY, p3ToX, p3ToY, p4ToX, p4ToY, p1FromX, p1FromY, p2FromX, p2FromY, p3FromX, p3FromY, p4FromX, p4FromY);
    return this.sampleGridWithTransform(image, dimensionX, dimensionY, transform);
  };
  DefaultGridSampler2.prototype.sampleGridWithTransform = function(image, dimensionX, dimensionY, transform) {
    if (dimensionX <= 0 || dimensionY <= 0) {
      throw new NotFoundException();
    }
    var bits = new BitMatrix(dimensionX, dimensionY);
    var points = new Float32Array(2 * dimensionX);
    for (var y = 0; y < dimensionY; y++) {
      var max = points.length;
      var iValue = y + 0.5;
      for (var x = 0; x < max; x += 2) {
        points[x] = x / 2 + 0.5;
        points[x + 1] = iValue;
      }
      transform.transformPoints(points);
      GridSampler.checkAndNudgePoints(image, points);
      try {
        for (var x = 0; x < max; x += 2) {
          if (image.get(Math.floor(points[x]), Math.floor(points[x + 1]))) {
            bits.set(x / 2, y);
          }
        }
      } catch (aioobe) {
        throw new NotFoundException();
      }
    }
    return bits;
  };
  return DefaultGridSampler2;
}(GridSampler);
var GridSamplerInstance = function() {
  function GridSamplerInstance2() {
  }
  GridSamplerInstance2.setGridSampler = function(newGridSampler) {
    GridSamplerInstance2.gridSampler = newGridSampler;
  };
  GridSamplerInstance2.getInstance = function() {
    return GridSamplerInstance2.gridSampler;
  };
  GridSamplerInstance2.gridSampler = new DefaultGridSampler();
  return GridSamplerInstance2;
}();
var Point = function() {
  function Point2(x, y) {
    this.x = x;
    this.y = y;
  }
  Point2.prototype.toResultPoint = function() {
    return new ResultPoint(this.getX(), this.getY());
  };
  Point2.prototype.getX = function() {
    return this.x;
  };
  Point2.prototype.getY = function() {
    return this.y;
  };
  return Point2;
}();
var Detector = function() {
  function Detector2(image) {
    this.EXPECTED_CORNER_BITS = new Int32Array([
      3808,
      476,
      2107,
      1799
    ]);
    this.image = image;
  }
  Detector2.prototype.detect = function() {
    return this.detectMirror(false);
  };
  Detector2.prototype.detectMirror = function(isMirror) {
    var pCenter = this.getMatrixCenter();
    var bullsEyeCorners = this.getBullsEyeCorners(pCenter);
    if (isMirror) {
      var temp = bullsEyeCorners[0];
      bullsEyeCorners[0] = bullsEyeCorners[2];
      bullsEyeCorners[2] = temp;
    }
    this.extractParameters(bullsEyeCorners);
    var bits = this.sampleGrid(this.image, bullsEyeCorners[this.shift % 4], bullsEyeCorners[(this.shift + 1) % 4], bullsEyeCorners[(this.shift + 2) % 4], bullsEyeCorners[(this.shift + 3) % 4]);
    var corners = this.getMatrixCornerPoints(bullsEyeCorners);
    return new AztecDetectorResult(bits, corners, this.compact, this.nbDataBlocks, this.nbLayers);
  };
  Detector2.prototype.extractParameters = function(bullsEyeCorners) {
    if (!this.isValidPoint(bullsEyeCorners[0]) || !this.isValidPoint(bullsEyeCorners[1]) || !this.isValidPoint(bullsEyeCorners[2]) || !this.isValidPoint(bullsEyeCorners[3])) {
      throw new NotFoundException();
    }
    var length = 2 * this.nbCenterLayers;
    var sides = new Int32Array([
      this.sampleLine(bullsEyeCorners[0], bullsEyeCorners[1], length),
      this.sampleLine(bullsEyeCorners[1], bullsEyeCorners[2], length),
      this.sampleLine(bullsEyeCorners[2], bullsEyeCorners[3], length),
      this.sampleLine(bullsEyeCorners[3], bullsEyeCorners[0], length)
    ]);
    this.shift = this.getRotation(sides, length);
    var parameterData = 0;
    for (var i = 0; i < 4; i++) {
      var side = sides[(this.shift + i) % 4];
      if (this.compact) {
        parameterData <<= 7;
        parameterData += side >> 1 & 127;
      } else {
        parameterData <<= 10;
        parameterData += (side >> 2 & 31 << 5) + (side >> 1 & 31);
      }
    }
    var correctedData = this.getCorrectedParameterData(parameterData, this.compact);
    if (this.compact) {
      this.nbLayers = (correctedData >> 6) + 1;
      this.nbDataBlocks = (correctedData & 63) + 1;
    } else {
      this.nbLayers = (correctedData >> 11) + 1;
      this.nbDataBlocks = (correctedData & 2047) + 1;
    }
  };
  Detector2.prototype.getRotation = function(sides, length) {
    var cornerBits = 0;
    sides.forEach(function(side, idx, arr) {
      var t = (side >> length - 2 << 1) + (side & 1);
      cornerBits = (cornerBits << 3) + t;
    });
    cornerBits = ((cornerBits & 1) << 11) + (cornerBits >> 1);
    for (var shift = 0; shift < 4; shift++) {
      if (Integer.bitCount(cornerBits ^ this.EXPECTED_CORNER_BITS[shift]) <= 2) {
        return shift;
      }
    }
    throw new NotFoundException();
  };
  Detector2.prototype.getCorrectedParameterData = function(parameterData, compact) {
    var numCodewords;
    var numDataCodewords;
    if (compact) {
      numCodewords = 7;
      numDataCodewords = 2;
    } else {
      numCodewords = 10;
      numDataCodewords = 4;
    }
    var numECCodewords = numCodewords - numDataCodewords;
    var parameterWords = new Int32Array(numCodewords);
    for (var i = numCodewords - 1; i >= 0; --i) {
      parameterWords[i] = parameterData & 15;
      parameterData >>= 4;
    }
    try {
      var rsDecoder = new ReedSolomonDecoder(GenericGF.AZTEC_PARAM);
      rsDecoder.decode(parameterWords, numECCodewords);
    } catch (ignored) {
      throw new NotFoundException();
    }
    var result = 0;
    for (var i = 0; i < numDataCodewords; i++) {
      result = (result << 4) + parameterWords[i];
    }
    return result;
  };
  Detector2.prototype.getBullsEyeCorners = function(pCenter) {
    var pina = pCenter;
    var pinb = pCenter;
    var pinc = pCenter;
    var pind = pCenter;
    var color = true;
    for (this.nbCenterLayers = 1; this.nbCenterLayers < 9; this.nbCenterLayers++) {
      var pouta = this.getFirstDifferent(pina, color, 1, -1);
      var poutb = this.getFirstDifferent(pinb, color, 1, 1);
      var poutc = this.getFirstDifferent(pinc, color, -1, 1);
      var poutd = this.getFirstDifferent(pind, color, -1, -1);
      if (this.nbCenterLayers > 2) {
        var q = this.distancePoint(poutd, pouta) * this.nbCenterLayers / (this.distancePoint(pind, pina) * (this.nbCenterLayers + 2));
        if (q < 0.75 || q > 1.25 || !this.isWhiteOrBlackRectangle(pouta, poutb, poutc, poutd)) {
          break;
        }
      }
      pina = pouta;
      pinb = poutb;
      pinc = poutc;
      pind = poutd;
      color = !color;
    }
    if (this.nbCenterLayers !== 5 && this.nbCenterLayers !== 7) {
      throw new NotFoundException();
    }
    this.compact = this.nbCenterLayers === 5;
    var pinax = new ResultPoint(pina.getX() + 0.5, pina.getY() - 0.5);
    var pinbx = new ResultPoint(pinb.getX() + 0.5, pinb.getY() + 0.5);
    var pincx = new ResultPoint(pinc.getX() - 0.5, pinc.getY() + 0.5);
    var pindx = new ResultPoint(pind.getX() - 0.5, pind.getY() - 0.5);
    return this.expandSquare([pinax, pinbx, pincx, pindx], 2 * this.nbCenterLayers - 3, 2 * this.nbCenterLayers);
  };
  Detector2.prototype.getMatrixCenter = function() {
    var pointA;
    var pointB;
    var pointC;
    var pointD;
    try {
      var cornerPoints = new WhiteRectangleDetector(this.image).detect();
      pointA = cornerPoints[0];
      pointB = cornerPoints[1];
      pointC = cornerPoints[2];
      pointD = cornerPoints[3];
    } catch (e) {
      var cx_1 = this.image.getWidth() / 2;
      var cy_1 = this.image.getHeight() / 2;
      pointA = this.getFirstDifferent(new Point(cx_1 + 7, cy_1 - 7), false, 1, -1).toResultPoint();
      pointB = this.getFirstDifferent(new Point(cx_1 + 7, cy_1 + 7), false, 1, 1).toResultPoint();
      pointC = this.getFirstDifferent(new Point(cx_1 - 7, cy_1 + 7), false, -1, 1).toResultPoint();
      pointD = this.getFirstDifferent(new Point(cx_1 - 7, cy_1 - 7), false, -1, -1).toResultPoint();
    }
    var cx = MathUtils.round((pointA.getX() + pointD.getX() + pointB.getX() + pointC.getX()) / 4);
    var cy = MathUtils.round((pointA.getY() + pointD.getY() + pointB.getY() + pointC.getY()) / 4);
    try {
      var cornerPoints = new WhiteRectangleDetector(this.image, 15, cx, cy).detect();
      pointA = cornerPoints[0];
      pointB = cornerPoints[1];
      pointC = cornerPoints[2];
      pointD = cornerPoints[3];
    } catch (e) {
      pointA = this.getFirstDifferent(new Point(cx + 7, cy - 7), false, 1, -1).toResultPoint();
      pointB = this.getFirstDifferent(new Point(cx + 7, cy + 7), false, 1, 1).toResultPoint();
      pointC = this.getFirstDifferent(new Point(cx - 7, cy + 7), false, -1, 1).toResultPoint();
      pointD = this.getFirstDifferent(new Point(cx - 7, cy - 7), false, -1, -1).toResultPoint();
    }
    cx = MathUtils.round((pointA.getX() + pointD.getX() + pointB.getX() + pointC.getX()) / 4);
    cy = MathUtils.round((pointA.getY() + pointD.getY() + pointB.getY() + pointC.getY()) / 4);
    return new Point(cx, cy);
  };
  Detector2.prototype.getMatrixCornerPoints = function(bullsEyeCorners) {
    return this.expandSquare(bullsEyeCorners, 2 * this.nbCenterLayers, this.getDimension());
  };
  Detector2.prototype.sampleGrid = function(image, topLeft, topRight, bottomRight, bottomLeft) {
    var sampler = GridSamplerInstance.getInstance();
    var dimension = this.getDimension();
    var low = dimension / 2 - this.nbCenterLayers;
    var high = dimension / 2 + this.nbCenterLayers;
    return sampler.sampleGrid(image, dimension, dimension, low, low, high, low, high, high, low, high, topLeft.getX(), topLeft.getY(), topRight.getX(), topRight.getY(), bottomRight.getX(), bottomRight.getY(), bottomLeft.getX(), bottomLeft.getY());
  };
  Detector2.prototype.sampleLine = function(p1, p2, size) {
    var result = 0;
    var d = this.distanceResultPoint(p1, p2);
    var moduleSize = d / size;
    var px = p1.getX();
    var py = p1.getY();
    var dx = moduleSize * (p2.getX() - p1.getX()) / d;
    var dy = moduleSize * (p2.getY() - p1.getY()) / d;
    for (var i = 0; i < size; i++) {
      if (this.image.get(MathUtils.round(px + i * dx), MathUtils.round(py + i * dy))) {
        result |= 1 << size - i - 1;
      }
    }
    return result;
  };
  Detector2.prototype.isWhiteOrBlackRectangle = function(p1, p2, p3, p4) {
    var corr = 3;
    p1 = new Point(p1.getX() - corr, p1.getY() + corr);
    p2 = new Point(p2.getX() - corr, p2.getY() - corr);
    p3 = new Point(p3.getX() + corr, p3.getY() - corr);
    p4 = new Point(p4.getX() + corr, p4.getY() + corr);
    var cInit = this.getColor(p4, p1);
    if (cInit === 0) {
      return false;
    }
    var c = this.getColor(p1, p2);
    if (c !== cInit) {
      return false;
    }
    c = this.getColor(p2, p3);
    if (c !== cInit) {
      return false;
    }
    c = this.getColor(p3, p4);
    return c === cInit;
  };
  Detector2.prototype.getColor = function(p1, p2) {
    var d = this.distancePoint(p1, p2);
    var dx = (p2.getX() - p1.getX()) / d;
    var dy = (p2.getY() - p1.getY()) / d;
    var error = 0;
    var px = p1.getX();
    var py = p1.getY();
    var colorModel = this.image.get(p1.getX(), p1.getY());
    var iMax = Math.ceil(d);
    for (var i = 0; i < iMax; i++) {
      px += dx;
      py += dy;
      if (this.image.get(MathUtils.round(px), MathUtils.round(py)) !== colorModel) {
        error++;
      }
    }
    var errRatio = error / d;
    if (errRatio > 0.1 && errRatio < 0.9) {
      return 0;
    }
    return errRatio <= 0.1 === colorModel ? 1 : -1;
  };
  Detector2.prototype.getFirstDifferent = function(init, color, dx, dy) {
    var x = init.getX() + dx;
    var y = init.getY() + dy;
    while (this.isValid(x, y) && this.image.get(x, y) === color) {
      x += dx;
      y += dy;
    }
    x -= dx;
    y -= dy;
    while (this.isValid(x, y) && this.image.get(x, y) === color) {
      x += dx;
    }
    x -= dx;
    while (this.isValid(x, y) && this.image.get(x, y) === color) {
      y += dy;
    }
    y -= dy;
    return new Point(x, y);
  };
  Detector2.prototype.expandSquare = function(cornerPoints, oldSide, newSide) {
    var ratio = newSide / (2 * oldSide);
    var dx = cornerPoints[0].getX() - cornerPoints[2].getX();
    var dy = cornerPoints[0].getY() - cornerPoints[2].getY();
    var centerx = (cornerPoints[0].getX() + cornerPoints[2].getX()) / 2;
    var centery = (cornerPoints[0].getY() + cornerPoints[2].getY()) / 2;
    var result0 = new ResultPoint(centerx + ratio * dx, centery + ratio * dy);
    var result2 = new ResultPoint(centerx - ratio * dx, centery - ratio * dy);
    dx = cornerPoints[1].getX() - cornerPoints[3].getX();
    dy = cornerPoints[1].getY() - cornerPoints[3].getY();
    centerx = (cornerPoints[1].getX() + cornerPoints[3].getX()) / 2;
    centery = (cornerPoints[1].getY() + cornerPoints[3].getY()) / 2;
    var result1 = new ResultPoint(centerx + ratio * dx, centery + ratio * dy);
    var result3 = new ResultPoint(centerx - ratio * dx, centery - ratio * dy);
    var results = [result0, result1, result2, result3];
    return results;
  };
  Detector2.prototype.isValid = function(x, y) {
    return x >= 0 && x < this.image.getWidth() && y > 0 && y < this.image.getHeight();
  };
  Detector2.prototype.isValidPoint = function(point) {
    var x = MathUtils.round(point.getX());
    var y = MathUtils.round(point.getY());
    return this.isValid(x, y);
  };
  Detector2.prototype.distancePoint = function(a, b) {
    return MathUtils.distance(a.getX(), a.getY(), b.getX(), b.getY());
  };
  Detector2.prototype.distanceResultPoint = function(a, b) {
    return MathUtils.distance(a.getX(), a.getY(), b.getX(), b.getY());
  };
  Detector2.prototype.getDimension = function() {
    if (this.compact) {
      return 4 * this.nbLayers + 11;
    }
    if (this.nbLayers <= 4) {
      return 4 * this.nbLayers + 15;
    }
    return 4 * this.nbLayers + 2 * (Integer.truncDivision(this.nbLayers - 4, 8) + 1) + 15;
  };
  return Detector2;
}();
var AztecReader = function() {
  function AztecReader2() {
  }
  AztecReader2.prototype.decode = function(image, hints) {
    if (hints === void 0) {
      hints = null;
    }
    var exception = null;
    var detector = new Detector(image.getBlackMatrix());
    var points = null;
    var decoderResult = null;
    try {
      var detectorResult = detector.detectMirror(false);
      points = detectorResult.getPoints();
      this.reportFoundResultPoints(hints, points);
      decoderResult = new Decoder().decode(detectorResult);
    } catch (e) {
      exception = e;
    }
    if (decoderResult == null) {
      try {
        var detectorResult = detector.detectMirror(true);
        points = detectorResult.getPoints();
        this.reportFoundResultPoints(hints, points);
        decoderResult = new Decoder().decode(detectorResult);
      } catch (e) {
        if (exception != null) {
          throw exception;
        }
        throw e;
      }
    }
    var result = new Result(decoderResult.getText(), decoderResult.getRawBytes(), decoderResult.getNumBits(), points, BarcodeFormat$1.AZTEC, System.currentTimeMillis());
    var byteSegments = decoderResult.getByteSegments();
    if (byteSegments != null) {
      result.putMetadata(ResultMetadataType$1.BYTE_SEGMENTS, byteSegments);
    }
    var ecLevel = decoderResult.getECLevel();
    if (ecLevel != null) {
      result.putMetadata(ResultMetadataType$1.ERROR_CORRECTION_LEVEL, ecLevel);
    }
    return result;
  };
  AztecReader2.prototype.reportFoundResultPoints = function(hints, points) {
    if (hints != null) {
      var rpcb_1 = hints.get(DecodeHintType$1.NEED_RESULT_POINT_CALLBACK);
      if (rpcb_1 != null) {
        points.forEach(function(point, idx, arr) {
          rpcb_1.foundPossibleResultPoint(point);
        });
      }
    }
  };
  AztecReader2.prototype.reset = function() {
  };
  return AztecReader2;
}();
var __extends$k = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (b2.hasOwnProperty(p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var BrowserAztecCodeReader = function(_super) {
  __extends$k(BrowserAztecCodeReader2, _super);
  function BrowserAztecCodeReader2(timeBetweenScansMillis) {
    if (timeBetweenScansMillis === void 0) {
      timeBetweenScansMillis = 500;
    }
    return _super.call(this, new AztecReader(), timeBetweenScansMillis) || this;
  }
  return BrowserAztecCodeReader2;
}(BrowserCodeReader);
var OneDReader = function() {
  function OneDReader2() {
  }
  OneDReader2.prototype.decode = function(image, hints) {
    try {
      return this.doDecode(image, hints);
    } catch (nfe) {
      var tryHarder = hints && hints.get(DecodeHintType$1.TRY_HARDER) === true;
      if (tryHarder && image.isRotateSupported()) {
        var rotatedImage = image.rotateCounterClockwise();
        var result = this.doDecode(rotatedImage, hints);
        var metadata = result.getResultMetadata();
        var orientation_1 = 270;
        if (metadata !== null && metadata.get(ResultMetadataType$1.ORIENTATION) === true) {
          orientation_1 = orientation_1 + metadata.get(ResultMetadataType$1.ORIENTATION) % 360;
        }
        result.putMetadata(ResultMetadataType$1.ORIENTATION, orientation_1);
        var points = result.getResultPoints();
        if (points !== null) {
          var height = rotatedImage.getHeight();
          for (var i = 0; i < points.length; i++) {
            points[i] = new ResultPoint(height - points[i].getY() - 1, points[i].getX());
          }
        }
        return result;
      } else {
        throw new NotFoundException();
      }
    }
  };
  OneDReader2.prototype.reset = function() {
  };
  OneDReader2.prototype.doDecode = function(image, hints) {
    var width = image.getWidth();
    var height = image.getHeight();
    var row = new BitArray(width);
    var tryHarder = hints && hints.get(DecodeHintType$1.TRY_HARDER) === true;
    var rowStep = Math.max(1, height >> (tryHarder ? 8 : 5));
    var maxLines;
    if (tryHarder) {
      maxLines = height;
    } else {
      maxLines = 15;
    }
    var middle = Math.trunc(height / 2);
    for (var x = 0; x < maxLines; x++) {
      var rowStepsAboveOrBelow = Math.trunc((x + 1) / 2);
      var isAbove = (x & 1) === 0;
      var rowNumber = middle + rowStep * (isAbove ? rowStepsAboveOrBelow : -rowStepsAboveOrBelow);
      if (rowNumber < 0 || rowNumber >= height) {
        break;
      }
      try {
        row = image.getBlackRow(rowNumber, row);
      } catch (ignored) {
        continue;
      }
      var _loop_1 = function(attempt2) {
        if (attempt2 === 1) {
          row.reverse();
          if (hints && hints.get(DecodeHintType$1.NEED_RESULT_POINT_CALLBACK) === true) {
            var newHints_1 = new Map();
            hints.forEach(function(hint, key) {
              return newHints_1.set(key, hint);
            });
            newHints_1.delete(DecodeHintType$1.NEED_RESULT_POINT_CALLBACK);
            hints = newHints_1;
          }
        }
        try {
          var result = this_1.decodeRow(rowNumber, row, hints);
          if (attempt2 === 1) {
            result.putMetadata(ResultMetadataType$1.ORIENTATION, 180);
            var points = result.getResultPoints();
            if (points !== null) {
              points[0] = new ResultPoint(width - points[0].getX() - 1, points[0].getY());
              points[1] = new ResultPoint(width - points[1].getX() - 1, points[1].getY());
            }
          }
          return {value: result};
        } catch (re) {
        }
      };
      var this_1 = this;
      for (var attempt = 0; attempt < 2; attempt++) {
        var state_1 = _loop_1(attempt);
        if (typeof state_1 === "object")
          return state_1.value;
      }
    }
    throw new NotFoundException();
  };
  OneDReader2.recordPattern = function(row, start, counters) {
    var numCounters = counters.length;
    for (var index = 0; index < numCounters; index++)
      counters[index] = 0;
    var end = row.getSize();
    if (start >= end) {
      throw new NotFoundException();
    }
    var isWhite = !row.get(start);
    var counterPosition = 0;
    var i = start;
    while (i < end) {
      if (row.get(i) !== isWhite) {
        counters[counterPosition]++;
      } else {
        if (++counterPosition === numCounters) {
          break;
        } else {
          counters[counterPosition] = 1;
          isWhite = !isWhite;
        }
      }
      i++;
    }
    if (!(counterPosition === numCounters || counterPosition === numCounters - 1 && i === end)) {
      throw new NotFoundException();
    }
  };
  OneDReader2.recordPatternInReverse = function(row, start, counters) {
    var numTransitionsLeft = counters.length;
    var last = row.get(start);
    while (start > 0 && numTransitionsLeft >= 0) {
      if (row.get(--start) !== last) {
        numTransitionsLeft--;
        last = !last;
      }
    }
    if (numTransitionsLeft >= 0) {
      throw new NotFoundException();
    }
    OneDReader2.recordPattern(row, start + 1, counters);
  };
  OneDReader2.patternMatchVariance = function(counters, pattern, maxIndividualVariance) {
    var numCounters = counters.length;
    var total = 0;
    var patternLength = 0;
    for (var i = 0; i < numCounters; i++) {
      total += counters[i];
      patternLength += pattern[i];
    }
    if (total < patternLength) {
      return Number.POSITIVE_INFINITY;
    }
    var unitBarWidth = total / patternLength;
    maxIndividualVariance *= unitBarWidth;
    var totalVariance = 0;
    for (var x = 0; x < numCounters; x++) {
      var counter = counters[x];
      var scaledPattern = pattern[x] * unitBarWidth;
      var variance = counter > scaledPattern ? counter - scaledPattern : scaledPattern - counter;
      if (variance > maxIndividualVariance) {
        return Number.POSITIVE_INFINITY;
      }
      totalVariance += variance;
    }
    return totalVariance / total;
  };
  return OneDReader2;
}();
var __extends$l = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (b2.hasOwnProperty(p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var Code128Reader = function(_super) {
  __extends$l(Code128Reader2, _super);
  function Code128Reader2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  Code128Reader2.findStartPattern = function(row) {
    var width = row.getSize();
    var rowOffset = row.getNextSet(0);
    var counterPosition = 0;
    var counters = Int32Array.from([0, 0, 0, 0, 0, 0]);
    var patternStart = rowOffset;
    var isWhite = false;
    var patternLength = 6;
    for (var i = rowOffset; i < width; i++) {
      if (row.get(i) !== isWhite) {
        counters[counterPosition]++;
      } else {
        if (counterPosition === patternLength - 1) {
          var bestVariance = Code128Reader2.MAX_AVG_VARIANCE;
          var bestMatch = -1;
          for (var startCode = Code128Reader2.CODE_START_A; startCode <= Code128Reader2.CODE_START_C; startCode++) {
            var variance = OneDReader.patternMatchVariance(counters, Code128Reader2.CODE_PATTERNS[startCode], Code128Reader2.MAX_INDIVIDUAL_VARIANCE);
            if (variance < bestVariance) {
              bestVariance = variance;
              bestMatch = startCode;
            }
          }
          if (bestMatch >= 0 && row.isRange(Math.max(0, patternStart - (i - patternStart) / 2), patternStart, false)) {
            return Int32Array.from([patternStart, i, bestMatch]);
          }
          patternStart += counters[0] + counters[1];
          counters = counters.slice(2, counters.length - 1);
          counters[counterPosition - 1] = 0;
          counters[counterPosition] = 0;
          counterPosition--;
        } else {
          counterPosition++;
        }
        counters[counterPosition] = 1;
        isWhite = !isWhite;
      }
    }
    throw new NotFoundException();
  };
  Code128Reader2.decodeCode = function(row, counters, rowOffset) {
    OneDReader.recordPattern(row, rowOffset, counters);
    var bestVariance = Code128Reader2.MAX_AVG_VARIANCE;
    var bestMatch = -1;
    for (var d = 0; d < Code128Reader2.CODE_PATTERNS.length; d++) {
      var pattern = Code128Reader2.CODE_PATTERNS[d];
      var variance = this.patternMatchVariance(counters, pattern, Code128Reader2.MAX_INDIVIDUAL_VARIANCE);
      if (variance < bestVariance) {
        bestVariance = variance;
        bestMatch = d;
      }
    }
    if (bestMatch >= 0) {
      return bestMatch;
    } else {
      throw new NotFoundException();
    }
  };
  Code128Reader2.prototype.decodeRow = function(rowNumber, row, hints) {
    var convertFNC1 = hints && hints.get(DecodeHintType$1.ASSUME_GS1) === true;
    var startPatternInfo = Code128Reader2.findStartPattern(row);
    var startCode = startPatternInfo[2];
    var currentRawCodesIndex = 0;
    var rawCodes = new Uint8Array(20);
    rawCodes[currentRawCodesIndex++] = startCode;
    var codeSet;
    switch (startCode) {
      case Code128Reader2.CODE_START_A:
        codeSet = Code128Reader2.CODE_CODE_A;
        break;
      case Code128Reader2.CODE_START_B:
        codeSet = Code128Reader2.CODE_CODE_B;
        break;
      case Code128Reader2.CODE_START_C:
        codeSet = Code128Reader2.CODE_CODE_C;
        break;
      default:
        throw new FormatException();
    }
    var done = false;
    var isNextShifted = false;
    var result = "";
    var lastStart = startPatternInfo[0];
    var nextStart = startPatternInfo[1];
    var counters = Int32Array.from([0, 0, 0, 0, 0, 0]);
    var lastCode = 0;
    var code = 0;
    var checksumTotal = startCode;
    var multiplier = 0;
    var lastCharacterWasPrintable = true;
    var upperMode = false;
    var shiftUpperMode = false;
    while (!done) {
      var unshift = isNextShifted;
      isNextShifted = false;
      lastCode = code;
      code = Code128Reader2.decodeCode(row, counters, nextStart);
      rawCodes[currentRawCodesIndex++] = code;
      if (code !== Code128Reader2.CODE_STOP) {
        lastCharacterWasPrintable = true;
      }
      if (code !== Code128Reader2.CODE_STOP) {
        multiplier++;
        checksumTotal += multiplier * code;
      }
      lastStart = nextStart;
      nextStart += counters.reduce(function(previous, current) {
        return previous + current;
      }, 0);
      switch (code) {
        case Code128Reader2.CODE_START_A:
        case Code128Reader2.CODE_START_B:
        case Code128Reader2.CODE_START_C:
          throw new FormatException();
      }
      switch (codeSet) {
        case Code128Reader2.CODE_CODE_A:
          if (code < 64) {
            if (shiftUpperMode === upperMode) {
              result += String.fromCharCode(" ".charCodeAt(0) + code);
            } else {
              result += String.fromCharCode(" ".charCodeAt(0) + code + 128);
            }
            shiftUpperMode = false;
          } else if (code < 96) {
            if (shiftUpperMode === upperMode) {
              result += String.fromCharCode(code - 64);
            } else {
              result += String.fromCharCode(code + 64);
            }
            shiftUpperMode = false;
          } else {
            if (code !== Code128Reader2.CODE_STOP) {
              lastCharacterWasPrintable = false;
            }
            switch (code) {
              case Code128Reader2.CODE_FNC_1:
                if (convertFNC1) {
                  if (result.length === 0) {
                    result += "]C1";
                  } else {
                    result += String.fromCharCode(29);
                  }
                }
                break;
              case Code128Reader2.CODE_FNC_2:
              case Code128Reader2.CODE_FNC_3:
                break;
              case Code128Reader2.CODE_FNC_4_A:
                if (!upperMode && shiftUpperMode) {
                  upperMode = true;
                  shiftUpperMode = false;
                } else if (upperMode && shiftUpperMode) {
                  upperMode = false;
                  shiftUpperMode = false;
                } else {
                  shiftUpperMode = true;
                }
                break;
              case Code128Reader2.CODE_SHIFT:
                isNextShifted = true;
                codeSet = Code128Reader2.CODE_CODE_B;
                break;
              case Code128Reader2.CODE_CODE_B:
                codeSet = Code128Reader2.CODE_CODE_B;
                break;
              case Code128Reader2.CODE_CODE_C:
                codeSet = Code128Reader2.CODE_CODE_C;
                break;
              case Code128Reader2.CODE_STOP:
                done = true;
                break;
            }
          }
          break;
        case Code128Reader2.CODE_CODE_B:
          if (code < 96) {
            if (shiftUpperMode === upperMode) {
              result += String.fromCharCode(" ".charCodeAt(0) + code);
            } else {
              result += String.fromCharCode(" ".charCodeAt(0) + code + 128);
            }
            shiftUpperMode = false;
          } else {
            if (code !== Code128Reader2.CODE_STOP) {
              lastCharacterWasPrintable = false;
            }
            switch (code) {
              case Code128Reader2.CODE_FNC_1:
                if (convertFNC1) {
                  if (result.length === 0) {
                    result += "]C1";
                  } else {
                    result += String.fromCharCode(29);
                  }
                }
                break;
              case Code128Reader2.CODE_FNC_2:
              case Code128Reader2.CODE_FNC_3:
                break;
              case Code128Reader2.CODE_FNC_4_B:
                if (!upperMode && shiftUpperMode) {
                  upperMode = true;
                  shiftUpperMode = false;
                } else if (upperMode && shiftUpperMode) {
                  upperMode = false;
                  shiftUpperMode = false;
                } else {
                  shiftUpperMode = true;
                }
                break;
              case Code128Reader2.CODE_SHIFT:
                isNextShifted = true;
                codeSet = Code128Reader2.CODE_CODE_A;
                break;
              case Code128Reader2.CODE_CODE_A:
                codeSet = Code128Reader2.CODE_CODE_A;
                break;
              case Code128Reader2.CODE_CODE_C:
                codeSet = Code128Reader2.CODE_CODE_C;
                break;
              case Code128Reader2.CODE_STOP:
                done = true;
                break;
            }
          }
          break;
        case Code128Reader2.CODE_CODE_C:
          if (code < 100) {
            if (code < 10) {
              result += "0";
            }
            result += code;
          } else {
            if (code !== Code128Reader2.CODE_STOP) {
              lastCharacterWasPrintable = false;
            }
            switch (code) {
              case Code128Reader2.CODE_FNC_1:
                if (convertFNC1) {
                  if (result.length === 0) {
                    result += "]C1";
                  } else {
                    result += String.fromCharCode(29);
                  }
                }
                break;
              case Code128Reader2.CODE_CODE_A:
                codeSet = Code128Reader2.CODE_CODE_A;
                break;
              case Code128Reader2.CODE_CODE_B:
                codeSet = Code128Reader2.CODE_CODE_B;
                break;
              case Code128Reader2.CODE_STOP:
                done = true;
                break;
            }
          }
          break;
      }
      if (unshift) {
        codeSet = codeSet === Code128Reader2.CODE_CODE_A ? Code128Reader2.CODE_CODE_B : Code128Reader2.CODE_CODE_A;
      }
    }
    var lastPatternSize = nextStart - lastStart;
    nextStart = row.getNextUnset(nextStart);
    if (!row.isRange(nextStart, Math.min(row.getSize(), nextStart + (nextStart - lastStart) / 2), false)) {
      throw new NotFoundException();
    }
    checksumTotal -= multiplier * lastCode;
    if (checksumTotal % 103 !== lastCode) {
      throw new ChecksumException();
    }
    var resultLength = result.length;
    if (resultLength === 0) {
      throw new NotFoundException();
    }
    if (resultLength > 0 && lastCharacterWasPrintable) {
      if (codeSet === Code128Reader2.CODE_CODE_C) {
        result = result.substring(0, resultLength - 2);
      } else {
        result = result.substring(0, resultLength - 1);
      }
    }
    var left = (startPatternInfo[1] + startPatternInfo[0]) / 2;
    var right = lastStart + lastPatternSize / 2;
    var rawCodesSize = rawCodes.length;
    var rawBytes = new Uint8Array(rawCodesSize);
    for (var i = 0; i < rawCodesSize; i++) {
      rawBytes[i] = rawCodes[i];
    }
    var points = [new ResultPoint(left, rowNumber), new ResultPoint(right, rowNumber)];
    return new Result(result, rawBytes, 0, points, BarcodeFormat$1.CODE_128, new Date().getTime());
  };
  Code128Reader2.CODE_PATTERNS = [
    Int32Array.from([2, 1, 2, 2, 2, 2]),
    Int32Array.from([2, 2, 2, 1, 2, 2]),
    Int32Array.from([2, 2, 2, 2, 2, 1]),
    Int32Array.from([1, 2, 1, 2, 2, 3]),
    Int32Array.from([1, 2, 1, 3, 2, 2]),
    Int32Array.from([1, 3, 1, 2, 2, 2]),
    Int32Array.from([1, 2, 2, 2, 1, 3]),
    Int32Array.from([1, 2, 2, 3, 1, 2]),
    Int32Array.from([1, 3, 2, 2, 1, 2]),
    Int32Array.from([2, 2, 1, 2, 1, 3]),
    Int32Array.from([2, 2, 1, 3, 1, 2]),
    Int32Array.from([2, 3, 1, 2, 1, 2]),
    Int32Array.from([1, 1, 2, 2, 3, 2]),
    Int32Array.from([1, 2, 2, 1, 3, 2]),
    Int32Array.from([1, 2, 2, 2, 3, 1]),
    Int32Array.from([1, 1, 3, 2, 2, 2]),
    Int32Array.from([1, 2, 3, 1, 2, 2]),
    Int32Array.from([1, 2, 3, 2, 2, 1]),
    Int32Array.from([2, 2, 3, 2, 1, 1]),
    Int32Array.from([2, 2, 1, 1, 3, 2]),
    Int32Array.from([2, 2, 1, 2, 3, 1]),
    Int32Array.from([2, 1, 3, 2, 1, 2]),
    Int32Array.from([2, 2, 3, 1, 1, 2]),
    Int32Array.from([3, 1, 2, 1, 3, 1]),
    Int32Array.from([3, 1, 1, 2, 2, 2]),
    Int32Array.from([3, 2, 1, 1, 2, 2]),
    Int32Array.from([3, 2, 1, 2, 2, 1]),
    Int32Array.from([3, 1, 2, 2, 1, 2]),
    Int32Array.from([3, 2, 2, 1, 1, 2]),
    Int32Array.from([3, 2, 2, 2, 1, 1]),
    Int32Array.from([2, 1, 2, 1, 2, 3]),
    Int32Array.from([2, 1, 2, 3, 2, 1]),
    Int32Array.from([2, 3, 2, 1, 2, 1]),
    Int32Array.from([1, 1, 1, 3, 2, 3]),
    Int32Array.from([1, 3, 1, 1, 2, 3]),
    Int32Array.from([1, 3, 1, 3, 2, 1]),
    Int32Array.from([1, 1, 2, 3, 1, 3]),
    Int32Array.from([1, 3, 2, 1, 1, 3]),
    Int32Array.from([1, 3, 2, 3, 1, 1]),
    Int32Array.from([2, 1, 1, 3, 1, 3]),
    Int32Array.from([2, 3, 1, 1, 1, 3]),
    Int32Array.from([2, 3, 1, 3, 1, 1]),
    Int32Array.from([1, 1, 2, 1, 3, 3]),
    Int32Array.from([1, 1, 2, 3, 3, 1]),
    Int32Array.from([1, 3, 2, 1, 3, 1]),
    Int32Array.from([1, 1, 3, 1, 2, 3]),
    Int32Array.from([1, 1, 3, 3, 2, 1]),
    Int32Array.from([1, 3, 3, 1, 2, 1]),
    Int32Array.from([3, 1, 3, 1, 2, 1]),
    Int32Array.from([2, 1, 1, 3, 3, 1]),
    Int32Array.from([2, 3, 1, 1, 3, 1]),
    Int32Array.from([2, 1, 3, 1, 1, 3]),
    Int32Array.from([2, 1, 3, 3, 1, 1]),
    Int32Array.from([2, 1, 3, 1, 3, 1]),
    Int32Array.from([3, 1, 1, 1, 2, 3]),
    Int32Array.from([3, 1, 1, 3, 2, 1]),
    Int32Array.from([3, 3, 1, 1, 2, 1]),
    Int32Array.from([3, 1, 2, 1, 1, 3]),
    Int32Array.from([3, 1, 2, 3, 1, 1]),
    Int32Array.from([3, 3, 2, 1, 1, 1]),
    Int32Array.from([3, 1, 4, 1, 1, 1]),
    Int32Array.from([2, 2, 1, 4, 1, 1]),
    Int32Array.from([4, 3, 1, 1, 1, 1]),
    Int32Array.from([1, 1, 1, 2, 2, 4]),
    Int32Array.from([1, 1, 1, 4, 2, 2]),
    Int32Array.from([1, 2, 1, 1, 2, 4]),
    Int32Array.from([1, 2, 1, 4, 2, 1]),
    Int32Array.from([1, 4, 1, 1, 2, 2]),
    Int32Array.from([1, 4, 1, 2, 2, 1]),
    Int32Array.from([1, 1, 2, 2, 1, 4]),
    Int32Array.from([1, 1, 2, 4, 1, 2]),
    Int32Array.from([1, 2, 2, 1, 1, 4]),
    Int32Array.from([1, 2, 2, 4, 1, 1]),
    Int32Array.from([1, 4, 2, 1, 1, 2]),
    Int32Array.from([1, 4, 2, 2, 1, 1]),
    Int32Array.from([2, 4, 1, 2, 1, 1]),
    Int32Array.from([2, 2, 1, 1, 1, 4]),
    Int32Array.from([4, 1, 3, 1, 1, 1]),
    Int32Array.from([2, 4, 1, 1, 1, 2]),
    Int32Array.from([1, 3, 4, 1, 1, 1]),
    Int32Array.from([1, 1, 1, 2, 4, 2]),
    Int32Array.from([1, 2, 1, 1, 4, 2]),
    Int32Array.from([1, 2, 1, 2, 4, 1]),
    Int32Array.from([1, 1, 4, 2, 1, 2]),
    Int32Array.from([1, 2, 4, 1, 1, 2]),
    Int32Array.from([1, 2, 4, 2, 1, 1]),
    Int32Array.from([4, 1, 1, 2, 1, 2]),
    Int32Array.from([4, 2, 1, 1, 1, 2]),
    Int32Array.from([4, 2, 1, 2, 1, 1]),
    Int32Array.from([2, 1, 2, 1, 4, 1]),
    Int32Array.from([2, 1, 4, 1, 2, 1]),
    Int32Array.from([4, 1, 2, 1, 2, 1]),
    Int32Array.from([1, 1, 1, 1, 4, 3]),
    Int32Array.from([1, 1, 1, 3, 4, 1]),
    Int32Array.from([1, 3, 1, 1, 4, 1]),
    Int32Array.from([1, 1, 4, 1, 1, 3]),
    Int32Array.from([1, 1, 4, 3, 1, 1]),
    Int32Array.from([4, 1, 1, 1, 1, 3]),
    Int32Array.from([4, 1, 1, 3, 1, 1]),
    Int32Array.from([1, 1, 3, 1, 4, 1]),
    Int32Array.from([1, 1, 4, 1, 3, 1]),
    Int32Array.from([3, 1, 1, 1, 4, 1]),
    Int32Array.from([4, 1, 1, 1, 3, 1]),
    Int32Array.from([2, 1, 1, 4, 1, 2]),
    Int32Array.from([2, 1, 1, 2, 1, 4]),
    Int32Array.from([2, 1, 1, 2, 3, 2]),
    Int32Array.from([2, 3, 3, 1, 1, 1, 2])
  ];
  Code128Reader2.MAX_AVG_VARIANCE = 0.25;
  Code128Reader2.MAX_INDIVIDUAL_VARIANCE = 0.7;
  Code128Reader2.CODE_SHIFT = 98;
  Code128Reader2.CODE_CODE_C = 99;
  Code128Reader2.CODE_CODE_B = 100;
  Code128Reader2.CODE_CODE_A = 101;
  Code128Reader2.CODE_FNC_1 = 102;
  Code128Reader2.CODE_FNC_2 = 97;
  Code128Reader2.CODE_FNC_3 = 96;
  Code128Reader2.CODE_FNC_4_A = 101;
  Code128Reader2.CODE_FNC_4_B = 100;
  Code128Reader2.CODE_START_A = 103;
  Code128Reader2.CODE_START_B = 104;
  Code128Reader2.CODE_START_C = 105;
  Code128Reader2.CODE_STOP = 106;
  return Code128Reader2;
}(OneDReader);
var __extends$m = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (b2.hasOwnProperty(p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __values$3 = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return {value: o && o[i++], done: !o};
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var Code39Reader = function(_super) {
  __extends$m(Code39Reader2, _super);
  function Code39Reader2(usingCheckDigit, extendedMode) {
    if (usingCheckDigit === void 0) {
      usingCheckDigit = false;
    }
    if (extendedMode === void 0) {
      extendedMode = false;
    }
    var _this = _super.call(this) || this;
    _this.usingCheckDigit = usingCheckDigit;
    _this.extendedMode = extendedMode;
    _this.decodeRowResult = "";
    _this.counters = new Int32Array(9);
    return _this;
  }
  Code39Reader2.prototype.decodeRow = function(rowNumber, row, hints) {
    var e_1, _a, e_2, _b;
    var theCounters = this.counters;
    theCounters.fill(0);
    this.decodeRowResult = "";
    var start = Code39Reader2.findAsteriskPattern(row, theCounters);
    var nextStart = row.getNextSet(start[1]);
    var end = row.getSize();
    var decodedChar;
    var lastStart;
    do {
      Code39Reader2.recordPattern(row, nextStart, theCounters);
      var pattern = Code39Reader2.toNarrowWidePattern(theCounters);
      if (pattern < 0) {
        throw new NotFoundException();
      }
      decodedChar = Code39Reader2.patternToChar(pattern);
      this.decodeRowResult += decodedChar;
      lastStart = nextStart;
      try {
        for (var theCounters_1 = (e_1 = void 0, __values$3(theCounters)), theCounters_1_1 = theCounters_1.next(); !theCounters_1_1.done; theCounters_1_1 = theCounters_1.next()) {
          var counter = theCounters_1_1.value;
          nextStart += counter;
        }
      } catch (e_1_1) {
        e_1 = {error: e_1_1};
      } finally {
        try {
          if (theCounters_1_1 && !theCounters_1_1.done && (_a = theCounters_1.return))
            _a.call(theCounters_1);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
      nextStart = row.getNextSet(nextStart);
    } while (decodedChar !== "*");
    this.decodeRowResult = this.decodeRowResult.substring(0, this.decodeRowResult.length - 1);
    var lastPatternSize = 0;
    try {
      for (var theCounters_2 = __values$3(theCounters), theCounters_2_1 = theCounters_2.next(); !theCounters_2_1.done; theCounters_2_1 = theCounters_2.next()) {
        var counter = theCounters_2_1.value;
        lastPatternSize += counter;
      }
    } catch (e_2_1) {
      e_2 = {error: e_2_1};
    } finally {
      try {
        if (theCounters_2_1 && !theCounters_2_1.done && (_b = theCounters_2.return))
          _b.call(theCounters_2);
      } finally {
        if (e_2)
          throw e_2.error;
      }
    }
    var whiteSpaceAfterEnd = nextStart - lastStart - lastPatternSize;
    if (nextStart !== end && whiteSpaceAfterEnd * 2 < lastPatternSize) {
      throw new NotFoundException();
    }
    if (this.usingCheckDigit) {
      var max = this.decodeRowResult.length - 1;
      var total = 0;
      for (var i = 0; i < max; i++) {
        total += Code39Reader2.ALPHABET_STRING.indexOf(this.decodeRowResult.charAt(i));
      }
      if (this.decodeRowResult.charAt(max) !== Code39Reader2.ALPHABET_STRING.charAt(total % 43)) {
        throw new ChecksumException();
      }
      this.decodeRowResult = this.decodeRowResult.substring(0, max);
    }
    if (this.decodeRowResult.length === 0) {
      throw new NotFoundException();
    }
    var resultString;
    if (this.extendedMode) {
      resultString = Code39Reader2.decodeExtended(this.decodeRowResult);
    } else {
      resultString = this.decodeRowResult;
    }
    var left = (start[1] + start[0]) / 2;
    var right = lastStart + lastPatternSize / 2;
    return new Result(resultString, null, 0, [new ResultPoint(left, rowNumber), new ResultPoint(right, rowNumber)], BarcodeFormat$1.CODE_39, new Date().getTime());
  };
  Code39Reader2.findAsteriskPattern = function(row, counters) {
    var width = row.getSize();
    var rowOffset = row.getNextSet(0);
    var counterPosition = 0;
    var patternStart = rowOffset;
    var isWhite = false;
    var patternLength = counters.length;
    for (var i = rowOffset; i < width; i++) {
      if (row.get(i) !== isWhite) {
        counters[counterPosition]++;
      } else {
        if (counterPosition === patternLength - 1) {
          if (this.toNarrowWidePattern(counters) === Code39Reader2.ASTERISK_ENCODING && row.isRange(Math.max(0, patternStart - Math.floor((i - patternStart) / 2)), patternStart, false)) {
            return [patternStart, i];
          }
          patternStart += counters[0] + counters[1];
          counters.copyWithin(0, 2, 2 + counterPosition - 1);
          counters[counterPosition - 1] = 0;
          counters[counterPosition] = 0;
          counterPosition--;
        } else {
          counterPosition++;
        }
        counters[counterPosition] = 1;
        isWhite = !isWhite;
      }
    }
    throw new NotFoundException();
  };
  Code39Reader2.toNarrowWidePattern = function(counters) {
    var e_3, _a;
    var numCounters = counters.length;
    var maxNarrowCounter = 0;
    var wideCounters;
    do {
      var minCounter = 2147483647;
      try {
        for (var counters_1 = (e_3 = void 0, __values$3(counters)), counters_1_1 = counters_1.next(); !counters_1_1.done; counters_1_1 = counters_1.next()) {
          var counter = counters_1_1.value;
          if (counter < minCounter && counter > maxNarrowCounter) {
            minCounter = counter;
          }
        }
      } catch (e_3_1) {
        e_3 = {error: e_3_1};
      } finally {
        try {
          if (counters_1_1 && !counters_1_1.done && (_a = counters_1.return))
            _a.call(counters_1);
        } finally {
          if (e_3)
            throw e_3.error;
        }
      }
      maxNarrowCounter = minCounter;
      wideCounters = 0;
      var totalWideCountersWidth = 0;
      var pattern = 0;
      for (var i = 0; i < numCounters; i++) {
        var counter = counters[i];
        if (counter > maxNarrowCounter) {
          pattern |= 1 << numCounters - 1 - i;
          wideCounters++;
          totalWideCountersWidth += counter;
        }
      }
      if (wideCounters === 3) {
        for (var i = 0; i < numCounters && wideCounters > 0; i++) {
          var counter = counters[i];
          if (counter > maxNarrowCounter) {
            wideCounters--;
            if (counter * 2 >= totalWideCountersWidth) {
              return -1;
            }
          }
        }
        return pattern;
      }
    } while (wideCounters > 3);
    return -1;
  };
  Code39Reader2.patternToChar = function(pattern) {
    for (var i = 0; i < Code39Reader2.CHARACTER_ENCODINGS.length; i++) {
      if (Code39Reader2.CHARACTER_ENCODINGS[i] === pattern) {
        return Code39Reader2.ALPHABET_STRING.charAt(i);
      }
    }
    if (pattern === Code39Reader2.ASTERISK_ENCODING) {
      return "*";
    }
    throw new NotFoundException();
  };
  Code39Reader2.decodeExtended = function(encoded) {
    var length = encoded.length;
    var decoded = "";
    for (var i = 0; i < length; i++) {
      var c = encoded.charAt(i);
      if (c === "+" || c === "$" || c === "%" || c === "/") {
        var next = encoded.charAt(i + 1);
        var decodedChar = "\0";
        switch (c) {
          case "+":
            if (next >= "A" && next <= "Z") {
              decodedChar = String.fromCharCode(next.charCodeAt(0) + 32);
            } else {
              throw new FormatException();
            }
            break;
          case "$":
            if (next >= "A" && next <= "Z") {
              decodedChar = String.fromCharCode(next.charCodeAt(0) - 64);
            } else {
              throw new FormatException();
            }
            break;
          case "%":
            if (next >= "A" && next <= "E") {
              decodedChar = String.fromCharCode(next.charCodeAt(0) - 38);
            } else if (next >= "F" && next <= "J") {
              decodedChar = String.fromCharCode(next.charCodeAt(0) - 11);
            } else if (next >= "K" && next <= "O") {
              decodedChar = String.fromCharCode(next.charCodeAt(0) + 16);
            } else if (next >= "P" && next <= "T") {
              decodedChar = String.fromCharCode(next.charCodeAt(0) + 43);
            } else if (next === "U") {
              decodedChar = "\0";
            } else if (next === "V") {
              decodedChar = "@";
            } else if (next === "W") {
              decodedChar = "`";
            } else if (next === "X" || next === "Y" || next === "Z") {
              decodedChar = "";
            } else {
              throw new FormatException();
            }
            break;
          case "/":
            if (next >= "A" && next <= "O") {
              decodedChar = String.fromCharCode(next.charCodeAt(0) - 32);
            } else if (next === "Z") {
              decodedChar = ":";
            } else {
              throw new FormatException();
            }
            break;
        }
        decoded += decodedChar;
        i++;
      } else {
        decoded += c;
      }
    }
    return decoded;
  };
  Code39Reader2.ALPHABET_STRING = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. $/+%";
  Code39Reader2.CHARACTER_ENCODINGS = [
    52,
    289,
    97,
    352,
    49,
    304,
    112,
    37,
    292,
    100,
    265,
    73,
    328,
    25,
    280,
    88,
    13,
    268,
    76,
    28,
    259,
    67,
    322,
    19,
    274,
    82,
    7,
    262,
    70,
    22,
    385,
    193,
    448,
    145,
    400,
    208,
    133,
    388,
    196,
    168,
    162,
    138,
    42
  ];
  Code39Reader2.ASTERISK_ENCODING = 148;
  return Code39Reader2;
}(OneDReader);
var __extends$n = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (b2.hasOwnProperty(p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __values$4 = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return {value: o && o[i++], done: !o};
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var ITFReader = function(_super) {
  __extends$n(ITFReader2, _super);
  function ITFReader2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.narrowLineWidth = -1;
    return _this;
  }
  ITFReader2.prototype.decodeRow = function(rowNumber, row, hints) {
    var e_1, _a;
    var startRange = this.decodeStart(row);
    var endRange = this.decodeEnd(row);
    var result = new StringBuilder();
    ITFReader2.decodeMiddle(row, startRange[1], endRange[0], result);
    var resultString = result.toString();
    var allowedLengths = null;
    if (hints != null) {
      allowedLengths = hints.get(DecodeHintType$1.ALLOWED_LENGTHS);
    }
    if (allowedLengths == null) {
      allowedLengths = ITFReader2.DEFAULT_ALLOWED_LENGTHS;
    }
    var length = resultString.length;
    var lengthOK = false;
    var maxAllowedLength = 0;
    try {
      for (var allowedLengths_1 = __values$4(allowedLengths), allowedLengths_1_1 = allowedLengths_1.next(); !allowedLengths_1_1.done; allowedLengths_1_1 = allowedLengths_1.next()) {
        var value = allowedLengths_1_1.value;
        if (length === value) {
          lengthOK = true;
          break;
        }
        if (value > maxAllowedLength) {
          maxAllowedLength = value;
        }
      }
    } catch (e_1_1) {
      e_1 = {error: e_1_1};
    } finally {
      try {
        if (allowedLengths_1_1 && !allowedLengths_1_1.done && (_a = allowedLengths_1.return))
          _a.call(allowedLengths_1);
      } finally {
        if (e_1)
          throw e_1.error;
      }
    }
    if (!lengthOK && length > maxAllowedLength) {
      lengthOK = true;
    }
    if (!lengthOK) {
      throw new FormatException();
    }
    var points = [new ResultPoint(startRange[1], rowNumber), new ResultPoint(endRange[0], rowNumber)];
    var resultReturn = new Result(resultString, null, 0, points, BarcodeFormat$1.ITF, new Date().getTime());
    return resultReturn;
  };
  ITFReader2.decodeMiddle = function(row, payloadStart, payloadEnd, resultString) {
    var counterDigitPair = new Int32Array(10);
    var counterBlack = new Int32Array(5);
    var counterWhite = new Int32Array(5);
    counterDigitPair.fill(0);
    counterBlack.fill(0);
    counterWhite.fill(0);
    while (payloadStart < payloadEnd) {
      OneDReader.recordPattern(row, payloadStart, counterDigitPair);
      for (var k = 0; k < 5; k++) {
        var twoK = 2 * k;
        counterBlack[k] = counterDigitPair[twoK];
        counterWhite[k] = counterDigitPair[twoK + 1];
      }
      var bestMatch = ITFReader2.decodeDigit(counterBlack);
      resultString.append(bestMatch.toString());
      bestMatch = this.decodeDigit(counterWhite);
      resultString.append(bestMatch.toString());
      counterDigitPair.forEach(function(counterDigit) {
        payloadStart += counterDigit;
      });
    }
  };
  ITFReader2.prototype.decodeStart = function(row) {
    var endStart = ITFReader2.skipWhiteSpace(row);
    var startPattern = ITFReader2.findGuardPattern(row, endStart, ITFReader2.START_PATTERN);
    this.narrowLineWidth = (startPattern[1] - startPattern[0]) / 4;
    this.validateQuietZone(row, startPattern[0]);
    return startPattern;
  };
  ITFReader2.prototype.validateQuietZone = function(row, startPattern) {
    var quietCount = this.narrowLineWidth * 10;
    quietCount = quietCount < startPattern ? quietCount : startPattern;
    for (var i = startPattern - 1; quietCount > 0 && i >= 0; i--) {
      if (row.get(i)) {
        break;
      }
      quietCount--;
    }
    if (quietCount !== 0) {
      throw new NotFoundException();
    }
  };
  ITFReader2.skipWhiteSpace = function(row) {
    var width = row.getSize();
    var endStart = row.getNextSet(0);
    if (endStart === width) {
      throw new NotFoundException();
    }
    return endStart;
  };
  ITFReader2.prototype.decodeEnd = function(row) {
    row.reverse();
    try {
      var endStart = ITFReader2.skipWhiteSpace(row);
      var endPattern = void 0;
      try {
        endPattern = ITFReader2.findGuardPattern(row, endStart, ITFReader2.END_PATTERN_REVERSED[0]);
      } catch (error) {
        if (error instanceof NotFoundException) {
          endPattern = ITFReader2.findGuardPattern(row, endStart, ITFReader2.END_PATTERN_REVERSED[1]);
        }
      }
      this.validateQuietZone(row, endPattern[0]);
      var temp = endPattern[0];
      endPattern[0] = row.getSize() - endPattern[1];
      endPattern[1] = row.getSize() - temp;
      return endPattern;
    } finally {
      row.reverse();
    }
  };
  ITFReader2.findGuardPattern = function(row, rowOffset, pattern) {
    var patternLength = pattern.length;
    var counters = new Int32Array(patternLength);
    var width = row.getSize();
    var isWhite = false;
    var counterPosition = 0;
    var patternStart = rowOffset;
    counters.fill(0);
    for (var x = rowOffset; x < width; x++) {
      if (row.get(x) !== isWhite) {
        counters[counterPosition]++;
      } else {
        if (counterPosition === patternLength - 1) {
          if (OneDReader.patternMatchVariance(counters, pattern, ITFReader2.MAX_INDIVIDUAL_VARIANCE) < ITFReader2.MAX_AVG_VARIANCE) {
            return [patternStart, x];
          }
          patternStart += counters[0] + counters[1];
          System.arraycopy(counters, 2, counters, 0, counterPosition - 1);
          counters[counterPosition - 1] = 0;
          counters[counterPosition] = 0;
          counterPosition--;
        } else {
          counterPosition++;
        }
        counters[counterPosition] = 1;
        isWhite = !isWhite;
      }
    }
    throw new NotFoundException();
  };
  ITFReader2.decodeDigit = function(counters) {
    var bestVariance = ITFReader2.MAX_AVG_VARIANCE;
    var bestMatch = -1;
    var max = ITFReader2.PATTERNS.length;
    for (var i = 0; i < max; i++) {
      var pattern = ITFReader2.PATTERNS[i];
      var variance = OneDReader.patternMatchVariance(counters, pattern, ITFReader2.MAX_INDIVIDUAL_VARIANCE);
      if (variance < bestVariance) {
        bestVariance = variance;
        bestMatch = i;
      } else if (variance === bestVariance) {
        bestMatch = -1;
      }
    }
    if (bestMatch >= 0) {
      return bestMatch % 10;
    } else {
      throw new NotFoundException();
    }
  };
  ITFReader2.PATTERNS = [
    Int32Array.from([1, 1, 2, 2, 1]),
    Int32Array.from([2, 1, 1, 1, 2]),
    Int32Array.from([1, 2, 1, 1, 2]),
    Int32Array.from([2, 2, 1, 1, 1]),
    Int32Array.from([1, 1, 2, 1, 2]),
    Int32Array.from([2, 1, 2, 1, 1]),
    Int32Array.from([1, 2, 2, 1, 1]),
    Int32Array.from([1, 1, 1, 2, 2]),
    Int32Array.from([2, 1, 1, 2, 1]),
    Int32Array.from([1, 2, 1, 2, 1]),
    Int32Array.from([1, 1, 3, 3, 1]),
    Int32Array.from([3, 1, 1, 1, 3]),
    Int32Array.from([1, 3, 1, 1, 3]),
    Int32Array.from([3, 3, 1, 1, 1]),
    Int32Array.from([1, 1, 3, 1, 3]),
    Int32Array.from([3, 1, 3, 1, 1]),
    Int32Array.from([1, 3, 3, 1, 1]),
    Int32Array.from([1, 1, 1, 3, 3]),
    Int32Array.from([3, 1, 1, 3, 1]),
    Int32Array.from([1, 3, 1, 3, 1])
  ];
  ITFReader2.MAX_AVG_VARIANCE = 0.38;
  ITFReader2.MAX_INDIVIDUAL_VARIANCE = 0.5;
  ITFReader2.DEFAULT_ALLOWED_LENGTHS = [6, 8, 10, 12, 14];
  ITFReader2.START_PATTERN = Int32Array.from([1, 1, 1, 1]);
  ITFReader2.END_PATTERN_REVERSED = [
    Int32Array.from([1, 1, 2]),
    Int32Array.from([1, 1, 3])
  ];
  return ITFReader2;
}(OneDReader);
var __extends$o = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (b2.hasOwnProperty(p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var AbstractUPCEANReader = function(_super) {
  __extends$o(AbstractUPCEANReader2, _super);
  function AbstractUPCEANReader2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.decodeRowStringBuffer = "";
    return _this;
  }
  AbstractUPCEANReader2.findStartGuardPattern = function(row) {
    var foundStart = false;
    var startRange;
    var nextStart = 0;
    var counters = Int32Array.from([0, 0, 0]);
    while (!foundStart) {
      counters = Int32Array.from([0, 0, 0]);
      startRange = AbstractUPCEANReader2.findGuardPattern(row, nextStart, false, this.START_END_PATTERN, counters);
      var start = startRange[0];
      nextStart = startRange[1];
      var quietStart = start - (nextStart - start);
      if (quietStart >= 0) {
        foundStart = row.isRange(quietStart, start, false);
      }
    }
    return startRange;
  };
  AbstractUPCEANReader2.checkChecksum = function(s) {
    return AbstractUPCEANReader2.checkStandardUPCEANChecksum(s);
  };
  AbstractUPCEANReader2.checkStandardUPCEANChecksum = function(s) {
    var length = s.length;
    if (length === 0)
      return false;
    var check = parseInt(s.charAt(length - 1), 10);
    return AbstractUPCEANReader2.getStandardUPCEANChecksum(s.substring(0, length - 1)) === check;
  };
  AbstractUPCEANReader2.getStandardUPCEANChecksum = function(s) {
    var length = s.length;
    var sum = 0;
    for (var i = length - 1; i >= 0; i -= 2) {
      var digit = s.charAt(i).charCodeAt(0) - "0".charCodeAt(0);
      if (digit < 0 || digit > 9) {
        throw new FormatException();
      }
      sum += digit;
    }
    sum *= 3;
    for (var i = length - 2; i >= 0; i -= 2) {
      var digit = s.charAt(i).charCodeAt(0) - "0".charCodeAt(0);
      if (digit < 0 || digit > 9) {
        throw new FormatException();
      }
      sum += digit;
    }
    return (1e3 - sum) % 10;
  };
  AbstractUPCEANReader2.decodeEnd = function(row, endStart) {
    return AbstractUPCEANReader2.findGuardPattern(row, endStart, false, AbstractUPCEANReader2.START_END_PATTERN, new Int32Array(AbstractUPCEANReader2.START_END_PATTERN.length).fill(0));
  };
  AbstractUPCEANReader2.findGuardPatternWithoutCounters = function(row, rowOffset, whiteFirst, pattern) {
    return this.findGuardPattern(row, rowOffset, whiteFirst, pattern, new Int32Array(pattern.length));
  };
  AbstractUPCEANReader2.findGuardPattern = function(row, rowOffset, whiteFirst, pattern, counters) {
    var width = row.getSize();
    rowOffset = whiteFirst ? row.getNextUnset(rowOffset) : row.getNextSet(rowOffset);
    var counterPosition = 0;
    var patternStart = rowOffset;
    var patternLength = pattern.length;
    var isWhite = whiteFirst;
    for (var x = rowOffset; x < width; x++) {
      if (row.get(x) !== isWhite) {
        counters[counterPosition]++;
      } else {
        if (counterPosition === patternLength - 1) {
          if (OneDReader.patternMatchVariance(counters, pattern, AbstractUPCEANReader2.MAX_INDIVIDUAL_VARIANCE) < AbstractUPCEANReader2.MAX_AVG_VARIANCE) {
            return Int32Array.from([patternStart, x]);
          }
          patternStart += counters[0] + counters[1];
          var slice = counters.slice(2, counters.length - 1);
          for (var i = 0; i < counterPosition - 1; i++) {
            counters[i] = slice[i];
          }
          counters[counterPosition - 1] = 0;
          counters[counterPosition] = 0;
          counterPosition--;
        } else {
          counterPosition++;
        }
        counters[counterPosition] = 1;
        isWhite = !isWhite;
      }
    }
    throw new NotFoundException();
  };
  AbstractUPCEANReader2.decodeDigit = function(row, counters, rowOffset, patterns) {
    this.recordPattern(row, rowOffset, counters);
    var bestVariance = this.MAX_AVG_VARIANCE;
    var bestMatch = -1;
    var max = patterns.length;
    for (var i = 0; i < max; i++) {
      var pattern = patterns[i];
      var variance = OneDReader.patternMatchVariance(counters, pattern, AbstractUPCEANReader2.MAX_INDIVIDUAL_VARIANCE);
      if (variance < bestVariance) {
        bestVariance = variance;
        bestMatch = i;
      }
    }
    if (bestMatch >= 0) {
      return bestMatch;
    } else {
      throw new NotFoundException();
    }
  };
  AbstractUPCEANReader2.MAX_AVG_VARIANCE = 0.48;
  AbstractUPCEANReader2.MAX_INDIVIDUAL_VARIANCE = 0.7;
  AbstractUPCEANReader2.START_END_PATTERN = Int32Array.from([1, 1, 1]);
  AbstractUPCEANReader2.MIDDLE_PATTERN = Int32Array.from([1, 1, 1, 1, 1]);
  AbstractUPCEANReader2.END_PATTERN = Int32Array.from([1, 1, 1, 1, 1, 1]);
  AbstractUPCEANReader2.L_PATTERNS = [
    Int32Array.from([3, 2, 1, 1]),
    Int32Array.from([2, 2, 2, 1]),
    Int32Array.from([2, 1, 2, 2]),
    Int32Array.from([1, 4, 1, 1]),
    Int32Array.from([1, 1, 3, 2]),
    Int32Array.from([1, 2, 3, 1]),
    Int32Array.from([1, 1, 1, 4]),
    Int32Array.from([1, 3, 1, 2]),
    Int32Array.from([1, 2, 1, 3]),
    Int32Array.from([3, 1, 1, 2])
  ];
  return AbstractUPCEANReader2;
}(OneDReader);
var __values$5 = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return {value: o && o[i++], done: !o};
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var UPCEANExtension5Support = function() {
  function UPCEANExtension5Support2() {
    this.CHECK_DIGIT_ENCODINGS = [24, 20, 18, 17, 12, 6, 3, 10, 9, 5];
    this.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0]);
    this.decodeRowStringBuffer = "";
  }
  UPCEANExtension5Support2.prototype.decodeRow = function(rowNumber, row, extensionStartRange) {
    var result = this.decodeRowStringBuffer;
    var end = this.decodeMiddle(row, extensionStartRange, result);
    var resultString = result.toString();
    var extensionData = UPCEANExtension5Support2.parseExtensionString(resultString);
    var resultPoints = [
      new ResultPoint((extensionStartRange[0] + extensionStartRange[1]) / 2, rowNumber),
      new ResultPoint(end, rowNumber)
    ];
    var extensionResult = new Result(resultString, null, 0, resultPoints, BarcodeFormat$1.UPC_EAN_EXTENSION, new Date().getTime());
    if (extensionData != null) {
      extensionResult.putAllMetadata(extensionData);
    }
    return extensionResult;
  };
  UPCEANExtension5Support2.prototype.decodeMiddle = function(row, startRange, resultString) {
    var e_1, _a;
    var counters = this.decodeMiddleCounters;
    counters[0] = 0;
    counters[1] = 0;
    counters[2] = 0;
    counters[3] = 0;
    var end = row.getSize();
    var rowOffset = startRange[1];
    var lgPatternFound = 0;
    for (var x = 0; x < 5 && rowOffset < end; x++) {
      var bestMatch = AbstractUPCEANReader.decodeDigit(row, counters, rowOffset, AbstractUPCEANReader.L_AND_G_PATTERNS);
      resultString += String.fromCharCode("0".charCodeAt(0) + bestMatch % 10);
      try {
        for (var counters_1 = (e_1 = void 0, __values$5(counters)), counters_1_1 = counters_1.next(); !counters_1_1.done; counters_1_1 = counters_1.next()) {
          var counter = counters_1_1.value;
          rowOffset += counter;
        }
      } catch (e_1_1) {
        e_1 = {error: e_1_1};
      } finally {
        try {
          if (counters_1_1 && !counters_1_1.done && (_a = counters_1.return))
            _a.call(counters_1);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
      if (bestMatch >= 10) {
        lgPatternFound |= 1 << 4 - x;
      }
      if (x !== 4) {
        rowOffset = row.getNextSet(rowOffset);
        rowOffset = row.getNextUnset(rowOffset);
      }
    }
    if (resultString.length !== 5) {
      throw new NotFoundException();
    }
    var checkDigit = this.determineCheckDigit(lgPatternFound);
    if (UPCEANExtension5Support2.extensionChecksum(resultString.toString()) !== checkDigit) {
      throw new NotFoundException();
    }
    return rowOffset;
  };
  UPCEANExtension5Support2.extensionChecksum = function(s) {
    var length = s.length;
    var sum = 0;
    for (var i = length - 2; i >= 0; i -= 2) {
      sum += s.charAt(i).charCodeAt(0) - "0".charCodeAt(0);
    }
    sum *= 3;
    for (var i = length - 1; i >= 0; i -= 2) {
      sum += s.charAt(i).charCodeAt(0) - "0".charCodeAt(0);
    }
    sum *= 3;
    return sum % 10;
  };
  UPCEANExtension5Support2.prototype.determineCheckDigit = function(lgPatternFound) {
    for (var d = 0; d < 10; d++) {
      if (lgPatternFound === this.CHECK_DIGIT_ENCODINGS[d]) {
        return d;
      }
    }
    throw new NotFoundException();
  };
  UPCEANExtension5Support2.parseExtensionString = function(raw) {
    if (raw.length !== 5) {
      return null;
    }
    var value = UPCEANExtension5Support2.parseExtension5String(raw);
    if (value == null) {
      return null;
    }
    return new Map([[ResultMetadataType$1.SUGGESTED_PRICE, value]]);
  };
  UPCEANExtension5Support2.parseExtension5String = function(raw) {
    var currency;
    switch (raw.charAt(0)) {
      case "0":
        currency = "£";
        break;
      case "5":
        currency = "$";
        break;
      case "9":
        switch (raw) {
          case "90000":
            return null;
          case "99991":
            return "0.00";
          case "99990":
            return "Used";
        }
        currency = "";
        break;
      default:
        currency = "";
        break;
    }
    var rawAmount = parseInt(raw.substring(1));
    var unitsString = (rawAmount / 100).toString();
    var hundredths = rawAmount % 100;
    var hundredthsString = hundredths < 10 ? "0" + hundredths : hundredths.toString();
    return currency + unitsString + "." + hundredthsString;
  };
  return UPCEANExtension5Support2;
}();
var __values$6 = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return {value: o && o[i++], done: !o};
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var UPCEANExtension2Support = function() {
  function UPCEANExtension2Support2() {
    this.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0]);
    this.decodeRowStringBuffer = "";
  }
  UPCEANExtension2Support2.prototype.decodeRow = function(rowNumber, row, extensionStartRange) {
    var result = this.decodeRowStringBuffer;
    var end = this.decodeMiddle(row, extensionStartRange, result);
    var resultString = result.toString();
    var extensionData = UPCEANExtension2Support2.parseExtensionString(resultString);
    var resultPoints = [
      new ResultPoint((extensionStartRange[0] + extensionStartRange[1]) / 2, rowNumber),
      new ResultPoint(end, rowNumber)
    ];
    var extensionResult = new Result(resultString, null, 0, resultPoints, BarcodeFormat$1.UPC_EAN_EXTENSION, new Date().getTime());
    if (extensionData != null) {
      extensionResult.putAllMetadata(extensionData);
    }
    return extensionResult;
  };
  UPCEANExtension2Support2.prototype.decodeMiddle = function(row, startRange, resultString) {
    var e_1, _a;
    var counters = this.decodeMiddleCounters;
    counters[0] = 0;
    counters[1] = 0;
    counters[2] = 0;
    counters[3] = 0;
    var end = row.getSize();
    var rowOffset = startRange[1];
    var checkParity = 0;
    for (var x = 0; x < 2 && rowOffset < end; x++) {
      var bestMatch = AbstractUPCEANReader.decodeDigit(row, counters, rowOffset, AbstractUPCEANReader.L_AND_G_PATTERNS);
      resultString += String.fromCharCode("0".charCodeAt(0) + bestMatch % 10);
      try {
        for (var counters_1 = (e_1 = void 0, __values$6(counters)), counters_1_1 = counters_1.next(); !counters_1_1.done; counters_1_1 = counters_1.next()) {
          var counter = counters_1_1.value;
          rowOffset += counter;
        }
      } catch (e_1_1) {
        e_1 = {error: e_1_1};
      } finally {
        try {
          if (counters_1_1 && !counters_1_1.done && (_a = counters_1.return))
            _a.call(counters_1);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
      if (bestMatch >= 10) {
        checkParity |= 1 << 1 - x;
      }
      if (x !== 1) {
        rowOffset = row.getNextSet(rowOffset);
        rowOffset = row.getNextUnset(rowOffset);
      }
    }
    if (resultString.length !== 2) {
      throw new NotFoundException();
    }
    if (parseInt(resultString.toString()) % 4 !== checkParity) {
      throw new NotFoundException();
    }
    return rowOffset;
  };
  UPCEANExtension2Support2.parseExtensionString = function(raw) {
    if (raw.length !== 2) {
      return null;
    }
    return new Map([[ResultMetadataType$1.ISSUE_NUMBER, parseInt(raw)]]);
  };
  return UPCEANExtension2Support2;
}();
var UPCEANExtensionSupport = function() {
  function UPCEANExtensionSupport2() {
  }
  UPCEANExtensionSupport2.decodeRow = function(rowNumber, row, rowOffset) {
    var extensionStartRange = AbstractUPCEANReader.findGuardPattern(row, rowOffset, false, this.EXTENSION_START_PATTERN, new Int32Array(this.EXTENSION_START_PATTERN.length).fill(0));
    try {
      var fiveSupport = new UPCEANExtension5Support();
      return fiveSupport.decodeRow(rowNumber, row, extensionStartRange);
    } catch (err) {
      var twoSupport = new UPCEANExtension2Support();
      return twoSupport.decodeRow(rowNumber, row, extensionStartRange);
    }
  };
  UPCEANExtensionSupport2.EXTENSION_START_PATTERN = Int32Array.from([1, 1, 2]);
  return UPCEANExtensionSupport2;
}();
var __extends$p = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (b2.hasOwnProperty(p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var UPCEANReader = function(_super) {
  __extends$p(UPCEANReader2, _super);
  function UPCEANReader2() {
    var _this = _super.call(this) || this;
    _this.decodeRowStringBuffer = "";
    UPCEANReader2.L_AND_G_PATTERNS = UPCEANReader2.L_PATTERNS.map(function(arr) {
      return Int32Array.from(arr);
    });
    for (var i = 10; i < 20; i++) {
      var widths = UPCEANReader2.L_PATTERNS[i - 10];
      var reversedWidths = new Int32Array(widths.length);
      for (var j = 0; j < widths.length; j++) {
        reversedWidths[j] = widths[widths.length - j - 1];
      }
      UPCEANReader2.L_AND_G_PATTERNS[i] = reversedWidths;
    }
    return _this;
  }
  UPCEANReader2.prototype.decodeRow = function(rowNumber, row, hints) {
    var startGuardRange = UPCEANReader2.findStartGuardPattern(row);
    var resultPointCallback = hints == null ? null : hints.get(DecodeHintType$1.NEED_RESULT_POINT_CALLBACK);
    if (resultPointCallback != null) {
      var resultPoint_1 = new ResultPoint((startGuardRange[0] + startGuardRange[1]) / 2, rowNumber);
      resultPointCallback.foundPossibleResultPoint(resultPoint_1);
    }
    var budello = this.decodeMiddle(row, startGuardRange, this.decodeRowStringBuffer);
    var endStart = budello.rowOffset;
    var result = budello.resultString;
    if (resultPointCallback != null) {
      var resultPoint_2 = new ResultPoint(endStart, rowNumber);
      resultPointCallback.foundPossibleResultPoint(resultPoint_2);
    }
    var endRange = UPCEANReader2.decodeEnd(row, endStart);
    if (resultPointCallback != null) {
      var resultPoint_3 = new ResultPoint((endRange[0] + endRange[1]) / 2, rowNumber);
      resultPointCallback.foundPossibleResultPoint(resultPoint_3);
    }
    var end = endRange[1];
    var quietEnd = end + (end - endRange[0]);
    if (quietEnd >= row.getSize() || !row.isRange(end, quietEnd, false)) {
      throw new NotFoundException();
    }
    var resultString = result.toString();
    if (resultString.length < 8) {
      throw new FormatException();
    }
    if (!UPCEANReader2.checkChecksum(resultString)) {
      throw new ChecksumException();
    }
    var left = (startGuardRange[1] + startGuardRange[0]) / 2;
    var right = (endRange[1] + endRange[0]) / 2;
    var format = this.getBarcodeFormat();
    var resultPoint = [new ResultPoint(left, rowNumber), new ResultPoint(right, rowNumber)];
    var decodeResult = new Result(resultString, null, 0, resultPoint, format, new Date().getTime());
    var extensionLength = 0;
    try {
      var extensionResult = UPCEANExtensionSupport.decodeRow(rowNumber, row, endRange[1]);
      decodeResult.putMetadata(ResultMetadataType$1.UPC_EAN_EXTENSION, extensionResult.getText());
      decodeResult.putAllMetadata(extensionResult.getResultMetadata());
      decodeResult.addResultPoints(extensionResult.getResultPoints());
      extensionLength = extensionResult.getText().length;
    } catch (err) {
    }
    var allowedExtensions = hints == null ? null : hints.get(DecodeHintType$1.ALLOWED_EAN_EXTENSIONS);
    if (allowedExtensions != null) {
      var valid = false;
      for (var length_1 in allowedExtensions) {
        if (extensionLength.toString() === length_1) {
          valid = true;
          break;
        }
      }
      if (!valid) {
        throw new NotFoundException();
      }
    }
    if (format === BarcodeFormat$1.EAN_13 || format === BarcodeFormat$1.UPC_A)
      ;
    return decodeResult;
  };
  UPCEANReader2.checkChecksum = function(s) {
    return UPCEANReader2.checkStandardUPCEANChecksum(s);
  };
  UPCEANReader2.checkStandardUPCEANChecksum = function(s) {
    var length = s.length;
    if (length === 0)
      return false;
    var check = parseInt(s.charAt(length - 1), 10);
    return UPCEANReader2.getStandardUPCEANChecksum(s.substring(0, length - 1)) === check;
  };
  UPCEANReader2.getStandardUPCEANChecksum = function(s) {
    var length = s.length;
    var sum = 0;
    for (var i = length - 1; i >= 0; i -= 2) {
      var digit = s.charAt(i).charCodeAt(0) - "0".charCodeAt(0);
      if (digit < 0 || digit > 9) {
        throw new FormatException();
      }
      sum += digit;
    }
    sum *= 3;
    for (var i = length - 2; i >= 0; i -= 2) {
      var digit = s.charAt(i).charCodeAt(0) - "0".charCodeAt(0);
      if (digit < 0 || digit > 9) {
        throw new FormatException();
      }
      sum += digit;
    }
    return (1e3 - sum) % 10;
  };
  UPCEANReader2.decodeEnd = function(row, endStart) {
    return UPCEANReader2.findGuardPattern(row, endStart, false, UPCEANReader2.START_END_PATTERN, new Int32Array(UPCEANReader2.START_END_PATTERN.length).fill(0));
  };
  return UPCEANReader2;
}(AbstractUPCEANReader);
var __extends$q = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (b2.hasOwnProperty(p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __values$7 = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return {value: o && o[i++], done: !o};
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var EAN13Reader = function(_super) {
  __extends$q(EAN13Reader2, _super);
  function EAN13Reader2() {
    var _this = _super.call(this) || this;
    _this.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0]);
    return _this;
  }
  EAN13Reader2.prototype.decodeMiddle = function(row, startRange, resultString) {
    var e_1, _a, e_2, _b;
    var counters = this.decodeMiddleCounters;
    counters[0] = 0;
    counters[1] = 0;
    counters[2] = 0;
    counters[3] = 0;
    var end = row.getSize();
    var rowOffset = startRange[1];
    var lgPatternFound = 0;
    for (var x = 0; x < 6 && rowOffset < end; x++) {
      var bestMatch = UPCEANReader.decodeDigit(row, counters, rowOffset, UPCEANReader.L_AND_G_PATTERNS);
      resultString += String.fromCharCode("0".charCodeAt(0) + bestMatch % 10);
      try {
        for (var counters_1 = (e_1 = void 0, __values$7(counters)), counters_1_1 = counters_1.next(); !counters_1_1.done; counters_1_1 = counters_1.next()) {
          var counter = counters_1_1.value;
          rowOffset += counter;
        }
      } catch (e_1_1) {
        e_1 = {error: e_1_1};
      } finally {
        try {
          if (counters_1_1 && !counters_1_1.done && (_a = counters_1.return))
            _a.call(counters_1);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
      if (bestMatch >= 10) {
        lgPatternFound |= 1 << 5 - x;
      }
    }
    resultString = EAN13Reader2.determineFirstDigit(resultString, lgPatternFound);
    var middleRange = UPCEANReader.findGuardPattern(row, rowOffset, true, UPCEANReader.MIDDLE_PATTERN, new Int32Array(UPCEANReader.MIDDLE_PATTERN.length).fill(0));
    rowOffset = middleRange[1];
    for (var x = 0; x < 6 && rowOffset < end; x++) {
      var bestMatch = UPCEANReader.decodeDigit(row, counters, rowOffset, UPCEANReader.L_PATTERNS);
      resultString += String.fromCharCode("0".charCodeAt(0) + bestMatch);
      try {
        for (var counters_2 = (e_2 = void 0, __values$7(counters)), counters_2_1 = counters_2.next(); !counters_2_1.done; counters_2_1 = counters_2.next()) {
          var counter = counters_2_1.value;
          rowOffset += counter;
        }
      } catch (e_2_1) {
        e_2 = {error: e_2_1};
      } finally {
        try {
          if (counters_2_1 && !counters_2_1.done && (_b = counters_2.return))
            _b.call(counters_2);
        } finally {
          if (e_2)
            throw e_2.error;
        }
      }
    }
    return {rowOffset, resultString};
  };
  EAN13Reader2.prototype.getBarcodeFormat = function() {
    return BarcodeFormat$1.EAN_13;
  };
  EAN13Reader2.determineFirstDigit = function(resultString, lgPatternFound) {
    for (var d = 0; d < 10; d++) {
      if (lgPatternFound === this.FIRST_DIGIT_ENCODINGS[d]) {
        resultString = String.fromCharCode("0".charCodeAt(0) + d) + resultString;
        return resultString;
      }
    }
    throw new NotFoundException();
  };
  EAN13Reader2.FIRST_DIGIT_ENCODINGS = [0, 11, 13, 14, 19, 25, 28, 21, 22, 26];
  return EAN13Reader2;
}(UPCEANReader);
var __extends$r = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (b2.hasOwnProperty(p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __values$8 = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return {value: o && o[i++], done: !o};
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var EAN8Reader = function(_super) {
  __extends$r(EAN8Reader2, _super);
  function EAN8Reader2() {
    var _this = _super.call(this) || this;
    _this.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0]);
    return _this;
  }
  EAN8Reader2.prototype.decodeMiddle = function(row, startRange, resultString) {
    var e_1, _a, e_2, _b;
    var counters = this.decodeMiddleCounters;
    counters[0] = 0;
    counters[1] = 0;
    counters[2] = 0;
    counters[3] = 0;
    var end = row.getSize();
    var rowOffset = startRange[1];
    for (var x = 0; x < 4 && rowOffset < end; x++) {
      var bestMatch = UPCEANReader.decodeDigit(row, counters, rowOffset, UPCEANReader.L_PATTERNS);
      resultString += String.fromCharCode("0".charCodeAt(0) + bestMatch);
      try {
        for (var counters_1 = (e_1 = void 0, __values$8(counters)), counters_1_1 = counters_1.next(); !counters_1_1.done; counters_1_1 = counters_1.next()) {
          var counter = counters_1_1.value;
          rowOffset += counter;
        }
      } catch (e_1_1) {
        e_1 = {error: e_1_1};
      } finally {
        try {
          if (counters_1_1 && !counters_1_1.done && (_a = counters_1.return))
            _a.call(counters_1);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
    }
    var middleRange = UPCEANReader.findGuardPattern(row, rowOffset, true, UPCEANReader.MIDDLE_PATTERN, new Int32Array(UPCEANReader.MIDDLE_PATTERN.length).fill(0));
    rowOffset = middleRange[1];
    for (var x = 0; x < 4 && rowOffset < end; x++) {
      var bestMatch = UPCEANReader.decodeDigit(row, counters, rowOffset, UPCEANReader.L_PATTERNS);
      resultString += String.fromCharCode("0".charCodeAt(0) + bestMatch);
      try {
        for (var counters_2 = (e_2 = void 0, __values$8(counters)), counters_2_1 = counters_2.next(); !counters_2_1.done; counters_2_1 = counters_2.next()) {
          var counter = counters_2_1.value;
          rowOffset += counter;
        }
      } catch (e_2_1) {
        e_2 = {error: e_2_1};
      } finally {
        try {
          if (counters_2_1 && !counters_2_1.done && (_b = counters_2.return))
            _b.call(counters_2);
        } finally {
          if (e_2)
            throw e_2.error;
        }
      }
    }
    return {rowOffset, resultString};
  };
  EAN8Reader2.prototype.getBarcodeFormat = function() {
    return BarcodeFormat$1.EAN_8;
  };
  return EAN8Reader2;
}(UPCEANReader);
var __extends$s = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (b2.hasOwnProperty(p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var UPCAReader = function(_super) {
  __extends$s(UPCAReader2, _super);
  function UPCAReader2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.ean13Reader = new EAN13Reader();
    return _this;
  }
  UPCAReader2.prototype.getBarcodeFormat = function() {
    return BarcodeFormat$1.UPC_A;
  };
  UPCAReader2.prototype.decode = function(image, hints) {
    return this.maybeReturnResult(this.ean13Reader.decode(image));
  };
  UPCAReader2.prototype.decodeRow = function(rowNumber, row, hints) {
    return this.maybeReturnResult(this.ean13Reader.decodeRow(rowNumber, row, hints));
  };
  UPCAReader2.prototype.decodeMiddle = function(row, startRange, resultString) {
    return this.ean13Reader.decodeMiddle(row, startRange, resultString);
  };
  UPCAReader2.prototype.maybeReturnResult = function(result) {
    var text = result.getText();
    if (text.charAt(0) === "0") {
      var upcaResult = new Result(text.substring(1), null, null, result.getResultPoints(), BarcodeFormat$1.UPC_A);
      if (result.getResultMetadata() != null) {
        upcaResult.putAllMetadata(result.getResultMetadata());
      }
      return upcaResult;
    } else {
      throw new NotFoundException();
    }
  };
  UPCAReader2.prototype.reset = function() {
    this.ean13Reader.reset();
  };
  return UPCAReader2;
}(UPCEANReader);
var __extends$t = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (b2.hasOwnProperty(p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __values$9 = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return {value: o && o[i++], done: !o};
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var UPCEReader = function(_super) {
  __extends$t(UPCEReader2, _super);
  function UPCEReader2() {
    var _this = _super.call(this) || this;
    _this.decodeMiddleCounters = new Int32Array(4);
    return _this;
  }
  UPCEReader2.prototype.decodeMiddle = function(row, startRange, result) {
    var e_1, _a;
    var counters = this.decodeMiddleCounters.map(function(x2) {
      return x2;
    });
    counters[0] = 0;
    counters[1] = 0;
    counters[2] = 0;
    counters[3] = 0;
    var end = row.getSize();
    var rowOffset = startRange[1];
    var lgPatternFound = 0;
    for (var x = 0; x < 6 && rowOffset < end; x++) {
      var bestMatch = UPCEReader2.decodeDigit(row, counters, rowOffset, UPCEReader2.L_AND_G_PATTERNS);
      result += String.fromCharCode("0".charCodeAt(0) + bestMatch % 10);
      try {
        for (var counters_1 = (e_1 = void 0, __values$9(counters)), counters_1_1 = counters_1.next(); !counters_1_1.done; counters_1_1 = counters_1.next()) {
          var counter = counters_1_1.value;
          rowOffset += counter;
        }
      } catch (e_1_1) {
        e_1 = {error: e_1_1};
      } finally {
        try {
          if (counters_1_1 && !counters_1_1.done && (_a = counters_1.return))
            _a.call(counters_1);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
      if (bestMatch >= 10) {
        lgPatternFound |= 1 << 5 - x;
      }
    }
    UPCEReader2.determineNumSysAndCheckDigit(new StringBuilder(result), lgPatternFound);
    return rowOffset;
  };
  UPCEReader2.prototype.decodeEnd = function(row, endStart) {
    return UPCEReader2.findGuardPatternWithoutCounters(row, endStart, true, UPCEReader2.MIDDLE_END_PATTERN);
  };
  UPCEReader2.prototype.checkChecksum = function(s) {
    return UPCEANReader.checkChecksum(UPCEReader2.convertUPCEtoUPCA(s));
  };
  UPCEReader2.determineNumSysAndCheckDigit = function(resultString, lgPatternFound) {
    for (var numSys = 0; numSys <= 1; numSys++) {
      for (var d = 0; d < 10; d++) {
        if (lgPatternFound === this.NUMSYS_AND_CHECK_DIGIT_PATTERNS[numSys][d]) {
          resultString.insert(0, "0" + numSys);
          resultString.append("0" + d);
          return;
        }
      }
    }
    throw NotFoundException.getNotFoundInstance();
  };
  UPCEReader2.prototype.getBarcodeFormat = function() {
    return BarcodeFormat$1.UPC_E;
  };
  UPCEReader2.convertUPCEtoUPCA = function(upce) {
    var upceChars = upce.slice(1, 7).split("").map(function(x) {
      return x.charCodeAt(0);
    });
    var result = new StringBuilder();
    result.append(upce.charAt(0));
    var lastChar = upceChars[5];
    switch (lastChar) {
      case 0:
      case 1:
      case 2:
        result.appendChars(upceChars, 0, 2);
        result.append(lastChar);
        result.append("0000");
        result.appendChars(upceChars, 2, 3);
        break;
      case 3:
        result.appendChars(upceChars, 0, 3);
        result.append("00000");
        result.appendChars(upceChars, 3, 2);
        break;
      case 4:
        result.appendChars(upceChars, 0, 4);
        result.append("00000");
        result.append(upceChars[4]);
        break;
      default:
        result.appendChars(upceChars, 0, 5);
        result.append("0000");
        result.append(lastChar);
        break;
    }
    if (upce.length >= 8) {
      result.append(upce.charAt(7));
    }
    return result.toString();
  };
  UPCEReader2.MIDDLE_END_PATTERN = Int32Array.from([1, 1, 1, 1, 1, 1]);
  UPCEReader2.NUMSYS_AND_CHECK_DIGIT_PATTERNS = [
    Int32Array.from([56, 52, 50, 49, 44, 38, 35, 42, 41, 37]),
    Int32Array.from([7, 11, 13, 14, 19, 25, 28, 21, 22, 1])
  ];
  return UPCEReader2;
}(UPCEANReader);
var __extends$u = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (b2.hasOwnProperty(p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __values$a = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return {value: o && o[i++], done: !o};
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var MultiFormatUPCEANReader = function(_super) {
  __extends$u(MultiFormatUPCEANReader2, _super);
  function MultiFormatUPCEANReader2(hints) {
    var _this = _super.call(this) || this;
    var possibleFormats = hints == null ? null : hints.get(DecodeHintType$1.POSSIBLE_FORMATS);
    var readers = [];
    if (possibleFormats != null) {
      if (possibleFormats.indexOf(BarcodeFormat$1.EAN_13) > -1) {
        readers.push(new EAN13Reader());
      } else if (possibleFormats.indexOf(BarcodeFormat$1.UPC_A) > -1) {
        readers.push(new UPCAReader());
      }
      if (possibleFormats.indexOf(BarcodeFormat$1.EAN_8) > -1) {
        readers.push(new EAN8Reader());
      }
      if (possibleFormats.indexOf(BarcodeFormat$1.UPC_E) > -1) {
        readers.push(new UPCEReader());
      }
    }
    if (readers.length === 0) {
      readers.push(new EAN13Reader());
      readers.push(new EAN8Reader());
      readers.push(new UPCEReader());
    }
    _this.readers = readers;
    return _this;
  }
  MultiFormatUPCEANReader2.prototype.decodeRow = function(rowNumber, row, hints) {
    var e_1, _a;
    try {
      for (var _b = __values$a(this.readers), _c = _b.next(); !_c.done; _c = _b.next()) {
        var reader = _c.value;
        try {
          var result = reader.decodeRow(rowNumber, row, hints);
          var ean13MayBeUPCA = result.getBarcodeFormat() === BarcodeFormat$1.EAN_13 && result.getText().charAt(0) === "0";
          var possibleFormats = hints == null ? null : hints.get(DecodeHintType$1.POSSIBLE_FORMATS);
          var canReturnUPCA = possibleFormats == null || possibleFormats.includes(BarcodeFormat$1.UPC_A);
          if (ean13MayBeUPCA && canReturnUPCA) {
            var rawBytes = result.getRawBytes();
            var resultUPCA = new Result(result.getText().substring(1), rawBytes, rawBytes.length, result.getResultPoints(), BarcodeFormat$1.UPC_A);
            resultUPCA.putAllMetadata(result.getResultMetadata());
            return resultUPCA;
          }
          return result;
        } catch (err) {
        }
      }
    } catch (e_1_1) {
      e_1 = {error: e_1_1};
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return))
          _a.call(_b);
      } finally {
        if (e_1)
          throw e_1.error;
      }
    }
    throw new NotFoundException();
  };
  MultiFormatUPCEANReader2.prototype.reset = function() {
    var e_2, _a;
    try {
      for (var _b = __values$a(this.readers), _c = _b.next(); !_c.done; _c = _b.next()) {
        var reader = _c.value;
        reader.reset();
      }
    } catch (e_2_1) {
      e_2 = {error: e_2_1};
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return))
          _a.call(_b);
      } finally {
        if (e_2)
          throw e_2.error;
      }
    }
  };
  return MultiFormatUPCEANReader2;
}(OneDReader);
var __extends$v = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (b2.hasOwnProperty(p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __values$b = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return {value: o && o[i++], done: !o};
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var AbstractRSSReader = function(_super) {
  __extends$v(AbstractRSSReader2, _super);
  function AbstractRSSReader2() {
    var _this = _super.call(this) || this;
    _this.decodeFinderCounters = new Int32Array(4);
    _this.dataCharacterCounters = new Int32Array(8);
    _this.oddRoundingErrors = new Array(4);
    _this.evenRoundingErrors = new Array(4);
    _this.oddCounts = new Array(_this.dataCharacterCounters.length / 2);
    _this.evenCounts = new Array(_this.dataCharacterCounters.length / 2);
    return _this;
  }
  AbstractRSSReader2.prototype.getDecodeFinderCounters = function() {
    return this.decodeFinderCounters;
  };
  AbstractRSSReader2.prototype.getDataCharacterCounters = function() {
    return this.dataCharacterCounters;
  };
  AbstractRSSReader2.prototype.getOddRoundingErrors = function() {
    return this.oddRoundingErrors;
  };
  AbstractRSSReader2.prototype.getEvenRoundingErrors = function() {
    return this.evenRoundingErrors;
  };
  AbstractRSSReader2.prototype.getOddCounts = function() {
    return this.oddCounts;
  };
  AbstractRSSReader2.prototype.getEvenCounts = function() {
    return this.evenCounts;
  };
  AbstractRSSReader2.prototype.parseFinderValue = function(counters, finderPatterns) {
    for (var value = 0; value < finderPatterns.length; value++) {
      if (OneDReader.patternMatchVariance(counters, finderPatterns[value], AbstractRSSReader2.MAX_INDIVIDUAL_VARIANCE) < AbstractRSSReader2.MAX_AVG_VARIANCE) {
        return value;
      }
    }
    throw new NotFoundException();
  };
  AbstractRSSReader2.count = function(array) {
    return MathUtils.sum(new Int32Array(array));
  };
  AbstractRSSReader2.increment = function(array, errors) {
    var index = 0;
    var biggestError = errors[0];
    for (var i = 1; i < array.length; i++) {
      if (errors[i] > biggestError) {
        biggestError = errors[i];
        index = i;
      }
    }
    array[index]++;
  };
  AbstractRSSReader2.decrement = function(array, errors) {
    var index = 0;
    var biggestError = errors[0];
    for (var i = 1; i < array.length; i++) {
      if (errors[i] < biggestError) {
        biggestError = errors[i];
        index = i;
      }
    }
    array[index]--;
  };
  AbstractRSSReader2.isFinderPattern = function(counters) {
    var e_1, _a;
    var firstTwoSum = counters[0] + counters[1];
    var sum = firstTwoSum + counters[2] + counters[3];
    var ratio = firstTwoSum / sum;
    if (ratio >= AbstractRSSReader2.MIN_FINDER_PATTERN_RATIO && ratio <= AbstractRSSReader2.MAX_FINDER_PATTERN_RATIO) {
      var minCounter = Number.MAX_SAFE_INTEGER;
      var maxCounter = Number.MIN_SAFE_INTEGER;
      try {
        for (var counters_1 = __values$b(counters), counters_1_1 = counters_1.next(); !counters_1_1.done; counters_1_1 = counters_1.next()) {
          var counter = counters_1_1.value;
          if (counter > maxCounter) {
            maxCounter = counter;
          }
          if (counter < minCounter) {
            minCounter = counter;
          }
        }
      } catch (e_1_1) {
        e_1 = {error: e_1_1};
      } finally {
        try {
          if (counters_1_1 && !counters_1_1.done && (_a = counters_1.return))
            _a.call(counters_1);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
      return maxCounter < 10 * minCounter;
    }
    return false;
  };
  AbstractRSSReader2.MAX_AVG_VARIANCE = 0.2;
  AbstractRSSReader2.MAX_INDIVIDUAL_VARIANCE = 0.45;
  AbstractRSSReader2.MIN_FINDER_PATTERN_RATIO = 9.5 / 12;
  AbstractRSSReader2.MAX_FINDER_PATTERN_RATIO = 12.5 / 14;
  return AbstractRSSReader2;
}(OneDReader);
var DataCharacter = function() {
  function DataCharacter2(value, checksumPortion) {
    this.value = value;
    this.checksumPortion = checksumPortion;
  }
  DataCharacter2.prototype.getValue = function() {
    return this.value;
  };
  DataCharacter2.prototype.getChecksumPortion = function() {
    return this.checksumPortion;
  };
  DataCharacter2.prototype.toString = function() {
    return this.value + "(" + this.checksumPortion + ")";
  };
  DataCharacter2.prototype.equals = function(o) {
    if (!(o instanceof DataCharacter2)) {
      return false;
    }
    var that = o;
    return this.value === that.value && this.checksumPortion === that.checksumPortion;
  };
  DataCharacter2.prototype.hashCode = function() {
    return this.value ^ this.checksumPortion;
  };
  return DataCharacter2;
}();
var FinderPattern = function() {
  function FinderPattern2(value, startEnd, start, end, rowNumber) {
    this.value = value;
    this.startEnd = startEnd;
    this.value = value;
    this.startEnd = startEnd;
    this.resultPoints = new Array();
    this.resultPoints.push(new ResultPoint(start, rowNumber));
    this.resultPoints.push(new ResultPoint(end, rowNumber));
  }
  FinderPattern2.prototype.getValue = function() {
    return this.value;
  };
  FinderPattern2.prototype.getStartEnd = function() {
    return this.startEnd;
  };
  FinderPattern2.prototype.getResultPoints = function() {
    return this.resultPoints;
  };
  FinderPattern2.prototype.equals = function(o) {
    if (!(o instanceof FinderPattern2)) {
      return false;
    }
    var that = o;
    return this.value === that.value;
  };
  FinderPattern2.prototype.hashCode = function() {
    return this.value;
  };
  return FinderPattern2;
}();
var __values$c = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return {value: o && o[i++], done: !o};
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var RSSUtils = function() {
  function RSSUtils2() {
  }
  RSSUtils2.getRSSvalue = function(widths, maxWidth, noNarrow) {
    var e_1, _a;
    var n = 0;
    try {
      for (var widths_1 = __values$c(widths), widths_1_1 = widths_1.next(); !widths_1_1.done; widths_1_1 = widths_1.next()) {
        var width = widths_1_1.value;
        n += width;
      }
    } catch (e_1_1) {
      e_1 = {error: e_1_1};
    } finally {
      try {
        if (widths_1_1 && !widths_1_1.done && (_a = widths_1.return))
          _a.call(widths_1);
      } finally {
        if (e_1)
          throw e_1.error;
      }
    }
    var val = 0;
    var narrowMask = 0;
    var elements = widths.length;
    for (var bar = 0; bar < elements - 1; bar++) {
      var elmWidth = void 0;
      for (elmWidth = 1, narrowMask |= 1 << bar; elmWidth < widths[bar]; elmWidth++, narrowMask &= ~(1 << bar)) {
        var subVal = RSSUtils2.combins(n - elmWidth - 1, elements - bar - 2);
        if (noNarrow && narrowMask === 0 && n - elmWidth - (elements - bar - 1) >= elements - bar - 1) {
          subVal -= RSSUtils2.combins(n - elmWidth - (elements - bar), elements - bar - 2);
        }
        if (elements - bar - 1 > 1) {
          var lessVal = 0;
          for (var mxwElement = n - elmWidth - (elements - bar - 2); mxwElement > maxWidth; mxwElement--) {
            lessVal += RSSUtils2.combins(n - elmWidth - mxwElement - 1, elements - bar - 3);
          }
          subVal -= lessVal * (elements - 1 - bar);
        } else if (n - elmWidth > maxWidth) {
          subVal--;
        }
        val += subVal;
      }
      n -= elmWidth;
    }
    return val;
  };
  RSSUtils2.combins = function(n, r) {
    var maxDenom;
    var minDenom;
    if (n - r > r) {
      minDenom = r;
      maxDenom = n - r;
    } else {
      minDenom = n - r;
      maxDenom = r;
    }
    var val = 1;
    var j = 1;
    for (var i = n; i > maxDenom; i--) {
      val *= i;
      if (j <= minDenom) {
        val /= j;
        j++;
      }
    }
    while (j <= minDenom) {
      val /= j;
      j++;
    }
    return val;
  };
  return RSSUtils2;
}();
var BitArrayBuilder = function() {
  function BitArrayBuilder2() {
  }
  BitArrayBuilder2.buildBitArray = function(pairs) {
    var charNumber = pairs.length * 2 - 1;
    if (pairs[pairs.length - 1].getRightChar() == null) {
      charNumber -= 1;
    }
    var size = 12 * charNumber;
    var binary = new BitArray(size);
    var accPos = 0;
    var firstPair = pairs[0];
    var firstValue = firstPair.getRightChar().getValue();
    for (var i = 11; i >= 0; --i) {
      if ((firstValue & 1 << i) != 0) {
        binary.set(accPos);
      }
      accPos++;
    }
    for (var i = 1; i < pairs.length; ++i) {
      var currentPair = pairs[i];
      var leftValue = currentPair.getLeftChar().getValue();
      for (var j = 11; j >= 0; --j) {
        if ((leftValue & 1 << j) != 0) {
          binary.set(accPos);
        }
        accPos++;
      }
      if (currentPair.getRightChar() != null) {
        var rightValue = currentPair.getRightChar().getValue();
        for (var j = 11; j >= 0; --j) {
          if ((rightValue & 1 << j) != 0) {
            binary.set(accPos);
          }
          accPos++;
        }
      }
    }
    return binary;
  };
  return BitArrayBuilder2;
}();
var BlockParsedResult = function() {
  function BlockParsedResult2(finished, decodedInformation) {
    if (decodedInformation) {
      this.decodedInformation = null;
    } else {
      this.finished = finished;
      this.decodedInformation = decodedInformation;
    }
  }
  BlockParsedResult2.prototype.getDecodedInformation = function() {
    return this.decodedInformation;
  };
  BlockParsedResult2.prototype.isFinished = function() {
    return this.finished;
  };
  return BlockParsedResult2;
}();
var DecodedObject = function() {
  function DecodedObject2(newPosition) {
    this.newPosition = newPosition;
  }
  DecodedObject2.prototype.getNewPosition = function() {
    return this.newPosition;
  };
  return DecodedObject2;
}();
var __extends$w = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (b2.hasOwnProperty(p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var DecodedChar = function(_super) {
  __extends$w(DecodedChar2, _super);
  function DecodedChar2(newPosition, value) {
    var _this = _super.call(this, newPosition) || this;
    _this.value = value;
    return _this;
  }
  DecodedChar2.prototype.getValue = function() {
    return this.value;
  };
  DecodedChar2.prototype.isFNC1 = function() {
    return this.value === DecodedChar2.FNC1;
  };
  DecodedChar2.FNC1 = "$";
  return DecodedChar2;
}(DecodedObject);
var __extends$x = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (b2.hasOwnProperty(p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var DecodedInformation = function(_super) {
  __extends$x(DecodedInformation2, _super);
  function DecodedInformation2(newPosition, newString, remainingValue) {
    var _this = _super.call(this, newPosition) || this;
    if (remainingValue) {
      _this.remaining = true;
      _this.remainingValue = _this.remainingValue;
    } else {
      _this.remaining = false;
      _this.remainingValue = 0;
    }
    _this.newString = newString;
    return _this;
  }
  DecodedInformation2.prototype.getNewString = function() {
    return this.newString;
  };
  DecodedInformation2.prototype.isRemaining = function() {
    return this.remaining;
  };
  DecodedInformation2.prototype.getRemainingValue = function() {
    return this.remainingValue;
  };
  return DecodedInformation2;
}(DecodedObject);
var __extends$y = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (b2.hasOwnProperty(p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var DecodedNumeric = function(_super) {
  __extends$y(DecodedNumeric2, _super);
  function DecodedNumeric2(newPosition, firstDigit, secondDigit) {
    var _this = _super.call(this, newPosition) || this;
    if (firstDigit < 0 || firstDigit > 10 || secondDigit < 0 || secondDigit > 10) {
      throw new FormatException();
    }
    _this.firstDigit = firstDigit;
    _this.secondDigit = secondDigit;
    return _this;
  }
  DecodedNumeric2.prototype.getFirstDigit = function() {
    return this.firstDigit;
  };
  DecodedNumeric2.prototype.getSecondDigit = function() {
    return this.secondDigit;
  };
  DecodedNumeric2.prototype.getValue = function() {
    return this.firstDigit * 10 + this.secondDigit;
  };
  DecodedNumeric2.prototype.isFirstDigitFNC1 = function() {
    return this.firstDigit === DecodedNumeric2.FNC1;
  };
  DecodedNumeric2.prototype.isSecondDigitFNC1 = function() {
    return this.secondDigit === DecodedNumeric2.FNC1;
  };
  DecodedNumeric2.prototype.isAnyFNC1 = function() {
    return this.firstDigit === DecodedNumeric2.FNC1 || this.secondDigit === DecodedNumeric2.FNC1;
  };
  DecodedNumeric2.FNC1 = 10;
  return DecodedNumeric2;
}(DecodedObject);
var __values$d = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return {value: o && o[i++], done: !o};
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var FieldParser = function() {
  function FieldParser2() {
  }
  FieldParser2.parseFieldsInGeneralPurpose = function(rawInformation) {
    var e_1, _a, e_2, _b, e_3, _c, e_4, _d;
    if (!rawInformation) {
      return null;
    }
    if (rawInformation.length < 2) {
      throw new NotFoundException();
    }
    var firstTwoDigits = rawInformation.substring(0, 2);
    try {
      for (var _e = __values$d(FieldParser2.TWO_DIGIT_DATA_LENGTH), _f = _e.next(); !_f.done; _f = _e.next()) {
        var dataLength = _f.value;
        if (dataLength[0] === firstTwoDigits) {
          if (dataLength[1] === FieldParser2.VARIABLE_LENGTH) {
            return FieldParser2.processVariableAI(2, dataLength[2], rawInformation);
          }
          return FieldParser2.processFixedAI(2, dataLength[1], rawInformation);
        }
      }
    } catch (e_1_1) {
      e_1 = {error: e_1_1};
    } finally {
      try {
        if (_f && !_f.done && (_a = _e.return))
          _a.call(_e);
      } finally {
        if (e_1)
          throw e_1.error;
      }
    }
    if (rawInformation.length < 3) {
      throw new NotFoundException();
    }
    var firstThreeDigits = rawInformation.substring(0, 3);
    try {
      for (var _g = __values$d(FieldParser2.THREE_DIGIT_DATA_LENGTH), _h = _g.next(); !_h.done; _h = _g.next()) {
        var dataLength = _h.value;
        if (dataLength[0] === firstThreeDigits) {
          if (dataLength[1] === FieldParser2.VARIABLE_LENGTH) {
            return FieldParser2.processVariableAI(3, dataLength[2], rawInformation);
          }
          return FieldParser2.processFixedAI(3, dataLength[1], rawInformation);
        }
      }
    } catch (e_2_1) {
      e_2 = {error: e_2_1};
    } finally {
      try {
        if (_h && !_h.done && (_b = _g.return))
          _b.call(_g);
      } finally {
        if (e_2)
          throw e_2.error;
      }
    }
    try {
      for (var _j = __values$d(FieldParser2.THREE_DIGIT_PLUS_DIGIT_DATA_LENGTH), _k = _j.next(); !_k.done; _k = _j.next()) {
        var dataLength = _k.value;
        if (dataLength[0] === firstThreeDigits) {
          if (dataLength[1] === FieldParser2.VARIABLE_LENGTH) {
            return FieldParser2.processVariableAI(4, dataLength[2], rawInformation);
          }
          return FieldParser2.processFixedAI(4, dataLength[1], rawInformation);
        }
      }
    } catch (e_3_1) {
      e_3 = {error: e_3_1};
    } finally {
      try {
        if (_k && !_k.done && (_c = _j.return))
          _c.call(_j);
      } finally {
        if (e_3)
          throw e_3.error;
      }
    }
    if (rawInformation.length < 4) {
      throw new NotFoundException();
    }
    var firstFourDigits = rawInformation.substring(0, 4);
    try {
      for (var _l = __values$d(FieldParser2.FOUR_DIGIT_DATA_LENGTH), _m = _l.next(); !_m.done; _m = _l.next()) {
        var dataLength = _m.value;
        if (dataLength[0] === firstFourDigits) {
          if (dataLength[1] === FieldParser2.VARIABLE_LENGTH) {
            return FieldParser2.processVariableAI(4, dataLength[2], rawInformation);
          }
          return FieldParser2.processFixedAI(4, dataLength[1], rawInformation);
        }
      }
    } catch (e_4_1) {
      e_4 = {error: e_4_1};
    } finally {
      try {
        if (_m && !_m.done && (_d = _l.return))
          _d.call(_l);
      } finally {
        if (e_4)
          throw e_4.error;
      }
    }
    throw new NotFoundException();
  };
  FieldParser2.processFixedAI = function(aiSize, fieldSize, rawInformation) {
    if (rawInformation.length < aiSize) {
      throw new NotFoundException();
    }
    var ai = rawInformation.substring(0, aiSize);
    if (rawInformation.length < aiSize + fieldSize) {
      throw new NotFoundException();
    }
    var field = rawInformation.substring(aiSize, aiSize + fieldSize);
    var remaining = rawInformation.substring(aiSize + fieldSize);
    var result = "(" + ai + ")" + field;
    var parsedAI = FieldParser2.parseFieldsInGeneralPurpose(remaining);
    return parsedAI == null ? result : result + parsedAI;
  };
  FieldParser2.processVariableAI = function(aiSize, variableFieldSize, rawInformation) {
    var ai = rawInformation.substring(0, aiSize);
    var maxSize;
    if (rawInformation.length < aiSize + variableFieldSize) {
      maxSize = rawInformation.length;
    } else {
      maxSize = aiSize + variableFieldSize;
    }
    var field = rawInformation.substring(aiSize, maxSize);
    var remaining = rawInformation.substring(maxSize);
    var result = "(" + ai + ")" + field;
    var parsedAI = FieldParser2.parseFieldsInGeneralPurpose(remaining);
    return parsedAI == null ? result : result + parsedAI;
  };
  FieldParser2.VARIABLE_LENGTH = [];
  FieldParser2.TWO_DIGIT_DATA_LENGTH = [
    ["00", 18],
    ["01", 14],
    ["02", 14],
    ["10", FieldParser2.VARIABLE_LENGTH, 20],
    ["11", 6],
    ["12", 6],
    ["13", 6],
    ["15", 6],
    ["17", 6],
    ["20", 2],
    ["21", FieldParser2.VARIABLE_LENGTH, 20],
    ["22", FieldParser2.VARIABLE_LENGTH, 29],
    ["30", FieldParser2.VARIABLE_LENGTH, 8],
    ["37", FieldParser2.VARIABLE_LENGTH, 8],
    ["90", FieldParser2.VARIABLE_LENGTH, 30],
    ["91", FieldParser2.VARIABLE_LENGTH, 30],
    ["92", FieldParser2.VARIABLE_LENGTH, 30],
    ["93", FieldParser2.VARIABLE_LENGTH, 30],
    ["94", FieldParser2.VARIABLE_LENGTH, 30],
    ["95", FieldParser2.VARIABLE_LENGTH, 30],
    ["96", FieldParser2.VARIABLE_LENGTH, 30],
    ["97", FieldParser2.VARIABLE_LENGTH, 3],
    ["98", FieldParser2.VARIABLE_LENGTH, 30],
    ["99", FieldParser2.VARIABLE_LENGTH, 30]
  ];
  FieldParser2.THREE_DIGIT_DATA_LENGTH = [
    ["240", FieldParser2.VARIABLE_LENGTH, 30],
    ["241", FieldParser2.VARIABLE_LENGTH, 30],
    ["242", FieldParser2.VARIABLE_LENGTH, 6],
    ["250", FieldParser2.VARIABLE_LENGTH, 30],
    ["251", FieldParser2.VARIABLE_LENGTH, 30],
    ["253", FieldParser2.VARIABLE_LENGTH, 17],
    ["254", FieldParser2.VARIABLE_LENGTH, 20],
    ["400", FieldParser2.VARIABLE_LENGTH, 30],
    ["401", FieldParser2.VARIABLE_LENGTH, 30],
    ["402", 17],
    ["403", FieldParser2.VARIABLE_LENGTH, 30],
    ["410", 13],
    ["411", 13],
    ["412", 13],
    ["413", 13],
    ["414", 13],
    ["420", FieldParser2.VARIABLE_LENGTH, 20],
    ["421", FieldParser2.VARIABLE_LENGTH, 15],
    ["422", 3],
    ["423", FieldParser2.VARIABLE_LENGTH, 15],
    ["424", 3],
    ["425", 3],
    ["426", 3]
  ];
  FieldParser2.THREE_DIGIT_PLUS_DIGIT_DATA_LENGTH = [
    ["310", 6],
    ["311", 6],
    ["312", 6],
    ["313", 6],
    ["314", 6],
    ["315", 6],
    ["316", 6],
    ["320", 6],
    ["321", 6],
    ["322", 6],
    ["323", 6],
    ["324", 6],
    ["325", 6],
    ["326", 6],
    ["327", 6],
    ["328", 6],
    ["329", 6],
    ["330", 6],
    ["331", 6],
    ["332", 6],
    ["333", 6],
    ["334", 6],
    ["335", 6],
    ["336", 6],
    ["340", 6],
    ["341", 6],
    ["342", 6],
    ["343", 6],
    ["344", 6],
    ["345", 6],
    ["346", 6],
    ["347", 6],
    ["348", 6],
    ["349", 6],
    ["350", 6],
    ["351", 6],
    ["352", 6],
    ["353", 6],
    ["354", 6],
    ["355", 6],
    ["356", 6],
    ["357", 6],
    ["360", 6],
    ["361", 6],
    ["362", 6],
    ["363", 6],
    ["364", 6],
    ["365", 6],
    ["366", 6],
    ["367", 6],
    ["368", 6],
    ["369", 6],
    ["390", FieldParser2.VARIABLE_LENGTH, 15],
    ["391", FieldParser2.VARIABLE_LENGTH, 18],
    ["392", FieldParser2.VARIABLE_LENGTH, 15],
    ["393", FieldParser2.VARIABLE_LENGTH, 18],
    ["703", FieldParser2.VARIABLE_LENGTH, 30]
  ];
  FieldParser2.FOUR_DIGIT_DATA_LENGTH = [
    ["7001", 13],
    ["7002", FieldParser2.VARIABLE_LENGTH, 30],
    ["7003", 10],
    ["8001", 14],
    ["8002", FieldParser2.VARIABLE_LENGTH, 20],
    ["8003", FieldParser2.VARIABLE_LENGTH, 30],
    ["8004", FieldParser2.VARIABLE_LENGTH, 30],
    ["8005", 6],
    ["8006", 18],
    ["8007", FieldParser2.VARIABLE_LENGTH, 30],
    ["8008", FieldParser2.VARIABLE_LENGTH, 12],
    ["8018", 18],
    ["8020", FieldParser2.VARIABLE_LENGTH, 25],
    ["8100", 6],
    ["8101", 10],
    ["8102", 2],
    ["8110", FieldParser2.VARIABLE_LENGTH, 70],
    ["8200", FieldParser2.VARIABLE_LENGTH, 70]
  ];
  return FieldParser2;
}();
var GeneralAppIdDecoder = function() {
  function GeneralAppIdDecoder2(information) {
    this.buffer = new StringBuilder();
    this.information = information;
  }
  GeneralAppIdDecoder2.prototype.decodeAllCodes = function(buff, initialPosition) {
    var currentPosition = initialPosition;
    var remaining = null;
    do {
      var info = this.decodeGeneralPurposeField(currentPosition, remaining);
      var parsedFields = FieldParser.parseFieldsInGeneralPurpose(info.getNewString());
      if (parsedFields != null) {
        buff.append(parsedFields);
      }
      if (info.isRemaining()) {
        remaining = "" + info.getRemainingValue();
      } else {
        remaining = null;
      }
      if (currentPosition === info.getNewPosition()) {
        break;
      }
      currentPosition = info.getNewPosition();
    } while (true);
    return buff.toString();
  };
  GeneralAppIdDecoder2.prototype.isStillNumeric = function(pos) {
    if (pos + 7 > this.information.getSize()) {
      return pos + 4 <= this.information.getSize();
    }
    for (var i = pos; i < pos + 3; ++i) {
      if (this.information.get(i)) {
        return true;
      }
    }
    return this.information.get(pos + 3);
  };
  GeneralAppIdDecoder2.prototype.decodeNumeric = function(pos) {
    if (pos + 7 > this.information.getSize()) {
      var numeric_1 = this.extractNumericValueFromBitArray(pos, 4);
      if (numeric_1 === 0) {
        return new DecodedNumeric(this.information.getSize(), DecodedNumeric.FNC1, DecodedNumeric.FNC1);
      }
      return new DecodedNumeric(this.information.getSize(), numeric_1 - 1, DecodedNumeric.FNC1);
    }
    var numeric = this.extractNumericValueFromBitArray(pos, 7);
    var digit1 = (numeric - 8) / 11;
    var digit2 = (numeric - 8) % 11;
    return new DecodedNumeric(pos + 7, digit1, digit2);
  };
  GeneralAppIdDecoder2.prototype.extractNumericValueFromBitArray = function(pos, bits) {
    return GeneralAppIdDecoder2.extractNumericValueFromBitArray(this.information, pos, bits);
  };
  GeneralAppIdDecoder2.extractNumericValueFromBitArray = function(information, pos, bits) {
    var value = 0;
    for (var i = 0; i < bits; ++i) {
      if (information.get(pos + i)) {
        value |= 1 << bits - i - 1;
      }
    }
    return value;
  };
  GeneralAppIdDecoder2.prototype.decodeGeneralPurposeField = function(pos, remaining) {
    this.buffer.setLengthToZero();
    if (remaining != null) {
      this.buffer.append(remaining);
    }
    this.current.setPosition(pos);
    var lastDecoded = this.parseBlocks();
    if (lastDecoded != null && lastDecoded.isRemaining()) {
      return new DecodedInformation(this.current.getPosition(), this.buffer.toString(), lastDecoded.getRemainingValue());
    }
    return new DecodedInformation(this.current.getPosition(), this.buffer.toString());
  };
  GeneralAppIdDecoder2.prototype.parseBlocks = function() {
    var isFinished;
    var result;
    do {
      var initialPosition = this.current.getPosition();
      if (this.current.isAlpha()) {
        result = this.parseAlphaBlock();
        isFinished = result.isFinished();
      } else if (this.current.isIsoIec646()) {
        result = this.parseIsoIec646Block();
        isFinished = result.isFinished();
      } else {
        result = this.parseNumericBlock();
        isFinished = result.isFinished();
      }
      var positionChanged = initialPosition !== this.current.getPosition();
      if (!positionChanged && !isFinished) {
        break;
      }
    } while (!isFinished);
    return result.getDecodedInformation();
  };
  GeneralAppIdDecoder2.prototype.parseNumericBlock = function() {
    while (this.isStillNumeric(this.current.getPosition())) {
      var numeric = this.decodeNumeric(this.current.getPosition());
      this.current.setPosition(numeric.getNewPosition());
      if (numeric.isFirstDigitFNC1()) {
        var information = void 0;
        if (numeric.isSecondDigitFNC1()) {
          information = new DecodedInformation(this.current.getPosition(), this.buffer.toString());
        } else {
          information = new DecodedInformation(this.current.getPosition(), this.buffer.toString(), numeric.getSecondDigit());
        }
        return new BlockParsedResult(true, information);
      }
      this.buffer.append(numeric.getFirstDigit());
      if (numeric.isSecondDigitFNC1()) {
        var information = new DecodedInformation(this.current.getPosition(), this.buffer.toString());
        return new BlockParsedResult(true, information);
      }
      this.buffer.append(numeric.getSecondDigit());
    }
    if (this.isNumericToAlphaNumericLatch(this.current.getPosition())) {
      this.current.setAlpha();
      this.current.incrementPosition(4);
    }
    return new BlockParsedResult(false);
  };
  GeneralAppIdDecoder2.prototype.parseIsoIec646Block = function() {
    while (this.isStillIsoIec646(this.current.getPosition())) {
      var iso = this.decodeIsoIec646(this.current.getPosition());
      this.current.setPosition(iso.getNewPosition());
      if (iso.isFNC1()) {
        var information = new DecodedInformation(this.current.getPosition(), this.buffer.toString());
        return new BlockParsedResult(true, information);
      }
      this.buffer.append(iso.getValue());
    }
    if (this.isAlphaOr646ToNumericLatch(this.current.getPosition())) {
      this.current.incrementPosition(3);
      this.current.setNumeric();
    } else if (this.isAlphaTo646ToAlphaLatch(this.current.getPosition())) {
      if (this.current.getPosition() + 5 < this.information.getSize()) {
        this.current.incrementPosition(5);
      } else {
        this.current.setPosition(this.information.getSize());
      }
      this.current.setAlpha();
    }
    return new BlockParsedResult(false);
  };
  GeneralAppIdDecoder2.prototype.parseAlphaBlock = function() {
    while (this.isStillAlpha(this.current.getPosition())) {
      var alpha = this.decodeAlphanumeric(this.current.getPosition());
      this.current.setPosition(alpha.getNewPosition());
      if (alpha.isFNC1()) {
        var information = new DecodedInformation(this.current.getPosition(), this.buffer.toString());
        return new BlockParsedResult(true, information);
      }
      this.buffer.append(alpha.getValue());
    }
    if (this.isAlphaOr646ToNumericLatch(this.current.getPosition())) {
      this.current.incrementPosition(3);
      this.current.setNumeric();
    } else if (this.isAlphaTo646ToAlphaLatch(this.current.getPosition())) {
      if (this.current.getPosition() + 5 < this.information.getSize()) {
        this.current.incrementPosition(5);
      } else {
        this.current.setPosition(this.information.getSize());
      }
      this.current.setIsoIec646();
    }
    return new BlockParsedResult(false);
  };
  GeneralAppIdDecoder2.prototype.isStillIsoIec646 = function(pos) {
    if (pos + 5 > this.information.getSize()) {
      return false;
    }
    var fiveBitValue = this.extractNumericValueFromBitArray(pos, 5);
    if (fiveBitValue >= 5 && fiveBitValue < 16) {
      return true;
    }
    if (pos + 7 > this.information.getSize()) {
      return false;
    }
    var sevenBitValue = this.extractNumericValueFromBitArray(pos, 7);
    if (sevenBitValue >= 64 && sevenBitValue < 116) {
      return true;
    }
    if (pos + 8 > this.information.getSize()) {
      return false;
    }
    var eightBitValue = this.extractNumericValueFromBitArray(pos, 8);
    return eightBitValue >= 232 && eightBitValue < 253;
  };
  GeneralAppIdDecoder2.prototype.decodeIsoIec646 = function(pos) {
    var fiveBitValue = this.extractNumericValueFromBitArray(pos, 5);
    if (fiveBitValue === 15) {
      return new DecodedChar(pos + 5, DecodedChar.FNC1);
    }
    if (fiveBitValue >= 5 && fiveBitValue < 15) {
      return new DecodedChar(pos + 5, "0" + (fiveBitValue - 5));
    }
    var sevenBitValue = this.extractNumericValueFromBitArray(pos, 7);
    if (sevenBitValue >= 64 && sevenBitValue < 90) {
      return new DecodedChar(pos + 7, "" + (sevenBitValue + 1));
    }
    if (sevenBitValue >= 90 && sevenBitValue < 116) {
      return new DecodedChar(pos + 7, "" + (sevenBitValue + 7));
    }
    var eightBitValue = this.extractNumericValueFromBitArray(pos, 8);
    var c;
    switch (eightBitValue) {
      case 232:
        c = "!";
        break;
      case 233:
        c = '"';
        break;
      case 234:
        c = "%";
        break;
      case 235:
        c = "&";
        break;
      case 236:
        c = "'";
        break;
      case 237:
        c = "(";
        break;
      case 238:
        c = ")";
        break;
      case 239:
        c = "*";
        break;
      case 240:
        c = "+";
        break;
      case 241:
        c = ",";
        break;
      case 242:
        c = "-";
        break;
      case 243:
        c = ".";
        break;
      case 244:
        c = "/";
        break;
      case 245:
        c = ":";
        break;
      case 246:
        c = ";";
        break;
      case 247:
        c = "<";
        break;
      case 248:
        c = "=";
        break;
      case 249:
        c = ">";
        break;
      case 250:
        c = "?";
        break;
      case 251:
        c = "_";
        break;
      case 252:
        c = " ";
        break;
      default:
        throw new FormatException();
    }
    return new DecodedChar(pos + 8, c);
  };
  GeneralAppIdDecoder2.prototype.isStillAlpha = function(pos) {
    if (pos + 5 > this.information.getSize()) {
      return false;
    }
    var fiveBitValue = this.extractNumericValueFromBitArray(pos, 5);
    if (fiveBitValue >= 5 && fiveBitValue < 16) {
      return true;
    }
    if (pos + 6 > this.information.getSize()) {
      return false;
    }
    var sixBitValue = this.extractNumericValueFromBitArray(pos, 6);
    return sixBitValue >= 16 && sixBitValue < 63;
  };
  GeneralAppIdDecoder2.prototype.decodeAlphanumeric = function(pos) {
    var fiveBitValue = this.extractNumericValueFromBitArray(pos, 5);
    if (fiveBitValue === 15) {
      return new DecodedChar(pos + 5, DecodedChar.FNC1);
    }
    if (fiveBitValue >= 5 && fiveBitValue < 15) {
      return new DecodedChar(pos + 5, "0" + (fiveBitValue - 5));
    }
    var sixBitValue = this.extractNumericValueFromBitArray(pos, 6);
    if (sixBitValue >= 32 && sixBitValue < 58) {
      return new DecodedChar(pos + 6, "" + (sixBitValue + 33));
    }
    var c;
    switch (sixBitValue) {
      case 58:
        c = "*";
        break;
      case 59:
        c = ",";
        break;
      case 60:
        c = "-";
        break;
      case 61:
        c = ".";
        break;
      case 62:
        c = "/";
        break;
      default:
        throw new IllegalStateException("Decoding invalid alphanumeric value: " + sixBitValue);
    }
    return new DecodedChar(pos + 6, c);
  };
  GeneralAppIdDecoder2.prototype.isAlphaTo646ToAlphaLatch = function(pos) {
    if (pos + 1 > this.information.getSize()) {
      return false;
    }
    for (var i = 0; i < 5 && i + pos < this.information.getSize(); ++i) {
      if (i === 2) {
        if (!this.information.get(pos + 2)) {
          return false;
        }
      } else if (this.information.get(pos + i)) {
        return false;
      }
    }
    return true;
  };
  GeneralAppIdDecoder2.prototype.isAlphaOr646ToNumericLatch = function(pos) {
    if (pos + 3 > this.information.getSize()) {
      return false;
    }
    for (var i = pos; i < pos + 3; ++i) {
      if (this.information.get(i)) {
        return false;
      }
    }
    return true;
  };
  GeneralAppIdDecoder2.prototype.isNumericToAlphaNumericLatch = function(pos) {
    if (pos + 1 > this.information.getSize()) {
      return false;
    }
    for (var i = 0; i < 4 && i + pos < this.information.getSize(); ++i) {
      if (this.information.get(pos + i)) {
        return false;
      }
    }
    return true;
  };
  return GeneralAppIdDecoder2;
}();
var AbstractExpandedDecoder = function() {
  function AbstractExpandedDecoder2(information) {
    this.information = information;
    this.generalDecoder = new GeneralAppIdDecoder(information);
  }
  AbstractExpandedDecoder2.prototype.getInformation = function() {
    return this.information;
  };
  AbstractExpandedDecoder2.prototype.getGeneralDecoder = function() {
    return this.generalDecoder;
  };
  return AbstractExpandedDecoder2;
}();
var __extends$z = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (b2.hasOwnProperty(p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var AI01decoder = function(_super) {
  __extends$z(AI01decoder2, _super);
  function AI01decoder2(information) {
    return _super.call(this, information) || this;
  }
  AI01decoder2.prototype.encodeCompressedGtin = function(buf, currentPos) {
    buf.append("(01)");
    var initialPosition = buf.length();
    buf.append("9");
    this.encodeCompressedGtinWithoutAI(buf, currentPos, initialPosition);
  };
  AI01decoder2.prototype.encodeCompressedGtinWithoutAI = function(buf, currentPos, initialBufferPosition) {
    for (var i = 0; i < 4; ++i) {
      var currentBlock = this.getGeneralDecoder().extractNumericValueFromBitArray(currentPos + 10 * i, 10);
      if (currentBlock / 100 === 0) {
        buf.append("0");
      }
      if (currentBlock / 10 === 0) {
        buf.append("0");
      }
      buf.append(currentBlock);
    }
    AI01decoder2.appendCheckDigit(buf, initialBufferPosition);
  };
  AI01decoder2.appendCheckDigit = function(buf, currentPos) {
    var checkDigit = 0;
    for (var i = 0; i < 13; i++) {
      var digit = buf.charAt(i + currentPos).charCodeAt(0) - "0".charCodeAt(0);
      checkDigit += (i & 1) === 0 ? 3 * digit : digit;
    }
    checkDigit = 10 - checkDigit % 10;
    if (checkDigit === 10) {
      checkDigit = 0;
    }
    buf.append(checkDigit);
  };
  AI01decoder2.GTIN_SIZE = 40;
  return AI01decoder2;
}(AbstractExpandedDecoder);
var __extends$A = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (b2.hasOwnProperty(p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var AI01AndOtherAIs = function(_super) {
  __extends$A(AI01AndOtherAIs2, _super);
  function AI01AndOtherAIs2(information) {
    return _super.call(this, information) || this;
  }
  AI01AndOtherAIs2.prototype.parseInformation = function() {
    var buff = new StringBuilder();
    buff.append("(01)");
    var initialGtinPosition = buff.length();
    var firstGtinDigit = this.getGeneralDecoder().extractNumericValueFromBitArray(AI01AndOtherAIs2.HEADER_SIZE, 4);
    buff.append(firstGtinDigit);
    this.encodeCompressedGtinWithoutAI(buff, AI01AndOtherAIs2.HEADER_SIZE + 4, initialGtinPosition);
    return this.getGeneralDecoder().decodeAllCodes(buff, AI01AndOtherAIs2.HEADER_SIZE + 44);
  };
  AI01AndOtherAIs2.HEADER_SIZE = 1 + 1 + 2;
  return AI01AndOtherAIs2;
}(AI01decoder);
var __extends$B = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (b2.hasOwnProperty(p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var AnyAIDecoder = function(_super) {
  __extends$B(AnyAIDecoder2, _super);
  function AnyAIDecoder2(information) {
    return _super.call(this, information) || this;
  }
  AnyAIDecoder2.prototype.parseInformation = function() {
    var buf = new StringBuilder();
    return this.getGeneralDecoder().decodeAllCodes(buf, AnyAIDecoder2.HEADER_SIZE);
  };
  AnyAIDecoder2.HEADER_SIZE = 2 + 1 + 2;
  return AnyAIDecoder2;
}(AbstractExpandedDecoder);
var __extends$C = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (b2.hasOwnProperty(p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var AI01weightDecoder = function(_super) {
  __extends$C(AI01weightDecoder2, _super);
  function AI01weightDecoder2(information) {
    return _super.call(this, information) || this;
  }
  AI01weightDecoder2.prototype.encodeCompressedWeight = function(buf, currentPos, weightSize) {
    var originalWeightNumeric = this.getGeneralDecoder().extractNumericValueFromBitArray(currentPos, weightSize);
    this.addWeightCode(buf, originalWeightNumeric);
    var weightNumeric = this.checkWeight(originalWeightNumeric);
    var currentDivisor = 1e5;
    for (var i = 0; i < 5; ++i) {
      if (weightNumeric / currentDivisor === 0) {
        buf.append("0");
      }
      currentDivisor /= 10;
    }
    buf.append(weightNumeric);
  };
  return AI01weightDecoder2;
}(AI01decoder);
var __extends$D = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (b2.hasOwnProperty(p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var AI013x0xDecoder = function(_super) {
  __extends$D(AI013x0xDecoder2, _super);
  function AI013x0xDecoder2(information) {
    return _super.call(this, information) || this;
  }
  AI013x0xDecoder2.prototype.parseInformation = function() {
    if (this.getInformation().getSize() != AI013x0xDecoder2.HEADER_SIZE + AI01weightDecoder.GTIN_SIZE + AI013x0xDecoder2.WEIGHT_SIZE) {
      throw new NotFoundException();
    }
    var buf = new StringBuilder();
    this.encodeCompressedGtin(buf, AI013x0xDecoder2.HEADER_SIZE);
    this.encodeCompressedWeight(buf, AI013x0xDecoder2.HEADER_SIZE + AI01weightDecoder.GTIN_SIZE, AI013x0xDecoder2.WEIGHT_SIZE);
    return buf.toString();
  };
  AI013x0xDecoder2.HEADER_SIZE = 4 + 1;
  AI013x0xDecoder2.WEIGHT_SIZE = 15;
  return AI013x0xDecoder2;
}(AI01weightDecoder);
var __extends$E = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (b2.hasOwnProperty(p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var AI013103decoder = function(_super) {
  __extends$E(AI013103decoder2, _super);
  function AI013103decoder2(information) {
    return _super.call(this, information) || this;
  }
  AI013103decoder2.prototype.addWeightCode = function(buf, weight) {
    buf.append("(3103)");
  };
  AI013103decoder2.prototype.checkWeight = function(weight) {
    return weight;
  };
  return AI013103decoder2;
}(AI013x0xDecoder);
var __extends$F = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (b2.hasOwnProperty(p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var AI01320xDecoder = function(_super) {
  __extends$F(AI01320xDecoder2, _super);
  function AI01320xDecoder2(information) {
    return _super.call(this, information) || this;
  }
  AI01320xDecoder2.prototype.addWeightCode = function(buf, weight) {
    if (weight < 1e4) {
      buf.append("(3202)");
    } else {
      buf.append("(3203)");
    }
  };
  AI01320xDecoder2.prototype.checkWeight = function(weight) {
    if (weight < 1e4) {
      return weight;
    }
    return weight - 1e4;
  };
  return AI01320xDecoder2;
}(AI013x0xDecoder);
var __extends$G = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (b2.hasOwnProperty(p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var AI01392xDecoder = function(_super) {
  __extends$G(AI01392xDecoder2, _super);
  function AI01392xDecoder2(information) {
    return _super.call(this, information) || this;
  }
  AI01392xDecoder2.prototype.parseInformation = function() {
    if (this.getInformation().getSize() < AI01392xDecoder2.HEADER_SIZE + AI01decoder.GTIN_SIZE) {
      throw new NotFoundException();
    }
    var buf = new StringBuilder();
    this.encodeCompressedGtin(buf, AI01392xDecoder2.HEADER_SIZE);
    var lastAIdigit = this.getGeneralDecoder().extractNumericValueFromBitArray(AI01392xDecoder2.HEADER_SIZE + AI01decoder.GTIN_SIZE, AI01392xDecoder2.LAST_DIGIT_SIZE);
    buf.append("(392");
    buf.append(lastAIdigit);
    buf.append(")");
    var decodedInformation = this.getGeneralDecoder().decodeGeneralPurposeField(AI01392xDecoder2.HEADER_SIZE + AI01decoder.GTIN_SIZE + AI01392xDecoder2.LAST_DIGIT_SIZE, null);
    buf.append(decodedInformation.getNewString());
    return buf.toString();
  };
  AI01392xDecoder2.HEADER_SIZE = 5 + 1 + 2;
  AI01392xDecoder2.LAST_DIGIT_SIZE = 2;
  return AI01392xDecoder2;
}(AI01decoder);
var __extends$H = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (b2.hasOwnProperty(p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var AI01393xDecoder = function(_super) {
  __extends$H(AI01393xDecoder2, _super);
  function AI01393xDecoder2(information) {
    return _super.call(this, information) || this;
  }
  AI01393xDecoder2.prototype.parseInformation = function() {
    if (this.getInformation().getSize() < AI01393xDecoder2.HEADER_SIZE + AI01decoder.GTIN_SIZE) {
      throw new NotFoundException();
    }
    var buf = new StringBuilder();
    this.encodeCompressedGtin(buf, AI01393xDecoder2.HEADER_SIZE);
    var lastAIdigit = this.getGeneralDecoder().extractNumericValueFromBitArray(AI01393xDecoder2.HEADER_SIZE + AI01decoder.GTIN_SIZE, AI01393xDecoder2.LAST_DIGIT_SIZE);
    buf.append("(393");
    buf.append(lastAIdigit);
    buf.append(")");
    var firstThreeDigits = this.getGeneralDecoder().extractNumericValueFromBitArray(AI01393xDecoder2.HEADER_SIZE + AI01decoder.GTIN_SIZE + AI01393xDecoder2.LAST_DIGIT_SIZE, AI01393xDecoder2.FIRST_THREE_DIGITS_SIZE);
    if (firstThreeDigits / 100 == 0) {
      buf.append("0");
    }
    if (firstThreeDigits / 10 == 0) {
      buf.append("0");
    }
    buf.append(firstThreeDigits);
    var generalInformation = this.getGeneralDecoder().decodeGeneralPurposeField(AI01393xDecoder2.HEADER_SIZE + AI01decoder.GTIN_SIZE + AI01393xDecoder2.LAST_DIGIT_SIZE + AI01393xDecoder2.FIRST_THREE_DIGITS_SIZE, null);
    buf.append(generalInformation.getNewString());
    return buf.toString();
  };
  AI01393xDecoder2.HEADER_SIZE = 5 + 1 + 2;
  AI01393xDecoder2.LAST_DIGIT_SIZE = 2;
  AI01393xDecoder2.FIRST_THREE_DIGITS_SIZE = 10;
  return AI01393xDecoder2;
}(AI01decoder);
var __extends$I = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (b2.hasOwnProperty(p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var AI013x0x1xDecoder = function(_super) {
  __extends$I(AI013x0x1xDecoder2, _super);
  function AI013x0x1xDecoder2(information, firstAIdigits, dateCode) {
    var _this = _super.call(this, information) || this;
    _this.dateCode = dateCode;
    _this.firstAIdigits = firstAIdigits;
    return _this;
  }
  AI013x0x1xDecoder2.prototype.parseInformation = function() {
    if (this.getInformation().getSize() != AI013x0x1xDecoder2.HEADER_SIZE + AI013x0x1xDecoder2.GTIN_SIZE + AI013x0x1xDecoder2.WEIGHT_SIZE + AI013x0x1xDecoder2.DATE_SIZE) {
      throw new NotFoundException();
    }
    var buf = new StringBuilder();
    this.encodeCompressedGtin(buf, AI013x0x1xDecoder2.HEADER_SIZE);
    this.encodeCompressedWeight(buf, AI013x0x1xDecoder2.HEADER_SIZE + AI013x0x1xDecoder2.GTIN_SIZE, AI013x0x1xDecoder2.WEIGHT_SIZE);
    this.encodeCompressedDate(buf, AI013x0x1xDecoder2.HEADER_SIZE + AI013x0x1xDecoder2.GTIN_SIZE + AI013x0x1xDecoder2.WEIGHT_SIZE);
    return buf.toString();
  };
  AI013x0x1xDecoder2.prototype.encodeCompressedDate = function(buf, currentPos) {
    var numericDate = this.getGeneralDecoder().extractNumericValueFromBitArray(currentPos, AI013x0x1xDecoder2.DATE_SIZE);
    if (numericDate == 38400) {
      return;
    }
    buf.append("(");
    buf.append(this.dateCode);
    buf.append(")");
    var day = numericDate % 32;
    numericDate /= 32;
    var month = numericDate % 12 + 1;
    numericDate /= 12;
    var year = numericDate;
    if (year / 10 == 0) {
      buf.append("0");
    }
    buf.append(year);
    if (month / 10 == 0) {
      buf.append("0");
    }
    buf.append(month);
    if (day / 10 == 0) {
      buf.append("0");
    }
    buf.append(day);
  };
  AI013x0x1xDecoder2.prototype.addWeightCode = function(buf, weight) {
    buf.append("(");
    buf.append(this.firstAIdigits);
    buf.append(weight / 1e5);
    buf.append(")");
  };
  AI013x0x1xDecoder2.prototype.checkWeight = function(weight) {
    return weight % 1e5;
  };
  AI013x0x1xDecoder2.HEADER_SIZE = 7 + 1;
  AI013x0x1xDecoder2.WEIGHT_SIZE = 20;
  AI013x0x1xDecoder2.DATE_SIZE = 16;
  return AI013x0x1xDecoder2;
}(AI01weightDecoder);
function createDecoder(information) {
  try {
    if (information.get(1)) {
      return new AI01AndOtherAIs(information);
    }
    if (!information.get(2)) {
      return new AnyAIDecoder(information);
    }
    var fourBitEncodationMethod = GeneralAppIdDecoder.extractNumericValueFromBitArray(information, 1, 4);
    switch (fourBitEncodationMethod) {
      case 4:
        return new AI013103decoder(information);
      case 5:
        return new AI01320xDecoder(information);
    }
    var fiveBitEncodationMethod = GeneralAppIdDecoder.extractNumericValueFromBitArray(information, 1, 5);
    switch (fiveBitEncodationMethod) {
      case 12:
        return new AI01392xDecoder(information);
      case 13:
        return new AI01393xDecoder(information);
    }
    var sevenBitEncodationMethod = GeneralAppIdDecoder.extractNumericValueFromBitArray(information, 1, 7);
    switch (sevenBitEncodationMethod) {
      case 56:
        return new AI013x0x1xDecoder(information, "310", "11");
      case 57:
        return new AI013x0x1xDecoder(information, "320", "11");
      case 58:
        return new AI013x0x1xDecoder(information, "310", "13");
      case 59:
        return new AI013x0x1xDecoder(information, "320", "13");
      case 60:
        return new AI013x0x1xDecoder(information, "310", "15");
      case 61:
        return new AI013x0x1xDecoder(information, "320", "15");
      case 62:
        return new AI013x0x1xDecoder(information, "310", "17");
      case 63:
        return new AI013x0x1xDecoder(information, "320", "17");
    }
  } catch (e) {
    console.log(e);
    throw new IllegalStateException("unknown decoder: " + information);
  }
}
var ExpandedPair = function() {
  function ExpandedPair2(leftChar, rightChar, finderPatter, mayBeLast) {
    this.leftchar = leftChar;
    this.rightchar = rightChar;
    this.finderpattern = finderPatter;
    this.maybeLast = mayBeLast;
  }
  ExpandedPair2.prototype.mayBeLast = function() {
    return this.maybeLast;
  };
  ExpandedPair2.prototype.getLeftChar = function() {
    return this.leftchar;
  };
  ExpandedPair2.prototype.getRightChar = function() {
    return this.rightchar;
  };
  ExpandedPair2.prototype.getFinderPattern = function() {
    return this.finderpattern;
  };
  ExpandedPair2.prototype.mustBeLast = function() {
    return this.rightchar == null;
  };
  ExpandedPair2.prototype.toString = function() {
    return "[ " + this.leftchar + ", " + this.rightchar + " : " + (this.finderpattern == null ? "null" : this.finderpattern.getValue()) + " ]";
  };
  ExpandedPair2.equals = function(o1, o2) {
    if (!(o1 instanceof ExpandedPair2)) {
      return false;
    }
    return ExpandedPair2.equalsOrNull(o1.leftchar, o2.leftchar) && ExpandedPair2.equalsOrNull(o1.rightchar, o2.rightchar) && ExpandedPair2.equalsOrNull(o1.finderpattern, o2.finderpattern);
  };
  ExpandedPair2.equalsOrNull = function(o1, o2) {
    return o1 === null ? o2 === null : ExpandedPair2.equals(o1, o2);
  };
  ExpandedPair2.prototype.hashCode = function() {
    var value = this.leftchar.getValue() ^ this.rightchar.getValue() ^ this.finderpattern.getValue();
    return value;
  };
  return ExpandedPair2;
}();
var ExpandedRow = function() {
  function ExpandedRow2(pairs, rowNumber, wasReversed) {
    this.pairs = pairs;
    this.rowNumber = rowNumber;
    this.wasReversed = wasReversed;
  }
  ExpandedRow2.prototype.getPairs = function() {
    return this.pairs;
  };
  ExpandedRow2.prototype.getRowNumber = function() {
    return this.rowNumber;
  };
  ExpandedRow2.prototype.isReversed = function() {
    return this.wasReversed;
  };
  ExpandedRow2.prototype.isEquivalent = function(otherPairs) {
    return this.checkEqualitity(this, otherPairs);
  };
  ExpandedRow2.prototype.toString = function() {
    return "{ " + this.pairs + " }";
  };
  ExpandedRow2.prototype.equals = function(o1, o2) {
    if (!(o1 instanceof ExpandedRow2)) {
      return false;
    }
    return this.checkEqualitity(o1, o2) && o1.wasReversed === o2.wasReversed;
  };
  ExpandedRow2.prototype.checkEqualitity = function(pair1, pair2) {
    if (!pair1 || !pair2)
      return;
    var result;
    pair1.forEach(function(e1, i) {
      pair2.forEach(function(e2) {
        if (e1.getLeftChar().getValue() === e2.getLeftChar().getValue() && e1.getRightChar().getValue() === e2.getRightChar().getValue() && e1.getFinderPatter().getValue() === e2.getFinderPatter().getValue()) {
          result = true;
        }
      });
    });
    return result;
  };
  return ExpandedRow2;
}();
var __extends$J = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (b2.hasOwnProperty(p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __values$e = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return {value: o && o[i++], done: !o};
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var RSSExpandedReader = function(_super) {
  __extends$J(RSSExpandedReader2, _super);
  function RSSExpandedReader2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.pairs = new Array(RSSExpandedReader2.MAX_PAIRS);
    _this.rows = new Array();
    _this.startEnd = [2];
    return _this;
  }
  RSSExpandedReader2.prototype.decodeRow = function(rowNumber, row, hints) {
    this.pairs.length = 0;
    this.startFromEven = false;
    try {
      return RSSExpandedReader2.constructResult(this.decodeRow2pairs(rowNumber, row));
    } catch (e) {
    }
    this.pairs.length = 0;
    this.startFromEven = true;
    return RSSExpandedReader2.constructResult(this.decodeRow2pairs(rowNumber, row));
  };
  RSSExpandedReader2.prototype.reset = function() {
    this.pairs.length = 0;
    this.rows.length = 0;
  };
  RSSExpandedReader2.prototype.decodeRow2pairs = function(rowNumber, row) {
    var done = false;
    while (!done) {
      try {
        this.pairs.push(this.retrieveNextPair(row, this.pairs, rowNumber));
      } catch (error) {
        if (error instanceof NotFoundException) {
          if (!this.pairs.length) {
            throw new NotFoundException();
          }
          done = true;
        }
      }
    }
    if (this.checkChecksum()) {
      return this.pairs;
    }
    var tryStackedDecode;
    if (this.rows.length) {
      tryStackedDecode = true;
    } else {
      tryStackedDecode = false;
    }
    this.storeRow(rowNumber, false);
    if (tryStackedDecode) {
      var ps = this.checkRowsBoolean(false);
      if (ps != null) {
        return ps;
      }
      ps = this.checkRowsBoolean(true);
      if (ps != null) {
        return ps;
      }
    }
    throw new NotFoundException();
  };
  RSSExpandedReader2.prototype.checkRowsBoolean = function(reverse) {
    if (this.rows.length > 25) {
      this.rows.length = 0;
      return null;
    }
    this.pairs.length = 0;
    if (reverse) {
      this.rows = this.rows.reverse();
    }
    var ps = null;
    try {
      ps = this.checkRows(new Array(), 0);
    } catch (e) {
      console.log(e);
    }
    if (reverse) {
      this.rows = this.rows.reverse();
    }
    return ps;
  };
  RSSExpandedReader2.prototype.checkRows = function(collectedRows, currentRow) {
    var e_1, _a;
    for (var i = currentRow; i < this.rows.length; i++) {
      var row = this.rows[i];
      this.pairs.length = 0;
      try {
        for (var collectedRows_1 = (e_1 = void 0, __values$e(collectedRows)), collectedRows_1_1 = collectedRows_1.next(); !collectedRows_1_1.done; collectedRows_1_1 = collectedRows_1.next()) {
          var collectedRow = collectedRows_1_1.value;
          this.pairs.push(collectedRow.getPairs());
        }
      } catch (e_1_1) {
        e_1 = {error: e_1_1};
      } finally {
        try {
          if (collectedRows_1_1 && !collectedRows_1_1.done && (_a = collectedRows_1.return))
            _a.call(collectedRows_1);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
      this.pairs.push(row.getPairs());
      if (!RSSExpandedReader2.isValidSequence(this.pairs)) {
        continue;
      }
      if (this.checkChecksum()) {
        return this.pairs;
      }
      var rs = new Array(collectedRows);
      rs.push(row);
      try {
        return this.checkRows(rs, i + 1);
      } catch (e) {
        console.log(e);
      }
    }
    throw new NotFoundException();
  };
  RSSExpandedReader2.isValidSequence = function(pairs) {
    var e_2, _a;
    try {
      for (var _b = __values$e(RSSExpandedReader2.FINDER_PATTERN_SEQUENCES), _c = _b.next(); !_c.done; _c = _b.next()) {
        var sequence = _c.value;
        if (pairs.length > sequence.length) {
          continue;
        }
        var stop_1 = true;
        for (var j = 0; j < pairs.length; j++) {
          if (pairs[j].getFinderPattern().getValue() != sequence[j]) {
            stop_1 = false;
            break;
          }
        }
        if (stop_1) {
          return true;
        }
      }
    } catch (e_2_1) {
      e_2 = {error: e_2_1};
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return))
          _a.call(_b);
      } finally {
        if (e_2)
          throw e_2.error;
      }
    }
    return false;
  };
  RSSExpandedReader2.prototype.storeRow = function(rowNumber, wasReversed) {
    var insertPos = 0;
    var prevIsSame = false;
    var nextIsSame = false;
    while (insertPos < this.rows.length) {
      var erow = this.rows[insertPos];
      if (erow.getRowNumber() > rowNumber) {
        nextIsSame = erow.isEquivalent(this.pairs);
        break;
      }
      prevIsSame = erow.isEquivalent(this.pairs);
      insertPos++;
    }
    if (nextIsSame || prevIsSame) {
      return;
    }
    if (RSSExpandedReader2.isPartialRow(this.pairs, this.rows)) {
      return;
    }
    this.rows.push(insertPos, new ExpandedRow(this.pairs, rowNumber, wasReversed));
    this.removePartialRows(this.pairs, this.rows);
  };
  RSSExpandedReader2.prototype.removePartialRows = function(pairs, rows) {
    var e_3, _a, e_4, _b, e_5, _c;
    try {
      for (var rows_1 = __values$e(rows), rows_1_1 = rows_1.next(); !rows_1_1.done; rows_1_1 = rows_1.next()) {
        var row = rows_1_1.value;
        if (row.getPairs().length === pairs.length) {
          continue;
        }
        var allFound = true;
        try {
          for (var _d = (e_4 = void 0, __values$e(row.getPairs())), _e = _d.next(); !_e.done; _e = _d.next()) {
            var p = _e.value;
            var found = false;
            try {
              for (var pairs_1 = (e_5 = void 0, __values$e(pairs)), pairs_1_1 = pairs_1.next(); !pairs_1_1.done; pairs_1_1 = pairs_1.next()) {
                var pp = pairs_1_1.value;
                if (ExpandedPair.equals(p, pp)) {
                  found = true;
                  break;
                }
              }
            } catch (e_5_1) {
              e_5 = {error: e_5_1};
            } finally {
              try {
                if (pairs_1_1 && !pairs_1_1.done && (_c = pairs_1.return))
                  _c.call(pairs_1);
              } finally {
                if (e_5)
                  throw e_5.error;
              }
            }
            if (!found) {
              allFound = false;
            }
          }
        } catch (e_4_1) {
          e_4 = {error: e_4_1};
        } finally {
          try {
            if (_e && !_e.done && (_b = _d.return))
              _b.call(_d);
          } finally {
            if (e_4)
              throw e_4.error;
          }
        }
      }
    } catch (e_3_1) {
      e_3 = {error: e_3_1};
    } finally {
      try {
        if (rows_1_1 && !rows_1_1.done && (_a = rows_1.return))
          _a.call(rows_1);
      } finally {
        if (e_3)
          throw e_3.error;
      }
    }
  };
  RSSExpandedReader2.isPartialRow = function(pairs, rows) {
    var e_6, _a, e_7, _b, e_8, _c;
    try {
      for (var rows_2 = __values$e(rows), rows_2_1 = rows_2.next(); !rows_2_1.done; rows_2_1 = rows_2.next()) {
        var r = rows_2_1.value;
        var allFound = true;
        try {
          for (var pairs_2 = (e_7 = void 0, __values$e(pairs)), pairs_2_1 = pairs_2.next(); !pairs_2_1.done; pairs_2_1 = pairs_2.next()) {
            var p = pairs_2_1.value;
            var found = false;
            try {
              for (var _d = (e_8 = void 0, __values$e(r.getPairs())), _e = _d.next(); !_e.done; _e = _d.next()) {
                var pp = _e.value;
                if (p.equals(pp)) {
                  found = true;
                  break;
                }
              }
            } catch (e_8_1) {
              e_8 = {error: e_8_1};
            } finally {
              try {
                if (_e && !_e.done && (_c = _d.return))
                  _c.call(_d);
              } finally {
                if (e_8)
                  throw e_8.error;
              }
            }
            if (!found) {
              allFound = false;
              break;
            }
          }
        } catch (e_7_1) {
          e_7 = {error: e_7_1};
        } finally {
          try {
            if (pairs_2_1 && !pairs_2_1.done && (_b = pairs_2.return))
              _b.call(pairs_2);
          } finally {
            if (e_7)
              throw e_7.error;
          }
        }
        if (allFound) {
          return true;
        }
      }
    } catch (e_6_1) {
      e_6 = {error: e_6_1};
    } finally {
      try {
        if (rows_2_1 && !rows_2_1.done && (_a = rows_2.return))
          _a.call(rows_2);
      } finally {
        if (e_6)
          throw e_6.error;
      }
    }
    return false;
  };
  RSSExpandedReader2.prototype.getRows = function() {
    return this.rows;
  };
  RSSExpandedReader2.constructResult = function(pairs) {
    var binary = BitArrayBuilder.buildBitArray(pairs);
    var decoder = createDecoder(binary);
    var resultingString = decoder.parseInformation();
    var firstPoints = pairs[0].getFinderPattern().getResultPoints();
    var lastPoints = pairs[pairs.length - 1].getFinderPattern().getResultPoints();
    var points = [firstPoints[0], firstPoints[1], lastPoints[0], lastPoints[1]];
    return new Result(resultingString, null, null, points, BarcodeFormat$1.RSS_EXPANDED, null);
  };
  RSSExpandedReader2.prototype.checkChecksum = function() {
    var firstPair = this.pairs.get(0);
    var checkCharacter = firstPair.getLeftChar();
    var firstCharacter = firstPair.getRightChar();
    if (firstCharacter == null) {
      return false;
    }
    var checksum = firstCharacter.getChecksumPortion();
    var s = 2;
    for (var i = 1; i < this.pairs.size(); ++i) {
      var currentPair = this.pairs.get(i);
      checksum += currentPair.getLeftChar().getChecksumPortion();
      s++;
      var currentRightChar = currentPair.getRightChar();
      if (currentRightChar != null) {
        checksum += currentRightChar.getChecksumPortion();
        s++;
      }
    }
    checksum %= 211;
    var checkCharacterValue = 211 * (s - 4) + checksum;
    return checkCharacterValue == checkCharacter.getValue();
  };
  RSSExpandedReader2.getNextSecondBar = function(row, initialPos) {
    var currentPos;
    if (row.get(initialPos)) {
      currentPos = row.getNextUnset(initialPos);
      currentPos = row.getNextSet(currentPos);
    } else {
      currentPos = row.getNextSet(initialPos);
      currentPos = row.getNextUnset(currentPos);
    }
    return currentPos;
  };
  RSSExpandedReader2.prototype.retrieveNextPair = function(row, previousPairs, rowNumber) {
    var isOddPattern = previousPairs.length % 2 == 0;
    if (this.startFromEven) {
      isOddPattern = !isOddPattern;
    }
    var pattern;
    var keepFinding = true;
    var forcedOffset = -1;
    do {
      this.findNextPair(row, previousPairs, forcedOffset);
      pattern = this.parseFoundFinderPattern(row, rowNumber, isOddPattern);
      if (pattern == null) {
        forcedOffset = RSSExpandedReader2.getNextSecondBar(row, this.startEnd[0]);
      } else {
        keepFinding = false;
      }
    } while (keepFinding);
    var leftChar = this.decodeDataCharacter(row, pattern, isOddPattern, true);
    if (!this.isEmptyPair(previousPairs) && previousPairs[previousPairs.length - 1].mustBeLast()) {
      throw new NotFoundException();
    }
    var rightChar;
    try {
      rightChar = this.decodeDataCharacter(row, pattern, isOddPattern, false);
    } catch (e) {
      rightChar = null;
      console.log(e);
    }
    return new ExpandedPair(leftChar, rightChar, pattern, true);
  };
  RSSExpandedReader2.prototype.isEmptyPair = function(pairs) {
    if (pairs.length === 0) {
      return true;
    }
    return false;
  };
  RSSExpandedReader2.prototype.findNextPair = function(row, previousPairs, forcedOffset) {
    var counters = this.getDecodeFinderCounters();
    counters[0] = 0;
    counters[1] = 0;
    counters[2] = 0;
    counters[3] = 0;
    var width = row.getSize();
    var rowOffset;
    if (forcedOffset >= 0) {
      rowOffset = forcedOffset;
    } else if (this.isEmptyPair(previousPairs)) {
      rowOffset = 0;
    } else {
      var lastPair = previousPairs[previousPairs.length - 1];
      rowOffset = lastPair.getFinderPattern().getStartEnd()[1];
    }
    var searchingEvenPair = previousPairs.length % 2 != 0;
    if (this.startFromEven) {
      searchingEvenPair = !searchingEvenPair;
    }
    var isWhite = false;
    while (rowOffset < width) {
      isWhite = !row.get(rowOffset);
      if (!isWhite) {
        break;
      }
      rowOffset++;
    }
    var counterPosition = 0;
    var patternStart = rowOffset;
    for (var x = rowOffset; x < width; x++) {
      if (row.get(x) != isWhite) {
        counters[counterPosition]++;
      } else {
        if (counterPosition == 3) {
          if (searchingEvenPair) {
            RSSExpandedReader2.reverseCounters(counters);
          }
          if (RSSExpandedReader2.isFinderPattern(counters)) {
            this.startEnd[0] = patternStart;
            this.startEnd[1] = x;
            return;
          }
          if (searchingEvenPair) {
            RSSExpandedReader2.reverseCounters(counters);
          }
          patternStart += counters[0] + counters[1];
          counters[0] = counters[2];
          counters[1] = counters[3];
          counters[2] = 0;
          counters[3] = 0;
          counterPosition--;
        } else {
          counterPosition++;
        }
        counters[counterPosition] = 1;
        isWhite = !isWhite;
      }
    }
    throw new NotFoundException();
  };
  RSSExpandedReader2.reverseCounters = function(counters) {
    var length = counters.length;
    for (var i = 0; i < length / 2; ++i) {
      var tmp = counters[i];
      counters[i] = counters[length - i - 1];
      counters[length - i - 1] = tmp;
    }
  };
  RSSExpandedReader2.prototype.parseFoundFinderPattern = function(row, rowNumber, oddPattern) {
    var firstCounter;
    var start;
    var end;
    if (oddPattern) {
      var firstElementStart = this.startEnd[0] - 1;
      while (firstElementStart >= 0 && !row.get(firstElementStart)) {
        firstElementStart--;
      }
      firstElementStart++;
      firstCounter = this.startEnd[0] - firstElementStart;
      start = firstElementStart;
      end = this.startEnd[1];
    } else {
      start = this.startEnd[0];
      end = row.getNextUnset(this.startEnd[1] + 1);
      firstCounter = end - this.startEnd[1];
    }
    var counters = this.getDecodeFinderCounters();
    System.arraycopy(counters, 0, counters, 1, counters.length - 1);
    counters[0] = firstCounter;
    var value;
    try {
      value = this.parseFinderValue(counters, RSSExpandedReader2.FINDER_PATTERNS);
    } catch (e) {
      return null;
    }
    return new FinderPattern(value, [start, end], start, end, rowNumber);
  };
  RSSExpandedReader2.prototype.decodeDataCharacter = function(row, pattern, isOddPattern, leftChar) {
    var counters = this.getDataCharacterCounters();
    for (var x = 0; x < counters.length; x++) {
      counters[x] = 0;
    }
    if (leftChar) {
      RSSExpandedReader2.recordPatternInReverse(row, pattern.getStartEnd()[0], counters);
    } else {
      RSSExpandedReader2.recordPattern(row, pattern.getStartEnd()[1], counters);
      for (var i = 0, j = counters.length - 1; i < j; i++, j--) {
        var temp = counters[i];
        counters[i] = counters[j];
        counters[j] = temp;
      }
    }
    var numModules = 17;
    var elementWidth = MathUtils.sum(new Int32Array(counters)) / numModules;
    var expectedElementWidth = (pattern.getStartEnd()[1] - pattern.getStartEnd()[0]) / 15;
    if (Math.abs(elementWidth - expectedElementWidth) / expectedElementWidth > 0.3) {
      throw new NotFoundException();
    }
    var oddCounts = this.getOddCounts();
    var evenCounts = this.getEvenCounts();
    var oddRoundingErrors = this.getOddRoundingErrors();
    var evenRoundingErrors = this.getEvenRoundingErrors();
    for (var i = 0; i < counters.length; i++) {
      var value_1 = 1 * counters[i] / elementWidth;
      var count = value_1 + 0.5;
      if (count < 1) {
        if (value_1 < 0.3) {
          throw new NotFoundException();
        }
        count = 1;
      } else if (count > 8) {
        if (value_1 > 8.7) {
          throw new NotFoundException();
        }
        count = 8;
      }
      var offset = i / 2;
      if ((i & 1) == 0) {
        oddCounts[offset] = count;
        oddRoundingErrors[offset] = value_1 - count;
      } else {
        evenCounts[offset] = count;
        evenRoundingErrors[offset] = value_1 - count;
      }
    }
    this.adjustOddEvenCounts(numModules);
    var weightRowNumber = 4 * pattern.getValue() + (isOddPattern ? 0 : 2) + (leftChar ? 0 : 1) - 1;
    var oddSum = 0;
    var oddChecksumPortion = 0;
    for (var i = oddCounts.length - 1; i >= 0; i--) {
      if (RSSExpandedReader2.isNotA1left(pattern, isOddPattern, leftChar)) {
        var weight = RSSExpandedReader2.WEIGHTS[weightRowNumber][2 * i];
        oddChecksumPortion += oddCounts[i] * weight;
      }
      oddSum += oddCounts[i];
    }
    var evenChecksumPortion = 0;
    for (var i = evenCounts.length - 1; i >= 0; i--) {
      if (RSSExpandedReader2.isNotA1left(pattern, isOddPattern, leftChar)) {
        var weight = RSSExpandedReader2.WEIGHTS[weightRowNumber][2 * i + 1];
        evenChecksumPortion += evenCounts[i] * weight;
      }
    }
    var checksumPortion = oddChecksumPortion + evenChecksumPortion;
    if ((oddSum & 1) != 0 || oddSum > 13 || oddSum < 4) {
      throw new NotFoundException();
    }
    var group = (13 - oddSum) / 2;
    var oddWidest = RSSExpandedReader2.SYMBOL_WIDEST[group];
    var evenWidest = 9 - oddWidest;
    var vOdd = RSSUtils.getRSSvalue(oddCounts, oddWidest, true);
    var vEven = RSSUtils.getRSSvalue(evenCounts, evenWidest, false);
    var tEven = RSSExpandedReader2.EVEN_TOTAL_SUBSET[group];
    var gSum = RSSExpandedReader2.GSUM[group];
    var value = vOdd * tEven + vEven + gSum;
    return new DataCharacter(value, checksumPortion);
  };
  RSSExpandedReader2.isNotA1left = function(pattern, isOddPattern, leftChar) {
    return !(pattern.getValue() == 0 && isOddPattern && leftChar);
  };
  RSSExpandedReader2.prototype.adjustOddEvenCounts = function(numModules) {
    var oddSum = MathUtils.sum(new Int32Array(this.getOddCounts()));
    var evenSum = MathUtils.sum(new Int32Array(this.getEvenCounts()));
    var incrementOdd = false;
    var decrementOdd = false;
    if (oddSum > 13) {
      decrementOdd = true;
    } else if (oddSum < 4) {
      incrementOdd = true;
    }
    var incrementEven = false;
    var decrementEven = false;
    if (evenSum > 13) {
      decrementEven = true;
    } else if (evenSum < 4) {
      incrementEven = true;
    }
    var mismatch = oddSum + evenSum - numModules;
    var oddParityBad = (oddSum & 1) == 1;
    var evenParityBad = (evenSum & 1) == 0;
    if (mismatch == 1) {
      if (oddParityBad) {
        if (evenParityBad) {
          throw new NotFoundException();
        }
        decrementOdd = true;
      } else {
        if (!evenParityBad) {
          throw new NotFoundException();
        }
        decrementEven = true;
      }
    } else if (mismatch == -1) {
      if (oddParityBad) {
        if (evenParityBad) {
          throw new NotFoundException();
        }
        incrementOdd = true;
      } else {
        if (!evenParityBad) {
          throw new NotFoundException();
        }
        incrementEven = true;
      }
    } else if (mismatch == 0) {
      if (oddParityBad) {
        if (!evenParityBad) {
          throw new NotFoundException();
        }
        if (oddSum < evenSum) {
          incrementOdd = true;
          decrementEven = true;
        } else {
          decrementOdd = true;
          incrementEven = true;
        }
      } else {
        if (evenParityBad) {
          throw new NotFoundException();
        }
      }
    } else {
      throw new NotFoundException();
    }
    if (incrementOdd) {
      if (decrementOdd) {
        throw new NotFoundException();
      }
      RSSExpandedReader2.increment(this.getOddCounts(), this.getOddRoundingErrors());
    }
    if (decrementOdd) {
      RSSExpandedReader2.decrement(this.getOddCounts(), this.getOddRoundingErrors());
    }
    if (incrementEven) {
      if (decrementEven) {
        throw new NotFoundException();
      }
      RSSExpandedReader2.increment(this.getEvenCounts(), this.getOddRoundingErrors());
    }
    if (decrementEven) {
      RSSExpandedReader2.decrement(this.getEvenCounts(), this.getEvenRoundingErrors());
    }
  };
  RSSExpandedReader2.SYMBOL_WIDEST = [7, 5, 4, 3, 1];
  RSSExpandedReader2.EVEN_TOTAL_SUBSET = [4, 20, 52, 104, 204];
  RSSExpandedReader2.GSUM = [0, 348, 1388, 2948, 3988];
  RSSExpandedReader2.FINDER_PATTERNS = [
    Int32Array.from([1, 8, 4, 1]),
    Int32Array.from([3, 6, 4, 1]),
    Int32Array.from([3, 4, 6, 1]),
    Int32Array.from([3, 2, 8, 1]),
    Int32Array.from([2, 6, 5, 1]),
    Int32Array.from([2, 2, 9, 1])
  ];
  RSSExpandedReader2.WEIGHTS = [
    [1, 3, 9, 27, 81, 32, 96, 77],
    [20, 60, 180, 118, 143, 7, 21, 63],
    [189, 145, 13, 39, 117, 140, 209, 205],
    [193, 157, 49, 147, 19, 57, 171, 91],
    [62, 186, 136, 197, 169, 85, 44, 132],
    [185, 133, 188, 142, 4, 12, 36, 108],
    [113, 128, 173, 97, 80, 29, 87, 50],
    [150, 28, 84, 41, 123, 158, 52, 156],
    [46, 138, 203, 187, 139, 206, 196, 166],
    [76, 17, 51, 153, 37, 111, 122, 155],
    [43, 129, 176, 106, 107, 110, 119, 146],
    [16, 48, 144, 10, 30, 90, 59, 177],
    [109, 116, 137, 200, 178, 112, 125, 164],
    [70, 210, 208, 202, 184, 130, 179, 115],
    [134, 191, 151, 31, 93, 68, 204, 190],
    [148, 22, 66, 198, 172, 94, 71, 2],
    [6, 18, 54, 162, 64, 192, 154, 40],
    [120, 149, 25, 75, 14, 42, 126, 167],
    [79, 26, 78, 23, 69, 207, 199, 175],
    [103, 98, 83, 38, 114, 131, 182, 124],
    [161, 61, 183, 127, 170, 88, 53, 159],
    [55, 165, 73, 8, 24, 72, 5, 15],
    [45, 135, 194, 160, 58, 174, 100, 89]
  ];
  RSSExpandedReader2.FINDER_PAT_A = 0;
  RSSExpandedReader2.FINDER_PAT_B = 1;
  RSSExpandedReader2.FINDER_PAT_C = 2;
  RSSExpandedReader2.FINDER_PAT_D = 3;
  RSSExpandedReader2.FINDER_PAT_E = 4;
  RSSExpandedReader2.FINDER_PAT_F = 5;
  RSSExpandedReader2.FINDER_PATTERN_SEQUENCES = [
    [RSSExpandedReader2.FINDER_PAT_A, RSSExpandedReader2.FINDER_PAT_A],
    [RSSExpandedReader2.FINDER_PAT_A, RSSExpandedReader2.FINDER_PAT_B, RSSExpandedReader2.FINDER_PAT_B],
    [RSSExpandedReader2.FINDER_PAT_A, RSSExpandedReader2.FINDER_PAT_C, RSSExpandedReader2.FINDER_PAT_B, RSSExpandedReader2.FINDER_PAT_D],
    [RSSExpandedReader2.FINDER_PAT_A, RSSExpandedReader2.FINDER_PAT_E, RSSExpandedReader2.FINDER_PAT_B, RSSExpandedReader2.FINDER_PAT_D, RSSExpandedReader2.FINDER_PAT_C],
    [RSSExpandedReader2.FINDER_PAT_A, RSSExpandedReader2.FINDER_PAT_E, RSSExpandedReader2.FINDER_PAT_B, RSSExpandedReader2.FINDER_PAT_D, RSSExpandedReader2.FINDER_PAT_D, RSSExpandedReader2.FINDER_PAT_F],
    [RSSExpandedReader2.FINDER_PAT_A, RSSExpandedReader2.FINDER_PAT_E, RSSExpandedReader2.FINDER_PAT_B, RSSExpandedReader2.FINDER_PAT_D, RSSExpandedReader2.FINDER_PAT_E, RSSExpandedReader2.FINDER_PAT_F, RSSExpandedReader2.FINDER_PAT_F],
    [RSSExpandedReader2.FINDER_PAT_A, RSSExpandedReader2.FINDER_PAT_A, RSSExpandedReader2.FINDER_PAT_B, RSSExpandedReader2.FINDER_PAT_B, RSSExpandedReader2.FINDER_PAT_C, RSSExpandedReader2.FINDER_PAT_C, RSSExpandedReader2.FINDER_PAT_D, RSSExpandedReader2.FINDER_PAT_D],
    [RSSExpandedReader2.FINDER_PAT_A, RSSExpandedReader2.FINDER_PAT_A, RSSExpandedReader2.FINDER_PAT_B, RSSExpandedReader2.FINDER_PAT_B, RSSExpandedReader2.FINDER_PAT_C, RSSExpandedReader2.FINDER_PAT_C, RSSExpandedReader2.FINDER_PAT_D, RSSExpandedReader2.FINDER_PAT_E, RSSExpandedReader2.FINDER_PAT_E],
    [RSSExpandedReader2.FINDER_PAT_A, RSSExpandedReader2.FINDER_PAT_A, RSSExpandedReader2.FINDER_PAT_B, RSSExpandedReader2.FINDER_PAT_B, RSSExpandedReader2.FINDER_PAT_C, RSSExpandedReader2.FINDER_PAT_C, RSSExpandedReader2.FINDER_PAT_D, RSSExpandedReader2.FINDER_PAT_E, RSSExpandedReader2.FINDER_PAT_F, RSSExpandedReader2.FINDER_PAT_F],
    [RSSExpandedReader2.FINDER_PAT_A, RSSExpandedReader2.FINDER_PAT_A, RSSExpandedReader2.FINDER_PAT_B, RSSExpandedReader2.FINDER_PAT_B, RSSExpandedReader2.FINDER_PAT_C, RSSExpandedReader2.FINDER_PAT_D, RSSExpandedReader2.FINDER_PAT_D, RSSExpandedReader2.FINDER_PAT_E, RSSExpandedReader2.FINDER_PAT_E, RSSExpandedReader2.FINDER_PAT_F, RSSExpandedReader2.FINDER_PAT_F]
  ];
  RSSExpandedReader2.MAX_PAIRS = 11;
  return RSSExpandedReader2;
}(AbstractRSSReader);
var __extends$K = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (b2.hasOwnProperty(p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var Pair = function(_super) {
  __extends$K(Pair2, _super);
  function Pair2(value, checksumPortion, finderPattern) {
    var _this = _super.call(this, value, checksumPortion) || this;
    _this.count = 0;
    _this.finderPattern = finderPattern;
    return _this;
  }
  Pair2.prototype.getFinderPattern = function() {
    return this.finderPattern;
  };
  Pair2.prototype.getCount = function() {
    return this.count;
  };
  Pair2.prototype.incrementCount = function() {
    this.count++;
  };
  return Pair2;
}(DataCharacter);
var __extends$L = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (b2.hasOwnProperty(p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __values$f = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return {value: o && o[i++], done: !o};
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var RSS14Reader = function(_super) {
  __extends$L(RSS14Reader2, _super);
  function RSS14Reader2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.possibleLeftPairs = [];
    _this.possibleRightPairs = [];
    return _this;
  }
  RSS14Reader2.prototype.decodeRow = function(rowNumber, row, hints) {
    var e_1, _a, e_2, _b;
    var leftPair = this.decodePair(row, false, rowNumber, hints);
    RSS14Reader2.addOrTally(this.possibleLeftPairs, leftPair);
    row.reverse();
    var rightPair = this.decodePair(row, true, rowNumber, hints);
    RSS14Reader2.addOrTally(this.possibleRightPairs, rightPair);
    row.reverse();
    try {
      for (var _c = __values$f(this.possibleLeftPairs), _d = _c.next(); !_d.done; _d = _c.next()) {
        var left = _d.value;
        if (left.getCount() > 1) {
          try {
            for (var _e = (e_2 = void 0, __values$f(this.possibleRightPairs)), _f = _e.next(); !_f.done; _f = _e.next()) {
              var right = _f.value;
              if (right.getCount() > 1 && RSS14Reader2.checkChecksum(left, right)) {
                return RSS14Reader2.constructResult(left, right);
              }
            }
          } catch (e_2_1) {
            e_2 = {error: e_2_1};
          } finally {
            try {
              if (_f && !_f.done && (_b = _e.return))
                _b.call(_e);
            } finally {
              if (e_2)
                throw e_2.error;
            }
          }
        }
      }
    } catch (e_1_1) {
      e_1 = {error: e_1_1};
    } finally {
      try {
        if (_d && !_d.done && (_a = _c.return))
          _a.call(_c);
      } finally {
        if (e_1)
          throw e_1.error;
      }
    }
    throw new NotFoundException();
  };
  RSS14Reader2.addOrTally = function(possiblePairs, pair) {
    var e_3, _a;
    if (pair == null) {
      return;
    }
    var found = false;
    try {
      for (var possiblePairs_1 = __values$f(possiblePairs), possiblePairs_1_1 = possiblePairs_1.next(); !possiblePairs_1_1.done; possiblePairs_1_1 = possiblePairs_1.next()) {
        var other = possiblePairs_1_1.value;
        if (other.getValue() === pair.getValue()) {
          other.incrementCount();
          found = true;
          break;
        }
      }
    } catch (e_3_1) {
      e_3 = {error: e_3_1};
    } finally {
      try {
        if (possiblePairs_1_1 && !possiblePairs_1_1.done && (_a = possiblePairs_1.return))
          _a.call(possiblePairs_1);
      } finally {
        if (e_3)
          throw e_3.error;
      }
    }
    if (!found) {
      possiblePairs.push(pair);
    }
  };
  RSS14Reader2.prototype.reset = function() {
    this.possibleLeftPairs.length = 0;
    this.possibleRightPairs.length = 0;
  };
  RSS14Reader2.constructResult = function(leftPair, rightPair) {
    var symbolValue = 4537077 * leftPair.getValue() + rightPair.getValue();
    var text = new String(symbolValue).toString();
    var buffer = new StringBuilder();
    for (var i = 13 - text.length; i > 0; i--) {
      buffer.append("0");
    }
    buffer.append(text);
    var checkDigit = 0;
    for (var i = 0; i < 13; i++) {
      var digit = buffer.charAt(i).charCodeAt(0) - "0".charCodeAt(0);
      checkDigit += (i & 1) === 0 ? 3 * digit : digit;
    }
    checkDigit = 10 - checkDigit % 10;
    if (checkDigit === 10) {
      checkDigit = 0;
    }
    buffer.append(checkDigit.toString());
    var leftPoints = leftPair.getFinderPattern().getResultPoints();
    var rightPoints = rightPair.getFinderPattern().getResultPoints();
    return new Result(buffer.toString(), null, 0, [leftPoints[0], leftPoints[1], rightPoints[0], rightPoints[1]], BarcodeFormat$1.RSS_14, new Date().getTime());
  };
  RSS14Reader2.checkChecksum = function(leftPair, rightPair) {
    var checkValue = (leftPair.getChecksumPortion() + 16 * rightPair.getChecksumPortion()) % 79;
    var targetCheckValue = 9 * leftPair.getFinderPattern().getValue() + rightPair.getFinderPattern().getValue();
    if (targetCheckValue > 72) {
      targetCheckValue--;
    }
    if (targetCheckValue > 8) {
      targetCheckValue--;
    }
    return checkValue === targetCheckValue;
  };
  RSS14Reader2.prototype.decodePair = function(row, right, rowNumber, hints) {
    try {
      var startEnd = this.findFinderPattern(row, right);
      var pattern = this.parseFoundFinderPattern(row, rowNumber, right, startEnd);
      var resultPointCallback = hints == null ? null : hints.get(DecodeHintType$1.NEED_RESULT_POINT_CALLBACK);
      if (resultPointCallback != null) {
        var center = (startEnd[0] + startEnd[1]) / 2;
        if (right) {
          center = row.getSize() - 1 - center;
        }
        resultPointCallback.foundPossibleResultPoint(new ResultPoint(center, rowNumber));
      }
      var outside = this.decodeDataCharacter(row, pattern, true);
      var inside = this.decodeDataCharacter(row, pattern, false);
      return new Pair(1597 * outside.getValue() + inside.getValue(), outside.getChecksumPortion() + 4 * inside.getChecksumPortion(), pattern);
    } catch (err) {
      return null;
    }
  };
  RSS14Reader2.prototype.decodeDataCharacter = function(row, pattern, outsideChar) {
    var counters = this.getDataCharacterCounters();
    for (var x = 0; x < counters.length; x++) {
      counters[x] = 0;
    }
    if (outsideChar) {
      OneDReader.recordPatternInReverse(row, pattern.getStartEnd()[0], counters);
    } else {
      OneDReader.recordPattern(row, pattern.getStartEnd()[1] + 1, counters);
      for (var i = 0, j = counters.length - 1; i < j; i++, j--) {
        var temp = counters[i];
        counters[i] = counters[j];
        counters[j] = temp;
      }
    }
    var numModules = outsideChar ? 16 : 15;
    var elementWidth = MathUtils.sum(new Int32Array(counters)) / numModules;
    var oddCounts = this.getOddCounts();
    var evenCounts = this.getEvenCounts();
    var oddRoundingErrors = this.getOddRoundingErrors();
    var evenRoundingErrors = this.getEvenRoundingErrors();
    for (var i = 0; i < counters.length; i++) {
      var value = counters[i] / elementWidth;
      var count = Math.floor(value + 0.5);
      if (count < 1) {
        count = 1;
      } else if (count > 8) {
        count = 8;
      }
      var offset = Math.floor(i / 2);
      if ((i & 1) === 0) {
        oddCounts[offset] = count;
        oddRoundingErrors[offset] = value - count;
      } else {
        evenCounts[offset] = count;
        evenRoundingErrors[offset] = value - count;
      }
    }
    this.adjustOddEvenCounts(outsideChar, numModules);
    var oddSum = 0;
    var oddChecksumPortion = 0;
    for (var i = oddCounts.length - 1; i >= 0; i--) {
      oddChecksumPortion *= 9;
      oddChecksumPortion += oddCounts[i];
      oddSum += oddCounts[i];
    }
    var evenChecksumPortion = 0;
    var evenSum = 0;
    for (var i = evenCounts.length - 1; i >= 0; i--) {
      evenChecksumPortion *= 9;
      evenChecksumPortion += evenCounts[i];
      evenSum += evenCounts[i];
    }
    var checksumPortion = oddChecksumPortion + 3 * evenChecksumPortion;
    if (outsideChar) {
      if ((oddSum & 1) !== 0 || oddSum > 12 || oddSum < 4) {
        throw new NotFoundException();
      }
      var group = (12 - oddSum) / 2;
      var oddWidest = RSS14Reader2.OUTSIDE_ODD_WIDEST[group];
      var evenWidest = 9 - oddWidest;
      var vOdd = RSSUtils.getRSSvalue(oddCounts, oddWidest, false);
      var vEven = RSSUtils.getRSSvalue(evenCounts, evenWidest, true);
      var tEven = RSS14Reader2.OUTSIDE_EVEN_TOTAL_SUBSET[group];
      var gSum = RSS14Reader2.OUTSIDE_GSUM[group];
      return new DataCharacter(vOdd * tEven + vEven + gSum, checksumPortion);
    } else {
      if ((evenSum & 1) !== 0 || evenSum > 10 || evenSum < 4) {
        throw new NotFoundException();
      }
      var group = (10 - evenSum) / 2;
      var oddWidest = RSS14Reader2.INSIDE_ODD_WIDEST[group];
      var evenWidest = 9 - oddWidest;
      var vOdd = RSSUtils.getRSSvalue(oddCounts, oddWidest, true);
      var vEven = RSSUtils.getRSSvalue(evenCounts, evenWidest, false);
      var tOdd = RSS14Reader2.INSIDE_ODD_TOTAL_SUBSET[group];
      var gSum = RSS14Reader2.INSIDE_GSUM[group];
      return new DataCharacter(vEven * tOdd + vOdd + gSum, checksumPortion);
    }
  };
  RSS14Reader2.prototype.findFinderPattern = function(row, rightFinderPattern) {
    var counters = this.getDecodeFinderCounters();
    counters[0] = 0;
    counters[1] = 0;
    counters[2] = 0;
    counters[3] = 0;
    var width = row.getSize();
    var isWhite = false;
    var rowOffset = 0;
    while (rowOffset < width) {
      isWhite = !row.get(rowOffset);
      if (rightFinderPattern === isWhite) {
        break;
      }
      rowOffset++;
    }
    var counterPosition = 0;
    var patternStart = rowOffset;
    for (var x = rowOffset; x < width; x++) {
      if (row.get(x) !== isWhite) {
        counters[counterPosition]++;
      } else {
        if (counterPosition === 3) {
          if (AbstractRSSReader.isFinderPattern(counters)) {
            return [patternStart, x];
          }
          patternStart += counters[0] + counters[1];
          counters[0] = counters[2];
          counters[1] = counters[3];
          counters[2] = 0;
          counters[3] = 0;
          counterPosition--;
        } else {
          counterPosition++;
        }
        counters[counterPosition] = 1;
        isWhite = !isWhite;
      }
    }
    throw new NotFoundException();
  };
  RSS14Reader2.prototype.parseFoundFinderPattern = function(row, rowNumber, right, startEnd) {
    var firstIsBlack = row.get(startEnd[0]);
    var firstElementStart = startEnd[0] - 1;
    while (firstElementStart >= 0 && firstIsBlack !== row.get(firstElementStart)) {
      firstElementStart--;
    }
    firstElementStart++;
    var firstCounter = startEnd[0] - firstElementStart;
    var counters = this.getDecodeFinderCounters();
    var copy = new Int32Array(counters.length);
    System.arraycopy(counters, 0, copy, 1, counters.length - 1);
    copy[0] = firstCounter;
    var value = this.parseFinderValue(copy, RSS14Reader2.FINDER_PATTERNS);
    var start = firstElementStart;
    var end = startEnd[1];
    if (right) {
      start = row.getSize() - 1 - start;
      end = row.getSize() - 1 - end;
    }
    return new FinderPattern(value, [firstElementStart, startEnd[1]], start, end, rowNumber);
  };
  RSS14Reader2.prototype.adjustOddEvenCounts = function(outsideChar, numModules) {
    var oddSum = MathUtils.sum(new Int32Array(this.getOddCounts()));
    var evenSum = MathUtils.sum(new Int32Array(this.getEvenCounts()));
    var incrementOdd = false;
    var decrementOdd = false;
    var incrementEven = false;
    var decrementEven = false;
    if (outsideChar) {
      if (oddSum > 12) {
        decrementOdd = true;
      } else if (oddSum < 4) {
        incrementOdd = true;
      }
      if (evenSum > 12) {
        decrementEven = true;
      } else if (evenSum < 4) {
        incrementEven = true;
      }
    } else {
      if (oddSum > 11) {
        decrementOdd = true;
      } else if (oddSum < 5) {
        incrementOdd = true;
      }
      if (evenSum > 10) {
        decrementEven = true;
      } else if (evenSum < 4) {
        incrementEven = true;
      }
    }
    var mismatch = oddSum + evenSum - numModules;
    var oddParityBad = (oddSum & 1) === (outsideChar ? 1 : 0);
    var evenParityBad = (evenSum & 1) === 1;
    if (mismatch === 1) {
      if (oddParityBad) {
        if (evenParityBad) {
          throw new NotFoundException();
        }
        decrementOdd = true;
      } else {
        if (!evenParityBad) {
          throw new NotFoundException();
        }
        decrementEven = true;
      }
    } else if (mismatch === -1) {
      if (oddParityBad) {
        if (evenParityBad) {
          throw new NotFoundException();
        }
        incrementOdd = true;
      } else {
        if (!evenParityBad) {
          throw new NotFoundException();
        }
        incrementEven = true;
      }
    } else if (mismatch === 0) {
      if (oddParityBad) {
        if (!evenParityBad) {
          throw new NotFoundException();
        }
        if (oddSum < evenSum) {
          incrementOdd = true;
          decrementEven = true;
        } else {
          decrementOdd = true;
          incrementEven = true;
        }
      } else {
        if (evenParityBad) {
          throw new NotFoundException();
        }
      }
    } else {
      throw new NotFoundException();
    }
    if (incrementOdd) {
      if (decrementOdd) {
        throw new NotFoundException();
      }
      AbstractRSSReader.increment(this.getOddCounts(), this.getOddRoundingErrors());
    }
    if (decrementOdd) {
      AbstractRSSReader.decrement(this.getOddCounts(), this.getOddRoundingErrors());
    }
    if (incrementEven) {
      if (decrementEven) {
        throw new NotFoundException();
      }
      AbstractRSSReader.increment(this.getEvenCounts(), this.getOddRoundingErrors());
    }
    if (decrementEven) {
      AbstractRSSReader.decrement(this.getEvenCounts(), this.getEvenRoundingErrors());
    }
  };
  RSS14Reader2.OUTSIDE_EVEN_TOTAL_SUBSET = [1, 10, 34, 70, 126];
  RSS14Reader2.INSIDE_ODD_TOTAL_SUBSET = [4, 20, 48, 81];
  RSS14Reader2.OUTSIDE_GSUM = [0, 161, 961, 2015, 2715];
  RSS14Reader2.INSIDE_GSUM = [0, 336, 1036, 1516];
  RSS14Reader2.OUTSIDE_ODD_WIDEST = [8, 6, 4, 3, 1];
  RSS14Reader2.INSIDE_ODD_WIDEST = [2, 4, 6, 8];
  RSS14Reader2.FINDER_PATTERNS = [
    Int32Array.from([3, 8, 2, 1]),
    Int32Array.from([3, 5, 5, 1]),
    Int32Array.from([3, 3, 7, 1]),
    Int32Array.from([3, 1, 9, 1]),
    Int32Array.from([2, 7, 4, 1]),
    Int32Array.from([2, 5, 6, 1]),
    Int32Array.from([2, 3, 8, 1]),
    Int32Array.from([1, 5, 7, 1]),
    Int32Array.from([1, 3, 9, 1])
  ];
  return RSS14Reader2;
}(AbstractRSSReader);
var __extends$M = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (b2.hasOwnProperty(p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var MultiFormatOneDReader = function(_super) {
  __extends$M(MultiFormatOneDReader2, _super);
  function MultiFormatOneDReader2(hints) {
    var _this = _super.call(this) || this;
    _this.readers = [];
    var possibleFormats = !hints ? null : hints.get(DecodeHintType$1.POSSIBLE_FORMATS);
    var useCode39CheckDigit = hints && hints.get(DecodeHintType$1.ASSUME_CODE_39_CHECK_DIGIT) !== void 0;
    if (possibleFormats) {
      if (possibleFormats.includes(BarcodeFormat$1.EAN_13) || possibleFormats.includes(BarcodeFormat$1.UPC_A) || possibleFormats.includes(BarcodeFormat$1.EAN_8) || possibleFormats.includes(BarcodeFormat$1.UPC_E)) {
        _this.readers.push(new MultiFormatUPCEANReader(hints));
      }
      if (possibleFormats.includes(BarcodeFormat$1.CODE_39)) {
        _this.readers.push(new Code39Reader(useCode39CheckDigit));
      }
      if (possibleFormats.includes(BarcodeFormat$1.CODE_128)) {
        _this.readers.push(new Code128Reader());
      }
      if (possibleFormats.includes(BarcodeFormat$1.ITF)) {
        _this.readers.push(new ITFReader());
      }
      if (possibleFormats.includes(BarcodeFormat$1.RSS_14)) {
        _this.readers.push(new RSS14Reader());
      }
      if (possibleFormats.includes(BarcodeFormat$1.RSS_EXPANDED)) {
        console.warn("RSS Expanded reader IS NOT ready for production yet! use at your own risk.");
        _this.readers.push(new RSSExpandedReader());
      }
    }
    if (_this.readers.length === 0) {
      _this.readers.push(new MultiFormatUPCEANReader(hints));
      _this.readers.push(new Code39Reader());
      _this.readers.push(new MultiFormatUPCEANReader(hints));
      _this.readers.push(new Code128Reader());
      _this.readers.push(new ITFReader());
      _this.readers.push(new RSS14Reader());
    }
    return _this;
  }
  MultiFormatOneDReader2.prototype.decodeRow = function(rowNumber, row, hints) {
    for (var i = 0; i < this.readers.length; i++) {
      try {
        return this.readers[i].decodeRow(rowNumber, row, hints);
      } catch (re) {
      }
    }
    throw new NotFoundException();
  };
  MultiFormatOneDReader2.prototype.reset = function() {
    this.readers.forEach(function(reader) {
      return reader.reset();
    });
  };
  return MultiFormatOneDReader2;
}(OneDReader);
var __extends$N = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (b2.hasOwnProperty(p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var BrowserBarcodeReader = function(_super) {
  __extends$N(BrowserBarcodeReader2, _super);
  function BrowserBarcodeReader2(timeBetweenScansMillis, hints) {
    if (timeBetweenScansMillis === void 0) {
      timeBetweenScansMillis = 500;
    }
    return _super.call(this, new MultiFormatOneDReader(hints), timeBetweenScansMillis, hints) || this;
  }
  return BrowserBarcodeReader2;
}(BrowserCodeReader);
var __values$g = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return {value: o && o[i++], done: !o};
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var ECBlocks = function() {
  function ECBlocks2(ecCodewords, ecBlocks1, ecBlocks2) {
    this.ecCodewords = ecCodewords;
    this.ecBlocks = [ecBlocks1];
    ecBlocks2 && this.ecBlocks.push(ecBlocks2);
  }
  ECBlocks2.prototype.getECCodewords = function() {
    return this.ecCodewords;
  };
  ECBlocks2.prototype.getECBlocks = function() {
    return this.ecBlocks;
  };
  return ECBlocks2;
}();
var ECB = function() {
  function ECB2(count, dataCodewords) {
    this.count = count;
    this.dataCodewords = dataCodewords;
  }
  ECB2.prototype.getCount = function() {
    return this.count;
  };
  ECB2.prototype.getDataCodewords = function() {
    return this.dataCodewords;
  };
  return ECB2;
}();
var Version = function() {
  function Version2(versionNumber, symbolSizeRows, symbolSizeColumns, dataRegionSizeRows, dataRegionSizeColumns, ecBlocks) {
    var e_1, _a;
    this.versionNumber = versionNumber;
    this.symbolSizeRows = symbolSizeRows;
    this.symbolSizeColumns = symbolSizeColumns;
    this.dataRegionSizeRows = dataRegionSizeRows;
    this.dataRegionSizeColumns = dataRegionSizeColumns;
    this.ecBlocks = ecBlocks;
    var total = 0;
    var ecCodewords = ecBlocks.getECCodewords();
    var ecbArray = ecBlocks.getECBlocks();
    try {
      for (var ecbArray_1 = __values$g(ecbArray), ecbArray_1_1 = ecbArray_1.next(); !ecbArray_1_1.done; ecbArray_1_1 = ecbArray_1.next()) {
        var ecBlock = ecbArray_1_1.value;
        total += ecBlock.getCount() * (ecBlock.getDataCodewords() + ecCodewords);
      }
    } catch (e_1_1) {
      e_1 = {error: e_1_1};
    } finally {
      try {
        if (ecbArray_1_1 && !ecbArray_1_1.done && (_a = ecbArray_1.return))
          _a.call(ecbArray_1);
      } finally {
        if (e_1)
          throw e_1.error;
      }
    }
    this.totalCodewords = total;
  }
  Version2.prototype.getVersionNumber = function() {
    return this.versionNumber;
  };
  Version2.prototype.getSymbolSizeRows = function() {
    return this.symbolSizeRows;
  };
  Version2.prototype.getSymbolSizeColumns = function() {
    return this.symbolSizeColumns;
  };
  Version2.prototype.getDataRegionSizeRows = function() {
    return this.dataRegionSizeRows;
  };
  Version2.prototype.getDataRegionSizeColumns = function() {
    return this.dataRegionSizeColumns;
  };
  Version2.prototype.getTotalCodewords = function() {
    return this.totalCodewords;
  };
  Version2.prototype.getECBlocks = function() {
    return this.ecBlocks;
  };
  Version2.getVersionForDimensions = function(numRows, numColumns) {
    var e_2, _a;
    if ((numRows & 1) !== 0 || (numColumns & 1) !== 0) {
      throw new FormatException();
    }
    try {
      for (var _b = __values$g(Version2.VERSIONS), _c = _b.next(); !_c.done; _c = _b.next()) {
        var version = _c.value;
        if (version.symbolSizeRows === numRows && version.symbolSizeColumns === numColumns) {
          return version;
        }
      }
    } catch (e_2_1) {
      e_2 = {error: e_2_1};
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return))
          _a.call(_b);
      } finally {
        if (e_2)
          throw e_2.error;
      }
    }
    throw new FormatException();
  };
  Version2.prototype.toString = function() {
    return "" + this.versionNumber;
  };
  Version2.buildVersions = function() {
    return [
      new Version2(1, 10, 10, 8, 8, new ECBlocks(5, new ECB(1, 3))),
      new Version2(2, 12, 12, 10, 10, new ECBlocks(7, new ECB(1, 5))),
      new Version2(3, 14, 14, 12, 12, new ECBlocks(10, new ECB(1, 8))),
      new Version2(4, 16, 16, 14, 14, new ECBlocks(12, new ECB(1, 12))),
      new Version2(5, 18, 18, 16, 16, new ECBlocks(14, new ECB(1, 18))),
      new Version2(6, 20, 20, 18, 18, new ECBlocks(18, new ECB(1, 22))),
      new Version2(7, 22, 22, 20, 20, new ECBlocks(20, new ECB(1, 30))),
      new Version2(8, 24, 24, 22, 22, new ECBlocks(24, new ECB(1, 36))),
      new Version2(9, 26, 26, 24, 24, new ECBlocks(28, new ECB(1, 44))),
      new Version2(10, 32, 32, 14, 14, new ECBlocks(36, new ECB(1, 62))),
      new Version2(11, 36, 36, 16, 16, new ECBlocks(42, new ECB(1, 86))),
      new Version2(12, 40, 40, 18, 18, new ECBlocks(48, new ECB(1, 114))),
      new Version2(13, 44, 44, 20, 20, new ECBlocks(56, new ECB(1, 144))),
      new Version2(14, 48, 48, 22, 22, new ECBlocks(68, new ECB(1, 174))),
      new Version2(15, 52, 52, 24, 24, new ECBlocks(42, new ECB(2, 102))),
      new Version2(16, 64, 64, 14, 14, new ECBlocks(56, new ECB(2, 140))),
      new Version2(17, 72, 72, 16, 16, new ECBlocks(36, new ECB(4, 92))),
      new Version2(18, 80, 80, 18, 18, new ECBlocks(48, new ECB(4, 114))),
      new Version2(19, 88, 88, 20, 20, new ECBlocks(56, new ECB(4, 144))),
      new Version2(20, 96, 96, 22, 22, new ECBlocks(68, new ECB(4, 174))),
      new Version2(21, 104, 104, 24, 24, new ECBlocks(56, new ECB(6, 136))),
      new Version2(22, 120, 120, 18, 18, new ECBlocks(68, new ECB(6, 175))),
      new Version2(23, 132, 132, 20, 20, new ECBlocks(62, new ECB(8, 163))),
      new Version2(24, 144, 144, 22, 22, new ECBlocks(62, new ECB(8, 156), new ECB(2, 155))),
      new Version2(25, 8, 18, 6, 16, new ECBlocks(7, new ECB(1, 5))),
      new Version2(26, 8, 32, 6, 14, new ECBlocks(11, new ECB(1, 10))),
      new Version2(27, 12, 26, 10, 24, new ECBlocks(14, new ECB(1, 16))),
      new Version2(28, 12, 36, 10, 16, new ECBlocks(18, new ECB(1, 22))),
      new Version2(29, 16, 36, 14, 16, new ECBlocks(24, new ECB(1, 32))),
      new Version2(30, 16, 48, 14, 22, new ECBlocks(28, new ECB(1, 49)))
    ];
  };
  Version2.VERSIONS = Version2.buildVersions();
  return Version2;
}();
var BitMatrixParser = function() {
  function BitMatrixParser2(bitMatrix) {
    var dimension = bitMatrix.getHeight();
    if (dimension < 8 || dimension > 144 || (dimension & 1) !== 0) {
      throw new FormatException();
    }
    this.version = BitMatrixParser2.readVersion(bitMatrix);
    this.mappingBitMatrix = this.extractDataRegion(bitMatrix);
    this.readMappingMatrix = new BitMatrix(this.mappingBitMatrix.getWidth(), this.mappingBitMatrix.getHeight());
  }
  BitMatrixParser2.prototype.getVersion = function() {
    return this.version;
  };
  BitMatrixParser2.readVersion = function(bitMatrix) {
    var numRows = bitMatrix.getHeight();
    var numColumns = bitMatrix.getWidth();
    return Version.getVersionForDimensions(numRows, numColumns);
  };
  BitMatrixParser2.prototype.readCodewords = function() {
    var result = new Int8Array(this.version.getTotalCodewords());
    var resultOffset = 0;
    var row = 4;
    var column = 0;
    var numRows = this.mappingBitMatrix.getHeight();
    var numColumns = this.mappingBitMatrix.getWidth();
    var corner1Read = false;
    var corner2Read = false;
    var corner3Read = false;
    var corner4Read = false;
    do {
      if (row === numRows && column === 0 && !corner1Read) {
        result[resultOffset++] = this.readCorner1(numRows, numColumns) & 255;
        row -= 2;
        column += 2;
        corner1Read = true;
      } else if (row === numRows - 2 && column === 0 && (numColumns & 3) !== 0 && !corner2Read) {
        result[resultOffset++] = this.readCorner2(numRows, numColumns) & 255;
        row -= 2;
        column += 2;
        corner2Read = true;
      } else if (row === numRows + 4 && column === 2 && (numColumns & 7) === 0 && !corner3Read) {
        result[resultOffset++] = this.readCorner3(numRows, numColumns) & 255;
        row -= 2;
        column += 2;
        corner3Read = true;
      } else if (row === numRows - 2 && column === 0 && (numColumns & 7) === 4 && !corner4Read) {
        result[resultOffset++] = this.readCorner4(numRows, numColumns) & 255;
        row -= 2;
        column += 2;
        corner4Read = true;
      } else {
        do {
          if (row < numRows && column >= 0 && !this.readMappingMatrix.get(column, row)) {
            result[resultOffset++] = this.readUtah(row, column, numRows, numColumns) & 255;
          }
          row -= 2;
          column += 2;
        } while (row >= 0 && column < numColumns);
        row += 1;
        column += 3;
        do {
          if (row >= 0 && column < numColumns && !this.readMappingMatrix.get(column, row)) {
            result[resultOffset++] = this.readUtah(row, column, numRows, numColumns) & 255;
          }
          row += 2;
          column -= 2;
        } while (row < numRows && column >= 0);
        row += 3;
        column += 1;
      }
    } while (row < numRows || column < numColumns);
    if (resultOffset !== this.version.getTotalCodewords()) {
      throw new FormatException();
    }
    return result;
  };
  BitMatrixParser2.prototype.readModule = function(row, column, numRows, numColumns) {
    if (row < 0) {
      row += numRows;
      column += 4 - (numRows + 4 & 7);
    }
    if (column < 0) {
      column += numColumns;
      row += 4 - (numColumns + 4 & 7);
    }
    this.readMappingMatrix.set(column, row);
    return this.mappingBitMatrix.get(column, row);
  };
  BitMatrixParser2.prototype.readUtah = function(row, column, numRows, numColumns) {
    var currentByte = 0;
    if (this.readModule(row - 2, column - 2, numRows, numColumns)) {
      currentByte |= 1;
    }
    currentByte <<= 1;
    if (this.readModule(row - 2, column - 1, numRows, numColumns)) {
      currentByte |= 1;
    }
    currentByte <<= 1;
    if (this.readModule(row - 1, column - 2, numRows, numColumns)) {
      currentByte |= 1;
    }
    currentByte <<= 1;
    if (this.readModule(row - 1, column - 1, numRows, numColumns)) {
      currentByte |= 1;
    }
    currentByte <<= 1;
    if (this.readModule(row - 1, column, numRows, numColumns)) {
      currentByte |= 1;
    }
    currentByte <<= 1;
    if (this.readModule(row, column - 2, numRows, numColumns)) {
      currentByte |= 1;
    }
    currentByte <<= 1;
    if (this.readModule(row, column - 1, numRows, numColumns)) {
      currentByte |= 1;
    }
    currentByte <<= 1;
    if (this.readModule(row, column, numRows, numColumns)) {
      currentByte |= 1;
    }
    return currentByte;
  };
  BitMatrixParser2.prototype.readCorner1 = function(numRows, numColumns) {
    var currentByte = 0;
    if (this.readModule(numRows - 1, 0, numRows, numColumns)) {
      currentByte |= 1;
    }
    currentByte <<= 1;
    if (this.readModule(numRows - 1, 1, numRows, numColumns)) {
      currentByte |= 1;
    }
    currentByte <<= 1;
    if (this.readModule(numRows - 1, 2, numRows, numColumns)) {
      currentByte |= 1;
    }
    currentByte <<= 1;
    if (this.readModule(0, numColumns - 2, numRows, numColumns)) {
      currentByte |= 1;
    }
    currentByte <<= 1;
    if (this.readModule(0, numColumns - 1, numRows, numColumns)) {
      currentByte |= 1;
    }
    currentByte <<= 1;
    if (this.readModule(1, numColumns - 1, numRows, numColumns)) {
      currentByte |= 1;
    }
    currentByte <<= 1;
    if (this.readModule(2, numColumns - 1, numRows, numColumns)) {
      currentByte |= 1;
    }
    currentByte <<= 1;
    if (this.readModule(3, numColumns - 1, numRows, numColumns)) {
      currentByte |= 1;
    }
    return currentByte;
  };
  BitMatrixParser2.prototype.readCorner2 = function(numRows, numColumns) {
    var currentByte = 0;
    if (this.readModule(numRows - 3, 0, numRows, numColumns)) {
      currentByte |= 1;
    }
    currentByte <<= 1;
    if (this.readModule(numRows - 2, 0, numRows, numColumns)) {
      currentByte |= 1;
    }
    currentByte <<= 1;
    if (this.readModule(numRows - 1, 0, numRows, numColumns)) {
      currentByte |= 1;
    }
    currentByte <<= 1;
    if (this.readModule(0, numColumns - 4, numRows, numColumns)) {
      currentByte |= 1;
    }
    currentByte <<= 1;
    if (this.readModule(0, numColumns - 3, numRows, numColumns)) {
      currentByte |= 1;
    }
    currentByte <<= 1;
    if (this.readModule(0, numColumns - 2, numRows, numColumns)) {
      currentByte |= 1;
    }
    currentByte <<= 1;
    if (this.readModule(0, numColumns - 1, numRows, numColumns)) {
      currentByte |= 1;
    }
    currentByte <<= 1;
    if (this.readModule(1, numColumns - 1, numRows, numColumns)) {
      currentByte |= 1;
    }
    return currentByte;
  };
  BitMatrixParser2.prototype.readCorner3 = function(numRows, numColumns) {
    var currentByte = 0;
    if (this.readModule(numRows - 1, 0, numRows, numColumns)) {
      currentByte |= 1;
    }
    currentByte <<= 1;
    if (this.readModule(numRows - 1, numColumns - 1, numRows, numColumns)) {
      currentByte |= 1;
    }
    currentByte <<= 1;
    if (this.readModule(0, numColumns - 3, numRows, numColumns)) {
      currentByte |= 1;
    }
    currentByte <<= 1;
    if (this.readModule(0, numColumns - 2, numRows, numColumns)) {
      currentByte |= 1;
    }
    currentByte <<= 1;
    if (this.readModule(0, numColumns - 1, numRows, numColumns)) {
      currentByte |= 1;
    }
    currentByte <<= 1;
    if (this.readModule(1, numColumns - 3, numRows, numColumns)) {
      currentByte |= 1;
    }
    currentByte <<= 1;
    if (this.readModule(1, numColumns - 2, numRows, numColumns)) {
      currentByte |= 1;
    }
    currentByte <<= 1;
    if (this.readModule(1, numColumns - 1, numRows, numColumns)) {
      currentByte |= 1;
    }
    return currentByte;
  };
  BitMatrixParser2.prototype.readCorner4 = function(numRows, numColumns) {
    var currentByte = 0;
    if (this.readModule(numRows - 3, 0, numRows, numColumns)) {
      currentByte |= 1;
    }
    currentByte <<= 1;
    if (this.readModule(numRows - 2, 0, numRows, numColumns)) {
      currentByte |= 1;
    }
    currentByte <<= 1;
    if (this.readModule(numRows - 1, 0, numRows, numColumns)) {
      currentByte |= 1;
    }
    currentByte <<= 1;
    if (this.readModule(0, numColumns - 2, numRows, numColumns)) {
      currentByte |= 1;
    }
    currentByte <<= 1;
    if (this.readModule(0, numColumns - 1, numRows, numColumns)) {
      currentByte |= 1;
    }
    currentByte <<= 1;
    if (this.readModule(1, numColumns - 1, numRows, numColumns)) {
      currentByte |= 1;
    }
    currentByte <<= 1;
    if (this.readModule(2, numColumns - 1, numRows, numColumns)) {
      currentByte |= 1;
    }
    currentByte <<= 1;
    if (this.readModule(3, numColumns - 1, numRows, numColumns)) {
      currentByte |= 1;
    }
    return currentByte;
  };
  BitMatrixParser2.prototype.extractDataRegion = function(bitMatrix) {
    var symbolSizeRows = this.version.getSymbolSizeRows();
    var symbolSizeColumns = this.version.getSymbolSizeColumns();
    if (bitMatrix.getHeight() !== symbolSizeRows) {
      throw new IllegalArgumentException("Dimension of bitMatrix must match the version size");
    }
    var dataRegionSizeRows = this.version.getDataRegionSizeRows();
    var dataRegionSizeColumns = this.version.getDataRegionSizeColumns();
    var numDataRegionsRow = symbolSizeRows / dataRegionSizeRows | 0;
    var numDataRegionsColumn = symbolSizeColumns / dataRegionSizeColumns | 0;
    var sizeDataRegionRow = numDataRegionsRow * dataRegionSizeRows;
    var sizeDataRegionColumn = numDataRegionsColumn * dataRegionSizeColumns;
    var bitMatrixWithoutAlignment = new BitMatrix(sizeDataRegionColumn, sizeDataRegionRow);
    for (var dataRegionRow = 0; dataRegionRow < numDataRegionsRow; ++dataRegionRow) {
      var dataRegionRowOffset = dataRegionRow * dataRegionSizeRows;
      for (var dataRegionColumn = 0; dataRegionColumn < numDataRegionsColumn; ++dataRegionColumn) {
        var dataRegionColumnOffset = dataRegionColumn * dataRegionSizeColumns;
        for (var i = 0; i < dataRegionSizeRows; ++i) {
          var readRowOffset = dataRegionRow * (dataRegionSizeRows + 2) + 1 + i;
          var writeRowOffset = dataRegionRowOffset + i;
          for (var j = 0; j < dataRegionSizeColumns; ++j) {
            var readColumnOffset = dataRegionColumn * (dataRegionSizeColumns + 2) + 1 + j;
            if (bitMatrix.get(readColumnOffset, readRowOffset)) {
              var writeColumnOffset = dataRegionColumnOffset + j;
              bitMatrixWithoutAlignment.set(writeColumnOffset, writeRowOffset);
            }
          }
        }
      }
    }
    return bitMatrixWithoutAlignment;
  };
  return BitMatrixParser2;
}();
var __values$h = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return {value: o && o[i++], done: !o};
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var DataBlock = function() {
  function DataBlock2(numDataCodewords, codewords) {
    this.numDataCodewords = numDataCodewords;
    this.codewords = codewords;
  }
  DataBlock2.getDataBlocks = function(rawCodewords, version) {
    var e_1, _a, e_2, _b;
    var ecBlocks = version.getECBlocks();
    var totalBlocks = 0;
    var ecBlockArray = ecBlocks.getECBlocks();
    try {
      for (var ecBlockArray_1 = __values$h(ecBlockArray), ecBlockArray_1_1 = ecBlockArray_1.next(); !ecBlockArray_1_1.done; ecBlockArray_1_1 = ecBlockArray_1.next()) {
        var ecBlock = ecBlockArray_1_1.value;
        totalBlocks += ecBlock.getCount();
      }
    } catch (e_1_1) {
      e_1 = {error: e_1_1};
    } finally {
      try {
        if (ecBlockArray_1_1 && !ecBlockArray_1_1.done && (_a = ecBlockArray_1.return))
          _a.call(ecBlockArray_1);
      } finally {
        if (e_1)
          throw e_1.error;
      }
    }
    var result = new Array(totalBlocks);
    var numResultBlocks = 0;
    try {
      for (var ecBlockArray_2 = __values$h(ecBlockArray), ecBlockArray_2_1 = ecBlockArray_2.next(); !ecBlockArray_2_1.done; ecBlockArray_2_1 = ecBlockArray_2.next()) {
        var ecBlock = ecBlockArray_2_1.value;
        for (var i = 0; i < ecBlock.getCount(); i++) {
          var numDataCodewords = ecBlock.getDataCodewords();
          var numBlockCodewords = ecBlocks.getECCodewords() + numDataCodewords;
          result[numResultBlocks++] = new DataBlock2(numDataCodewords, new Uint8Array(numBlockCodewords));
        }
      }
    } catch (e_2_1) {
      e_2 = {error: e_2_1};
    } finally {
      try {
        if (ecBlockArray_2_1 && !ecBlockArray_2_1.done && (_b = ecBlockArray_2.return))
          _b.call(ecBlockArray_2);
      } finally {
        if (e_2)
          throw e_2.error;
      }
    }
    var longerBlocksTotalCodewords = result[0].codewords.length;
    var longerBlocksNumDataCodewords = longerBlocksTotalCodewords - ecBlocks.getECCodewords();
    var shorterBlocksNumDataCodewords = longerBlocksNumDataCodewords - 1;
    var rawCodewordsOffset = 0;
    for (var i = 0; i < shorterBlocksNumDataCodewords; i++) {
      for (var j = 0; j < numResultBlocks; j++) {
        result[j].codewords[i] = rawCodewords[rawCodewordsOffset++];
      }
    }
    var specialVersion = version.getVersionNumber() === 24;
    var numLongerBlocks = specialVersion ? 8 : numResultBlocks;
    for (var j = 0; j < numLongerBlocks; j++) {
      result[j].codewords[longerBlocksNumDataCodewords - 1] = rawCodewords[rawCodewordsOffset++];
    }
    var max = result[0].codewords.length;
    for (var i = longerBlocksNumDataCodewords; i < max; i++) {
      for (var j = 0; j < numResultBlocks; j++) {
        var jOffset = specialVersion ? (j + 8) % numResultBlocks : j;
        var iOffset = specialVersion && jOffset > 7 ? i - 1 : i;
        result[jOffset].codewords[iOffset] = rawCodewords[rawCodewordsOffset++];
      }
    }
    if (rawCodewordsOffset !== rawCodewords.length) {
      throw new IllegalArgumentException();
    }
    return result;
  };
  DataBlock2.prototype.getNumDataCodewords = function() {
    return this.numDataCodewords;
  };
  DataBlock2.prototype.getCodewords = function() {
    return this.codewords;
  };
  return DataBlock2;
}();
var BitSource = function() {
  function BitSource2(bytes) {
    this.bytes = bytes;
    this.byteOffset = 0;
    this.bitOffset = 0;
  }
  BitSource2.prototype.getBitOffset = function() {
    return this.bitOffset;
  };
  BitSource2.prototype.getByteOffset = function() {
    return this.byteOffset;
  };
  BitSource2.prototype.readBits = function(numBits) {
    if (numBits < 1 || numBits > 32 || numBits > this.available()) {
      throw new IllegalArgumentException("" + numBits);
    }
    var result = 0;
    var bitOffset = this.bitOffset;
    var byteOffset = this.byteOffset;
    var bytes = this.bytes;
    if (bitOffset > 0) {
      var bitsLeft = 8 - bitOffset;
      var toRead = numBits < bitsLeft ? numBits : bitsLeft;
      var bitsToNotRead = bitsLeft - toRead;
      var mask = 255 >> 8 - toRead << bitsToNotRead;
      result = (bytes[byteOffset] & mask) >> bitsToNotRead;
      numBits -= toRead;
      bitOffset += toRead;
      if (bitOffset === 8) {
        bitOffset = 0;
        byteOffset++;
      }
    }
    if (numBits > 0) {
      while (numBits >= 8) {
        result = result << 8 | bytes[byteOffset] & 255;
        byteOffset++;
        numBits -= 8;
      }
      if (numBits > 0) {
        var bitsToNotRead = 8 - numBits;
        var mask = 255 >> bitsToNotRead << bitsToNotRead;
        result = result << numBits | (bytes[byteOffset] & mask) >> bitsToNotRead;
        bitOffset += numBits;
      }
    }
    this.bitOffset = bitOffset;
    this.byteOffset = byteOffset;
    return result;
  };
  BitSource2.prototype.available = function() {
    return 8 * (this.bytes.length - this.byteOffset) - this.bitOffset;
  };
  return BitSource2;
}();
var Mode;
(function(Mode2) {
  Mode2[Mode2["PAD_ENCODE"] = 0] = "PAD_ENCODE";
  Mode2[Mode2["ASCII_ENCODE"] = 1] = "ASCII_ENCODE";
  Mode2[Mode2["C40_ENCODE"] = 2] = "C40_ENCODE";
  Mode2[Mode2["TEXT_ENCODE"] = 3] = "TEXT_ENCODE";
  Mode2[Mode2["ANSIX12_ENCODE"] = 4] = "ANSIX12_ENCODE";
  Mode2[Mode2["EDIFACT_ENCODE"] = 5] = "EDIFACT_ENCODE";
  Mode2[Mode2["BASE256_ENCODE"] = 6] = "BASE256_ENCODE";
})(Mode || (Mode = {}));
var DecodedBitStreamParser = function() {
  function DecodedBitStreamParser2() {
  }
  DecodedBitStreamParser2.decode = function(bytes) {
    var bits = new BitSource(bytes);
    var result = new StringBuilder();
    var resultTrailer = new StringBuilder();
    var byteSegments = new Array();
    var mode = Mode.ASCII_ENCODE;
    do {
      if (mode === Mode.ASCII_ENCODE) {
        mode = this.decodeAsciiSegment(bits, result, resultTrailer);
      } else {
        switch (mode) {
          case Mode.C40_ENCODE:
            this.decodeC40Segment(bits, result);
            break;
          case Mode.TEXT_ENCODE:
            this.decodeTextSegment(bits, result);
            break;
          case Mode.ANSIX12_ENCODE:
            this.decodeAnsiX12Segment(bits, result);
            break;
          case Mode.EDIFACT_ENCODE:
            this.decodeEdifactSegment(bits, result);
            break;
          case Mode.BASE256_ENCODE:
            this.decodeBase256Segment(bits, result, byteSegments);
            break;
          default:
            throw new FormatException();
        }
        mode = Mode.ASCII_ENCODE;
      }
    } while (mode !== Mode.PAD_ENCODE && bits.available() > 0);
    if (resultTrailer.length() > 0) {
      result.append(resultTrailer.toString());
    }
    return new DecoderResult(bytes, result.toString(), byteSegments.length === 0 ? null : byteSegments, null);
  };
  DecodedBitStreamParser2.decodeAsciiSegment = function(bits, result, resultTrailer) {
    var upperShift = false;
    do {
      var oneByte = bits.readBits(8);
      if (oneByte === 0) {
        throw new FormatException();
      } else if (oneByte <= 128) {
        if (upperShift) {
          oneByte += 128;
        }
        result.append(String.fromCharCode(oneByte - 1));
        return Mode.ASCII_ENCODE;
      } else if (oneByte === 129) {
        return Mode.PAD_ENCODE;
      } else if (oneByte <= 229) {
        var value = oneByte - 130;
        if (value < 10) {
          result.append("0");
        }
        result.append("" + value);
      } else {
        switch (oneByte) {
          case 230:
            return Mode.C40_ENCODE;
          case 231:
            return Mode.BASE256_ENCODE;
          case 232:
            result.append(String.fromCharCode(29));
            break;
          case 233:
          case 234:
            break;
          case 235:
            upperShift = true;
            break;
          case 236:
            result.append("[)>05");
            resultTrailer.insert(0, "");
            break;
          case 237:
            result.append("[)>06");
            resultTrailer.insert(0, "");
            break;
          case 238:
            return Mode.ANSIX12_ENCODE;
          case 239:
            return Mode.TEXT_ENCODE;
          case 240:
            return Mode.EDIFACT_ENCODE;
          case 241:
            break;
          default:
            if (oneByte !== 254 || bits.available() !== 0) {
              throw new FormatException();
            }
            break;
        }
      }
    } while (bits.available() > 0);
    return Mode.ASCII_ENCODE;
  };
  DecodedBitStreamParser2.decodeC40Segment = function(bits, result) {
    var upperShift = false;
    var cValues = [];
    var shift = 0;
    do {
      if (bits.available() === 8) {
        return;
      }
      var firstByte = bits.readBits(8);
      if (firstByte === 254) {
        return;
      }
      this.parseTwoBytes(firstByte, bits.readBits(8), cValues);
      for (var i = 0; i < 3; i++) {
        var cValue = cValues[i];
        switch (shift) {
          case 0:
            if (cValue < 3) {
              shift = cValue + 1;
            } else if (cValue < this.C40_BASIC_SET_CHARS.length) {
              var c40char = this.C40_BASIC_SET_CHARS[cValue];
              if (upperShift) {
                result.append(String.fromCharCode(c40char.charCodeAt(0) + 128));
                upperShift = false;
              } else {
                result.append(c40char);
              }
            } else {
              throw new FormatException();
            }
            break;
          case 1:
            if (upperShift) {
              result.append(String.fromCharCode(cValue + 128));
              upperShift = false;
            } else {
              result.append(String.fromCharCode(cValue));
            }
            shift = 0;
            break;
          case 2:
            if (cValue < this.C40_SHIFT2_SET_CHARS.length) {
              var c40char = this.C40_SHIFT2_SET_CHARS[cValue];
              if (upperShift) {
                result.append(String.fromCharCode(c40char.charCodeAt(0) + 128));
                upperShift = false;
              } else {
                result.append(c40char);
              }
            } else {
              switch (cValue) {
                case 27:
                  result.append(String.fromCharCode(29));
                  break;
                case 30:
                  upperShift = true;
                  break;
                default:
                  throw new FormatException();
              }
            }
            shift = 0;
            break;
          case 3:
            if (upperShift) {
              result.append(String.fromCharCode(cValue + 224));
              upperShift = false;
            } else {
              result.append(String.fromCharCode(cValue + 96));
            }
            shift = 0;
            break;
          default:
            throw new FormatException();
        }
      }
    } while (bits.available() > 0);
  };
  DecodedBitStreamParser2.decodeTextSegment = function(bits, result) {
    var upperShift = false;
    var cValues = [];
    var shift = 0;
    do {
      if (bits.available() === 8) {
        return;
      }
      var firstByte = bits.readBits(8);
      if (firstByte === 254) {
        return;
      }
      this.parseTwoBytes(firstByte, bits.readBits(8), cValues);
      for (var i = 0; i < 3; i++) {
        var cValue = cValues[i];
        switch (shift) {
          case 0:
            if (cValue < 3) {
              shift = cValue + 1;
            } else if (cValue < this.TEXT_BASIC_SET_CHARS.length) {
              var textChar = this.TEXT_BASIC_SET_CHARS[cValue];
              if (upperShift) {
                result.append(String.fromCharCode(textChar.charCodeAt(0) + 128));
                upperShift = false;
              } else {
                result.append(textChar);
              }
            } else {
              throw new FormatException();
            }
            break;
          case 1:
            if (upperShift) {
              result.append(String.fromCharCode(cValue + 128));
              upperShift = false;
            } else {
              result.append(String.fromCharCode(cValue));
            }
            shift = 0;
            break;
          case 2:
            if (cValue < this.TEXT_SHIFT2_SET_CHARS.length) {
              var textChar = this.TEXT_SHIFT2_SET_CHARS[cValue];
              if (upperShift) {
                result.append(String.fromCharCode(textChar.charCodeAt(0) + 128));
                upperShift = false;
              } else {
                result.append(textChar);
              }
            } else {
              switch (cValue) {
                case 27:
                  result.append(String.fromCharCode(29));
                  break;
                case 30:
                  upperShift = true;
                  break;
                default:
                  throw new FormatException();
              }
            }
            shift = 0;
            break;
          case 3:
            if (cValue < this.TEXT_SHIFT3_SET_CHARS.length) {
              var textChar = this.TEXT_SHIFT3_SET_CHARS[cValue];
              if (upperShift) {
                result.append(String.fromCharCode(textChar.charCodeAt(0) + 128));
                upperShift = false;
              } else {
                result.append(textChar);
              }
              shift = 0;
            } else {
              throw new FormatException();
            }
            break;
          default:
            throw new FormatException();
        }
      }
    } while (bits.available() > 0);
  };
  DecodedBitStreamParser2.decodeAnsiX12Segment = function(bits, result) {
    var cValues = [];
    do {
      if (bits.available() === 8) {
        return;
      }
      var firstByte = bits.readBits(8);
      if (firstByte === 254) {
        return;
      }
      this.parseTwoBytes(firstByte, bits.readBits(8), cValues);
      for (var i = 0; i < 3; i++) {
        var cValue = cValues[i];
        switch (cValue) {
          case 0:
            result.append("\r");
            break;
          case 1:
            result.append("*");
            break;
          case 2:
            result.append(">");
            break;
          case 3:
            result.append(" ");
            break;
          default:
            if (cValue < 14) {
              result.append(String.fromCharCode(cValue + 44));
            } else if (cValue < 40) {
              result.append(String.fromCharCode(cValue + 51));
            } else {
              throw new FormatException();
            }
            break;
        }
      }
    } while (bits.available() > 0);
  };
  DecodedBitStreamParser2.parseTwoBytes = function(firstByte, secondByte, result) {
    var fullBitValue = (firstByte << 8) + secondByte - 1;
    var temp = Math.floor(fullBitValue / 1600);
    result[0] = temp;
    fullBitValue -= temp * 1600;
    temp = Math.floor(fullBitValue / 40);
    result[1] = temp;
    result[2] = fullBitValue - temp * 40;
  };
  DecodedBitStreamParser2.decodeEdifactSegment = function(bits, result) {
    do {
      if (bits.available() <= 16) {
        return;
      }
      for (var i = 0; i < 4; i++) {
        var edifactValue = bits.readBits(6);
        if (edifactValue === 31) {
          var bitsLeft = 8 - bits.getBitOffset();
          if (bitsLeft !== 8) {
            bits.readBits(bitsLeft);
          }
          return;
        }
        if ((edifactValue & 32) === 0) {
          edifactValue |= 64;
        }
        result.append(String.fromCharCode(edifactValue));
      }
    } while (bits.available() > 0);
  };
  DecodedBitStreamParser2.decodeBase256Segment = function(bits, result, byteSegments) {
    var codewordPosition = 1 + bits.getByteOffset();
    var d1 = this.unrandomize255State(bits.readBits(8), codewordPosition++);
    var count;
    if (d1 === 0) {
      count = bits.available() / 8 | 0;
    } else if (d1 < 250) {
      count = d1;
    } else {
      count = 250 * (d1 - 249) + this.unrandomize255State(bits.readBits(8), codewordPosition++);
    }
    if (count < 0) {
      throw new FormatException();
    }
    var bytes = new Uint8Array(count);
    for (var i = 0; i < count; i++) {
      if (bits.available() < 8) {
        throw new FormatException();
      }
      bytes[i] = this.unrandomize255State(bits.readBits(8), codewordPosition++);
    }
    byteSegments.push(bytes);
    try {
      result.append(StringEncoding.decode(bytes, StringUtils.ISO88591));
    } catch (uee) {
      throw new IllegalStateException("Platform does not support required encoding: " + uee.message);
    }
  };
  DecodedBitStreamParser2.unrandomize255State = function(randomizedBase256Codeword, base256CodewordPosition) {
    var pseudoRandomNumber = 149 * base256CodewordPosition % 255 + 1;
    var tempVariable = randomizedBase256Codeword - pseudoRandomNumber;
    return tempVariable >= 0 ? tempVariable : tempVariable + 256;
  };
  DecodedBitStreamParser2.C40_BASIC_SET_CHARS = [
    "*",
    "*",
    "*",
    " ",
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
    "Z"
  ];
  DecodedBitStreamParser2.C40_SHIFT2_SET_CHARS = [
    "!",
    '"',
    "#",
    "$",
    "%",
    "&",
    "'",
    "(",
    ")",
    "*",
    "+",
    ",",
    "-",
    ".",
    "/",
    ":",
    ";",
    "<",
    "=",
    ">",
    "?",
    "@",
    "[",
    "\\",
    "]",
    "^",
    "_"
  ];
  DecodedBitStreamParser2.TEXT_BASIC_SET_CHARS = [
    "*",
    "*",
    "*",
    " ",
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
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
  DecodedBitStreamParser2.TEXT_SHIFT2_SET_CHARS = DecodedBitStreamParser2.C40_SHIFT2_SET_CHARS;
  DecodedBitStreamParser2.TEXT_SHIFT3_SET_CHARS = [
    "`",
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
    "{",
    "|",
    "}",
    "~",
    String.fromCharCode(127)
  ];
  return DecodedBitStreamParser2;
}();
var __values$i = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return {value: o && o[i++], done: !o};
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var Decoder$1 = function() {
  function Decoder2() {
    this.rsDecoder = new ReedSolomonDecoder(GenericGF.DATA_MATRIX_FIELD_256);
  }
  Decoder2.prototype.decode = function(bits) {
    var e_1, _a;
    var parser = new BitMatrixParser(bits);
    var version = parser.getVersion();
    var codewords = parser.readCodewords();
    var dataBlocks = DataBlock.getDataBlocks(codewords, version);
    var totalBytes = 0;
    try {
      for (var dataBlocks_1 = __values$i(dataBlocks), dataBlocks_1_1 = dataBlocks_1.next(); !dataBlocks_1_1.done; dataBlocks_1_1 = dataBlocks_1.next()) {
        var db = dataBlocks_1_1.value;
        totalBytes += db.getNumDataCodewords();
      }
    } catch (e_1_1) {
      e_1 = {error: e_1_1};
    } finally {
      try {
        if (dataBlocks_1_1 && !dataBlocks_1_1.done && (_a = dataBlocks_1.return))
          _a.call(dataBlocks_1);
      } finally {
        if (e_1)
          throw e_1.error;
      }
    }
    var resultBytes = new Uint8Array(totalBytes);
    var dataBlocksCount = dataBlocks.length;
    for (var j = 0; j < dataBlocksCount; j++) {
      var dataBlock = dataBlocks[j];
      var codewordBytes = dataBlock.getCodewords();
      var numDataCodewords = dataBlock.getNumDataCodewords();
      this.correctErrors(codewordBytes, numDataCodewords);
      for (var i = 0; i < numDataCodewords; i++) {
        resultBytes[i * dataBlocksCount + j] = codewordBytes[i];
      }
    }
    return DecodedBitStreamParser.decode(resultBytes);
  };
  Decoder2.prototype.correctErrors = function(codewordBytes, numDataCodewords) {
    var codewordsInts = new Int32Array(codewordBytes);
    try {
      this.rsDecoder.decode(codewordsInts, codewordBytes.length - numDataCodewords);
    } catch (ignored) {
      throw new ChecksumException();
    }
    for (var i = 0; i < numDataCodewords; i++) {
      codewordBytes[i] = codewordsInts[i];
    }
  };
  return Decoder2;
}();
var Detector$1 = function() {
  function Detector2(image) {
    this.image = image;
    this.rectangleDetector = new WhiteRectangleDetector(this.image);
  }
  Detector2.prototype.detect = function() {
    var cornerPoints = this.rectangleDetector.detect();
    var points = this.detectSolid1(cornerPoints);
    points = this.detectSolid2(points);
    points[3] = this.correctTopRight(points);
    if (!points[3]) {
      throw new NotFoundException();
    }
    points = this.shiftToModuleCenter(points);
    var topLeft = points[0];
    var bottomLeft = points[1];
    var bottomRight = points[2];
    var topRight = points[3];
    var dimensionTop = this.transitionsBetween(topLeft, topRight) + 1;
    var dimensionRight = this.transitionsBetween(bottomRight, topRight) + 1;
    if ((dimensionTop & 1) === 1) {
      dimensionTop += 1;
    }
    if ((dimensionRight & 1) === 1) {
      dimensionRight += 1;
    }
    if (4 * dimensionTop < 7 * dimensionRight && 4 * dimensionRight < 7 * dimensionTop) {
      dimensionTop = dimensionRight = Math.max(dimensionTop, dimensionRight);
    }
    var bits = Detector2.sampleGrid(this.image, topLeft, bottomLeft, bottomRight, topRight, dimensionTop, dimensionRight);
    return new DetectorResult(bits, [topLeft, bottomLeft, bottomRight, topRight]);
  };
  Detector2.shiftPoint = function(point, to, div) {
    var x = (to.getX() - point.getX()) / (div + 1);
    var y = (to.getY() - point.getY()) / (div + 1);
    return new ResultPoint(point.getX() + x, point.getY() + y);
  };
  Detector2.moveAway = function(point, fromX, fromY) {
    var x = point.getX();
    var y = point.getY();
    if (x < fromX) {
      x -= 1;
    } else {
      x += 1;
    }
    if (y < fromY) {
      y -= 1;
    } else {
      y += 1;
    }
    return new ResultPoint(x, y);
  };
  Detector2.prototype.detectSolid1 = function(cornerPoints) {
    var pointA = cornerPoints[0];
    var pointB = cornerPoints[1];
    var pointC = cornerPoints[3];
    var pointD = cornerPoints[2];
    var trAB = this.transitionsBetween(pointA, pointB);
    var trBC = this.transitionsBetween(pointB, pointC);
    var trCD = this.transitionsBetween(pointC, pointD);
    var trDA = this.transitionsBetween(pointD, pointA);
    var min = trAB;
    var points = [pointD, pointA, pointB, pointC];
    if (min > trBC) {
      min = trBC;
      points[0] = pointA;
      points[1] = pointB;
      points[2] = pointC;
      points[3] = pointD;
    }
    if (min > trCD) {
      min = trCD;
      points[0] = pointB;
      points[1] = pointC;
      points[2] = pointD;
      points[3] = pointA;
    }
    if (min > trDA) {
      points[0] = pointC;
      points[1] = pointD;
      points[2] = pointA;
      points[3] = pointB;
    }
    return points;
  };
  Detector2.prototype.detectSolid2 = function(points) {
    var pointA = points[0];
    var pointB = points[1];
    var pointC = points[2];
    var pointD = points[3];
    var tr = this.transitionsBetween(pointA, pointD);
    var pointBs = Detector2.shiftPoint(pointB, pointC, (tr + 1) * 4);
    var pointCs = Detector2.shiftPoint(pointC, pointB, (tr + 1) * 4);
    var trBA = this.transitionsBetween(pointBs, pointA);
    var trCD = this.transitionsBetween(pointCs, pointD);
    if (trBA < trCD) {
      points[0] = pointA;
      points[1] = pointB;
      points[2] = pointC;
      points[3] = pointD;
    } else {
      points[0] = pointB;
      points[1] = pointC;
      points[2] = pointD;
      points[3] = pointA;
    }
    return points;
  };
  Detector2.prototype.correctTopRight = function(points) {
    var pointA = points[0];
    var pointB = points[1];
    var pointC = points[2];
    var pointD = points[3];
    var trTop = this.transitionsBetween(pointA, pointD);
    var trRight = this.transitionsBetween(pointB, pointD);
    var pointAs = Detector2.shiftPoint(pointA, pointB, (trRight + 1) * 4);
    var pointCs = Detector2.shiftPoint(pointC, pointB, (trTop + 1) * 4);
    trTop = this.transitionsBetween(pointAs, pointD);
    trRight = this.transitionsBetween(pointCs, pointD);
    var candidate1 = new ResultPoint(pointD.getX() + (pointC.getX() - pointB.getX()) / (trTop + 1), pointD.getY() + (pointC.getY() - pointB.getY()) / (trTop + 1));
    var candidate2 = new ResultPoint(pointD.getX() + (pointA.getX() - pointB.getX()) / (trRight + 1), pointD.getY() + (pointA.getY() - pointB.getY()) / (trRight + 1));
    if (!this.isValid(candidate1)) {
      if (this.isValid(candidate2)) {
        return candidate2;
      }
      return null;
    }
    if (!this.isValid(candidate2)) {
      return candidate1;
    }
    var sumc1 = this.transitionsBetween(pointAs, candidate1) + this.transitionsBetween(pointCs, candidate1);
    var sumc2 = this.transitionsBetween(pointAs, candidate2) + this.transitionsBetween(pointCs, candidate2);
    if (sumc1 > sumc2) {
      return candidate1;
    } else {
      return candidate2;
    }
  };
  Detector2.prototype.shiftToModuleCenter = function(points) {
    var pointA = points[0];
    var pointB = points[1];
    var pointC = points[2];
    var pointD = points[3];
    var dimH = this.transitionsBetween(pointA, pointD) + 1;
    var dimV = this.transitionsBetween(pointC, pointD) + 1;
    var pointAs = Detector2.shiftPoint(pointA, pointB, dimV * 4);
    var pointCs = Detector2.shiftPoint(pointC, pointB, dimH * 4);
    dimH = this.transitionsBetween(pointAs, pointD) + 1;
    dimV = this.transitionsBetween(pointCs, pointD) + 1;
    if ((dimH & 1) === 1) {
      dimH += 1;
    }
    if ((dimV & 1) === 1) {
      dimV += 1;
    }
    var centerX = (pointA.getX() + pointB.getX() + pointC.getX() + pointD.getX()) / 4;
    var centerY = (pointA.getY() + pointB.getY() + pointC.getY() + pointD.getY()) / 4;
    pointA = Detector2.moveAway(pointA, centerX, centerY);
    pointB = Detector2.moveAway(pointB, centerX, centerY);
    pointC = Detector2.moveAway(pointC, centerX, centerY);
    pointD = Detector2.moveAway(pointD, centerX, centerY);
    var pointBs;
    var pointDs;
    pointAs = Detector2.shiftPoint(pointA, pointB, dimV * 4);
    pointAs = Detector2.shiftPoint(pointAs, pointD, dimH * 4);
    pointBs = Detector2.shiftPoint(pointB, pointA, dimV * 4);
    pointBs = Detector2.shiftPoint(pointBs, pointC, dimH * 4);
    pointCs = Detector2.shiftPoint(pointC, pointD, dimV * 4);
    pointCs = Detector2.shiftPoint(pointCs, pointB, dimH * 4);
    pointDs = Detector2.shiftPoint(pointD, pointC, dimV * 4);
    pointDs = Detector2.shiftPoint(pointDs, pointA, dimH * 4);
    return [pointAs, pointBs, pointCs, pointDs];
  };
  Detector2.prototype.isValid = function(p) {
    return p.getX() >= 0 && p.getX() < this.image.getWidth() && p.getY() > 0 && p.getY() < this.image.getHeight();
  };
  Detector2.sampleGrid = function(image, topLeft, bottomLeft, bottomRight, topRight, dimensionX, dimensionY) {
    var sampler = GridSamplerInstance.getInstance();
    return sampler.sampleGrid(image, dimensionX, dimensionY, 0.5, 0.5, dimensionX - 0.5, 0.5, dimensionX - 0.5, dimensionY - 0.5, 0.5, dimensionY - 0.5, topLeft.getX(), topLeft.getY(), topRight.getX(), topRight.getY(), bottomRight.getX(), bottomRight.getY(), bottomLeft.getX(), bottomLeft.getY());
  };
  Detector2.prototype.transitionsBetween = function(from, to) {
    var fromX = Math.trunc(from.getX());
    var fromY = Math.trunc(from.getY());
    var toX = Math.trunc(to.getX());
    var toY = Math.trunc(to.getY());
    var steep = Math.abs(toY - fromY) > Math.abs(toX - fromX);
    if (steep) {
      var temp = fromX;
      fromX = fromY;
      fromY = temp;
      temp = toX;
      toX = toY;
      toY = temp;
    }
    var dx = Math.abs(toX - fromX);
    var dy = Math.abs(toY - fromY);
    var error = -dx / 2;
    var ystep = fromY < toY ? 1 : -1;
    var xstep = fromX < toX ? 1 : -1;
    var transitions = 0;
    var inBlack = this.image.get(steep ? fromY : fromX, steep ? fromX : fromY);
    for (var x = fromX, y = fromY; x !== toX; x += xstep) {
      var isBlack = this.image.get(steep ? y : x, steep ? x : y);
      if (isBlack !== inBlack) {
        transitions++;
        inBlack = isBlack;
      }
      error += dy;
      if (error > 0) {
        if (y === toY) {
          break;
        }
        y += ystep;
        error -= dx;
      }
    }
    return transitions;
  };
  return Detector2;
}();
var DataMatrixReader = function() {
  function DataMatrixReader2() {
    this.decoder = new Decoder$1();
  }
  DataMatrixReader2.prototype.decode = function(image, hints) {
    if (hints === void 0) {
      hints = null;
    }
    var decoderResult;
    var points;
    if (hints != null && hints.has(DecodeHintType$1.PURE_BARCODE)) {
      var bits = DataMatrixReader2.extractPureBits(image.getBlackMatrix());
      decoderResult = this.decoder.decode(bits);
      points = DataMatrixReader2.NO_POINTS;
    } else {
      var detectorResult = new Detector$1(image.getBlackMatrix()).detect();
      decoderResult = this.decoder.decode(detectorResult.getBits());
      points = detectorResult.getPoints();
    }
    var rawBytes = decoderResult.getRawBytes();
    var result = new Result(decoderResult.getText(), rawBytes, 8 * rawBytes.length, points, BarcodeFormat$1.DATA_MATRIX, System.currentTimeMillis());
    var byteSegments = decoderResult.getByteSegments();
    if (byteSegments != null) {
      result.putMetadata(ResultMetadataType$1.BYTE_SEGMENTS, byteSegments);
    }
    var ecLevel = decoderResult.getECLevel();
    if (ecLevel != null) {
      result.putMetadata(ResultMetadataType$1.ERROR_CORRECTION_LEVEL, ecLevel);
    }
    return result;
  };
  DataMatrixReader2.prototype.reset = function() {
  };
  DataMatrixReader2.extractPureBits = function(image) {
    var leftTopBlack = image.getTopLeftOnBit();
    var rightBottomBlack = image.getBottomRightOnBit();
    if (leftTopBlack == null || rightBottomBlack == null) {
      throw new NotFoundException();
    }
    var moduleSize = this.moduleSize(leftTopBlack, image);
    var top = leftTopBlack[1];
    var bottom = rightBottomBlack[1];
    var left = leftTopBlack[0];
    var right = rightBottomBlack[0];
    var matrixWidth = (right - left + 1) / moduleSize;
    var matrixHeight = (bottom - top + 1) / moduleSize;
    if (matrixWidth <= 0 || matrixHeight <= 0) {
      throw new NotFoundException();
    }
    var nudge = moduleSize / 2;
    top += nudge;
    left += nudge;
    var bits = new BitMatrix(matrixWidth, matrixHeight);
    for (var y = 0; y < matrixHeight; y++) {
      var iOffset = top + y * moduleSize;
      for (var x = 0; x < matrixWidth; x++) {
        if (image.get(left + x * moduleSize, iOffset)) {
          bits.set(x, y);
        }
      }
    }
    return bits;
  };
  DataMatrixReader2.moduleSize = function(leftTopBlack, image) {
    var width = image.getWidth();
    var x = leftTopBlack[0];
    var y = leftTopBlack[1];
    while (x < width && image.get(x, y)) {
      x++;
    }
    if (x === width) {
      throw new NotFoundException();
    }
    var moduleSize = x - leftTopBlack[0];
    if (moduleSize === 0) {
      throw new NotFoundException();
    }
    return moduleSize;
  };
  DataMatrixReader2.NO_POINTS = [];
  return DataMatrixReader2;
}();
var __extends$O = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (b2.hasOwnProperty(p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var BrowserDatamatrixCodeReader = function(_super) {
  __extends$O(BrowserDatamatrixCodeReader2, _super);
  function BrowserDatamatrixCodeReader2(timeBetweenScansMillis) {
    if (timeBetweenScansMillis === void 0) {
      timeBetweenScansMillis = 500;
    }
    return _super.call(this, new DataMatrixReader(), timeBetweenScansMillis) || this;
  }
  return BrowserDatamatrixCodeReader2;
}(BrowserCodeReader);
var ErrorCorrectionLevelValues;
(function(ErrorCorrectionLevelValues2) {
  ErrorCorrectionLevelValues2[ErrorCorrectionLevelValues2["L"] = 0] = "L";
  ErrorCorrectionLevelValues2[ErrorCorrectionLevelValues2["M"] = 1] = "M";
  ErrorCorrectionLevelValues2[ErrorCorrectionLevelValues2["Q"] = 2] = "Q";
  ErrorCorrectionLevelValues2[ErrorCorrectionLevelValues2["H"] = 3] = "H";
})(ErrorCorrectionLevelValues || (ErrorCorrectionLevelValues = {}));
var ErrorCorrectionLevel = function() {
  function ErrorCorrectionLevel2(value, stringValue, bits) {
    this.value = value;
    this.stringValue = stringValue;
    this.bits = bits;
    ErrorCorrectionLevel2.FOR_BITS.set(bits, this);
    ErrorCorrectionLevel2.FOR_VALUE.set(value, this);
  }
  ErrorCorrectionLevel2.prototype.getValue = function() {
    return this.value;
  };
  ErrorCorrectionLevel2.prototype.getBits = function() {
    return this.bits;
  };
  ErrorCorrectionLevel2.fromString = function(s) {
    switch (s) {
      case "L":
        return ErrorCorrectionLevel2.L;
      case "M":
        return ErrorCorrectionLevel2.M;
      case "Q":
        return ErrorCorrectionLevel2.Q;
      case "H":
        return ErrorCorrectionLevel2.H;
      default:
        throw new ArgumentException(s + "not available");
    }
  };
  ErrorCorrectionLevel2.prototype.toString = function() {
    return this.stringValue;
  };
  ErrorCorrectionLevel2.prototype.equals = function(o) {
    if (!(o instanceof ErrorCorrectionLevel2)) {
      return false;
    }
    var other = o;
    return this.value === other.value;
  };
  ErrorCorrectionLevel2.forBits = function(bits) {
    if (bits < 0 || bits >= ErrorCorrectionLevel2.FOR_BITS.size) {
      throw new IllegalArgumentException();
    }
    return ErrorCorrectionLevel2.FOR_BITS.get(bits);
  };
  ErrorCorrectionLevel2.FOR_BITS = new Map();
  ErrorCorrectionLevel2.FOR_VALUE = new Map();
  ErrorCorrectionLevel2.L = new ErrorCorrectionLevel2(ErrorCorrectionLevelValues.L, "L", 1);
  ErrorCorrectionLevel2.M = new ErrorCorrectionLevel2(ErrorCorrectionLevelValues.M, "M", 0);
  ErrorCorrectionLevel2.Q = new ErrorCorrectionLevel2(ErrorCorrectionLevelValues.Q, "Q", 3);
  ErrorCorrectionLevel2.H = new ErrorCorrectionLevel2(ErrorCorrectionLevelValues.H, "H", 2);
  return ErrorCorrectionLevel2;
}();
var __values$j = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return {value: o && o[i++], done: !o};
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var FormatInformation = function() {
  function FormatInformation2(formatInfo) {
    this.errorCorrectionLevel = ErrorCorrectionLevel.forBits(formatInfo >> 3 & 3);
    this.dataMask = formatInfo & 7;
  }
  FormatInformation2.numBitsDiffering = function(a, b) {
    return Integer.bitCount(a ^ b);
  };
  FormatInformation2.decodeFormatInformation = function(maskedFormatInfo1, maskedFormatInfo2) {
    var formatInfo = FormatInformation2.doDecodeFormatInformation(maskedFormatInfo1, maskedFormatInfo2);
    if (formatInfo !== null) {
      return formatInfo;
    }
    return FormatInformation2.doDecodeFormatInformation(maskedFormatInfo1 ^ FormatInformation2.FORMAT_INFO_MASK_QR, maskedFormatInfo2 ^ FormatInformation2.FORMAT_INFO_MASK_QR);
  };
  FormatInformation2.doDecodeFormatInformation = function(maskedFormatInfo1, maskedFormatInfo2) {
    var e_1, _a;
    var bestDifference = Number.MAX_SAFE_INTEGER;
    var bestFormatInfo = 0;
    try {
      for (var _b = __values$j(FormatInformation2.FORMAT_INFO_DECODE_LOOKUP), _c = _b.next(); !_c.done; _c = _b.next()) {
        var decodeInfo = _c.value;
        var targetInfo = decodeInfo[0];
        if (targetInfo === maskedFormatInfo1 || targetInfo === maskedFormatInfo2) {
          return new FormatInformation2(decodeInfo[1]);
        }
        var bitsDifference = FormatInformation2.numBitsDiffering(maskedFormatInfo1, targetInfo);
        if (bitsDifference < bestDifference) {
          bestFormatInfo = decodeInfo[1];
          bestDifference = bitsDifference;
        }
        if (maskedFormatInfo1 !== maskedFormatInfo2) {
          bitsDifference = FormatInformation2.numBitsDiffering(maskedFormatInfo2, targetInfo);
          if (bitsDifference < bestDifference) {
            bestFormatInfo = decodeInfo[1];
            bestDifference = bitsDifference;
          }
        }
      }
    } catch (e_1_1) {
      e_1 = {error: e_1_1};
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return))
          _a.call(_b);
      } finally {
        if (e_1)
          throw e_1.error;
      }
    }
    if (bestDifference <= 3) {
      return new FormatInformation2(bestFormatInfo);
    }
    return null;
  };
  FormatInformation2.prototype.getErrorCorrectionLevel = function() {
    return this.errorCorrectionLevel;
  };
  FormatInformation2.prototype.getDataMask = function() {
    return this.dataMask;
  };
  FormatInformation2.prototype.hashCode = function() {
    return this.errorCorrectionLevel.getBits() << 3 | this.dataMask;
  };
  FormatInformation2.prototype.equals = function(o) {
    if (!(o instanceof FormatInformation2)) {
      return false;
    }
    var other = o;
    return this.errorCorrectionLevel === other.errorCorrectionLevel && this.dataMask === other.dataMask;
  };
  FormatInformation2.FORMAT_INFO_MASK_QR = 21522;
  FormatInformation2.FORMAT_INFO_DECODE_LOOKUP = [
    Int32Array.from([21522, 0]),
    Int32Array.from([20773, 1]),
    Int32Array.from([24188, 2]),
    Int32Array.from([23371, 3]),
    Int32Array.from([17913, 4]),
    Int32Array.from([16590, 5]),
    Int32Array.from([20375, 6]),
    Int32Array.from([19104, 7]),
    Int32Array.from([30660, 8]),
    Int32Array.from([29427, 9]),
    Int32Array.from([32170, 10]),
    Int32Array.from([30877, 11]),
    Int32Array.from([26159, 12]),
    Int32Array.from([25368, 13]),
    Int32Array.from([27713, 14]),
    Int32Array.from([26998, 15]),
    Int32Array.from([5769, 16]),
    Int32Array.from([5054, 17]),
    Int32Array.from([7399, 18]),
    Int32Array.from([6608, 19]),
    Int32Array.from([1890, 20]),
    Int32Array.from([597, 21]),
    Int32Array.from([3340, 22]),
    Int32Array.from([2107, 23]),
    Int32Array.from([13663, 24]),
    Int32Array.from([12392, 25]),
    Int32Array.from([16177, 26]),
    Int32Array.from([14854, 27]),
    Int32Array.from([9396, 28]),
    Int32Array.from([8579, 29]),
    Int32Array.from([11994, 30]),
    Int32Array.from([11245, 31])
  ];
  return FormatInformation2;
}();
var __values$k = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return {value: o && o[i++], done: !o};
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var ECBlocks$1 = function() {
  function ECBlocks2(ecCodewordsPerBlock) {
    var ecBlocks = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      ecBlocks[_i - 1] = arguments[_i];
    }
    this.ecCodewordsPerBlock = ecCodewordsPerBlock;
    this.ecBlocks = ecBlocks;
  }
  ECBlocks2.prototype.getECCodewordsPerBlock = function() {
    return this.ecCodewordsPerBlock;
  };
  ECBlocks2.prototype.getNumBlocks = function() {
    var e_1, _a;
    var total = 0;
    var ecBlocks = this.ecBlocks;
    try {
      for (var ecBlocks_1 = __values$k(ecBlocks), ecBlocks_1_1 = ecBlocks_1.next(); !ecBlocks_1_1.done; ecBlocks_1_1 = ecBlocks_1.next()) {
        var ecBlock = ecBlocks_1_1.value;
        total += ecBlock.getCount();
      }
    } catch (e_1_1) {
      e_1 = {error: e_1_1};
    } finally {
      try {
        if (ecBlocks_1_1 && !ecBlocks_1_1.done && (_a = ecBlocks_1.return))
          _a.call(ecBlocks_1);
      } finally {
        if (e_1)
          throw e_1.error;
      }
    }
    return total;
  };
  ECBlocks2.prototype.getTotalECCodewords = function() {
    return this.ecCodewordsPerBlock * this.getNumBlocks();
  };
  ECBlocks2.prototype.getECBlocks = function() {
    return this.ecBlocks;
  };
  return ECBlocks2;
}();
var ECB$1 = function() {
  function ECB2(count, dataCodewords) {
    this.count = count;
    this.dataCodewords = dataCodewords;
  }
  ECB2.prototype.getCount = function() {
    return this.count;
  };
  ECB2.prototype.getDataCodewords = function() {
    return this.dataCodewords;
  };
  return ECB2;
}();
var __values$l = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return {value: o && o[i++], done: !o};
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var Version$1 = function() {
  function Version2(versionNumber, alignmentPatternCenters) {
    var e_1, _a;
    var ecBlocks = [];
    for (var _i = 2; _i < arguments.length; _i++) {
      ecBlocks[_i - 2] = arguments[_i];
    }
    this.versionNumber = versionNumber;
    this.alignmentPatternCenters = alignmentPatternCenters;
    this.ecBlocks = ecBlocks;
    var total = 0;
    var ecCodewords = ecBlocks[0].getECCodewordsPerBlock();
    var ecbArray = ecBlocks[0].getECBlocks();
    try {
      for (var ecbArray_1 = __values$l(ecbArray), ecbArray_1_1 = ecbArray_1.next(); !ecbArray_1_1.done; ecbArray_1_1 = ecbArray_1.next()) {
        var ecBlock = ecbArray_1_1.value;
        total += ecBlock.getCount() * (ecBlock.getDataCodewords() + ecCodewords);
      }
    } catch (e_1_1) {
      e_1 = {error: e_1_1};
    } finally {
      try {
        if (ecbArray_1_1 && !ecbArray_1_1.done && (_a = ecbArray_1.return))
          _a.call(ecbArray_1);
      } finally {
        if (e_1)
          throw e_1.error;
      }
    }
    this.totalCodewords = total;
  }
  Version2.prototype.getVersionNumber = function() {
    return this.versionNumber;
  };
  Version2.prototype.getAlignmentPatternCenters = function() {
    return this.alignmentPatternCenters;
  };
  Version2.prototype.getTotalCodewords = function() {
    return this.totalCodewords;
  };
  Version2.prototype.getDimensionForVersion = function() {
    return 17 + 4 * this.versionNumber;
  };
  Version2.prototype.getECBlocksForLevel = function(ecLevel) {
    return this.ecBlocks[ecLevel.getValue()];
  };
  Version2.getProvisionalVersionForDimension = function(dimension) {
    if (dimension % 4 !== 1) {
      throw new FormatException();
    }
    try {
      return this.getVersionForNumber((dimension - 17) / 4);
    } catch (ignored) {
      throw new FormatException();
    }
  };
  Version2.getVersionForNumber = function(versionNumber) {
    if (versionNumber < 1 || versionNumber > 40) {
      throw new IllegalArgumentException();
    }
    return Version2.VERSIONS[versionNumber - 1];
  };
  Version2.decodeVersionInformation = function(versionBits) {
    var bestDifference = Number.MAX_SAFE_INTEGER;
    var bestVersion = 0;
    for (var i = 0; i < Version2.VERSION_DECODE_INFO.length; i++) {
      var targetVersion = Version2.VERSION_DECODE_INFO[i];
      if (targetVersion === versionBits) {
        return Version2.getVersionForNumber(i + 7);
      }
      var bitsDifference = FormatInformation.numBitsDiffering(versionBits, targetVersion);
      if (bitsDifference < bestDifference) {
        bestVersion = i + 7;
        bestDifference = bitsDifference;
      }
    }
    if (bestDifference <= 3) {
      return Version2.getVersionForNumber(bestVersion);
    }
    return null;
  };
  Version2.prototype.buildFunctionPattern = function() {
    var dimension = this.getDimensionForVersion();
    var bitMatrix = new BitMatrix(dimension);
    bitMatrix.setRegion(0, 0, 9, 9);
    bitMatrix.setRegion(dimension - 8, 0, 8, 9);
    bitMatrix.setRegion(0, dimension - 8, 9, 8);
    var max = this.alignmentPatternCenters.length;
    for (var x = 0; x < max; x++) {
      var i = this.alignmentPatternCenters[x] - 2;
      for (var y = 0; y < max; y++) {
        if (x === 0 && (y === 0 || y === max - 1) || x === max - 1 && y === 0) {
          continue;
        }
        bitMatrix.setRegion(this.alignmentPatternCenters[y] - 2, i, 5, 5);
      }
    }
    bitMatrix.setRegion(6, 9, 1, dimension - 17);
    bitMatrix.setRegion(9, 6, dimension - 17, 1);
    if (this.versionNumber > 6) {
      bitMatrix.setRegion(dimension - 11, 0, 3, 6);
      bitMatrix.setRegion(0, dimension - 11, 6, 3);
    }
    return bitMatrix;
  };
  Version2.prototype.toString = function() {
    return "" + this.versionNumber;
  };
  Version2.VERSION_DECODE_INFO = Int32Array.from([
    31892,
    34236,
    39577,
    42195,
    48118,
    51042,
    55367,
    58893,
    63784,
    68472,
    70749,
    76311,
    79154,
    84390,
    87683,
    92361,
    96236,
    102084,
    102881,
    110507,
    110734,
    117786,
    119615,
    126325,
    127568,
    133589,
    136944,
    141498,
    145311,
    150283,
    152622,
    158308,
    161089,
    167017
  ]);
  Version2.VERSIONS = [
    new Version2(1, new Int32Array(0), new ECBlocks$1(7, new ECB$1(1, 19)), new ECBlocks$1(10, new ECB$1(1, 16)), new ECBlocks$1(13, new ECB$1(1, 13)), new ECBlocks$1(17, new ECB$1(1, 9))),
    new Version2(2, Int32Array.from([6, 18]), new ECBlocks$1(10, new ECB$1(1, 34)), new ECBlocks$1(16, new ECB$1(1, 28)), new ECBlocks$1(22, new ECB$1(1, 22)), new ECBlocks$1(28, new ECB$1(1, 16))),
    new Version2(3, Int32Array.from([6, 22]), new ECBlocks$1(15, new ECB$1(1, 55)), new ECBlocks$1(26, new ECB$1(1, 44)), new ECBlocks$1(18, new ECB$1(2, 17)), new ECBlocks$1(22, new ECB$1(2, 13))),
    new Version2(4, Int32Array.from([6, 26]), new ECBlocks$1(20, new ECB$1(1, 80)), new ECBlocks$1(18, new ECB$1(2, 32)), new ECBlocks$1(26, new ECB$1(2, 24)), new ECBlocks$1(16, new ECB$1(4, 9))),
    new Version2(5, Int32Array.from([6, 30]), new ECBlocks$1(26, new ECB$1(1, 108)), new ECBlocks$1(24, new ECB$1(2, 43)), new ECBlocks$1(18, new ECB$1(2, 15), new ECB$1(2, 16)), new ECBlocks$1(22, new ECB$1(2, 11), new ECB$1(2, 12))),
    new Version2(6, Int32Array.from([6, 34]), new ECBlocks$1(18, new ECB$1(2, 68)), new ECBlocks$1(16, new ECB$1(4, 27)), new ECBlocks$1(24, new ECB$1(4, 19)), new ECBlocks$1(28, new ECB$1(4, 15))),
    new Version2(7, Int32Array.from([6, 22, 38]), new ECBlocks$1(20, new ECB$1(2, 78)), new ECBlocks$1(18, new ECB$1(4, 31)), new ECBlocks$1(18, new ECB$1(2, 14), new ECB$1(4, 15)), new ECBlocks$1(26, new ECB$1(4, 13), new ECB$1(1, 14))),
    new Version2(8, Int32Array.from([6, 24, 42]), new ECBlocks$1(24, new ECB$1(2, 97)), new ECBlocks$1(22, new ECB$1(2, 38), new ECB$1(2, 39)), new ECBlocks$1(22, new ECB$1(4, 18), new ECB$1(2, 19)), new ECBlocks$1(26, new ECB$1(4, 14), new ECB$1(2, 15))),
    new Version2(9, Int32Array.from([6, 26, 46]), new ECBlocks$1(30, new ECB$1(2, 116)), new ECBlocks$1(22, new ECB$1(3, 36), new ECB$1(2, 37)), new ECBlocks$1(20, new ECB$1(4, 16), new ECB$1(4, 17)), new ECBlocks$1(24, new ECB$1(4, 12), new ECB$1(4, 13))),
    new Version2(10, Int32Array.from([6, 28, 50]), new ECBlocks$1(18, new ECB$1(2, 68), new ECB$1(2, 69)), new ECBlocks$1(26, new ECB$1(4, 43), new ECB$1(1, 44)), new ECBlocks$1(24, new ECB$1(6, 19), new ECB$1(2, 20)), new ECBlocks$1(28, new ECB$1(6, 15), new ECB$1(2, 16))),
    new Version2(11, Int32Array.from([6, 30, 54]), new ECBlocks$1(20, new ECB$1(4, 81)), new ECBlocks$1(30, new ECB$1(1, 50), new ECB$1(4, 51)), new ECBlocks$1(28, new ECB$1(4, 22), new ECB$1(4, 23)), new ECBlocks$1(24, new ECB$1(3, 12), new ECB$1(8, 13))),
    new Version2(12, Int32Array.from([6, 32, 58]), new ECBlocks$1(24, new ECB$1(2, 92), new ECB$1(2, 93)), new ECBlocks$1(22, new ECB$1(6, 36), new ECB$1(2, 37)), new ECBlocks$1(26, new ECB$1(4, 20), new ECB$1(6, 21)), new ECBlocks$1(28, new ECB$1(7, 14), new ECB$1(4, 15))),
    new Version2(13, Int32Array.from([6, 34, 62]), new ECBlocks$1(26, new ECB$1(4, 107)), new ECBlocks$1(22, new ECB$1(8, 37), new ECB$1(1, 38)), new ECBlocks$1(24, new ECB$1(8, 20), new ECB$1(4, 21)), new ECBlocks$1(22, new ECB$1(12, 11), new ECB$1(4, 12))),
    new Version2(14, Int32Array.from([6, 26, 46, 66]), new ECBlocks$1(30, new ECB$1(3, 115), new ECB$1(1, 116)), new ECBlocks$1(24, new ECB$1(4, 40), new ECB$1(5, 41)), new ECBlocks$1(20, new ECB$1(11, 16), new ECB$1(5, 17)), new ECBlocks$1(24, new ECB$1(11, 12), new ECB$1(5, 13))),
    new Version2(15, Int32Array.from([6, 26, 48, 70]), new ECBlocks$1(22, new ECB$1(5, 87), new ECB$1(1, 88)), new ECBlocks$1(24, new ECB$1(5, 41), new ECB$1(5, 42)), new ECBlocks$1(30, new ECB$1(5, 24), new ECB$1(7, 25)), new ECBlocks$1(24, new ECB$1(11, 12), new ECB$1(7, 13))),
    new Version2(16, Int32Array.from([6, 26, 50, 74]), new ECBlocks$1(24, new ECB$1(5, 98), new ECB$1(1, 99)), new ECBlocks$1(28, new ECB$1(7, 45), new ECB$1(3, 46)), new ECBlocks$1(24, new ECB$1(15, 19), new ECB$1(2, 20)), new ECBlocks$1(30, new ECB$1(3, 15), new ECB$1(13, 16))),
    new Version2(17, Int32Array.from([6, 30, 54, 78]), new ECBlocks$1(28, new ECB$1(1, 107), new ECB$1(5, 108)), new ECBlocks$1(28, new ECB$1(10, 46), new ECB$1(1, 47)), new ECBlocks$1(28, new ECB$1(1, 22), new ECB$1(15, 23)), new ECBlocks$1(28, new ECB$1(2, 14), new ECB$1(17, 15))),
    new Version2(18, Int32Array.from([6, 30, 56, 82]), new ECBlocks$1(30, new ECB$1(5, 120), new ECB$1(1, 121)), new ECBlocks$1(26, new ECB$1(9, 43), new ECB$1(4, 44)), new ECBlocks$1(28, new ECB$1(17, 22), new ECB$1(1, 23)), new ECBlocks$1(28, new ECB$1(2, 14), new ECB$1(19, 15))),
    new Version2(19, Int32Array.from([6, 30, 58, 86]), new ECBlocks$1(28, new ECB$1(3, 113), new ECB$1(4, 114)), new ECBlocks$1(26, new ECB$1(3, 44), new ECB$1(11, 45)), new ECBlocks$1(26, new ECB$1(17, 21), new ECB$1(4, 22)), new ECBlocks$1(26, new ECB$1(9, 13), new ECB$1(16, 14))),
    new Version2(20, Int32Array.from([6, 34, 62, 90]), new ECBlocks$1(28, new ECB$1(3, 107), new ECB$1(5, 108)), new ECBlocks$1(26, new ECB$1(3, 41), new ECB$1(13, 42)), new ECBlocks$1(30, new ECB$1(15, 24), new ECB$1(5, 25)), new ECBlocks$1(28, new ECB$1(15, 15), new ECB$1(10, 16))),
    new Version2(21, Int32Array.from([6, 28, 50, 72, 94]), new ECBlocks$1(28, new ECB$1(4, 116), new ECB$1(4, 117)), new ECBlocks$1(26, new ECB$1(17, 42)), new ECBlocks$1(28, new ECB$1(17, 22), new ECB$1(6, 23)), new ECBlocks$1(30, new ECB$1(19, 16), new ECB$1(6, 17))),
    new Version2(22, Int32Array.from([6, 26, 50, 74, 98]), new ECBlocks$1(28, new ECB$1(2, 111), new ECB$1(7, 112)), new ECBlocks$1(28, new ECB$1(17, 46)), new ECBlocks$1(30, new ECB$1(7, 24), new ECB$1(16, 25)), new ECBlocks$1(24, new ECB$1(34, 13))),
    new Version2(23, Int32Array.from([6, 30, 54, 78, 102]), new ECBlocks$1(30, new ECB$1(4, 121), new ECB$1(5, 122)), new ECBlocks$1(28, new ECB$1(4, 47), new ECB$1(14, 48)), new ECBlocks$1(30, new ECB$1(11, 24), new ECB$1(14, 25)), new ECBlocks$1(30, new ECB$1(16, 15), new ECB$1(14, 16))),
    new Version2(24, Int32Array.from([6, 28, 54, 80, 106]), new ECBlocks$1(30, new ECB$1(6, 117), new ECB$1(4, 118)), new ECBlocks$1(28, new ECB$1(6, 45), new ECB$1(14, 46)), new ECBlocks$1(30, new ECB$1(11, 24), new ECB$1(16, 25)), new ECBlocks$1(30, new ECB$1(30, 16), new ECB$1(2, 17))),
    new Version2(25, Int32Array.from([6, 32, 58, 84, 110]), new ECBlocks$1(26, new ECB$1(8, 106), new ECB$1(4, 107)), new ECBlocks$1(28, new ECB$1(8, 47), new ECB$1(13, 48)), new ECBlocks$1(30, new ECB$1(7, 24), new ECB$1(22, 25)), new ECBlocks$1(30, new ECB$1(22, 15), new ECB$1(13, 16))),
    new Version2(26, Int32Array.from([6, 30, 58, 86, 114]), new ECBlocks$1(28, new ECB$1(10, 114), new ECB$1(2, 115)), new ECBlocks$1(28, new ECB$1(19, 46), new ECB$1(4, 47)), new ECBlocks$1(28, new ECB$1(28, 22), new ECB$1(6, 23)), new ECBlocks$1(30, new ECB$1(33, 16), new ECB$1(4, 17))),
    new Version2(27, Int32Array.from([6, 34, 62, 90, 118]), new ECBlocks$1(30, new ECB$1(8, 122), new ECB$1(4, 123)), new ECBlocks$1(28, new ECB$1(22, 45), new ECB$1(3, 46)), new ECBlocks$1(30, new ECB$1(8, 23), new ECB$1(26, 24)), new ECBlocks$1(30, new ECB$1(12, 15), new ECB$1(28, 16))),
    new Version2(28, Int32Array.from([6, 26, 50, 74, 98, 122]), new ECBlocks$1(30, new ECB$1(3, 117), new ECB$1(10, 118)), new ECBlocks$1(28, new ECB$1(3, 45), new ECB$1(23, 46)), new ECBlocks$1(30, new ECB$1(4, 24), new ECB$1(31, 25)), new ECBlocks$1(30, new ECB$1(11, 15), new ECB$1(31, 16))),
    new Version2(29, Int32Array.from([6, 30, 54, 78, 102, 126]), new ECBlocks$1(30, new ECB$1(7, 116), new ECB$1(7, 117)), new ECBlocks$1(28, new ECB$1(21, 45), new ECB$1(7, 46)), new ECBlocks$1(30, new ECB$1(1, 23), new ECB$1(37, 24)), new ECBlocks$1(30, new ECB$1(19, 15), new ECB$1(26, 16))),
    new Version2(30, Int32Array.from([6, 26, 52, 78, 104, 130]), new ECBlocks$1(30, new ECB$1(5, 115), new ECB$1(10, 116)), new ECBlocks$1(28, new ECB$1(19, 47), new ECB$1(10, 48)), new ECBlocks$1(30, new ECB$1(15, 24), new ECB$1(25, 25)), new ECBlocks$1(30, new ECB$1(23, 15), new ECB$1(25, 16))),
    new Version2(31, Int32Array.from([6, 30, 56, 82, 108, 134]), new ECBlocks$1(30, new ECB$1(13, 115), new ECB$1(3, 116)), new ECBlocks$1(28, new ECB$1(2, 46), new ECB$1(29, 47)), new ECBlocks$1(30, new ECB$1(42, 24), new ECB$1(1, 25)), new ECBlocks$1(30, new ECB$1(23, 15), new ECB$1(28, 16))),
    new Version2(32, Int32Array.from([6, 34, 60, 86, 112, 138]), new ECBlocks$1(30, new ECB$1(17, 115)), new ECBlocks$1(28, new ECB$1(10, 46), new ECB$1(23, 47)), new ECBlocks$1(30, new ECB$1(10, 24), new ECB$1(35, 25)), new ECBlocks$1(30, new ECB$1(19, 15), new ECB$1(35, 16))),
    new Version2(33, Int32Array.from([6, 30, 58, 86, 114, 142]), new ECBlocks$1(30, new ECB$1(17, 115), new ECB$1(1, 116)), new ECBlocks$1(28, new ECB$1(14, 46), new ECB$1(21, 47)), new ECBlocks$1(30, new ECB$1(29, 24), new ECB$1(19, 25)), new ECBlocks$1(30, new ECB$1(11, 15), new ECB$1(46, 16))),
    new Version2(34, Int32Array.from([6, 34, 62, 90, 118, 146]), new ECBlocks$1(30, new ECB$1(13, 115), new ECB$1(6, 116)), new ECBlocks$1(28, new ECB$1(14, 46), new ECB$1(23, 47)), new ECBlocks$1(30, new ECB$1(44, 24), new ECB$1(7, 25)), new ECBlocks$1(30, new ECB$1(59, 16), new ECB$1(1, 17))),
    new Version2(35, Int32Array.from([6, 30, 54, 78, 102, 126, 150]), new ECBlocks$1(30, new ECB$1(12, 121), new ECB$1(7, 122)), new ECBlocks$1(28, new ECB$1(12, 47), new ECB$1(26, 48)), new ECBlocks$1(30, new ECB$1(39, 24), new ECB$1(14, 25)), new ECBlocks$1(30, new ECB$1(22, 15), new ECB$1(41, 16))),
    new Version2(36, Int32Array.from([6, 24, 50, 76, 102, 128, 154]), new ECBlocks$1(30, new ECB$1(6, 121), new ECB$1(14, 122)), new ECBlocks$1(28, new ECB$1(6, 47), new ECB$1(34, 48)), new ECBlocks$1(30, new ECB$1(46, 24), new ECB$1(10, 25)), new ECBlocks$1(30, new ECB$1(2, 15), new ECB$1(64, 16))),
    new Version2(37, Int32Array.from([6, 28, 54, 80, 106, 132, 158]), new ECBlocks$1(30, new ECB$1(17, 122), new ECB$1(4, 123)), new ECBlocks$1(28, new ECB$1(29, 46), new ECB$1(14, 47)), new ECBlocks$1(30, new ECB$1(49, 24), new ECB$1(10, 25)), new ECBlocks$1(30, new ECB$1(24, 15), new ECB$1(46, 16))),
    new Version2(38, Int32Array.from([6, 32, 58, 84, 110, 136, 162]), new ECBlocks$1(30, new ECB$1(4, 122), new ECB$1(18, 123)), new ECBlocks$1(28, new ECB$1(13, 46), new ECB$1(32, 47)), new ECBlocks$1(30, new ECB$1(48, 24), new ECB$1(14, 25)), new ECBlocks$1(30, new ECB$1(42, 15), new ECB$1(32, 16))),
    new Version2(39, Int32Array.from([6, 26, 54, 82, 110, 138, 166]), new ECBlocks$1(30, new ECB$1(20, 117), new ECB$1(4, 118)), new ECBlocks$1(28, new ECB$1(40, 47), new ECB$1(7, 48)), new ECBlocks$1(30, new ECB$1(43, 24), new ECB$1(22, 25)), new ECBlocks$1(30, new ECB$1(10, 15), new ECB$1(67, 16))),
    new Version2(40, Int32Array.from([6, 30, 58, 86, 114, 142, 170]), new ECBlocks$1(30, new ECB$1(19, 118), new ECB$1(6, 119)), new ECBlocks$1(28, new ECB$1(18, 47), new ECB$1(31, 48)), new ECBlocks$1(30, new ECB$1(34, 24), new ECB$1(34, 25)), new ECBlocks$1(30, new ECB$1(20, 15), new ECB$1(61, 16)))
  ];
  return Version2;
}();
var DataMaskValues;
(function(DataMaskValues2) {
  DataMaskValues2[DataMaskValues2["DATA_MASK_000"] = 0] = "DATA_MASK_000";
  DataMaskValues2[DataMaskValues2["DATA_MASK_001"] = 1] = "DATA_MASK_001";
  DataMaskValues2[DataMaskValues2["DATA_MASK_010"] = 2] = "DATA_MASK_010";
  DataMaskValues2[DataMaskValues2["DATA_MASK_011"] = 3] = "DATA_MASK_011";
  DataMaskValues2[DataMaskValues2["DATA_MASK_100"] = 4] = "DATA_MASK_100";
  DataMaskValues2[DataMaskValues2["DATA_MASK_101"] = 5] = "DATA_MASK_101";
  DataMaskValues2[DataMaskValues2["DATA_MASK_110"] = 6] = "DATA_MASK_110";
  DataMaskValues2[DataMaskValues2["DATA_MASK_111"] = 7] = "DATA_MASK_111";
})(DataMaskValues || (DataMaskValues = {}));
var DataMask = function() {
  function DataMask2(value, isMasked) {
    this.value = value;
    this.isMasked = isMasked;
  }
  DataMask2.prototype.unmaskBitMatrix = function(bits, dimension) {
    for (var i = 0; i < dimension; i++) {
      for (var j = 0; j < dimension; j++) {
        if (this.isMasked(i, j)) {
          bits.flip(j, i);
        }
      }
    }
  };
  DataMask2.values = new Map([
    [DataMaskValues.DATA_MASK_000, new DataMask2(DataMaskValues.DATA_MASK_000, function(i, j) {
      return (i + j & 1) === 0;
    })],
    [DataMaskValues.DATA_MASK_001, new DataMask2(DataMaskValues.DATA_MASK_001, function(i, j) {
      return (i & 1) === 0;
    })],
    [DataMaskValues.DATA_MASK_010, new DataMask2(DataMaskValues.DATA_MASK_010, function(i, j) {
      return j % 3 === 0;
    })],
    [DataMaskValues.DATA_MASK_011, new DataMask2(DataMaskValues.DATA_MASK_011, function(i, j) {
      return (i + j) % 3 === 0;
    })],
    [DataMaskValues.DATA_MASK_100, new DataMask2(DataMaskValues.DATA_MASK_100, function(i, j) {
      return (Math.floor(i / 2) + Math.floor(j / 3) & 1) === 0;
    })],
    [DataMaskValues.DATA_MASK_101, new DataMask2(DataMaskValues.DATA_MASK_101, function(i, j) {
      return i * j % 6 === 0;
    })],
    [DataMaskValues.DATA_MASK_110, new DataMask2(DataMaskValues.DATA_MASK_110, function(i, j) {
      return i * j % 6 < 3;
    })],
    [DataMaskValues.DATA_MASK_111, new DataMask2(DataMaskValues.DATA_MASK_111, function(i, j) {
      return (i + j + i * j % 3 & 1) === 0;
    })]
  ]);
  return DataMask2;
}();
var BitMatrixParser$1 = function() {
  function BitMatrixParser2(bitMatrix) {
    var dimension = bitMatrix.getHeight();
    if (dimension < 21 || (dimension & 3) !== 1) {
      throw new FormatException();
    }
    this.bitMatrix = bitMatrix;
  }
  BitMatrixParser2.prototype.readFormatInformation = function() {
    if (this.parsedFormatInfo !== null && this.parsedFormatInfo !== void 0) {
      return this.parsedFormatInfo;
    }
    var formatInfoBits1 = 0;
    for (var i = 0; i < 6; i++) {
      formatInfoBits1 = this.copyBit(i, 8, formatInfoBits1);
    }
    formatInfoBits1 = this.copyBit(7, 8, formatInfoBits1);
    formatInfoBits1 = this.copyBit(8, 8, formatInfoBits1);
    formatInfoBits1 = this.copyBit(8, 7, formatInfoBits1);
    for (var j = 5; j >= 0; j--) {
      formatInfoBits1 = this.copyBit(8, j, formatInfoBits1);
    }
    var dimension = this.bitMatrix.getHeight();
    var formatInfoBits2 = 0;
    var jMin = dimension - 7;
    for (var j = dimension - 1; j >= jMin; j--) {
      formatInfoBits2 = this.copyBit(8, j, formatInfoBits2);
    }
    for (var i = dimension - 8; i < dimension; i++) {
      formatInfoBits2 = this.copyBit(i, 8, formatInfoBits2);
    }
    this.parsedFormatInfo = FormatInformation.decodeFormatInformation(formatInfoBits1, formatInfoBits2);
    if (this.parsedFormatInfo !== null) {
      return this.parsedFormatInfo;
    }
    throw new FormatException();
  };
  BitMatrixParser2.prototype.readVersion = function() {
    if (this.parsedVersion !== null && this.parsedVersion !== void 0) {
      return this.parsedVersion;
    }
    var dimension = this.bitMatrix.getHeight();
    var provisionalVersion = Math.floor((dimension - 17) / 4);
    if (provisionalVersion <= 6) {
      return Version$1.getVersionForNumber(provisionalVersion);
    }
    var versionBits = 0;
    var ijMin = dimension - 11;
    for (var j = 5; j >= 0; j--) {
      for (var i = dimension - 9; i >= ijMin; i--) {
        versionBits = this.copyBit(i, j, versionBits);
      }
    }
    var theParsedVersion = Version$1.decodeVersionInformation(versionBits);
    if (theParsedVersion !== null && theParsedVersion.getDimensionForVersion() === dimension) {
      this.parsedVersion = theParsedVersion;
      return theParsedVersion;
    }
    versionBits = 0;
    for (var i = 5; i >= 0; i--) {
      for (var j = dimension - 9; j >= ijMin; j--) {
        versionBits = this.copyBit(i, j, versionBits);
      }
    }
    theParsedVersion = Version$1.decodeVersionInformation(versionBits);
    if (theParsedVersion !== null && theParsedVersion.getDimensionForVersion() === dimension) {
      this.parsedVersion = theParsedVersion;
      return theParsedVersion;
    }
    throw new FormatException();
  };
  BitMatrixParser2.prototype.copyBit = function(i, j, versionBits) {
    var bit = this.isMirror ? this.bitMatrix.get(j, i) : this.bitMatrix.get(i, j);
    return bit ? versionBits << 1 | 1 : versionBits << 1;
  };
  BitMatrixParser2.prototype.readCodewords = function() {
    var formatInfo = this.readFormatInformation();
    var version = this.readVersion();
    var dataMask = DataMask.values.get(formatInfo.getDataMask());
    var dimension = this.bitMatrix.getHeight();
    dataMask.unmaskBitMatrix(this.bitMatrix, dimension);
    var functionPattern = version.buildFunctionPattern();
    var readingUp = true;
    var result = new Uint8Array(version.getTotalCodewords());
    var resultOffset = 0;
    var currentByte = 0;
    var bitsRead = 0;
    for (var j = dimension - 1; j > 0; j -= 2) {
      if (j === 6) {
        j--;
      }
      for (var count = 0; count < dimension; count++) {
        var i = readingUp ? dimension - 1 - count : count;
        for (var col = 0; col < 2; col++) {
          if (!functionPattern.get(j - col, i)) {
            bitsRead++;
            currentByte <<= 1;
            if (this.bitMatrix.get(j - col, i)) {
              currentByte |= 1;
            }
            if (bitsRead === 8) {
              result[resultOffset++] = currentByte;
              bitsRead = 0;
              currentByte = 0;
            }
          }
        }
      }
      readingUp = !readingUp;
    }
    if (resultOffset !== version.getTotalCodewords()) {
      throw new FormatException();
    }
    return result;
  };
  BitMatrixParser2.prototype.remask = function() {
    if (this.parsedFormatInfo === null) {
      return;
    }
    var dataMask = DataMask.values[this.parsedFormatInfo.getDataMask()];
    var dimension = this.bitMatrix.getHeight();
    dataMask.unmaskBitMatrix(this.bitMatrix, dimension);
  };
  BitMatrixParser2.prototype.setMirror = function(isMirror) {
    this.parsedVersion = null;
    this.parsedFormatInfo = null;
    this.isMirror = isMirror;
  };
  BitMatrixParser2.prototype.mirror = function() {
    var bitMatrix = this.bitMatrix;
    for (var x = 0, width = bitMatrix.getWidth(); x < width; x++) {
      for (var y = x + 1, height = bitMatrix.getHeight(); y < height; y++) {
        if (bitMatrix.get(x, y) !== bitMatrix.get(y, x)) {
          bitMatrix.flip(y, x);
          bitMatrix.flip(x, y);
        }
      }
    }
  };
  return BitMatrixParser2;
}();
var __values$m = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return {value: o && o[i++], done: !o};
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var DataBlock$1 = function() {
  function DataBlock2(numDataCodewords, codewords) {
    this.numDataCodewords = numDataCodewords;
    this.codewords = codewords;
  }
  DataBlock2.getDataBlocks = function(rawCodewords, version, ecLevel) {
    var e_1, _a, e_2, _b;
    if (rawCodewords.length !== version.getTotalCodewords()) {
      throw new IllegalArgumentException();
    }
    var ecBlocks = version.getECBlocksForLevel(ecLevel);
    var totalBlocks = 0;
    var ecBlockArray = ecBlocks.getECBlocks();
    try {
      for (var ecBlockArray_1 = __values$m(ecBlockArray), ecBlockArray_1_1 = ecBlockArray_1.next(); !ecBlockArray_1_1.done; ecBlockArray_1_1 = ecBlockArray_1.next()) {
        var ecBlock = ecBlockArray_1_1.value;
        totalBlocks += ecBlock.getCount();
      }
    } catch (e_1_1) {
      e_1 = {error: e_1_1};
    } finally {
      try {
        if (ecBlockArray_1_1 && !ecBlockArray_1_1.done && (_a = ecBlockArray_1.return))
          _a.call(ecBlockArray_1);
      } finally {
        if (e_1)
          throw e_1.error;
      }
    }
    var result = new Array(totalBlocks);
    var numResultBlocks = 0;
    try {
      for (var ecBlockArray_2 = __values$m(ecBlockArray), ecBlockArray_2_1 = ecBlockArray_2.next(); !ecBlockArray_2_1.done; ecBlockArray_2_1 = ecBlockArray_2.next()) {
        var ecBlock = ecBlockArray_2_1.value;
        for (var i = 0; i < ecBlock.getCount(); i++) {
          var numDataCodewords = ecBlock.getDataCodewords();
          var numBlockCodewords = ecBlocks.getECCodewordsPerBlock() + numDataCodewords;
          result[numResultBlocks++] = new DataBlock2(numDataCodewords, new Uint8Array(numBlockCodewords));
        }
      }
    } catch (e_2_1) {
      e_2 = {error: e_2_1};
    } finally {
      try {
        if (ecBlockArray_2_1 && !ecBlockArray_2_1.done && (_b = ecBlockArray_2.return))
          _b.call(ecBlockArray_2);
      } finally {
        if (e_2)
          throw e_2.error;
      }
    }
    var shorterBlocksTotalCodewords = result[0].codewords.length;
    var longerBlocksStartAt = result.length - 1;
    while (longerBlocksStartAt >= 0) {
      var numCodewords = result[longerBlocksStartAt].codewords.length;
      if (numCodewords === shorterBlocksTotalCodewords) {
        break;
      }
      longerBlocksStartAt--;
    }
    longerBlocksStartAt++;
    var shorterBlocksNumDataCodewords = shorterBlocksTotalCodewords - ecBlocks.getECCodewordsPerBlock();
    var rawCodewordsOffset = 0;
    for (var i = 0; i < shorterBlocksNumDataCodewords; i++) {
      for (var j = 0; j < numResultBlocks; j++) {
        result[j].codewords[i] = rawCodewords[rawCodewordsOffset++];
      }
    }
    for (var j = longerBlocksStartAt; j < numResultBlocks; j++) {
      result[j].codewords[shorterBlocksNumDataCodewords] = rawCodewords[rawCodewordsOffset++];
    }
    var max = result[0].codewords.length;
    for (var i = shorterBlocksNumDataCodewords; i < max; i++) {
      for (var j = 0; j < numResultBlocks; j++) {
        var iOffset = j < longerBlocksStartAt ? i : i + 1;
        result[j].codewords[iOffset] = rawCodewords[rawCodewordsOffset++];
      }
    }
    return result;
  };
  DataBlock2.prototype.getNumDataCodewords = function() {
    return this.numDataCodewords;
  };
  DataBlock2.prototype.getCodewords = function() {
    return this.codewords;
  };
  return DataBlock2;
}();
var ModeValues;
(function(ModeValues2) {
  ModeValues2[ModeValues2["TERMINATOR"] = 0] = "TERMINATOR";
  ModeValues2[ModeValues2["NUMERIC"] = 1] = "NUMERIC";
  ModeValues2[ModeValues2["ALPHANUMERIC"] = 2] = "ALPHANUMERIC";
  ModeValues2[ModeValues2["STRUCTURED_APPEND"] = 3] = "STRUCTURED_APPEND";
  ModeValues2[ModeValues2["BYTE"] = 4] = "BYTE";
  ModeValues2[ModeValues2["ECI"] = 5] = "ECI";
  ModeValues2[ModeValues2["KANJI"] = 6] = "KANJI";
  ModeValues2[ModeValues2["FNC1_FIRST_POSITION"] = 7] = "FNC1_FIRST_POSITION";
  ModeValues2[ModeValues2["FNC1_SECOND_POSITION"] = 8] = "FNC1_SECOND_POSITION";
  ModeValues2[ModeValues2["HANZI"] = 9] = "HANZI";
})(ModeValues || (ModeValues = {}));
var Mode$1 = function() {
  function Mode2(value, stringValue, characterCountBitsForVersions, bits) {
    this.value = value;
    this.stringValue = stringValue;
    this.characterCountBitsForVersions = characterCountBitsForVersions;
    this.bits = bits;
    Mode2.FOR_BITS.set(bits, this);
    Mode2.FOR_VALUE.set(value, this);
  }
  Mode2.forBits = function(bits) {
    var mode = Mode2.FOR_BITS.get(bits);
    if (mode === void 0) {
      throw new IllegalArgumentException();
    }
    return mode;
  };
  Mode2.prototype.getCharacterCountBits = function(version) {
    var versionNumber = version.getVersionNumber();
    var offset;
    if (versionNumber <= 9) {
      offset = 0;
    } else if (versionNumber <= 26) {
      offset = 1;
    } else {
      offset = 2;
    }
    return this.characterCountBitsForVersions[offset];
  };
  Mode2.prototype.getValue = function() {
    return this.value;
  };
  Mode2.prototype.getBits = function() {
    return this.bits;
  };
  Mode2.prototype.equals = function(o) {
    if (!(o instanceof Mode2)) {
      return false;
    }
    var other = o;
    return this.value === other.value;
  };
  Mode2.prototype.toString = function() {
    return this.stringValue;
  };
  Mode2.FOR_BITS = new Map();
  Mode2.FOR_VALUE = new Map();
  Mode2.TERMINATOR = new Mode2(ModeValues.TERMINATOR, "TERMINATOR", Int32Array.from([0, 0, 0]), 0);
  Mode2.NUMERIC = new Mode2(ModeValues.NUMERIC, "NUMERIC", Int32Array.from([10, 12, 14]), 1);
  Mode2.ALPHANUMERIC = new Mode2(ModeValues.ALPHANUMERIC, "ALPHANUMERIC", Int32Array.from([9, 11, 13]), 2);
  Mode2.STRUCTURED_APPEND = new Mode2(ModeValues.STRUCTURED_APPEND, "STRUCTURED_APPEND", Int32Array.from([0, 0, 0]), 3);
  Mode2.BYTE = new Mode2(ModeValues.BYTE, "BYTE", Int32Array.from([8, 16, 16]), 4);
  Mode2.ECI = new Mode2(ModeValues.ECI, "ECI", Int32Array.from([0, 0, 0]), 7);
  Mode2.KANJI = new Mode2(ModeValues.KANJI, "KANJI", Int32Array.from([8, 10, 12]), 8);
  Mode2.FNC1_FIRST_POSITION = new Mode2(ModeValues.FNC1_FIRST_POSITION, "FNC1_FIRST_POSITION", Int32Array.from([0, 0, 0]), 5);
  Mode2.FNC1_SECOND_POSITION = new Mode2(ModeValues.FNC1_SECOND_POSITION, "FNC1_SECOND_POSITION", Int32Array.from([0, 0, 0]), 9);
  Mode2.HANZI = new Mode2(ModeValues.HANZI, "HANZI", Int32Array.from([8, 10, 12]), 13);
  return Mode2;
}();
var DecodedBitStreamParser$1 = function() {
  function DecodedBitStreamParser2() {
  }
  DecodedBitStreamParser2.decode = function(bytes, version, ecLevel, hints) {
    var bits = new BitSource(bytes);
    var result = new StringBuilder();
    var byteSegments = new Array();
    var symbolSequence = -1;
    var parityData = -1;
    try {
      var currentCharacterSetECI = null;
      var fc1InEffect = false;
      var mode = void 0;
      do {
        if (bits.available() < 4) {
          mode = Mode$1.TERMINATOR;
        } else {
          var modeBits = bits.readBits(4);
          mode = Mode$1.forBits(modeBits);
        }
        switch (mode) {
          case Mode$1.TERMINATOR:
            break;
          case Mode$1.FNC1_FIRST_POSITION:
          case Mode$1.FNC1_SECOND_POSITION:
            fc1InEffect = true;
            break;
          case Mode$1.STRUCTURED_APPEND:
            if (bits.available() < 16) {
              throw new FormatException();
            }
            symbolSequence = bits.readBits(8);
            parityData = bits.readBits(8);
            break;
          case Mode$1.ECI:
            var value = DecodedBitStreamParser2.parseECIValue(bits);
            currentCharacterSetECI = CharacterSetECI.getCharacterSetECIByValue(value);
            if (currentCharacterSetECI === null) {
              throw new FormatException();
            }
            break;
          case Mode$1.HANZI:
            var subset = bits.readBits(4);
            var countHanzi = bits.readBits(mode.getCharacterCountBits(version));
            if (subset === DecodedBitStreamParser2.GB2312_SUBSET) {
              DecodedBitStreamParser2.decodeHanziSegment(bits, result, countHanzi);
            }
            break;
          default:
            var count = bits.readBits(mode.getCharacterCountBits(version));
            switch (mode) {
              case Mode$1.NUMERIC:
                DecodedBitStreamParser2.decodeNumericSegment(bits, result, count);
                break;
              case Mode$1.ALPHANUMERIC:
                DecodedBitStreamParser2.decodeAlphanumericSegment(bits, result, count, fc1InEffect);
                break;
              case Mode$1.BYTE:
                DecodedBitStreamParser2.decodeByteSegment(bits, result, count, currentCharacterSetECI, byteSegments, hints);
                break;
              case Mode$1.KANJI:
                DecodedBitStreamParser2.decodeKanjiSegment(bits, result, count);
                break;
              default:
                throw new FormatException();
            }
            break;
        }
      } while (mode !== Mode$1.TERMINATOR);
    } catch (iae) {
      throw new FormatException();
    }
    return new DecoderResult(bytes, result.toString(), byteSegments.length === 0 ? null : byteSegments, ecLevel === null ? null : ecLevel.toString(), symbolSequence, parityData);
  };
  DecodedBitStreamParser2.decodeHanziSegment = function(bits, result, count) {
    if (count * 13 > bits.available()) {
      throw new FormatException();
    }
    var buffer = new Uint8Array(2 * count);
    var offset = 0;
    while (count > 0) {
      var twoBytes = bits.readBits(13);
      var assembledTwoBytes = twoBytes / 96 << 8 & 4294967295 | twoBytes % 96;
      if (assembledTwoBytes < 959) {
        assembledTwoBytes += 41377;
      } else {
        assembledTwoBytes += 42657;
      }
      buffer[offset] = assembledTwoBytes >> 8 & 255;
      buffer[offset + 1] = assembledTwoBytes & 255;
      offset += 2;
      count--;
    }
    try {
      result.append(StringEncoding.decode(buffer, StringUtils.GB2312));
    } catch (ignored) {
      throw new FormatException(ignored);
    }
  };
  DecodedBitStreamParser2.decodeKanjiSegment = function(bits, result, count) {
    if (count * 13 > bits.available()) {
      throw new FormatException();
    }
    var buffer = new Uint8Array(2 * count);
    var offset = 0;
    while (count > 0) {
      var twoBytes = bits.readBits(13);
      var assembledTwoBytes = twoBytes / 192 << 8 & 4294967295 | twoBytes % 192;
      if (assembledTwoBytes < 7936) {
        assembledTwoBytes += 33088;
      } else {
        assembledTwoBytes += 49472;
      }
      buffer[offset] = assembledTwoBytes >> 8;
      buffer[offset + 1] = assembledTwoBytes;
      offset += 2;
      count--;
    }
    try {
      result.append(StringEncoding.decode(buffer, StringUtils.SHIFT_JIS));
    } catch (ignored) {
      throw new FormatException(ignored);
    }
  };
  DecodedBitStreamParser2.decodeByteSegment = function(bits, result, count, currentCharacterSetECI, byteSegments, hints) {
    if (8 * count > bits.available()) {
      throw new FormatException();
    }
    var readBytes = new Uint8Array(count);
    for (var i = 0; i < count; i++) {
      readBytes[i] = bits.readBits(8);
    }
    var encoding;
    if (currentCharacterSetECI === null) {
      encoding = StringUtils.guessEncoding(readBytes, hints);
    } else {
      encoding = currentCharacterSetECI.getName();
    }
    try {
      result.append(StringEncoding.decode(readBytes, encoding));
    } catch (ignored) {
      throw new FormatException(ignored);
    }
    byteSegments.push(readBytes);
  };
  DecodedBitStreamParser2.toAlphaNumericChar = function(value) {
    if (value >= DecodedBitStreamParser2.ALPHANUMERIC_CHARS.length) {
      throw new FormatException();
    }
    return DecodedBitStreamParser2.ALPHANUMERIC_CHARS[value];
  };
  DecodedBitStreamParser2.decodeAlphanumericSegment = function(bits, result, count, fc1InEffect) {
    var start = result.length();
    while (count > 1) {
      if (bits.available() < 11) {
        throw new FormatException();
      }
      var nextTwoCharsBits = bits.readBits(11);
      result.append(DecodedBitStreamParser2.toAlphaNumericChar(Math.floor(nextTwoCharsBits / 45)));
      result.append(DecodedBitStreamParser2.toAlphaNumericChar(nextTwoCharsBits % 45));
      count -= 2;
    }
    if (count === 1) {
      if (bits.available() < 6) {
        throw new FormatException();
      }
      result.append(DecodedBitStreamParser2.toAlphaNumericChar(bits.readBits(6)));
    }
    if (fc1InEffect) {
      for (var i = start; i < result.length(); i++) {
        if (result.charAt(i) === "%") {
          if (i < result.length() - 1 && result.charAt(i + 1) === "%") {
            result.deleteCharAt(i + 1);
          } else {
            result.setCharAt(i, String.fromCharCode(29));
          }
        }
      }
    }
  };
  DecodedBitStreamParser2.decodeNumericSegment = function(bits, result, count) {
    while (count >= 3) {
      if (bits.available() < 10) {
        throw new FormatException();
      }
      var threeDigitsBits = bits.readBits(10);
      if (threeDigitsBits >= 1e3) {
        throw new FormatException();
      }
      result.append(DecodedBitStreamParser2.toAlphaNumericChar(Math.floor(threeDigitsBits / 100)));
      result.append(DecodedBitStreamParser2.toAlphaNumericChar(Math.floor(threeDigitsBits / 10) % 10));
      result.append(DecodedBitStreamParser2.toAlphaNumericChar(threeDigitsBits % 10));
      count -= 3;
    }
    if (count === 2) {
      if (bits.available() < 7) {
        throw new FormatException();
      }
      var twoDigitsBits = bits.readBits(7);
      if (twoDigitsBits >= 100) {
        throw new FormatException();
      }
      result.append(DecodedBitStreamParser2.toAlphaNumericChar(Math.floor(twoDigitsBits / 10)));
      result.append(DecodedBitStreamParser2.toAlphaNumericChar(twoDigitsBits % 10));
    } else if (count === 1) {
      if (bits.available() < 4) {
        throw new FormatException();
      }
      var digitBits = bits.readBits(4);
      if (digitBits >= 10) {
        throw new FormatException();
      }
      result.append(DecodedBitStreamParser2.toAlphaNumericChar(digitBits));
    }
  };
  DecodedBitStreamParser2.parseECIValue = function(bits) {
    var firstByte = bits.readBits(8);
    if ((firstByte & 128) === 0) {
      return firstByte & 127;
    }
    if ((firstByte & 192) === 128) {
      var secondByte = bits.readBits(8);
      return (firstByte & 63) << 8 & 4294967295 | secondByte;
    }
    if ((firstByte & 224) === 192) {
      var secondThirdBytes = bits.readBits(16);
      return (firstByte & 31) << 16 & 4294967295 | secondThirdBytes;
    }
    throw new FormatException();
  };
  DecodedBitStreamParser2.ALPHANUMERIC_CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";
  DecodedBitStreamParser2.GB2312_SUBSET = 1;
  return DecodedBitStreamParser2;
}();
var QRCodeDecoderMetaData = function() {
  function QRCodeDecoderMetaData2(mirrored) {
    this.mirrored = mirrored;
  }
  QRCodeDecoderMetaData2.prototype.isMirrored = function() {
    return this.mirrored;
  };
  QRCodeDecoderMetaData2.prototype.applyMirroredCorrection = function(points) {
    if (!this.mirrored || points === null || points.length < 3) {
      return;
    }
    var bottomLeft = points[0];
    points[0] = points[2];
    points[2] = bottomLeft;
  };
  return QRCodeDecoderMetaData2;
}();
var __values$n = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return {value: o && o[i++], done: !o};
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var Decoder$2 = function() {
  function Decoder2() {
    this.rsDecoder = new ReedSolomonDecoder(GenericGF.QR_CODE_FIELD_256);
  }
  Decoder2.prototype.decodeBooleanArray = function(image, hints) {
    return this.decodeBitMatrix(BitMatrix.parseFromBooleanArray(image), hints);
  };
  Decoder2.prototype.decodeBitMatrix = function(bits, hints) {
    var parser = new BitMatrixParser$1(bits);
    var ex = null;
    try {
      return this.decodeBitMatrixParser(parser, hints);
    } catch (e) {
      ex = e;
    }
    try {
      parser.remask();
      parser.setMirror(true);
      parser.readVersion();
      parser.readFormatInformation();
      parser.mirror();
      var result = this.decodeBitMatrixParser(parser, hints);
      result.setOther(new QRCodeDecoderMetaData(true));
      return result;
    } catch (e) {
      if (ex !== null) {
        throw ex;
      }
      throw e;
    }
  };
  Decoder2.prototype.decodeBitMatrixParser = function(parser, hints) {
    var e_1, _a, e_2, _b;
    var version = parser.readVersion();
    var ecLevel = parser.readFormatInformation().getErrorCorrectionLevel();
    var codewords = parser.readCodewords();
    var dataBlocks = DataBlock$1.getDataBlocks(codewords, version, ecLevel);
    var totalBytes = 0;
    try {
      for (var dataBlocks_1 = __values$n(dataBlocks), dataBlocks_1_1 = dataBlocks_1.next(); !dataBlocks_1_1.done; dataBlocks_1_1 = dataBlocks_1.next()) {
        var dataBlock = dataBlocks_1_1.value;
        totalBytes += dataBlock.getNumDataCodewords();
      }
    } catch (e_1_1) {
      e_1 = {error: e_1_1};
    } finally {
      try {
        if (dataBlocks_1_1 && !dataBlocks_1_1.done && (_a = dataBlocks_1.return))
          _a.call(dataBlocks_1);
      } finally {
        if (e_1)
          throw e_1.error;
      }
    }
    var resultBytes = new Uint8Array(totalBytes);
    var resultOffset = 0;
    try {
      for (var dataBlocks_2 = __values$n(dataBlocks), dataBlocks_2_1 = dataBlocks_2.next(); !dataBlocks_2_1.done; dataBlocks_2_1 = dataBlocks_2.next()) {
        var dataBlock = dataBlocks_2_1.value;
        var codewordBytes = dataBlock.getCodewords();
        var numDataCodewords = dataBlock.getNumDataCodewords();
        this.correctErrors(codewordBytes, numDataCodewords);
        for (var i = 0; i < numDataCodewords; i++) {
          resultBytes[resultOffset++] = codewordBytes[i];
        }
      }
    } catch (e_2_1) {
      e_2 = {error: e_2_1};
    } finally {
      try {
        if (dataBlocks_2_1 && !dataBlocks_2_1.done && (_b = dataBlocks_2.return))
          _b.call(dataBlocks_2);
      } finally {
        if (e_2)
          throw e_2.error;
      }
    }
    return DecodedBitStreamParser$1.decode(resultBytes, version, ecLevel, hints);
  };
  Decoder2.prototype.correctErrors = function(codewordBytes, numDataCodewords) {
    var codewordsInts = new Int32Array(codewordBytes);
    try {
      this.rsDecoder.decode(codewordsInts, codewordBytes.length - numDataCodewords);
    } catch (ignored) {
      throw new ChecksumException();
    }
    for (var i = 0; i < numDataCodewords; i++) {
      codewordBytes[i] = codewordsInts[i];
    }
  };
  return Decoder2;
}();
var __extends$P = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (b2.hasOwnProperty(p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var AlignmentPattern = function(_super) {
  __extends$P(AlignmentPattern2, _super);
  function AlignmentPattern2(posX, posY, estimatedModuleSize) {
    var _this = _super.call(this, posX, posY) || this;
    _this.estimatedModuleSize = estimatedModuleSize;
    return _this;
  }
  AlignmentPattern2.prototype.aboutEquals = function(moduleSize, i, j) {
    if (Math.abs(i - this.getY()) <= moduleSize && Math.abs(j - this.getX()) <= moduleSize) {
      var moduleSizeDiff = Math.abs(moduleSize - this.estimatedModuleSize);
      return moduleSizeDiff <= 1 || moduleSizeDiff <= this.estimatedModuleSize;
    }
    return false;
  };
  AlignmentPattern2.prototype.combineEstimate = function(i, j, newModuleSize) {
    var combinedX = (this.getX() + j) / 2;
    var combinedY = (this.getY() + i) / 2;
    var combinedModuleSize = (this.estimatedModuleSize + newModuleSize) / 2;
    return new AlignmentPattern2(combinedX, combinedY, combinedModuleSize);
  };
  return AlignmentPattern2;
}(ResultPoint);
var __values$o = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return {value: o && o[i++], done: !o};
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var AlignmentPatternFinder = function() {
  function AlignmentPatternFinder2(image, startX, startY, width, height, moduleSize, resultPointCallback) {
    this.image = image;
    this.startX = startX;
    this.startY = startY;
    this.width = width;
    this.height = height;
    this.moduleSize = moduleSize;
    this.resultPointCallback = resultPointCallback;
    this.possibleCenters = [];
    this.crossCheckStateCount = new Int32Array(3);
  }
  AlignmentPatternFinder2.prototype.find = function() {
    var startX = this.startX;
    var height = this.height;
    var width = this.width;
    var maxJ = startX + width;
    var middleI = this.startY + height / 2;
    var stateCount = new Int32Array(3);
    var image = this.image;
    for (var iGen = 0; iGen < height; iGen++) {
      var i = middleI + ((iGen & 1) === 0 ? Math.floor((iGen + 1) / 2) : -Math.floor((iGen + 1) / 2));
      stateCount[0] = 0;
      stateCount[1] = 0;
      stateCount[2] = 0;
      var j = startX;
      while (j < maxJ && !image.get(j, i)) {
        j++;
      }
      var currentState = 0;
      while (j < maxJ) {
        if (image.get(j, i)) {
          if (currentState === 1) {
            stateCount[1]++;
          } else {
            if (currentState === 2) {
              if (this.foundPatternCross(stateCount)) {
                var confirmed = this.handlePossibleCenter(stateCount, i, j);
                if (confirmed !== null) {
                  return confirmed;
                }
              }
              stateCount[0] = stateCount[2];
              stateCount[1] = 1;
              stateCount[2] = 0;
              currentState = 1;
            } else {
              stateCount[++currentState]++;
            }
          }
        } else {
          if (currentState === 1) {
            currentState++;
          }
          stateCount[currentState]++;
        }
        j++;
      }
      if (this.foundPatternCross(stateCount)) {
        var confirmed = this.handlePossibleCenter(stateCount, i, maxJ);
        if (confirmed !== null) {
          return confirmed;
        }
      }
    }
    if (this.possibleCenters.length !== 0) {
      return this.possibleCenters[0];
    }
    throw new NotFoundException();
  };
  AlignmentPatternFinder2.centerFromEnd = function(stateCount, end) {
    return end - stateCount[2] - stateCount[1] / 2;
  };
  AlignmentPatternFinder2.prototype.foundPatternCross = function(stateCount) {
    var moduleSize = this.moduleSize;
    var maxVariance = moduleSize / 2;
    for (var i = 0; i < 3; i++) {
      if (Math.abs(moduleSize - stateCount[i]) >= maxVariance) {
        return false;
      }
    }
    return true;
  };
  AlignmentPatternFinder2.prototype.crossCheckVertical = function(startI, centerJ, maxCount, originalStateCountTotal) {
    var image = this.image;
    var maxI = image.getHeight();
    var stateCount = this.crossCheckStateCount;
    stateCount[0] = 0;
    stateCount[1] = 0;
    stateCount[2] = 0;
    var i = startI;
    while (i >= 0 && image.get(centerJ, i) && stateCount[1] <= maxCount) {
      stateCount[1]++;
      i--;
    }
    if (i < 0 || stateCount[1] > maxCount) {
      return NaN;
    }
    while (i >= 0 && !image.get(centerJ, i) && stateCount[0] <= maxCount) {
      stateCount[0]++;
      i--;
    }
    if (stateCount[0] > maxCount) {
      return NaN;
    }
    i = startI + 1;
    while (i < maxI && image.get(centerJ, i) && stateCount[1] <= maxCount) {
      stateCount[1]++;
      i++;
    }
    if (i === maxI || stateCount[1] > maxCount) {
      return NaN;
    }
    while (i < maxI && !image.get(centerJ, i) && stateCount[2] <= maxCount) {
      stateCount[2]++;
      i++;
    }
    if (stateCount[2] > maxCount) {
      return NaN;
    }
    var stateCountTotal = stateCount[0] + stateCount[1] + stateCount[2];
    if (5 * Math.abs(stateCountTotal - originalStateCountTotal) >= 2 * originalStateCountTotal) {
      return NaN;
    }
    return this.foundPatternCross(stateCount) ? AlignmentPatternFinder2.centerFromEnd(stateCount, i) : NaN;
  };
  AlignmentPatternFinder2.prototype.handlePossibleCenter = function(stateCount, i, j) {
    var e_1, _a;
    var stateCountTotal = stateCount[0] + stateCount[1] + stateCount[2];
    var centerJ = AlignmentPatternFinder2.centerFromEnd(stateCount, j);
    var centerI = this.crossCheckVertical(i, centerJ, 2 * stateCount[1], stateCountTotal);
    if (!isNaN(centerI)) {
      var estimatedModuleSize = (stateCount[0] + stateCount[1] + stateCount[2]) / 3;
      try {
        for (var _b = __values$o(this.possibleCenters), _c = _b.next(); !_c.done; _c = _b.next()) {
          var center = _c.value;
          if (center.aboutEquals(estimatedModuleSize, centerI, centerJ)) {
            return center.combineEstimate(centerI, centerJ, estimatedModuleSize);
          }
        }
      } catch (e_1_1) {
        e_1 = {error: e_1_1};
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return))
            _a.call(_b);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
      var point = new AlignmentPattern(centerJ, centerI, estimatedModuleSize);
      this.possibleCenters.push(point);
      if (this.resultPointCallback !== null && this.resultPointCallback !== void 0) {
        this.resultPointCallback.foundPossibleResultPoint(point);
      }
    }
    return null;
  };
  return AlignmentPatternFinder2;
}();
var __extends$Q = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (b2.hasOwnProperty(p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var FinderPattern$1 = function(_super) {
  __extends$Q(FinderPattern2, _super);
  function FinderPattern2(posX, posY, estimatedModuleSize, count) {
    var _this = _super.call(this, posX, posY) || this;
    _this.estimatedModuleSize = estimatedModuleSize;
    _this.count = count;
    if (count === void 0) {
      _this.count = 1;
    }
    return _this;
  }
  FinderPattern2.prototype.getEstimatedModuleSize = function() {
    return this.estimatedModuleSize;
  };
  FinderPattern2.prototype.getCount = function() {
    return this.count;
  };
  FinderPattern2.prototype.aboutEquals = function(moduleSize, i, j) {
    if (Math.abs(i - this.getY()) <= moduleSize && Math.abs(j - this.getX()) <= moduleSize) {
      var moduleSizeDiff = Math.abs(moduleSize - this.estimatedModuleSize);
      return moduleSizeDiff <= 1 || moduleSizeDiff <= this.estimatedModuleSize;
    }
    return false;
  };
  FinderPattern2.prototype.combineEstimate = function(i, j, newModuleSize) {
    var combinedCount = this.count + 1;
    var combinedX = (this.count * this.getX() + j) / combinedCount;
    var combinedY = (this.count * this.getY() + i) / combinedCount;
    var combinedModuleSize = (this.count * this.estimatedModuleSize + newModuleSize) / combinedCount;
    return new FinderPattern2(combinedX, combinedY, combinedModuleSize, combinedCount);
  };
  return FinderPattern2;
}(ResultPoint);
var FinderPatternInfo = function() {
  function FinderPatternInfo2(patternCenters) {
    this.bottomLeft = patternCenters[0];
    this.topLeft = patternCenters[1];
    this.topRight = patternCenters[2];
  }
  FinderPatternInfo2.prototype.getBottomLeft = function() {
    return this.bottomLeft;
  };
  FinderPatternInfo2.prototype.getTopLeft = function() {
    return this.topLeft;
  };
  FinderPatternInfo2.prototype.getTopRight = function() {
    return this.topRight;
  };
  return FinderPatternInfo2;
}();
var __values$p = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return {value: o && o[i++], done: !o};
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var FinderPatternFinder = function() {
  function FinderPatternFinder2(image, resultPointCallback) {
    this.image = image;
    this.resultPointCallback = resultPointCallback;
    this.possibleCenters = [];
    this.crossCheckStateCount = new Int32Array(5);
    this.resultPointCallback = resultPointCallback;
  }
  FinderPatternFinder2.prototype.getImage = function() {
    return this.image;
  };
  FinderPatternFinder2.prototype.getPossibleCenters = function() {
    return this.possibleCenters;
  };
  FinderPatternFinder2.prototype.find = function(hints) {
    var tryHarder = hints !== null && hints !== void 0 && hints.get(DecodeHintType$1.TRY_HARDER) !== void 0;
    var pureBarcode = hints !== null && hints !== void 0 && hints.get(DecodeHintType$1.PURE_BARCODE) !== void 0;
    var image = this.image;
    var maxI = image.getHeight();
    var maxJ = image.getWidth();
    var iSkip = Math.floor(3 * maxI / (4 * FinderPatternFinder2.MAX_MODULES));
    if (iSkip < FinderPatternFinder2.MIN_SKIP || tryHarder) {
      iSkip = FinderPatternFinder2.MIN_SKIP;
    }
    var done = false;
    var stateCount = new Int32Array(5);
    for (var i = iSkip - 1; i < maxI && !done; i += iSkip) {
      stateCount[0] = 0;
      stateCount[1] = 0;
      stateCount[2] = 0;
      stateCount[3] = 0;
      stateCount[4] = 0;
      var currentState = 0;
      for (var j = 0; j < maxJ; j++) {
        if (image.get(j, i)) {
          if ((currentState & 1) === 1) {
            currentState++;
          }
          stateCount[currentState]++;
        } else {
          if ((currentState & 1) === 0) {
            if (currentState === 4) {
              if (FinderPatternFinder2.foundPatternCross(stateCount)) {
                var confirmed = this.handlePossibleCenter(stateCount, i, j, pureBarcode);
                if (confirmed === true) {
                  iSkip = 2;
                  if (this.hasSkipped === true) {
                    done = this.haveMultiplyConfirmedCenters();
                  } else {
                    var rowSkip = this.findRowSkip();
                    if (rowSkip > stateCount[2]) {
                      i += rowSkip - stateCount[2] - iSkip;
                      j = maxJ - 1;
                    }
                  }
                } else {
                  stateCount[0] = stateCount[2];
                  stateCount[1] = stateCount[3];
                  stateCount[2] = stateCount[4];
                  stateCount[3] = 1;
                  stateCount[4] = 0;
                  currentState = 3;
                  continue;
                }
                currentState = 0;
                stateCount[0] = 0;
                stateCount[1] = 0;
                stateCount[2] = 0;
                stateCount[3] = 0;
                stateCount[4] = 0;
              } else {
                stateCount[0] = stateCount[2];
                stateCount[1] = stateCount[3];
                stateCount[2] = stateCount[4];
                stateCount[3] = 1;
                stateCount[4] = 0;
                currentState = 3;
              }
            } else {
              stateCount[++currentState]++;
            }
          } else {
            stateCount[currentState]++;
          }
        }
      }
      if (FinderPatternFinder2.foundPatternCross(stateCount)) {
        var confirmed = this.handlePossibleCenter(stateCount, i, maxJ, pureBarcode);
        if (confirmed === true) {
          iSkip = stateCount[0];
          if (this.hasSkipped) {
            done = this.haveMultiplyConfirmedCenters();
          }
        }
      }
    }
    var patternInfo = this.selectBestPatterns();
    ResultPoint.orderBestPatterns(patternInfo);
    return new FinderPatternInfo(patternInfo);
  };
  FinderPatternFinder2.centerFromEnd = function(stateCount, end) {
    return end - stateCount[4] - stateCount[3] - stateCount[2] / 2;
  };
  FinderPatternFinder2.foundPatternCross = function(stateCount) {
    var totalModuleSize = 0;
    for (var i = 0; i < 5; i++) {
      var count = stateCount[i];
      if (count === 0) {
        return false;
      }
      totalModuleSize += count;
    }
    if (totalModuleSize < 7) {
      return false;
    }
    var moduleSize = totalModuleSize / 7;
    var maxVariance = moduleSize / 2;
    return Math.abs(moduleSize - stateCount[0]) < maxVariance && Math.abs(moduleSize - stateCount[1]) < maxVariance && Math.abs(3 * moduleSize - stateCount[2]) < 3 * maxVariance && Math.abs(moduleSize - stateCount[3]) < maxVariance && Math.abs(moduleSize - stateCount[4]) < maxVariance;
  };
  FinderPatternFinder2.prototype.getCrossCheckStateCount = function() {
    var crossCheckStateCount = this.crossCheckStateCount;
    crossCheckStateCount[0] = 0;
    crossCheckStateCount[1] = 0;
    crossCheckStateCount[2] = 0;
    crossCheckStateCount[3] = 0;
    crossCheckStateCount[4] = 0;
    return crossCheckStateCount;
  };
  FinderPatternFinder2.prototype.crossCheckDiagonal = function(startI, centerJ, maxCount, originalStateCountTotal) {
    var stateCount = this.getCrossCheckStateCount();
    var i = 0;
    var image = this.image;
    while (startI >= i && centerJ >= i && image.get(centerJ - i, startI - i)) {
      stateCount[2]++;
      i++;
    }
    if (startI < i || centerJ < i) {
      return false;
    }
    while (startI >= i && centerJ >= i && !image.get(centerJ - i, startI - i) && stateCount[1] <= maxCount) {
      stateCount[1]++;
      i++;
    }
    if (startI < i || centerJ < i || stateCount[1] > maxCount) {
      return false;
    }
    while (startI >= i && centerJ >= i && image.get(centerJ - i, startI - i) && stateCount[0] <= maxCount) {
      stateCount[0]++;
      i++;
    }
    if (stateCount[0] > maxCount) {
      return false;
    }
    var maxI = image.getHeight();
    var maxJ = image.getWidth();
    i = 1;
    while (startI + i < maxI && centerJ + i < maxJ && image.get(centerJ + i, startI + i)) {
      stateCount[2]++;
      i++;
    }
    if (startI + i >= maxI || centerJ + i >= maxJ) {
      return false;
    }
    while (startI + i < maxI && centerJ + i < maxJ && !image.get(centerJ + i, startI + i) && stateCount[3] < maxCount) {
      stateCount[3]++;
      i++;
    }
    if (startI + i >= maxI || centerJ + i >= maxJ || stateCount[3] >= maxCount) {
      return false;
    }
    while (startI + i < maxI && centerJ + i < maxJ && image.get(centerJ + i, startI + i) && stateCount[4] < maxCount) {
      stateCount[4]++;
      i++;
    }
    if (stateCount[4] >= maxCount) {
      return false;
    }
    var stateCountTotal = stateCount[0] + stateCount[1] + stateCount[2] + stateCount[3] + stateCount[4];
    return Math.abs(stateCountTotal - originalStateCountTotal) < 2 * originalStateCountTotal && FinderPatternFinder2.foundPatternCross(stateCount);
  };
  FinderPatternFinder2.prototype.crossCheckVertical = function(startI, centerJ, maxCount, originalStateCountTotal) {
    var image = this.image;
    var maxI = image.getHeight();
    var stateCount = this.getCrossCheckStateCount();
    var i = startI;
    while (i >= 0 && image.get(centerJ, i)) {
      stateCount[2]++;
      i--;
    }
    if (i < 0) {
      return NaN;
    }
    while (i >= 0 && !image.get(centerJ, i) && stateCount[1] <= maxCount) {
      stateCount[1]++;
      i--;
    }
    if (i < 0 || stateCount[1] > maxCount) {
      return NaN;
    }
    while (i >= 0 && image.get(centerJ, i) && stateCount[0] <= maxCount) {
      stateCount[0]++;
      i--;
    }
    if (stateCount[0] > maxCount) {
      return NaN;
    }
    i = startI + 1;
    while (i < maxI && image.get(centerJ, i)) {
      stateCount[2]++;
      i++;
    }
    if (i === maxI) {
      return NaN;
    }
    while (i < maxI && !image.get(centerJ, i) && stateCount[3] < maxCount) {
      stateCount[3]++;
      i++;
    }
    if (i === maxI || stateCount[3] >= maxCount) {
      return NaN;
    }
    while (i < maxI && image.get(centerJ, i) && stateCount[4] < maxCount) {
      stateCount[4]++;
      i++;
    }
    if (stateCount[4] >= maxCount) {
      return NaN;
    }
    var stateCountTotal = stateCount[0] + stateCount[1] + stateCount[2] + stateCount[3] + stateCount[4];
    if (5 * Math.abs(stateCountTotal - originalStateCountTotal) >= 2 * originalStateCountTotal) {
      return NaN;
    }
    return FinderPatternFinder2.foundPatternCross(stateCount) ? FinderPatternFinder2.centerFromEnd(stateCount, i) : NaN;
  };
  FinderPatternFinder2.prototype.crossCheckHorizontal = function(startJ, centerI, maxCount, originalStateCountTotal) {
    var image = this.image;
    var maxJ = image.getWidth();
    var stateCount = this.getCrossCheckStateCount();
    var j = startJ;
    while (j >= 0 && image.get(j, centerI)) {
      stateCount[2]++;
      j--;
    }
    if (j < 0) {
      return NaN;
    }
    while (j >= 0 && !image.get(j, centerI) && stateCount[1] <= maxCount) {
      stateCount[1]++;
      j--;
    }
    if (j < 0 || stateCount[1] > maxCount) {
      return NaN;
    }
    while (j >= 0 && image.get(j, centerI) && stateCount[0] <= maxCount) {
      stateCount[0]++;
      j--;
    }
    if (stateCount[0] > maxCount) {
      return NaN;
    }
    j = startJ + 1;
    while (j < maxJ && image.get(j, centerI)) {
      stateCount[2]++;
      j++;
    }
    if (j === maxJ) {
      return NaN;
    }
    while (j < maxJ && !image.get(j, centerI) && stateCount[3] < maxCount) {
      stateCount[3]++;
      j++;
    }
    if (j === maxJ || stateCount[3] >= maxCount) {
      return NaN;
    }
    while (j < maxJ && image.get(j, centerI) && stateCount[4] < maxCount) {
      stateCount[4]++;
      j++;
    }
    if (stateCount[4] >= maxCount) {
      return NaN;
    }
    var stateCountTotal = stateCount[0] + stateCount[1] + stateCount[2] + stateCount[3] + stateCount[4];
    if (5 * Math.abs(stateCountTotal - originalStateCountTotal) >= originalStateCountTotal) {
      return NaN;
    }
    return FinderPatternFinder2.foundPatternCross(stateCount) ? FinderPatternFinder2.centerFromEnd(stateCount, j) : NaN;
  };
  FinderPatternFinder2.prototype.handlePossibleCenter = function(stateCount, i, j, pureBarcode) {
    var stateCountTotal = stateCount[0] + stateCount[1] + stateCount[2] + stateCount[3] + stateCount[4];
    var centerJ = FinderPatternFinder2.centerFromEnd(stateCount, j);
    var centerI = this.crossCheckVertical(i, Math.floor(centerJ), stateCount[2], stateCountTotal);
    if (!isNaN(centerI)) {
      centerJ = this.crossCheckHorizontal(Math.floor(centerJ), Math.floor(centerI), stateCount[2], stateCountTotal);
      if (!isNaN(centerJ) && (!pureBarcode || this.crossCheckDiagonal(Math.floor(centerI), Math.floor(centerJ), stateCount[2], stateCountTotal))) {
        var estimatedModuleSize = stateCountTotal / 7;
        var found = false;
        var possibleCenters = this.possibleCenters;
        for (var index = 0, length_1 = possibleCenters.length; index < length_1; index++) {
          var center = possibleCenters[index];
          if (center.aboutEquals(estimatedModuleSize, centerI, centerJ)) {
            possibleCenters[index] = center.combineEstimate(centerI, centerJ, estimatedModuleSize);
            found = true;
            break;
          }
        }
        if (!found) {
          var point = new FinderPattern$1(centerJ, centerI, estimatedModuleSize);
          possibleCenters.push(point);
          if (this.resultPointCallback !== null && this.resultPointCallback !== void 0) {
            this.resultPointCallback.foundPossibleResultPoint(point);
          }
        }
        return true;
      }
    }
    return false;
  };
  FinderPatternFinder2.prototype.findRowSkip = function() {
    var e_1, _a;
    var max = this.possibleCenters.length;
    if (max <= 1) {
      return 0;
    }
    var firstConfirmedCenter = null;
    try {
      for (var _b = __values$p(this.possibleCenters), _c = _b.next(); !_c.done; _c = _b.next()) {
        var center = _c.value;
        if (center.getCount() >= FinderPatternFinder2.CENTER_QUORUM) {
          if (firstConfirmedCenter == null) {
            firstConfirmedCenter = center;
          } else {
            this.hasSkipped = true;
            return Math.floor((Math.abs(firstConfirmedCenter.getX() - center.getX()) - Math.abs(firstConfirmedCenter.getY() - center.getY())) / 2);
          }
        }
      }
    } catch (e_1_1) {
      e_1 = {error: e_1_1};
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return))
          _a.call(_b);
      } finally {
        if (e_1)
          throw e_1.error;
      }
    }
    return 0;
  };
  FinderPatternFinder2.prototype.haveMultiplyConfirmedCenters = function() {
    var e_2, _a, e_3, _b;
    var confirmedCount = 0;
    var totalModuleSize = 0;
    var max = this.possibleCenters.length;
    try {
      for (var _c = __values$p(this.possibleCenters), _d = _c.next(); !_d.done; _d = _c.next()) {
        var pattern = _d.value;
        if (pattern.getCount() >= FinderPatternFinder2.CENTER_QUORUM) {
          confirmedCount++;
          totalModuleSize += pattern.getEstimatedModuleSize();
        }
      }
    } catch (e_2_1) {
      e_2 = {error: e_2_1};
    } finally {
      try {
        if (_d && !_d.done && (_a = _c.return))
          _a.call(_c);
      } finally {
        if (e_2)
          throw e_2.error;
      }
    }
    if (confirmedCount < 3) {
      return false;
    }
    var average = totalModuleSize / max;
    var totalDeviation = 0;
    try {
      for (var _e = __values$p(this.possibleCenters), _f = _e.next(); !_f.done; _f = _e.next()) {
        var pattern = _f.value;
        totalDeviation += Math.abs(pattern.getEstimatedModuleSize() - average);
      }
    } catch (e_3_1) {
      e_3 = {error: e_3_1};
    } finally {
      try {
        if (_f && !_f.done && (_b = _e.return))
          _b.call(_e);
      } finally {
        if (e_3)
          throw e_3.error;
      }
    }
    return totalDeviation <= 0.05 * totalModuleSize;
  };
  FinderPatternFinder2.prototype.selectBestPatterns = function() {
    var e_4, _a, e_5, _b;
    var startSize = this.possibleCenters.length;
    if (startSize < 3) {
      throw new NotFoundException();
    }
    var possibleCenters = this.possibleCenters;
    var average;
    if (startSize > 3) {
      var totalModuleSize = 0;
      var square = 0;
      try {
        for (var _c = __values$p(this.possibleCenters), _d = _c.next(); !_d.done; _d = _c.next()) {
          var center = _d.value;
          var size = center.getEstimatedModuleSize();
          totalModuleSize += size;
          square += size * size;
        }
      } catch (e_4_1) {
        e_4 = {error: e_4_1};
      } finally {
        try {
          if (_d && !_d.done && (_a = _c.return))
            _a.call(_c);
        } finally {
          if (e_4)
            throw e_4.error;
        }
      }
      average = totalModuleSize / startSize;
      var stdDev = Math.sqrt(square / startSize - average * average);
      possibleCenters.sort(function(center1, center2) {
        var dA = Math.abs(center2.getEstimatedModuleSize() - average);
        var dB = Math.abs(center1.getEstimatedModuleSize() - average);
        return dA < dB ? -1 : dA > dB ? 1 : 0;
      });
      var limit = Math.max(0.2 * average, stdDev);
      for (var i = 0; i < possibleCenters.length && possibleCenters.length > 3; i++) {
        var pattern = possibleCenters[i];
        if (Math.abs(pattern.getEstimatedModuleSize() - average) > limit) {
          possibleCenters.splice(i, 1);
          i--;
        }
      }
    }
    if (possibleCenters.length > 3) {
      var totalModuleSize = 0;
      try {
        for (var possibleCenters_1 = __values$p(possibleCenters), possibleCenters_1_1 = possibleCenters_1.next(); !possibleCenters_1_1.done; possibleCenters_1_1 = possibleCenters_1.next()) {
          var possibleCenter = possibleCenters_1_1.value;
          totalModuleSize += possibleCenter.getEstimatedModuleSize();
        }
      } catch (e_5_1) {
        e_5 = {error: e_5_1};
      } finally {
        try {
          if (possibleCenters_1_1 && !possibleCenters_1_1.done && (_b = possibleCenters_1.return))
            _b.call(possibleCenters_1);
        } finally {
          if (e_5)
            throw e_5.error;
        }
      }
      average = totalModuleSize / possibleCenters.length;
      possibleCenters.sort(function(center1, center2) {
        if (center2.getCount() === center1.getCount()) {
          var dA = Math.abs(center2.getEstimatedModuleSize() - average);
          var dB = Math.abs(center1.getEstimatedModuleSize() - average);
          return dA < dB ? 1 : dA > dB ? -1 : 0;
        } else {
          return center2.getCount() - center1.getCount();
        }
      });
      possibleCenters.splice(3);
    }
    return [
      possibleCenters[0],
      possibleCenters[1],
      possibleCenters[2]
    ];
  };
  FinderPatternFinder2.CENTER_QUORUM = 2;
  FinderPatternFinder2.MIN_SKIP = 3;
  FinderPatternFinder2.MAX_MODULES = 57;
  return FinderPatternFinder2;
}();
var Detector$2 = function() {
  function Detector2(image) {
    this.image = image;
  }
  Detector2.prototype.getImage = function() {
    return this.image;
  };
  Detector2.prototype.getResultPointCallback = function() {
    return this.resultPointCallback;
  };
  Detector2.prototype.detect = function(hints) {
    this.resultPointCallback = hints === null || hints === void 0 ? null : hints.get(DecodeHintType$1.NEED_RESULT_POINT_CALLBACK);
    var finder = new FinderPatternFinder(this.image, this.resultPointCallback);
    var info = finder.find(hints);
    return this.processFinderPatternInfo(info);
  };
  Detector2.prototype.processFinderPatternInfo = function(info) {
    var topLeft = info.getTopLeft();
    var topRight = info.getTopRight();
    var bottomLeft = info.getBottomLeft();
    var moduleSize = this.calculateModuleSize(topLeft, topRight, bottomLeft);
    if (moduleSize < 1) {
      throw new NotFoundException("No pattern found in proccess finder.");
    }
    var dimension = Detector2.computeDimension(topLeft, topRight, bottomLeft, moduleSize);
    var provisionalVersion = Version$1.getProvisionalVersionForDimension(dimension);
    var modulesBetweenFPCenters = provisionalVersion.getDimensionForVersion() - 7;
    var alignmentPattern = null;
    if (provisionalVersion.getAlignmentPatternCenters().length > 0) {
      var bottomRightX = topRight.getX() - topLeft.getX() + bottomLeft.getX();
      var bottomRightY = topRight.getY() - topLeft.getY() + bottomLeft.getY();
      var correctionToTopLeft = 1 - 3 / modulesBetweenFPCenters;
      var estAlignmentX = Math.floor(topLeft.getX() + correctionToTopLeft * (bottomRightX - topLeft.getX()));
      var estAlignmentY = Math.floor(topLeft.getY() + correctionToTopLeft * (bottomRightY - topLeft.getY()));
      for (var i = 4; i <= 16; i <<= 1) {
        try {
          alignmentPattern = this.findAlignmentInRegion(moduleSize, estAlignmentX, estAlignmentY, i);
          break;
        } catch (re) {
          if (!(re instanceof NotFoundException)) {
            throw re;
          }
        }
      }
    }
    var transform = Detector2.createTransform(topLeft, topRight, bottomLeft, alignmentPattern, dimension);
    var bits = Detector2.sampleGrid(this.image, transform, dimension);
    var points;
    if (alignmentPattern === null) {
      points = [bottomLeft, topLeft, topRight];
    } else {
      points = [bottomLeft, topLeft, topRight, alignmentPattern];
    }
    return new DetectorResult(bits, points);
  };
  Detector2.createTransform = function(topLeft, topRight, bottomLeft, alignmentPattern, dimension) {
    var dimMinusThree = dimension - 3.5;
    var bottomRightX;
    var bottomRightY;
    var sourceBottomRightX;
    var sourceBottomRightY;
    if (alignmentPattern !== null) {
      bottomRightX = alignmentPattern.getX();
      bottomRightY = alignmentPattern.getY();
      sourceBottomRightX = dimMinusThree - 3;
      sourceBottomRightY = sourceBottomRightX;
    } else {
      bottomRightX = topRight.getX() - topLeft.getX() + bottomLeft.getX();
      bottomRightY = topRight.getY() - topLeft.getY() + bottomLeft.getY();
      sourceBottomRightX = dimMinusThree;
      sourceBottomRightY = dimMinusThree;
    }
    return PerspectiveTransform.quadrilateralToQuadrilateral(3.5, 3.5, dimMinusThree, 3.5, sourceBottomRightX, sourceBottomRightY, 3.5, dimMinusThree, topLeft.getX(), topLeft.getY(), topRight.getX(), topRight.getY(), bottomRightX, bottomRightY, bottomLeft.getX(), bottomLeft.getY());
  };
  Detector2.sampleGrid = function(image, transform, dimension) {
    var sampler = GridSamplerInstance.getInstance();
    return sampler.sampleGridWithTransform(image, dimension, dimension, transform);
  };
  Detector2.computeDimension = function(topLeft, topRight, bottomLeft, moduleSize) {
    var tltrCentersDimension = MathUtils.round(ResultPoint.distance(topLeft, topRight) / moduleSize);
    var tlblCentersDimension = MathUtils.round(ResultPoint.distance(topLeft, bottomLeft) / moduleSize);
    var dimension = Math.floor((tltrCentersDimension + tlblCentersDimension) / 2) + 7;
    switch (dimension & 3) {
      case 0:
        dimension++;
        break;
      case 2:
        dimension--;
        break;
      case 3:
        throw new NotFoundException("Dimensions could be not found.");
    }
    return dimension;
  };
  Detector2.prototype.calculateModuleSize = function(topLeft, topRight, bottomLeft) {
    return (this.calculateModuleSizeOneWay(topLeft, topRight) + this.calculateModuleSizeOneWay(topLeft, bottomLeft)) / 2;
  };
  Detector2.prototype.calculateModuleSizeOneWay = function(pattern, otherPattern) {
    var moduleSizeEst1 = this.sizeOfBlackWhiteBlackRunBothWays(Math.floor(pattern.getX()), Math.floor(pattern.getY()), Math.floor(otherPattern.getX()), Math.floor(otherPattern.getY()));
    var moduleSizeEst2 = this.sizeOfBlackWhiteBlackRunBothWays(Math.floor(otherPattern.getX()), Math.floor(otherPattern.getY()), Math.floor(pattern.getX()), Math.floor(pattern.getY()));
    if (isNaN(moduleSizeEst1)) {
      return moduleSizeEst2 / 7;
    }
    if (isNaN(moduleSizeEst2)) {
      return moduleSizeEst1 / 7;
    }
    return (moduleSizeEst1 + moduleSizeEst2) / 14;
  };
  Detector2.prototype.sizeOfBlackWhiteBlackRunBothWays = function(fromX, fromY, toX, toY) {
    var result = this.sizeOfBlackWhiteBlackRun(fromX, fromY, toX, toY);
    var scale = 1;
    var otherToX = fromX - (toX - fromX);
    if (otherToX < 0) {
      scale = fromX / (fromX - otherToX);
      otherToX = 0;
    } else if (otherToX >= this.image.getWidth()) {
      scale = (this.image.getWidth() - 1 - fromX) / (otherToX - fromX);
      otherToX = this.image.getWidth() - 1;
    }
    var otherToY = Math.floor(fromY - (toY - fromY) * scale);
    scale = 1;
    if (otherToY < 0) {
      scale = fromY / (fromY - otherToY);
      otherToY = 0;
    } else if (otherToY >= this.image.getHeight()) {
      scale = (this.image.getHeight() - 1 - fromY) / (otherToY - fromY);
      otherToY = this.image.getHeight() - 1;
    }
    otherToX = Math.floor(fromX + (otherToX - fromX) * scale);
    result += this.sizeOfBlackWhiteBlackRun(fromX, fromY, otherToX, otherToY);
    return result - 1;
  };
  Detector2.prototype.sizeOfBlackWhiteBlackRun = function(fromX, fromY, toX, toY) {
    var steep = Math.abs(toY - fromY) > Math.abs(toX - fromX);
    if (steep) {
      var temp = fromX;
      fromX = fromY;
      fromY = temp;
      temp = toX;
      toX = toY;
      toY = temp;
    }
    var dx = Math.abs(toX - fromX);
    var dy = Math.abs(toY - fromY);
    var error = -dx / 2;
    var xstep = fromX < toX ? 1 : -1;
    var ystep = fromY < toY ? 1 : -1;
    var state = 0;
    var xLimit = toX + xstep;
    for (var x = fromX, y = fromY; x !== xLimit; x += xstep) {
      var realX = steep ? y : x;
      var realY = steep ? x : y;
      if (state === 1 === this.image.get(realX, realY)) {
        if (state === 2) {
          return MathUtils.distance(x, y, fromX, fromY);
        }
        state++;
      }
      error += dy;
      if (error > 0) {
        if (y === toY) {
          break;
        }
        y += ystep;
        error -= dx;
      }
    }
    if (state === 2) {
      return MathUtils.distance(toX + xstep, toY, fromX, fromY);
    }
    return NaN;
  };
  Detector2.prototype.findAlignmentInRegion = function(overallEstModuleSize, estAlignmentX, estAlignmentY, allowanceFactor) {
    var allowance = Math.floor(allowanceFactor * overallEstModuleSize);
    var alignmentAreaLeftX = Math.max(0, estAlignmentX - allowance);
    var alignmentAreaRightX = Math.min(this.image.getWidth() - 1, estAlignmentX + allowance);
    if (alignmentAreaRightX - alignmentAreaLeftX < overallEstModuleSize * 3) {
      throw new NotFoundException("Alignment top exceeds estimated module size.");
    }
    var alignmentAreaTopY = Math.max(0, estAlignmentY - allowance);
    var alignmentAreaBottomY = Math.min(this.image.getHeight() - 1, estAlignmentY + allowance);
    if (alignmentAreaBottomY - alignmentAreaTopY < overallEstModuleSize * 3) {
      throw new NotFoundException("Alignment bottom exceeds estimated module size.");
    }
    var alignmentFinder = new AlignmentPatternFinder(this.image, alignmentAreaLeftX, alignmentAreaTopY, alignmentAreaRightX - alignmentAreaLeftX, alignmentAreaBottomY - alignmentAreaTopY, overallEstModuleSize, this.resultPointCallback);
    return alignmentFinder.find();
  };
  return Detector2;
}();
var QRCodeReader = function() {
  function QRCodeReader2() {
    this.decoder = new Decoder$2();
  }
  QRCodeReader2.prototype.getDecoder = function() {
    return this.decoder;
  };
  QRCodeReader2.prototype.decode = function(image, hints) {
    var decoderResult;
    var points;
    if (hints !== void 0 && hints !== null && hints.get(DecodeHintType$1.PURE_BARCODE) !== void 0) {
      var bits = QRCodeReader2.extractPureBits(image.getBlackMatrix());
      decoderResult = this.decoder.decodeBitMatrix(bits, hints);
      points = QRCodeReader2.NO_POINTS;
    } else {
      var detectorResult = new Detector$2(image.getBlackMatrix()).detect(hints);
      decoderResult = this.decoder.decodeBitMatrix(detectorResult.getBits(), hints);
      points = detectorResult.getPoints();
    }
    if (decoderResult.getOther() instanceof QRCodeDecoderMetaData) {
      decoderResult.getOther().applyMirroredCorrection(points);
    }
    var result = new Result(decoderResult.getText(), decoderResult.getRawBytes(), void 0, points, BarcodeFormat$1.QR_CODE, void 0);
    var byteSegments = decoderResult.getByteSegments();
    if (byteSegments !== null) {
      result.putMetadata(ResultMetadataType$1.BYTE_SEGMENTS, byteSegments);
    }
    var ecLevel = decoderResult.getECLevel();
    if (ecLevel !== null) {
      result.putMetadata(ResultMetadataType$1.ERROR_CORRECTION_LEVEL, ecLevel);
    }
    if (decoderResult.hasStructuredAppend()) {
      result.putMetadata(ResultMetadataType$1.STRUCTURED_APPEND_SEQUENCE, decoderResult.getStructuredAppendSequenceNumber());
      result.putMetadata(ResultMetadataType$1.STRUCTURED_APPEND_PARITY, decoderResult.getStructuredAppendParity());
    }
    return result;
  };
  QRCodeReader2.prototype.reset = function() {
  };
  QRCodeReader2.extractPureBits = function(image) {
    var leftTopBlack = image.getTopLeftOnBit();
    var rightBottomBlack = image.getBottomRightOnBit();
    if (leftTopBlack === null || rightBottomBlack === null) {
      throw new NotFoundException();
    }
    var moduleSize = this.moduleSize(leftTopBlack, image);
    var top = leftTopBlack[1];
    var bottom = rightBottomBlack[1];
    var left = leftTopBlack[0];
    var right = rightBottomBlack[0];
    if (left >= right || top >= bottom) {
      throw new NotFoundException();
    }
    if (bottom - top !== right - left) {
      right = left + (bottom - top);
      if (right >= image.getWidth()) {
        throw new NotFoundException();
      }
    }
    var matrixWidth = Math.round((right - left + 1) / moduleSize);
    var matrixHeight = Math.round((bottom - top + 1) / moduleSize);
    if (matrixWidth <= 0 || matrixHeight <= 0) {
      throw new NotFoundException();
    }
    if (matrixHeight !== matrixWidth) {
      throw new NotFoundException();
    }
    var nudge = Math.floor(moduleSize / 2);
    top += nudge;
    left += nudge;
    var nudgedTooFarRight = left + Math.floor((matrixWidth - 1) * moduleSize) - right;
    if (nudgedTooFarRight > 0) {
      if (nudgedTooFarRight > nudge) {
        throw new NotFoundException();
      }
      left -= nudgedTooFarRight;
    }
    var nudgedTooFarDown = top + Math.floor((matrixHeight - 1) * moduleSize) - bottom;
    if (nudgedTooFarDown > 0) {
      if (nudgedTooFarDown > nudge) {
        throw new NotFoundException();
      }
      top -= nudgedTooFarDown;
    }
    var bits = new BitMatrix(matrixWidth, matrixHeight);
    for (var y = 0; y < matrixHeight; y++) {
      var iOffset = top + Math.floor(y * moduleSize);
      for (var x = 0; x < matrixWidth; x++) {
        if (image.get(left + Math.floor(x * moduleSize), iOffset)) {
          bits.set(x, y);
        }
      }
    }
    return bits;
  };
  QRCodeReader2.moduleSize = function(leftTopBlack, image) {
    var height = image.getHeight();
    var width = image.getWidth();
    var x = leftTopBlack[0];
    var y = leftTopBlack[1];
    var inBlack = true;
    var transitions = 0;
    while (x < width && y < height) {
      if (inBlack !== image.get(x, y)) {
        if (++transitions === 5) {
          break;
        }
        inBlack = !inBlack;
      }
      x++;
      y++;
    }
    if (x === width || y === height) {
      throw new NotFoundException();
    }
    return (x - leftTopBlack[0]) / 7;
  };
  QRCodeReader2.NO_POINTS = new Array();
  return QRCodeReader2;
}();
var __values$q = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return {value: o && o[i++], done: !o};
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var PDF417Common = function() {
  function PDF417Common2() {
  }
  PDF417Common2.prototype.PDF417Common = function() {
  };
  PDF417Common2.getBitCountSum = function(moduleBitCount) {
    return MathUtils.sum(moduleBitCount);
  };
  PDF417Common2.toIntArray = function(list) {
    var e_1, _a;
    if (list == null || !list.length) {
      return PDF417Common2.EMPTY_INT_ARRAY;
    }
    var result = new Int32Array(list.length);
    var i = 0;
    try {
      for (var list_1 = __values$q(list), list_1_1 = list_1.next(); !list_1_1.done; list_1_1 = list_1.next()) {
        var integer = list_1_1.value;
        result[i++] = integer;
      }
    } catch (e_1_1) {
      e_1 = {error: e_1_1};
    } finally {
      try {
        if (list_1_1 && !list_1_1.done && (_a = list_1.return))
          _a.call(list_1);
      } finally {
        if (e_1)
          throw e_1.error;
      }
    }
    return result;
  };
  PDF417Common2.getCodeword = function(symbol) {
    var i = Arrays.binarySearch(PDF417Common2.SYMBOL_TABLE, symbol & 262143);
    if (i < 0) {
      return -1;
    }
    return (PDF417Common2.CODEWORD_TABLE[i] - 1) % PDF417Common2.NUMBER_OF_CODEWORDS;
  };
  PDF417Common2.NUMBER_OF_CODEWORDS = 929;
  PDF417Common2.MAX_CODEWORDS_IN_BARCODE = PDF417Common2.NUMBER_OF_CODEWORDS - 1;
  PDF417Common2.MIN_ROWS_IN_BARCODE = 3;
  PDF417Common2.MAX_ROWS_IN_BARCODE = 90;
  PDF417Common2.MODULES_IN_CODEWORD = 17;
  PDF417Common2.MODULES_IN_STOP_PATTERN = 18;
  PDF417Common2.BARS_IN_MODULE = 8;
  PDF417Common2.EMPTY_INT_ARRAY = new Int32Array([]);
  PDF417Common2.SYMBOL_TABLE = Int32Array.from([
    66142,
    66170,
    66206,
    66236,
    66290,
    66292,
    66350,
    66382,
    66396,
    66454,
    66470,
    66476,
    66594,
    66600,
    66614,
    66626,
    66628,
    66632,
    66640,
    66654,
    66662,
    66668,
    66682,
    66690,
    66718,
    66720,
    66748,
    66758,
    66776,
    66798,
    66802,
    66804,
    66820,
    66824,
    66832,
    66846,
    66848,
    66876,
    66880,
    66936,
    66950,
    66956,
    66968,
    66992,
    67006,
    67022,
    67036,
    67042,
    67044,
    67048,
    67062,
    67118,
    67150,
    67164,
    67214,
    67228,
    67256,
    67294,
    67322,
    67350,
    67366,
    67372,
    67398,
    67404,
    67416,
    67438,
    67474,
    67476,
    67490,
    67492,
    67496,
    67510,
    67618,
    67624,
    67650,
    67656,
    67664,
    67678,
    67686,
    67692,
    67706,
    67714,
    67716,
    67728,
    67742,
    67744,
    67772,
    67782,
    67788,
    67800,
    67822,
    67826,
    67828,
    67842,
    67848,
    67870,
    67872,
    67900,
    67904,
    67960,
    67974,
    67992,
    68016,
    68030,
    68046,
    68060,
    68066,
    68068,
    68072,
    68086,
    68104,
    68112,
    68126,
    68128,
    68156,
    68160,
    68216,
    68336,
    68358,
    68364,
    68376,
    68400,
    68414,
    68448,
    68476,
    68494,
    68508,
    68536,
    68546,
    68548,
    68552,
    68560,
    68574,
    68582,
    68588,
    68654,
    68686,
    68700,
    68706,
    68708,
    68712,
    68726,
    68750,
    68764,
    68792,
    68802,
    68804,
    68808,
    68816,
    68830,
    68838,
    68844,
    68858,
    68878,
    68892,
    68920,
    68976,
    68990,
    68994,
    68996,
    69e3,
    69008,
    69022,
    69024,
    69052,
    69062,
    69068,
    69080,
    69102,
    69106,
    69108,
    69142,
    69158,
    69164,
    69190,
    69208,
    69230,
    69254,
    69260,
    69272,
    69296,
    69310,
    69326,
    69340,
    69386,
    69394,
    69396,
    69410,
    69416,
    69430,
    69442,
    69444,
    69448,
    69456,
    69470,
    69478,
    69484,
    69554,
    69556,
    69666,
    69672,
    69698,
    69704,
    69712,
    69726,
    69754,
    69762,
    69764,
    69776,
    69790,
    69792,
    69820,
    69830,
    69836,
    69848,
    69870,
    69874,
    69876,
    69890,
    69918,
    69920,
    69948,
    69952,
    70008,
    70022,
    70040,
    70064,
    70078,
    70094,
    70108,
    70114,
    70116,
    70120,
    70134,
    70152,
    70174,
    70176,
    70264,
    70384,
    70412,
    70448,
    70462,
    70496,
    70524,
    70542,
    70556,
    70584,
    70594,
    70600,
    70608,
    70622,
    70630,
    70636,
    70664,
    70672,
    70686,
    70688,
    70716,
    70720,
    70776,
    70896,
    71136,
    71180,
    71192,
    71216,
    71230,
    71264,
    71292,
    71360,
    71416,
    71452,
    71480,
    71536,
    71550,
    71554,
    71556,
    71560,
    71568,
    71582,
    71584,
    71612,
    71622,
    71628,
    71640,
    71662,
    71726,
    71732,
    71758,
    71772,
    71778,
    71780,
    71784,
    71798,
    71822,
    71836,
    71864,
    71874,
    71880,
    71888,
    71902,
    71910,
    71916,
    71930,
    71950,
    71964,
    71992,
    72048,
    72062,
    72066,
    72068,
    72080,
    72094,
    72096,
    72124,
    72134,
    72140,
    72152,
    72174,
    72178,
    72180,
    72206,
    72220,
    72248,
    72304,
    72318,
    72416,
    72444,
    72456,
    72464,
    72478,
    72480,
    72508,
    72512,
    72568,
    72588,
    72600,
    72624,
    72638,
    72654,
    72668,
    72674,
    72676,
    72680,
    72694,
    72726,
    72742,
    72748,
    72774,
    72780,
    72792,
    72814,
    72838,
    72856,
    72880,
    72894,
    72910,
    72924,
    72930,
    72932,
    72936,
    72950,
    72966,
    72972,
    72984,
    73008,
    73022,
    73056,
    73084,
    73102,
    73116,
    73144,
    73156,
    73160,
    73168,
    73182,
    73190,
    73196,
    73210,
    73226,
    73234,
    73236,
    73250,
    73252,
    73256,
    73270,
    73282,
    73284,
    73296,
    73310,
    73318,
    73324,
    73346,
    73348,
    73352,
    73360,
    73374,
    73376,
    73404,
    73414,
    73420,
    73432,
    73454,
    73498,
    73518,
    73522,
    73524,
    73550,
    73564,
    73570,
    73572,
    73576,
    73590,
    73800,
    73822,
    73858,
    73860,
    73872,
    73886,
    73888,
    73916,
    73944,
    73970,
    73972,
    73992,
    74014,
    74016,
    74044,
    74048,
    74104,
    74118,
    74136,
    74160,
    74174,
    74210,
    74212,
    74216,
    74230,
    74244,
    74256,
    74270,
    74272,
    74360,
    74480,
    74502,
    74508,
    74544,
    74558,
    74592,
    74620,
    74638,
    74652,
    74680,
    74690,
    74696,
    74704,
    74726,
    74732,
    74782,
    74784,
    74812,
    74992,
    75232,
    75288,
    75326,
    75360,
    75388,
    75456,
    75512,
    75576,
    75632,
    75646,
    75650,
    75652,
    75664,
    75678,
    75680,
    75708,
    75718,
    75724,
    75736,
    75758,
    75808,
    75836,
    75840,
    75896,
    76016,
    76256,
    76736,
    76824,
    76848,
    76862,
    76896,
    76924,
    76992,
    77048,
    77296,
    77340,
    77368,
    77424,
    77438,
    77536,
    77564,
    77572,
    77576,
    77584,
    77600,
    77628,
    77632,
    77688,
    77702,
    77708,
    77720,
    77744,
    77758,
    77774,
    77788,
    77870,
    77902,
    77916,
    77922,
    77928,
    77966,
    77980,
    78008,
    78018,
    78024,
    78032,
    78046,
    78060,
    78074,
    78094,
    78136,
    78192,
    78206,
    78210,
    78212,
    78224,
    78238,
    78240,
    78268,
    78278,
    78284,
    78296,
    78322,
    78324,
    78350,
    78364,
    78448,
    78462,
    78560,
    78588,
    78600,
    78622,
    78624,
    78652,
    78656,
    78712,
    78726,
    78744,
    78768,
    78782,
    78798,
    78812,
    78818,
    78820,
    78824,
    78838,
    78862,
    78876,
    78904,
    78960,
    78974,
    79072,
    79100,
    79296,
    79352,
    79368,
    79376,
    79390,
    79392,
    79420,
    79424,
    79480,
    79600,
    79628,
    79640,
    79664,
    79678,
    79712,
    79740,
    79772,
    79800,
    79810,
    79812,
    79816,
    79824,
    79838,
    79846,
    79852,
    79894,
    79910,
    79916,
    79942,
    79948,
    79960,
    79982,
    79988,
    80006,
    80024,
    80048,
    80062,
    80078,
    80092,
    80098,
    80100,
    80104,
    80134,
    80140,
    80176,
    80190,
    80224,
    80252,
    80270,
    80284,
    80312,
    80328,
    80336,
    80350,
    80358,
    80364,
    80378,
    80390,
    80396,
    80408,
    80432,
    80446,
    80480,
    80508,
    80576,
    80632,
    80654,
    80668,
    80696,
    80752,
    80766,
    80776,
    80784,
    80798,
    80800,
    80828,
    80844,
    80856,
    80878,
    80882,
    80884,
    80914,
    80916,
    80930,
    80932,
    80936,
    80950,
    80962,
    80968,
    80976,
    80990,
    80998,
    81004,
    81026,
    81028,
    81040,
    81054,
    81056,
    81084,
    81094,
    81100,
    81112,
    81134,
    81154,
    81156,
    81160,
    81168,
    81182,
    81184,
    81212,
    81216,
    81272,
    81286,
    81292,
    81304,
    81328,
    81342,
    81358,
    81372,
    81380,
    81384,
    81398,
    81434,
    81454,
    81458,
    81460,
    81486,
    81500,
    81506,
    81508,
    81512,
    81526,
    81550,
    81564,
    81592,
    81602,
    81604,
    81608,
    81616,
    81630,
    81638,
    81644,
    81702,
    81708,
    81722,
    81734,
    81740,
    81752,
    81774,
    81778,
    81780,
    82050,
    82078,
    82080,
    82108,
    82180,
    82184,
    82192,
    82206,
    82208,
    82236,
    82240,
    82296,
    82316,
    82328,
    82352,
    82366,
    82402,
    82404,
    82408,
    82440,
    82448,
    82462,
    82464,
    82492,
    82496,
    82552,
    82672,
    82694,
    82700,
    82712,
    82736,
    82750,
    82784,
    82812,
    82830,
    82882,
    82884,
    82888,
    82896,
    82918,
    82924,
    82952,
    82960,
    82974,
    82976,
    83004,
    83008,
    83064,
    83184,
    83424,
    83468,
    83480,
    83504,
    83518,
    83552,
    83580,
    83648,
    83704,
    83740,
    83768,
    83824,
    83838,
    83842,
    83844,
    83848,
    83856,
    83872,
    83900,
    83910,
    83916,
    83928,
    83950,
    83984,
    84e3,
    84028,
    84032,
    84088,
    84208,
    84448,
    84928,
    85040,
    85054,
    85088,
    85116,
    85184,
    85240,
    85488,
    85560,
    85616,
    85630,
    85728,
    85756,
    85764,
    85768,
    85776,
    85790,
    85792,
    85820,
    85824,
    85880,
    85894,
    85900,
    85912,
    85936,
    85966,
    85980,
    86048,
    86080,
    86136,
    86256,
    86496,
    86976,
    88160,
    88188,
    88256,
    88312,
    88560,
    89056,
    89200,
    89214,
    89312,
    89340,
    89536,
    89592,
    89608,
    89616,
    89632,
    89664,
    89720,
    89840,
    89868,
    89880,
    89904,
    89952,
    89980,
    89998,
    90012,
    90040,
    90190,
    90204,
    90254,
    90268,
    90296,
    90306,
    90308,
    90312,
    90334,
    90382,
    90396,
    90424,
    90480,
    90494,
    90500,
    90504,
    90512,
    90526,
    90528,
    90556,
    90566,
    90572,
    90584,
    90610,
    90612,
    90638,
    90652,
    90680,
    90736,
    90750,
    90848,
    90876,
    90884,
    90888,
    90896,
    90910,
    90912,
    90940,
    90944,
    91e3,
    91014,
    91020,
    91032,
    91056,
    91070,
    91086,
    91100,
    91106,
    91108,
    91112,
    91126,
    91150,
    91164,
    91192,
    91248,
    91262,
    91360,
    91388,
    91584,
    91640,
    91664,
    91678,
    91680,
    91708,
    91712,
    91768,
    91888,
    91928,
    91952,
    91966,
    92e3,
    92028,
    92046,
    92060,
    92088,
    92098,
    92100,
    92104,
    92112,
    92126,
    92134,
    92140,
    92188,
    92216,
    92272,
    92384,
    92412,
    92608,
    92664,
    93168,
    93200,
    93214,
    93216,
    93244,
    93248,
    93304,
    93424,
    93664,
    93720,
    93744,
    93758,
    93792,
    93820,
    93888,
    93944,
    93980,
    94008,
    94064,
    94078,
    94084,
    94088,
    94096,
    94110,
    94112,
    94140,
    94150,
    94156,
    94168,
    94246,
    94252,
    94278,
    94284,
    94296,
    94318,
    94342,
    94348,
    94360,
    94384,
    94398,
    94414,
    94428,
    94440,
    94470,
    94476,
    94488,
    94512,
    94526,
    94560,
    94588,
    94606,
    94620,
    94648,
    94658,
    94660,
    94664,
    94672,
    94686,
    94694,
    94700,
    94714,
    94726,
    94732,
    94744,
    94768,
    94782,
    94816,
    94844,
    94912,
    94968,
    94990,
    95004,
    95032,
    95088,
    95102,
    95112,
    95120,
    95134,
    95136,
    95164,
    95180,
    95192,
    95214,
    95218,
    95220,
    95244,
    95256,
    95280,
    95294,
    95328,
    95356,
    95424,
    95480,
    95728,
    95758,
    95772,
    95800,
    95856,
    95870,
    95968,
    95996,
    96008,
    96016,
    96030,
    96032,
    96060,
    96064,
    96120,
    96152,
    96176,
    96190,
    96220,
    96226,
    96228,
    96232,
    96290,
    96292,
    96296,
    96310,
    96322,
    96324,
    96328,
    96336,
    96350,
    96358,
    96364,
    96386,
    96388,
    96392,
    96400,
    96414,
    96416,
    96444,
    96454,
    96460,
    96472,
    96494,
    96498,
    96500,
    96514,
    96516,
    96520,
    96528,
    96542,
    96544,
    96572,
    96576,
    96632,
    96646,
    96652,
    96664,
    96688,
    96702,
    96718,
    96732,
    96738,
    96740,
    96744,
    96758,
    96772,
    96776,
    96784,
    96798,
    96800,
    96828,
    96832,
    96888,
    97008,
    97030,
    97036,
    97048,
    97072,
    97086,
    97120,
    97148,
    97166,
    97180,
    97208,
    97220,
    97224,
    97232,
    97246,
    97254,
    97260,
    97326,
    97330,
    97332,
    97358,
    97372,
    97378,
    97380,
    97384,
    97398,
    97422,
    97436,
    97464,
    97474,
    97476,
    97480,
    97488,
    97502,
    97510,
    97516,
    97550,
    97564,
    97592,
    97648,
    97666,
    97668,
    97672,
    97680,
    97694,
    97696,
    97724,
    97734,
    97740,
    97752,
    97774,
    97830,
    97836,
    97850,
    97862,
    97868,
    97880,
    97902,
    97906,
    97908,
    97926,
    97932,
    97944,
    97968,
    97998,
    98012,
    98018,
    98020,
    98024,
    98038,
    98618,
    98674,
    98676,
    98838,
    98854,
    98874,
    98892,
    98904,
    98926,
    98930,
    98932,
    98968,
    99006,
    99042,
    99044,
    99048,
    99062,
    99166,
    99194,
    99246,
    99286,
    99350,
    99366,
    99372,
    99386,
    99398,
    99416,
    99438,
    99442,
    99444,
    99462,
    99504,
    99518,
    99534,
    99548,
    99554,
    99556,
    99560,
    99574,
    99590,
    99596,
    99608,
    99632,
    99646,
    99680,
    99708,
    99726,
    99740,
    99768,
    99778,
    99780,
    99784,
    99792,
    99806,
    99814,
    99820,
    99834,
    99858,
    99860,
    99874,
    99880,
    99894,
    99906,
    99920,
    99934,
    99962,
    99970,
    99972,
    99976,
    99984,
    99998,
    1e5,
    100028,
    100038,
    100044,
    100056,
    100078,
    100082,
    100084,
    100142,
    100174,
    100188,
    100246,
    100262,
    100268,
    100306,
    100308,
    100390,
    100396,
    100410,
    100422,
    100428,
    100440,
    100462,
    100466,
    100468,
    100486,
    100504,
    100528,
    100542,
    100558,
    100572,
    100578,
    100580,
    100584,
    100598,
    100620,
    100656,
    100670,
    100704,
    100732,
    100750,
    100792,
    100802,
    100808,
    100816,
    100830,
    100838,
    100844,
    100858,
    100888,
    100912,
    100926,
    100960,
    100988,
    101056,
    101112,
    101148,
    101176,
    101232,
    101246,
    101250,
    101252,
    101256,
    101264,
    101278,
    101280,
    101308,
    101318,
    101324,
    101336,
    101358,
    101362,
    101364,
    101410,
    101412,
    101416,
    101430,
    101442,
    101448,
    101456,
    101470,
    101478,
    101498,
    101506,
    101508,
    101520,
    101534,
    101536,
    101564,
    101580,
    101618,
    101620,
    101636,
    101640,
    101648,
    101662,
    101664,
    101692,
    101696,
    101752,
    101766,
    101784,
    101838,
    101858,
    101860,
    101864,
    101934,
    101938,
    101940,
    101966,
    101980,
    101986,
    101988,
    101992,
    102030,
    102044,
    102072,
    102082,
    102084,
    102088,
    102096,
    102138,
    102166,
    102182,
    102188,
    102214,
    102220,
    102232,
    102254,
    102282,
    102290,
    102292,
    102306,
    102308,
    102312,
    102326,
    102444,
    102458,
    102470,
    102476,
    102488,
    102514,
    102516,
    102534,
    102552,
    102576,
    102590,
    102606,
    102620,
    102626,
    102632,
    102646,
    102662,
    102668,
    102704,
    102718,
    102752,
    102780,
    102798,
    102812,
    102840,
    102850,
    102856,
    102864,
    102878,
    102886,
    102892,
    102906,
    102936,
    102974,
    103008,
    103036,
    103104,
    103160,
    103224,
    103280,
    103294,
    103298,
    103300,
    103312,
    103326,
    103328,
    103356,
    103366,
    103372,
    103384,
    103406,
    103410,
    103412,
    103472,
    103486,
    103520,
    103548,
    103616,
    103672,
    103920,
    103992,
    104048,
    104062,
    104160,
    104188,
    104194,
    104196,
    104200,
    104208,
    104224,
    104252,
    104256,
    104312,
    104326,
    104332,
    104344,
    104368,
    104382,
    104398,
    104412,
    104418,
    104420,
    104424,
    104482,
    104484,
    104514,
    104520,
    104528,
    104542,
    104550,
    104570,
    104578,
    104580,
    104592,
    104606,
    104608,
    104636,
    104652,
    104690,
    104692,
    104706,
    104712,
    104734,
    104736,
    104764,
    104768,
    104824,
    104838,
    104856,
    104910,
    104930,
    104932,
    104936,
    104968,
    104976,
    104990,
    104992,
    105020,
    105024,
    105080,
    105200,
    105240,
    105278,
    105312,
    105372,
    105410,
    105412,
    105416,
    105424,
    105446,
    105518,
    105524,
    105550,
    105564,
    105570,
    105572,
    105576,
    105614,
    105628,
    105656,
    105666,
    105672,
    105680,
    105702,
    105722,
    105742,
    105756,
    105784,
    105840,
    105854,
    105858,
    105860,
    105864,
    105872,
    105888,
    105932,
    105970,
    105972,
    106006,
    106022,
    106028,
    106054,
    106060,
    106072,
    106100,
    106118,
    106124,
    106136,
    106160,
    106174,
    106190,
    106210,
    106212,
    106216,
    106250,
    106258,
    106260,
    106274,
    106276,
    106280,
    106306,
    106308,
    106312,
    106320,
    106334,
    106348,
    106394,
    106414,
    106418,
    106420,
    106566,
    106572,
    106610,
    106612,
    106630,
    106636,
    106648,
    106672,
    106686,
    106722,
    106724,
    106728,
    106742,
    106758,
    106764,
    106776,
    106800,
    106814,
    106848,
    106876,
    106894,
    106908,
    106936,
    106946,
    106948,
    106952,
    106960,
    106974,
    106982,
    106988,
    107032,
    107056,
    107070,
    107104,
    107132,
    107200,
    107256,
    107292,
    107320,
    107376,
    107390,
    107394,
    107396,
    107400,
    107408,
    107422,
    107424,
    107452,
    107462,
    107468,
    107480,
    107502,
    107506,
    107508,
    107544,
    107568,
    107582,
    107616,
    107644,
    107712,
    107768,
    108016,
    108060,
    108088,
    108144,
    108158,
    108256,
    108284,
    108290,
    108292,
    108296,
    108304,
    108318,
    108320,
    108348,
    108352,
    108408,
    108422,
    108428,
    108440,
    108464,
    108478,
    108494,
    108508,
    108514,
    108516,
    108520,
    108592,
    108640,
    108668,
    108736,
    108792,
    109040,
    109536,
    109680,
    109694,
    109792,
    109820,
    110016,
    110072,
    110084,
    110088,
    110096,
    110112,
    110140,
    110144,
    110200,
    110320,
    110342,
    110348,
    110360,
    110384,
    110398,
    110432,
    110460,
    110478,
    110492,
    110520,
    110532,
    110536,
    110544,
    110558,
    110658,
    110686,
    110714,
    110722,
    110724,
    110728,
    110736,
    110750,
    110752,
    110780,
    110796,
    110834,
    110836,
    110850,
    110852,
    110856,
    110864,
    110878,
    110880,
    110908,
    110912,
    110968,
    110982,
    111e3,
    111054,
    111074,
    111076,
    111080,
    111108,
    111112,
    111120,
    111134,
    111136,
    111164,
    111168,
    111224,
    111344,
    111372,
    111422,
    111456,
    111516,
    111554,
    111556,
    111560,
    111568,
    111590,
    111632,
    111646,
    111648,
    111676,
    111680,
    111736,
    111856,
    112096,
    112152,
    112224,
    112252,
    112320,
    112440,
    112514,
    112516,
    112520,
    112528,
    112542,
    112544,
    112588,
    112686,
    112718,
    112732,
    112782,
    112796,
    112824,
    112834,
    112836,
    112840,
    112848,
    112870,
    112890,
    112910,
    112924,
    112952,
    113008,
    113022,
    113026,
    113028,
    113032,
    113040,
    113054,
    113056,
    113100,
    113138,
    113140,
    113166,
    113180,
    113208,
    113264,
    113278,
    113376,
    113404,
    113416,
    113424,
    113440,
    113468,
    113472,
    113560,
    113614,
    113634,
    113636,
    113640,
    113686,
    113702,
    113708,
    113734,
    113740,
    113752,
    113778,
    113780,
    113798,
    113804,
    113816,
    113840,
    113854,
    113870,
    113890,
    113892,
    113896,
    113926,
    113932,
    113944,
    113968,
    113982,
    114016,
    114044,
    114076,
    114114,
    114116,
    114120,
    114128,
    114150,
    114170,
    114194,
    114196,
    114210,
    114212,
    114216,
    114242,
    114244,
    114248,
    114256,
    114270,
    114278,
    114306,
    114308,
    114312,
    114320,
    114334,
    114336,
    114364,
    114380,
    114420,
    114458,
    114478,
    114482,
    114484,
    114510,
    114524,
    114530,
    114532,
    114536,
    114842,
    114866,
    114868,
    114970,
    114994,
    114996,
    115042,
    115044,
    115048,
    115062,
    115130,
    115226,
    115250,
    115252,
    115278,
    115292,
    115298,
    115300,
    115304,
    115318,
    115342,
    115394,
    115396,
    115400,
    115408,
    115422,
    115430,
    115436,
    115450,
    115478,
    115494,
    115514,
    115526,
    115532,
    115570,
    115572,
    115738,
    115758,
    115762,
    115764,
    115790,
    115804,
    115810,
    115812,
    115816,
    115830,
    115854,
    115868,
    115896,
    115906,
    115912,
    115920,
    115934,
    115942,
    115948,
    115962,
    115996,
    116024,
    116080,
    116094,
    116098,
    116100,
    116104,
    116112,
    116126,
    116128,
    116156,
    116166,
    116172,
    116184,
    116206,
    116210,
    116212,
    116246,
    116262,
    116268,
    116282,
    116294,
    116300,
    116312,
    116334,
    116338,
    116340,
    116358,
    116364,
    116376,
    116400,
    116414,
    116430,
    116444,
    116450,
    116452,
    116456,
    116498,
    116500,
    116514,
    116520,
    116534,
    116546,
    116548,
    116552,
    116560,
    116574,
    116582,
    116588,
    116602,
    116654,
    116694,
    116714,
    116762,
    116782,
    116786,
    116788,
    116814,
    116828,
    116834,
    116836,
    116840,
    116854,
    116878,
    116892,
    116920,
    116930,
    116936,
    116944,
    116958,
    116966,
    116972,
    116986,
    117006,
    117048,
    117104,
    117118,
    117122,
    117124,
    117136,
    117150,
    117152,
    117180,
    117190,
    117196,
    117208,
    117230,
    117234,
    117236,
    117304,
    117360,
    117374,
    117472,
    117500,
    117506,
    117508,
    117512,
    117520,
    117536,
    117564,
    117568,
    117624,
    117638,
    117644,
    117656,
    117680,
    117694,
    117710,
    117724,
    117730,
    117732,
    117736,
    117750,
    117782,
    117798,
    117804,
    117818,
    117830,
    117848,
    117874,
    117876,
    117894,
    117936,
    117950,
    117966,
    117986,
    117988,
    117992,
    118022,
    118028,
    118040,
    118064,
    118078,
    118112,
    118140,
    118172,
    118210,
    118212,
    118216,
    118224,
    118238,
    118246,
    118266,
    118306,
    118312,
    118338,
    118352,
    118366,
    118374,
    118394,
    118402,
    118404,
    118408,
    118416,
    118430,
    118432,
    118460,
    118476,
    118514,
    118516,
    118574,
    118578,
    118580,
    118606,
    118620,
    118626,
    118628,
    118632,
    118678,
    118694,
    118700,
    118730,
    118738,
    118740,
    118830,
    118834,
    118836,
    118862,
    118876,
    118882,
    118884,
    118888,
    118902,
    118926,
    118940,
    118968,
    118978,
    118980,
    118984,
    118992,
    119006,
    119014,
    119020,
    119034,
    119068,
    119096,
    119152,
    119166,
    119170,
    119172,
    119176,
    119184,
    119198,
    119200,
    119228,
    119238,
    119244,
    119256,
    119278,
    119282,
    119284,
    119324,
    119352,
    119408,
    119422,
    119520,
    119548,
    119554,
    119556,
    119560,
    119568,
    119582,
    119584,
    119612,
    119616,
    119672,
    119686,
    119692,
    119704,
    119728,
    119742,
    119758,
    119772,
    119778,
    119780,
    119784,
    119798,
    119920,
    119934,
    120032,
    120060,
    120256,
    120312,
    120324,
    120328,
    120336,
    120352,
    120384,
    120440,
    120560,
    120582,
    120588,
    120600,
    120624,
    120638,
    120672,
    120700,
    120718,
    120732,
    120760,
    120770,
    120772,
    120776,
    120784,
    120798,
    120806,
    120812,
    120870,
    120876,
    120890,
    120902,
    120908,
    120920,
    120946,
    120948,
    120966,
    120972,
    120984,
    121008,
    121022,
    121038,
    121058,
    121060,
    121064,
    121078,
    121100,
    121112,
    121136,
    121150,
    121184,
    121212,
    121244,
    121282,
    121284,
    121288,
    121296,
    121318,
    121338,
    121356,
    121368,
    121392,
    121406,
    121440,
    121468,
    121536,
    121592,
    121656,
    121730,
    121732,
    121736,
    121744,
    121758,
    121760,
    121804,
    121842,
    121844,
    121890,
    121922,
    121924,
    121928,
    121936,
    121950,
    121958,
    121978,
    121986,
    121988,
    121992,
    122e3,
    122014,
    122016,
    122044,
    122060,
    122098,
    122100,
    122116,
    122120,
    122128,
    122142,
    122144,
    122172,
    122176,
    122232,
    122246,
    122264,
    122318,
    122338,
    122340,
    122344,
    122414,
    122418,
    122420,
    122446,
    122460,
    122466,
    122468,
    122472,
    122510,
    122524,
    122552,
    122562,
    122564,
    122568,
    122576,
    122598,
    122618,
    122646,
    122662,
    122668,
    122694,
    122700,
    122712,
    122738,
    122740,
    122762,
    122770,
    122772,
    122786,
    122788,
    122792,
    123018,
    123026,
    123028,
    123042,
    123044,
    123048,
    123062,
    123098,
    123146,
    123154,
    123156,
    123170,
    123172,
    123176,
    123190,
    123202,
    123204,
    123208,
    123216,
    123238,
    123244,
    123258,
    123290,
    123314,
    123316,
    123402,
    123410,
    123412,
    123426,
    123428,
    123432,
    123446,
    123458,
    123464,
    123472,
    123486,
    123494,
    123500,
    123514,
    123522,
    123524,
    123528,
    123536,
    123552,
    123580,
    123590,
    123596,
    123608,
    123630,
    123634,
    123636,
    123674,
    123698,
    123700,
    123740,
    123746,
    123748,
    123752,
    123834,
    123914,
    123922,
    123924,
    123938,
    123944,
    123958,
    123970,
    123976,
    123984,
    123998,
    124006,
    124012,
    124026,
    124034,
    124036,
    124048,
    124062,
    124064,
    124092,
    124102,
    124108,
    124120,
    124142,
    124146,
    124148,
    124162,
    124164,
    124168,
    124176,
    124190,
    124192,
    124220,
    124224,
    124280,
    124294,
    124300,
    124312,
    124336,
    124350,
    124366,
    124380,
    124386,
    124388,
    124392,
    124406,
    124442,
    124462,
    124466,
    124468,
    124494,
    124508,
    124514,
    124520,
    124558,
    124572,
    124600,
    124610,
    124612,
    124616,
    124624,
    124646,
    124666,
    124694,
    124710,
    124716,
    124730,
    124742,
    124748,
    124760,
    124786,
    124788,
    124818,
    124820,
    124834,
    124836,
    124840,
    124854,
    124946,
    124948,
    124962,
    124964,
    124968,
    124982,
    124994,
    124996,
    125e3,
    125008,
    125022,
    125030,
    125036,
    125050,
    125058,
    125060,
    125064,
    125072,
    125086,
    125088,
    125116,
    125126,
    125132,
    125144,
    125166,
    125170,
    125172,
    125186,
    125188,
    125192,
    125200,
    125216,
    125244,
    125248,
    125304,
    125318,
    125324,
    125336,
    125360,
    125374,
    125390,
    125404,
    125410,
    125412,
    125416,
    125430,
    125444,
    125448,
    125456,
    125472,
    125504,
    125560,
    125680,
    125702,
    125708,
    125720,
    125744,
    125758,
    125792,
    125820,
    125838,
    125852,
    125880,
    125890,
    125892,
    125896,
    125904,
    125918,
    125926,
    125932,
    125978,
    125998,
    126002,
    126004,
    126030,
    126044,
    126050,
    126052,
    126056,
    126094,
    126108,
    126136,
    126146,
    126148,
    126152,
    126160,
    126182,
    126202,
    126222,
    126236,
    126264,
    126320,
    126334,
    126338,
    126340,
    126344,
    126352,
    126366,
    126368,
    126412,
    126450,
    126452,
    126486,
    126502,
    126508,
    126522,
    126534,
    126540,
    126552,
    126574,
    126578,
    126580,
    126598,
    126604,
    126616,
    126640,
    126654,
    126670,
    126684,
    126690,
    126692,
    126696,
    126738,
    126754,
    126756,
    126760,
    126774,
    126786,
    126788,
    126792,
    126800,
    126814,
    126822,
    126828,
    126842,
    126894,
    126898,
    126900,
    126934,
    127126,
    127142,
    127148,
    127162,
    127178,
    127186,
    127188,
    127254,
    127270,
    127276,
    127290,
    127302,
    127308,
    127320,
    127342,
    127346,
    127348,
    127370,
    127378,
    127380,
    127394,
    127396,
    127400,
    127450,
    127510,
    127526,
    127532,
    127546,
    127558,
    127576,
    127598,
    127602,
    127604,
    127622,
    127628,
    127640,
    127664,
    127678,
    127694,
    127708,
    127714,
    127716,
    127720,
    127734,
    127754,
    127762,
    127764,
    127778,
    127784,
    127810,
    127812,
    127816,
    127824,
    127838,
    127846,
    127866,
    127898,
    127918,
    127922,
    127924,
    128022,
    128038,
    128044,
    128058,
    128070,
    128076,
    128088,
    128110,
    128114,
    128116,
    128134,
    128140,
    128152,
    128176,
    128190,
    128206,
    128220,
    128226,
    128228,
    128232,
    128246,
    128262,
    128268,
    128280,
    128304,
    128318,
    128352,
    128380,
    128398,
    128412,
    128440,
    128450,
    128452,
    128456,
    128464,
    128478,
    128486,
    128492,
    128506,
    128522,
    128530,
    128532,
    128546,
    128548,
    128552,
    128566,
    128578,
    128580,
    128584,
    128592,
    128606,
    128614,
    128634,
    128642,
    128644,
    128648,
    128656,
    128670,
    128672,
    128700,
    128716,
    128754,
    128756,
    128794,
    128814,
    128818,
    128820,
    128846,
    128860,
    128866,
    128868,
    128872,
    128886,
    128918,
    128934,
    128940,
    128954,
    128978,
    128980,
    129178,
    129198,
    129202,
    129204,
    129238,
    129258,
    129306,
    129326,
    129330,
    129332,
    129358,
    129372,
    129378,
    129380,
    129384,
    129398,
    129430,
    129446,
    129452,
    129466,
    129482,
    129490,
    129492,
    129562,
    129582,
    129586,
    129588,
    129614,
    129628,
    129634,
    129636,
    129640,
    129654,
    129678,
    129692,
    129720,
    129730,
    129732,
    129736,
    129744,
    129758,
    129766,
    129772,
    129814,
    129830,
    129836,
    129850,
    129862,
    129868,
    129880,
    129902,
    129906,
    129908,
    129930,
    129938,
    129940,
    129954,
    129956,
    129960,
    129974,
    130010
  ]);
  PDF417Common2.CODEWORD_TABLE = Int32Array.from([
    2627,
    1819,
    2622,
    2621,
    1813,
    1812,
    2729,
    2724,
    2723,
    2779,
    2774,
    2773,
    902,
    896,
    908,
    868,
    865,
    861,
    859,
    2511,
    873,
    871,
    1780,
    835,
    2493,
    825,
    2491,
    842,
    837,
    844,
    1764,
    1762,
    811,
    810,
    809,
    2483,
    807,
    2482,
    806,
    2480,
    815,
    814,
    813,
    812,
    2484,
    817,
    816,
    1745,
    1744,
    1742,
    1746,
    2655,
    2637,
    2635,
    2626,
    2625,
    2623,
    2628,
    1820,
    2752,
    2739,
    2737,
    2728,
    2727,
    2725,
    2730,
    2785,
    2783,
    2778,
    2777,
    2775,
    2780,
    787,
    781,
    747,
    739,
    736,
    2413,
    754,
    752,
    1719,
    692,
    689,
    681,
    2371,
    678,
    2369,
    700,
    697,
    694,
    703,
    1688,
    1686,
    642,
    638,
    2343,
    631,
    2341,
    627,
    2338,
    651,
    646,
    643,
    2345,
    654,
    652,
    1652,
    1650,
    1647,
    1654,
    601,
    599,
    2322,
    596,
    2321,
    594,
    2319,
    2317,
    611,
    610,
    608,
    606,
    2324,
    603,
    2323,
    615,
    614,
    612,
    1617,
    1616,
    1614,
    1612,
    616,
    1619,
    1618,
    2575,
    2538,
    2536,
    905,
    901,
    898,
    909,
    2509,
    2507,
    2504,
    870,
    867,
    864,
    860,
    2512,
    875,
    872,
    1781,
    2490,
    2489,
    2487,
    2485,
    1748,
    836,
    834,
    832,
    830,
    2494,
    827,
    2492,
    843,
    841,
    839,
    845,
    1765,
    1763,
    2701,
    2676,
    2674,
    2653,
    2648,
    2656,
    2634,
    2633,
    2631,
    2629,
    1821,
    2638,
    2636,
    2770,
    2763,
    2761,
    2750,
    2745,
    2753,
    2736,
    2735,
    2733,
    2731,
    1848,
    2740,
    2738,
    2786,
    2784,
    591,
    588,
    576,
    569,
    566,
    2296,
    1590,
    537,
    534,
    526,
    2276,
    522,
    2274,
    545,
    542,
    539,
    548,
    1572,
    1570,
    481,
    2245,
    466,
    2242,
    462,
    2239,
    492,
    485,
    482,
    2249,
    496,
    494,
    1534,
    1531,
    1528,
    1538,
    413,
    2196,
    406,
    2191,
    2188,
    425,
    419,
    2202,
    415,
    2199,
    432,
    430,
    427,
    1472,
    1467,
    1464,
    433,
    1476,
    1474,
    368,
    367,
    2160,
    365,
    2159,
    362,
    2157,
    2155,
    2152,
    378,
    377,
    375,
    2166,
    372,
    2165,
    369,
    2162,
    383,
    381,
    379,
    2168,
    1419,
    1418,
    1416,
    1414,
    385,
    1411,
    384,
    1423,
    1422,
    1420,
    1424,
    2461,
    802,
    2441,
    2439,
    790,
    786,
    783,
    794,
    2409,
    2406,
    2403,
    750,
    742,
    738,
    2414,
    756,
    753,
    1720,
    2367,
    2365,
    2362,
    2359,
    1663,
    693,
    691,
    684,
    2373,
    680,
    2370,
    702,
    699,
    696,
    704,
    1690,
    1687,
    2337,
    2336,
    2334,
    2332,
    1624,
    2329,
    1622,
    640,
    637,
    2344,
    634,
    2342,
    630,
    2340,
    650,
    648,
    645,
    2346,
    655,
    653,
    1653,
    1651,
    1649,
    1655,
    2612,
    2597,
    2595,
    2571,
    2568,
    2565,
    2576,
    2534,
    2529,
    2526,
    1787,
    2540,
    2537,
    907,
    904,
    900,
    910,
    2503,
    2502,
    2500,
    2498,
    1768,
    2495,
    1767,
    2510,
    2508,
    2506,
    869,
    866,
    863,
    2513,
    876,
    874,
    1782,
    2720,
    2713,
    2711,
    2697,
    2694,
    2691,
    2702,
    2672,
    2670,
    2664,
    1828,
    2678,
    2675,
    2647,
    2646,
    2644,
    2642,
    1823,
    2639,
    1822,
    2654,
    2652,
    2650,
    2657,
    2771,
    1855,
    2765,
    2762,
    1850,
    1849,
    2751,
    2749,
    2747,
    2754,
    353,
    2148,
    344,
    342,
    336,
    2142,
    332,
    2140,
    345,
    1375,
    1373,
    306,
    2130,
    299,
    2128,
    295,
    2125,
    319,
    314,
    311,
    2132,
    1354,
    1352,
    1349,
    1356,
    262,
    257,
    2101,
    253,
    2096,
    2093,
    274,
    273,
    267,
    2107,
    263,
    2104,
    280,
    278,
    275,
    1316,
    1311,
    1308,
    1320,
    1318,
    2052,
    202,
    2050,
    2044,
    2040,
    219,
    2063,
    212,
    2060,
    208,
    2055,
    224,
    221,
    2066,
    1260,
    1258,
    1252,
    231,
    1248,
    229,
    1266,
    1264,
    1261,
    1268,
    155,
    1998,
    153,
    1996,
    1994,
    1991,
    1988,
    165,
    164,
    2007,
    162,
    2006,
    159,
    2003,
    2e3,
    172,
    171,
    169,
    2012,
    166,
    2010,
    1186,
    1184,
    1182,
    1179,
    175,
    1176,
    173,
    1192,
    1191,
    1189,
    1187,
    176,
    1194,
    1193,
    2313,
    2307,
    2305,
    592,
    589,
    2294,
    2292,
    2289,
    578,
    572,
    568,
    2297,
    580,
    1591,
    2272,
    2267,
    2264,
    1547,
    538,
    536,
    529,
    2278,
    525,
    2275,
    547,
    544,
    541,
    1574,
    1571,
    2237,
    2235,
    2229,
    1493,
    2225,
    1489,
    478,
    2247,
    470,
    2244,
    465,
    2241,
    493,
    488,
    484,
    2250,
    498,
    495,
    1536,
    1533,
    1530,
    1539,
    2187,
    2186,
    2184,
    2182,
    1432,
    2179,
    1430,
    2176,
    1427,
    414,
    412,
    2197,
    409,
    2195,
    405,
    2193,
    2190,
    426,
    424,
    421,
    2203,
    418,
    2201,
    431,
    429,
    1473,
    1471,
    1469,
    1466,
    434,
    1477,
    1475,
    2478,
    2472,
    2470,
    2459,
    2457,
    2454,
    2462,
    803,
    2437,
    2432,
    2429,
    1726,
    2443,
    2440,
    792,
    789,
    785,
    2401,
    2399,
    2393,
    1702,
    2389,
    1699,
    2411,
    2408,
    2405,
    745,
    741,
    2415,
    758,
    755,
    1721,
    2358,
    2357,
    2355,
    2353,
    1661,
    2350,
    1660,
    2347,
    1657,
    2368,
    2366,
    2364,
    2361,
    1666,
    690,
    687,
    2374,
    683,
    2372,
    701,
    698,
    705,
    1691,
    1689,
    2619,
    2617,
    2610,
    2608,
    2605,
    2613,
    2593,
    2588,
    2585,
    1803,
    2599,
    2596,
    2563,
    2561,
    2555,
    1797,
    2551,
    1795,
    2573,
    2570,
    2567,
    2577,
    2525,
    2524,
    2522,
    2520,
    1786,
    2517,
    1785,
    2514,
    1783,
    2535,
    2533,
    2531,
    2528,
    1788,
    2541,
    2539,
    906,
    903,
    911,
    2721,
    1844,
    2715,
    2712,
    1838,
    1836,
    2699,
    2696,
    2693,
    2703,
    1827,
    1826,
    1824,
    2673,
    2671,
    2669,
    2666,
    1829,
    2679,
    2677,
    1858,
    1857,
    2772,
    1854,
    1853,
    1851,
    1856,
    2766,
    2764,
    143,
    1987,
    139,
    1986,
    135,
    133,
    131,
    1984,
    128,
    1983,
    125,
    1981,
    138,
    137,
    136,
    1985,
    1133,
    1132,
    1130,
    112,
    110,
    1974,
    107,
    1973,
    104,
    1971,
    1969,
    122,
    121,
    119,
    117,
    1977,
    114,
    1976,
    124,
    1115,
    1114,
    1112,
    1110,
    1117,
    1116,
    84,
    83,
    1953,
    81,
    1952,
    78,
    1950,
    1948,
    1945,
    94,
    93,
    91,
    1959,
    88,
    1958,
    85,
    1955,
    99,
    97,
    95,
    1961,
    1086,
    1085,
    1083,
    1081,
    1078,
    100,
    1090,
    1089,
    1087,
    1091,
    49,
    47,
    1917,
    44,
    1915,
    1913,
    1910,
    1907,
    59,
    1926,
    56,
    1925,
    53,
    1922,
    1919,
    66,
    64,
    1931,
    61,
    1929,
    1042,
    1040,
    1038,
    71,
    1035,
    70,
    1032,
    68,
    1048,
    1047,
    1045,
    1043,
    1050,
    1049,
    12,
    10,
    1869,
    1867,
    1864,
    1861,
    21,
    1880,
    19,
    1877,
    1874,
    1871,
    28,
    1888,
    25,
    1886,
    22,
    1883,
    982,
    980,
    977,
    974,
    32,
    30,
    991,
    989,
    987,
    984,
    34,
    995,
    994,
    992,
    2151,
    2150,
    2147,
    2146,
    2144,
    356,
    355,
    354,
    2149,
    2139,
    2138,
    2136,
    2134,
    1359,
    343,
    341,
    338,
    2143,
    335,
    2141,
    348,
    347,
    346,
    1376,
    1374,
    2124,
    2123,
    2121,
    2119,
    1326,
    2116,
    1324,
    310,
    308,
    305,
    2131,
    302,
    2129,
    298,
    2127,
    320,
    318,
    316,
    313,
    2133,
    322,
    321,
    1355,
    1353,
    1351,
    1357,
    2092,
    2091,
    2089,
    2087,
    1276,
    2084,
    1274,
    2081,
    1271,
    259,
    2102,
    256,
    2100,
    252,
    2098,
    2095,
    272,
    269,
    2108,
    266,
    2106,
    281,
    279,
    277,
    1317,
    1315,
    1313,
    1310,
    282,
    1321,
    1319,
    2039,
    2037,
    2035,
    2032,
    1203,
    2029,
    1200,
    1197,
    207,
    2053,
    205,
    2051,
    201,
    2049,
    2046,
    2043,
    220,
    218,
    2064,
    215,
    2062,
    211,
    2059,
    228,
    226,
    223,
    2069,
    1259,
    1257,
    1254,
    232,
    1251,
    230,
    1267,
    1265,
    1263,
    2316,
    2315,
    2312,
    2311,
    2309,
    2314,
    2304,
    2303,
    2301,
    2299,
    1593,
    2308,
    2306,
    590,
    2288,
    2287,
    2285,
    2283,
    1578,
    2280,
    1577,
    2295,
    2293,
    2291,
    579,
    577,
    574,
    571,
    2298,
    582,
    581,
    1592,
    2263,
    2262,
    2260,
    2258,
    1545,
    2255,
    1544,
    2252,
    1541,
    2273,
    2271,
    2269,
    2266,
    1550,
    535,
    532,
    2279,
    528,
    2277,
    546,
    543,
    549,
    1575,
    1573,
    2224,
    2222,
    2220,
    1486,
    2217,
    1485,
    2214,
    1482,
    1479,
    2238,
    2236,
    2234,
    2231,
    1496,
    2228,
    1492,
    480,
    477,
    2248,
    473,
    2246,
    469,
    2243,
    490,
    487,
    2251,
    497,
    1537,
    1535,
    1532,
    2477,
    2476,
    2474,
    2479,
    2469,
    2468,
    2466,
    2464,
    1730,
    2473,
    2471,
    2453,
    2452,
    2450,
    2448,
    1729,
    2445,
    1728,
    2460,
    2458,
    2456,
    2463,
    805,
    804,
    2428,
    2427,
    2425,
    2423,
    1725,
    2420,
    1724,
    2417,
    1722,
    2438,
    2436,
    2434,
    2431,
    1727,
    2444,
    2442,
    793,
    791,
    788,
    795,
    2388,
    2386,
    2384,
    1697,
    2381,
    1696,
    2378,
    1694,
    1692,
    2402,
    2400,
    2398,
    2395,
    1703,
    2392,
    1701,
    2412,
    2410,
    2407,
    751,
    748,
    744,
    2416,
    759,
    757,
    1807,
    2620,
    2618,
    1806,
    1805,
    2611,
    2609,
    2607,
    2614,
    1802,
    1801,
    1799,
    2594,
    2592,
    2590,
    2587,
    1804,
    2600,
    2598,
    1794,
    1793,
    1791,
    1789,
    2564,
    2562,
    2560,
    2557,
    1798,
    2554,
    1796,
    2574,
    2572,
    2569,
    2578,
    1847,
    1846,
    2722,
    1843,
    1842,
    1840,
    1845,
    2716,
    2714,
    1835,
    1834,
    1832,
    1830,
    1839,
    1837,
    2700,
    2698,
    2695,
    2704,
    1817,
    1811,
    1810,
    897,
    862,
    1777,
    829,
    826,
    838,
    1760,
    1758,
    808,
    2481,
    1741,
    1740,
    1738,
    1743,
    2624,
    1818,
    2726,
    2776,
    782,
    740,
    737,
    1715,
    686,
    679,
    695,
    1682,
    1680,
    639,
    628,
    2339,
    647,
    644,
    1645,
    1643,
    1640,
    1648,
    602,
    600,
    597,
    595,
    2320,
    593,
    2318,
    609,
    607,
    604,
    1611,
    1610,
    1608,
    1606,
    613,
    1615,
    1613,
    2328,
    926,
    924,
    892,
    886,
    899,
    857,
    850,
    2505,
    1778,
    824,
    823,
    821,
    819,
    2488,
    818,
    2486,
    833,
    831,
    828,
    840,
    1761,
    1759,
    2649,
    2632,
    2630,
    2746,
    2734,
    2732,
    2782,
    2781,
    570,
    567,
    1587,
    531,
    527,
    523,
    540,
    1566,
    1564,
    476,
    467,
    463,
    2240,
    486,
    483,
    1524,
    1521,
    1518,
    1529,
    411,
    403,
    2192,
    399,
    2189,
    423,
    416,
    1462,
    1457,
    1454,
    428,
    1468,
    1465,
    2210,
    366,
    363,
    2158,
    360,
    2156,
    357,
    2153,
    376,
    373,
    370,
    2163,
    1410,
    1409,
    1407,
    1405,
    382,
    1402,
    380,
    1417,
    1415,
    1412,
    1421,
    2175,
    2174,
    777,
    774,
    771,
    784,
    732,
    725,
    722,
    2404,
    743,
    1716,
    676,
    674,
    668,
    2363,
    665,
    2360,
    685,
    1684,
    1681,
    626,
    624,
    622,
    2335,
    620,
    2333,
    617,
    2330,
    641,
    635,
    649,
    1646,
    1644,
    1642,
    2566,
    928,
    925,
    2530,
    2527,
    894,
    891,
    888,
    2501,
    2499,
    2496,
    858,
    856,
    854,
    851,
    1779,
    2692,
    2668,
    2665,
    2645,
    2643,
    2640,
    2651,
    2768,
    2759,
    2757,
    2744,
    2743,
    2741,
    2748,
    352,
    1382,
    340,
    337,
    333,
    1371,
    1369,
    307,
    300,
    296,
    2126,
    315,
    312,
    1347,
    1342,
    1350,
    261,
    258,
    250,
    2097,
    246,
    2094,
    271,
    268,
    264,
    1306,
    1301,
    1298,
    276,
    1312,
    1309,
    2115,
    203,
    2048,
    195,
    2045,
    191,
    2041,
    213,
    209,
    2056,
    1246,
    1244,
    1238,
    225,
    1234,
    222,
    1256,
    1253,
    1249,
    1262,
    2080,
    2079,
    154,
    1997,
    150,
    1995,
    147,
    1992,
    1989,
    163,
    160,
    2004,
    156,
    2001,
    1175,
    1174,
    1172,
    1170,
    1167,
    170,
    1164,
    167,
    1185,
    1183,
    1180,
    1177,
    174,
    1190,
    1188,
    2025,
    2024,
    2022,
    587,
    586,
    564,
    559,
    556,
    2290,
    573,
    1588,
    520,
    518,
    512,
    2268,
    508,
    2265,
    530,
    1568,
    1565,
    461,
    457,
    2233,
    450,
    2230,
    446,
    2226,
    479,
    471,
    489,
    1526,
    1523,
    1520,
    397,
    395,
    2185,
    392,
    2183,
    389,
    2180,
    2177,
    410,
    2194,
    402,
    422,
    1463,
    1461,
    1459,
    1456,
    1470,
    2455,
    799,
    2433,
    2430,
    779,
    776,
    773,
    2397,
    2394,
    2390,
    734,
    728,
    724,
    746,
    1717,
    2356,
    2354,
    2351,
    2348,
    1658,
    677,
    675,
    673,
    670,
    667,
    688,
    1685,
    1683,
    2606,
    2589,
    2586,
    2559,
    2556,
    2552,
    927,
    2523,
    2521,
    2518,
    2515,
    1784,
    2532,
    895,
    893,
    890,
    2718,
    2709,
    2707,
    2689,
    2687,
    2684,
    2663,
    2662,
    2660,
    2658,
    1825,
    2667,
    2769,
    1852,
    2760,
    2758,
    142,
    141,
    1139,
    1138,
    134,
    132,
    129,
    126,
    1982,
    1129,
    1128,
    1126,
    1131,
    113,
    111,
    108,
    105,
    1972,
    101,
    1970,
    120,
    118,
    115,
    1109,
    1108,
    1106,
    1104,
    123,
    1113,
    1111,
    82,
    79,
    1951,
    75,
    1949,
    72,
    1946,
    92,
    89,
    86,
    1956,
    1077,
    1076,
    1074,
    1072,
    98,
    1069,
    96,
    1084,
    1082,
    1079,
    1088,
    1968,
    1967,
    48,
    45,
    1916,
    42,
    1914,
    39,
    1911,
    1908,
    60,
    57,
    54,
    1923,
    50,
    1920,
    1031,
    1030,
    1028,
    1026,
    67,
    1023,
    65,
    1020,
    62,
    1041,
    1039,
    1036,
    1033,
    69,
    1046,
    1044,
    1944,
    1943,
    1941,
    11,
    9,
    1868,
    7,
    1865,
    1862,
    1859,
    20,
    1878,
    16,
    1875,
    13,
    1872,
    970,
    968,
    966,
    963,
    29,
    960,
    26,
    23,
    983,
    981,
    978,
    975,
    33,
    971,
    31,
    990,
    988,
    985,
    1906,
    1904,
    1902,
    993,
    351,
    2145,
    1383,
    331,
    330,
    328,
    326,
    2137,
    323,
    2135,
    339,
    1372,
    1370,
    294,
    293,
    291,
    289,
    2122,
    286,
    2120,
    283,
    2117,
    309,
    303,
    317,
    1348,
    1346,
    1344,
    245,
    244,
    242,
    2090,
    239,
    2088,
    236,
    2085,
    2082,
    260,
    2099,
    249,
    270,
    1307,
    1305,
    1303,
    1300,
    1314,
    189,
    2038,
    186,
    2036,
    183,
    2033,
    2030,
    2026,
    206,
    198,
    2047,
    194,
    216,
    1247,
    1245,
    1243,
    1240,
    227,
    1237,
    1255,
    2310,
    2302,
    2300,
    2286,
    2284,
    2281,
    565,
    563,
    561,
    558,
    575,
    1589,
    2261,
    2259,
    2256,
    2253,
    1542,
    521,
    519,
    517,
    514,
    2270,
    511,
    533,
    1569,
    1567,
    2223,
    2221,
    2218,
    2215,
    1483,
    2211,
    1480,
    459,
    456,
    453,
    2232,
    449,
    474,
    491,
    1527,
    1525,
    1522,
    2475,
    2467,
    2465,
    2451,
    2449,
    2446,
    801,
    800,
    2426,
    2424,
    2421,
    2418,
    1723,
    2435,
    780,
    778,
    775,
    2387,
    2385,
    2382,
    2379,
    1695,
    2375,
    1693,
    2396,
    735,
    733,
    730,
    727,
    749,
    1718,
    2616,
    2615,
    2604,
    2603,
    2601,
    2584,
    2583,
    2581,
    2579,
    1800,
    2591,
    2550,
    2549,
    2547,
    2545,
    1792,
    2542,
    1790,
    2558,
    929,
    2719,
    1841,
    2710,
    2708,
    1833,
    1831,
    2690,
    2688,
    2686,
    1815,
    1809,
    1808,
    1774,
    1756,
    1754,
    1737,
    1736,
    1734,
    1739,
    1816,
    1711,
    1676,
    1674,
    633,
    629,
    1638,
    1636,
    1633,
    1641,
    598,
    1605,
    1604,
    1602,
    1600,
    605,
    1609,
    1607,
    2327,
    887,
    853,
    1775,
    822,
    820,
    1757,
    1755,
    1584,
    524,
    1560,
    1558,
    468,
    464,
    1514,
    1511,
    1508,
    1519,
    408,
    404,
    400,
    1452,
    1447,
    1444,
    417,
    1458,
    1455,
    2208,
    364,
    361,
    358,
    2154,
    1401,
    1400,
    1398,
    1396,
    374,
    1393,
    371,
    1408,
    1406,
    1403,
    1413,
    2173,
    2172,
    772,
    726,
    723,
    1712,
    672,
    669,
    666,
    682,
    1678,
    1675,
    625,
    623,
    621,
    618,
    2331,
    636,
    632,
    1639,
    1637,
    1635,
    920,
    918,
    884,
    880,
    889,
    849,
    848,
    847,
    846,
    2497,
    855,
    852,
    1776,
    2641,
    2742,
    2787,
    1380,
    334,
    1367,
    1365,
    301,
    297,
    1340,
    1338,
    1335,
    1343,
    255,
    251,
    247,
    1296,
    1291,
    1288,
    265,
    1302,
    1299,
    2113,
    204,
    196,
    192,
    2042,
    1232,
    1230,
    1224,
    214,
    1220,
    210,
    1242,
    1239,
    1235,
    1250,
    2077,
    2075,
    151,
    148,
    1993,
    144,
    1990,
    1163,
    1162,
    1160,
    1158,
    1155,
    161,
    1152,
    157,
    1173,
    1171,
    1168,
    1165,
    168,
    1181,
    1178,
    2021,
    2020,
    2018,
    2023,
    585,
    560,
    557,
    1585,
    516,
    509,
    1562,
    1559,
    458,
    447,
    2227,
    472,
    1516,
    1513,
    1510,
    398,
    396,
    393,
    390,
    2181,
    386,
    2178,
    407,
    1453,
    1451,
    1449,
    1446,
    420,
    1460,
    2209,
    769,
    764,
    720,
    712,
    2391,
    729,
    1713,
    664,
    663,
    661,
    659,
    2352,
    656,
    2349,
    671,
    1679,
    1677,
    2553,
    922,
    919,
    2519,
    2516,
    885,
    883,
    881,
    2685,
    2661,
    2659,
    2767,
    2756,
    2755,
    140,
    1137,
    1136,
    130,
    127,
    1125,
    1124,
    1122,
    1127,
    109,
    106,
    102,
    1103,
    1102,
    1100,
    1098,
    116,
    1107,
    1105,
    1980,
    80,
    76,
    73,
    1947,
    1068,
    1067,
    1065,
    1063,
    90,
    1060,
    87,
    1075,
    1073,
    1070,
    1080,
    1966,
    1965,
    46,
    43,
    40,
    1912,
    36,
    1909,
    1019,
    1018,
    1016,
    1014,
    58,
    1011,
    55,
    1008,
    51,
    1029,
    1027,
    1024,
    1021,
    63,
    1037,
    1034,
    1940,
    1939,
    1937,
    1942,
    8,
    1866,
    4,
    1863,
    1,
    1860,
    956,
    954,
    952,
    949,
    946,
    17,
    14,
    969,
    967,
    964,
    961,
    27,
    957,
    24,
    979,
    976,
    972,
    1901,
    1900,
    1898,
    1896,
    986,
    1905,
    1903,
    350,
    349,
    1381,
    329,
    327,
    324,
    1368,
    1366,
    292,
    290,
    287,
    284,
    2118,
    304,
    1341,
    1339,
    1337,
    1345,
    243,
    240,
    237,
    2086,
    233,
    2083,
    254,
    1297,
    1295,
    1293,
    1290,
    1304,
    2114,
    190,
    187,
    184,
    2034,
    180,
    2031,
    177,
    2027,
    199,
    1233,
    1231,
    1229,
    1226,
    217,
    1223,
    1241,
    2078,
    2076,
    584,
    555,
    554,
    552,
    550,
    2282,
    562,
    1586,
    507,
    506,
    504,
    502,
    2257,
    499,
    2254,
    515,
    1563,
    1561,
    445,
    443,
    441,
    2219,
    438,
    2216,
    435,
    2212,
    460,
    454,
    475,
    1517,
    1515,
    1512,
    2447,
    798,
    797,
    2422,
    2419,
    770,
    768,
    766,
    2383,
    2380,
    2376,
    721,
    719,
    717,
    714,
    731,
    1714,
    2602,
    2582,
    2580,
    2548,
    2546,
    2543,
    923,
    921,
    2717,
    2706,
    2705,
    2683,
    2682,
    2680,
    1771,
    1752,
    1750,
    1733,
    1732,
    1731,
    1735,
    1814,
    1707,
    1670,
    1668,
    1631,
    1629,
    1626,
    1634,
    1599,
    1598,
    1596,
    1594,
    1603,
    1601,
    2326,
    1772,
    1753,
    1751,
    1581,
    1554,
    1552,
    1504,
    1501,
    1498,
    1509,
    1442,
    1437,
    1434,
    401,
    1448,
    1445,
    2206,
    1392,
    1391,
    1389,
    1387,
    1384,
    359,
    1399,
    1397,
    1394,
    1404,
    2171,
    2170,
    1708,
    1672,
    1669,
    619,
    1632,
    1630,
    1628,
    1773,
    1378,
    1363,
    1361,
    1333,
    1328,
    1336,
    1286,
    1281,
    1278,
    248,
    1292,
    1289,
    2111,
    1218,
    1216,
    1210,
    197,
    1206,
    193,
    1228,
    1225,
    1221,
    1236,
    2073,
    2071,
    1151,
    1150,
    1148,
    1146,
    152,
    1143,
    149,
    1140,
    145,
    1161,
    1159,
    1156,
    1153,
    158,
    1169,
    1166,
    2017,
    2016,
    2014,
    2019,
    1582,
    510,
    1556,
    1553,
    452,
    448,
    1506,
    1500,
    394,
    391,
    387,
    1443,
    1441,
    1439,
    1436,
    1450,
    2207,
    765,
    716,
    713,
    1709,
    662,
    660,
    657,
    1673,
    1671,
    916,
    914,
    879,
    878,
    877,
    882,
    1135,
    1134,
    1121,
    1120,
    1118,
    1123,
    1097,
    1096,
    1094,
    1092,
    103,
    1101,
    1099,
    1979,
    1059,
    1058,
    1056,
    1054,
    77,
    1051,
    74,
    1066,
    1064,
    1061,
    1071,
    1964,
    1963,
    1007,
    1006,
    1004,
    1002,
    999,
    41,
    996,
    37,
    1017,
    1015,
    1012,
    1009,
    52,
    1025,
    1022,
    1936,
    1935,
    1933,
    1938,
    942,
    940,
    938,
    935,
    932,
    5,
    2,
    955,
    953,
    950,
    947,
    18,
    943,
    15,
    965,
    962,
    958,
    1895,
    1894,
    1892,
    1890,
    973,
    1899,
    1897,
    1379,
    325,
    1364,
    1362,
    288,
    285,
    1334,
    1332,
    1330,
    241,
    238,
    234,
    1287,
    1285,
    1283,
    1280,
    1294,
    2112,
    188,
    185,
    181,
    178,
    2028,
    1219,
    1217,
    1215,
    1212,
    200,
    1209,
    1227,
    2074,
    2072,
    583,
    553,
    551,
    1583,
    505,
    503,
    500,
    513,
    1557,
    1555,
    444,
    442,
    439,
    436,
    2213,
    455,
    451,
    1507,
    1505,
    1502,
    796,
    763,
    762,
    760,
    767,
    711,
    710,
    708,
    706,
    2377,
    718,
    715,
    1710,
    2544,
    917,
    915,
    2681,
    1627,
    1597,
    1595,
    2325,
    1769,
    1749,
    1747,
    1499,
    1438,
    1435,
    2204,
    1390,
    1388,
    1385,
    1395,
    2169,
    2167,
    1704,
    1665,
    1662,
    1625,
    1623,
    1620,
    1770,
    1329,
    1282,
    1279,
    2109,
    1214,
    1207,
    1222,
    2068,
    2065,
    1149,
    1147,
    1144,
    1141,
    146,
    1157,
    1154,
    2013,
    2011,
    2008,
    2015,
    1579,
    1549,
    1546,
    1495,
    1487,
    1433,
    1431,
    1428,
    1425,
    388,
    1440,
    2205,
    1705,
    658,
    1667,
    1664,
    1119,
    1095,
    1093,
    1978,
    1057,
    1055,
    1052,
    1062,
    1962,
    1960,
    1005,
    1003,
    1e3,
    997,
    38,
    1013,
    1010,
    1932,
    1930,
    1927,
    1934,
    941,
    939,
    936,
    933,
    6,
    930,
    3,
    951,
    948,
    944,
    1889,
    1887,
    1884,
    1881,
    959,
    1893,
    1891,
    35,
    1377,
    1360,
    1358,
    1327,
    1325,
    1322,
    1331,
    1277,
    1275,
    1272,
    1269,
    235,
    1284,
    2110,
    1205,
    1204,
    1201,
    1198,
    182,
    1195,
    179,
    1213,
    2070,
    2067,
    1580,
    501,
    1551,
    1548,
    440,
    437,
    1497,
    1494,
    1490,
    1503,
    761,
    709,
    707,
    1706,
    913,
    912,
    2198,
    1386,
    2164,
    2161,
    1621,
    1766,
    2103,
    1208,
    2058,
    2054,
    1145,
    1142,
    2005,
    2002,
    1999,
    2009,
    1488,
    1429,
    1426,
    2200,
    1698,
    1659,
    1656,
    1975,
    1053,
    1957,
    1954,
    1001,
    998,
    1924,
    1921,
    1918,
    1928,
    937,
    934,
    931,
    1879,
    1876,
    1873,
    1870,
    945,
    1885,
    1882,
    1323,
    1273,
    1270,
    2105,
    1202,
    1199,
    1196,
    1211,
    2061,
    2057,
    1576,
    1543,
    1540,
    1484,
    1481,
    1478,
    1491,
    1700
  ]);
  return PDF417Common2;
}();
var PDF417DetectorResult = function() {
  function PDF417DetectorResult2(bits, points) {
    this.bits = bits;
    this.points = points;
  }
  PDF417DetectorResult2.prototype.getBits = function() {
    return this.bits;
  };
  PDF417DetectorResult2.prototype.getPoints = function() {
    return this.points;
  };
  return PDF417DetectorResult2;
}();
var __values$r = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return {value: o && o[i++], done: !o};
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var Detector$3 = function() {
  function Detector2() {
  }
  Detector2.detectMultiple = function(image, hints, multiple) {
    var bitMatrix = image.getBlackMatrix();
    var barcodeCoordinates = Detector2.detect(multiple, bitMatrix);
    if (!barcodeCoordinates.length) {
      bitMatrix = bitMatrix.clone();
      bitMatrix.rotate180();
      barcodeCoordinates = Detector2.detect(multiple, bitMatrix);
    }
    return new PDF417DetectorResult(bitMatrix, barcodeCoordinates);
  };
  Detector2.detect = function(multiple, bitMatrix) {
    var e_1, _a;
    var barcodeCoordinates = new Array();
    var row = 0;
    var column = 0;
    var foundBarcodeInRow = false;
    while (row < bitMatrix.getHeight()) {
      var vertices = Detector2.findVertices(bitMatrix, row, column);
      if (vertices[0] == null && vertices[3] == null) {
        if (!foundBarcodeInRow) {
          break;
        }
        foundBarcodeInRow = false;
        column = 0;
        try {
          for (var barcodeCoordinates_1 = (e_1 = void 0, __values$r(barcodeCoordinates)), barcodeCoordinates_1_1 = barcodeCoordinates_1.next(); !barcodeCoordinates_1_1.done; barcodeCoordinates_1_1 = barcodeCoordinates_1.next()) {
            var barcodeCoordinate = barcodeCoordinates_1_1.value;
            if (barcodeCoordinate[1] != null) {
              row = Math.trunc(Math.max(row, barcodeCoordinate[1].getY()));
            }
            if (barcodeCoordinate[3] != null) {
              row = Math.max(row, Math.trunc(barcodeCoordinate[3].getY()));
            }
          }
        } catch (e_1_1) {
          e_1 = {error: e_1_1};
        } finally {
          try {
            if (barcodeCoordinates_1_1 && !barcodeCoordinates_1_1.done && (_a = barcodeCoordinates_1.return))
              _a.call(barcodeCoordinates_1);
          } finally {
            if (e_1)
              throw e_1.error;
          }
        }
        row += Detector2.ROW_STEP;
        continue;
      }
      foundBarcodeInRow = true;
      barcodeCoordinates.push(vertices);
      if (!multiple) {
        break;
      }
      if (vertices[2] != null) {
        column = Math.trunc(vertices[2].getX());
        row = Math.trunc(vertices[2].getY());
      } else {
        column = Math.trunc(vertices[4].getX());
        row = Math.trunc(vertices[4].getY());
      }
    }
    return barcodeCoordinates;
  };
  Detector2.findVertices = function(matrix, startRow, startColumn) {
    var height = matrix.getHeight();
    var width = matrix.getWidth();
    var result = new Array(8);
    Detector2.copyToResult(result, Detector2.findRowsWithPattern(matrix, height, width, startRow, startColumn, Detector2.START_PATTERN), Detector2.INDEXES_START_PATTERN);
    if (result[4] != null) {
      startColumn = Math.trunc(result[4].getX());
      startRow = Math.trunc(result[4].getY());
    }
    Detector2.copyToResult(result, Detector2.findRowsWithPattern(matrix, height, width, startRow, startColumn, Detector2.STOP_PATTERN), Detector2.INDEXES_STOP_PATTERN);
    return result;
  };
  Detector2.copyToResult = function(result, tmpResult, destinationIndexes) {
    for (var i = 0; i < destinationIndexes.length; i++) {
      result[destinationIndexes[i]] = tmpResult[i];
    }
  };
  Detector2.findRowsWithPattern = function(matrix, height, width, startRow, startColumn, pattern) {
    var result = new Array(4);
    var found = false;
    var counters = new Int32Array(pattern.length);
    for (; startRow < height; startRow += Detector2.ROW_STEP) {
      var loc = Detector2.findGuardPattern(matrix, startColumn, startRow, width, false, pattern, counters);
      if (loc != null) {
        while (startRow > 0) {
          var previousRowLoc = Detector2.findGuardPattern(matrix, startColumn, --startRow, width, false, pattern, counters);
          if (previousRowLoc != null) {
            loc = previousRowLoc;
          } else {
            startRow++;
            break;
          }
        }
        result[0] = new ResultPoint(loc[0], startRow);
        result[1] = new ResultPoint(loc[1], startRow);
        found = true;
        break;
      }
    }
    var stopRow = startRow + 1;
    if (found) {
      var skippedRowCount = 0;
      var previousRowLoc = Int32Array.from([Math.trunc(result[0].getX()), Math.trunc(result[1].getX())]);
      for (; stopRow < height; stopRow++) {
        var loc = Detector2.findGuardPattern(matrix, previousRowLoc[0], stopRow, width, false, pattern, counters);
        if (loc != null && Math.abs(previousRowLoc[0] - loc[0]) < Detector2.MAX_PATTERN_DRIFT && Math.abs(previousRowLoc[1] - loc[1]) < Detector2.MAX_PATTERN_DRIFT) {
          previousRowLoc = loc;
          skippedRowCount = 0;
        } else {
          if (skippedRowCount > Detector2.SKIPPED_ROW_COUNT_MAX) {
            break;
          } else {
            skippedRowCount++;
          }
        }
      }
      stopRow -= skippedRowCount + 1;
      result[2] = new ResultPoint(previousRowLoc[0], stopRow);
      result[3] = new ResultPoint(previousRowLoc[1], stopRow);
    }
    if (stopRow - startRow < Detector2.BARCODE_MIN_HEIGHT) {
      Arrays.fill(result, null);
    }
    return result;
  };
  Detector2.findGuardPattern = function(matrix, column, row, width, whiteFirst, pattern, counters) {
    Arrays.fillWithin(counters, 0, counters.length, 0);
    var patternStart = column;
    var pixelDrift = 0;
    while (matrix.get(patternStart, row) && patternStart > 0 && pixelDrift++ < Detector2.MAX_PIXEL_DRIFT) {
      patternStart--;
    }
    var x = patternStart;
    var counterPosition = 0;
    var patternLength = pattern.length;
    for (var isWhite = whiteFirst; x < width; x++) {
      var pixel = matrix.get(x, row);
      if (pixel !== isWhite) {
        counters[counterPosition]++;
      } else {
        if (counterPosition === patternLength - 1) {
          if (Detector2.patternMatchVariance(counters, pattern, Detector2.MAX_INDIVIDUAL_VARIANCE) < Detector2.MAX_AVG_VARIANCE) {
            return new Int32Array([patternStart, x]);
          }
          patternStart += counters[0] + counters[1];
          System.arraycopy(counters, 2, counters, 0, counterPosition - 1);
          counters[counterPosition - 1] = 0;
          counters[counterPosition] = 0;
          counterPosition--;
        } else {
          counterPosition++;
        }
        counters[counterPosition] = 1;
        isWhite = !isWhite;
      }
    }
    if (counterPosition === patternLength - 1 && Detector2.patternMatchVariance(counters, pattern, Detector2.MAX_INDIVIDUAL_VARIANCE) < Detector2.MAX_AVG_VARIANCE) {
      return new Int32Array([patternStart, x - 1]);
    }
    return null;
  };
  Detector2.patternMatchVariance = function(counters, pattern, maxIndividualVariance) {
    var numCounters = counters.length;
    var total = 0;
    var patternLength = 0;
    for (var i = 0; i < numCounters; i++) {
      total += counters[i];
      patternLength += pattern[i];
    }
    if (total < patternLength) {
      return Infinity;
    }
    var unitBarWidth = total / patternLength;
    maxIndividualVariance *= unitBarWidth;
    var totalVariance = 0;
    for (var x = 0; x < numCounters; x++) {
      var counter = counters[x];
      var scaledPattern = pattern[x] * unitBarWidth;
      var variance = counter > scaledPattern ? counter - scaledPattern : scaledPattern - counter;
      if (variance > maxIndividualVariance) {
        return Infinity;
      }
      totalVariance += variance;
    }
    return totalVariance / total;
  };
  Detector2.INDEXES_START_PATTERN = Int32Array.from([0, 4, 1, 5]);
  Detector2.INDEXES_STOP_PATTERN = Int32Array.from([6, 2, 7, 3]);
  Detector2.MAX_AVG_VARIANCE = 0.42;
  Detector2.MAX_INDIVIDUAL_VARIANCE = 0.8;
  Detector2.START_PATTERN = Int32Array.from([8, 1, 1, 1, 1, 1, 1, 3]);
  Detector2.STOP_PATTERN = Int32Array.from([7, 1, 1, 3, 1, 1, 1, 2, 1]);
  Detector2.MAX_PIXEL_DRIFT = 3;
  Detector2.MAX_PATTERN_DRIFT = 5;
  Detector2.SKIPPED_ROW_COUNT_MAX = 25;
  Detector2.ROW_STEP = 5;
  Detector2.BARCODE_MIN_HEIGHT = 10;
  return Detector2;
}();
var __values$s = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return {value: o && o[i++], done: !o};
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var ModulusPoly = function() {
  function ModulusPoly2(field, coefficients) {
    if (coefficients.length === 0) {
      throw new IllegalArgumentException();
    }
    this.field = field;
    var coefficientsLength = coefficients.length;
    if (coefficientsLength > 1 && coefficients[0] === 0) {
      var firstNonZero = 1;
      while (firstNonZero < coefficientsLength && coefficients[firstNonZero] === 0) {
        firstNonZero++;
      }
      if (firstNonZero === coefficientsLength) {
        this.coefficients = new Int32Array([0]);
      } else {
        this.coefficients = new Int32Array(coefficientsLength - firstNonZero);
        System.arraycopy(coefficients, firstNonZero, this.coefficients, 0, this.coefficients.length);
      }
    } else {
      this.coefficients = coefficients;
    }
  }
  ModulusPoly2.prototype.getCoefficients = function() {
    return this.coefficients;
  };
  ModulusPoly2.prototype.getDegree = function() {
    return this.coefficients.length - 1;
  };
  ModulusPoly2.prototype.isZero = function() {
    return this.coefficients[0] === 0;
  };
  ModulusPoly2.prototype.getCoefficient = function(degree) {
    return this.coefficients[this.coefficients.length - 1 - degree];
  };
  ModulusPoly2.prototype.evaluateAt = function(a) {
    var e_1, _a;
    if (a === 0) {
      return this.getCoefficient(0);
    }
    if (a === 1) {
      var sum = 0;
      try {
        for (var _b = __values$s(this.coefficients), _c = _b.next(); !_c.done; _c = _b.next()) {
          var coefficient = _c.value;
          sum = this.field.add(sum, coefficient);
        }
      } catch (e_1_1) {
        e_1 = {error: e_1_1};
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return))
            _a.call(_b);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
      return sum;
    }
    var result = this.coefficients[0];
    var size = this.coefficients.length;
    for (var i = 1; i < size; i++) {
      result = this.field.add(this.field.multiply(a, result), this.coefficients[i]);
    }
    return result;
  };
  ModulusPoly2.prototype.add = function(other) {
    if (!this.field.equals(other.field)) {
      throw new IllegalArgumentException("ModulusPolys do not have same ModulusGF field");
    }
    if (this.isZero()) {
      return other;
    }
    if (other.isZero()) {
      return this;
    }
    var smallerCoefficients = this.coefficients;
    var largerCoefficients = other.coefficients;
    if (smallerCoefficients.length > largerCoefficients.length) {
      var temp = smallerCoefficients;
      smallerCoefficients = largerCoefficients;
      largerCoefficients = temp;
    }
    var sumDiff = new Int32Array(largerCoefficients.length);
    var lengthDiff = largerCoefficients.length - smallerCoefficients.length;
    System.arraycopy(largerCoefficients, 0, sumDiff, 0, lengthDiff);
    for (var i = lengthDiff; i < largerCoefficients.length; i++) {
      sumDiff[i] = this.field.add(smallerCoefficients[i - lengthDiff], largerCoefficients[i]);
    }
    return new ModulusPoly2(this.field, sumDiff);
  };
  ModulusPoly2.prototype.subtract = function(other) {
    if (!this.field.equals(other.field)) {
      throw new IllegalArgumentException("ModulusPolys do not have same ModulusGF field");
    }
    if (other.isZero()) {
      return this;
    }
    return this.add(other.negative());
  };
  ModulusPoly2.prototype.multiply = function(other) {
    if (other instanceof ModulusPoly2) {
      return this.multiplyOther(other);
    }
    return this.multiplyScalar(other);
  };
  ModulusPoly2.prototype.multiplyOther = function(other) {
    if (!this.field.equals(other.field)) {
      throw new IllegalArgumentException("ModulusPolys do not have same ModulusGF field");
    }
    if (this.isZero() || other.isZero()) {
      return new ModulusPoly2(this.field, new Int32Array([0]));
    }
    var aCoefficients = this.coefficients;
    var aLength = aCoefficients.length;
    var bCoefficients = other.coefficients;
    var bLength = bCoefficients.length;
    var product = new Int32Array(aLength + bLength - 1);
    for (var i = 0; i < aLength; i++) {
      var aCoeff = aCoefficients[i];
      for (var j = 0; j < bLength; j++) {
        product[i + j] = this.field.add(product[i + j], this.field.multiply(aCoeff, bCoefficients[j]));
      }
    }
    return new ModulusPoly2(this.field, product);
  };
  ModulusPoly2.prototype.negative = function() {
    var size = this.coefficients.length;
    var negativeCoefficients = new Int32Array(size);
    for (var i = 0; i < size; i++) {
      negativeCoefficients[i] = this.field.subtract(0, this.coefficients[i]);
    }
    return new ModulusPoly2(this.field, negativeCoefficients);
  };
  ModulusPoly2.prototype.multiplyScalar = function(scalar) {
    if (scalar === 0) {
      return new ModulusPoly2(this.field, new Int32Array([0]));
    }
    if (scalar === 1) {
      return this;
    }
    var size = this.coefficients.length;
    var product = new Int32Array(size);
    for (var i = 0; i < size; i++) {
      product[i] = this.field.multiply(this.coefficients[i], scalar);
    }
    return new ModulusPoly2(this.field, product);
  };
  ModulusPoly2.prototype.multiplyByMonomial = function(degree, coefficient) {
    if (degree < 0) {
      throw new IllegalArgumentException();
    }
    if (coefficient === 0) {
      return new ModulusPoly2(this.field, new Int32Array([0]));
    }
    var size = this.coefficients.length;
    var product = new Int32Array(size + degree);
    for (var i = 0; i < size; i++) {
      product[i] = this.field.multiply(this.coefficients[i], coefficient);
    }
    return new ModulusPoly2(this.field, product);
  };
  ModulusPoly2.prototype.toString = function() {
    var result = new StringBuilder();
    for (var degree = this.getDegree(); degree >= 0; degree--) {
      var coefficient = this.getCoefficient(degree);
      if (coefficient !== 0) {
        if (coefficient < 0) {
          result.append(" - ");
          coefficient = -coefficient;
        } else {
          if (result.length() > 0) {
            result.append(" + ");
          }
        }
        if (degree === 0 || coefficient !== 1) {
          result.append(coefficient);
        }
        if (degree !== 0) {
          if (degree === 1) {
            result.append("x");
          } else {
            result.append("x^");
            result.append(degree);
          }
        }
      }
    }
    return result.toString();
  };
  return ModulusPoly2;
}();
var ModulusBase = function() {
  function ModulusBase2() {
  }
  ModulusBase2.prototype.add = function(a, b) {
    return (a + b) % this.modulus;
  };
  ModulusBase2.prototype.subtract = function(a, b) {
    return (this.modulus + a - b) % this.modulus;
  };
  ModulusBase2.prototype.exp = function(a) {
    return this.expTable[a];
  };
  ModulusBase2.prototype.log = function(a) {
    if (a === 0) {
      throw new IllegalArgumentException();
    }
    return this.logTable[a];
  };
  ModulusBase2.prototype.inverse = function(a) {
    if (a === 0) {
      throw new ArithmeticException();
    }
    return this.expTable[this.modulus - this.logTable[a] - 1];
  };
  ModulusBase2.prototype.multiply = function(a, b) {
    if (a === 0 || b === 0) {
      return 0;
    }
    return this.expTable[(this.logTable[a] + this.logTable[b]) % (this.modulus - 1)];
  };
  ModulusBase2.prototype.getSize = function() {
    return this.modulus;
  };
  ModulusBase2.prototype.equals = function(o) {
    return o === this;
  };
  return ModulusBase2;
}();
var __extends$R = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (b2.hasOwnProperty(p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var ModulusGF = function(_super) {
  __extends$R(ModulusGF2, _super);
  function ModulusGF2(modulus, generator) {
    var _this = _super.call(this) || this;
    _this.modulus = modulus;
    _this.expTable = new Int32Array(modulus);
    _this.logTable = new Int32Array(modulus);
    var x = 1;
    for (var i = 0; i < modulus; i++) {
      _this.expTable[i] = x;
      x = x * generator % modulus;
    }
    for (var i = 0; i < modulus - 1; i++) {
      _this.logTable[_this.expTable[i]] = i;
    }
    _this.zero = new ModulusPoly(_this, new Int32Array([0]));
    _this.one = new ModulusPoly(_this, new Int32Array([1]));
    return _this;
  }
  ModulusGF2.prototype.getZero = function() {
    return this.zero;
  };
  ModulusGF2.prototype.getOne = function() {
    return this.one;
  };
  ModulusGF2.prototype.buildMonomial = function(degree, coefficient) {
    if (degree < 0) {
      throw new IllegalArgumentException();
    }
    if (coefficient === 0) {
      return this.zero;
    }
    var coefficients = new Int32Array(degree + 1);
    coefficients[0] = coefficient;
    return new ModulusPoly(this, coefficients);
  };
  ModulusGF2.PDF417_GF = new ModulusGF2(PDF417Common.NUMBER_OF_CODEWORDS, 3);
  return ModulusGF2;
}(ModulusBase);
var __values$t = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return {value: o && o[i++], done: !o};
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var ErrorCorrection = function() {
  function ErrorCorrection2() {
    this.field = ModulusGF.PDF417_GF;
  }
  ErrorCorrection2.prototype.decode = function(received, numECCodewords, erasures) {
    var e_1, _a;
    var poly = new ModulusPoly(this.field, received);
    var S = new Int32Array(numECCodewords);
    var error = false;
    for (var i = numECCodewords; i > 0; i--) {
      var evaluation = poly.evaluateAt(this.field.exp(i));
      S[numECCodewords - i] = evaluation;
      if (evaluation !== 0) {
        error = true;
      }
    }
    if (!error) {
      return 0;
    }
    var knownErrors = this.field.getOne();
    if (erasures != null) {
      try {
        for (var erasures_1 = __values$t(erasures), erasures_1_1 = erasures_1.next(); !erasures_1_1.done; erasures_1_1 = erasures_1.next()) {
          var erasure = erasures_1_1.value;
          var b = this.field.exp(received.length - 1 - erasure);
          var term = new ModulusPoly(this.field, new Int32Array([this.field.subtract(0, b), 1]));
          knownErrors = knownErrors.multiply(term);
        }
      } catch (e_1_1) {
        e_1 = {error: e_1_1};
      } finally {
        try {
          if (erasures_1_1 && !erasures_1_1.done && (_a = erasures_1.return))
            _a.call(erasures_1);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
    }
    var syndrome = new ModulusPoly(this.field, S);
    var sigmaOmega = this.runEuclideanAlgorithm(this.field.buildMonomial(numECCodewords, 1), syndrome, numECCodewords);
    var sigma = sigmaOmega[0];
    var omega = sigmaOmega[1];
    var errorLocations = this.findErrorLocations(sigma);
    var errorMagnitudes = this.findErrorMagnitudes(omega, sigma, errorLocations);
    for (var i = 0; i < errorLocations.length; i++) {
      var position = received.length - 1 - this.field.log(errorLocations[i]);
      if (position < 0) {
        throw ChecksumException.getChecksumInstance();
      }
      received[position] = this.field.subtract(received[position], errorMagnitudes[i]);
    }
    return errorLocations.length;
  };
  ErrorCorrection2.prototype.runEuclideanAlgorithm = function(a, b, R) {
    if (a.getDegree() < b.getDegree()) {
      var temp = a;
      a = b;
      b = temp;
    }
    var rLast = a;
    var r = b;
    var tLast = this.field.getZero();
    var t = this.field.getOne();
    while (r.getDegree() >= Math.round(R / 2)) {
      var rLastLast = rLast;
      var tLastLast = tLast;
      rLast = r;
      tLast = t;
      if (rLast.isZero()) {
        throw ChecksumException.getChecksumInstance();
      }
      r = rLastLast;
      var q = this.field.getZero();
      var denominatorLeadingTerm = rLast.getCoefficient(rLast.getDegree());
      var dltInverse = this.field.inverse(denominatorLeadingTerm);
      while (r.getDegree() >= rLast.getDegree() && !r.isZero()) {
        var degreeDiff = r.getDegree() - rLast.getDegree();
        var scale = this.field.multiply(r.getCoefficient(r.getDegree()), dltInverse);
        q = q.add(this.field.buildMonomial(degreeDiff, scale));
        r = r.subtract(rLast.multiplyByMonomial(degreeDiff, scale));
      }
      t = q.multiply(tLast).subtract(tLastLast).negative();
    }
    var sigmaTildeAtZero = t.getCoefficient(0);
    if (sigmaTildeAtZero === 0) {
      throw ChecksumException.getChecksumInstance();
    }
    var inverse = this.field.inverse(sigmaTildeAtZero);
    var sigma = t.multiply(inverse);
    var omega = r.multiply(inverse);
    return [sigma, omega];
  };
  ErrorCorrection2.prototype.findErrorLocations = function(errorLocator) {
    var numErrors = errorLocator.getDegree();
    var result = new Int32Array(numErrors);
    var e = 0;
    for (var i = 1; i < this.field.getSize() && e < numErrors; i++) {
      if (errorLocator.evaluateAt(i) === 0) {
        result[e] = this.field.inverse(i);
        e++;
      }
    }
    if (e !== numErrors) {
      throw ChecksumException.getChecksumInstance();
    }
    return result;
  };
  ErrorCorrection2.prototype.findErrorMagnitudes = function(errorEvaluator, errorLocator, errorLocations) {
    var errorLocatorDegree = errorLocator.getDegree();
    var formalDerivativeCoefficients = new Int32Array(errorLocatorDegree);
    for (var i = 1; i <= errorLocatorDegree; i++) {
      formalDerivativeCoefficients[errorLocatorDegree - i] = this.field.multiply(i, errorLocator.getCoefficient(i));
    }
    var formalDerivative = new ModulusPoly(this.field, formalDerivativeCoefficients);
    var s = errorLocations.length;
    var result = new Int32Array(s);
    for (var i = 0; i < s; i++) {
      var xiInverse = this.field.inverse(errorLocations[i]);
      var numerator = this.field.subtract(0, errorEvaluator.evaluateAt(xiInverse));
      var denominator = this.field.inverse(formalDerivative.evaluateAt(xiInverse));
      result[i] = this.field.multiply(numerator, denominator);
    }
    return result;
  };
  return ErrorCorrection2;
}();
var BoundingBox = function() {
  function BoundingBox2(image, topLeft, bottomLeft, topRight, bottomRight) {
    if (image instanceof BoundingBox2) {
      this.constructor_2(image);
    } else {
      this.constructor_1(image, topLeft, bottomLeft, topRight, bottomRight);
    }
  }
  BoundingBox2.prototype.constructor_1 = function(image, topLeft, bottomLeft, topRight, bottomRight) {
    var leftUnspecified = topLeft == null || bottomLeft == null;
    var rightUnspecified = topRight == null || bottomRight == null;
    if (leftUnspecified && rightUnspecified) {
      throw new NotFoundException();
    }
    if (leftUnspecified) {
      topLeft = new ResultPoint(0, topRight.getY());
      bottomLeft = new ResultPoint(0, bottomRight.getY());
    } else if (rightUnspecified) {
      topRight = new ResultPoint(image.getWidth() - 1, topLeft.getY());
      bottomRight = new ResultPoint(image.getWidth() - 1, bottomLeft.getY());
    }
    this.image = image;
    this.topLeft = topLeft;
    this.bottomLeft = bottomLeft;
    this.topRight = topRight;
    this.bottomRight = bottomRight;
    this.minX = Math.trunc(Math.min(topLeft.getX(), bottomLeft.getX()));
    this.maxX = Math.trunc(Math.max(topRight.getX(), bottomRight.getX()));
    this.minY = Math.trunc(Math.min(topLeft.getY(), topRight.getY()));
    this.maxY = Math.trunc(Math.max(bottomLeft.getY(), bottomRight.getY()));
  };
  BoundingBox2.prototype.constructor_2 = function(boundingBox) {
    this.image = boundingBox.image;
    this.topLeft = boundingBox.getTopLeft();
    this.bottomLeft = boundingBox.getBottomLeft();
    this.topRight = boundingBox.getTopRight();
    this.bottomRight = boundingBox.getBottomRight();
    this.minX = boundingBox.getMinX();
    this.maxX = boundingBox.getMaxX();
    this.minY = boundingBox.getMinY();
    this.maxY = boundingBox.getMaxY();
  };
  BoundingBox2.merge = function(leftBox, rightBox) {
    if (leftBox == null) {
      return rightBox;
    }
    if (rightBox == null) {
      return leftBox;
    }
    return new BoundingBox2(leftBox.image, leftBox.topLeft, leftBox.bottomLeft, rightBox.topRight, rightBox.bottomRight);
  };
  BoundingBox2.prototype.addMissingRows = function(missingStartRows, missingEndRows, isLeft) {
    var newTopLeft = this.topLeft;
    var newBottomLeft = this.bottomLeft;
    var newTopRight = this.topRight;
    var newBottomRight = this.bottomRight;
    if (missingStartRows > 0) {
      var top_1 = isLeft ? this.topLeft : this.topRight;
      var newMinY = Math.trunc(top_1.getY() - missingStartRows);
      if (newMinY < 0) {
        newMinY = 0;
      }
      var newTop = new ResultPoint(top_1.getX(), newMinY);
      if (isLeft) {
        newTopLeft = newTop;
      } else {
        newTopRight = newTop;
      }
    }
    if (missingEndRows > 0) {
      var bottom = isLeft ? this.bottomLeft : this.bottomRight;
      var newMaxY = Math.trunc(bottom.getY() + missingEndRows);
      if (newMaxY >= this.image.getHeight()) {
        newMaxY = this.image.getHeight() - 1;
      }
      var newBottom = new ResultPoint(bottom.getX(), newMaxY);
      if (isLeft) {
        newBottomLeft = newBottom;
      } else {
        newBottomRight = newBottom;
      }
    }
    return new BoundingBox2(this.image, newTopLeft, newBottomLeft, newTopRight, newBottomRight);
  };
  BoundingBox2.prototype.getMinX = function() {
    return this.minX;
  };
  BoundingBox2.prototype.getMaxX = function() {
    return this.maxX;
  };
  BoundingBox2.prototype.getMinY = function() {
    return this.minY;
  };
  BoundingBox2.prototype.getMaxY = function() {
    return this.maxY;
  };
  BoundingBox2.prototype.getTopLeft = function() {
    return this.topLeft;
  };
  BoundingBox2.prototype.getTopRight = function() {
    return this.topRight;
  };
  BoundingBox2.prototype.getBottomLeft = function() {
    return this.bottomLeft;
  };
  BoundingBox2.prototype.getBottomRight = function() {
    return this.bottomRight;
  };
  return BoundingBox2;
}();
var BarcodeMetadata = function() {
  function BarcodeMetadata2(columnCount, rowCountUpperPart, rowCountLowerPart, errorCorrectionLevel) {
    this.columnCount = columnCount;
    this.errorCorrectionLevel = errorCorrectionLevel;
    this.rowCountUpperPart = rowCountUpperPart;
    this.rowCountLowerPart = rowCountLowerPart;
    this.rowCount = rowCountUpperPart + rowCountLowerPart;
  }
  BarcodeMetadata2.prototype.getColumnCount = function() {
    return this.columnCount;
  };
  BarcodeMetadata2.prototype.getErrorCorrectionLevel = function() {
    return this.errorCorrectionLevel;
  };
  BarcodeMetadata2.prototype.getRowCount = function() {
    return this.rowCount;
  };
  BarcodeMetadata2.prototype.getRowCountUpperPart = function() {
    return this.rowCountUpperPart;
  };
  BarcodeMetadata2.prototype.getRowCountLowerPart = function() {
    return this.rowCountLowerPart;
  };
  return BarcodeMetadata2;
}();
var Formatter = function() {
  function Formatter2() {
    this.buffer = "";
  }
  Formatter2.form = function(str, arr) {
    var i = -1;
    function callback(exp, p0, p1, p2, p3, p4) {
      if (exp === "%%")
        return "%";
      if (arr[++i] === void 0)
        return void 0;
      exp = p2 ? parseInt(p2.substr(1)) : void 0;
      var base = p3 ? parseInt(p3.substr(1)) : void 0;
      var val;
      switch (p4) {
        case "s":
          val = arr[i];
          break;
        case "c":
          val = arr[i][0];
          break;
        case "f":
          val = parseFloat(arr[i]).toFixed(exp);
          break;
        case "p":
          val = parseFloat(arr[i]).toPrecision(exp);
          break;
        case "e":
          val = parseFloat(arr[i]).toExponential(exp);
          break;
        case "x":
          val = parseInt(arr[i]).toString(base ? base : 16);
          break;
        case "d":
          val = parseFloat(parseInt(arr[i], base ? base : 10).toPrecision(exp)).toFixed(0);
          break;
      }
      val = typeof val === "object" ? JSON.stringify(val) : (+val).toString(base);
      var size = parseInt(p1);
      var ch = p1 && p1[0] + "" === "0" ? "0" : " ";
      while (val.length < size)
        val = p0 !== void 0 ? val + ch : ch + val;
      return val;
    }
    var regex = /%(-)?(0?[0-9]+)?([.][0-9]+)?([#][0-9]+)?([scfpexd%])/g;
    return str.replace(regex, callback);
  };
  Formatter2.prototype.format = function(append) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i];
    }
    this.buffer += Formatter2.form(append, args);
  };
  Formatter2.prototype.toString = function() {
    return this.buffer;
  };
  return Formatter2;
}();
var __values$u = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return {value: o && o[i++], done: !o};
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var DetectionResultColumn = function() {
  function DetectionResultColumn2(boundingBox) {
    this.boundingBox = new BoundingBox(boundingBox);
    this.codewords = new Array(boundingBox.getMaxY() - boundingBox.getMinY() + 1);
  }
  DetectionResultColumn2.prototype.getCodewordNearby = function(imageRow) {
    var codeword = this.getCodeword(imageRow);
    if (codeword != null) {
      return codeword;
    }
    for (var i = 1; i < DetectionResultColumn2.MAX_NEARBY_DISTANCE; i++) {
      var nearImageRow = this.imageRowToCodewordIndex(imageRow) - i;
      if (nearImageRow >= 0) {
        codeword = this.codewords[nearImageRow];
        if (codeword != null) {
          return codeword;
        }
      }
      nearImageRow = this.imageRowToCodewordIndex(imageRow) + i;
      if (nearImageRow < this.codewords.length) {
        codeword = this.codewords[nearImageRow];
        if (codeword != null) {
          return codeword;
        }
      }
    }
    return null;
  };
  DetectionResultColumn2.prototype.imageRowToCodewordIndex = function(imageRow) {
    return imageRow - this.boundingBox.getMinY();
  };
  DetectionResultColumn2.prototype.setCodeword = function(imageRow, codeword) {
    this.codewords[this.imageRowToCodewordIndex(imageRow)] = codeword;
  };
  DetectionResultColumn2.prototype.getCodeword = function(imageRow) {
    return this.codewords[this.imageRowToCodewordIndex(imageRow)];
  };
  DetectionResultColumn2.prototype.getBoundingBox = function() {
    return this.boundingBox;
  };
  DetectionResultColumn2.prototype.getCodewords = function() {
    return this.codewords;
  };
  DetectionResultColumn2.prototype.toString = function() {
    var e_1, _a;
    var formatter = new Formatter();
    var row = 0;
    try {
      for (var _b = __values$u(this.codewords), _c = _b.next(); !_c.done; _c = _b.next()) {
        var codeword = _c.value;
        if (codeword == null) {
          formatter.format("%3d:    |   %n", row++);
          continue;
        }
        formatter.format("%3d: %3d|%3d%n", row++, codeword.getRowNumber(), codeword.getValue());
      }
    } catch (e_1_1) {
      e_1 = {error: e_1_1};
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return))
          _a.call(_b);
      } finally {
        if (e_1)
          throw e_1.error;
      }
    }
    return formatter.toString();
  };
  DetectionResultColumn2.MAX_NEARBY_DISTANCE = 5;
  return DetectionResultColumn2;
}();
var __values$v = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return {value: o && o[i++], done: !o};
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = function(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m)
    return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
      ar.push(r.value);
  } catch (error) {
    e = {error};
  } finally {
    try {
      if (r && !r.done && (m = i["return"]))
        m.call(i);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar;
};
var BarcodeValue = function() {
  function BarcodeValue2() {
    this.values = new Map();
  }
  BarcodeValue2.prototype.setValue = function(value) {
    value = Math.trunc(value);
    var confidence = this.values.get(value);
    if (confidence == null) {
      confidence = 0;
    }
    confidence++;
    this.values.set(value, confidence);
  };
  BarcodeValue2.prototype.getValue = function() {
    var e_1, _a;
    var maxConfidence = -1;
    var result = new Array();
    var _loop_1 = function(key2, value2) {
      var entry = {
        getKey: function() {
          return key2;
        },
        getValue: function() {
          return value2;
        }
      };
      if (entry.getValue() > maxConfidence) {
        maxConfidence = entry.getValue();
        result = [];
        result.push(entry.getKey());
      } else if (entry.getValue() === maxConfidence) {
        result.push(entry.getKey());
      }
    };
    try {
      for (var _b = __values$v(this.values.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
        var _d = __read(_c.value, 2), key = _d[0], value = _d[1];
        _loop_1(key, value);
      }
    } catch (e_1_1) {
      e_1 = {error: e_1_1};
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return))
          _a.call(_b);
      } finally {
        if (e_1)
          throw e_1.error;
      }
    }
    return PDF417Common.toIntArray(result);
  };
  BarcodeValue2.prototype.getConfidence = function(value) {
    return this.values.get(value);
  };
  return BarcodeValue2;
}();
var __extends$S = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (b2.hasOwnProperty(p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __values$w = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return {value: o && o[i++], done: !o};
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var DetectionResultRowIndicatorColumn = function(_super) {
  __extends$S(DetectionResultRowIndicatorColumn2, _super);
  function DetectionResultRowIndicatorColumn2(boundingBox, isLeft) {
    var _this = _super.call(this, boundingBox) || this;
    _this._isLeft = isLeft;
    return _this;
  }
  DetectionResultRowIndicatorColumn2.prototype.setRowNumbers = function() {
    var e_1, _a;
    try {
      for (var _b = __values$w(this.getCodewords()), _c = _b.next(); !_c.done; _c = _b.next()) {
        var codeword = _c.value;
        if (codeword != null) {
          codeword.setRowNumberAsRowIndicatorColumn();
        }
      }
    } catch (e_1_1) {
      e_1 = {error: e_1_1};
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return))
          _a.call(_b);
      } finally {
        if (e_1)
          throw e_1.error;
      }
    }
  };
  DetectionResultRowIndicatorColumn2.prototype.adjustCompleteIndicatorColumnRowNumbers = function(barcodeMetadata) {
    var codewords = this.getCodewords();
    this.setRowNumbers();
    this.removeIncorrectCodewords(codewords, barcodeMetadata);
    var boundingBox = this.getBoundingBox();
    var top = this._isLeft ? boundingBox.getTopLeft() : boundingBox.getTopRight();
    var bottom = this._isLeft ? boundingBox.getBottomLeft() : boundingBox.getBottomRight();
    var firstRow = this.imageRowToCodewordIndex(Math.trunc(top.getY()));
    var lastRow = this.imageRowToCodewordIndex(Math.trunc(bottom.getY()));
    var barcodeRow = -1;
    var maxRowHeight = 1;
    var currentRowHeight = 0;
    for (var codewordsRow = firstRow; codewordsRow < lastRow; codewordsRow++) {
      if (codewords[codewordsRow] == null) {
        continue;
      }
      var codeword = codewords[codewordsRow];
      var rowDifference = codeword.getRowNumber() - barcodeRow;
      if (rowDifference === 0) {
        currentRowHeight++;
      } else if (rowDifference === 1) {
        maxRowHeight = Math.max(maxRowHeight, currentRowHeight);
        currentRowHeight = 1;
        barcodeRow = codeword.getRowNumber();
      } else if (rowDifference < 0 || codeword.getRowNumber() >= barcodeMetadata.getRowCount() || rowDifference > codewordsRow) {
        codewords[codewordsRow] = null;
      } else {
        var checkedRows = void 0;
        if (maxRowHeight > 2) {
          checkedRows = (maxRowHeight - 2) * rowDifference;
        } else {
          checkedRows = rowDifference;
        }
        var closePreviousCodewordFound = checkedRows >= codewordsRow;
        for (var i = 1; i <= checkedRows && !closePreviousCodewordFound; i++) {
          closePreviousCodewordFound = codewords[codewordsRow - i] != null;
        }
        if (closePreviousCodewordFound) {
          codewords[codewordsRow] = null;
        } else {
          barcodeRow = codeword.getRowNumber();
          currentRowHeight = 1;
        }
      }
    }
  };
  DetectionResultRowIndicatorColumn2.prototype.getRowHeights = function() {
    var e_2, _a;
    var barcodeMetadata = this.getBarcodeMetadata();
    if (barcodeMetadata == null) {
      return null;
    }
    this.adjustIncompleteIndicatorColumnRowNumbers(barcodeMetadata);
    var result = new Int32Array(barcodeMetadata.getRowCount());
    try {
      for (var _b = __values$w(this.getCodewords()), _c = _b.next(); !_c.done; _c = _b.next()) {
        var codeword = _c.value;
        if (codeword != null) {
          var rowNumber = codeword.getRowNumber();
          if (rowNumber >= result.length) {
            continue;
          }
          result[rowNumber]++;
        }
      }
    } catch (e_2_1) {
      e_2 = {error: e_2_1};
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return))
          _a.call(_b);
      } finally {
        if (e_2)
          throw e_2.error;
      }
    }
    return result;
  };
  DetectionResultRowIndicatorColumn2.prototype.adjustIncompleteIndicatorColumnRowNumbers = function(barcodeMetadata) {
    var boundingBox = this.getBoundingBox();
    var top = this._isLeft ? boundingBox.getTopLeft() : boundingBox.getTopRight();
    var bottom = this._isLeft ? boundingBox.getBottomLeft() : boundingBox.getBottomRight();
    var firstRow = this.imageRowToCodewordIndex(Math.trunc(top.getY()));
    var lastRow = this.imageRowToCodewordIndex(Math.trunc(bottom.getY()));
    var codewords = this.getCodewords();
    var barcodeRow = -1;
    for (var codewordsRow = firstRow; codewordsRow < lastRow; codewordsRow++) {
      if (codewords[codewordsRow] == null) {
        continue;
      }
      var codeword = codewords[codewordsRow];
      codeword.setRowNumberAsRowIndicatorColumn();
      var rowDifference = codeword.getRowNumber() - barcodeRow;
      if (rowDifference === 0)
        ;
      else if (rowDifference === 1) {
        barcodeRow = codeword.getRowNumber();
      } else if (codeword.getRowNumber() >= barcodeMetadata.getRowCount()) {
        codewords[codewordsRow] = null;
      } else {
        barcodeRow = codeword.getRowNumber();
      }
    }
  };
  DetectionResultRowIndicatorColumn2.prototype.getBarcodeMetadata = function() {
    var e_3, _a;
    var codewords = this.getCodewords();
    var barcodeColumnCount = new BarcodeValue();
    var barcodeRowCountUpperPart = new BarcodeValue();
    var barcodeRowCountLowerPart = new BarcodeValue();
    var barcodeECLevel = new BarcodeValue();
    try {
      for (var codewords_1 = __values$w(codewords), codewords_1_1 = codewords_1.next(); !codewords_1_1.done; codewords_1_1 = codewords_1.next()) {
        var codeword = codewords_1_1.value;
        if (codeword == null) {
          continue;
        }
        codeword.setRowNumberAsRowIndicatorColumn();
        var rowIndicatorValue = codeword.getValue() % 30;
        var codewordRowNumber = codeword.getRowNumber();
        if (!this._isLeft) {
          codewordRowNumber += 2;
        }
        switch (codewordRowNumber % 3) {
          case 0:
            barcodeRowCountUpperPart.setValue(rowIndicatorValue * 3 + 1);
            break;
          case 1:
            barcodeECLevel.setValue(rowIndicatorValue / 3);
            barcodeRowCountLowerPart.setValue(rowIndicatorValue % 3);
            break;
          case 2:
            barcodeColumnCount.setValue(rowIndicatorValue + 1);
            break;
        }
      }
    } catch (e_3_1) {
      e_3 = {error: e_3_1};
    } finally {
      try {
        if (codewords_1_1 && !codewords_1_1.done && (_a = codewords_1.return))
          _a.call(codewords_1);
      } finally {
        if (e_3)
          throw e_3.error;
      }
    }
    if (barcodeColumnCount.getValue().length === 0 || barcodeRowCountUpperPart.getValue().length === 0 || barcodeRowCountLowerPart.getValue().length === 0 || barcodeECLevel.getValue().length === 0 || barcodeColumnCount.getValue()[0] < 1 || barcodeRowCountUpperPart.getValue()[0] + barcodeRowCountLowerPart.getValue()[0] < PDF417Common.MIN_ROWS_IN_BARCODE || barcodeRowCountUpperPart.getValue()[0] + barcodeRowCountLowerPart.getValue()[0] > PDF417Common.MAX_ROWS_IN_BARCODE) {
      return null;
    }
    var barcodeMetadata = new BarcodeMetadata(barcodeColumnCount.getValue()[0], barcodeRowCountUpperPart.getValue()[0], barcodeRowCountLowerPart.getValue()[0], barcodeECLevel.getValue()[0]);
    this.removeIncorrectCodewords(codewords, barcodeMetadata);
    return barcodeMetadata;
  };
  DetectionResultRowIndicatorColumn2.prototype.removeIncorrectCodewords = function(codewords, barcodeMetadata) {
    for (var codewordRow = 0; codewordRow < codewords.length; codewordRow++) {
      var codeword = codewords[codewordRow];
      if (codewords[codewordRow] == null) {
        continue;
      }
      var rowIndicatorValue = codeword.getValue() % 30;
      var codewordRowNumber = codeword.getRowNumber();
      if (codewordRowNumber > barcodeMetadata.getRowCount()) {
        codewords[codewordRow] = null;
        continue;
      }
      if (!this._isLeft) {
        codewordRowNumber += 2;
      }
      switch (codewordRowNumber % 3) {
        case 0:
          if (rowIndicatorValue * 3 + 1 !== barcodeMetadata.getRowCountUpperPart()) {
            codewords[codewordRow] = null;
          }
          break;
        case 1:
          if (Math.trunc(rowIndicatorValue / 3) !== barcodeMetadata.getErrorCorrectionLevel() || rowIndicatorValue % 3 !== barcodeMetadata.getRowCountLowerPart()) {
            codewords[codewordRow] = null;
          }
          break;
        case 2:
          if (rowIndicatorValue + 1 !== barcodeMetadata.getColumnCount()) {
            codewords[codewordRow] = null;
          }
          break;
      }
    }
  };
  DetectionResultRowIndicatorColumn2.prototype.isLeft = function() {
    return this._isLeft;
  };
  DetectionResultRowIndicatorColumn2.prototype.toString = function() {
    return "IsLeft: " + this._isLeft + "\n" + _super.prototype.toString.call(this);
  };
  return DetectionResultRowIndicatorColumn2;
}(DetectionResultColumn);
var __values$x = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return {value: o && o[i++], done: !o};
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var DetectionResult = function() {
  function DetectionResult2(barcodeMetadata, boundingBox) {
    this.ADJUST_ROW_NUMBER_SKIP = 2;
    this.barcodeMetadata = barcodeMetadata;
    this.barcodeColumnCount = barcodeMetadata.getColumnCount();
    this.boundingBox = boundingBox;
    this.detectionResultColumns = new Array(this.barcodeColumnCount + 2);
  }
  DetectionResult2.prototype.getDetectionResultColumns = function() {
    this.adjustIndicatorColumnRowNumbers(this.detectionResultColumns[0]);
    this.adjustIndicatorColumnRowNumbers(this.detectionResultColumns[this.barcodeColumnCount + 1]);
    var unadjustedCodewordCount = PDF417Common.MAX_CODEWORDS_IN_BARCODE;
    var previousUnadjustedCount;
    do {
      previousUnadjustedCount = unadjustedCodewordCount;
      unadjustedCodewordCount = this.adjustRowNumbersAndGetCount();
    } while (unadjustedCodewordCount > 0 && unadjustedCodewordCount < previousUnadjustedCount);
    return this.detectionResultColumns;
  };
  DetectionResult2.prototype.adjustIndicatorColumnRowNumbers = function(detectionResultColumn) {
    if (detectionResultColumn != null) {
      detectionResultColumn.adjustCompleteIndicatorColumnRowNumbers(this.barcodeMetadata);
    }
  };
  DetectionResult2.prototype.adjustRowNumbersAndGetCount = function() {
    var unadjustedCount = this.adjustRowNumbersByRow();
    if (unadjustedCount === 0) {
      return 0;
    }
    for (var barcodeColumn = 1; barcodeColumn < this.barcodeColumnCount + 1; barcodeColumn++) {
      var codewords = this.detectionResultColumns[barcodeColumn].getCodewords();
      for (var codewordsRow = 0; codewordsRow < codewords.length; codewordsRow++) {
        if (codewords[codewordsRow] == null) {
          continue;
        }
        if (!codewords[codewordsRow].hasValidRowNumber()) {
          this.adjustRowNumbers(barcodeColumn, codewordsRow, codewords);
        }
      }
    }
    return unadjustedCount;
  };
  DetectionResult2.prototype.adjustRowNumbersByRow = function() {
    this.adjustRowNumbersFromBothRI();
    var unadjustedCount = this.adjustRowNumbersFromLRI();
    return unadjustedCount + this.adjustRowNumbersFromRRI();
  };
  DetectionResult2.prototype.adjustRowNumbersFromBothRI = function() {
    if (this.detectionResultColumns[0] == null || this.detectionResultColumns[this.barcodeColumnCount + 1] == null) {
      return;
    }
    var LRIcodewords = this.detectionResultColumns[0].getCodewords();
    var RRIcodewords = this.detectionResultColumns[this.barcodeColumnCount + 1].getCodewords();
    for (var codewordsRow = 0; codewordsRow < LRIcodewords.length; codewordsRow++) {
      if (LRIcodewords[codewordsRow] != null && RRIcodewords[codewordsRow] != null && LRIcodewords[codewordsRow].getRowNumber() === RRIcodewords[codewordsRow].getRowNumber()) {
        for (var barcodeColumn = 1; barcodeColumn <= this.barcodeColumnCount; barcodeColumn++) {
          var codeword = this.detectionResultColumns[barcodeColumn].getCodewords()[codewordsRow];
          if (codeword == null) {
            continue;
          }
          codeword.setRowNumber(LRIcodewords[codewordsRow].getRowNumber());
          if (!codeword.hasValidRowNumber()) {
            this.detectionResultColumns[barcodeColumn].getCodewords()[codewordsRow] = null;
          }
        }
      }
    }
  };
  DetectionResult2.prototype.adjustRowNumbersFromRRI = function() {
    if (this.detectionResultColumns[this.barcodeColumnCount + 1] == null) {
      return 0;
    }
    var unadjustedCount = 0;
    var codewords = this.detectionResultColumns[this.barcodeColumnCount + 1].getCodewords();
    for (var codewordsRow = 0; codewordsRow < codewords.length; codewordsRow++) {
      if (codewords[codewordsRow] == null) {
        continue;
      }
      var rowIndicatorRowNumber = codewords[codewordsRow].getRowNumber();
      var invalidRowCounts = 0;
      for (var barcodeColumn = this.barcodeColumnCount + 1; barcodeColumn > 0 && invalidRowCounts < this.ADJUST_ROW_NUMBER_SKIP; barcodeColumn--) {
        var codeword = this.detectionResultColumns[barcodeColumn].getCodewords()[codewordsRow];
        if (codeword != null) {
          invalidRowCounts = DetectionResult2.adjustRowNumberIfValid(rowIndicatorRowNumber, invalidRowCounts, codeword);
          if (!codeword.hasValidRowNumber()) {
            unadjustedCount++;
          }
        }
      }
    }
    return unadjustedCount;
  };
  DetectionResult2.prototype.adjustRowNumbersFromLRI = function() {
    if (this.detectionResultColumns[0] == null) {
      return 0;
    }
    var unadjustedCount = 0;
    var codewords = this.detectionResultColumns[0].getCodewords();
    for (var codewordsRow = 0; codewordsRow < codewords.length; codewordsRow++) {
      if (codewords[codewordsRow] == null) {
        continue;
      }
      var rowIndicatorRowNumber = codewords[codewordsRow].getRowNumber();
      var invalidRowCounts = 0;
      for (var barcodeColumn = 1; barcodeColumn < this.barcodeColumnCount + 1 && invalidRowCounts < this.ADJUST_ROW_NUMBER_SKIP; barcodeColumn++) {
        var codeword = this.detectionResultColumns[barcodeColumn].getCodewords()[codewordsRow];
        if (codeword != null) {
          invalidRowCounts = DetectionResult2.adjustRowNumberIfValid(rowIndicatorRowNumber, invalidRowCounts, codeword);
          if (!codeword.hasValidRowNumber()) {
            unadjustedCount++;
          }
        }
      }
    }
    return unadjustedCount;
  };
  DetectionResult2.adjustRowNumberIfValid = function(rowIndicatorRowNumber, invalidRowCounts, codeword) {
    if (codeword == null) {
      return invalidRowCounts;
    }
    if (!codeword.hasValidRowNumber()) {
      if (codeword.isValidRowNumber(rowIndicatorRowNumber)) {
        codeword.setRowNumber(rowIndicatorRowNumber);
        invalidRowCounts = 0;
      } else {
        ++invalidRowCounts;
      }
    }
    return invalidRowCounts;
  };
  DetectionResult2.prototype.adjustRowNumbers = function(barcodeColumn, codewordsRow, codewords) {
    var e_1, _a;
    var codeword = codewords[codewordsRow];
    var previousColumnCodewords = this.detectionResultColumns[barcodeColumn - 1].getCodewords();
    var nextColumnCodewords = previousColumnCodewords;
    if (this.detectionResultColumns[barcodeColumn + 1] != null) {
      nextColumnCodewords = this.detectionResultColumns[barcodeColumn + 1].getCodewords();
    }
    var otherCodewords = new Array(14);
    otherCodewords[2] = previousColumnCodewords[codewordsRow];
    otherCodewords[3] = nextColumnCodewords[codewordsRow];
    if (codewordsRow > 0) {
      otherCodewords[0] = codewords[codewordsRow - 1];
      otherCodewords[4] = previousColumnCodewords[codewordsRow - 1];
      otherCodewords[5] = nextColumnCodewords[codewordsRow - 1];
    }
    if (codewordsRow > 1) {
      otherCodewords[8] = codewords[codewordsRow - 2];
      otherCodewords[10] = previousColumnCodewords[codewordsRow - 2];
      otherCodewords[11] = nextColumnCodewords[codewordsRow - 2];
    }
    if (codewordsRow < codewords.length - 1) {
      otherCodewords[1] = codewords[codewordsRow + 1];
      otherCodewords[6] = previousColumnCodewords[codewordsRow + 1];
      otherCodewords[7] = nextColumnCodewords[codewordsRow + 1];
    }
    if (codewordsRow < codewords.length - 2) {
      otherCodewords[9] = codewords[codewordsRow + 2];
      otherCodewords[12] = previousColumnCodewords[codewordsRow + 2];
      otherCodewords[13] = nextColumnCodewords[codewordsRow + 2];
    }
    try {
      for (var otherCodewords_1 = __values$x(otherCodewords), otherCodewords_1_1 = otherCodewords_1.next(); !otherCodewords_1_1.done; otherCodewords_1_1 = otherCodewords_1.next()) {
        var otherCodeword = otherCodewords_1_1.value;
        if (DetectionResult2.adjustRowNumber(codeword, otherCodeword)) {
          return;
        }
      }
    } catch (e_1_1) {
      e_1 = {error: e_1_1};
    } finally {
      try {
        if (otherCodewords_1_1 && !otherCodewords_1_1.done && (_a = otherCodewords_1.return))
          _a.call(otherCodewords_1);
      } finally {
        if (e_1)
          throw e_1.error;
      }
    }
  };
  DetectionResult2.adjustRowNumber = function(codeword, otherCodeword) {
    if (otherCodeword == null) {
      return false;
    }
    if (otherCodeword.hasValidRowNumber() && otherCodeword.getBucket() === codeword.getBucket()) {
      codeword.setRowNumber(otherCodeword.getRowNumber());
      return true;
    }
    return false;
  };
  DetectionResult2.prototype.getBarcodeColumnCount = function() {
    return this.barcodeColumnCount;
  };
  DetectionResult2.prototype.getBarcodeRowCount = function() {
    return this.barcodeMetadata.getRowCount();
  };
  DetectionResult2.prototype.getBarcodeECLevel = function() {
    return this.barcodeMetadata.getErrorCorrectionLevel();
  };
  DetectionResult2.prototype.setBoundingBox = function(boundingBox) {
    this.boundingBox = boundingBox;
  };
  DetectionResult2.prototype.getBoundingBox = function() {
    return this.boundingBox;
  };
  DetectionResult2.prototype.setDetectionResultColumn = function(barcodeColumn, detectionResultColumn) {
    this.detectionResultColumns[barcodeColumn] = detectionResultColumn;
  };
  DetectionResult2.prototype.getDetectionResultColumn = function(barcodeColumn) {
    return this.detectionResultColumns[barcodeColumn];
  };
  DetectionResult2.prototype.toString = function() {
    var rowIndicatorColumn = this.detectionResultColumns[0];
    if (rowIndicatorColumn == null) {
      rowIndicatorColumn = this.detectionResultColumns[this.barcodeColumnCount + 1];
    }
    var formatter = new Formatter();
    for (var codewordsRow = 0; codewordsRow < rowIndicatorColumn.getCodewords().length; codewordsRow++) {
      formatter.format("CW %3d:", codewordsRow);
      for (var barcodeColumn = 0; barcodeColumn < this.barcodeColumnCount + 2; barcodeColumn++) {
        if (this.detectionResultColumns[barcodeColumn] == null) {
          formatter.format("    |   ");
          continue;
        }
        var codeword = this.detectionResultColumns[barcodeColumn].getCodewords()[codewordsRow];
        if (codeword == null) {
          formatter.format("    |   ");
          continue;
        }
        formatter.format(" %3d|%3d", codeword.getRowNumber(), codeword.getValue());
      }
      formatter.format("%n");
    }
    return formatter.toString();
  };
  return DetectionResult2;
}();
var Codeword = function() {
  function Codeword2(startX, endX, bucket, value) {
    this.rowNumber = Codeword2.BARCODE_ROW_UNKNOWN;
    this.startX = Math.trunc(startX);
    this.endX = Math.trunc(endX);
    this.bucket = Math.trunc(bucket);
    this.value = Math.trunc(value);
  }
  Codeword2.prototype.hasValidRowNumber = function() {
    return this.isValidRowNumber(this.rowNumber);
  };
  Codeword2.prototype.isValidRowNumber = function(rowNumber) {
    return rowNumber !== Codeword2.BARCODE_ROW_UNKNOWN && this.bucket === rowNumber % 3 * 3;
  };
  Codeword2.prototype.setRowNumberAsRowIndicatorColumn = function() {
    this.rowNumber = Math.trunc(Math.trunc(this.value / 30) * 3 + Math.trunc(this.bucket / 3));
  };
  Codeword2.prototype.getWidth = function() {
    return this.endX - this.startX;
  };
  Codeword2.prototype.getStartX = function() {
    return this.startX;
  };
  Codeword2.prototype.getEndX = function() {
    return this.endX;
  };
  Codeword2.prototype.getBucket = function() {
    return this.bucket;
  };
  Codeword2.prototype.getValue = function() {
    return this.value;
  };
  Codeword2.prototype.getRowNumber = function() {
    return this.rowNumber;
  };
  Codeword2.prototype.setRowNumber = function(rowNumber) {
    this.rowNumber = rowNumber;
  };
  Codeword2.prototype.toString = function() {
    return this.rowNumber + "|" + this.value;
  };
  Codeword2.BARCODE_ROW_UNKNOWN = -1;
  return Codeword2;
}();
var PDF417CodewordDecoder = function() {
  function PDF417CodewordDecoder2() {
  }
  PDF417CodewordDecoder2.initialize = function() {
    for (var i = 0; i < PDF417Common.SYMBOL_TABLE.length; i++) {
      var currentSymbol = PDF417Common.SYMBOL_TABLE[i];
      var currentBit = currentSymbol & 1;
      for (var j = 0; j < PDF417Common.BARS_IN_MODULE; j++) {
        var size = 0;
        while ((currentSymbol & 1) === currentBit) {
          size += 1;
          currentSymbol >>= 1;
        }
        currentBit = currentSymbol & 1;
        if (!PDF417CodewordDecoder2.RATIOS_TABLE[i]) {
          PDF417CodewordDecoder2.RATIOS_TABLE[i] = new Array(PDF417Common.BARS_IN_MODULE);
        }
        PDF417CodewordDecoder2.RATIOS_TABLE[i][PDF417Common.BARS_IN_MODULE - j - 1] = Math.fround(size / PDF417Common.MODULES_IN_CODEWORD);
      }
    }
    this.bSymbolTableReady = true;
  };
  PDF417CodewordDecoder2.getDecodedValue = function(moduleBitCount) {
    var decodedValue = PDF417CodewordDecoder2.getDecodedCodewordValue(PDF417CodewordDecoder2.sampleBitCounts(moduleBitCount));
    if (decodedValue !== -1) {
      return decodedValue;
    }
    return PDF417CodewordDecoder2.getClosestDecodedValue(moduleBitCount);
  };
  PDF417CodewordDecoder2.sampleBitCounts = function(moduleBitCount) {
    var bitCountSum = MathUtils.sum(moduleBitCount);
    var result = new Int32Array(PDF417Common.BARS_IN_MODULE);
    var bitCountIndex = 0;
    var sumPreviousBits = 0;
    for (var i = 0; i < PDF417Common.MODULES_IN_CODEWORD; i++) {
      var sampleIndex = bitCountSum / (2 * PDF417Common.MODULES_IN_CODEWORD) + i * bitCountSum / PDF417Common.MODULES_IN_CODEWORD;
      if (sumPreviousBits + moduleBitCount[bitCountIndex] <= sampleIndex) {
        sumPreviousBits += moduleBitCount[bitCountIndex];
        bitCountIndex++;
      }
      result[bitCountIndex]++;
    }
    return result;
  };
  PDF417CodewordDecoder2.getDecodedCodewordValue = function(moduleBitCount) {
    var decodedValue = PDF417CodewordDecoder2.getBitValue(moduleBitCount);
    return PDF417Common.getCodeword(decodedValue) === -1 ? -1 : decodedValue;
  };
  PDF417CodewordDecoder2.getBitValue = function(moduleBitCount) {
    var result = 0;
    for (var i = 0; i < moduleBitCount.length; i++) {
      for (var bit = 0; bit < moduleBitCount[i]; bit++) {
        result = result << 1 | (i % 2 === 0 ? 1 : 0);
      }
    }
    return Math.trunc(result);
  };
  PDF417CodewordDecoder2.getClosestDecodedValue = function(moduleBitCount) {
    var bitCountSum = MathUtils.sum(moduleBitCount);
    var bitCountRatios = new Array(PDF417Common.BARS_IN_MODULE);
    if (bitCountSum > 1) {
      for (var i = 0; i < bitCountRatios.length; i++) {
        bitCountRatios[i] = Math.fround(moduleBitCount[i] / bitCountSum);
      }
    }
    var bestMatchError = Float.MAX_VALUE;
    var bestMatch = -1;
    if (!this.bSymbolTableReady) {
      PDF417CodewordDecoder2.initialize();
    }
    for (var j = 0; j < PDF417CodewordDecoder2.RATIOS_TABLE.length; j++) {
      var error = 0;
      var ratioTableRow = PDF417CodewordDecoder2.RATIOS_TABLE[j];
      for (var k = 0; k < PDF417Common.BARS_IN_MODULE; k++) {
        var diff = Math.fround(ratioTableRow[k] - bitCountRatios[k]);
        error += Math.fround(diff * diff);
        if (error >= bestMatchError) {
          break;
        }
      }
      if (error < bestMatchError) {
        bestMatchError = error;
        bestMatch = PDF417Common.SYMBOL_TABLE[j];
      }
    }
    return bestMatch;
  };
  PDF417CodewordDecoder2.bSymbolTableReady = false;
  PDF417CodewordDecoder2.RATIOS_TABLE = new Array(PDF417Common.SYMBOL_TABLE.length).map(function(x) {
    return new Array(PDF417Common.BARS_IN_MODULE);
  });
  return PDF417CodewordDecoder2;
}();
var PDF417ResultMetadata = function() {
  function PDF417ResultMetadata2() {
    this.segmentCount = -1;
    this.fileSize = -1;
    this.timestamp = -1;
    this.checksum = -1;
  }
  PDF417ResultMetadata2.prototype.getSegmentIndex = function() {
    return this.segmentIndex;
  };
  PDF417ResultMetadata2.prototype.setSegmentIndex = function(segmentIndex) {
    this.segmentIndex = segmentIndex;
  };
  PDF417ResultMetadata2.prototype.getFileId = function() {
    return this.fileId;
  };
  PDF417ResultMetadata2.prototype.setFileId = function(fileId) {
    this.fileId = fileId;
  };
  PDF417ResultMetadata2.prototype.getOptionalData = function() {
    return this.optionalData;
  };
  PDF417ResultMetadata2.prototype.setOptionalData = function(optionalData) {
    this.optionalData = optionalData;
  };
  PDF417ResultMetadata2.prototype.isLastSegment = function() {
    return this.lastSegment;
  };
  PDF417ResultMetadata2.prototype.setLastSegment = function(lastSegment) {
    this.lastSegment = lastSegment;
  };
  PDF417ResultMetadata2.prototype.getSegmentCount = function() {
    return this.segmentCount;
  };
  PDF417ResultMetadata2.prototype.setSegmentCount = function(segmentCount) {
    this.segmentCount = segmentCount;
  };
  PDF417ResultMetadata2.prototype.getSender = function() {
    return this.sender || null;
  };
  PDF417ResultMetadata2.prototype.setSender = function(sender) {
    this.sender = sender;
  };
  PDF417ResultMetadata2.prototype.getAddressee = function() {
    return this.addressee || null;
  };
  PDF417ResultMetadata2.prototype.setAddressee = function(addressee) {
    this.addressee = addressee;
  };
  PDF417ResultMetadata2.prototype.getFileName = function() {
    return this.fileName;
  };
  PDF417ResultMetadata2.prototype.setFileName = function(fileName) {
    this.fileName = fileName;
  };
  PDF417ResultMetadata2.prototype.getFileSize = function() {
    return this.fileSize;
  };
  PDF417ResultMetadata2.prototype.setFileSize = function(fileSize) {
    this.fileSize = fileSize;
  };
  PDF417ResultMetadata2.prototype.getChecksum = function() {
    return this.checksum;
  };
  PDF417ResultMetadata2.prototype.setChecksum = function(checksum) {
    this.checksum = checksum;
  };
  PDF417ResultMetadata2.prototype.getTimestamp = function() {
    return this.timestamp;
  };
  PDF417ResultMetadata2.prototype.setTimestamp = function(timestamp) {
    this.timestamp = timestamp;
  };
  return PDF417ResultMetadata2;
}();
var Long = function() {
  function Long2() {
  }
  Long2.parseLong = function(num, radix) {
    if (radix === void 0) {
      radix = void 0;
    }
    return parseInt(num, radix);
  };
  return Long2;
}();
var __extends$T = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (b2.hasOwnProperty(p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var NullPointerException = function(_super) {
  __extends$T(NullPointerException2, _super);
  function NullPointerException2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  NullPointerException2.kind = "NullPointerException";
  return NullPointerException2;
}(Exception);
var OutputStream = function() {
  function OutputStream2() {
  }
  OutputStream2.prototype.writeBytes = function(b) {
    this.writeBytesOffset(b, 0, b.length);
  };
  OutputStream2.prototype.writeBytesOffset = function(b, off, len) {
    if (b == null) {
      throw new NullPointerException();
    } else if (off < 0 || off > b.length || len < 0 || off + len > b.length || off + len < 0) {
      throw new IndexOutOfBoundsException();
    } else if (len === 0) {
      return;
    }
    for (var i = 0; i < len; i++) {
      this.write(b[off + i]);
    }
  };
  OutputStream2.prototype.flush = function() {
  };
  OutputStream2.prototype.close = function() {
  };
  return OutputStream2;
}();
var __extends$U = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (b2.hasOwnProperty(p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var OutOfMemoryError = function(_super) {
  __extends$U(OutOfMemoryError2, _super);
  function OutOfMemoryError2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  return OutOfMemoryError2;
}(Exception);
var __extends$V = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (b2.hasOwnProperty(p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var ByteArrayOutputStream = function(_super) {
  __extends$V(ByteArrayOutputStream2, _super);
  function ByteArrayOutputStream2(size) {
    if (size === void 0) {
      size = 32;
    }
    var _this = _super.call(this) || this;
    _this.count = 0;
    if (size < 0) {
      throw new IllegalArgumentException("Negative initial size: " + size);
    }
    _this.buf = new Uint8Array(size);
    return _this;
  }
  ByteArrayOutputStream2.prototype.ensureCapacity = function(minCapacity) {
    if (minCapacity - this.buf.length > 0)
      this.grow(minCapacity);
  };
  ByteArrayOutputStream2.prototype.grow = function(minCapacity) {
    var oldCapacity = this.buf.length;
    var newCapacity = oldCapacity << 1;
    if (newCapacity - minCapacity < 0)
      newCapacity = minCapacity;
    if (newCapacity < 0) {
      if (minCapacity < 0)
        throw new OutOfMemoryError();
      newCapacity = Integer.MAX_VALUE;
    }
    this.buf = Arrays.copyOfUint8Array(this.buf, newCapacity);
  };
  ByteArrayOutputStream2.prototype.write = function(b) {
    this.ensureCapacity(this.count + 1);
    this.buf[this.count] = b;
    this.count += 1;
  };
  ByteArrayOutputStream2.prototype.writeBytesOffset = function(b, off, len) {
    if (off < 0 || off > b.length || len < 0 || off + len - b.length > 0) {
      throw new IndexOutOfBoundsException();
    }
    this.ensureCapacity(this.count + len);
    System.arraycopy(b, off, this.buf, this.count, len);
    this.count += len;
  };
  ByteArrayOutputStream2.prototype.writeTo = function(out) {
    out.writeBytesOffset(this.buf, 0, this.count);
  };
  ByteArrayOutputStream2.prototype.reset = function() {
    this.count = 0;
  };
  ByteArrayOutputStream2.prototype.toByteArray = function() {
    return Arrays.copyOfUint8Array(this.buf, this.count);
  };
  ByteArrayOutputStream2.prototype.size = function() {
    return this.count;
  };
  ByteArrayOutputStream2.prototype.toString = function(param) {
    if (!param) {
      return this.toString_void();
    }
    if (typeof param === "string") {
      return this.toString_string(param);
    }
    return this.toString_number(param);
  };
  ByteArrayOutputStream2.prototype.toString_void = function() {
    return new String(this.buf).toString();
  };
  ByteArrayOutputStream2.prototype.toString_string = function(charsetName) {
    return new String(this.buf).toString();
  };
  ByteArrayOutputStream2.prototype.toString_number = function(hibyte) {
    return new String(this.buf).toString();
  };
  ByteArrayOutputStream2.prototype.close = function() {
  };
  return ByteArrayOutputStream2;
}(OutputStream);
var Mode$2;
(function(Mode2) {
  Mode2[Mode2["ALPHA"] = 0] = "ALPHA";
  Mode2[Mode2["LOWER"] = 1] = "LOWER";
  Mode2[Mode2["MIXED"] = 2] = "MIXED";
  Mode2[Mode2["PUNCT"] = 3] = "PUNCT";
  Mode2[Mode2["ALPHA_SHIFT"] = 4] = "ALPHA_SHIFT";
  Mode2[Mode2["PUNCT_SHIFT"] = 5] = "PUNCT_SHIFT";
})(Mode$2 || (Mode$2 = {}));
function getBigIntConstructor() {
  if (typeof window !== "undefined") {
    return window["BigInt"] || null;
  }
  if (typeof global !== "undefined") {
    return global["BigInt"] || null;
  }
  if (typeof self !== "undefined") {
    return self["BigInt"] || null;
  }
  throw new Error("Can't search globals for BigInt!");
}
var BigInteger;
function createBigInt(num) {
  if (typeof BigInteger === "undefined") {
    BigInteger = getBigIntConstructor();
  }
  if (BigInteger === null) {
    throw new Error("BigInt is not supported!");
  }
  return BigInteger(num);
}
function getEXP900() {
  var EXP900 = [];
  EXP900[0] = createBigInt(1);
  var nineHundred = createBigInt(900);
  EXP900[1] = nineHundred;
  for (var i = 2; i < 16; i++) {
    EXP900[i] = EXP900[i - 1] * nineHundred;
  }
  return EXP900;
}
var DecodedBitStreamParser$2 = function() {
  function DecodedBitStreamParser2() {
  }
  DecodedBitStreamParser2.decode = function(codewords, ecLevel) {
    var result = new StringBuilder("");
    var encoding = CharacterSetECI.ISO8859_1;
    result.enableDecoding(encoding);
    var codeIndex = 1;
    var code = codewords[codeIndex++];
    var resultMetadata = new PDF417ResultMetadata();
    while (codeIndex < codewords[0]) {
      switch (code) {
        case DecodedBitStreamParser2.TEXT_COMPACTION_MODE_LATCH:
          codeIndex = DecodedBitStreamParser2.textCompaction(codewords, codeIndex, result);
          break;
        case DecodedBitStreamParser2.BYTE_COMPACTION_MODE_LATCH:
        case DecodedBitStreamParser2.BYTE_COMPACTION_MODE_LATCH_6:
          codeIndex = DecodedBitStreamParser2.byteCompaction(code, codewords, encoding, codeIndex, result);
          break;
        case DecodedBitStreamParser2.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
          result.append(codewords[codeIndex++]);
          break;
        case DecodedBitStreamParser2.NUMERIC_COMPACTION_MODE_LATCH:
          codeIndex = DecodedBitStreamParser2.numericCompaction(codewords, codeIndex, result);
          break;
        case DecodedBitStreamParser2.ECI_CHARSET:
          var charsetECI = CharacterSetECI.getCharacterSetECIByValue(codewords[codeIndex++]);
          break;
        case DecodedBitStreamParser2.ECI_GENERAL_PURPOSE:
          codeIndex += 2;
          break;
        case DecodedBitStreamParser2.ECI_USER_DEFINED:
          codeIndex++;
          break;
        case DecodedBitStreamParser2.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
          codeIndex = DecodedBitStreamParser2.decodeMacroBlock(codewords, codeIndex, resultMetadata);
          break;
        case DecodedBitStreamParser2.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
        case DecodedBitStreamParser2.MACRO_PDF417_TERMINATOR:
          throw new FormatException();
        default:
          codeIndex--;
          codeIndex = DecodedBitStreamParser2.textCompaction(codewords, codeIndex, result);
          break;
      }
      if (codeIndex < codewords.length) {
        code = codewords[codeIndex++];
      } else {
        throw FormatException.getFormatInstance();
      }
    }
    if (result.length() === 0) {
      throw FormatException.getFormatInstance();
    }
    var decoderResult = new DecoderResult(null, result.toString(), null, ecLevel);
    decoderResult.setOther(resultMetadata);
    return decoderResult;
  };
  DecodedBitStreamParser2.decodeMacroBlock = function(codewords, codeIndex, resultMetadata) {
    if (codeIndex + DecodedBitStreamParser2.NUMBER_OF_SEQUENCE_CODEWORDS > codewords[0]) {
      throw FormatException.getFormatInstance();
    }
    var segmentIndexArray = new Int32Array(DecodedBitStreamParser2.NUMBER_OF_SEQUENCE_CODEWORDS);
    for (var i = 0; i < DecodedBitStreamParser2.NUMBER_OF_SEQUENCE_CODEWORDS; i++, codeIndex++) {
      segmentIndexArray[i] = codewords[codeIndex];
    }
    resultMetadata.setSegmentIndex(Integer.parseInt(DecodedBitStreamParser2.decodeBase900toBase10(segmentIndexArray, DecodedBitStreamParser2.NUMBER_OF_SEQUENCE_CODEWORDS)));
    var fileId = new StringBuilder();
    codeIndex = DecodedBitStreamParser2.textCompaction(codewords, codeIndex, fileId);
    resultMetadata.setFileId(fileId.toString());
    var optionalFieldsStart = -1;
    if (codewords[codeIndex] === DecodedBitStreamParser2.BEGIN_MACRO_PDF417_OPTIONAL_FIELD) {
      optionalFieldsStart = codeIndex + 1;
    }
    while (codeIndex < codewords[0]) {
      switch (codewords[codeIndex]) {
        case DecodedBitStreamParser2.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
          codeIndex++;
          switch (codewords[codeIndex]) {
            case DecodedBitStreamParser2.MACRO_PDF417_OPTIONAL_FIELD_FILE_NAME:
              var fileName = new StringBuilder();
              codeIndex = DecodedBitStreamParser2.textCompaction(codewords, codeIndex + 1, fileName);
              resultMetadata.setFileName(fileName.toString());
              break;
            case DecodedBitStreamParser2.MACRO_PDF417_OPTIONAL_FIELD_SENDER:
              var sender = new StringBuilder();
              codeIndex = DecodedBitStreamParser2.textCompaction(codewords, codeIndex + 1, sender);
              resultMetadata.setSender(sender.toString());
              break;
            case DecodedBitStreamParser2.MACRO_PDF417_OPTIONAL_FIELD_ADDRESSEE:
              var addressee = new StringBuilder();
              codeIndex = DecodedBitStreamParser2.textCompaction(codewords, codeIndex + 1, addressee);
              resultMetadata.setAddressee(addressee.toString());
              break;
            case DecodedBitStreamParser2.MACRO_PDF417_OPTIONAL_FIELD_SEGMENT_COUNT:
              var segmentCount = new StringBuilder();
              codeIndex = DecodedBitStreamParser2.numericCompaction(codewords, codeIndex + 1, segmentCount);
              resultMetadata.setSegmentCount(Integer.parseInt(segmentCount.toString()));
              break;
            case DecodedBitStreamParser2.MACRO_PDF417_OPTIONAL_FIELD_TIME_STAMP:
              var timestamp = new StringBuilder();
              codeIndex = DecodedBitStreamParser2.numericCompaction(codewords, codeIndex + 1, timestamp);
              resultMetadata.setTimestamp(Long.parseLong(timestamp.toString()));
              break;
            case DecodedBitStreamParser2.MACRO_PDF417_OPTIONAL_FIELD_CHECKSUM:
              var checksum = new StringBuilder();
              codeIndex = DecodedBitStreamParser2.numericCompaction(codewords, codeIndex + 1, checksum);
              resultMetadata.setChecksum(Integer.parseInt(checksum.toString()));
              break;
            case DecodedBitStreamParser2.MACRO_PDF417_OPTIONAL_FIELD_FILE_SIZE:
              var fileSize = new StringBuilder();
              codeIndex = DecodedBitStreamParser2.numericCompaction(codewords, codeIndex + 1, fileSize);
              resultMetadata.setFileSize(Long.parseLong(fileSize.toString()));
              break;
            default:
              throw FormatException.getFormatInstance();
          }
          break;
        case DecodedBitStreamParser2.MACRO_PDF417_TERMINATOR:
          codeIndex++;
          resultMetadata.setLastSegment(true);
          break;
        default:
          throw FormatException.getFormatInstance();
      }
    }
    if (optionalFieldsStart !== -1) {
      var optionalFieldsLength = codeIndex - optionalFieldsStart;
      if (resultMetadata.isLastSegment()) {
        optionalFieldsLength--;
      }
      resultMetadata.setOptionalData(Arrays.copyOfRange(codewords, optionalFieldsStart, optionalFieldsStart + optionalFieldsLength));
    }
    return codeIndex;
  };
  DecodedBitStreamParser2.textCompaction = function(codewords, codeIndex, result) {
    var textCompactionData = new Int32Array((codewords[0] - codeIndex) * 2);
    var byteCompactionData = new Int32Array((codewords[0] - codeIndex) * 2);
    var index = 0;
    var end = false;
    while (codeIndex < codewords[0] && !end) {
      var code = codewords[codeIndex++];
      if (code < DecodedBitStreamParser2.TEXT_COMPACTION_MODE_LATCH) {
        textCompactionData[index] = code / 30;
        textCompactionData[index + 1] = code % 30;
        index += 2;
      } else {
        switch (code) {
          case DecodedBitStreamParser2.TEXT_COMPACTION_MODE_LATCH:
            textCompactionData[index++] = DecodedBitStreamParser2.TEXT_COMPACTION_MODE_LATCH;
            break;
          case DecodedBitStreamParser2.BYTE_COMPACTION_MODE_LATCH:
          case DecodedBitStreamParser2.BYTE_COMPACTION_MODE_LATCH_6:
          case DecodedBitStreamParser2.NUMERIC_COMPACTION_MODE_LATCH:
          case DecodedBitStreamParser2.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
          case DecodedBitStreamParser2.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
          case DecodedBitStreamParser2.MACRO_PDF417_TERMINATOR:
            codeIndex--;
            end = true;
            break;
          case DecodedBitStreamParser2.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
            textCompactionData[index] = DecodedBitStreamParser2.MODE_SHIFT_TO_BYTE_COMPACTION_MODE;
            code = codewords[codeIndex++];
            byteCompactionData[index] = code;
            index++;
            break;
        }
      }
    }
    DecodedBitStreamParser2.decodeTextCompaction(textCompactionData, byteCompactionData, index, result);
    return codeIndex;
  };
  DecodedBitStreamParser2.decodeTextCompaction = function(textCompactionData, byteCompactionData, length, result) {
    var subMode = Mode$2.ALPHA;
    var priorToShiftMode = Mode$2.ALPHA;
    var i = 0;
    while (i < length) {
      var subModeCh = textCompactionData[i];
      var ch = "";
      switch (subMode) {
        case Mode$2.ALPHA:
          if (subModeCh < 26) {
            ch = String.fromCharCode(65 + subModeCh);
          } else {
            switch (subModeCh) {
              case 26:
                ch = " ";
                break;
              case DecodedBitStreamParser2.LL:
                subMode = Mode$2.LOWER;
                break;
              case DecodedBitStreamParser2.ML:
                subMode = Mode$2.MIXED;
                break;
              case DecodedBitStreamParser2.PS:
                priorToShiftMode = subMode;
                subMode = Mode$2.PUNCT_SHIFT;
                break;
              case DecodedBitStreamParser2.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                result.append(byteCompactionData[i]);
                break;
              case DecodedBitStreamParser2.TEXT_COMPACTION_MODE_LATCH:
                subMode = Mode$2.ALPHA;
                break;
            }
          }
          break;
        case Mode$2.LOWER:
          if (subModeCh < 26) {
            ch = String.fromCharCode(97 + subModeCh);
          } else {
            switch (subModeCh) {
              case 26:
                ch = " ";
                break;
              case DecodedBitStreamParser2.AS:
                priorToShiftMode = subMode;
                subMode = Mode$2.ALPHA_SHIFT;
                break;
              case DecodedBitStreamParser2.ML:
                subMode = Mode$2.MIXED;
                break;
              case DecodedBitStreamParser2.PS:
                priorToShiftMode = subMode;
                subMode = Mode$2.PUNCT_SHIFT;
                break;
              case DecodedBitStreamParser2.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                result.append(byteCompactionData[i]);
                break;
              case DecodedBitStreamParser2.TEXT_COMPACTION_MODE_LATCH:
                subMode = Mode$2.ALPHA;
                break;
            }
          }
          break;
        case Mode$2.MIXED:
          if (subModeCh < DecodedBitStreamParser2.PL) {
            ch = DecodedBitStreamParser2.MIXED_CHARS[subModeCh];
          } else {
            switch (subModeCh) {
              case DecodedBitStreamParser2.PL:
                subMode = Mode$2.PUNCT;
                break;
              case 26:
                ch = " ";
                break;
              case DecodedBitStreamParser2.LL:
                subMode = Mode$2.LOWER;
                break;
              case DecodedBitStreamParser2.AL:
                subMode = Mode$2.ALPHA;
                break;
              case DecodedBitStreamParser2.PS:
                priorToShiftMode = subMode;
                subMode = Mode$2.PUNCT_SHIFT;
                break;
              case DecodedBitStreamParser2.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                result.append(byteCompactionData[i]);
                break;
              case DecodedBitStreamParser2.TEXT_COMPACTION_MODE_LATCH:
                subMode = Mode$2.ALPHA;
                break;
            }
          }
          break;
        case Mode$2.PUNCT:
          if (subModeCh < DecodedBitStreamParser2.PAL) {
            ch = DecodedBitStreamParser2.PUNCT_CHARS[subModeCh];
          } else {
            switch (subModeCh) {
              case DecodedBitStreamParser2.PAL:
                subMode = Mode$2.ALPHA;
                break;
              case DecodedBitStreamParser2.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                result.append(byteCompactionData[i]);
                break;
              case DecodedBitStreamParser2.TEXT_COMPACTION_MODE_LATCH:
                subMode = Mode$2.ALPHA;
                break;
            }
          }
          break;
        case Mode$2.ALPHA_SHIFT:
          subMode = priorToShiftMode;
          if (subModeCh < 26) {
            ch = String.fromCharCode(65 + subModeCh);
          } else {
            switch (subModeCh) {
              case 26:
                ch = " ";
                break;
              case DecodedBitStreamParser2.TEXT_COMPACTION_MODE_LATCH:
                subMode = Mode$2.ALPHA;
                break;
            }
          }
          break;
        case Mode$2.PUNCT_SHIFT:
          subMode = priorToShiftMode;
          if (subModeCh < DecodedBitStreamParser2.PAL) {
            ch = DecodedBitStreamParser2.PUNCT_CHARS[subModeCh];
          } else {
            switch (subModeCh) {
              case DecodedBitStreamParser2.PAL:
                subMode = Mode$2.ALPHA;
                break;
              case DecodedBitStreamParser2.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                result.append(byteCompactionData[i]);
                break;
              case DecodedBitStreamParser2.TEXT_COMPACTION_MODE_LATCH:
                subMode = Mode$2.ALPHA;
                break;
            }
          }
          break;
      }
      if (ch !== "") {
        result.append(ch);
      }
      i++;
    }
  };
  DecodedBitStreamParser2.byteCompaction = function(mode, codewords, encoding, codeIndex, result) {
    var decodedBytes = new ByteArrayOutputStream();
    var count = 0;
    var value = 0;
    var end = false;
    switch (mode) {
      case DecodedBitStreamParser2.BYTE_COMPACTION_MODE_LATCH:
        var byteCompactedCodewords = new Int32Array(6);
        var nextCode = codewords[codeIndex++];
        while (codeIndex < codewords[0] && !end) {
          byteCompactedCodewords[count++] = nextCode;
          value = 900 * value + nextCode;
          nextCode = codewords[codeIndex++];
          switch (nextCode) {
            case DecodedBitStreamParser2.TEXT_COMPACTION_MODE_LATCH:
            case DecodedBitStreamParser2.BYTE_COMPACTION_MODE_LATCH:
            case DecodedBitStreamParser2.NUMERIC_COMPACTION_MODE_LATCH:
            case DecodedBitStreamParser2.BYTE_COMPACTION_MODE_LATCH_6:
            case DecodedBitStreamParser2.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
            case DecodedBitStreamParser2.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
            case DecodedBitStreamParser2.MACRO_PDF417_TERMINATOR:
              codeIndex--;
              end = true;
              break;
            default:
              if (count % 5 === 0 && count > 0) {
                for (var j = 0; j < 6; ++j) {
                  decodedBytes.write(Number(createBigInt(value) >> createBigInt(8 * (5 - j))));
                }
                value = 0;
                count = 0;
              }
              break;
          }
        }
        if (codeIndex === codewords[0] && nextCode < DecodedBitStreamParser2.TEXT_COMPACTION_MODE_LATCH) {
          byteCompactedCodewords[count++] = nextCode;
        }
        for (var i = 0; i < count; i++) {
          decodedBytes.write(byteCompactedCodewords[i]);
        }
        break;
      case DecodedBitStreamParser2.BYTE_COMPACTION_MODE_LATCH_6:
        while (codeIndex < codewords[0] && !end) {
          var code = codewords[codeIndex++];
          if (code < DecodedBitStreamParser2.TEXT_COMPACTION_MODE_LATCH) {
            count++;
            value = 900 * value + code;
          } else {
            switch (code) {
              case DecodedBitStreamParser2.TEXT_COMPACTION_MODE_LATCH:
              case DecodedBitStreamParser2.BYTE_COMPACTION_MODE_LATCH:
              case DecodedBitStreamParser2.NUMERIC_COMPACTION_MODE_LATCH:
              case DecodedBitStreamParser2.BYTE_COMPACTION_MODE_LATCH_6:
              case DecodedBitStreamParser2.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
              case DecodedBitStreamParser2.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
              case DecodedBitStreamParser2.MACRO_PDF417_TERMINATOR:
                codeIndex--;
                end = true;
                break;
            }
          }
          if (count % 5 === 0 && count > 0) {
            for (var j = 0; j < 6; ++j) {
              decodedBytes.write(Number(createBigInt(value) >> createBigInt(8 * (5 - j))));
            }
            value = 0;
            count = 0;
          }
        }
        break;
    }
    result.append(StringEncoding.decode(decodedBytes.toByteArray(), encoding));
    return codeIndex;
  };
  DecodedBitStreamParser2.numericCompaction = function(codewords, codeIndex, result) {
    var count = 0;
    var end = false;
    var numericCodewords = new Int32Array(DecodedBitStreamParser2.MAX_NUMERIC_CODEWORDS);
    while (codeIndex < codewords[0] && !end) {
      var code = codewords[codeIndex++];
      if (codeIndex === codewords[0]) {
        end = true;
      }
      if (code < DecodedBitStreamParser2.TEXT_COMPACTION_MODE_LATCH) {
        numericCodewords[count] = code;
        count++;
      } else {
        switch (code) {
          case DecodedBitStreamParser2.TEXT_COMPACTION_MODE_LATCH:
          case DecodedBitStreamParser2.BYTE_COMPACTION_MODE_LATCH:
          case DecodedBitStreamParser2.BYTE_COMPACTION_MODE_LATCH_6:
          case DecodedBitStreamParser2.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
          case DecodedBitStreamParser2.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
          case DecodedBitStreamParser2.MACRO_PDF417_TERMINATOR:
            codeIndex--;
            end = true;
            break;
        }
      }
      if ((count % DecodedBitStreamParser2.MAX_NUMERIC_CODEWORDS === 0 || code === DecodedBitStreamParser2.NUMERIC_COMPACTION_MODE_LATCH || end) && count > 0) {
        result.append(DecodedBitStreamParser2.decodeBase900toBase10(numericCodewords, count));
        count = 0;
      }
    }
    return codeIndex;
  };
  DecodedBitStreamParser2.decodeBase900toBase10 = function(codewords, count) {
    var result = createBigInt(0);
    for (var i = 0; i < count; i++) {
      result += DecodedBitStreamParser2.EXP900[count - i - 1] * createBigInt(codewords[i]);
    }
    var resultString = result.toString();
    if (resultString.charAt(0) !== "1") {
      throw new FormatException();
    }
    return resultString.substring(1);
  };
  DecodedBitStreamParser2.TEXT_COMPACTION_MODE_LATCH = 900;
  DecodedBitStreamParser2.BYTE_COMPACTION_MODE_LATCH = 901;
  DecodedBitStreamParser2.NUMERIC_COMPACTION_MODE_LATCH = 902;
  DecodedBitStreamParser2.BYTE_COMPACTION_MODE_LATCH_6 = 924;
  DecodedBitStreamParser2.ECI_USER_DEFINED = 925;
  DecodedBitStreamParser2.ECI_GENERAL_PURPOSE = 926;
  DecodedBitStreamParser2.ECI_CHARSET = 927;
  DecodedBitStreamParser2.BEGIN_MACRO_PDF417_CONTROL_BLOCK = 928;
  DecodedBitStreamParser2.BEGIN_MACRO_PDF417_OPTIONAL_FIELD = 923;
  DecodedBitStreamParser2.MACRO_PDF417_TERMINATOR = 922;
  DecodedBitStreamParser2.MODE_SHIFT_TO_BYTE_COMPACTION_MODE = 913;
  DecodedBitStreamParser2.MAX_NUMERIC_CODEWORDS = 15;
  DecodedBitStreamParser2.MACRO_PDF417_OPTIONAL_FIELD_FILE_NAME = 0;
  DecodedBitStreamParser2.MACRO_PDF417_OPTIONAL_FIELD_SEGMENT_COUNT = 1;
  DecodedBitStreamParser2.MACRO_PDF417_OPTIONAL_FIELD_TIME_STAMP = 2;
  DecodedBitStreamParser2.MACRO_PDF417_OPTIONAL_FIELD_SENDER = 3;
  DecodedBitStreamParser2.MACRO_PDF417_OPTIONAL_FIELD_ADDRESSEE = 4;
  DecodedBitStreamParser2.MACRO_PDF417_OPTIONAL_FIELD_FILE_SIZE = 5;
  DecodedBitStreamParser2.MACRO_PDF417_OPTIONAL_FIELD_CHECKSUM = 6;
  DecodedBitStreamParser2.PL = 25;
  DecodedBitStreamParser2.LL = 27;
  DecodedBitStreamParser2.AS = 27;
  DecodedBitStreamParser2.ML = 28;
  DecodedBitStreamParser2.AL = 28;
  DecodedBitStreamParser2.PS = 29;
  DecodedBitStreamParser2.PAL = 29;
  DecodedBitStreamParser2.PUNCT_CHARS = ";<>@[\\]_`~!\r	,:\n-.$/\"|*()?{}'";
  DecodedBitStreamParser2.MIXED_CHARS = "0123456789&\r	,:#-.$/+%*=^";
  DecodedBitStreamParser2.EXP900 = getBigIntConstructor() ? getEXP900() : [];
  DecodedBitStreamParser2.NUMBER_OF_SEQUENCE_CODEWORDS = 2;
  return DecodedBitStreamParser2;
}();
var __values$y = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return {value: o && o[i++], done: !o};
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var PDF417ScanningDecoder = function() {
  function PDF417ScanningDecoder2() {
  }
  PDF417ScanningDecoder2.decode = function(image, imageTopLeft, imageBottomLeft, imageTopRight, imageBottomRight, minCodewordWidth, maxCodewordWidth) {
    var boundingBox = new BoundingBox(image, imageTopLeft, imageBottomLeft, imageTopRight, imageBottomRight);
    var leftRowIndicatorColumn = null;
    var rightRowIndicatorColumn = null;
    var detectionResult;
    for (var firstPass = true; ; firstPass = false) {
      if (imageTopLeft != null) {
        leftRowIndicatorColumn = PDF417ScanningDecoder2.getRowIndicatorColumn(image, boundingBox, imageTopLeft, true, minCodewordWidth, maxCodewordWidth);
      }
      if (imageTopRight != null) {
        rightRowIndicatorColumn = PDF417ScanningDecoder2.getRowIndicatorColumn(image, boundingBox, imageTopRight, false, minCodewordWidth, maxCodewordWidth);
      }
      detectionResult = PDF417ScanningDecoder2.merge(leftRowIndicatorColumn, rightRowIndicatorColumn);
      if (detectionResult == null) {
        throw NotFoundException.getNotFoundInstance();
      }
      var resultBox = detectionResult.getBoundingBox();
      if (firstPass && resultBox != null && (resultBox.getMinY() < boundingBox.getMinY() || resultBox.getMaxY() > boundingBox.getMaxY())) {
        boundingBox = resultBox;
      } else {
        break;
      }
    }
    detectionResult.setBoundingBox(boundingBox);
    var maxBarcodeColumn = detectionResult.getBarcodeColumnCount() + 1;
    detectionResult.setDetectionResultColumn(0, leftRowIndicatorColumn);
    detectionResult.setDetectionResultColumn(maxBarcodeColumn, rightRowIndicatorColumn);
    var leftToRight = leftRowIndicatorColumn != null;
    for (var barcodeColumnCount = 1; barcodeColumnCount <= maxBarcodeColumn; barcodeColumnCount++) {
      var barcodeColumn = leftToRight ? barcodeColumnCount : maxBarcodeColumn - barcodeColumnCount;
      if (detectionResult.getDetectionResultColumn(barcodeColumn) !== void 0) {
        continue;
      }
      var detectionResultColumn = void 0;
      if (barcodeColumn === 0 || barcodeColumn === maxBarcodeColumn) {
        detectionResultColumn = new DetectionResultRowIndicatorColumn(boundingBox, barcodeColumn === 0);
      } else {
        detectionResultColumn = new DetectionResultColumn(boundingBox);
      }
      detectionResult.setDetectionResultColumn(barcodeColumn, detectionResultColumn);
      var startColumn = -1;
      var previousStartColumn = startColumn;
      for (var imageRow = boundingBox.getMinY(); imageRow <= boundingBox.getMaxY(); imageRow++) {
        startColumn = PDF417ScanningDecoder2.getStartColumn(detectionResult, barcodeColumn, imageRow, leftToRight);
        if (startColumn < 0 || startColumn > boundingBox.getMaxX()) {
          if (previousStartColumn === -1) {
            continue;
          }
          startColumn = previousStartColumn;
        }
        var codeword = PDF417ScanningDecoder2.detectCodeword(image, boundingBox.getMinX(), boundingBox.getMaxX(), leftToRight, startColumn, imageRow, minCodewordWidth, maxCodewordWidth);
        if (codeword != null) {
          detectionResultColumn.setCodeword(imageRow, codeword);
          previousStartColumn = startColumn;
          minCodewordWidth = Math.min(minCodewordWidth, codeword.getWidth());
          maxCodewordWidth = Math.max(maxCodewordWidth, codeword.getWidth());
        }
      }
    }
    return PDF417ScanningDecoder2.createDecoderResult(detectionResult);
  };
  PDF417ScanningDecoder2.merge = function(leftRowIndicatorColumn, rightRowIndicatorColumn) {
    if (leftRowIndicatorColumn == null && rightRowIndicatorColumn == null) {
      return null;
    }
    var barcodeMetadata = PDF417ScanningDecoder2.getBarcodeMetadata(leftRowIndicatorColumn, rightRowIndicatorColumn);
    if (barcodeMetadata == null) {
      return null;
    }
    var boundingBox = BoundingBox.merge(PDF417ScanningDecoder2.adjustBoundingBox(leftRowIndicatorColumn), PDF417ScanningDecoder2.adjustBoundingBox(rightRowIndicatorColumn));
    return new DetectionResult(barcodeMetadata, boundingBox);
  };
  PDF417ScanningDecoder2.adjustBoundingBox = function(rowIndicatorColumn) {
    var e_1, _a;
    if (rowIndicatorColumn == null) {
      return null;
    }
    var rowHeights = rowIndicatorColumn.getRowHeights();
    if (rowHeights == null) {
      return null;
    }
    var maxRowHeight = PDF417ScanningDecoder2.getMax(rowHeights);
    var missingStartRows = 0;
    try {
      for (var rowHeights_1 = __values$y(rowHeights), rowHeights_1_1 = rowHeights_1.next(); !rowHeights_1_1.done; rowHeights_1_1 = rowHeights_1.next()) {
        var rowHeight = rowHeights_1_1.value;
        missingStartRows += maxRowHeight - rowHeight;
        if (rowHeight > 0) {
          break;
        }
      }
    } catch (e_1_1) {
      e_1 = {error: e_1_1};
    } finally {
      try {
        if (rowHeights_1_1 && !rowHeights_1_1.done && (_a = rowHeights_1.return))
          _a.call(rowHeights_1);
      } finally {
        if (e_1)
          throw e_1.error;
      }
    }
    var codewords = rowIndicatorColumn.getCodewords();
    for (var row = 0; missingStartRows > 0 && codewords[row] == null; row++) {
      missingStartRows--;
    }
    var missingEndRows = 0;
    for (var row = rowHeights.length - 1; row >= 0; row--) {
      missingEndRows += maxRowHeight - rowHeights[row];
      if (rowHeights[row] > 0) {
        break;
      }
    }
    for (var row = codewords.length - 1; missingEndRows > 0 && codewords[row] == null; row--) {
      missingEndRows--;
    }
    return rowIndicatorColumn.getBoundingBox().addMissingRows(missingStartRows, missingEndRows, rowIndicatorColumn.isLeft());
  };
  PDF417ScanningDecoder2.getMax = function(values) {
    var e_2, _a;
    var maxValue = -1;
    try {
      for (var values_1 = __values$y(values), values_1_1 = values_1.next(); !values_1_1.done; values_1_1 = values_1.next()) {
        var value = values_1_1.value;
        maxValue = Math.max(maxValue, value);
      }
    } catch (e_2_1) {
      e_2 = {error: e_2_1};
    } finally {
      try {
        if (values_1_1 && !values_1_1.done && (_a = values_1.return))
          _a.call(values_1);
      } finally {
        if (e_2)
          throw e_2.error;
      }
    }
    return maxValue;
  };
  PDF417ScanningDecoder2.getBarcodeMetadata = function(leftRowIndicatorColumn, rightRowIndicatorColumn) {
    var leftBarcodeMetadata;
    if (leftRowIndicatorColumn == null || (leftBarcodeMetadata = leftRowIndicatorColumn.getBarcodeMetadata()) == null) {
      return rightRowIndicatorColumn == null ? null : rightRowIndicatorColumn.getBarcodeMetadata();
    }
    var rightBarcodeMetadata;
    if (rightRowIndicatorColumn == null || (rightBarcodeMetadata = rightRowIndicatorColumn.getBarcodeMetadata()) == null) {
      return leftBarcodeMetadata;
    }
    if (leftBarcodeMetadata.getColumnCount() !== rightBarcodeMetadata.getColumnCount() && leftBarcodeMetadata.getErrorCorrectionLevel() !== rightBarcodeMetadata.getErrorCorrectionLevel() && leftBarcodeMetadata.getRowCount() !== rightBarcodeMetadata.getRowCount()) {
      return null;
    }
    return leftBarcodeMetadata;
  };
  PDF417ScanningDecoder2.getRowIndicatorColumn = function(image, boundingBox, startPoint, leftToRight, minCodewordWidth, maxCodewordWidth) {
    var rowIndicatorColumn = new DetectionResultRowIndicatorColumn(boundingBox, leftToRight);
    for (var i = 0; i < 2; i++) {
      var increment = i === 0 ? 1 : -1;
      var startColumn = Math.trunc(Math.trunc(startPoint.getX()));
      for (var imageRow = Math.trunc(Math.trunc(startPoint.getY())); imageRow <= boundingBox.getMaxY() && imageRow >= boundingBox.getMinY(); imageRow += increment) {
        var codeword = PDF417ScanningDecoder2.detectCodeword(image, 0, image.getWidth(), leftToRight, startColumn, imageRow, minCodewordWidth, maxCodewordWidth);
        if (codeword != null) {
          rowIndicatorColumn.setCodeword(imageRow, codeword);
          if (leftToRight) {
            startColumn = codeword.getStartX();
          } else {
            startColumn = codeword.getEndX();
          }
        }
      }
    }
    return rowIndicatorColumn;
  };
  PDF417ScanningDecoder2.adjustCodewordCount = function(detectionResult, barcodeMatrix) {
    var barcodeMatrix01 = barcodeMatrix[0][1];
    var numberOfCodewords = barcodeMatrix01.getValue();
    var calculatedNumberOfCodewords = detectionResult.getBarcodeColumnCount() * detectionResult.getBarcodeRowCount() - PDF417ScanningDecoder2.getNumberOfECCodeWords(detectionResult.getBarcodeECLevel());
    if (numberOfCodewords.length === 0) {
      if (calculatedNumberOfCodewords < 1 || calculatedNumberOfCodewords > PDF417Common.MAX_CODEWORDS_IN_BARCODE) {
        throw NotFoundException.getNotFoundInstance();
      }
      barcodeMatrix01.setValue(calculatedNumberOfCodewords);
    } else if (numberOfCodewords[0] !== calculatedNumberOfCodewords) {
      barcodeMatrix01.setValue(calculatedNumberOfCodewords);
    }
  };
  PDF417ScanningDecoder2.createDecoderResult = function(detectionResult) {
    var barcodeMatrix = PDF417ScanningDecoder2.createBarcodeMatrix(detectionResult);
    PDF417ScanningDecoder2.adjustCodewordCount(detectionResult, barcodeMatrix);
    var erasures = new Array();
    var codewords = new Int32Array(detectionResult.getBarcodeRowCount() * detectionResult.getBarcodeColumnCount());
    var ambiguousIndexValuesList = [];
    var ambiguousIndexesList = new Array();
    for (var row = 0; row < detectionResult.getBarcodeRowCount(); row++) {
      for (var column = 0; column < detectionResult.getBarcodeColumnCount(); column++) {
        var values = barcodeMatrix[row][column + 1].getValue();
        var codewordIndex = row * detectionResult.getBarcodeColumnCount() + column;
        if (values.length === 0) {
          erasures.push(codewordIndex);
        } else if (values.length === 1) {
          codewords[codewordIndex] = values[0];
        } else {
          ambiguousIndexesList.push(codewordIndex);
          ambiguousIndexValuesList.push(values);
        }
      }
    }
    var ambiguousIndexValues = new Array(ambiguousIndexValuesList.length);
    for (var i = 0; i < ambiguousIndexValues.length; i++) {
      ambiguousIndexValues[i] = ambiguousIndexValuesList[i];
    }
    return PDF417ScanningDecoder2.createDecoderResultFromAmbiguousValues(detectionResult.getBarcodeECLevel(), codewords, PDF417Common.toIntArray(erasures), PDF417Common.toIntArray(ambiguousIndexesList), ambiguousIndexValues);
  };
  PDF417ScanningDecoder2.createDecoderResultFromAmbiguousValues = function(ecLevel, codewords, erasureArray, ambiguousIndexes, ambiguousIndexValues) {
    var ambiguousIndexCount = new Int32Array(ambiguousIndexes.length);
    var tries = 100;
    while (tries-- > 0) {
      for (var i = 0; i < ambiguousIndexCount.length; i++) {
        codewords[ambiguousIndexes[i]] = ambiguousIndexValues[i][ambiguousIndexCount[i]];
      }
      try {
        return PDF417ScanningDecoder2.decodeCodewords(codewords, ecLevel, erasureArray);
      } catch (err) {
        var ignored = err instanceof ChecksumException;
        if (!ignored) {
          throw err;
        }
      }
      if (ambiguousIndexCount.length === 0) {
        throw ChecksumException.getChecksumInstance();
      }
      for (var i = 0; i < ambiguousIndexCount.length; i++) {
        if (ambiguousIndexCount[i] < ambiguousIndexValues[i].length - 1) {
          ambiguousIndexCount[i]++;
          break;
        } else {
          ambiguousIndexCount[i] = 0;
          if (i === ambiguousIndexCount.length - 1) {
            throw ChecksumException.getChecksumInstance();
          }
        }
      }
    }
    throw ChecksumException.getChecksumInstance();
  };
  PDF417ScanningDecoder2.createBarcodeMatrix = function(detectionResult) {
    var e_3, _a, e_4, _b;
    var barcodeMatrix = Array.from({length: detectionResult.getBarcodeRowCount()}, function() {
      return new Array(detectionResult.getBarcodeColumnCount() + 2);
    });
    for (var row = 0; row < barcodeMatrix.length; row++) {
      for (var column_1 = 0; column_1 < barcodeMatrix[row].length; column_1++) {
        barcodeMatrix[row][column_1] = new BarcodeValue();
      }
    }
    var column = 0;
    try {
      for (var _c = __values$y(detectionResult.getDetectionResultColumns()), _d = _c.next(); !_d.done; _d = _c.next()) {
        var detectionResultColumn = _d.value;
        if (detectionResultColumn != null) {
          try {
            for (var _e = (e_4 = void 0, __values$y(detectionResultColumn.getCodewords())), _f = _e.next(); !_f.done; _f = _e.next()) {
              var codeword = _f.value;
              if (codeword != null) {
                var rowNumber = codeword.getRowNumber();
                if (rowNumber >= 0) {
                  if (rowNumber >= barcodeMatrix.length) {
                    continue;
                  }
                  barcodeMatrix[rowNumber][column].setValue(codeword.getValue());
                }
              }
            }
          } catch (e_4_1) {
            e_4 = {error: e_4_1};
          } finally {
            try {
              if (_f && !_f.done && (_b = _e.return))
                _b.call(_e);
            } finally {
              if (e_4)
                throw e_4.error;
            }
          }
        }
        column++;
      }
    } catch (e_3_1) {
      e_3 = {error: e_3_1};
    } finally {
      try {
        if (_d && !_d.done && (_a = _c.return))
          _a.call(_c);
      } finally {
        if (e_3)
          throw e_3.error;
      }
    }
    return barcodeMatrix;
  };
  PDF417ScanningDecoder2.isValidBarcodeColumn = function(detectionResult, barcodeColumn) {
    return barcodeColumn >= 0 && barcodeColumn <= detectionResult.getBarcodeColumnCount() + 1;
  };
  PDF417ScanningDecoder2.getStartColumn = function(detectionResult, barcodeColumn, imageRow, leftToRight) {
    var e_5, _a;
    var offset = leftToRight ? 1 : -1;
    var codeword = null;
    if (PDF417ScanningDecoder2.isValidBarcodeColumn(detectionResult, barcodeColumn - offset)) {
      codeword = detectionResult.getDetectionResultColumn(barcodeColumn - offset).getCodeword(imageRow);
    }
    if (codeword != null) {
      return leftToRight ? codeword.getEndX() : codeword.getStartX();
    }
    codeword = detectionResult.getDetectionResultColumn(barcodeColumn).getCodewordNearby(imageRow);
    if (codeword != null) {
      return leftToRight ? codeword.getStartX() : codeword.getEndX();
    }
    if (PDF417ScanningDecoder2.isValidBarcodeColumn(detectionResult, barcodeColumn - offset)) {
      codeword = detectionResult.getDetectionResultColumn(barcodeColumn - offset).getCodewordNearby(imageRow);
    }
    if (codeword != null) {
      return leftToRight ? codeword.getEndX() : codeword.getStartX();
    }
    var skippedColumns = 0;
    while (PDF417ScanningDecoder2.isValidBarcodeColumn(detectionResult, barcodeColumn - offset)) {
      barcodeColumn -= offset;
      try {
        for (var _b = (e_5 = void 0, __values$y(detectionResult.getDetectionResultColumn(barcodeColumn).getCodewords())), _c = _b.next(); !_c.done; _c = _b.next()) {
          var previousRowCodeword = _c.value;
          if (previousRowCodeword != null) {
            return (leftToRight ? previousRowCodeword.getEndX() : previousRowCodeword.getStartX()) + offset * skippedColumns * (previousRowCodeword.getEndX() - previousRowCodeword.getStartX());
          }
        }
      } catch (e_5_1) {
        e_5 = {error: e_5_1};
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return))
            _a.call(_b);
        } finally {
          if (e_5)
            throw e_5.error;
        }
      }
      skippedColumns++;
    }
    return leftToRight ? detectionResult.getBoundingBox().getMinX() : detectionResult.getBoundingBox().getMaxX();
  };
  PDF417ScanningDecoder2.detectCodeword = function(image, minColumn, maxColumn, leftToRight, startColumn, imageRow, minCodewordWidth, maxCodewordWidth) {
    startColumn = PDF417ScanningDecoder2.adjustCodewordStartColumn(image, minColumn, maxColumn, leftToRight, startColumn, imageRow);
    var moduleBitCount = PDF417ScanningDecoder2.getModuleBitCount(image, minColumn, maxColumn, leftToRight, startColumn, imageRow);
    if (moduleBitCount == null) {
      return null;
    }
    var endColumn;
    var codewordBitCount = MathUtils.sum(moduleBitCount);
    if (leftToRight) {
      endColumn = startColumn + codewordBitCount;
    } else {
      for (var i = 0; i < moduleBitCount.length / 2; i++) {
        var tmpCount = moduleBitCount[i];
        moduleBitCount[i] = moduleBitCount[moduleBitCount.length - 1 - i];
        moduleBitCount[moduleBitCount.length - 1 - i] = tmpCount;
      }
      endColumn = startColumn;
      startColumn = endColumn - codewordBitCount;
    }
    if (!PDF417ScanningDecoder2.checkCodewordSkew(codewordBitCount, minCodewordWidth, maxCodewordWidth)) {
      return null;
    }
    var decodedValue = PDF417CodewordDecoder.getDecodedValue(moduleBitCount);
    var codeword = PDF417Common.getCodeword(decodedValue);
    if (codeword === -1) {
      return null;
    }
    return new Codeword(startColumn, endColumn, PDF417ScanningDecoder2.getCodewordBucketNumber(decodedValue), codeword);
  };
  PDF417ScanningDecoder2.getModuleBitCount = function(image, minColumn, maxColumn, leftToRight, startColumn, imageRow) {
    var imageColumn = startColumn;
    var moduleBitCount = new Int32Array(8);
    var moduleNumber = 0;
    var increment = leftToRight ? 1 : -1;
    var previousPixelValue = leftToRight;
    while ((leftToRight ? imageColumn < maxColumn : imageColumn >= minColumn) && moduleNumber < moduleBitCount.length) {
      if (image.get(imageColumn, imageRow) === previousPixelValue) {
        moduleBitCount[moduleNumber]++;
        imageColumn += increment;
      } else {
        moduleNumber++;
        previousPixelValue = !previousPixelValue;
      }
    }
    if (moduleNumber === moduleBitCount.length || imageColumn === (leftToRight ? maxColumn : minColumn) && moduleNumber === moduleBitCount.length - 1) {
      return moduleBitCount;
    }
    return null;
  };
  PDF417ScanningDecoder2.getNumberOfECCodeWords = function(barcodeECLevel) {
    return 2 << barcodeECLevel;
  };
  PDF417ScanningDecoder2.adjustCodewordStartColumn = function(image, minColumn, maxColumn, leftToRight, codewordStartColumn, imageRow) {
    var correctedStartColumn = codewordStartColumn;
    var increment = leftToRight ? -1 : 1;
    for (var i = 0; i < 2; i++) {
      while ((leftToRight ? correctedStartColumn >= minColumn : correctedStartColumn < maxColumn) && leftToRight === image.get(correctedStartColumn, imageRow)) {
        if (Math.abs(codewordStartColumn - correctedStartColumn) > PDF417ScanningDecoder2.CODEWORD_SKEW_SIZE) {
          return codewordStartColumn;
        }
        correctedStartColumn += increment;
      }
      increment = -increment;
      leftToRight = !leftToRight;
    }
    return correctedStartColumn;
  };
  PDF417ScanningDecoder2.checkCodewordSkew = function(codewordSize, minCodewordWidth, maxCodewordWidth) {
    return minCodewordWidth - PDF417ScanningDecoder2.CODEWORD_SKEW_SIZE <= codewordSize && codewordSize <= maxCodewordWidth + PDF417ScanningDecoder2.CODEWORD_SKEW_SIZE;
  };
  PDF417ScanningDecoder2.decodeCodewords = function(codewords, ecLevel, erasures) {
    if (codewords.length === 0) {
      throw FormatException.getFormatInstance();
    }
    var numECCodewords = 1 << ecLevel + 1;
    var correctedErrorsCount = PDF417ScanningDecoder2.correctErrors(codewords, erasures, numECCodewords);
    PDF417ScanningDecoder2.verifyCodewordCount(codewords, numECCodewords);
    var decoderResult = DecodedBitStreamParser$2.decode(codewords, "" + ecLevel);
    decoderResult.setErrorsCorrected(correctedErrorsCount);
    decoderResult.setErasures(erasures.length);
    return decoderResult;
  };
  PDF417ScanningDecoder2.correctErrors = function(codewords, erasures, numECCodewords) {
    if (erasures != null && erasures.length > numECCodewords / 2 + PDF417ScanningDecoder2.MAX_ERRORS || numECCodewords < 0 || numECCodewords > PDF417ScanningDecoder2.MAX_EC_CODEWORDS) {
      throw ChecksumException.getChecksumInstance();
    }
    return PDF417ScanningDecoder2.errorCorrection.decode(codewords, numECCodewords, erasures);
  };
  PDF417ScanningDecoder2.verifyCodewordCount = function(codewords, numECCodewords) {
    if (codewords.length < 4) {
      throw FormatException.getFormatInstance();
    }
    var numberOfCodewords = codewords[0];
    if (numberOfCodewords > codewords.length) {
      throw FormatException.getFormatInstance();
    }
    if (numberOfCodewords === 0) {
      if (numECCodewords < codewords.length) {
        codewords[0] = codewords.length - numECCodewords;
      } else {
        throw FormatException.getFormatInstance();
      }
    }
  };
  PDF417ScanningDecoder2.getBitCountForCodeword = function(codeword) {
    var result = new Int32Array(8);
    var previousValue = 0;
    var i = result.length - 1;
    while (true) {
      if ((codeword & 1) !== previousValue) {
        previousValue = codeword & 1;
        i--;
        if (i < 0) {
          break;
        }
      }
      result[i]++;
      codeword >>= 1;
    }
    return result;
  };
  PDF417ScanningDecoder2.getCodewordBucketNumber = function(codeword) {
    if (codeword instanceof Int32Array) {
      return this.getCodewordBucketNumber_Int32Array(codeword);
    }
    return this.getCodewordBucketNumber_number(codeword);
  };
  PDF417ScanningDecoder2.getCodewordBucketNumber_number = function(codeword) {
    return PDF417ScanningDecoder2.getCodewordBucketNumber(PDF417ScanningDecoder2.getBitCountForCodeword(codeword));
  };
  PDF417ScanningDecoder2.getCodewordBucketNumber_Int32Array = function(moduleBitCount) {
    return (moduleBitCount[0] - moduleBitCount[2] + moduleBitCount[4] - moduleBitCount[6] + 9) % 9;
  };
  PDF417ScanningDecoder2.toString = function(barcodeMatrix) {
    var formatter = new Formatter();
    for (var row = 0; row < barcodeMatrix.length; row++) {
      formatter.format("Row %2d: ", row);
      for (var column = 0; column < barcodeMatrix[row].length; column++) {
        var barcodeValue = barcodeMatrix[row][column];
        if (barcodeValue.getValue().length === 0) {
          formatter.format("        ", null);
        } else {
          formatter.format("%4d(%2d)", barcodeValue.getValue()[0], barcodeValue.getConfidence(barcodeValue.getValue()[0]));
        }
      }
      formatter.format("%n");
    }
    return formatter.toString();
  };
  PDF417ScanningDecoder2.CODEWORD_SKEW_SIZE = 2;
  PDF417ScanningDecoder2.MAX_ERRORS = 3;
  PDF417ScanningDecoder2.MAX_EC_CODEWORDS = 512;
  PDF417ScanningDecoder2.errorCorrection = new ErrorCorrection();
  return PDF417ScanningDecoder2;
}();
var __values$z = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return {value: o && o[i++], done: !o};
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var PDF417Reader = function() {
  function PDF417Reader2() {
  }
  PDF417Reader2.prototype.decode = function(image, hints) {
    if (hints === void 0) {
      hints = null;
    }
    var result = PDF417Reader2.decode(image, hints, false);
    if (result == null || result.length === 0 || result[0] == null) {
      throw NotFoundException.getNotFoundInstance();
    }
    return result[0];
  };
  PDF417Reader2.prototype.decodeMultiple = function(image, hints) {
    if (hints === void 0) {
      hints = null;
    }
    try {
      return PDF417Reader2.decode(image, hints, true);
    } catch (ignored) {
      if (ignored instanceof FormatException || ignored instanceof ChecksumException) {
        throw NotFoundException.getNotFoundInstance();
      }
      throw ignored;
    }
  };
  PDF417Reader2.decode = function(image, hints, multiple) {
    var e_1, _a;
    var results = new Array();
    var detectorResult = Detector$3.detectMultiple(image, hints, multiple);
    try {
      for (var _b = __values$z(detectorResult.getPoints()), _c = _b.next(); !_c.done; _c = _b.next()) {
        var points = _c.value;
        var decoderResult = PDF417ScanningDecoder.decode(detectorResult.getBits(), points[4], points[5], points[6], points[7], PDF417Reader2.getMinCodewordWidth(points), PDF417Reader2.getMaxCodewordWidth(points));
        var result = new Result(decoderResult.getText(), decoderResult.getRawBytes(), void 0, points, BarcodeFormat$1.PDF_417);
        result.putMetadata(ResultMetadataType$1.ERROR_CORRECTION_LEVEL, decoderResult.getECLevel());
        var pdf417ResultMetadata = decoderResult.getOther();
        if (pdf417ResultMetadata != null) {
          result.putMetadata(ResultMetadataType$1.PDF417_EXTRA_METADATA, pdf417ResultMetadata);
        }
        results.push(result);
      }
    } catch (e_1_1) {
      e_1 = {error: e_1_1};
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return))
          _a.call(_b);
      } finally {
        if (e_1)
          throw e_1.error;
      }
    }
    return results.map(function(x) {
      return x;
    });
  };
  PDF417Reader2.getMaxWidth = function(p1, p2) {
    if (p1 == null || p2 == null) {
      return 0;
    }
    return Math.trunc(Math.abs(p1.getX() - p2.getX()));
  };
  PDF417Reader2.getMinWidth = function(p1, p2) {
    if (p1 == null || p2 == null) {
      return Integer.MAX_VALUE;
    }
    return Math.trunc(Math.abs(p1.getX() - p2.getX()));
  };
  PDF417Reader2.getMaxCodewordWidth = function(p) {
    return Math.floor(Math.max(Math.max(PDF417Reader2.getMaxWidth(p[0], p[4]), PDF417Reader2.getMaxWidth(p[6], p[2]) * PDF417Common.MODULES_IN_CODEWORD / PDF417Common.MODULES_IN_STOP_PATTERN), Math.max(PDF417Reader2.getMaxWidth(p[1], p[5]), PDF417Reader2.getMaxWidth(p[7], p[3]) * PDF417Common.MODULES_IN_CODEWORD / PDF417Common.MODULES_IN_STOP_PATTERN)));
  };
  PDF417Reader2.getMinCodewordWidth = function(p) {
    return Math.floor(Math.min(Math.min(PDF417Reader2.getMinWidth(p[0], p[4]), PDF417Reader2.getMinWidth(p[6], p[2]) * PDF417Common.MODULES_IN_CODEWORD / PDF417Common.MODULES_IN_STOP_PATTERN), Math.min(PDF417Reader2.getMinWidth(p[1], p[5]), PDF417Reader2.getMinWidth(p[7], p[3]) * PDF417Common.MODULES_IN_CODEWORD / PDF417Common.MODULES_IN_STOP_PATTERN)));
  };
  PDF417Reader2.prototype.reset = function() {
  };
  return PDF417Reader2;
}();
var __extends$W = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (b2.hasOwnProperty(p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var ReaderException = function(_super) {
  __extends$W(ReaderException2, _super);
  function ReaderException2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  ReaderException2.kind = "ReaderException";
  return ReaderException2;
}(Exception);
var __values$A = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return {value: o && o[i++], done: !o};
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var MultiFormatReader = function() {
  function MultiFormatReader2() {
  }
  MultiFormatReader2.prototype.decode = function(image, hints) {
    this.setHints(hints);
    return this.decodeInternal(image);
  };
  MultiFormatReader2.prototype.decodeWithState = function(image) {
    if (this.readers === null || this.readers === void 0) {
      this.setHints(null);
    }
    return this.decodeInternal(image);
  };
  MultiFormatReader2.prototype.setHints = function(hints) {
    this.hints = hints;
    var tryHarder = hints !== null && hints !== void 0 && hints.get(DecodeHintType$1.TRY_HARDER) !== void 0;
    var formats = hints === null || hints === void 0 ? null : hints.get(DecodeHintType$1.POSSIBLE_FORMATS);
    var readers = new Array();
    if (formats !== null && formats !== void 0) {
      var addOneDReader = formats.some(function(f) {
        return f === BarcodeFormat$1.UPC_A || f === BarcodeFormat$1.UPC_E || f === BarcodeFormat$1.EAN_13 || f === BarcodeFormat$1.EAN_8 || f === BarcodeFormat$1.CODABAR || f === BarcodeFormat$1.CODE_39 || f === BarcodeFormat$1.CODE_93 || f === BarcodeFormat$1.CODE_128 || f === BarcodeFormat$1.ITF || f === BarcodeFormat$1.RSS_14 || f === BarcodeFormat$1.RSS_EXPANDED;
      });
      if (addOneDReader && !tryHarder) {
        readers.push(new MultiFormatOneDReader(hints));
      }
      if (formats.includes(BarcodeFormat$1.QR_CODE)) {
        readers.push(new QRCodeReader());
      }
      if (formats.includes(BarcodeFormat$1.DATA_MATRIX)) {
        readers.push(new DataMatrixReader());
      }
      if (formats.includes(BarcodeFormat$1.AZTEC)) {
        readers.push(new AztecReader());
      }
      if (formats.includes(BarcodeFormat$1.PDF_417)) {
        readers.push(new PDF417Reader());
      }
      if (addOneDReader && tryHarder) {
        readers.push(new MultiFormatOneDReader(hints));
      }
    }
    if (readers.length === 0) {
      if (!tryHarder) {
        readers.push(new MultiFormatOneDReader(hints));
      }
      readers.push(new QRCodeReader());
      readers.push(new DataMatrixReader());
      readers.push(new AztecReader());
      readers.push(new PDF417Reader());
      if (tryHarder) {
        readers.push(new MultiFormatOneDReader(hints));
      }
    }
    this.readers = readers;
  };
  MultiFormatReader2.prototype.reset = function() {
    var e_1, _a;
    if (this.readers !== null) {
      try {
        for (var _b = __values$A(this.readers), _c = _b.next(); !_c.done; _c = _b.next()) {
          var reader = _c.value;
          reader.reset();
        }
      } catch (e_1_1) {
        e_1 = {error: e_1_1};
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return))
            _a.call(_b);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
    }
  };
  MultiFormatReader2.prototype.decodeInternal = function(image) {
    var e_2, _a;
    if (this.readers === null) {
      throw new ReaderException("No readers where selected, nothing can be read.");
    }
    try {
      for (var _b = __values$A(this.readers), _c = _b.next(); !_c.done; _c = _b.next()) {
        var reader = _c.value;
        try {
          return reader.decode(image, this.hints);
        } catch (ex) {
          if (ex instanceof ReaderException) {
            continue;
          }
        }
      }
    } catch (e_2_1) {
      e_2 = {error: e_2_1};
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return))
          _a.call(_b);
      } finally {
        if (e_2)
          throw e_2.error;
      }
    }
    throw new NotFoundException("No MultiFormat Readers were able to detect the code.");
  };
  return MultiFormatReader2;
}();
var __extends$X = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (b2.hasOwnProperty(p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var BrowserMultiFormatReader = function(_super) {
  __extends$X(BrowserMultiFormatReader2, _super);
  function BrowserMultiFormatReader2(hints, timeBetweenScansMillis) {
    if (hints === void 0) {
      hints = null;
    }
    if (timeBetweenScansMillis === void 0) {
      timeBetweenScansMillis = 500;
    }
    var _this = this;
    var reader = new MultiFormatReader();
    reader.setHints(hints);
    _this = _super.call(this, reader, timeBetweenScansMillis) || this;
    return _this;
  }
  BrowserMultiFormatReader2.prototype.decodeBitmap = function(binaryBitmap) {
    return this.reader.decodeWithState(binaryBitmap);
  };
  return BrowserMultiFormatReader2;
}(BrowserCodeReader);
var __extends$Y = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (b2.hasOwnProperty(p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var BrowserPDF417Reader = function(_super) {
  __extends$Y(BrowserPDF417Reader2, _super);
  function BrowserPDF417Reader2(timeBetweenScansMillis) {
    if (timeBetweenScansMillis === void 0) {
      timeBetweenScansMillis = 500;
    }
    return _super.call(this, new PDF417Reader(), timeBetweenScansMillis) || this;
  }
  return BrowserPDF417Reader2;
}(BrowserCodeReader);
var __extends$Z = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (b2.hasOwnProperty(p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var BrowserQRCodeReader = function(_super) {
  __extends$Z(BrowserQRCodeReader2, _super);
  function BrowserQRCodeReader2(timeBetweenScansMillis) {
    if (timeBetweenScansMillis === void 0) {
      timeBetweenScansMillis = 500;
    }
    return _super.call(this, new QRCodeReader(), timeBetweenScansMillis) || this;
  }
  return BrowserQRCodeReader2;
}(BrowserCodeReader);
var EncodeHintType;
(function(EncodeHintType2) {
  EncodeHintType2[EncodeHintType2["ERROR_CORRECTION"] = 0] = "ERROR_CORRECTION";
  EncodeHintType2[EncodeHintType2["CHARACTER_SET"] = 1] = "CHARACTER_SET";
  EncodeHintType2[EncodeHintType2["DATA_MATRIX_SHAPE"] = 2] = "DATA_MATRIX_SHAPE";
  EncodeHintType2[EncodeHintType2["MIN_SIZE"] = 3] = "MIN_SIZE";
  EncodeHintType2[EncodeHintType2["MAX_SIZE"] = 4] = "MAX_SIZE";
  EncodeHintType2[EncodeHintType2["MARGIN"] = 5] = "MARGIN";
  EncodeHintType2[EncodeHintType2["PDF417_COMPACT"] = 6] = "PDF417_COMPACT";
  EncodeHintType2[EncodeHintType2["PDF417_COMPACTION"] = 7] = "PDF417_COMPACTION";
  EncodeHintType2[EncodeHintType2["PDF417_DIMENSIONS"] = 8] = "PDF417_DIMENSIONS";
  EncodeHintType2[EncodeHintType2["AZTEC_LAYERS"] = 9] = "AZTEC_LAYERS";
  EncodeHintType2[EncodeHintType2["QR_VERSION"] = 10] = "QR_VERSION";
})(EncodeHintType || (EncodeHintType = {}));
var EncodeHintType$1 = EncodeHintType;
var ReedSolomonEncoder = function() {
  function ReedSolomonEncoder2(field) {
    this.field = field;
    this.cachedGenerators = [];
    this.cachedGenerators.push(new GenericGFPoly(field, Int32Array.from([1])));
  }
  ReedSolomonEncoder2.prototype.buildGenerator = function(degree) {
    var cachedGenerators = this.cachedGenerators;
    if (degree >= cachedGenerators.length) {
      var lastGenerator = cachedGenerators[cachedGenerators.length - 1];
      var field = this.field;
      for (var d = cachedGenerators.length; d <= degree; d++) {
        var nextGenerator = lastGenerator.multiply(new GenericGFPoly(field, Int32Array.from([1, field.exp(d - 1 + field.getGeneratorBase())])));
        cachedGenerators.push(nextGenerator);
        lastGenerator = nextGenerator;
      }
    }
    return cachedGenerators[degree];
  };
  ReedSolomonEncoder2.prototype.encode = function(toEncode, ecBytes) {
    if (ecBytes === 0) {
      throw new IllegalArgumentException("No error correction bytes");
    }
    var dataBytes = toEncode.length - ecBytes;
    if (dataBytes <= 0) {
      throw new IllegalArgumentException("No data bytes provided");
    }
    var generator = this.buildGenerator(ecBytes);
    var infoCoefficients = new Int32Array(dataBytes);
    System.arraycopy(toEncode, 0, infoCoefficients, 0, dataBytes);
    var info = new GenericGFPoly(this.field, infoCoefficients);
    info = info.multiplyByMonomial(ecBytes, 1);
    var remainder = info.divide(generator)[1];
    var coefficients = remainder.getCoefficients();
    var numZeroCoefficients = ecBytes - coefficients.length;
    for (var i = 0; i < numZeroCoefficients; i++) {
      toEncode[dataBytes + i] = 0;
    }
    System.arraycopy(coefficients, 0, toEncode, dataBytes + numZeroCoefficients, coefficients.length);
  };
  return ReedSolomonEncoder2;
}();
var MaskUtil = function() {
  function MaskUtil2() {
  }
  MaskUtil2.applyMaskPenaltyRule1 = function(matrix) {
    return MaskUtil2.applyMaskPenaltyRule1Internal(matrix, true) + MaskUtil2.applyMaskPenaltyRule1Internal(matrix, false);
  };
  MaskUtil2.applyMaskPenaltyRule2 = function(matrix) {
    var penalty = 0;
    var array = matrix.getArray();
    var width = matrix.getWidth();
    var height = matrix.getHeight();
    for (var y = 0; y < height - 1; y++) {
      var arrayY = array[y];
      for (var x = 0; x < width - 1; x++) {
        var value = arrayY[x];
        if (value === arrayY[x + 1] && value === array[y + 1][x] && value === array[y + 1][x + 1]) {
          penalty++;
        }
      }
    }
    return MaskUtil2.N2 * penalty;
  };
  MaskUtil2.applyMaskPenaltyRule3 = function(matrix) {
    var numPenalties = 0;
    var array = matrix.getArray();
    var width = matrix.getWidth();
    var height = matrix.getHeight();
    for (var y = 0; y < height; y++) {
      for (var x = 0; x < width; x++) {
        var arrayY = array[y];
        if (x + 6 < width && arrayY[x] === 1 && arrayY[x + 1] === 0 && arrayY[x + 2] === 1 && arrayY[x + 3] === 1 && arrayY[x + 4] === 1 && arrayY[x + 5] === 0 && arrayY[x + 6] === 1 && (MaskUtil2.isWhiteHorizontal(arrayY, x - 4, x) || MaskUtil2.isWhiteHorizontal(arrayY, x + 7, x + 11))) {
          numPenalties++;
        }
        if (y + 6 < height && array[y][x] === 1 && array[y + 1][x] === 0 && array[y + 2][x] === 1 && array[y + 3][x] === 1 && array[y + 4][x] === 1 && array[y + 5][x] === 0 && array[y + 6][x] === 1 && (MaskUtil2.isWhiteVertical(array, x, y - 4, y) || MaskUtil2.isWhiteVertical(array, x, y + 7, y + 11))) {
          numPenalties++;
        }
      }
    }
    return numPenalties * MaskUtil2.N3;
  };
  MaskUtil2.isWhiteHorizontal = function(rowArray, from, to) {
    from = Math.max(from, 0);
    to = Math.min(to, rowArray.length);
    for (var i = from; i < to; i++) {
      if (rowArray[i] === 1) {
        return false;
      }
    }
    return true;
  };
  MaskUtil2.isWhiteVertical = function(array, col, from, to) {
    from = Math.max(from, 0);
    to = Math.min(to, array.length);
    for (var i = from; i < to; i++) {
      if (array[i][col] === 1) {
        return false;
      }
    }
    return true;
  };
  MaskUtil2.applyMaskPenaltyRule4 = function(matrix) {
    var numDarkCells = 0;
    var array = matrix.getArray();
    var width = matrix.getWidth();
    var height = matrix.getHeight();
    for (var y = 0; y < height; y++) {
      var arrayY = array[y];
      for (var x = 0; x < width; x++) {
        if (arrayY[x] === 1) {
          numDarkCells++;
        }
      }
    }
    var numTotalCells = matrix.getHeight() * matrix.getWidth();
    var fivePercentVariances = Math.floor(Math.abs(numDarkCells * 2 - numTotalCells) * 10 / numTotalCells);
    return fivePercentVariances * MaskUtil2.N4;
  };
  MaskUtil2.getDataMaskBit = function(maskPattern, x, y) {
    var intermediate;
    var temp;
    switch (maskPattern) {
      case 0:
        intermediate = y + x & 1;
        break;
      case 1:
        intermediate = y & 1;
        break;
      case 2:
        intermediate = x % 3;
        break;
      case 3:
        intermediate = (y + x) % 3;
        break;
      case 4:
        intermediate = Math.floor(y / 2) + Math.floor(x / 3) & 1;
        break;
      case 5:
        temp = y * x;
        intermediate = (temp & 1) + temp % 3;
        break;
      case 6:
        temp = y * x;
        intermediate = (temp & 1) + temp % 3 & 1;
        break;
      case 7:
        temp = y * x;
        intermediate = temp % 3 + (y + x & 1) & 1;
        break;
      default:
        throw new IllegalArgumentException("Invalid mask pattern: " + maskPattern);
    }
    return intermediate === 0;
  };
  MaskUtil2.applyMaskPenaltyRule1Internal = function(matrix, isHorizontal) {
    var penalty = 0;
    var iLimit = isHorizontal ? matrix.getHeight() : matrix.getWidth();
    var jLimit = isHorizontal ? matrix.getWidth() : matrix.getHeight();
    var array = matrix.getArray();
    for (var i = 0; i < iLimit; i++) {
      var numSameBitCells = 0;
      var prevBit = -1;
      for (var j = 0; j < jLimit; j++) {
        var bit = isHorizontal ? array[i][j] : array[j][i];
        if (bit === prevBit) {
          numSameBitCells++;
        } else {
          if (numSameBitCells >= 5) {
            penalty += MaskUtil2.N1 + (numSameBitCells - 5);
          }
          numSameBitCells = 1;
          prevBit = bit;
        }
      }
      if (numSameBitCells >= 5) {
        penalty += MaskUtil2.N1 + (numSameBitCells - 5);
      }
    }
    return penalty;
  };
  MaskUtil2.N1 = 3;
  MaskUtil2.N2 = 3;
  MaskUtil2.N3 = 40;
  MaskUtil2.N4 = 10;
  return MaskUtil2;
}();
var __values$B = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return {value: o && o[i++], done: !o};
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var ByteMatrix = function() {
  function ByteMatrix2(width, height) {
    this.width = width;
    this.height = height;
    var bytes = new Array(height);
    for (var i = 0; i !== height; i++) {
      bytes[i] = new Uint8Array(width);
    }
    this.bytes = bytes;
  }
  ByteMatrix2.prototype.getHeight = function() {
    return this.height;
  };
  ByteMatrix2.prototype.getWidth = function() {
    return this.width;
  };
  ByteMatrix2.prototype.get = function(x, y) {
    return this.bytes[y][x];
  };
  ByteMatrix2.prototype.getArray = function() {
    return this.bytes;
  };
  ByteMatrix2.prototype.setNumber = function(x, y, value) {
    this.bytes[y][x] = value;
  };
  ByteMatrix2.prototype.setBoolean = function(x, y, value) {
    this.bytes[y][x] = value ? 1 : 0;
  };
  ByteMatrix2.prototype.clear = function(value) {
    var e_1, _a;
    try {
      for (var _b = __values$B(this.bytes), _c = _b.next(); !_c.done; _c = _b.next()) {
        var aByte = _c.value;
        Arrays.fill(aByte, value);
      }
    } catch (e_1_1) {
      e_1 = {error: e_1_1};
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return))
          _a.call(_b);
      } finally {
        if (e_1)
          throw e_1.error;
      }
    }
  };
  ByteMatrix2.prototype.equals = function(o) {
    if (!(o instanceof ByteMatrix2)) {
      return false;
    }
    var other = o;
    if (this.width !== other.width) {
      return false;
    }
    if (this.height !== other.height) {
      return false;
    }
    for (var y = 0, height = this.height; y < height; ++y) {
      var bytesY = this.bytes[y];
      var otherBytesY = other.bytes[y];
      for (var x = 0, width = this.width; x < width; ++x) {
        if (bytesY[x] !== otherBytesY[x]) {
          return false;
        }
      }
    }
    return true;
  };
  ByteMatrix2.prototype.toString = function() {
    var result = new StringBuilder();
    for (var y = 0, height = this.height; y < height; ++y) {
      var bytesY = this.bytes[y];
      for (var x = 0, width = this.width; x < width; ++x) {
        switch (bytesY[x]) {
          case 0:
            result.append(" 0");
            break;
          case 1:
            result.append(" 1");
            break;
          default:
            result.append("  ");
            break;
        }
      }
      result.append("\n");
    }
    return result.toString();
  };
  return ByteMatrix2;
}();
var QRCode = function() {
  function QRCode2() {
    this.maskPattern = -1;
  }
  QRCode2.prototype.getMode = function() {
    return this.mode;
  };
  QRCode2.prototype.getECLevel = function() {
    return this.ecLevel;
  };
  QRCode2.prototype.getVersion = function() {
    return this.version;
  };
  QRCode2.prototype.getMaskPattern = function() {
    return this.maskPattern;
  };
  QRCode2.prototype.getMatrix = function() {
    return this.matrix;
  };
  QRCode2.prototype.toString = function() {
    var result = new StringBuilder();
    result.append("<<\n");
    result.append(" mode: ");
    result.append(this.mode ? this.mode.toString() : "null");
    result.append("\n ecLevel: ");
    result.append(this.ecLevel ? this.ecLevel.toString() : "null");
    result.append("\n version: ");
    result.append(this.version ? this.version.toString() : "null");
    result.append("\n maskPattern: ");
    result.append(this.maskPattern.toString());
    if (this.matrix) {
      result.append("\n matrix:\n");
      result.append(this.matrix.toString());
    } else {
      result.append("\n matrix: null\n");
    }
    result.append(">>\n");
    return result.toString();
  };
  QRCode2.prototype.setMode = function(value) {
    this.mode = value;
  };
  QRCode2.prototype.setECLevel = function(value) {
    this.ecLevel = value;
  };
  QRCode2.prototype.setVersion = function(version) {
    this.version = version;
  };
  QRCode2.prototype.setMaskPattern = function(value) {
    this.maskPattern = value;
  };
  QRCode2.prototype.setMatrix = function(value) {
    this.matrix = value;
  };
  QRCode2.isValidMaskPattern = function(maskPattern) {
    return maskPattern >= 0 && maskPattern < QRCode2.NUM_MASK_PATTERNS;
  };
  QRCode2.NUM_MASK_PATTERNS = 8;
  return QRCode2;
}();
var __extends$_ = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (b2.hasOwnProperty(p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var WriterException = function(_super) {
  __extends$_(WriterException2, _super);
  function WriterException2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  WriterException2.kind = "WriterException";
  return WriterException2;
}(Exception);
var MatrixUtil = function() {
  function MatrixUtil2() {
  }
  MatrixUtil2.clearMatrix = function(matrix) {
    matrix.clear(255);
  };
  MatrixUtil2.buildMatrix = function(dataBits, ecLevel, version, maskPattern, matrix) {
    MatrixUtil2.clearMatrix(matrix);
    MatrixUtil2.embedBasicPatterns(version, matrix);
    MatrixUtil2.embedTypeInfo(ecLevel, maskPattern, matrix);
    MatrixUtil2.maybeEmbedVersionInfo(version, matrix);
    MatrixUtil2.embedDataBits(dataBits, maskPattern, matrix);
  };
  MatrixUtil2.embedBasicPatterns = function(version, matrix) {
    MatrixUtil2.embedPositionDetectionPatternsAndSeparators(matrix);
    MatrixUtil2.embedDarkDotAtLeftBottomCorner(matrix);
    MatrixUtil2.maybeEmbedPositionAdjustmentPatterns(version, matrix);
    MatrixUtil2.embedTimingPatterns(matrix);
  };
  MatrixUtil2.embedTypeInfo = function(ecLevel, maskPattern, matrix) {
    var typeInfoBits = new BitArray();
    MatrixUtil2.makeTypeInfoBits(ecLevel, maskPattern, typeInfoBits);
    for (var i = 0, size = typeInfoBits.getSize(); i < size; ++i) {
      var bit = typeInfoBits.get(typeInfoBits.getSize() - 1 - i);
      var coordinates = MatrixUtil2.TYPE_INFO_COORDINATES[i];
      var x1 = coordinates[0];
      var y1 = coordinates[1];
      matrix.setBoolean(x1, y1, bit);
      if (i < 8) {
        var x2 = matrix.getWidth() - i - 1;
        var y2 = 8;
        matrix.setBoolean(x2, y2, bit);
      } else {
        var x2 = 8;
        var y2 = matrix.getHeight() - 7 + (i - 8);
        matrix.setBoolean(x2, y2, bit);
      }
    }
  };
  MatrixUtil2.maybeEmbedVersionInfo = function(version, matrix) {
    if (version.getVersionNumber() < 7) {
      return;
    }
    var versionInfoBits = new BitArray();
    MatrixUtil2.makeVersionInfoBits(version, versionInfoBits);
    var bitIndex = 6 * 3 - 1;
    for (var i = 0; i < 6; ++i) {
      for (var j = 0; j < 3; ++j) {
        var bit = versionInfoBits.get(bitIndex);
        bitIndex--;
        matrix.setBoolean(i, matrix.getHeight() - 11 + j, bit);
        matrix.setBoolean(matrix.getHeight() - 11 + j, i, bit);
      }
    }
  };
  MatrixUtil2.embedDataBits = function(dataBits, maskPattern, matrix) {
    var bitIndex = 0;
    var direction = -1;
    var x = matrix.getWidth() - 1;
    var y = matrix.getHeight() - 1;
    while (x > 0) {
      if (x === 6) {
        x -= 1;
      }
      while (y >= 0 && y < matrix.getHeight()) {
        for (var i = 0; i < 2; ++i) {
          var xx = x - i;
          if (!MatrixUtil2.isEmpty(matrix.get(xx, y))) {
            continue;
          }
          var bit = void 0;
          if (bitIndex < dataBits.getSize()) {
            bit = dataBits.get(bitIndex);
            ++bitIndex;
          } else {
            bit = false;
          }
          if (maskPattern !== 255 && MaskUtil.getDataMaskBit(maskPattern, xx, y)) {
            bit = !bit;
          }
          matrix.setBoolean(xx, y, bit);
        }
        y += direction;
      }
      direction = -direction;
      y += direction;
      x -= 2;
    }
    if (bitIndex !== dataBits.getSize()) {
      throw new WriterException("Not all bits consumed: " + bitIndex + "/" + dataBits.getSize());
    }
  };
  MatrixUtil2.findMSBSet = function(value) {
    return 32 - Integer.numberOfLeadingZeros(value);
  };
  MatrixUtil2.calculateBCHCode = function(value, poly) {
    if (poly === 0) {
      throw new IllegalArgumentException("0 polynomial");
    }
    var msbSetInPoly = MatrixUtil2.findMSBSet(poly);
    value <<= msbSetInPoly - 1;
    while (MatrixUtil2.findMSBSet(value) >= msbSetInPoly) {
      value ^= poly << MatrixUtil2.findMSBSet(value) - msbSetInPoly;
    }
    return value;
  };
  MatrixUtil2.makeTypeInfoBits = function(ecLevel, maskPattern, bits) {
    if (!QRCode.isValidMaskPattern(maskPattern)) {
      throw new WriterException("Invalid mask pattern");
    }
    var typeInfo = ecLevel.getBits() << 3 | maskPattern;
    bits.appendBits(typeInfo, 5);
    var bchCode = MatrixUtil2.calculateBCHCode(typeInfo, MatrixUtil2.TYPE_INFO_POLY);
    bits.appendBits(bchCode, 10);
    var maskBits = new BitArray();
    maskBits.appendBits(MatrixUtil2.TYPE_INFO_MASK_PATTERN, 15);
    bits.xor(maskBits);
    if (bits.getSize() !== 15) {
      throw new WriterException("should not happen but we got: " + bits.getSize());
    }
  };
  MatrixUtil2.makeVersionInfoBits = function(version, bits) {
    bits.appendBits(version.getVersionNumber(), 6);
    var bchCode = MatrixUtil2.calculateBCHCode(version.getVersionNumber(), MatrixUtil2.VERSION_INFO_POLY);
    bits.appendBits(bchCode, 12);
    if (bits.getSize() !== 18) {
      throw new WriterException("should not happen but we got: " + bits.getSize());
    }
  };
  MatrixUtil2.isEmpty = function(value) {
    return value === 255;
  };
  MatrixUtil2.embedTimingPatterns = function(matrix) {
    for (var i = 8; i < matrix.getWidth() - 8; ++i) {
      var bit = (i + 1) % 2;
      if (MatrixUtil2.isEmpty(matrix.get(i, 6))) {
        matrix.setNumber(i, 6, bit);
      }
      if (MatrixUtil2.isEmpty(matrix.get(6, i))) {
        matrix.setNumber(6, i, bit);
      }
    }
  };
  MatrixUtil2.embedDarkDotAtLeftBottomCorner = function(matrix) {
    if (matrix.get(8, matrix.getHeight() - 8) === 0) {
      throw new WriterException();
    }
    matrix.setNumber(8, matrix.getHeight() - 8, 1);
  };
  MatrixUtil2.embedHorizontalSeparationPattern = function(xStart, yStart, matrix) {
    for (var x = 0; x < 8; ++x) {
      if (!MatrixUtil2.isEmpty(matrix.get(xStart + x, yStart))) {
        throw new WriterException();
      }
      matrix.setNumber(xStart + x, yStart, 0);
    }
  };
  MatrixUtil2.embedVerticalSeparationPattern = function(xStart, yStart, matrix) {
    for (var y = 0; y < 7; ++y) {
      if (!MatrixUtil2.isEmpty(matrix.get(xStart, yStart + y))) {
        throw new WriterException();
      }
      matrix.setNumber(xStart, yStart + y, 0);
    }
  };
  MatrixUtil2.embedPositionAdjustmentPattern = function(xStart, yStart, matrix) {
    for (var y = 0; y < 5; ++y) {
      var patternY = MatrixUtil2.POSITION_ADJUSTMENT_PATTERN[y];
      for (var x = 0; x < 5; ++x) {
        matrix.setNumber(xStart + x, yStart + y, patternY[x]);
      }
    }
  };
  MatrixUtil2.embedPositionDetectionPattern = function(xStart, yStart, matrix) {
    for (var y = 0; y < 7; ++y) {
      var patternY = MatrixUtil2.POSITION_DETECTION_PATTERN[y];
      for (var x = 0; x < 7; ++x) {
        matrix.setNumber(xStart + x, yStart + y, patternY[x]);
      }
    }
  };
  MatrixUtil2.embedPositionDetectionPatternsAndSeparators = function(matrix) {
    var pdpWidth = MatrixUtil2.POSITION_DETECTION_PATTERN[0].length;
    MatrixUtil2.embedPositionDetectionPattern(0, 0, matrix);
    MatrixUtil2.embedPositionDetectionPattern(matrix.getWidth() - pdpWidth, 0, matrix);
    MatrixUtil2.embedPositionDetectionPattern(0, matrix.getWidth() - pdpWidth, matrix);
    var hspWidth = 8;
    MatrixUtil2.embedHorizontalSeparationPattern(0, hspWidth - 1, matrix);
    MatrixUtil2.embedHorizontalSeparationPattern(matrix.getWidth() - hspWidth, hspWidth - 1, matrix);
    MatrixUtil2.embedHorizontalSeparationPattern(0, matrix.getWidth() - hspWidth, matrix);
    var vspSize = 7;
    MatrixUtil2.embedVerticalSeparationPattern(vspSize, 0, matrix);
    MatrixUtil2.embedVerticalSeparationPattern(matrix.getHeight() - vspSize - 1, 0, matrix);
    MatrixUtil2.embedVerticalSeparationPattern(vspSize, matrix.getHeight() - vspSize, matrix);
  };
  MatrixUtil2.maybeEmbedPositionAdjustmentPatterns = function(version, matrix) {
    if (version.getVersionNumber() < 2) {
      return;
    }
    var index = version.getVersionNumber() - 1;
    var coordinates = MatrixUtil2.POSITION_ADJUSTMENT_PATTERN_COORDINATE_TABLE[index];
    for (var i = 0, length_1 = coordinates.length; i !== length_1; i++) {
      var y = coordinates[i];
      if (y >= 0) {
        for (var j = 0; j !== length_1; j++) {
          var x = coordinates[j];
          if (x >= 0 && MatrixUtil2.isEmpty(matrix.get(x, y))) {
            MatrixUtil2.embedPositionAdjustmentPattern(x - 2, y - 2, matrix);
          }
        }
      }
    }
  };
  MatrixUtil2.POSITION_DETECTION_PATTERN = Array.from([
    Int32Array.from([1, 1, 1, 1, 1, 1, 1]),
    Int32Array.from([1, 0, 0, 0, 0, 0, 1]),
    Int32Array.from([1, 0, 1, 1, 1, 0, 1]),
    Int32Array.from([1, 0, 1, 1, 1, 0, 1]),
    Int32Array.from([1, 0, 1, 1, 1, 0, 1]),
    Int32Array.from([1, 0, 0, 0, 0, 0, 1]),
    Int32Array.from([1, 1, 1, 1, 1, 1, 1])
  ]);
  MatrixUtil2.POSITION_ADJUSTMENT_PATTERN = Array.from([
    Int32Array.from([1, 1, 1, 1, 1]),
    Int32Array.from([1, 0, 0, 0, 1]),
    Int32Array.from([1, 0, 1, 0, 1]),
    Int32Array.from([1, 0, 0, 0, 1]),
    Int32Array.from([1, 1, 1, 1, 1])
  ]);
  MatrixUtil2.POSITION_ADJUSTMENT_PATTERN_COORDINATE_TABLE = Array.from([
    Int32Array.from([-1, -1, -1, -1, -1, -1, -1]),
    Int32Array.from([6, 18, -1, -1, -1, -1, -1]),
    Int32Array.from([6, 22, -1, -1, -1, -1, -1]),
    Int32Array.from([6, 26, -1, -1, -1, -1, -1]),
    Int32Array.from([6, 30, -1, -1, -1, -1, -1]),
    Int32Array.from([6, 34, -1, -1, -1, -1, -1]),
    Int32Array.from([6, 22, 38, -1, -1, -1, -1]),
    Int32Array.from([6, 24, 42, -1, -1, -1, -1]),
    Int32Array.from([6, 26, 46, -1, -1, -1, -1]),
    Int32Array.from([6, 28, 50, -1, -1, -1, -1]),
    Int32Array.from([6, 30, 54, -1, -1, -1, -1]),
    Int32Array.from([6, 32, 58, -1, -1, -1, -1]),
    Int32Array.from([6, 34, 62, -1, -1, -1, -1]),
    Int32Array.from([6, 26, 46, 66, -1, -1, -1]),
    Int32Array.from([6, 26, 48, 70, -1, -1, -1]),
    Int32Array.from([6, 26, 50, 74, -1, -1, -1]),
    Int32Array.from([6, 30, 54, 78, -1, -1, -1]),
    Int32Array.from([6, 30, 56, 82, -1, -1, -1]),
    Int32Array.from([6, 30, 58, 86, -1, -1, -1]),
    Int32Array.from([6, 34, 62, 90, -1, -1, -1]),
    Int32Array.from([6, 28, 50, 72, 94, -1, -1]),
    Int32Array.from([6, 26, 50, 74, 98, -1, -1]),
    Int32Array.from([6, 30, 54, 78, 102, -1, -1]),
    Int32Array.from([6, 28, 54, 80, 106, -1, -1]),
    Int32Array.from([6, 32, 58, 84, 110, -1, -1]),
    Int32Array.from([6, 30, 58, 86, 114, -1, -1]),
    Int32Array.from([6, 34, 62, 90, 118, -1, -1]),
    Int32Array.from([6, 26, 50, 74, 98, 122, -1]),
    Int32Array.from([6, 30, 54, 78, 102, 126, -1]),
    Int32Array.from([6, 26, 52, 78, 104, 130, -1]),
    Int32Array.from([6, 30, 56, 82, 108, 134, -1]),
    Int32Array.from([6, 34, 60, 86, 112, 138, -1]),
    Int32Array.from([6, 30, 58, 86, 114, 142, -1]),
    Int32Array.from([6, 34, 62, 90, 118, 146, -1]),
    Int32Array.from([6, 30, 54, 78, 102, 126, 150]),
    Int32Array.from([6, 24, 50, 76, 102, 128, 154]),
    Int32Array.from([6, 28, 54, 80, 106, 132, 158]),
    Int32Array.from([6, 32, 58, 84, 110, 136, 162]),
    Int32Array.from([6, 26, 54, 82, 110, 138, 166]),
    Int32Array.from([6, 30, 58, 86, 114, 142, 170])
  ]);
  MatrixUtil2.TYPE_INFO_COORDINATES = Array.from([
    Int32Array.from([8, 0]),
    Int32Array.from([8, 1]),
    Int32Array.from([8, 2]),
    Int32Array.from([8, 3]),
    Int32Array.from([8, 4]),
    Int32Array.from([8, 5]),
    Int32Array.from([8, 7]),
    Int32Array.from([8, 8]),
    Int32Array.from([7, 8]),
    Int32Array.from([5, 8]),
    Int32Array.from([4, 8]),
    Int32Array.from([3, 8]),
    Int32Array.from([2, 8]),
    Int32Array.from([1, 8]),
    Int32Array.from([0, 8])
  ]);
  MatrixUtil2.VERSION_INFO_POLY = 7973;
  MatrixUtil2.TYPE_INFO_POLY = 1335;
  MatrixUtil2.TYPE_INFO_MASK_PATTERN = 21522;
  return MatrixUtil2;
}();
var BlockPair = function() {
  function BlockPair2(dataBytes, errorCorrectionBytes) {
    this.dataBytes = dataBytes;
    this.errorCorrectionBytes = errorCorrectionBytes;
  }
  BlockPair2.prototype.getDataBytes = function() {
    return this.dataBytes;
  };
  BlockPair2.prototype.getErrorCorrectionBytes = function() {
    return this.errorCorrectionBytes;
  };
  return BlockPair2;
}();
var __values$C = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return {value: o && o[i++], done: !o};
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var Encoder = function() {
  function Encoder2() {
  }
  Encoder2.calculateMaskPenalty = function(matrix) {
    return MaskUtil.applyMaskPenaltyRule1(matrix) + MaskUtil.applyMaskPenaltyRule2(matrix) + MaskUtil.applyMaskPenaltyRule3(matrix) + MaskUtil.applyMaskPenaltyRule4(matrix);
  };
  Encoder2.encode = function(content, ecLevel, hints) {
    if (hints === void 0) {
      hints = null;
    }
    var encoding = Encoder2.DEFAULT_BYTE_MODE_ENCODING;
    var hasEncodingHint = hints !== null && hints.get(EncodeHintType$1.CHARACTER_SET) !== void 0;
    if (hasEncodingHint) {
      encoding = hints.get(EncodeHintType$1.CHARACTER_SET).toString();
    }
    var mode = this.chooseMode(content, encoding);
    var headerBits = new BitArray();
    if (mode === Mode$1.BYTE && (hasEncodingHint || Encoder2.DEFAULT_BYTE_MODE_ENCODING !== encoding)) {
      var eci = CharacterSetECI.getCharacterSetECIByName(encoding);
      if (eci !== void 0) {
        this.appendECI(eci, headerBits);
      }
    }
    this.appendModeInfo(mode, headerBits);
    var dataBits = new BitArray();
    this.appendBytes(content, mode, dataBits, encoding);
    var version;
    if (hints !== null && hints.get(EncodeHintType$1.QR_VERSION) !== void 0) {
      var versionNumber = Number.parseInt(hints.get(EncodeHintType$1.QR_VERSION).toString(), 10);
      version = Version$1.getVersionForNumber(versionNumber);
      var bitsNeeded = this.calculateBitsNeeded(mode, headerBits, dataBits, version);
      if (!this.willFit(bitsNeeded, version, ecLevel)) {
        throw new WriterException("Data too big for requested version");
      }
    } else {
      version = this.recommendVersion(ecLevel, mode, headerBits, dataBits);
    }
    var headerAndDataBits = new BitArray();
    headerAndDataBits.appendBitArray(headerBits);
    var numLetters = mode === Mode$1.BYTE ? dataBits.getSizeInBytes() : content.length;
    this.appendLengthInfo(numLetters, version, mode, headerAndDataBits);
    headerAndDataBits.appendBitArray(dataBits);
    var ecBlocks = version.getECBlocksForLevel(ecLevel);
    var numDataBytes = version.getTotalCodewords() - ecBlocks.getTotalECCodewords();
    this.terminateBits(numDataBytes, headerAndDataBits);
    var finalBits = this.interleaveWithECBytes(headerAndDataBits, version.getTotalCodewords(), numDataBytes, ecBlocks.getNumBlocks());
    var qrCode = new QRCode();
    qrCode.setECLevel(ecLevel);
    qrCode.setMode(mode);
    qrCode.setVersion(version);
    var dimension = version.getDimensionForVersion();
    var matrix = new ByteMatrix(dimension, dimension);
    var maskPattern = this.chooseMaskPattern(finalBits, ecLevel, version, matrix);
    qrCode.setMaskPattern(maskPattern);
    MatrixUtil.buildMatrix(finalBits, ecLevel, version, maskPattern, matrix);
    qrCode.setMatrix(matrix);
    return qrCode;
  };
  Encoder2.recommendVersion = function(ecLevel, mode, headerBits, dataBits) {
    var provisionalBitsNeeded = this.calculateBitsNeeded(mode, headerBits, dataBits, Version$1.getVersionForNumber(1));
    var provisionalVersion = this.chooseVersion(provisionalBitsNeeded, ecLevel);
    var bitsNeeded = this.calculateBitsNeeded(mode, headerBits, dataBits, provisionalVersion);
    return this.chooseVersion(bitsNeeded, ecLevel);
  };
  Encoder2.calculateBitsNeeded = function(mode, headerBits, dataBits, version) {
    return headerBits.getSize() + mode.getCharacterCountBits(version) + dataBits.getSize();
  };
  Encoder2.getAlphanumericCode = function(code) {
    if (code < Encoder2.ALPHANUMERIC_TABLE.length) {
      return Encoder2.ALPHANUMERIC_TABLE[code];
    }
    return -1;
  };
  Encoder2.chooseMode = function(content, encoding) {
    if (encoding === void 0) {
      encoding = null;
    }
    if (CharacterSetECI.SJIS.getName() === encoding && this.isOnlyDoubleByteKanji(content)) {
      return Mode$1.KANJI;
    }
    var hasNumeric = false;
    var hasAlphanumeric = false;
    for (var i = 0, length_1 = content.length; i < length_1; ++i) {
      var c = content.charAt(i);
      if (Encoder2.isDigit(c)) {
        hasNumeric = true;
      } else if (this.getAlphanumericCode(c.charCodeAt(0)) !== -1) {
        hasAlphanumeric = true;
      } else {
        return Mode$1.BYTE;
      }
    }
    if (hasAlphanumeric) {
      return Mode$1.ALPHANUMERIC;
    }
    if (hasNumeric) {
      return Mode$1.NUMERIC;
    }
    return Mode$1.BYTE;
  };
  Encoder2.isOnlyDoubleByteKanji = function(content) {
    var bytes;
    try {
      bytes = StringEncoding.encode(content, CharacterSetECI.SJIS);
    } catch (ignored) {
      return false;
    }
    var length = bytes.length;
    if (length % 2 !== 0) {
      return false;
    }
    for (var i = 0; i < length; i += 2) {
      var byte1 = bytes[i] & 255;
      if ((byte1 < 129 || byte1 > 159) && (byte1 < 224 || byte1 > 235)) {
        return false;
      }
    }
    return true;
  };
  Encoder2.chooseMaskPattern = function(bits, ecLevel, version, matrix) {
    var minPenalty = Number.MAX_SAFE_INTEGER;
    var bestMaskPattern = -1;
    for (var maskPattern = 0; maskPattern < QRCode.NUM_MASK_PATTERNS; maskPattern++) {
      MatrixUtil.buildMatrix(bits, ecLevel, version, maskPattern, matrix);
      var penalty = this.calculateMaskPenalty(matrix);
      if (penalty < minPenalty) {
        minPenalty = penalty;
        bestMaskPattern = maskPattern;
      }
    }
    return bestMaskPattern;
  };
  Encoder2.chooseVersion = function(numInputBits, ecLevel) {
    for (var versionNum = 1; versionNum <= 40; versionNum++) {
      var version = Version$1.getVersionForNumber(versionNum);
      if (Encoder2.willFit(numInputBits, version, ecLevel)) {
        return version;
      }
    }
    throw new WriterException("Data too big");
  };
  Encoder2.willFit = function(numInputBits, version, ecLevel) {
    var numBytes = version.getTotalCodewords();
    var ecBlocks = version.getECBlocksForLevel(ecLevel);
    var numEcBytes = ecBlocks.getTotalECCodewords();
    var numDataBytes = numBytes - numEcBytes;
    var totalInputBytes = (numInputBits + 7) / 8;
    return numDataBytes >= totalInputBytes;
  };
  Encoder2.terminateBits = function(numDataBytes, bits) {
    var capacity = numDataBytes * 8;
    if (bits.getSize() > capacity) {
      throw new WriterException("data bits cannot fit in the QR Code" + bits.getSize() + " > " + capacity);
    }
    for (var i = 0; i < 4 && bits.getSize() < capacity; ++i) {
      bits.appendBit(false);
    }
    var numBitsInLastByte = bits.getSize() & 7;
    if (numBitsInLastByte > 0) {
      for (var i = numBitsInLastByte; i < 8; i++) {
        bits.appendBit(false);
      }
    }
    var numPaddingBytes = numDataBytes - bits.getSizeInBytes();
    for (var i = 0; i < numPaddingBytes; ++i) {
      bits.appendBits((i & 1) === 0 ? 236 : 17, 8);
    }
    if (bits.getSize() !== capacity) {
      throw new WriterException("Bits size does not equal capacity");
    }
  };
  Encoder2.getNumDataBytesAndNumECBytesForBlockID = function(numTotalBytes, numDataBytes, numRSBlocks, blockID, numDataBytesInBlock, numECBytesInBlock) {
    if (blockID >= numRSBlocks) {
      throw new WriterException("Block ID too large");
    }
    var numRsBlocksInGroup2 = numTotalBytes % numRSBlocks;
    var numRsBlocksInGroup1 = numRSBlocks - numRsBlocksInGroup2;
    var numTotalBytesInGroup1 = Math.floor(numTotalBytes / numRSBlocks);
    var numTotalBytesInGroup2 = numTotalBytesInGroup1 + 1;
    var numDataBytesInGroup1 = Math.floor(numDataBytes / numRSBlocks);
    var numDataBytesInGroup2 = numDataBytesInGroup1 + 1;
    var numEcBytesInGroup1 = numTotalBytesInGroup1 - numDataBytesInGroup1;
    var numEcBytesInGroup2 = numTotalBytesInGroup2 - numDataBytesInGroup2;
    if (numEcBytesInGroup1 !== numEcBytesInGroup2) {
      throw new WriterException("EC bytes mismatch");
    }
    if (numRSBlocks !== numRsBlocksInGroup1 + numRsBlocksInGroup2) {
      throw new WriterException("RS blocks mismatch");
    }
    if (numTotalBytes !== (numDataBytesInGroup1 + numEcBytesInGroup1) * numRsBlocksInGroup1 + (numDataBytesInGroup2 + numEcBytesInGroup2) * numRsBlocksInGroup2) {
      throw new WriterException("Total bytes mismatch");
    }
    if (blockID < numRsBlocksInGroup1) {
      numDataBytesInBlock[0] = numDataBytesInGroup1;
      numECBytesInBlock[0] = numEcBytesInGroup1;
    } else {
      numDataBytesInBlock[0] = numDataBytesInGroup2;
      numECBytesInBlock[0] = numEcBytesInGroup2;
    }
  };
  Encoder2.interleaveWithECBytes = function(bits, numTotalBytes, numDataBytes, numRSBlocks) {
    var e_1, _a, e_2, _b;
    if (bits.getSizeInBytes() !== numDataBytes) {
      throw new WriterException("Number of bits and data bytes does not match");
    }
    var dataBytesOffset = 0;
    var maxNumDataBytes = 0;
    var maxNumEcBytes = 0;
    var blocks = new Array();
    for (var i = 0; i < numRSBlocks; ++i) {
      var numDataBytesInBlock = new Int32Array(1);
      var numEcBytesInBlock = new Int32Array(1);
      Encoder2.getNumDataBytesAndNumECBytesForBlockID(numTotalBytes, numDataBytes, numRSBlocks, i, numDataBytesInBlock, numEcBytesInBlock);
      var size = numDataBytesInBlock[0];
      var dataBytes = new Uint8Array(size);
      bits.toBytes(8 * dataBytesOffset, dataBytes, 0, size);
      var ecBytes = Encoder2.generateECBytes(dataBytes, numEcBytesInBlock[0]);
      blocks.push(new BlockPair(dataBytes, ecBytes));
      maxNumDataBytes = Math.max(maxNumDataBytes, size);
      maxNumEcBytes = Math.max(maxNumEcBytes, ecBytes.length);
      dataBytesOffset += numDataBytesInBlock[0];
    }
    if (numDataBytes !== dataBytesOffset) {
      throw new WriterException("Data bytes does not match offset");
    }
    var result = new BitArray();
    for (var i = 0; i < maxNumDataBytes; ++i) {
      try {
        for (var blocks_1 = (e_1 = void 0, __values$C(blocks)), blocks_1_1 = blocks_1.next(); !blocks_1_1.done; blocks_1_1 = blocks_1.next()) {
          var block = blocks_1_1.value;
          var dataBytes = block.getDataBytes();
          if (i < dataBytes.length) {
            result.appendBits(dataBytes[i], 8);
          }
        }
      } catch (e_1_1) {
        e_1 = {error: e_1_1};
      } finally {
        try {
          if (blocks_1_1 && !blocks_1_1.done && (_a = blocks_1.return))
            _a.call(blocks_1);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
    }
    for (var i = 0; i < maxNumEcBytes; ++i) {
      try {
        for (var blocks_2 = (e_2 = void 0, __values$C(blocks)), blocks_2_1 = blocks_2.next(); !blocks_2_1.done; blocks_2_1 = blocks_2.next()) {
          var block = blocks_2_1.value;
          var ecBytes = block.getErrorCorrectionBytes();
          if (i < ecBytes.length) {
            result.appendBits(ecBytes[i], 8);
          }
        }
      } catch (e_2_1) {
        e_2 = {error: e_2_1};
      } finally {
        try {
          if (blocks_2_1 && !blocks_2_1.done && (_b = blocks_2.return))
            _b.call(blocks_2);
        } finally {
          if (e_2)
            throw e_2.error;
        }
      }
    }
    if (numTotalBytes !== result.getSizeInBytes()) {
      throw new WriterException("Interleaving error: " + numTotalBytes + " and " + result.getSizeInBytes() + " differ.");
    }
    return result;
  };
  Encoder2.generateECBytes = function(dataBytes, numEcBytesInBlock) {
    var numDataBytes = dataBytes.length;
    var toEncode = new Int32Array(numDataBytes + numEcBytesInBlock);
    for (var i = 0; i < numDataBytes; i++) {
      toEncode[i] = dataBytes[i] & 255;
    }
    new ReedSolomonEncoder(GenericGF.QR_CODE_FIELD_256).encode(toEncode, numEcBytesInBlock);
    var ecBytes = new Uint8Array(numEcBytesInBlock);
    for (var i = 0; i < numEcBytesInBlock; i++) {
      ecBytes[i] = toEncode[numDataBytes + i];
    }
    return ecBytes;
  };
  Encoder2.appendModeInfo = function(mode, bits) {
    bits.appendBits(mode.getBits(), 4);
  };
  Encoder2.appendLengthInfo = function(numLetters, version, mode, bits) {
    var numBits = mode.getCharacterCountBits(version);
    if (numLetters >= 1 << numBits) {
      throw new WriterException(numLetters + " is bigger than " + ((1 << numBits) - 1));
    }
    bits.appendBits(numLetters, numBits);
  };
  Encoder2.appendBytes = function(content, mode, bits, encoding) {
    switch (mode) {
      case Mode$1.NUMERIC:
        Encoder2.appendNumericBytes(content, bits);
        break;
      case Mode$1.ALPHANUMERIC:
        Encoder2.appendAlphanumericBytes(content, bits);
        break;
      case Mode$1.BYTE:
        Encoder2.append8BitBytes(content, bits, encoding);
        break;
      case Mode$1.KANJI:
        Encoder2.appendKanjiBytes(content, bits);
        break;
      default:
        throw new WriterException("Invalid mode: " + mode);
    }
  };
  Encoder2.getDigit = function(singleCharacter) {
    return singleCharacter.charCodeAt(0) - 48;
  };
  Encoder2.isDigit = function(singleCharacter) {
    var cn = Encoder2.getDigit(singleCharacter);
    return cn >= 0 && cn <= 9;
  };
  Encoder2.appendNumericBytes = function(content, bits) {
    var length = content.length;
    var i = 0;
    while (i < length) {
      var num1 = Encoder2.getDigit(content.charAt(i));
      if (i + 2 < length) {
        var num2 = Encoder2.getDigit(content.charAt(i + 1));
        var num3 = Encoder2.getDigit(content.charAt(i + 2));
        bits.appendBits(num1 * 100 + num2 * 10 + num3, 10);
        i += 3;
      } else if (i + 1 < length) {
        var num2 = Encoder2.getDigit(content.charAt(i + 1));
        bits.appendBits(num1 * 10 + num2, 7);
        i += 2;
      } else {
        bits.appendBits(num1, 4);
        i++;
      }
    }
  };
  Encoder2.appendAlphanumericBytes = function(content, bits) {
    var length = content.length;
    var i = 0;
    while (i < length) {
      var code1 = Encoder2.getAlphanumericCode(content.charCodeAt(i));
      if (code1 === -1) {
        throw new WriterException();
      }
      if (i + 1 < length) {
        var code2 = Encoder2.getAlphanumericCode(content.charCodeAt(i + 1));
        if (code2 === -1) {
          throw new WriterException();
        }
        bits.appendBits(code1 * 45 + code2, 11);
        i += 2;
      } else {
        bits.appendBits(code1, 6);
        i++;
      }
    }
  };
  Encoder2.append8BitBytes = function(content, bits, encoding) {
    var bytes;
    try {
      bytes = StringEncoding.encode(content, encoding);
    } catch (uee) {
      throw new WriterException(uee);
    }
    for (var i = 0, length_2 = bytes.length; i !== length_2; i++) {
      var b = bytes[i];
      bits.appendBits(b, 8);
    }
  };
  Encoder2.appendKanjiBytes = function(content, bits) {
    var bytes;
    try {
      bytes = StringEncoding.encode(content, CharacterSetECI.SJIS);
    } catch (uee) {
      throw new WriterException(uee);
    }
    var length = bytes.length;
    for (var i = 0; i < length; i += 2) {
      var byte1 = bytes[i] & 255;
      var byte2 = bytes[i + 1] & 255;
      var code = byte1 << 8 & 4294967295 | byte2;
      var subtracted = -1;
      if (code >= 33088 && code <= 40956) {
        subtracted = code - 33088;
      } else if (code >= 57408 && code <= 60351) {
        subtracted = code - 49472;
      }
      if (subtracted === -1) {
        throw new WriterException("Invalid byte sequence");
      }
      var encoded = (subtracted >> 8) * 192 + (subtracted & 255);
      bits.appendBits(encoded, 13);
    }
  };
  Encoder2.appendECI = function(eci, bits) {
    bits.appendBits(Mode$1.ECI.getBits(), 4);
    bits.appendBits(eci.getValue(), 8);
  };
  Encoder2.ALPHANUMERIC_TABLE = Int32Array.from([
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    36,
    -1,
    -1,
    -1,
    37,
    38,
    -1,
    -1,
    -1,
    -1,
    39,
    40,
    -1,
    41,
    42,
    43,
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    44,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    -1,
    -1,
    -1,
    -1,
    -1
  ]);
  Encoder2.DEFAULT_BYTE_MODE_ENCODING = CharacterSetECI.UTF8.getName();
  return Encoder2;
}();
var BrowserQRCodeSvgWriter = function() {
  function BrowserQRCodeSvgWriter2() {
  }
  BrowserQRCodeSvgWriter2.prototype.write = function(contents, width, height, hints) {
    if (hints === void 0) {
      hints = null;
    }
    if (contents.length === 0) {
      throw new IllegalArgumentException("Found empty contents");
    }
    if (width < 0 || height < 0) {
      throw new IllegalArgumentException("Requested dimensions are too small: " + width + "x" + height);
    }
    var errorCorrectionLevel = ErrorCorrectionLevel.L;
    var quietZone = BrowserQRCodeSvgWriter2.QUIET_ZONE_SIZE;
    if (hints !== null) {
      if (hints.get(EncodeHintType$1.ERROR_CORRECTION) !== void 0) {
        errorCorrectionLevel = ErrorCorrectionLevel.fromString(hints.get(EncodeHintType$1.ERROR_CORRECTION).toString());
      }
      if (hints.get(EncodeHintType$1.MARGIN) !== void 0) {
        quietZone = Number.parseInt(hints.get(EncodeHintType$1.MARGIN).toString(), 10);
      }
    }
    var code = Encoder.encode(contents, errorCorrectionLevel, hints);
    return this.renderResult(code, width, height, quietZone);
  };
  BrowserQRCodeSvgWriter2.prototype.writeToDom = function(containerElement, contents, width, height, hints) {
    if (hints === void 0) {
      hints = null;
    }
    if (typeof containerElement === "string") {
      containerElement = document.querySelector(containerElement);
    }
    var svgElement = this.write(contents, width, height, hints);
    if (containerElement)
      containerElement.appendChild(svgElement);
  };
  BrowserQRCodeSvgWriter2.prototype.renderResult = function(code, width, height, quietZone) {
    var input = code.getMatrix();
    if (input === null) {
      throw new IllegalStateException();
    }
    var inputWidth = input.getWidth();
    var inputHeight = input.getHeight();
    var qrWidth = inputWidth + quietZone * 2;
    var qrHeight = inputHeight + quietZone * 2;
    var outputWidth = Math.max(width, qrWidth);
    var outputHeight = Math.max(height, qrHeight);
    var multiple = Math.min(Math.floor(outputWidth / qrWidth), Math.floor(outputHeight / qrHeight));
    var leftPadding = Math.floor((outputWidth - inputWidth * multiple) / 2);
    var topPadding = Math.floor((outputHeight - inputHeight * multiple) / 2);
    var svgElement = this.createSVGElement(outputWidth, outputHeight);
    for (var inputY = 0, outputY = topPadding; inputY < inputHeight; inputY++, outputY += multiple) {
      for (var inputX = 0, outputX = leftPadding; inputX < inputWidth; inputX++, outputX += multiple) {
        if (input.get(inputX, inputY) === 1) {
          var svgRectElement = this.createSvgRectElement(outputX, outputY, multiple, multiple);
          svgElement.appendChild(svgRectElement);
        }
      }
    }
    return svgElement;
  };
  BrowserQRCodeSvgWriter2.prototype.createSVGElement = function(w, h) {
    var svgElement = document.createElementNS(BrowserQRCodeSvgWriter2.SVG_NS, "svg");
    svgElement.setAttributeNS(null, "height", w.toString());
    svgElement.setAttributeNS(null, "width", h.toString());
    return svgElement;
  };
  BrowserQRCodeSvgWriter2.prototype.createSvgRectElement = function(x, y, w, h) {
    var rect = document.createElementNS(BrowserQRCodeSvgWriter2.SVG_NS, "rect");
    rect.setAttributeNS(null, "x", x.toString());
    rect.setAttributeNS(null, "y", y.toString());
    rect.setAttributeNS(null, "height", w.toString());
    rect.setAttributeNS(null, "width", h.toString());
    rect.setAttributeNS(null, "fill", "#000000");
    return rect;
  };
  BrowserQRCodeSvgWriter2.QUIET_ZONE_SIZE = 4;
  BrowserQRCodeSvgWriter2.SVG_NS = "http://www.w3.org/2000/svg";
  return BrowserQRCodeSvgWriter2;
}();
var QRCodeWriter = function() {
  function QRCodeWriter2() {
  }
  QRCodeWriter2.prototype.encode = function(contents, format, width, height, hints) {
    if (contents.length === 0) {
      throw new IllegalArgumentException("Found empty contents");
    }
    if (format !== BarcodeFormat$1.QR_CODE) {
      throw new IllegalArgumentException("Can only encode QR_CODE, but got " + format);
    }
    if (width < 0 || height < 0) {
      throw new IllegalArgumentException("Requested dimensions are too small: " + width + "x" + height);
    }
    var errorCorrectionLevel = ErrorCorrectionLevel.L;
    var quietZone = QRCodeWriter2.QUIET_ZONE_SIZE;
    if (hints !== null) {
      if (hints.get(EncodeHintType$1.ERROR_CORRECTION) !== void 0) {
        errorCorrectionLevel = ErrorCorrectionLevel.fromString(hints.get(EncodeHintType$1.ERROR_CORRECTION).toString());
      }
      if (hints.get(EncodeHintType$1.MARGIN) !== void 0) {
        quietZone = Number.parseInt(hints.get(EncodeHintType$1.MARGIN).toString(), 10);
      }
    }
    var code = Encoder.encode(contents, errorCorrectionLevel, hints);
    return QRCodeWriter2.renderResult(code, width, height, quietZone);
  };
  QRCodeWriter2.renderResult = function(code, width, height, quietZone) {
    var input = code.getMatrix();
    if (input === null) {
      throw new IllegalStateException();
    }
    var inputWidth = input.getWidth();
    var inputHeight = input.getHeight();
    var qrWidth = inputWidth + quietZone * 2;
    var qrHeight = inputHeight + quietZone * 2;
    var outputWidth = Math.max(width, qrWidth);
    var outputHeight = Math.max(height, qrHeight);
    var multiple = Math.min(Math.floor(outputWidth / qrWidth), Math.floor(outputHeight / qrHeight));
    var leftPadding = Math.floor((outputWidth - inputWidth * multiple) / 2);
    var topPadding = Math.floor((outputHeight - inputHeight * multiple) / 2);
    var output = new BitMatrix(outputWidth, outputHeight);
    for (var inputY = 0, outputY = topPadding; inputY < inputHeight; inputY++, outputY += multiple) {
      for (var inputX = 0, outputX = leftPadding; inputX < inputWidth; inputX++, outputX += multiple) {
        if (input.get(inputX, inputY) === 1) {
          output.setRegion(outputX, outputY, multiple, multiple);
        }
      }
    }
    return output;
  };
  QRCodeWriter2.QUIET_ZONE_SIZE = 4;
  return QRCodeWriter2;
}();
var MultiFormatWriter = function() {
  function MultiFormatWriter2() {
  }
  MultiFormatWriter2.prototype.encode = function(contents, format, width, height, hints) {
    var writer;
    switch (format) {
      case BarcodeFormat$1.QR_CODE:
        writer = new QRCodeWriter();
        break;
      default:
        throw new IllegalArgumentException("No encoder available for format " + format);
    }
    return writer.encode(contents, format, width, height, hints);
  };
  return MultiFormatWriter2;
}();
var __extends$$ = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (b2.hasOwnProperty(p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var PlanarYUVLuminanceSource = function(_super) {
  __extends$$(PlanarYUVLuminanceSource2, _super);
  function PlanarYUVLuminanceSource2(yuvData, dataWidth, dataHeight, left, top, width, height, reverseHorizontal) {
    var _this = _super.call(this, width, height) || this;
    _this.yuvData = yuvData;
    _this.dataWidth = dataWidth;
    _this.dataHeight = dataHeight;
    _this.left = left;
    _this.top = top;
    if (left + width > dataWidth || top + height > dataHeight) {
      throw new IllegalArgumentException("Crop rectangle does not fit within image data.");
    }
    if (reverseHorizontal) {
      _this.reverseHorizontal(width, height);
    }
    return _this;
  }
  PlanarYUVLuminanceSource2.prototype.getRow = function(y, row) {
    if (y < 0 || y >= this.getHeight()) {
      throw new IllegalArgumentException("Requested row is outside the image: " + y);
    }
    var width = this.getWidth();
    if (row === null || row === void 0 || row.length < width) {
      row = new Uint8ClampedArray(width);
    }
    var offset = (y + this.top) * this.dataWidth + this.left;
    System.arraycopy(this.yuvData, offset, row, 0, width);
    return row;
  };
  PlanarYUVLuminanceSource2.prototype.getMatrix = function() {
    var width = this.getWidth();
    var height = this.getHeight();
    if (width === this.dataWidth && height === this.dataHeight) {
      return this.yuvData;
    }
    var area = width * height;
    var matrix = new Uint8ClampedArray(area);
    var inputOffset = this.top * this.dataWidth + this.left;
    if (width === this.dataWidth) {
      System.arraycopy(this.yuvData, inputOffset, matrix, 0, area);
      return matrix;
    }
    for (var y = 0; y < height; y++) {
      var outputOffset = y * width;
      System.arraycopy(this.yuvData, inputOffset, matrix, outputOffset, width);
      inputOffset += this.dataWidth;
    }
    return matrix;
  };
  PlanarYUVLuminanceSource2.prototype.isCropSupported = function() {
    return true;
  };
  PlanarYUVLuminanceSource2.prototype.crop = function(left, top, width, height) {
    return new PlanarYUVLuminanceSource2(this.yuvData, this.dataWidth, this.dataHeight, this.left + left, this.top + top, width, height, false);
  };
  PlanarYUVLuminanceSource2.prototype.renderThumbnail = function() {
    var width = this.getWidth() / PlanarYUVLuminanceSource2.THUMBNAIL_SCALE_FACTOR;
    var height = this.getHeight() / PlanarYUVLuminanceSource2.THUMBNAIL_SCALE_FACTOR;
    var pixels = new Int32Array(width * height);
    var yuv = this.yuvData;
    var inputOffset = this.top * this.dataWidth + this.left;
    for (var y = 0; y < height; y++) {
      var outputOffset = y * width;
      for (var x = 0; x < width; x++) {
        var grey = yuv[inputOffset + x * PlanarYUVLuminanceSource2.THUMBNAIL_SCALE_FACTOR] & 255;
        pixels[outputOffset + x] = 4278190080 | grey * 65793;
      }
      inputOffset += this.dataWidth * PlanarYUVLuminanceSource2.THUMBNAIL_SCALE_FACTOR;
    }
    return pixels;
  };
  PlanarYUVLuminanceSource2.prototype.getThumbnailWidth = function() {
    return this.getWidth() / PlanarYUVLuminanceSource2.THUMBNAIL_SCALE_FACTOR;
  };
  PlanarYUVLuminanceSource2.prototype.getThumbnailHeight = function() {
    return this.getHeight() / PlanarYUVLuminanceSource2.THUMBNAIL_SCALE_FACTOR;
  };
  PlanarYUVLuminanceSource2.prototype.reverseHorizontal = function(width, height) {
    var yuvData = this.yuvData;
    for (var y = 0, rowStart = this.top * this.dataWidth + this.left; y < height; y++, rowStart += this.dataWidth) {
      var middle = rowStart + width / 2;
      for (var x1 = rowStart, x2 = rowStart + width - 1; x1 < middle; x1++, x2--) {
        var temp = yuvData[x1];
        yuvData[x1] = yuvData[x2];
        yuvData[x2] = temp;
      }
    }
  };
  PlanarYUVLuminanceSource2.prototype.invert = function() {
    return new InvertedLuminanceSource(this);
  };
  PlanarYUVLuminanceSource2.THUMBNAIL_SCALE_FACTOR = 2;
  return PlanarYUVLuminanceSource2;
}(LuminanceSource);
var __extends$10 = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (b2.hasOwnProperty(p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var RGBLuminanceSource = function(_super) {
  __extends$10(RGBLuminanceSource2, _super);
  function RGBLuminanceSource2(luminances, width, height, dataWidth, dataHeight, left, top) {
    var _this = _super.call(this, width, height) || this;
    _this.dataWidth = dataWidth;
    _this.dataHeight = dataHeight;
    _this.left = left;
    _this.top = top;
    if (luminances.BYTES_PER_ELEMENT === 4) {
      var size = width * height;
      var luminancesUint8Array = new Uint8ClampedArray(size);
      for (var offset = 0; offset < size; offset++) {
        var pixel = luminances[offset];
        var r = pixel >> 16 & 255;
        var g2 = pixel >> 7 & 510;
        var b = pixel & 255;
        luminancesUint8Array[offset] = (r + g2 + b) / 4 & 255;
      }
      _this.luminances = luminancesUint8Array;
    } else {
      _this.luminances = luminances;
    }
    if (dataWidth === void 0) {
      _this.dataWidth = width;
    }
    if (dataHeight === void 0) {
      _this.dataHeight = height;
    }
    if (left === void 0) {
      _this.left = 0;
    }
    if (top === void 0) {
      _this.top = 0;
    }
    if (_this.left + width > _this.dataWidth || _this.top + height > _this.dataHeight) {
      throw new IllegalArgumentException("Crop rectangle does not fit within image data.");
    }
    return _this;
  }
  RGBLuminanceSource2.prototype.getRow = function(y, row) {
    if (y < 0 || y >= this.getHeight()) {
      throw new IllegalArgumentException("Requested row is outside the image: " + y);
    }
    var width = this.getWidth();
    if (row === null || row === void 0 || row.length < width) {
      row = new Uint8ClampedArray(width);
    }
    var offset = (y + this.top) * this.dataWidth + this.left;
    System.arraycopy(this.luminances, offset, row, 0, width);
    return row;
  };
  RGBLuminanceSource2.prototype.getMatrix = function() {
    var width = this.getWidth();
    var height = this.getHeight();
    if (width === this.dataWidth && height === this.dataHeight) {
      return this.luminances;
    }
    var area = width * height;
    var matrix = new Uint8ClampedArray(area);
    var inputOffset = this.top * this.dataWidth + this.left;
    if (width === this.dataWidth) {
      System.arraycopy(this.luminances, inputOffset, matrix, 0, area);
      return matrix;
    }
    for (var y = 0; y < height; y++) {
      var outputOffset = y * width;
      System.arraycopy(this.luminances, inputOffset, matrix, outputOffset, width);
      inputOffset += this.dataWidth;
    }
    return matrix;
  };
  RGBLuminanceSource2.prototype.isCropSupported = function() {
    return true;
  };
  RGBLuminanceSource2.prototype.crop = function(left, top, width, height) {
    return new RGBLuminanceSource2(this.luminances, width, height, this.dataWidth, this.dataHeight, this.left + left, this.top + top);
  };
  RGBLuminanceSource2.prototype.invert = function() {
    return new InvertedLuminanceSource(this);
  };
  return RGBLuminanceSource2;
}(LuminanceSource);
var __extends$11 = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (b2.hasOwnProperty(p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var Charset = function(_super) {
  __extends$11(Charset2, _super);
  function Charset2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  Charset2.forName = function(name) {
    return this.getCharacterSetECIByName(name);
  };
  return Charset2;
}(CharacterSetECI);
var StandardCharsets = function() {
  function StandardCharsets2() {
  }
  StandardCharsets2.ISO_8859_1 = CharacterSetECI.ISO8859_1;
  return StandardCharsets2;
}();
var AztecCode = function() {
  function AztecCode2() {
  }
  AztecCode2.prototype.isCompact = function() {
    return this.compact;
  };
  AztecCode2.prototype.setCompact = function(compact) {
    this.compact = compact;
  };
  AztecCode2.prototype.getSize = function() {
    return this.size;
  };
  AztecCode2.prototype.setSize = function(size) {
    this.size = size;
  };
  AztecCode2.prototype.getLayers = function() {
    return this.layers;
  };
  AztecCode2.prototype.setLayers = function(layers) {
    this.layers = layers;
  };
  AztecCode2.prototype.getCodeWords = function() {
    return this.codeWords;
  };
  AztecCode2.prototype.setCodeWords = function(codeWords) {
    this.codeWords = codeWords;
  };
  AztecCode2.prototype.getMatrix = function() {
    return this.matrix;
  };
  AztecCode2.prototype.setMatrix = function(matrix) {
    this.matrix = matrix;
  };
  return AztecCode2;
}();
var Collections = function() {
  function Collections2() {
  }
  Collections2.singletonList = function(item) {
    return [item];
  };
  Collections2.min = function(collection, comparator) {
    return collection.sort(comparator)[0];
  };
  return Collections2;
}();
var Token = function() {
  function Token2(previous) {
    this.previous = previous;
  }
  Token2.prototype.getPrevious = function() {
    return this.previous;
  };
  return Token2;
}();
var __extends$12 = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (b2.hasOwnProperty(p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var SimpleToken = function(_super) {
  __extends$12(SimpleToken2, _super);
  function SimpleToken2(previous, value, bitCount) {
    var _this = _super.call(this, previous) || this;
    _this.value = value;
    _this.bitCount = bitCount;
    return _this;
  }
  SimpleToken2.prototype.appendTo = function(bitArray, text) {
    bitArray.appendBits(this.value, this.bitCount);
  };
  SimpleToken2.prototype.add = function(value, bitCount) {
    return new SimpleToken2(this, value, bitCount);
  };
  SimpleToken2.prototype.addBinaryShift = function(start, byteCount) {
    console.warn("addBinaryShift on SimpleToken, this simply returns a copy of this token");
    return new SimpleToken2(this, start, byteCount);
  };
  SimpleToken2.prototype.toString = function() {
    var value = this.value & (1 << this.bitCount) - 1;
    value |= 1 << this.bitCount;
    return "<" + Integer.toBinaryString(value | 1 << this.bitCount).substring(1) + ">";
  };
  return SimpleToken2;
}(Token);
var __extends$13 = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (b2.hasOwnProperty(p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var BinaryShiftToken = function(_super) {
  __extends$13(BinaryShiftToken2, _super);
  function BinaryShiftToken2(previous, binaryShiftStart, binaryShiftByteCount) {
    var _this = _super.call(this, previous, 0, 0) || this;
    _this.binaryShiftStart = binaryShiftStart;
    _this.binaryShiftByteCount = binaryShiftByteCount;
    return _this;
  }
  BinaryShiftToken2.prototype.appendTo = function(bitArray, text) {
    for (var i = 0; i < this.binaryShiftByteCount; i++) {
      if (i === 0 || i === 31 && this.binaryShiftByteCount <= 62) {
        bitArray.appendBits(31, 5);
        if (this.binaryShiftByteCount > 62) {
          bitArray.appendBits(this.binaryShiftByteCount - 31, 16);
        } else if (i === 0) {
          bitArray.appendBits(Math.min(this.binaryShiftByteCount, 31), 5);
        } else {
          bitArray.appendBits(this.binaryShiftByteCount - 31, 5);
        }
      }
      bitArray.appendBits(text[this.binaryShiftStart + i], 8);
    }
  };
  BinaryShiftToken2.prototype.addBinaryShift = function(start, byteCount) {
    return new BinaryShiftToken2(this, start, byteCount);
  };
  BinaryShiftToken2.prototype.toString = function() {
    return "<" + this.binaryShiftStart + "::" + (this.binaryShiftStart + this.binaryShiftByteCount - 1) + ">";
  };
  return BinaryShiftToken2;
}(SimpleToken);
function addBinaryShift(token, start, byteCount) {
  return new BinaryShiftToken(token, start, byteCount);
}
function add(token, value, bitCount) {
  return new SimpleToken(token, value, bitCount);
}
var MODE_NAMES = [
  "UPPER",
  "LOWER",
  "DIGIT",
  "MIXED",
  "PUNCT"
];
var MODE_UPPER = 0;
var MODE_LOWER = 1;
var MODE_DIGIT = 2;
var MODE_MIXED = 3;
var MODE_PUNCT = 4;
var EMPTY_TOKEN = new SimpleToken(null, 0, 0);
var LATCH_TABLE = [
  Int32Array.from([
    0,
    (5 << 16) + 28,
    (5 << 16) + 30,
    (5 << 16) + 29,
    (10 << 16) + (29 << 5) + 30
  ]),
  Int32Array.from([
    (9 << 16) + (30 << 4) + 14,
    0,
    (5 << 16) + 30,
    (5 << 16) + 29,
    (10 << 16) + (29 << 5) + 30
  ]),
  Int32Array.from([
    (4 << 16) + 14,
    (9 << 16) + (14 << 5) + 28,
    0,
    (9 << 16) + (14 << 5) + 29,
    (14 << 16) + (14 << 10) + (29 << 5) + 30
  ]),
  Int32Array.from([
    (5 << 16) + 29,
    (5 << 16) + 28,
    (10 << 16) + (29 << 5) + 30,
    0,
    (5 << 16) + 30
  ]),
  Int32Array.from([
    (5 << 16) + 31,
    (10 << 16) + (31 << 5) + 28,
    (10 << 16) + (31 << 5) + 30,
    (10 << 16) + (31 << 5) + 29,
    0
  ])
];
var __values$D = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return {value: o && o[i++], done: !o};
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
function static_SHIFT_TABLE(SHIFT_TABLE2) {
  var e_1, _a;
  try {
    for (var SHIFT_TABLE_1 = __values$D(SHIFT_TABLE2), SHIFT_TABLE_1_1 = SHIFT_TABLE_1.next(); !SHIFT_TABLE_1_1.done; SHIFT_TABLE_1_1 = SHIFT_TABLE_1.next()) {
      var table = SHIFT_TABLE_1_1.value;
      Arrays.fill(table, -1);
    }
  } catch (e_1_1) {
    e_1 = {error: e_1_1};
  } finally {
    try {
      if (SHIFT_TABLE_1_1 && !SHIFT_TABLE_1_1.done && (_a = SHIFT_TABLE_1.return))
        _a.call(SHIFT_TABLE_1);
    } finally {
      if (e_1)
        throw e_1.error;
    }
  }
  SHIFT_TABLE2[MODE_UPPER][MODE_PUNCT] = 0;
  SHIFT_TABLE2[MODE_LOWER][MODE_PUNCT] = 0;
  SHIFT_TABLE2[MODE_LOWER][MODE_UPPER] = 28;
  SHIFT_TABLE2[MODE_MIXED][MODE_PUNCT] = 0;
  SHIFT_TABLE2[MODE_DIGIT][MODE_PUNCT] = 0;
  SHIFT_TABLE2[MODE_DIGIT][MODE_UPPER] = 15;
  return SHIFT_TABLE2;
}
var SHIFT_TABLE = static_SHIFT_TABLE(Arrays.createInt32Array(6, 6));
var __values$E = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return {value: o && o[i++], done: !o};
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var State = function() {
  function State2(token, mode, binaryBytes, bitCount) {
    this.token = token;
    this.mode = mode;
    this.binaryShiftByteCount = binaryBytes;
    this.bitCount = bitCount;
  }
  State2.prototype.getMode = function() {
    return this.mode;
  };
  State2.prototype.getToken = function() {
    return this.token;
  };
  State2.prototype.getBinaryShiftByteCount = function() {
    return this.binaryShiftByteCount;
  };
  State2.prototype.getBitCount = function() {
    return this.bitCount;
  };
  State2.prototype.latchAndAppend = function(mode, value) {
    var bitCount = this.bitCount;
    var token = this.token;
    if (mode !== this.mode) {
      var latch = LATCH_TABLE[this.mode][mode];
      token = add(token, latch & 65535, latch >> 16);
      bitCount += latch >> 16;
    }
    var latchModeBitCount = mode === MODE_DIGIT ? 4 : 5;
    token = add(token, value, latchModeBitCount);
    return new State2(token, mode, 0, bitCount + latchModeBitCount);
  };
  State2.prototype.shiftAndAppend = function(mode, value) {
    var token = this.token;
    var thisModeBitCount = this.mode === MODE_DIGIT ? 4 : 5;
    token = add(token, SHIFT_TABLE[this.mode][mode], thisModeBitCount);
    token = add(token, value, 5);
    return new State2(token, this.mode, 0, this.bitCount + thisModeBitCount + 5);
  };
  State2.prototype.addBinaryShiftChar = function(index) {
    var token = this.token;
    var mode = this.mode;
    var bitCount = this.bitCount;
    if (this.mode === MODE_PUNCT || this.mode === MODE_DIGIT) {
      var latch = LATCH_TABLE[mode][MODE_UPPER];
      token = add(token, latch & 65535, latch >> 16);
      bitCount += latch >> 16;
      mode = MODE_UPPER;
    }
    var deltaBitCount = this.binaryShiftByteCount === 0 || this.binaryShiftByteCount === 31 ? 18 : this.binaryShiftByteCount === 62 ? 9 : 8;
    var result = new State2(token, mode, this.binaryShiftByteCount + 1, bitCount + deltaBitCount);
    if (result.binaryShiftByteCount === 2047 + 31) {
      result = result.endBinaryShift(index + 1);
    }
    return result;
  };
  State2.prototype.endBinaryShift = function(index) {
    if (this.binaryShiftByteCount === 0) {
      return this;
    }
    var token = this.token;
    token = addBinaryShift(token, index - this.binaryShiftByteCount, this.binaryShiftByteCount);
    return new State2(token, this.mode, 0, this.bitCount);
  };
  State2.prototype.isBetterThanOrEqualTo = function(other) {
    var newModeBitCount = this.bitCount + (LATCH_TABLE[this.mode][other.mode] >> 16);
    if (this.binaryShiftByteCount < other.binaryShiftByteCount) {
      newModeBitCount += State2.calculateBinaryShiftCost(other) - State2.calculateBinaryShiftCost(this);
    } else if (this.binaryShiftByteCount > other.binaryShiftByteCount && other.binaryShiftByteCount > 0) {
      newModeBitCount += 10;
    }
    return newModeBitCount <= other.bitCount;
  };
  State2.prototype.toBitArray = function(text) {
    var e_1, _a;
    var symbols = [];
    for (var token = this.endBinaryShift(text.length).token; token !== null; token = token.getPrevious()) {
      symbols.unshift(token);
    }
    var bitArray = new BitArray();
    try {
      for (var symbols_1 = __values$E(symbols), symbols_1_1 = symbols_1.next(); !symbols_1_1.done; symbols_1_1 = symbols_1.next()) {
        var symbol = symbols_1_1.value;
        symbol.appendTo(bitArray, text);
      }
    } catch (e_1_1) {
      e_1 = {error: e_1_1};
    } finally {
      try {
        if (symbols_1_1 && !symbols_1_1.done && (_a = symbols_1.return))
          _a.call(symbols_1);
      } finally {
        if (e_1)
          throw e_1.error;
      }
    }
    return bitArray;
  };
  State2.prototype.toString = function() {
    return StringUtils.format("%s bits=%d bytes=%d", MODE_NAMES[this.mode], this.bitCount, this.binaryShiftByteCount);
  };
  State2.calculateBinaryShiftCost = function(state) {
    if (state.binaryShiftByteCount > 62) {
      return 21;
    }
    if (state.binaryShiftByteCount > 31) {
      return 20;
    }
    if (state.binaryShiftByteCount > 0) {
      return 10;
    }
    return 0;
  };
  State2.INITIAL_STATE = new State2(EMPTY_TOKEN, MODE_UPPER, 0, 0);
  return State2;
}();
function static_CHAR_MAP(CHAR_MAP2) {
  var spaceCharCode = StringUtils.getCharCode(" ");
  var pointCharCode = StringUtils.getCharCode(".");
  var commaCharCode = StringUtils.getCharCode(",");
  CHAR_MAP2[MODE_UPPER][spaceCharCode] = 1;
  var zUpperCharCode = StringUtils.getCharCode("Z");
  var aUpperCharCode = StringUtils.getCharCode("A");
  for (var c = aUpperCharCode; c <= zUpperCharCode; c++) {
    CHAR_MAP2[MODE_UPPER][c] = c - aUpperCharCode + 2;
  }
  CHAR_MAP2[MODE_LOWER][spaceCharCode] = 1;
  var zLowerCharCode = StringUtils.getCharCode("z");
  var aLowerCharCode = StringUtils.getCharCode("a");
  for (var c = aLowerCharCode; c <= zLowerCharCode; c++) {
    CHAR_MAP2[MODE_LOWER][c] = c - aLowerCharCode + 2;
  }
  CHAR_MAP2[MODE_DIGIT][spaceCharCode] = 1;
  var nineCharCode = StringUtils.getCharCode("9");
  var zeroCharCode = StringUtils.getCharCode("0");
  for (var c = zeroCharCode; c <= nineCharCode; c++) {
    CHAR_MAP2[MODE_DIGIT][c] = c - zeroCharCode + 2;
  }
  CHAR_MAP2[MODE_DIGIT][commaCharCode] = 12;
  CHAR_MAP2[MODE_DIGIT][pointCharCode] = 13;
  var mixedTable = [
    "\0",
    " ",
    "",
    "",
    "",
    "",
    "",
    "",
    "\x07",
    "\b",
    "	",
    "\n",
    "\v",
    "\f",
    "\r",
    "",
    "",
    "",
    "",
    "",
    "@",
    "\\",
    "^",
    "_",
    "`",
    "|",
    "~",
    ""
  ];
  for (var i = 0; i < mixedTable.length; i++) {
    CHAR_MAP2[MODE_MIXED][StringUtils.getCharCode(mixedTable[i])] = i;
  }
  var punctTable = [
    "\0",
    "\r",
    "\0",
    "\0",
    "\0",
    "\0",
    "!",
    "'",
    "#",
    "$",
    "%",
    "&",
    "'",
    "(",
    ")",
    "*",
    "+",
    ",",
    "-",
    ".",
    "/",
    ":",
    ";",
    "<",
    "=",
    ">",
    "?",
    "[",
    "]",
    "{",
    "}"
  ];
  for (var i = 0; i < punctTable.length; i++) {
    if (StringUtils.getCharCode(punctTable[i]) > 0) {
      CHAR_MAP2[MODE_PUNCT][StringUtils.getCharCode(punctTable[i])] = i;
    }
  }
  return CHAR_MAP2;
}
var CHAR_MAP = static_CHAR_MAP(Arrays.createInt32Array(5, 256));
var __values$F = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return {value: o && o[i++], done: !o};
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var HighLevelEncoder = function() {
  function HighLevelEncoder2(text) {
    this.text = text;
  }
  HighLevelEncoder2.prototype.encode = function() {
    var spaceCharCode = StringUtils.getCharCode(" ");
    var lineBreakCharCode = StringUtils.getCharCode("\n");
    var states = Collections.singletonList(State.INITIAL_STATE);
    for (var index = 0; index < this.text.length; index++) {
      var pairCode = void 0;
      var nextChar = index + 1 < this.text.length ? this.text[index + 1] : 0;
      switch (this.text[index]) {
        case StringUtils.getCharCode("\r"):
          pairCode = nextChar === lineBreakCharCode ? 2 : 0;
          break;
        case StringUtils.getCharCode("."):
          pairCode = nextChar === spaceCharCode ? 3 : 0;
          break;
        case StringUtils.getCharCode(","):
          pairCode = nextChar === spaceCharCode ? 4 : 0;
          break;
        case StringUtils.getCharCode(":"):
          pairCode = nextChar === spaceCharCode ? 5 : 0;
          break;
        default:
          pairCode = 0;
      }
      if (pairCode > 0) {
        states = HighLevelEncoder2.updateStateListForPair(states, index, pairCode);
        index++;
      } else {
        states = this.updateStateListForChar(states, index);
      }
    }
    var minState = Collections.min(states, function(a, b) {
      return a.getBitCount() - b.getBitCount();
    });
    return minState.toBitArray(this.text);
  };
  HighLevelEncoder2.prototype.updateStateListForChar = function(states, index) {
    var e_1, _a;
    var result = [];
    try {
      for (var states_1 = __values$F(states), states_1_1 = states_1.next(); !states_1_1.done; states_1_1 = states_1.next()) {
        var state = states_1_1.value;
        this.updateStateForChar(state, index, result);
      }
    } catch (e_1_1) {
      e_1 = {error: e_1_1};
    } finally {
      try {
        if (states_1_1 && !states_1_1.done && (_a = states_1.return))
          _a.call(states_1);
      } finally {
        if (e_1)
          throw e_1.error;
      }
    }
    return HighLevelEncoder2.simplifyStates(result);
  };
  HighLevelEncoder2.prototype.updateStateForChar = function(state, index, result) {
    var ch = this.text[index] & 255;
    var charInCurrentTable = CHAR_MAP[state.getMode()][ch] > 0;
    var stateNoBinary = null;
    for (var mode = 0; mode <= MODE_PUNCT; mode++) {
      var charInMode = CHAR_MAP[mode][ch];
      if (charInMode > 0) {
        if (stateNoBinary == null) {
          stateNoBinary = state.endBinaryShift(index);
        }
        if (!charInCurrentTable || mode === state.getMode() || mode === MODE_DIGIT) {
          var latchState = stateNoBinary.latchAndAppend(mode, charInMode);
          result.push(latchState);
        }
        if (!charInCurrentTable && SHIFT_TABLE[state.getMode()][mode] >= 0) {
          var shiftState = stateNoBinary.shiftAndAppend(mode, charInMode);
          result.push(shiftState);
        }
      }
    }
    if (state.getBinaryShiftByteCount() > 0 || CHAR_MAP[state.getMode()][ch] === 0) {
      var binaryState = state.addBinaryShiftChar(index);
      result.push(binaryState);
    }
  };
  HighLevelEncoder2.updateStateListForPair = function(states, index, pairCode) {
    var e_2, _a;
    var result = [];
    try {
      for (var states_2 = __values$F(states), states_2_1 = states_2.next(); !states_2_1.done; states_2_1 = states_2.next()) {
        var state = states_2_1.value;
        this.updateStateForPair(state, index, pairCode, result);
      }
    } catch (e_2_1) {
      e_2 = {error: e_2_1};
    } finally {
      try {
        if (states_2_1 && !states_2_1.done && (_a = states_2.return))
          _a.call(states_2);
      } finally {
        if (e_2)
          throw e_2.error;
      }
    }
    return this.simplifyStates(result);
  };
  HighLevelEncoder2.updateStateForPair = function(state, index, pairCode, result) {
    var stateNoBinary = state.endBinaryShift(index);
    result.push(stateNoBinary.latchAndAppend(MODE_PUNCT, pairCode));
    if (state.getMode() !== MODE_PUNCT) {
      result.push(stateNoBinary.shiftAndAppend(MODE_PUNCT, pairCode));
    }
    if (pairCode === 3 || pairCode === 4) {
      var digitState = stateNoBinary.latchAndAppend(MODE_DIGIT, 16 - pairCode).latchAndAppend(MODE_DIGIT, 1);
      result.push(digitState);
    }
    if (state.getBinaryShiftByteCount() > 0) {
      var binaryState = state.addBinaryShiftChar(index).addBinaryShiftChar(index + 1);
      result.push(binaryState);
    }
  };
  HighLevelEncoder2.simplifyStates = function(states) {
    var e_3, _a, e_4, _b;
    var result = [];
    try {
      for (var states_3 = __values$F(states), states_3_1 = states_3.next(); !states_3_1.done; states_3_1 = states_3.next()) {
        var newState = states_3_1.value;
        var add2 = true;
        var _loop_1 = function(oldState2) {
          if (oldState2.isBetterThanOrEqualTo(newState)) {
            add2 = false;
            return "break";
          }
          if (newState.isBetterThanOrEqualTo(oldState2)) {
            result = result.filter(function(x) {
              return x !== oldState2;
            });
          }
        };
        try {
          for (var result_1 = (e_4 = void 0, __values$F(result)), result_1_1 = result_1.next(); !result_1_1.done; result_1_1 = result_1.next()) {
            var oldState = result_1_1.value;
            var state_1 = _loop_1(oldState);
            if (state_1 === "break")
              break;
          }
        } catch (e_4_1) {
          e_4 = {error: e_4_1};
        } finally {
          try {
            if (result_1_1 && !result_1_1.done && (_b = result_1.return))
              _b.call(result_1);
          } finally {
            if (e_4)
              throw e_4.error;
          }
        }
        if (add2) {
          result.push(newState);
        }
      }
    } catch (e_3_1) {
      e_3 = {error: e_3_1};
    } finally {
      try {
        if (states_3_1 && !states_3_1.done && (_a = states_3.return))
          _a.call(states_3);
      } finally {
        if (e_3)
          throw e_3.error;
      }
    }
    return result;
  };
  return HighLevelEncoder2;
}();
var __values$G = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return {value: o && o[i++], done: !o};
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var Encoder$1 = function() {
  function Encoder2() {
  }
  Encoder2.encodeBytes = function(data) {
    return Encoder2.encode(data, Encoder2.DEFAULT_EC_PERCENT, Encoder2.DEFAULT_AZTEC_LAYERS);
  };
  Encoder2.encode = function(data, minECCPercent, userSpecifiedLayers) {
    var bits = new HighLevelEncoder(data).encode();
    var eccBits = Integer.truncDivision(bits.getSize() * minECCPercent, 100) + 11;
    var totalSizeBits = bits.getSize() + eccBits;
    var compact;
    var layers;
    var totalBitsInLayer;
    var wordSize;
    var stuffedBits;
    if (userSpecifiedLayers !== Encoder2.DEFAULT_AZTEC_LAYERS) {
      compact = userSpecifiedLayers < 0;
      layers = Math.abs(userSpecifiedLayers);
      if (layers > (compact ? Encoder2.MAX_NB_BITS_COMPACT : Encoder2.MAX_NB_BITS)) {
        throw new IllegalArgumentException(StringUtils.format("Illegal value %s for layers", userSpecifiedLayers));
      }
      totalBitsInLayer = Encoder2.totalBitsInLayer(layers, compact);
      wordSize = Encoder2.WORD_SIZE[layers];
      var usableBitsInLayers = totalBitsInLayer - totalBitsInLayer % wordSize;
      stuffedBits = Encoder2.stuffBits(bits, wordSize);
      if (stuffedBits.getSize() + eccBits > usableBitsInLayers) {
        throw new IllegalArgumentException("Data to large for user specified layer");
      }
      if (compact && stuffedBits.getSize() > wordSize * 64) {
        throw new IllegalArgumentException("Data to large for user specified layer");
      }
    } else {
      wordSize = 0;
      stuffedBits = null;
      for (var i = 0; ; i++) {
        if (i > Encoder2.MAX_NB_BITS) {
          throw new IllegalArgumentException("Data too large for an Aztec code");
        }
        compact = i <= 3;
        layers = compact ? i + 1 : i;
        totalBitsInLayer = Encoder2.totalBitsInLayer(layers, compact);
        if (totalSizeBits > totalBitsInLayer) {
          continue;
        }
        if (stuffedBits == null || wordSize !== Encoder2.WORD_SIZE[layers]) {
          wordSize = Encoder2.WORD_SIZE[layers];
          stuffedBits = Encoder2.stuffBits(bits, wordSize);
        }
        var usableBitsInLayers = totalBitsInLayer - totalBitsInLayer % wordSize;
        if (compact && stuffedBits.getSize() > wordSize * 64) {
          continue;
        }
        if (stuffedBits.getSize() + eccBits <= usableBitsInLayers) {
          break;
        }
      }
    }
    var messageBits = Encoder2.generateCheckWords(stuffedBits, totalBitsInLayer, wordSize);
    var messageSizeInWords = stuffedBits.getSize() / wordSize;
    var modeMessage = Encoder2.generateModeMessage(compact, layers, messageSizeInWords);
    var baseMatrixSize = (compact ? 11 : 14) + layers * 4;
    var alignmentMap = new Int32Array(baseMatrixSize);
    var matrixSize;
    if (compact) {
      matrixSize = baseMatrixSize;
      for (var i = 0; i < alignmentMap.length; i++) {
        alignmentMap[i] = i;
      }
    } else {
      matrixSize = baseMatrixSize + 1 + 2 * Integer.truncDivision(Integer.truncDivision(baseMatrixSize, 2) - 1, 15);
      var origCenter = Integer.truncDivision(baseMatrixSize, 2);
      var center = Integer.truncDivision(matrixSize, 2);
      for (var i = 0; i < origCenter; i++) {
        var newOffset = i + Integer.truncDivision(i, 15);
        alignmentMap[origCenter - i - 1] = center - newOffset - 1;
        alignmentMap[origCenter + i] = center + newOffset + 1;
      }
    }
    var matrix = new BitMatrix(matrixSize);
    for (var i = 0, rowOffset = 0; i < layers; i++) {
      var rowSize = (layers - i) * 4 + (compact ? 9 : 12);
      for (var j = 0; j < rowSize; j++) {
        var columnOffset = j * 2;
        for (var k = 0; k < 2; k++) {
          if (messageBits.get(rowOffset + columnOffset + k)) {
            matrix.set(alignmentMap[i * 2 + k], alignmentMap[i * 2 + j]);
          }
          if (messageBits.get(rowOffset + rowSize * 2 + columnOffset + k)) {
            matrix.set(alignmentMap[i * 2 + j], alignmentMap[baseMatrixSize - 1 - i * 2 - k]);
          }
          if (messageBits.get(rowOffset + rowSize * 4 + columnOffset + k)) {
            matrix.set(alignmentMap[baseMatrixSize - 1 - i * 2 - k], alignmentMap[baseMatrixSize - 1 - i * 2 - j]);
          }
          if (messageBits.get(rowOffset + rowSize * 6 + columnOffset + k)) {
            matrix.set(alignmentMap[baseMatrixSize - 1 - i * 2 - j], alignmentMap[i * 2 + k]);
          }
        }
      }
      rowOffset += rowSize * 8;
    }
    Encoder2.drawModeMessage(matrix, compact, matrixSize, modeMessage);
    if (compact) {
      Encoder2.drawBullsEye(matrix, Integer.truncDivision(matrixSize, 2), 5);
    } else {
      Encoder2.drawBullsEye(matrix, Integer.truncDivision(matrixSize, 2), 7);
      for (var i = 0, j = 0; i < Integer.truncDivision(baseMatrixSize, 2) - 1; i += 15, j += 16) {
        for (var k = Integer.truncDivision(matrixSize, 2) & 1; k < matrixSize; k += 2) {
          matrix.set(Integer.truncDivision(matrixSize, 2) - j, k);
          matrix.set(Integer.truncDivision(matrixSize, 2) + j, k);
          matrix.set(k, Integer.truncDivision(matrixSize, 2) - j);
          matrix.set(k, Integer.truncDivision(matrixSize, 2) + j);
        }
      }
    }
    var aztec = new AztecCode();
    aztec.setCompact(compact);
    aztec.setSize(matrixSize);
    aztec.setLayers(layers);
    aztec.setCodeWords(messageSizeInWords);
    aztec.setMatrix(matrix);
    return aztec;
  };
  Encoder2.drawBullsEye = function(matrix, center, size) {
    for (var i = 0; i < size; i += 2) {
      for (var j = center - i; j <= center + i; j++) {
        matrix.set(j, center - i);
        matrix.set(j, center + i);
        matrix.set(center - i, j);
        matrix.set(center + i, j);
      }
    }
    matrix.set(center - size, center - size);
    matrix.set(center - size + 1, center - size);
    matrix.set(center - size, center - size + 1);
    matrix.set(center + size, center - size);
    matrix.set(center + size, center - size + 1);
    matrix.set(center + size, center + size - 1);
  };
  Encoder2.generateModeMessage = function(compact, layers, messageSizeInWords) {
    var modeMessage = new BitArray();
    if (compact) {
      modeMessage.appendBits(layers - 1, 2);
      modeMessage.appendBits(messageSizeInWords - 1, 6);
      modeMessage = Encoder2.generateCheckWords(modeMessage, 28, 4);
    } else {
      modeMessage.appendBits(layers - 1, 5);
      modeMessage.appendBits(messageSizeInWords - 1, 11);
      modeMessage = Encoder2.generateCheckWords(modeMessage, 40, 4);
    }
    return modeMessage;
  };
  Encoder2.drawModeMessage = function(matrix, compact, matrixSize, modeMessage) {
    var center = Integer.truncDivision(matrixSize, 2);
    if (compact) {
      for (var i = 0; i < 7; i++) {
        var offset = center - 3 + i;
        if (modeMessage.get(i)) {
          matrix.set(offset, center - 5);
        }
        if (modeMessage.get(i + 7)) {
          matrix.set(center + 5, offset);
        }
        if (modeMessage.get(20 - i)) {
          matrix.set(offset, center + 5);
        }
        if (modeMessage.get(27 - i)) {
          matrix.set(center - 5, offset);
        }
      }
    } else {
      for (var i = 0; i < 10; i++) {
        var offset = center - 5 + i + Integer.truncDivision(i, 5);
        if (modeMessage.get(i)) {
          matrix.set(offset, center - 7);
        }
        if (modeMessage.get(i + 10)) {
          matrix.set(center + 7, offset);
        }
        if (modeMessage.get(29 - i)) {
          matrix.set(offset, center + 7);
        }
        if (modeMessage.get(39 - i)) {
          matrix.set(center - 7, offset);
        }
      }
    }
  };
  Encoder2.generateCheckWords = function(bitArray, totalBits, wordSize) {
    var e_1, _a;
    var messageSizeInWords = bitArray.getSize() / wordSize;
    var rs = new ReedSolomonEncoder(Encoder2.getGF(wordSize));
    var totalWords = Integer.truncDivision(totalBits, wordSize);
    var messageWords = Encoder2.bitsToWords(bitArray, wordSize, totalWords);
    rs.encode(messageWords, totalWords - messageSizeInWords);
    var startPad = totalBits % wordSize;
    var messageBits = new BitArray();
    messageBits.appendBits(0, startPad);
    try {
      for (var _b = __values$G(Array.from(messageWords)), _c = _b.next(); !_c.done; _c = _b.next()) {
        var messageWord = _c.value;
        messageBits.appendBits(messageWord, wordSize);
      }
    } catch (e_1_1) {
      e_1 = {error: e_1_1};
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return))
          _a.call(_b);
      } finally {
        if (e_1)
          throw e_1.error;
      }
    }
    return messageBits;
  };
  Encoder2.bitsToWords = function(stuffedBits, wordSize, totalWords) {
    var message = new Int32Array(totalWords);
    var i;
    var n;
    for (i = 0, n = stuffedBits.getSize() / wordSize; i < n; i++) {
      var value = 0;
      for (var j = 0; j < wordSize; j++) {
        value |= stuffedBits.get(i * wordSize + j) ? 1 << wordSize - j - 1 : 0;
      }
      message[i] = value;
    }
    return message;
  };
  Encoder2.getGF = function(wordSize) {
    switch (wordSize) {
      case 4:
        return GenericGF.AZTEC_PARAM;
      case 6:
        return GenericGF.AZTEC_DATA_6;
      case 8:
        return GenericGF.AZTEC_DATA_8;
      case 10:
        return GenericGF.AZTEC_DATA_10;
      case 12:
        return GenericGF.AZTEC_DATA_12;
      default:
        throw new IllegalArgumentException("Unsupported word size " + wordSize);
    }
  };
  Encoder2.stuffBits = function(bits, wordSize) {
    var out = new BitArray();
    var n = bits.getSize();
    var mask = (1 << wordSize) - 2;
    for (var i = 0; i < n; i += wordSize) {
      var word = 0;
      for (var j = 0; j < wordSize; j++) {
        if (i + j >= n || bits.get(i + j)) {
          word |= 1 << wordSize - 1 - j;
        }
      }
      if ((word & mask) === mask) {
        out.appendBits(word & mask, wordSize);
        i--;
      } else if ((word & mask) === 0) {
        out.appendBits(word | 1, wordSize);
        i--;
      } else {
        out.appendBits(word, wordSize);
      }
    }
    return out;
  };
  Encoder2.totalBitsInLayer = function(layers, compact) {
    return ((compact ? 88 : 112) + 16 * layers) * layers;
  };
  Encoder2.DEFAULT_EC_PERCENT = 33;
  Encoder2.DEFAULT_AZTEC_LAYERS = 0;
  Encoder2.MAX_NB_BITS = 32;
  Encoder2.MAX_NB_BITS_COMPACT = 4;
  Encoder2.WORD_SIZE = Int32Array.from([
    4,
    6,
    6,
    8,
    8,
    8,
    8,
    8,
    8,
    10,
    10,
    10,
    10,
    10,
    10,
    10,
    10,
    10,
    10,
    10,
    10,
    10,
    10,
    12,
    12,
    12,
    12,
    12,
    12,
    12,
    12,
    12,
    12
  ]);
  return Encoder2;
}();
var AztecWriter = function() {
  function AztecWriter2() {
  }
  AztecWriter2.prototype.encode = function(contents, format, width, height) {
    return this.encodeWithHints(contents, format, width, height, null);
  };
  AztecWriter2.prototype.encodeWithHints = function(contents, format, width, height, hints) {
    var charset = StandardCharsets.ISO_8859_1;
    var eccPercent = Encoder$1.DEFAULT_EC_PERCENT;
    var layers = Encoder$1.DEFAULT_AZTEC_LAYERS;
    if (hints != null) {
      if (hints.has(EncodeHintType$1.CHARACTER_SET)) {
        charset = Charset.forName(hints.get(EncodeHintType$1.CHARACTER_SET).toString());
      }
      if (hints.has(EncodeHintType$1.ERROR_CORRECTION)) {
        eccPercent = Integer.parseInt(hints.get(EncodeHintType$1.ERROR_CORRECTION).toString());
      }
      if (hints.has(EncodeHintType$1.AZTEC_LAYERS)) {
        layers = Integer.parseInt(hints.get(EncodeHintType$1.AZTEC_LAYERS).toString());
      }
    }
    return AztecWriter2.encodeLayers(contents, format, width, height, charset, eccPercent, layers);
  };
  AztecWriter2.encodeLayers = function(contents, format, width, height, charset, eccPercent, layers) {
    if (format !== BarcodeFormat$1.AZTEC) {
      throw new IllegalArgumentException("Can only encode AZTEC, but got " + format);
    }
    var aztec = Encoder$1.encode(StringUtils.getBytes(contents, charset), eccPercent, layers);
    return AztecWriter2.renderResult(aztec, width, height);
  };
  AztecWriter2.renderResult = function(code, width, height) {
    var input = code.getMatrix();
    if (input == null) {
      throw new IllegalStateException();
    }
    var inputWidth = input.getWidth();
    var inputHeight = input.getHeight();
    var outputWidth = Math.max(width, inputWidth);
    var outputHeight = Math.max(height, inputHeight);
    var multiple = Math.min(outputWidth / inputWidth, outputHeight / inputHeight);
    var leftPadding = (outputWidth - inputWidth * multiple) / 2;
    var topPadding = (outputHeight - inputHeight * multiple) / 2;
    var output = new BitMatrix(outputWidth, outputHeight);
    for (var inputY = 0, outputY = topPadding; inputY < inputHeight; inputY++, outputY += multiple) {
      for (var inputX = 0, outputX = leftPadding; inputX < inputWidth; inputX++, outputX += multiple) {
        if (input.get(inputX, inputY)) {
          output.setRegion(outputX, outputY, multiple, multiple);
        }
      }
    }
    return output;
  };
  return AztecWriter2;
}();
export {AbstractExpandedDecoder, ArgumentException, ArithmeticException, AztecCode, AztecReader as AztecCodeReader, AztecWriter as AztecCodeWriter, Decoder as AztecDecoder, Detector as AztecDetector, AztecDetectorResult, Encoder$1 as AztecEncoder, HighLevelEncoder as AztecHighLevelEncoder, Point as AztecPoint, BarcodeFormat$1 as BarcodeFormat, Binarizer, BinaryBitmap, BitArray, BitMatrix, BitSource, BrowserAztecCodeReader, BrowserBarcodeReader, BrowserCodeReader, BrowserDatamatrixCodeReader, BrowserMultiFormatReader, BrowserPDF417Reader, BrowserQRCodeReader, BrowserQRCodeSvgWriter, CharacterSetECI, ChecksumException, Code128Reader, Code39Reader, DecodedBitStreamParser as DataMatrixDecodedBitStreamParser, DataMatrixReader, DecodeHintType$1 as DecodeHintType, DecoderResult, DefaultGridSampler, DetectorResult, EAN13Reader, EncodeHintType$1 as EncodeHintType, Exception, FormatException, GenericGF, GenericGFPoly, GlobalHistogramBinarizer, GridSampler, GridSamplerInstance, HTMLCanvasElementLuminanceSource, HybridBinarizer, ITFReader, IllegalArgumentException, IllegalStateException, InvertedLuminanceSource, LuminanceSource, MathUtils, MultiFormatOneDReader, MultiFormatReader, MultiFormatWriter, NotFoundException, OneDReader, DecodedBitStreamParser$2 as PDF417DecodedBitStreamParser, ErrorCorrection as PDF417DecoderErrorCorrection, PDF417Reader, PDF417ResultMetadata, PerspectiveTransform, PlanarYUVLuminanceSource, ByteMatrix as QRCodeByteMatrix, DataMask as QRCodeDataMask, DecodedBitStreamParser$1 as QRCodeDecodedBitStreamParser, ErrorCorrectionLevel as QRCodeDecoderErrorCorrectionLevel, FormatInformation as QRCodeDecoderFormatInformation, Encoder as QRCodeEncoder, QRCode as QRCodeEncoderQRCode, MaskUtil as QRCodeMaskUtil, MatrixUtil as QRCodeMatrixUtil, Mode$1 as QRCodeMode, QRCodeReader, Version$1 as QRCodeVersion, QRCodeWriter, RGBLuminanceSource, RSS14Reader, RSSExpandedReader, ReaderException, ReedSolomonDecoder, ReedSolomonEncoder, ReedSolomonException, Result, ResultMetadataType$1 as ResultMetadataType, ResultPoint, StringUtils, UnsupportedOperationException, VideoInputDevice, WhiteRectangleDetector, WriterException, Arrays as ZXingArrays, Charset as ZXingCharset, Integer as ZXingInteger, StandardCharsets as ZXingStandardCharsets, StringBuilder as ZXingStringBuilder, StringEncoding as ZXingStringEncoding, System as ZXingSystem, createDecoder as createAbstractExpandedDecoder};
