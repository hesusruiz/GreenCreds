import {log} from "./log.js";
var pages = new Map();
export function route(pageName, classInstance) {
  console.log("ROUTER: register page:", pageName);
  pages.set(pageName, classInstance);
}
var homePage;
export function setHomePage(page) {
  homePage = page;
}
window.addEventListener("popstate", async function(event) {
  var pageName = homePage;
  var pageData = void 0;
  var state = event.state;
  if (state != null) {
    pageName = state.pageName;
    pageData = state.pageData;
  }
  console.log("Popstate: ", pageName);
  await processPageEntered(pageName, pageData);
});
export async function processPageEntered(pageName, pageData) {
  try {
    for (let [name, classInstance] of pages) {
      classInstance.domElem.style.display = "none";
      if (name !== pageName && classInstance.exit) {
        await classInstance.exit();
      }
    }
  } catch (error) {
    log.myerror("Trying to call exit", error);
    return;
  }
  let targetPage = pages.get(pageName);
  if (targetPage === void 0) {
    pageName = "page404";
  }
  window.scrollTo(0, 0);
  try {
    if (targetPage.enter) {
      await targetPage.enter(pageData);
    } else {
      targetPage.style.display = "block";
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
    pageData = {};
  }
  if (pages.get(pageName) === void 0) {
    log.myerror("Target page does not exist: ", pageName);
    pageName = "page404";
  }
  window.history.pushState({pageName, pageData}, `${pageName}`);
  await processPageEntered(pageName, pageData);
}
