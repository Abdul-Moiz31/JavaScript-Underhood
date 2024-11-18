/*++++++++++++++++++++ Call Back ++++++++++++++++++++*/

// Call back is simply defined as calling funtion 
//  It depends on the Lifo -> last in first out
/* A callback is a function passed as an argument to another function

This technique allows a function to call another function

A callback function can run after another function has finished */

// lets take a function for better understanding

function one(){
    console.log("one");
}
function two(){
    console.log("two");
}
function three(){
    console.log("three");
}
one();
two();
three();

//  So what will happen when i call these . So when the one will get call It will push into the stack . 
// Whenm the two is called it will also push the stack . But the functions are single here so one is taken out . 
//  Similarly for the three

//  Lets take another example 
function one(){
    console.log("one");
    two();
}
function two(){
    console.log("two");
    three();
}
function three(){
    console.log("three");
}
one();
two();
three();

//  As i have put two into one so when the one is called and then two is call it will be there in the call Stack . one() , two() because the two
// exist in one . and similarly for two , the one and two remains in the stack and three is also placed at the top because it is i two();

/* When you pass a function as an argument, remember not to use parenthesis.

Right: myCalculator(5, 5, myDisplayer);

Wrong: myCalculator(5, 5, myDisplayer()); */
