// Given two arrays, your function should return single merged array.
// Example:
// Input: mergeArray([1,3,5], [2,4,6]) ––> Output: [1,3,5,2,4,6]

//v1
let mergeArray = (arr1,arr2) => {
    let mergedArr = []
    for(let ele of arr1){
        mergedArr.push(ele)
    }
    for(let ele of arr2){
        mergedArr.push(ele)
    }
    return mergedArr
}

//calling mergeArray function
console.log(mergeArray([1,3,5], [2,4,6]));

console.log(mergeArray([], [2,4,6]));

console.log(mergeArray([1,3,5], [2,4,6]));

//v2 - using without an extra array
let mergeArray = (arr1,arr2) => {
    for(let ele of arr2){
        arr1.push(ele)
    }
    return arr1
}

//v3 - using spread without appending any array
let mergeArray = (arr1,arr2) => {
    return [...arr1,...arr2]
}