let s = "racecar"
let t = "carrace"
let isAnagram = (s, t) => {
    let sArr = Array.from(s).sort().join('')
    let tArr = Array.from(t).sort().join('')
    return(sArr==tArr)
}


console.log(isAnagram(s,t));