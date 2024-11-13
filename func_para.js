/* ++++++++++++++++++++++ Funtion's & Parameters +++++++++++++++++++ */

// PAckaging a peice of code so that we can use it again and again => Function

function saymyName(){
    console.log("Moiz");
    console.log("Bscs");
    console.log("7th sem");
    console.log("Ue");
    console.log("Dev Weekends");
    console.log("Hello Wolrd ");
    
}
saymyName()


// function addtwono(num1, num2){ 
//     console.log(num1+num2);
// }
addtwono(6 ,null) // 6
addtwono(6 ,undefined) // NaN

function addtwono(num1, num2){ 
    let res =num1 +num2
    return res
}

const res = addtwono(4 , 5)

console.log("Result:" , res );


// function login(username){
//    return `${username} just Loggeed in`
// }
// console.log(login(""))

function Signin(username = "Moiz"){
    if(!username ){
        console.log("Please Enter a username");
        return    
    }
    
        return `${username} just Loggeed in`
 }
 console.log(Signin())

// ... Is a rest operator as well as spread operator but there is differnce in their usecase that where to use them or where to not 
 function calculateprice(...num1){
    return num1
 }

 console.log(calculateprice(200 , 400 , 500));

 const user ={
    username: "Moiz", 
    price:"100"
 }
 function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
 }
//  handleObject(user)
 handleObject({
    username:"Abdul", 
    lastname:"Moiz",
    degree:"Bscs", 
    price:100,

 })

 const mynewarr =[500 , 600 , 700 , 800]
 function returnsecval (getArray){
     return getArray[0]
 }
 console.log(returnsecval(mynewarr))
 console.log(returnsecval([500 , 600 , 700 , 800]))
