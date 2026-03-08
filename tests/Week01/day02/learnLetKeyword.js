//Declaration of EmpName
let empName = "Athithiyawarman"

console.log(`reinitialisation of empName: ${empName}`)

//Reinitialization
empName = "Athi"

console.log(`reinitialisation of empName: ${empName}`)


// HOISTING --> memory is allocated even before the declaration
// declaring and initializing in the Let 
// allocated even before the declaration NOT ALLOWED
//++++++++++++++++++++++++++++++++++++++++++++++++
//            console.log(empid)      // Reference error will throw
//            let empid =7654
//++++++++++++++++++++++++++++++++++++++++++++++++

//SCOPE RESTRICTION -
//Let - scope level restriction
{
    let empLocation = "Chromepet, Chennai"
    console.log(`Location of employee: ${empLocation}`)
}
// console.log(`Location of employee: ${empLocation}`) // Reference error will throw Since its ouside the scope


//No SCOPE RESTRICTION
//var - no scope level restriction
{
    var empLocation = "Chromepet, Chennai"
    console.log(`Location of employee: ${empLocation}`)
}
console.log(`Location of employee: ${empLocation}`)