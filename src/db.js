// **************************************************
// Local database management
// **************************************************

import Dexie from 'dexie';

// Logging level (if false, only log Errors)
const LOG_ALL = true


// We use a library on top of IndexedDB
// There are two application stores and one logging store:
//    "credentials" for storing the credentials
//    "settings" for miscellaneous things
//    "logs" for persistent logging of important events for diagnostic

export const db = new Dexie('SafeIslandNew');
db.version(0.5).stores({
    credentials: 'hash, timestamp, type',
    settings: 'key',
    logs: '++id, timestamp'
});

// Basic persistent rotating log on top of IndexedDB
const MAX_LOG_ENTRIES = 1000

async function mylog_entry(_level, _desc, _item) {

    // _item should be compatible with Dexie (most objects are)
    
    // Create the object to store
    var logItem = {
        timestamp: Date.now(),
        level: _level,
        desc: _desc,
        item: _item
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

async function mylog(_desc) {
    if (LOG_ALL) {
        var args = Array.prototype.slice.call(arguments, 1);
        console.log(_desc, args)
        mylog_entry("N", _desc, args)
    }
}

async function myerror(_desc) {
    var args = Array.prototype.slice.call(arguments, 1);
    console.error(_desc, args)
    mylog_entry("E", _desc, args)
}


// The following are simple wrappers to insulate from future changes in the db
async function settingsPut(key, value) {
    try {
        await db.settings.put({ key: key, value: value })
    } catch (error) {
        console.error(error);
        alert("Error in put setting")
    }
}

async function settingsGet(key) {
    try {
        var setting = await db.settings.get(key)
    } catch (error) {
        console.error(error);
        alert("Error in get setting")
    }
    if (setting == undefined) {
        return undefined;
    }
    return setting.value;
}

async function settingsDelete(key) {
    try {
        await db.settings.delete(key)
    } catch (error) {
        console.error(error);
        alert("Error deleting setting")
    }
}

async function settingsDeleteAll() {
    try {
        await db.settings.clear()
    } catch (error) {
        console.error(error);
        alert("Error deleting all settings")
    }

}


async function showError(_text) {
    myerror(_text)
    document.querySelector("#errorDisplayText").innerHTML = `${_text}`
    $('#errorDisplayModal').modal("show")
    return;
}


async function dismissError() {
    $('#errorDisplayModal').modal("hide")

    gotoPage(homePage)
}

async function credentialsSave(_credential) {

    // The _credential object has the following structure:
    // _credential = {
    //     type: the type of credential: "w3cvc", "eHealth", "ukimmigration", etc
    //     encoded: the credential encoded in JWT, COSE or any other suitable format
    //     decoded: the credential in plain format as a Javascript object
    // }

    mylog("CredentialSave", _credential)

    // Calculate the hash of the encoded credential to avoid duplicates
    var data = new TextEncoder().encode(_credential.encoded);
    var hash = await crypto.subtle.digest('SHA-256', data)
    var hashArray = Array.from(new Uint8Array(hash));   // convert buffer to byte array
    var hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

    // Create the object to store
    var credential = {
        hash: hashHex,
        timestamp: Date.now(),
        type: _credential.type,
        encoded: _credential.encoded,
        decoded: _credential.decoded
    }

    // Check if the credential is already in the database
    var oldCred = await credentialsGet(hashHex)
    if (oldCred != undefined) {
        myerror("Credential already exists", oldCred, hashHex)
        showError("Can not save credential: already exists")

        // Return an error
        return undefined;
    }

    // Store the object, catching the exception if duplicated
    try {
        await db.credentials.add(credential)
    } catch (error) {
        myerror("Error saving credential", error)
        return undefined;
    }

    return credential;

}


async function credentialsDeleteCred(_credential) {

    // The _credential object has the following structure:
    // _credential = {
    //     type: the type of credential: "w3cvc", "eHealth", "ukimmigration", etc
    //     encoded: the credential encoded in JWT, COSE or any other suitable format
    //     decoded: the credential in plain format as a Javascript object
    // }

    mylog("credentialsDeleteCred", _credential)

    // Calculate the hash of the encoded credential, which will be the key
    var data = new TextEncoder().encode(_credential.encoded);
    var hash = await crypto.subtle.digest('SHA-256', data)
    var hashArray = Array.from(new Uint8Array(hash));   // convert buffer to byte array
    var hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

    // Delete the credential
    try {
        await db.credentials.delete(hashHex)
    } catch (error) {
        myerror(error);
        alert("Error deleting credential")
    }
}


async function credentialsDelete(key) {
    try {
        await db.credentials.delete(key)
    } catch (error) {
        console.error(error);
        alert("Error deleting credential")
    }
}

async function credentialsDeleteAll() {
    try {
        await db.credentials.clear()
    } catch (error) {
        console.error(error);
        alert("Error deleting all credentials")
    }
}

async function credentialsGet(key) {
    try {
        var credential = await db.credentials.get(key)
    } catch (error) {
        console.error(error);
        alert("Error getting credential")
    }

    console.log("CredentialGet: ", credential)
    return credential;

}

// Retrieve all credentials since some period
async function credentialsGetAllRecent(days) {
    if (days == undefined) {
        days = 7
    }
    const oneWeekAgo = new Date(Date.now() - 60 * 60 * 1000 * 24 * days);

    try {
        var credentials = await db.credentials
            .where('timestamp').aboveOrEqual(oneWeekAgo).toArray();
    } catch (error) {
        console.error(error);
        alert("Error getting recent credentials")
    }

    return credentials;
}

// Get all the keys to iterate all credentials in the store
async function credentialsGetAllKeys() {
    try {
        var keys = await db.credentials.orderBy("timestamp").primaryKeys();
    } catch (error) {
        console.error(error);
        alert("Error getting all credentials")
    }

    return keys;

}


async function recentLogs() {
    var rlogs = await db.logs.reverse().limit(200).toArray()
    return rlogs
}

// Clears the logs table, preserving the other tables
async function clearLogs() {
    await db.logs.clear()
    alert("Logs cleared")
    // Reload application in the same page
    location.reload()
}

// Erases completely the database including credentials.
async function resetDatabase() {
    // Delete database, erasing all tables and their contents
    await db.delete()
    alert("Database erased")

    // Reload application in the same page
    location.reload()
}


// **************************************************
// End of Local database management
// **************************************************

export {
    mylog, myerror,
    settingsPut, settingsGet, settingsDelete, settingsDeleteAll, 
    credentialsSave, credentialsDeleteCred, credentialsDelete, credentialsDeleteAll,
    credentialsGet, credentialsGetAllRecent, credentialsGetAllKeys,
    recentLogs, clearLogs, resetDatabase
};

export var storage = {
    mylog: mylog,
    myerror: myerror,
    settingsPut: settingsPut,
    settingsGet: settingsGet,
    settingsDelete: settingsDelete,
    settingsDeleteAll: settingsDeleteAll,
    credentialsSave: credentialsSave,
    credentialsDeleteCred: credentialsDeleteCred,
    credentialsDelete: credentialsDelete,
    credentialsDeleteAll: credentialsDeleteAll,
    credentialsGet: credentialsGet,
    credentialsGetAllRecent: credentialsGetAllRecent,
    credentialsGetAllKeys: credentialsGetAllKeys,
    recentLogs: recentLogs,
    clearLogs: clearLogs,
    resetDatabase: resetDatabase
};

