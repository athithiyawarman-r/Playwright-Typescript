function main(a,b,Onadd,OnSub,OnMul){
    Onadd(a,b);
    OnSub(a,b);
    OnMul(a,b);

}

function add(a,b){ // a 10, b=20
console.log("Addition:",a+b);
}
function sub(a,b){ // sub func
console.log("Subtraction",a-b);}

function mul(a,b){
console.log("Multiplication",a*b);
}

add(10,20) // passed the values
mul(10,20)
sub(10,20)


console.log(`########################################################################`);

main(500,30,add,sub,mul)
/* main() is main function inside which i passing the sub function add(), sub() and mul()*/