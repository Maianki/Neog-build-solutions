// Given an array, your function should return the length of the array.
// Example:
// Input: arrayLength([1,5,3,7,8]) ––> Output: 5

let arrayLength = arr=>{
    let len = 0;
    for(let ele of arr){
        len++;
    }
    return len
}

//calling arrayLength
console.log(arrayLength([1,5,3,7,8]));