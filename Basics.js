                                        /* Common Questions that cause confusions */
const accountId = 14453 ;
let accountEmail = "Test@gmail.com";
var accPass = "12345"
accCity = "Karachi"
let accState;

console.log(accountId);
console.log("Moiz");

// Bulk Output 

console.table([accountId , accountEmail , accCity , accPass , accState  ]); // If something is not given Value is undefined  


// Why we  use let instead of var  , Because of issue in block scope & functional scope 

// Imp DataTypes to deal with 

// "use strict" is used because it has to deal with the new standards & new version of Js

// alert(3+3) it would be displayed in the console not here because we are using node 

// The code readablity should be clear , Writing code is not enough. 


let name = " Moiz";
let age = 18;
let isLoggedIn = false;
                                        /*  ............. Premitive data Types ...........  */
// number => 2 to power 53
// bigint => not preferable , mostly used in big code bases for bid data
// String => ""
// boolean => true / false 
// null => standalone value ;
// symbol => moslty used for components for uniqueness 

                /*  ............. OBject ...........  */

console.log(typeof undefined) // undefioned 
console.log(typeof null ) // object 


                           /* Conversions */

    let score = "33abc"; 
    console.log(typeof score);
    console.log(typeof (score));

    let valueInNum = Number(score);
    console.log(typeof valueInNum);
    console.log(valueInNum);

    //"33" => 33
    //  "33abc" => NaN => Not a number 
    // true => 1 , false => 0
    
    let isLoggedin = 1;
    let booleanIsLoggedIn = Boolean(isLoggedIn);
    console.log(booleanIsLoggedIn);
    
/*  ............. Operations  ...........  */

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2**2);
console.log(2%2);

let str1 = "hello";
let str2 = "Moiz";
let str3 = str1 + str2;
console.log(str3);



