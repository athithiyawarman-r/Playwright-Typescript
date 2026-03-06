//Sequential of 1 -20 and skipping divisble by 5

console.log('Sequential of 1 -20 and skipping divisble by 5');

for(let i=1; i<=20;i++){
if((i%5!=0)){
console.log(i);
}
}


//Largest of 3 Numbers
console.log('Largest of 3 numbers');
let a=10,b=15,c=8;

if(a>b && a>c){console.log('a is the largest');}
else if(b>a && b>c){console.log('b is the largest');}
else{console.log('c is the largest');}