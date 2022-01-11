// Given a sentence, your functions should return the number of words in the sentence.
// Example:
// Input: noOfWords(We are neoGrammers) ––> Output: 3

let noOfWords = str => {
    let count = 1;
    if(str==="") return 0;
    for(let i=0;i<str.length;i++){
        if(str[i]===" "){
            count++;
        }
    }
    return count;
}

console.log(noOfWords("ankit kumain"));

noOfWords("We are neoGrammers");