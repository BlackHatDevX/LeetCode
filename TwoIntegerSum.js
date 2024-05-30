let nums = [4,5,6]
let target = 7

let twoSum=(nums, target)=> {
for (let a=0;a<nums.length;a++){
    for(let b=a+1;b<nums.length;b++){
        if (nums[a]+nums[b]==target){
            return([a,b])
        }
    }
}
}

console.log(twoSum(nums,target));