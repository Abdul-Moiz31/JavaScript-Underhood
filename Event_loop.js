// Event Loop 


// When we are working with the simple code . the js print code line by line  We NEed to understand 2 concepts 
// -> Sync 
// -> Async
// Example 

console.log("Abdul Moiz ");
console.log("Compuiter Sci");
console.log(35); 
// All of these will print line by line and this is the example of syncronous 

// Now what is ther barrier . 

// Suppose you use some sort of time for the execution of any statement 

console.log(" This is the first Line");

setTimeout(() => {
   console.log(" This is the time statement");
    
}, 5000);
console.log(" This is the last statement");

/* So Now here is the catch . The first line will print Properly and when we move to the set timeout function it will wait till the time 
 but there is no surity that after that time will print or not 
 So now what we will let the last statement wait till the secong statement is being executed ? So The anser is no ?
 Now here comes the asynchronour programming to sort out this Issue . 
 
 It has 3 main thins that work together to sort out this isse */

 /*-> Call Stack
 -> Browser / Web Api
 -> Call Back Queue */





