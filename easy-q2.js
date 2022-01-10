// Given length of a regular hexagon, your function should return area of the hexagon.
// Example:
// Input: calculateAreaHexagon(10) ––> Output: 259.80

let calculateAreaHexagon = side => (3 * Math.sqrt(3)* side * side)/2; 

calculateAreaHexagon(10)