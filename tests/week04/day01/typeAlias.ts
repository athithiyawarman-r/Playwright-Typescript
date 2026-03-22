type inputType = string | number | boolean

let username : string = `Athithiyawarman` 

let userName : inputType = true // using alias name for dataType


//++++++++++++++++++++++++++++++++++++++++++++++++++

type Admin = {
adminName: string,
privileges: [string]
}

type Employee = {
name: string,
empId:number,
date: string
}

type QA = Admin & Employee

const QAProfile: QA ={
adminName: "Testleaf",
privileges:["sever"],
empId:157463,
name:"Athithiyawarman",
date:"21/03/2026"
}

console.log(QAProfile)

//++++++++++++++++++++++++++++++++++++++++++++++++++

type supportedBrowser ="Chrome" | "firefox" | "edge"
function invokeBrowser (browserName: supportedBrowser) {

if (browserName==="Chrome") {
console.log("Launch Chrome Browser");
}else{
console.log("Stop Execution");
}
}

invokeBrowser("Chrome")
