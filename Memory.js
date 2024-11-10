// Stack Memory ( Premitive )

let name = " Moiz";

let anothername = name;
anothername = " Ali "
console.log(name);
console.log(anothername);

// When ever you get into the stack you get the copy of that same value 



// Heap Memory ( Non Premitive )

let userone ={
    email: " moiz@gmail.com",
    name: " moiz ", 
    degree: " Bscs",
}
let usertwo = userone;
usertwo.email = "abdulmoiz@gmail.com"
usertwo.name= " Abdul Moiz"
usertwo.degree = " Bsit"
console.log(userone.email)
console.log(usertwo.email)
console.log(userone.name)
console.log(usertwo.name)

// But in the heap you get the reference of the value nd you do changes in the original value 
