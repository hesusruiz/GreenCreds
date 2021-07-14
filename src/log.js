// **************************************************
// Logging and error management
// **************************************************

import { db } from "./db";

// Logging level (if false, only log Errors)
const LOG_ALL = true

// Basic persistent rotating log on top of IndexedDB
const MAX_LOG_ENTRIES = 1000

class Warning extends Error {
    constructor(...params) {
      // Pass remaining arguments (including vendor specific ones) to parent constructor
      super(...params)
  
      // Maintains proper stack trace for where our error was thrown (only available on V8)
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, Warning)
      }
  
      this.name = 'Warning'
    }
  }

async function mylog_entry(_level, _desc, ...additional) {

    // additional args should be compatible with Dexie (most objects are)
    
    // Create the object to store
    var logItem = {
        timestamp: Date.now(),
        level: _level,
        desc: _desc,
    }
    if (additional.length > 0) {
        logItem["more"] = additional
    }

    // Store the object
    try {
        await db.logs.add(logItem)
    } catch (error) {
        // If error, we can not do anything
        console.error("Error in log add")
    }

    // Check if we should prune old records
    var numEntries = await db.logs.count()
    if (numEntries <= MAX_LOG_ENTRIES) {
        return
    }

    // Perform pruning of the oldest entry
    var oldestEntry = await db.logs.orderBy("id").first()
    try {
        await db.logs.delete(oldestEntry.id)
    } catch (error) {
        console.error("Error in log prune")
    }

}

export async function mywarn(_desc, ...additional) {
    if (LOG_ALL) {
        let msg = _desc
        // Get the stack trace if available
        try {
            let e = new Warning(_desc)
            msg = e.stack
        } catch {}
        console.warn(_desc, ...additional)
        mylog_entry("W", msg, ...additional)
    }
}

export async function myerror(_desc, ...additional) {
    let msg = _desc
    // Get the stack trace if available
    try {
        let e = new Error(_desc)
        msg = e.stack
    } catch {}

    console.error(msg, ...additional)
    mylog_entry("E", msg, ...additional)
}

export async function recentLogs() {
    var rlogs = await db.logs.reverse().limit(200).toArray()
    return rlogs
}

// Clears the logs table, preserving the other tables
export async function clearLogs() {
    await db.logs.clear()
    alert("Logs cleared")
    // Reload application in the same page
    location.reload()
}

export var log = {
    mywarn: mywarn,
    myerror: myerror,
    recentLogs: recentLogs,
    clearLogs: clearLogs,
};

