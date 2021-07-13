import {
    myerror
} from "./db";

import { w3 } from './w3'

// This is the array of pages in the application
// Each page should register a handler to execute pageEnter transitions
// registration is done at each page definition
export var pages = new Map();

// Get the pathname used to invoke the app, eg.: /admin.html
var mypathname = window.location.pathname;

// Get the search parameters, eg.: ?page=admin
var paramsString = window.location.search;
var searchParams = new URLSearchParams(paramsString);

// The default home page is the Passenger credential list (the wallet)
// TODO: change to credentialListPage after testing fully
export var homePage = "#demo";

// Check for query string specifying the initial page
if (searchParams.get("home") !== null) {
    // ?verifier
    homePage = "#passenger";
} else if (searchParams.get("verifier") !== null) {
    // ?verifier
    homePage = "#verifierScanQR";
} else if (searchParams.get("demo") !== null) {
    // ?demo
    homePage = "#demo";
} else if (searchParams.get("admin") !== null) {
    // ?admin
    homePage = "#admin";
} else if (searchParams.get("pubcred") !== null) {
    // ?pubcred
    homePage = "#pubcreds";
}


// The global variable holding the media stream for the video camera
export var globalStream = undefined;

// This is used to stop the media tracks in a global variable,
// to ensure that the camera is never activated if the active page does not use it
export function stopAllMediaTracks() {
    // Check if the gloval variable has a stream
    if (globalStream) {
        // Stop the media stream

        let tracks = globalStream.getTracks();
        tracks[0].stop();
        // for (let i = 0; i < tracks.length; i++) {
        //     tracks[i].stop()
        // }
        globalStream = undefined;
    }
    return;
}

// Listen for PopStateEvent (Back or Forward buttons are clicked)
window.addEventListener("popstate", async function (event) {
    // Set defaults
    var pageName = homePage;
    var pageData = undefined;

    // Get current state data if not null
    var state = event.state;
    if (state != null) {
        pageName = state.pageName;
        pageData = state.pageData;
    }
    console.log("Popstate: ", pageName);

    // Process the page transition
    await processPageEntered(pageName, pageData);
});

// Handle page transition
export async function processPageEntered(pageName, pageData) {
    // Hide all pages of the application. Later we unhide the one we are entering
    for (let [name, pageElement] of pages) {
        pageElement.style.display = "none"
    }
    w3.hide("#loaderpage")

    // Stop any active stream
    stopAllMediaTracks();

    // If the hash is not a registered page, go to the home page
    if (pages.get(pageName) === undefined) {
        pageName = homePage;
    }

    // Make sure the page is at the top
    window.scrollTo(0, 0);

    // Show the page before invoking the page enter event
    // w3.show(pageName);
    pages.get(pageName).style.display = "block"

    // Invoke the registered function when page has entered
    // This will allow the page to create dynamic content
    await pages.get(pageName).enter(pageData);
}

export async function goHome() {
    await gotoPage(homePage);
}

export async function gotoPage(pageName, pageData) {
    // If the hash is not a registered page, go to the home page
    if (pages.get(pageName) === undefined) {
        myerror("Target page does not exist: ", pageName);
        return;
    }

    // Create a new history state
    window.history.pushState(
        { pageName: pageName, pageData: pageData },
        `${pageName}`
    );

    // Process the page transition
    await processPageEntered(pageName, pageData);
}


