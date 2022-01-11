// Given an array of numbers, your function should return an array in the ascending order.
// Example:
// Input: sortArray([100,83,32,9,45,61]) ––> Output: [9,32,45,61,83,100]

let sortArray = arr=>{
    for(let i=0;i<arr.length;i++){
        for(j=i;j<arr.length;j++){
            if(arr[j]<arr[i]){
                [arr[i],arr[j]] = [arr[j],arr[i]];
            }
        }
    }
    return arr;
}


//calling sortArray

console.log(sortArray([100,83,32,9,45,61]))
