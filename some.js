//Some 
// It is used to tell the boolean value true or false 
/*  For example 
arr=[ 1 , 2 , 3, 4] if you use arr.some((num) num==3) it the 3 exits it will return true otherwise false; */

const arr = [ 1 , 2 , 3 , 4, 5];

const newarr = arr.some((num) => num==3)
console.log(newarr); // true
const newarr1 = arr.some((num) => num==-1)
console.log(newarr1); // false
