// Function declaration vs. function expression in JavaScript

/*  The major difference between a function declaration and a function expression is that a function declaration is created with 
a function name but in a function expression, the function name is omitted. */

/* ++++++++++++++++++ Function Decleration +++++++++++++++++ */
/* A Function decleration is alos called function statement 
It is simply defining a function with a function name right after the function keyword. */

/* One major feature of the function declaration is that it can be called and used even before creating them. 
This is possible because of Hoisting.*/

// Syntax for function declaration: 
function functionDeclaration() {
    // statement
  };
  
  function functionDeclaration(para) {
  // statement
  };
  
  function functionDeclaration(para1, para2) {
  // statement
  };

//   Example
// function add(a,b){
//     return a+b;
// } 
// let total= add(5, 5);
// console.log(total);

// Function declaration hoisting

let total1 = add1(5 , 5);

function add1(c , d) {
    return c+d;
}
console.log(total1);
/* Calling the function before it is declared is made possible because the JavaScript engine moves the function declarationsto the top of the 
script.So before the code executes, the interpreter searches for variables and function declarations before going through the rest of the script.*/

// +++++++++++++Advantages of a function declaration. 

let x =20;
let y=30;
let total = add(x,y);
function add() {
    return x+y;
}
console.log(total)

// When to use a function declaration:
/* 1- Use function declaration when you need to call the function before it is defined
Use function declaration when you want your function to be on the global scope
Use function declaration for a more readable and understandable function */

/* ++++++++++++++++++ What is a Function Expression ? +++++++++++++++++++ */

/* A function expression is simply a function that is declared without a function name and is assigned to a variable at the same time. 
The absence of a function name makes it an anonymous function. 
Unlike function declaration, you can’t call a function expression before creating it, it will throw an error. 
So we can only call a function expression only after we have created it.
*/
/* Function expressions assigned to a variable are called/invoked using the variable name since the function expression does not 
have a function name. */

let functionname = function(){};
functionname();
// Examlpe 

let func = function(a, b){
    return a+b;
}
let total2 = func(1 ,2);
console.log(total2);

//  ANother Example 

const substraction = function(q ,e , r) {
    return q-e-r;
}
let total3 = substraction(9,6,3);
console.log(total3);


// Advantages of a function expression

// Callbacks:
/* These are functions that are passed into another function as an argument.Function expressions can be used as callback functions. 
That is to say, we can pass them directly to other functions without having to assign them to a variable.*/

// button.addEventListener('click',  function(){
//     console.log(" Function expression is used here ");
    
// })

// Immediately Invoked function Expression(IIFE):
/* A function expression can be used as an Immediately Invoked Function Expression. IIFEs are functions that are executed immediately after being defined.
A function expression can be written as an IIFE by enclosing it in parentheses, and adding another parenthesis immediately at the end of the function:*/

// SyntaxExample 
(function(){

})
// When to use function expression
/* Function expression should be used if we want our function to be accessible only after it has been defined
Use function expression when you want to write an anonymous function, which doesn’t require a function name for later use
Use function expression when you want an immediately-invoked function expression (IIFE)
Use function expression when you want to pass a function as an argument to another function.*/
// Function declaration (hoisted)


//  Difference 
// ++++++++++++++++ Hoisitng 
console.log(hoistedFunction()); // Output: "I am hoisted!"

function hoistedFunction() {
    return "I am hoisted!";
}

// Function expression (not hoisted)
try {
    console.log(nonHoistedFunction()); // This will throw an error
} catch (error) {
    console.log(error.message); // Output: nonHoistedFunction is not a function
}

var nonHoistedFunction = function() {
    return "I am not hoisted!";
};

// Now we can call the function expression after it's declared
nonHoistedFunction = function() {
    return "I am now called after declaration!";
};

console.log(nonHoistedFunction()); // Output: "I am now called after declaration!"


//  +++++++++++++++ Call Backs
// Function declaration
function greet() {
    console.log("Hello!");
}

// Function expression
const farewell = function() {
    console.log("Goodbye!");
};

// Function that accepts a callback
function executeCallback(callback) {
    callback(); // Call the passed-in function
}

// Trying to pass a function declaration (this will work, but it's not a callback)
executeCallback(greet); // Output: Hello!

// Passing a function expression as a callback
executeCallback(farewell); // Output: Goodbye!

// 4. Immediately Invoked function Expression(IIFE).

/* A function declaration can not be called at the same time when it was created, while a function expression can be used as an IIFE 
which means we can call it immediately after defining it. */
(function() {
    console.log("This function is executed immediately!");
})();
(function(me) {
    console.log("Hello, " + me + "!");
})("Moiz");

(function(){
    console.log(" My Name is Moiz");
})();
(function(name){
    console.log("Hello " + name + "!");  
})("Abdul Moiz");
