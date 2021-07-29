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
  return;
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
  return void 0;
}
export async function clearLogs() {
  return;
}
export var log = {
  mywarn,
  myerror,
  recentLogs,
  clearLogs
};
