//  Hoisting allows you to use functions and variables before they're declared.
// Example 

// console.log(foo);
// var foo = 10; // undefinded 
/* This is because the JavaScript interpreter splits the declaration and assignment of functions and variables: 
it "hoists" your declarations to the top of their containing scope before execution. */

/*& Features of Hoisting
Declarations are hoisted, not initializations.
Allows calling functions before their declarations.
All variable and function declarations are processed before any code execution.
Undeclared variables are implicitly created as global variables when assigned a value. */

/* +++++++++++++++++++++++ Variable hoisting in JavaScript +++++++++++++ */

// var foo;
// let bar;

// we can Also Assign them together 

// var foo = 10;
// let bar = 20;
//  Variable hoisting act differently 
// Variable hoisting with var

var foo;
console.log(foo);// undefined
foo = 2;
console.log(foo); 2

/* Var is accesab;le in global scope . Remember that the first console.log(foo) outputs undefined because foo is 
hoisted and given a default value (not because the variable is never declared). */
//  console.log(AB); // ReferenceError because we are using an un decared variable 

/* Variable hoisting with let and const */
// Variables declared with let and const are hoisted but not initialized with a default value. 
// console.log(big); 
let big = 9;
console.log(big); // ReferenceError

/* The temporal dead zone */
/* The reason that we get a reference error when we try to access a let or const variable before its declaration is because of the temporal dead 
zone (TDZ).The TDZ starts at the beginning of the variable's enclosing scope and ends when it is declared. Accessing the variable in this TDZ 
throws a ReferenceError. */

{
    // Start of foo's TDZ
//      let bar = 'bar';
//    console.log(bar); // "bar"

//    console.log(foo); // ReferenceError because we're in the TDZ

//    let foo = 'foo';  // End of foo's TDZ
}

//  typeof in the temporal dead zone
// console.log(typeof foo); // Uncaught ReferenceError: Cannot access 'foo' before initialization
// let foo = 'foo';
//  For war it will not throw error 

// console.log(typeof foo); // "undefined"
// var foo = 'foo';

// console.log(typeof foo); // "undefined"

/*++++++++++++++++++++++++++ Function hoisting in JavaScript +++++++++++++++++++ */


// bar(); // Uncaught TypeError: foo is not a function
// var bar = function () { }


//  rat();  // Uncaught ReferenceError: Cannot access 'bar' before initialization
// let rat = function () {  }

// *********************** JavaScript only hoists declarations, not initializations. ********************** 
/* Function hoisting is useful because we can hide function implementation farther down in the file and let the reader focus on what the code is 
doing. In other words, we can open up a file and see what the code does without first understanding how it's implemented. */


function resetScore() {
    console.log("Resetting score");
}

function drawGameBoard() {
    console.log("Drawing board");
}

function populateGameBoard() {
    console.log("Populating board");
}

function startGame() {
    console.log("Starting game");
}
resetScore();
drawGameBoard();
populateGameBoard();
startGame();