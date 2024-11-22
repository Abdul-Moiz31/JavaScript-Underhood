//  Every.js => it also return the boolean value true and false 
// Every Element in the array should paas the test that they are present in the array or not . 

// Lets try an example 

const arr = [1 , 2 , 3 , 4 , 5]
const newarr= arr.every((num) => num >=8) 
console.log(newarr); // false 
const newarr1= arr.every((num) => num >= 1)
console.log(newarr1);// true
const newarr2= arr.every((num) => num >=1 && num <=5)
console.log(newarr2);// true
const newarr3= arr.every((num) => num > 0 && num <6)
console.log(newarr3);// true

