// Map 


// const myNum = [1 , 2 , 3, 4, 5];
// const newNum = myNum.map((num) => {
//     return num+10;
// })
//  console.log(newNum);

// Chaining 
//  using 2 or 3 methods together is called chaining for example newnum.map().map().filter() . Lets Use them step by step;

// const arr = [ 1 , 3 , 5 , 7 , 9];

// const newarr = arr.map((num) => num * 10).map((num) => num+ 1)
// .filter((num) => num >= 50).filter((a) => a>= 55 && a<=90)
// console.log(newarr);

// The Common Diiference b/W the map and filter
const a =[ 1 , 2 , 3 , 4]
const na = a.filter((num) =>{
    return num * 10; // [ 1, 2, 3, 4 ] because it used to filter not to covert in into a new one 
})
console.log(na);



const b = [1 , 2 , 3 , 4 ]
const nb = b.map((num) =>{
    return num * 10;
})
console.log(nb); //[ 10, 20, 30, 40 ]
 