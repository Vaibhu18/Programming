let arr = [1,2,5,1,24,6,2,46,1,2]
let newSet = new Set([])
for(let i of arr){
    newSet.add(i)
}
console.log(newSet.values())