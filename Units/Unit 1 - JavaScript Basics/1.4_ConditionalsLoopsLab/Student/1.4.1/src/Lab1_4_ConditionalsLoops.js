/* 
 Lab 004 – Conditionals and Loops
*/

// TODO 1: if..else with age discounts

let age = 25
if (age >= 18) 
    console.log("You pay normal price")
else if (age < 18)
    console.log("You pay children price")
else if (age >= 65)
    console.log("You pay older people price")
console.log ("End of program")


// TODO 2: Nested if with two numbers

let a = 1
let b = 2
if (){
    if (a<b) {
    console.log("a is less than b")
} else if (a>b) {
    console.log("a is greater than b")
} else if (a=b) {
    console.log("a is equal to b")
}
}

// TODO 3: Switch statement for language greeting

let language = "Hello";

switch (language) {
    case "Greetings":
        console.log("Hello");
        break;
    case "Asking":
        console.log("Can I...");
        break;
    case "Giving":
        console.log("Here...");
        break;
    default:
        console.log("Language not found");
        break;
}

// Tech 
// APPL - apple
// META - facebook
// NVDA - nvidia

// Healthcare
// UHC - united health care
// PFE - pfizer
// CVS

// Oil
// SHEL - shell
// CVX - cheveron 
// BP - brtish petrolium

let ticker = 'APPL'

switch (ticker){
    case "APPL": 
    case "NVDA":
    case "META":
        console.log(`Your stock ${ticker} is in the Technology Section`)
        break;
    case "PFE":
    case "CVS":
    case "UHC":
        console.log(`Your stock ${ticker} is in the Healthcare department`)
        break;
    case "SHEL":
    case "PFE":
    case "BP":
        console.log(`Your stock ${ticker} is in the oil department`)
        break;
}


// TODO 4: While loop (1 to 10)

let counter = 1 
while (score < 11) {
    console.log("counter: ", + counter)
    counter++;

}


// TODO 5: Do..while loop (1 to 5)

let count = 1;
do {
    
    console.log("Count: ", count)
    count++;
} while (counter<6)


// TODO 6: For loop (1 to 20, print "ten" at 10 and "twenty" at 20)

for (let i =1; i < 20, i++) {
    if (i === 10) {
        console.log("ten")
    } else if (i === 20)
        console.log("twenty")
}

// TODO 7: Even/Odd loop (1 to 20)

for (let i =1; i <=20, i++) {
    if (i % 2 === 0) {
        console.log("i is even")
    } else 
        console.log("i is odd")
}

// 🚀 Stretch Goals
// - Backwards loop from 20 to 1

for (let i =20; i >=1, i++) 
    console.log(i) 
// - Skip multiples of 3 in even/odd loop
