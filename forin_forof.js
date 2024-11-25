// Difference B/W for in and foor of loop 

/*  for-of is used to iterate over the values in an object such as an array or string . It allows you to acccess the value of the object directly 
without having to use in index */
// Example 

// const myname = " Abdul Moiz";
// for(let char of myname){
//     console.log("The Character of ny name is " + char )
// }

// const city = "Lahore";
// for(let c of city){
//     console.log("The Char of City is " + c);
    
// }

const name= "Moiz";
const nums= [1 , 2 , 3,4 , 5 ,6 ]
for(let num of nums){
    console.log("my numbers : " + nums)
}



/* for in loop 
For in Loop is used to iterate over any inherited properties of an object . It allows you to access the keys of the object, rather than the values*/
// Example 


// const obj = {a:1,b:2,c:3 ,d:4}
// for(let key in obj){
//     console.log(`The key is ${key}`)
// }

// const obj = ["Moiz" , 1 , 2 , 3, 4 , 5 , 5 ,6, 6 ,6  , 7 ,8]
// for(let key in obj){
//     console.log(`The key is ${key}`)
// }

/* It is Important to note that for in wil also iterate over the inherited properties of an object . If you only want to iterate over the object's
own properties , you can use Object.keys() or Object.entries() in combination with for-of loop */

// const newobj = {a:1,b:2,c:3 ,d:4, e:5 , f:6}
// newobj.e =5;
// for(const key of newobj.key(newobj)){
//     console.log(key);
// }

const object= {a:1,b:2,c:3 ,d:4, e:5 , f:6}
for(const key of Object.keys(object)){
    console.log(key);
}


// Whten to use 

//for .... of for [array , Map , Set , String ] to iterare over  calue
//  For-in for an iterates over a key
//  for-in for objecxts to enumerate its (object's properties)