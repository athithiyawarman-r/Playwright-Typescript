//named function
function add(){
let a =10;
let b=20;
const c=a+b
return c; // when we use return keyword add() function is going to hold the result of c
}

console.log(add());


//Anonymous Function  or function expression
let mult = function() {
let z =10;
let xb=20;
let yc=z*xb

return yc;

}
console.log(mult());

//Arrow Expression
let div = () => {
let z =10;
let xb=20;
let yc=xb/z

return yc;

}
console.log(div());

//Simplified Way of Arrow Function when its in single line
let funarrow2 = (x,y)=> x+y
console.log(funarrow2 (10,40));
