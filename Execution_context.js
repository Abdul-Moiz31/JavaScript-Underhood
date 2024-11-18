// Execution Context 

// All the execution is done on thread in javascripts 

//  How the JS code Executes 

// The Global Eecution Context 
// Function Execution Context
// Eval Execution Context 
// {} ---->  Memory Creation Phase 
//  Execution Pahse 

let value1 = 10; 
let value2 = 3;
function addNum(num1 , num2) {
    let total = num1 + num2;
    return total;
}
let result1 = addNum(value1 , value2)
let result2 = addNum(10, 2);

/* Sbsay pehle code Global Execute hota hy*/
/* In memory phase all the varialble are collected and store . for examle if we take value1 so it will be */
//  value1 -> undefined ,  value2 -> undefined , addNum -> Defination , resul1 ->  undefined , resul2 ->  undefined

// Execution Phase
// value1 -> 5
// value2 -> 10
// addNum - > it will create its own phase to run both memory and execution conext . after proforming all the process again it moves to the next
// let result2 = addNum(10, 2); in this these number will get to assign to the global variable . then the ,memory will assign same as 
// value1 - > undefined adn then in execution phase it runs  

//  Now its up to you you can take as much function you can nd it will run same as creating the same process through the function 


