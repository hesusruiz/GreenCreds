import {settingsPut, settingsGet} from "./db.js";
import {log} from "./log.js";
import {setHomePage, goHome, route} from "./router.js";
import {HeaderBar} from "./components/header.js";
import {DisplayHcert} from "./pages/hcertpage.js";
import {DemoPage} from "./pages/demo.js";
import {Page404} from "./pages/page404.js";
import {ScanQrPage} from "./pages/scanqr.js";
var homePage = "demo";
var pageDefs = [
  {
    name: "displayhcert",
    className: DisplayHcert
  },
  {
    name: "demo",
    className: DemoPage
  },
  {
    name: "verifier",
    className: ScanQrPage
  },
  {
    name: "page404",
    className: Page404
  }
];
document.body.innerHTML = "";
HeaderBar();
for (let i = 0; i < pageDefs.length; i++) {
  let name = pageDefs[i].name;
  let className = pageDefs[i].className;
  let classInstance = new className(name);
  document.body.append(classInstance.domElem);
  route(name, classInstance);
}
var mypathname = window.location.pathname;
if (window.location.search.length > 0) {
  let searchParams = new URLSearchParams(window.location.search);
  if (searchParams.get("home") !== null) {
    homePage = "passenger";
  } else if (searchParams.get("verifier") !== null) {
    homePage = "verifier";
  } else if (searchParams.get("demo") !== null) {
    homePage = "demo";
  } else if (searchParams.get("admin") !== null) {
    homePage = "admin";
  } else if (searchParams.get("pubcred") !== null) {
    homePage = "pubcreds";
  } else {
    log.mywarn("URL parameter not recognised", window.location.search);
  }
}
console.log("Home_page:", homePage);
setHomePage(homePage);
const PRODUCTION = false;
const MY_SERVER = "https://safeislandtest.hesusruiz.org";
const MYSELF = "https://www.lanzarotesafe.org";
const UNIVERSAL_RESOLVER = MY_SERVER + "/api/did/v1/identifiers/";
const VERIFY_CREDENTIAL = MY_SERVER + "/api/verifiable-credential/v1/verifiable-credential-validations";
const FAKE_ISSUER_GET_CREDENTIALS = MY_SERVER + "/api/verifiable-credential/v1/credentials";
const FAKE_ISSUER_GET_PUBLIC_CREDENTIALS = MY_SERVER + "/api/verifiable-credential/v1/public/credentials";
const ISSUER_GET_CREDENTIAL = "https://api.lanzarotesafe.org/sms/";
const ISSUER_GET_PUBLIC_CREDENTIAL = MY_SERVER + "/api/verifiable-credential/v1/public/";
const ST_PASSENGER_SCAN = "fromPassengerScan";
const ST_VERIFIER_SCAN = "fromVerifierScan";
const ST_NORMAL = "normal";
const INSTALL_SERVICE_WORKER = false;
window.addEventListener("load", async (event) => {
  await performOneTimeInitialization();
  if (INSTALL_SERVICE_WORKER && "serviceWorker" in navigator) {
    const wb = new Workbox("/sw.js");
    wb.addEventListener("message", (event2) => {
      if (event2.data.type === "CACHE_UPDATED") {
        const {updatedURL} = event2.data.payload;
        console.log(`A newer version of ${updatedURL} is available!`);
      }
    });
    wb.addEventListener("activated", async (event2) => {
      if (event2.isUpdate) {
        console.log("Service worker has been updated.");
        await performAppUpgrade();
      } else {
        console.log("Service worker has been installed for the first time.");
        await performAppUpgrade();
      }
    });
    wb.addEventListener("waiting", (event2) => {
      console.log(`A new service worker has installed, but it can't activateuntil all tabs running the current version have fully unloaded.`);
    });
    wb.register();
  }
  let paramsString = window.location.search;
  let searchParams = new URLSearchParams(paramsString);
  let credId = searchParams.get("id");
  if (credId) {
    var targetURLRead = ISSUER_GET_CREDENTIAL + credId;
    await requestQRAndDisplay(targetURLRead, "displayCredentialPage", ST_PASSENGER_SCAN);
    return;
  }
  credId = searchParams.get("pubid");
  if (credId) {
    var targetURLRead = ISSUER_GET_PUBLIC_CREDENTIAL + credId;
    console.log("Public Credential", targetURLRead);
    await requestQRAndDisplay(targetURLRead, "displayCredentialPage", ST_PASSENGER_SCAN);
    return;
  }
  await goHome();
});
async function performAppUpgrade() {
  console.log("Performing Upgrade");
  try {
    var newVersion = await $.get("/VERSION.txt");
    if (newVersion) {
      await settingsPut("VERSION", newVersion);
    }
  } catch (error) {
    console.log("ERROR updating version", error);
  }
  window.location.reload();
}
async function performOneTimeInitialization() {
  console.log("Performing OneTime Initialization");
  var alreadyInitialized = await settingsGet("initialized");
  if (alreadyInitialized != true) {
    try {
      await settingsPut("apiHost", MY_SERVER);
    } catch (error) {
      log.myerror("Onetime initialization error");
    }
    await settingsPut("initialized", true);
  }
}
