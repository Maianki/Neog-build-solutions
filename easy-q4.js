// Given n numbers, your function should return the minimum of them all. The number of parameters won't be accepted from user.
// Example:
// Input: findMin(3,5) ––> Output: 3
// Input: findMin(3,5,9,1) ––> Output: 1
// (Hint: Lookup rest parameters in JavaScript)

let findMin = (...rest)=>{
    let min = rest[0];
    for(let ele of rest){
        if(min > ele){
            min=ele;
        }
    }
    return min;
}

//calling findMin
console.log(findMin(3,5,9,1));