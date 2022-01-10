// Given an array and an item, your function should return the index at which the item is present.
// Example:
// Input: indexOf([1,6,3,5,8,9], 3) ––> Output: 2

let indexOf = (arr,ele)=>{
    for(let index=0;index<arr.length;index++){
        if(ele===arr[index]) return index
    }
  return -1
}

//calling indexOf
console.log(indexOf([1,6,3,5,8,9], 11));

