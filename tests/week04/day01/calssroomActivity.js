//occurance of 2

const nums = [2,4,5,2,1,2]
let count = 0;
const k=2;

for(let i=0; i<nums.length;i++){
    if(nums[i]===k){
        count+=1;
    }
}

console.log(`The occurance of number ${2} in the array 'nums' is ${count}`)