// What are Closures?
/* A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
In other words, a closure gives a function access to its outer scope. In JavaScript, closures are created every time a function is created, 
  at function creation time. */

// Example 

// function main(){
//     const name = " Moiz";
//     function myname(){
//         console.log(name);
//     }
//     myname();
// }
// main();

//  So in this function the myname function is basically a closure 
// function main(){
//     const name = "Moiz";
//     function myname(){
//         console.log(name);
//     }
//     return myname;
// }
// let fn = main();
// fn();
// fn();
// fn();

// Another Example 
// function main(name){
//     function myname(){
//         console.log(name);
//     }
//     return myname;
// }
// let hey = main("Ali");
// hey();
// hey();
// hey();

//  Practical Uee case 

// function adder(num){
//     function add(b){
//          console.log(num + b);
         
//     }
//     return add;
// }
// const addto5 = adder(5);
// addto5(1);
// addto5(2);
// addto5(5);

// //  2
// function ader(x){
//     return function (y){
//        return x+y
//     }
// }
// const add1 = adder(5)
// const add2 = adder(10)
// add1(5);
// add2(2);

//  3
// const counter = (function () {
//     let privateCounter = 0;
//     function changeBy(val) {
//       privateCounter += val;
//     }
  
//     return {
//       increment() {
//         changeBy(1);
//       },
  
//       decrement() {
//         changeBy(-1);
//       },
  
//       value() {
//         return privateCounter;
//       },
//     };
//   })();
  
//   console.log(counter.value()); // 0.
  
//   counter.increment();
//   counter.increment();
//   console.log(counter.value()); // 2.
  
//   counter.decrement();
//   console.log(counter.value()); // 1.

//   4 
const makeCounter = function () {
    let privateCounter = 0;
    function changeBy(val){
        privateCounter += val;
    }
    return {
        increment(){
            changeBy(4);
        },
        decrement(){
            changeBy(2);
        }, 
        value(){
            return privateCounter
        }
    }
    
}
const counter1 = makeCounter()
const counter2 = makeCounter()

console.log(counter1.value()); // 0.

counter1.increment();
counter1.increment();
console.log(counter1.value()); // 8.

counter1.decrement();
console.log(counter1.value()); // 10.
console.log(counter2.value()); // 0.