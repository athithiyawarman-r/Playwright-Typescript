
//string Enum
enum urlConst {
qa = "www.qa.com",
dev = "www.dev.com",
prod = "www.prod.com"
}

function logTestResults(url:urlConst){

console.log(url);

}

logTestResults(urlConst.qa)
logTestResults(urlConst.prod)
logTestResults(urlConst.dev)


//numeric Enum
enum statuses {
    pass,
    fail,
    unchecked


}

function resposeResult(statusesss:statuses){
console.log(statuses.pass);
console.log(statuses.fail);
console.log(statuses.unchecked);
}


//heterogeneous Enum
enum BrowserStatus {
Close,
Incognito="Incognito Mode",
crash=10,
loading
}
function reportBrowserStatus (status: BrowserStatus){
console.log(`Current status of browser ${status}`);
}