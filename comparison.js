// // These can be asked in interview but avoid using them in your code 

// console.log(null > 0);
// console.log(null >= 0);
// console.log(null == 0);

// console.log(undefined == 0);
// console.log(undefined => 0);

// // === 
// // Check the value strictly 

// console.log("2" === 2);

// // JavaScript is a dynamic language and not static, which means that variables can hold values of different types during runtime.

// // Interview Data Types 

// //  How data types are stored in memory and how they are accessable 
// //  They are Premitive and Non Premitive 

// // Premitive => 7 catagories 

// // They are call by value , they are given to you by cipying tha original value , and all the changings are done in the copy

// //1- String , Number , Booleanm , null , Undefined , Symbol => (USed for the Uniqueness )  , BIgInt ( used for bigger values)
// // The return of null == Object
// const score = 100
// const scorevalue = 100.3

// const isLoggedIn = false
// const Alpha = null
// const Beta = undefined
// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log (id == anotherId);

//  Refernce type ( Non premitive )
// The memory is alocated through the reference 

//  Array , Objects , Function 

// Array 

// const heors= ["Cat" , "Dog" , "Animals"];

// let obj =    {
//     name: "Jack",
//     age: 14, 
    
// }

// const myfunciton = function(){
//     console.log("Hello World");
// }

// Return types of Datatypes 

// console.log(typeof Alpha);
// console.log(typeof isLoggedIn);
// console.log(typeof myfunciton);


// String in depth 
// ``

// let a = " Hello"
// let b = " World"
// console.log( a+b)

// let name = " Abdul Moiz";
// let repocount = "60";
// let degree = " BSCS";

// // String Intopolation & Methods 

// console.log(`My Name is ${name} and my degree is ${degree} and my repocount is ${repocount}`)


// const object = new String(`AbdulMoiz`)
// console.log(object[0])
// console.log(object[1])
// console.log(object[2])
// console.log(object[3])
// console.log(object.__proto__.length)
// console.log(object.length)
// console.log(object.toUpperCase())
// console.log(object.charAt(2))
// console.log(object.indexOf('i'))

// const newString = object.substring(0,5)

// console.log(newString)

// const newStringOne = "   Abdul Moiz Ahmad ALi   "
// console.log(newStringOne)
// console.log(newStringOne.trim())

// const url = "https://quickstart-ai.me/quicksdtart%20ai"

// console.log(url.replace('%20', '-No-'))

// console.log (url.includes('quickstart'))
// console.log (url.includes('Moiz '))

// // Convert String into Array : 

// console.log(newStringOne.split(''))


// Nums & Maths 

// const score = 400 
// console.log(score)
// const balance = new Number(4)
// console.log(balance)

// console.log(balance.toExponential());
// console.log(balance.toFixed(1));
// console.log(balance.toString().length);

// const otherNumber = 123.8989

// console.log(otherNumber.toPrecision(4));

// const hundred = 1000000

// console.log(hundred.toLocaleString('en-IN'));

//  ++++++++++++++++++++ Maths ++++++++++++++++++++

console.log(Math)
console.log(Math.abs(4));
console.log(Math.round(4.66));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4 ,  5 ,6 ,0));
console.log(Math.max(4 ,  5 ,6 ,0));

console.log(Math.random());
console.log(Math.floor(Math.random()*10)+1);


const min = 10
const max = 20;

console.log( (min + 1));
console.log( (max + 1));
console.log(Math.random(min + 5));
console.log(Math.floor(Math.random() * (max - min  + 1)));


//  Date & Time 

let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// let mynewDate = new Date(2024, 1 , 23);
let mynewDate = new Date("2024-03-24");
console.log(mynewDate.toLocaleTimeString())
console.log(mynewDate.toLocaleString());


let timestamp = Date.now()
console.log(timestamp);
console.log(mynewDate.getTime());


mynewDate.toLocaleString('default' , {
    weekday: "long", 
    day: "2-digit"
})
















