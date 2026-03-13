// 13. a) print login and the opentaps string from the URL?
// http://leaftaps.com/opentaps/control/login
// b) count the number of vowels in a string 'cucumber"
// c) if you have a continuous string of server logs:
// ERROR: 484 [Time: 12:08] INFO: Login Success [Time: 12:01] | ERROR: 500
// [Time: 12:05]
// I need an array containing only the timestamps where an ERROR occurred. How would you approach this?


// a) print login and the opentaps string from the URL?
// http://leaftaps.com/opentaps/control/login

let url = 'http://leaftaps.com/opentaps/control/login';

let urlArray = url.split('/')
console.log(urlArray[3])
console.log(urlArray[5])

// b) count the number of vowels in a string 'cucumber"
let str = 'cucumber'
let vowel = str.replaceAll(/[^aeiou]/g,"")
console.log(vowel.length)

// c) if you have a continuous string of server logs:
// ERROR: 484 [Time: 12:08] INFO: Login Success [Time: 12:01] | ERROR: 500 [Time: 12:05]
let error = 'ERROR: 484 [Time: 12:08] | INFO: Login Success [Time: 12:01] | ERROR: 500 [Time: 12:05]'
let errorArray = error.split("|");
let timeStamp=[];

for(let i=0;i<errorArray.length;i++){
if(errorArray[i].includes('ERROR')){
let time = errorArray[i].split("Time: ")[1].replace("]", "").trim();
timeStamp.push(time);
}
}

console.log(timeStamp);
