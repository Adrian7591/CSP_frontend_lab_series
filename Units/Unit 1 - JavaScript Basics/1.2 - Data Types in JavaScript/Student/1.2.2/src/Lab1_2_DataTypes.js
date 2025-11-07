/* ===========================================================
   Lab 1.2 – Data Types
   Primitive types, typeof, and basic conversions.
   =========================================================== */

// 1️⃣ Primitive Types
// Declare one variable for each primitive type: string, number, boolean, null, undefined.
// Print each variable and its type using typeof.
   let movie = "Bronx Tail"
   let rating = 6.8;
   let revenue= null; 
   let oscars = undefined // or let oscars;
   let inTheaters = true;

   console.log("Movie", tyepof movie)
   console.log("Rating", typeof rating)
   console.log("revenue", typeof revenue)
   console.log("oscars", typeof oscars)
   console.log("inTheaters", typeof inTheaters)

// 2️⃣ Typeof Check
// Compare typeof null and typeof undefined.
// Explain in a comment why the results differ.


// 3️⃣ Concatenation vs Addition
// Use "5" and 5 to demonstrate the difference between concatenation and numeric addition.
// Print both results and explain the behavior.
   console.log("5" + 5)
   console.log(5 + 5 + "5")
   console.log("5" + (5+5+))

// 4️⃣ Explicit Conversions
// Convert different values using Number(), String(), and Boolean().
// Print each result and describe what you notice.
console.log(Number("5"))
console.log(Boolean(""))
console.log(Boolean("1"))
console.log(typeof String(4))

// 5️⃣ NaN and isNaN()
// Try converting a non-numeric string such as "hello" to a number.
// Use isNaN() to check the result and comment on the output.
console.log(isNaN("hello"))
console.log(isNaN(4))
console.log(isNaN("5"))

// 6️⃣ Template Literals
// Create variables name and age.
// Use a template literal to print: Hello, my name is ${name} and I am ${age} years old.
console.log(`My favorite movie is ${movie}
      its rating on IMDB is ${rating}
      the movie has made $${revenue} at the box office
      and has won ${oscars} oscars and is currently in theaters: ${inTheaters}`)

/* ===========================================================
   🎟 EXIT TICKET
   1. Which data type(s) did you use today and why?
   2. Where did you encounter type conversion (implicit or explicit)?
   3. One misconception I corrected or a tip I learned.
   4. What would you try next time to debug faster?
   =========================================================== */
