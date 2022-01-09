/*Given a and b, your function should return the value of a raise to power b
Example:
Input: power(2,3) ––> Output: 8*/

var power = (a,b)=>{
    let pow = 1;
    for(let i=1;i<=b;i++){
        pow*=a;
    }
    return pow;
}

//calling power
console.log(power(2,3))