let height = [0,1,0,2,1,0,1,3,2,1,2,1]

var trap = function(height) {
    let heightLength=height.length
    // getting the maxHeight 
    let maxHeight= 0
    let maxHeightIndex = 0
    for (let index = 0;index<heightLength;index++){
        if (height[index]>maxHeight){
            maxHeight=height[index]
            maxHeightIndex = index
        }
    }
    // calculating the left side
    let ans=0
    ans = calculateLeft(ans,maxHeightIndex,height)
    ans = calculateRight(ans,maxHeightIndex,heightLength,height)
    
    return(ans);
};

let calculateLeft = (ans,maxHeightIndex,height)=>{
    let indexRt = maxHeightIndex
    if (indexRt==0){
        return(ans)
    }
    while(indexRt!=0){
        let anotherHighestIndex=0
        for (let a=indexRt-1;a>=0;a--){
            if (height[a]>height[anotherHighestIndex]){
                anotherHighestIndex=a
            }
        }
        let sumOfNums = 0
        for (let b = indexRt-1;b>anotherHighestIndex;b--){
            sumOfNums=sumOfNums+height[b]
        }
        ans = ans+(height[anotherHighestIndex]*(maxHeightIndex-anotherHighestIndex-1)-sumOfNums)
        if (indexRt !== 1) {
            return calculateLeft(ans, anotherHighestIndex, height);
        } else {
            return ans;
        }
                
    }
}

let calculateRight = (ans,maxHeightIndex,heightLength,height)=>{
    let indexRt = maxHeightIndex // 7 
    if (indexRt==heightLength-1){
        return(ans)
    }
    while(indexRt!=heightLength-1){ // 7 != 11
        let anotherHighestIndex=heightLength-1
        for (let a=indexRt+1;a<heightLength;a++){
            if (height[a]>height[anotherHighestIndex]){
                anotherHighestIndex=a
            }
        }
        let sumOfNums = 0
        for (let b = indexRt+1;b<anotherHighestIndex;b++){
            sumOfNums=sumOfNums+height[b]
        }
        ans = ans+(height[anotherHighestIndex]*(anotherHighestIndex-maxHeightIndex-1)-sumOfNums)
        if (indexRt !== heightLength - 2) {
            return calculateRight(ans, anotherHighestIndex, heightLength, height);
        } else {
            return ans;
        }
            
    }
}



console.log(trap(height));