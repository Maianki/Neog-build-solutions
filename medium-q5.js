// Given a string and an index, your function should return the character present at that index in the string.
// Example:
// Input: charAt("neoGcamp", 4) ––> Output: c

let charAt = (str, index)=> str[index]??`index out of range`

console.log(charAt("neoGcamp", 12));