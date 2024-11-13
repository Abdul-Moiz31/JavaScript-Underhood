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

    // let score = "33abc"; 
    // console.log(typeof score);
    // console.log(typeof (score));

    // let valueInNum = Number(score);
    // console.log(typeof valueInNum);
    // console.log(valueInNum);

    //"33" => 33
    //  "33abc" => NaN => Not a number 
    // true => 1 , false => 0
    
    // let isLoggedin = 1;
    // let booleanIsLoggedIn = Boolean(isLoggedIn);
    // console.log(booleanIsLoggedIn);
    
/*  ............. Operations  ...........  */

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**2);
// console.log(2%2);

// let str1 = "hello";
// let str2 = "Moiz";
// let str3 = str1 + str2;
// console.log(str3);




/*  ............. Arrays  ...........  */


const myArr = [ 0 , 1 , 2 , 3 , 4 , true , "Moiz"];

console.log(myArr[4]);

// Array Methods 

myArr.push(6)
myArr.pop()
myArr.pop()
myArr.pop()
myArr.push(5)
console.log(myArr);

myArr.unshift(9);

console.log(myArr)

console.log(myArr.includes(9));
console.log(myArr.includes(6));


const mynewArr =  myArr.join();
console.log(myArr);
console.log(mynewArr);


// Slice , splice 

console.log("A" , myArr);
const myn1 = myArr.slice(0 , 3)
console.log(myn1);

console.log("B" , myArr);
const myn2 = myArr.splice(0 , 3)
console.log(myn2);

console.log("C" , myArr);
const myn3 = myArr.splice(1 , 3)
console.log(myn3);


const marvel_heros = ["Ironman" , "Thor"  , "Spiderman"]
const dc_heros = ["superman" , "flash"  , "Bartman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

const newhero = marvel_heros.concat(dc_heros)
console.log(newhero);

const newhero1 = [...marvel_heros , ...dc_heros]
console.log(newhero1);

const array = [ 1,2 , 3 , 4 ,5 ,6 , [7 , 8 ,9 , 10] , 11 ,12 ,13 , [14 , 15]]
console.log(array)
const array2 = array.flat(Infinity)
console.log(array2)

let s = 50;
let s1 = 100;
let s2 = 200;
let s3 = 300;
let s4 = 400;
let s5 = 500;
let s6 = 600;

console.log(Array.of(s , s1 ,s2 , s3 ,s4 ,s5 , s6));


/*  ............. Objects  ...........  */

// Singelton 
// -> Object Letrals 


const mysym =Symbol("Key1")
const JsUser = {
    name: "Moiz" ,
    [mysym]: "key1", 
    age: 23,
    Location: " Lahore", 
    email: "moiz@gmail.com", 
    islogedIn: false,  

}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(mysym)
// console.log(JsUser[mysym])

// JsUser.email = " abdulmoiz3140@gmail.com"
// Object.freeze(JsUser);
// JsUser.email = "moiz12@gmail.com"
// console.log(JsUser);


// JsUser.greeting = function(){
//     console.log("Hello Js User");
// }
// JsUser.greetingtwo = function(){
//     console.log(`Hello Js User,${this.name}` );
// }

// console.log(JsUser.greeting());
// console.log(JsUser.greetingtwo());

/*  ++++++++++++++++++++++++++ OBject in depth ++++++++++++++ */

const obj1 = {1 : "a" , 2: "b"};
const obj2 = {3 : "C" , 4: "d"};
const obj11 = {5 : "e" , 6: "f"};
const obj4 = {7 : "g" , 8: "h"};

const obj3 = Object.assign({} , obj1 , obj2 , obj11 , obj4)

console.log(obj3);

const Employee = {
     email: "moiz@gmail.com", 
     Username :{
          firstname: "Abdul",
          lastName: "Moiz",
          name: " AbdulMoiz31", 
     } , Password:{
        CurrentPass : "****", 
        NewPass: "*****", 
     }, Contact_Details: {
        Phone_No : 3014529958 ,
        Address : " Lahore Pakistan"
     }
}
console.log(Employee.Password.NewPass)


const users =[
    {
        id:1, 
    email: "a@gmail.com", 
} , {
    id:2,
    email: "b@gmail.com",
}, {
    id:3,
    email:"c@gmail.com"
}
]
users[1].email

console.log(Employee)

console.log(Object.values(Employee));
console.log(Object.keys(Employee));
console.log(Object.entries(Employee));
console.log(Employee.hasOwnProperty('Contact_Details'));
console.log(Employee.hasOwnProperty('New'));


