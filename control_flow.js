// Control Flow is nothing but If else statements . Because we have to decide what part of code is need to be executed 

// if( myCondition === 5 ) {
//     console.log( "Five." );
// } else if ( myCondition === 3 ) {
//     console.log( "Three" );
// } else {
//     console.log( "Neither five nor three." );
// }



// Truthy Values 
// "0" , "false" , " " . [] , {} , function(){}

//  Falsy value
//  undefined , Null , Nan, 0 , -0 , BigInt On 

//  How to detect Object is empty or not ?

const emptyObj = {};

if(Object.keys(emptyObj).length ===0){
    console.log("Object is empty")
}


// Nullish Coalescing Operator (??): nnull undefied
let val1;
val1 = 5 ?? 10;
val1 = 5 ?? 20;
val1 = undefined ?? 20;


console.log(val1);

// Ternary operator
// condition ? true : false;
const ice =100;
ice <=80 ? console.log("less than 80") : console.log("More than 80");


// Loop
for(let i =0  ; i <=10 ; i++){
       console.log(i);
       
}

//  To break any conrol flow use Break : 
