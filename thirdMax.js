/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {

    // removing duplicates from array
    let filteredArr = nums.filter((item,index)=>nums.indexOf(item)===index)

    // removing duplicates from filteredArr
    let sortedArr = filteredArr.sort((a,b)=>a-b)
    let len = sortedArr.length

    // final checks
    if (len<3){
        return sortedArr[len-1]
    } else {
        return sortedArr[len-3]
    }
};