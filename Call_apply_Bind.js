// Call() , apply() , Bind() 
//  These all are use for object . To take out the proerties from object 
// Lets c

let object = {
    name:"Moiz", 
    address:"Lahore",
    Degree:"BSCS", 
    Semester: 7,
    Contact: "03014529958" , 
};
// console.log(" The deatisl are " , "Name :" ,  object.name ,"Address :" , object.address ,"Contact :" , object.Contact);

let object1 = {
    name:"Ahmad", 
    address:"FSD",
    Degree:"MS", 
    Semester: 1,
    Contact: "0200" , 
};
let object2 = {
    name:"Ali", 
    address:"Khi",
    Degree:"BSIT", 
    Semester: 5,
    Contact: "0301" , 
};

function deatils(){
    console.log( " The details are : " , this.name , this.address , this.Degree , this.Semester , this.Contact)
}
deatils.call(object2); // Ali , Khi , BSIT , 5 , 0301
deatils.call(object2 , "Hello , Hello , Hello"); // you have to pass arguments first then you will get the result  

// apply()
function deatils1(first , second , third){
    console.log( " The details are : " , this.name , this.address , this.Degree , this.Semester , this.Contact , first , second , third)
}

deatils1.apply(object1 , ["Hello" , "Second" , "Third" ]); // Ahmad FSD MS 1 0200 Hello Second Third

// bind
function deatils1(first , second , third){
    console.log( " The details are : " , this.name , this.address , this.Degree , this.Semester , this.Contact , first , second , third)
}
let  Name = deatils1.bind(object , "new" , "old" , "better"); // Moiz Lahore BSCS 7 03014529958 new old better
Name();
Name();



// Need to remember
/* Call -> The arrguments can be passed directly 
Applu -> If you want to pass the arguments  , they need to be in array
Bind -> It can be used and call again and again when needed */
