/*++++++++++++++++ This +++++++++++++++++ */
//  This talks about the current value , current Statement 

// Module Scope: Code in a module runs with this as undefined at the top level.
// Browser Console Scope: Code in the console executes directly in the window global scope, where this refers to window.
//  Example 

const user = {
    username: "Moiz", 
    price: 99,
    welcome: function(){
        console.log(`Welcome to the Website: ${this.username} Happy Shoping!!!!  `);
        console.log(this);
        
    }
}

// user.welcome()
// user.username="Ali"
// user.welcome()
//  It will refer to the empty object because there is nothing to define but when you move to the console of the browser you will get 
//  to see objects
console.log(this);

/*++++++++++++++++ Arrow Function +++++++++++++++++ */
// It will show so much things because this behave differentlt in the function 
// function chai() {
//     let usernmae =" Moiz"
//     console.log(this)
// }
// chai()

const chai = ()=> {
    let usernmae =" Moiz"
    console.log(this)
}
chai()



const two = (num1, num2) => {
   return num1 + num2 
}
console.log(two(6,3))

// Imprlicit Arrow Function 
const three =(num1 , num2) => (num1 + num2)

console.log(three(6,4));
const four =(num1 , num2) => num1 + num2

console.log(three(6,5));
const five =(num1 , num2) => ({username: "Moiz" , Class : " BSCS"})

console.log(five());
