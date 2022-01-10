// Write a function which generates a secret code from a given string, by shifting characters of alphabet by N places. Example:
// Input: encodeString("neogcamp", 2) ––> Output: pgqiecor
// Explanation: 2 represents shifting alphabets by 2 places. a –> c, b –> d, c –> e and so on.

let encodeString = (str, n)=>{
    //characters range 
    //A-Z --> 65-90
    //a-z --> 97-122 
 
    let newArr ="";
 
    for(let i=0;i<str.length;i++){
      let asciiCode = str.charCodeAt(i);
      
       if(asciiCode > 122-n && asciiCode <= 122){
          asciiCode = 96 + (asciiCode % (122-n));
          newArr += String.fromCharCode(asciiCode)
       }
      
       if(asciiCode > 90-n && asciiCode <= 90){
         asciiCode = 64 + (asciiCode % (90-n))
         newArr += String.fromCharCode(asciiCode)
       } 
      
       else newArr += String.fromCharCode(asciiCode + n);
      
    }
  return newArr
}

console.log(encodeString("neogcamp", 2));