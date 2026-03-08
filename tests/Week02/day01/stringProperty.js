let course = "Playwright"

console.log(`length of the string is ${course.length}`);
console.log(`charAt() of 2 of the string is ${course.charAt(2)}`) //"a"
console.log(`indexOf() of a of the string is ${course.indexOf('a')}`);

let outputString = course.substring(3,5)
console.log(outputString);

outputString = course.substring(1,6)
console.log(outputString);

outputString = course.substring(6,1)
console.log(outputString);


let ind
for(let i=0; i<course.length-1;i++){
    if(course.charAt(i)=='w'){
        ind = i
    }
}
let newOut = course.substring(ind,course.length)
console.log(newOut);