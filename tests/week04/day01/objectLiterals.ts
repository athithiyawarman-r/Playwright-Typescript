
//Implicit Inference
let empinfo = {


infoRavindran:{ // object
firstName: "Athithiyawarman", // key value structure
lastName: "R",
email: "athi@testleaf.com",
mob: 8838171459
},
infoHari: { 
    // object
firstName: "Ravindran", // key value structure
lastName: "R",
email: "ravi@testleaf.com",
mob: 8484848484
}
}


//Explicit Inference
let Officeinfo:{
    firstName:string,
    lastName:string,
    email:string,
    mob:number
} = {// object
firstName: "Athithiyawarman (Office)", // key value structure
lastName: "R",
email: "athi@testleaf.com",
mob: 8838171459
}


console.log(empinfo.infoHari.firstName);
console.log(empinfo.infoRavindran.firstName); // dot notation
console.log(Officeinfo.firstName);