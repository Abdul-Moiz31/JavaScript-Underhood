// Reduce 

const num =[1 , 2 , 3]

const total = num.reduce(function(acc , curr) {
    console.log(`acc: ${acc} and the currval is ${curr}`);
    
    return acc+curr;
}, 0) //so the accumulator has been stored with the initial value 0 , 
console.log(total);
// Explanation 
//  When ever it runs it will be like if acc = 0 and the curr value will be 1
//**** OUTPUT ****/
/* acc: 0 and the currval is 1
acc: 1 and the currval is 2
acc: 3 and the currval is 3
total 6 */

// You can try it other way 

const total1 = num.reduce((acc , curr)=> {
    return acc+curr}
     , 0);
console.log(total1); // Output 6


const courses=[
    {itemName:"jscourse" , price:200}, 
    {itemName:"pythoncourse" , price:500},
    {itemName:"HTMLcourse" , price:50},
    {itemName:"CSScourse" , price:300},
    {itemName:"Reactcourse" , price:600},
]
const coursesbill = courses.reduce((acc , item) => acc + item.price, 0)

console.log(coursesbill)// The total price of the cart is 1650
