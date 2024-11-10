                            /*  .............  Quick Operations Questions for interview   ...........  */
//  SOmetimes interviewer ask you quick question just to check the presence of your mind 

// console.log("1"+2);
// console.log(1+"2");
// console.log("1"+2 + 2);
// console.log(1+2 +"2");
// console.log((3 + 4) * 5 % 3 );

// console.log(+true);
// console.log(+"");

// let num1 , nume2 , num3;

// num1 = num2 = num3 = 2 + 2;

// let gamecounter = 100;
// gamecounter++;
// console.log(gamecounter);

// let x = 3;
// const y = x++;

// console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

// console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

// Most Imp 

console.log(1 + 2 + 3); // 6

console.log("1" + "2" + "3"); // '123' All operands are strings, so the + operator concatenates them in sequence.

console.log(1 + 2 + "3"); // '33'

console.log(1 + 2 + "3" + 4 + 5); // '3345'

console.log(false - 1); // -1

console.log(true + 1); // 2

console.log([1] + "abc"); // '1abc'

console.log(1 + "2" + "2"); // '122'

console.log(1 + +"2" + "2"); // '32'

console.log(1 + "2" + + "2"); // '3 + 2'

console.log(1 + -"1" + "2"); // '02'

console.log(1 + "1" + - "2"); // 11-2

console.log(+"1" + "1" + "2"); // '112'

console.log("A" - "B" + "2"); // NaN2

console.log("A" - "B" + 2); // NaN

const obj = { a: "one", b: "two", a: "three" };
console.log(obj); 
// {
// b:"two"
// a:'three'
// } In JavaScript, when you create an object with duplicate keys, the last occurrence of the key overwrites any previous values.


// Postfix increment : 
 
// let x = 3;
// const y = x++;
// output: x is 4; y is 3

// let x2 = 3n;
// const y2 = x2++;
// Output : x2 is 4n; y2 is 3n

// Prefix increment:

// let  = 3;
// const y = ++x;
// x is 4; y is 4

// let x2 = 3n;
// const y2 = ++x2;
// x2 is 4n; y2 is 4n

// const person = { name: "Ahsan Mumtaz" };
// function sayHi(age) {
//   return ${this.name} is ${age};
// }

// console.log(sayHi.call(person, 21)); // Ahsan Mumtaz is 21;

// console.log(sayHi.bind(person, 21)); // bound function

var x = 1;
function foo() {
  var x=y=10
  return;
  function x() {}
}
foo();
console.log(x);  //  1

var info = {
  name: "Abdul Moiz",
  getSecretIdentity: function () {
    return this.name;
  },
};

var stoleSecretIdentity = info.getSecretIdentity;

console.log( stoleSecretIdentity());  // undefined

console.log(info.getSecretIdentity()); // Ahsan Mumtaz





