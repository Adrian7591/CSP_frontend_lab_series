// Your code goes here. Follow the steps in README.md and run from index.html.
console.log("TEST - TIER 3")

// 11

for (let i = 1; i <= 50; i++) {
    if (i % 15 === 0) {
        console.log("FizzBuzz");
    }
    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
}

//14 

for (let i = 1; i <= 4; i ++) {
    let row = "";
    for (let s = 1; s <= i; s++) {
        row += "*";
    }
    console.log(row);
}