let nums = [1, 2, 3, 1]

var containsDuplicate = function(nums) {
    let set = new Set(); 
    for (let num of nums) {
        if (set.has(num)) {
            return true; 
        }
        set.add(num);
    }
    return false; 
};


console.log(containsDuplicate(nums));