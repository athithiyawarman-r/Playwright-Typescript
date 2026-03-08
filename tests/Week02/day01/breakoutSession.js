let a = `Testleaf`
let rev = ``


function palindrome(a, rev){
for(let i=a.length-1; i>=0;i--){
rev+=a.charAt(i);
}



if(a == rev){
    console.log(`${a} is a palindrome`)
}
else{
    console.log(`${a} is not a palindrome`)
}

console.log(`revered string of ${a} is `+rev)}

palindrome(a, rev)
a=`malayalam`
palindrome(a, rev)