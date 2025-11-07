/* 
 Lab 003 – Data Types in JavaScript (Boolean, Undefined, Null & Immutability)
*/

// TODO 1: Booleans
// - Create isStudent = true, hasLicense = false
// - Print results of true || false, true && false, !true
let isStudent = true;
let hasLicense = false;
console.log(isStudent||hasLicense)
console.log(isStudent&&hasLicense)

// TODO 2: Short-circuit evaluation
// - Print result of false && (5 > 2)
// - Print result of true || (2 > 5)
console.log(5 > 2)
console.log(2 < 5)

// TODO 3: Undefined
// - Declare variable grade and print it
let variable = grade
console.log(variable)

// TODO 4: Null
// - Create city = null, print it
// - Reassign city = "Miami" and print again
let city = null
console.log(city)
city = "Miami"
console.log(city)


// TODO 5: Immutability
// - Create word = "hello"
// - Try word[0] = "H", print word
// - Reassign word = "Hello" and print again
let word = "Hello"
console.log(word(0), word)
word = "Hello"
console.log(word)

// 🚀 Stretch Goals
// - Check if number is between 10 and 20 using &&
// - Check if city is "Miami" or "Berlin" using ||
console.log(number(-Infinity > 10) && number(20 > Infinity))
