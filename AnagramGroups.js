let strs = ["act","pots","tops","cat","stop","hat"]

let groupAnagrams=(strs)=>{
let newStrs = []
let finalStrs = []
for (item of strs){
    newStrs.push(Array.from(item).sort().join(""))
}

for (let a=0;a<newStrs.length;a++){
    let tempArray = []
    tempArray.push(strs[a])

    for (let b=a+1;b<newStrs.length;b++){
        if(newStrs[a]==newStrs[b]){
            newStrs.splice(b,1)
            tempArray.push(strs[b])
        }
        finalStrs.push(tempArray)
    }
    newStrs.splice(a,1)
}
console.log(finalStrs);

}

console.log(groupAnagrams(strs));