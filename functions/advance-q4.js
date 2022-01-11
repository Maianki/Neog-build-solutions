
// Given a sentence, your function should reverse the order of characters in each word, keeping same sequence of words.
// Example:
// Input: reverseCharactersOfWord('we are neoGrammers') –––> Output: ew era sremmarGoen


let reverseCharactersOfWord = str=>{
    let words = str.split(' ');
    let newStr = words.map(word=> word.split('').reverse().join(''));
    return newStr.join(' ')
}

//calling reverseCahractersOfword
console.log(reverseCharactersOfWord('we are neoGrammers'))