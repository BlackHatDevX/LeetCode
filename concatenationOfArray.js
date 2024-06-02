let nums = [1,2,1]

var getConcatenation = function(nums) {
    let initialLength = nums.length
    for (let a = 0; a < initialLength;a++){
        nums.push(nums[a])
    }
    return(nums)
};

console.log(getConcatenation(nums));

// let nums = [1,2,1]

// var getConcatenation = function(nums) {
//     let initialLength = nums.length
//     for (let a = 0; a < initialLength;a++){
//         nums[a+initialLength]=(nums[a])
//     }
//     return(nums)
// };

// console.log(getConcatenation(nums));