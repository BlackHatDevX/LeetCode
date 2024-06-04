var mySqrt = function(x) {
    if (x === 0) return 0;
    if (x === 1) return 1;
    
    let left = 1, right = x, result = 0;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (mid * mid === x) {
            return mid;
        } else if (mid * mid < x) {
            left = mid + 1;
            result = mid;
        } else {
            right = mid - 1;
        }
    }
    
    return result;
};


console.log(mySqrt(2));