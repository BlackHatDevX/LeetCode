let arr = [3,2,5,3]
let val = [3]

var removeElement = function(nums, val) {
    let length = nums.length // 4
    totalDeleted = 0
    for (let index = length-1;index>=0;index--){
        console.log(index);
        if (nums[index]==val){
            console.log(true ,index);
            for (let shifter=index;shifter<=length-1;shifter++){
                console.log("shifter",shifter);
                nums[shifter]=nums[shifter+1]
            }
            nums[length-1]="_"
            totalDeleted += 1 
        }
    }
    let k = length-totalDeleted
    return(k)
};

console.log(removeElement(arr,val))