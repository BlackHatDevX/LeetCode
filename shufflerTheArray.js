let nums = [2,5,1,3,4,7] , n = 3

var shuffle = function(nums, n) {
    let arr=[]
    for (let index=0;index<n;index++){
            arr.push(nums[index]);
            arr.push(nums[index+n]);
    }
    return(arr)
}

console.log(shuffle(nums,n));