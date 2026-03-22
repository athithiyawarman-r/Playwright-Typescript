//string Enum
var urlConst;
(function (urlConst) {
    urlConst["qa"] = "www.qa.com";
    urlConst["dev"] = "www.dev.com";
    urlConst["prod"] = "www.prod.com";
})(urlConst || (urlConst = {}));
function logTestResults(url) {
    console.log(url);
}
logTestResults(urlConst.qa);
logTestResults(urlConst.prod);
logTestResults(urlConst.dev);
//numeric Enum
var statuses;
(function (statuses) {
    statuses[statuses["pass"] = 0] = "pass";
    statuses[statuses["fail"] = 1] = "fail";
    statuses[statuses["unchecked"] = 2] = "unchecked";
})(statuses || (statuses = {}));
function resposeResult(statusesss) {
    console.log(statuses.pass);
    console.log(statuses.fail);
    console.log(statuses.unchecked);
}
//heterogeneous Enum
var BrowserStatus;
(function (BrowserStatus) {
    BrowserStatus[BrowserStatus["Close"] = 0] = "Close";
    BrowserStatus["Incognito"] = "Incognito Mode";
    BrowserStatus[BrowserStatus["crash"] = 10] = "crash";
    BrowserStatus[BrowserStatus["loading"] = 11] = "loading";
})(BrowserStatus || (BrowserStatus = {}));
function reportBrowserStatus(status) {
    console.log("Current status of browser ".concat(status));
}
