import Dexie from "./_snowpack/pkg/dexie.js";
import {log} from "./log.js";
export const db = new Dexie("SafeIslandNew");
db.version(0.5).stores({
  credentials: "hash, timestamp, type",
  settings: "key",
  logs: "++id, timestamp"
});
async function settingsPut(key, value) {
  try {
    await db.settings.put({key, value});
  } catch (error) {
    console.error(error);
    alert("Error in put setting");
  }
}
async function settingsGet(key) {
  try {
    var setting = await db.settings.get(key);
  } catch (error) {
    console.error(error);
    alert("Error in get setting");
  }
  if (setting == void 0) {
    return void 0;
  }
  return setting.value;
}
async function settingsDelete(key) {
  try {
    await db.settings.delete(key);
  } catch (error) {
    console.error(error);
    alert("Error deleting setting");
  }
}
async function settingsDeleteAll() {
  try {
    await db.settings.clear();
  } catch (error) {
    console.error(error);
    alert("Error deleting all settings");
  }
}
async function credentialsSave(_credential) {
  var data = new TextEncoder().encode(_credential.encoded);
  var hash = await crypto.subtle.digest("SHA-256", data);
  var hashArray = Array.from(new Uint8Array(hash));
  var hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
  var credential = {
    hash: hashHex,
    timestamp: Date.now(),
    type: _credential.type,
    encoded: _credential.encoded,
    decoded: _credential.decoded
  };
  var oldCred = await credentialsGet(hashHex);
  if (oldCred != void 0) {
    log.mywarn("Credential already exists", oldCred, hashHex);
    return credential;
  }
  try {
    await db.credentials.add(credential);
  } catch (error) {
    log.myerror("Error saving credential", error);
    throw error;
  }
  return credential;
}
async function credentialsDeleteCred(_credential) {
  var data = new TextEncoder().encode(_credential.encoded);
  var hash = await crypto.subtle.digest("SHA-256", data);
  var hashArray = Array.from(new Uint8Array(hash));
  var hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
  try {
    await db.credentials.delete(hashHex);
  } catch (error) {
    log.myerror(error);
    alert("Error deleting credential");
  }
}
async function credentialsDelete(key) {
  try {
    await db.credentials.delete(key);
  } catch (error) {
    console.error(error);
    alert("Error deleting credential");
  }
}
async function credentialsDeleteAll() {
  try {
    await db.credentials.clear();
  } catch (error) {
    console.error(error);
    alert("Error deleting all credentials");
  }
}
async function credentialsGet(key) {
  try {
    var credential = await db.credentials.get(key);
  } catch (error) {
    console.error(error);
    alert("Error getting credential");
  }
  console.log("CredentialGet: ", credential);
  return credential;
}
async function credentialsGetAllRecent(days) {
  if (days == void 0) {
    days = 7;
  }
  const oneWeekAgo = new Date(Date.now() - 60 * 60 * 1e3 * 24 * days);
  try {
    var credentials = await db.credentials.where("timestamp").aboveOrEqual(oneWeekAgo).toArray();
  } catch (error) {
    console.error(error);
    alert("Error getting recent credentials");
  }
  return credentials;
}
async function credentialsGetAllKeys() {
  try {
    var keys = await db.credentials.orderBy("timestamp").primaryKeys();
  } catch (error) {
    console.error(error);
    alert("Error getting all credentials");
  }
  return keys;
}
async function resetDatabase() {
  await db.delete();
  alert("Database erased");
  location.reload();
}
export {
  settingsPut,
  settingsGet,
  settingsDelete,
  settingsDeleteAll,
  credentialsSave,
  credentialsDeleteCred,
  credentialsDelete,
  credentialsDeleteAll,
  credentialsGet,
  credentialsGetAllRecent,
  credentialsGetAllKeys,
  resetDatabase
};
export var storage = {
  settingsPut,
  settingsGet,
  settingsDelete,
  settingsDeleteAll,
  credentialsSave,
  credentialsDeleteCred,
  credentialsDelete,
  credentialsDeleteAll,
  credentialsGet,
  credentialsGetAllRecent,
  credentialsGetAllKeys,
  resetDatabase
};
