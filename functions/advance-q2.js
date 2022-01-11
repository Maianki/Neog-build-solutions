// Given a sentence, return a sentence with first letter of all words as capital.
// Example:
// Input: toSentenceCase('we are neoGrammers') ––> Output: We Are NeoGrammers

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
      else if(asciiCode > 90-n && asciiCode <= 90){
         asciiCode = 64 + (asciiCode % (90-n))
         newArr += String.fromCharCode(asciiCode)
       }else if(asciiCode === 32){
         asciiCode = 32
         newArr += String.fromCharCode(asciiCode)
       }
      else newArr += String.fromCharCode(asciiCode + n);
      
    }
  return newArr
}

console.log(encodeString("neogcamp ankit", 2));