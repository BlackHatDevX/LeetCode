let ops = ["5","2","C","D","+"]

var calPoints = function(operations) {
    let finalArr = []
    for (let a=0;a<operations.length;a++){
        if (operations[a]=="+"){
            let score1 = finalArr[finalArr.length-1]
            let score2 = finalArr[finalArr.length-2]
            finalArr.push(score1+score2)
        } else if (operations[a]=="D"){
            let score = 2*(finalArr[finalArr.length-1])
            finalArr.push(score)
        } else if (operations[a]=="C"){
            finalArr.pop()
        } else {
            let num = Number(operations[a])
            finalArr.push(num)
        }
    }
    let ans = 0
    for (a of finalArr){
        ans=ans+a
    }
    return(ans)
};

console.log(calPoints(ops));