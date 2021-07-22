import { log } from "./log";

// This is the array of pages in the application
// Each page should register a handler to execute pageEnter transitions
// registration is done at each page definition
var pages = new Map();

export function route(pageName, classInstance) {
    console.log("ROUTER: register page:", pageName)
    pages.set(pageName, classInstance)
}

var homePage
export function setHomePage(page) {
    homePage = page
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
    try {
        // Hide all pages of the application. Later we unhide the one we are entering
        // We also tell all other pages to exit, so they can perform any cleanup
        for (let [name, classInstance] of pages) {
            classInstance.domElem.style.display = "none"
            // Call the page exit(), so it can perform any cleanup 
            if ((name !== pageName) && classInstance.exit) {
                await classInstance.exit()
            }
        }
    } catch (error) {
        log.myerror("Trying to call exit", error);
        return;
    }

    let targetPage = pages.get(pageName)  

    // If the target page is not a registered page, go to the page404 page
    if (targetPage === undefined) {
        pageName = "page404"
    }

    // Reset scroll position to make sure the page is at the top
    window.scrollTo(0, 0);

    try {
        // Invoke the registered function when page has entered
        // This will allow the page to create dynamic content
        if (targetPage.enter) {
            await targetPage.enter(pageData);
        } else {
            // Make sure the target page is visible even if no enter() defined
            targetPage.style.display = "block"
        }

    } catch (error) {
        log.myerror("Calling enter()", error);
        return;
    }

}

export async function goHome() {
    await gotoPage(homePage);
}

export async function gotoPage(pageName, pageData) {
    if (!pageData) {
        pageData = {}
    }

    // If the hash is not a registered page, go to the 404 error page
    if (pages.get(pageName) === undefined) {
        log.myerror("Target page does not exist: ", pageName);
        pageName = "page404"
    }

    // Create a new history state
    window.history.pushState(
        { pageName: pageName, pageData: pageData },
        `${pageName}`
    );

    // Process the page transition
    await processPageEntered(pageName, pageData);
}
