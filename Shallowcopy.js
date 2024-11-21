// Shallow Copy vs Deep copy

/* There are two ways to clone an object in Javascript:

Shallow copy: means that only the first level of the object is copied. Deeper levels are referenced.
Deep copy: means that all levels of the object are copied. This is a true copy of the object. */

// Shallow copy

//  It can be achieved by using spread operator(...) or using Object.assign()

const obj = {name : 'version' , Class : "BSCS"};

const shallowcopy1 = {...obj};
const shallowcopy2 = Object.assign({} , obj);

shallowcopy1.name = "Version 1";
shallowcopy1.Class = "MSCS";
shallowcopy1.name = "Version 2";
shallowcopy2.Class = "BSIT"

console.log("Orginal: " , shallowcopy1);
console.log( "Shallow: " ,shallowcopy2);

/* As you can see in this code snippet:

After updating a property in the first level of the cloned objects, the original property is not updated.
After updating a property in a deeper level, the original property is also updated. This happens because, 
in this case, deeper levels are referenced, not copied. */

// Deep copy

// A deep copy can be achieved using JSON.parse() + JSON.stringify():

/* As you can see in this code snippet: */
const obj1 = { name: 'Version 1', additionalInfo: { version1: 1 } };

const deepCopy = JSON.parse(JSON.stringify(obj1));

deepCopy.name = 'Version 2';
deepCopy.additionalInfo.version1 = 2;

console.log("Orginal: " ,  obj1); // { name: 'Version 1', additionalInfo: { version: 1 } }
console.log("deepCopy1: " , deepCopy); // { name: 'Version 2', additionalInfo: { version: 2 } }

// After updating a property in the first level of the cloned objects, the original property is not updated.
// After updating a property in a deeper level, the original property is neither updated. This happens because, 
// in this case, deeper levels are also copied. 

// Performance
/* For obvious reasons, shallow copies are a lot faster than deep copies. But this doesn’t mean that you should always use a shallow copy, 
because sometimes you will also need a copy of the nested objects. So, which option should I use?

If the depth of your object is equal to one, use a shallow copy.
If the depth of your object is bigger than one, use a deep copy.*/


//  Lets deep dive in more concepts 

let Employe = {
    name:{
        firstname: "Abdul",
        lastname: "Moiz",
        Fathername: "Ajmal",
    } , Position : "SWE", 
    salary : 10000
}

let shallowcopya = Object.assign(Employe);
let deepCopy1 = JSON.parse(JSON.stringify(Employe));

shallowcopya.name.firstname = "Ali";
shallowcopya.name.lastname = "Ahmad";
shallowcopya.name.Fathername = " Bilal";
shallowcopya.Position = "Lead SWE";
shallowcopya.salary = "20000";

// Deep Copy

deepCopy1.firstname = "A"
deepCopy1.lastname = "B"
deepCopy1.Fathername = "AC"

console.log("Original:" , Employe);
console.log("Copy: " , shallowcopya);
console.log("DeepCopy :" , deepCopy1.name);

//  Example 2 :
let Array = [1 , 2 ,[45 , 56]]
let scopy = Object.assign(Array)
let dcopy = JSON.parse(JSON.stringify(Array))

scopy[0]=99;
dcopy[2][0]= 5;

console.log(Array);

console.log(scopy);
console.log(dcopy);

//  Lets Check Another Example : 

let Students = {
    Name: {version : "Ali"},
    Class: "One",
    School: "DPS",
    Address:{
        Street: 2,
        Town: "Wapda town",
    }
}

let ss = Object.assign(Students)
let dd = JSON.parse(JSON.stringify(Students))

ss.Name.version = "Mbb"
ss.Class = "Ten"
dd.name = "Ali"
dd.Address.Street = 5;

console.log("Original:" , Students);
console.log("Shallow :"  , ss);
console.log("DEEP:", dd);









