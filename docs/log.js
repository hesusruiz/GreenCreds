import {db} from "./db.js";
const LOG_ALL = true;
const MAX_LOG_ENTRIES = 1e3;
class Warning extends Error {
  constructor(...params) {
    super(...params);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, Warning);
    }
    this.name = "Warning";
  }
}
async function mylog_entry(_level, _desc, ...additional) {
  var logItem = {
    timestamp: Date.now(),
    level: _level,
    desc: _desc
  };
  if (additional.length > 0) {
    logItem["more"] = additional;
  }
  try {
    await db.logs.add(logItem);
  } catch (error) {
    console.error("Error in log add");
  }
  var numEntries = await db.logs.count();
  if (numEntries <= MAX_LOG_ENTRIES) {
    return;
  }
  var oldestEntry = await db.logs.orderBy("id").first();
  try {
    await db.logs.delete(oldestEntry.id);
  } catch (error) {
    console.error("Error in log prune");
  }
}
export async function mywarn(_desc, ...additional) {
  if (LOG_ALL) {
    let msg = _desc;
    try {
      let e = new Warning(_desc);
      msg = e.stack;
    } catch {
    }
    console.warn(_desc, ...additional);
    mylog_entry("W", msg, ...additional);
  }
}
export async function myerror(_desc, ...additional) {
  let msg = _desc;
  try {
    let e = new Error(_desc);
    msg = e.stack;
  } catch {
  }
  console.error(msg, ...additional);
  mylog_entry("E", msg, ...additional);
}
export async function recentLogs() {
  var rlogs = await db.logs.reverse().limit(200).toArray();
  return rlogs;
}
export async function clearLogs() {
  await db.logs.clear();
  alert("Logs cleared");
  location.reload();
}
export var log = {
  mywarn,
  myerror,
  recentLogs,
  clearLogs
};
