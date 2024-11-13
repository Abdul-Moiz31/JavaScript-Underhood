/* +++++++++++++++++++ Scopes +++++++++++++++ */

// {}-> curly braces are scope , when it comes with func or in loops

// Var is not used due to the scope issu e 

//  Wehn we check golbal scope in our code it is different and when we use it in our cbrowser console it is different 

// Var = 300 This is Global Scope 
 if(true){
    let a= 10;
    const b =20;
    // var c=30; (Inner Scope )
    // console.log(a);
 }
// console.log(a);
// console.log(b);

// let hey = 300
// if(true){
//     let hey= 10;
//     const b =20;

//     console.log("INNER:" , hey);
//  }
//  console.log(hey);
 
//  const bye = 500
//  if(true){
//      let hey= 10;
//     //  const bye =20;
 
//      console.log("INNER:" , bye );
//   }
//   console.log(bye);
  

//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
//   }

/* +++++++++++++++++++ Nested Scopes +++++++++++++++ */
// The child variable can access the parent one 
function one(){
    const username="Moiz"

    function two(){
        const website="youtube"
        console.log(username)
    }
    function three(){
        const degree =" Bscs"
        console.log(username)
    }
    // console.log(website);
    two()
    
}
one()

if (true) {
    const username ="Moiz"
    if (username==="Moiz") {
        const website ="youtube"
        console.log(username +website)
        
    }
    // console.log(website) => throw erroe because can call out of the scope  
}
// console.log(username) => throw erroe because can call out of the scope 

/* ++++++++++ intresting ++++++++++++*/

console.log(addone(5));

function addone(num) {
  return num +1 ;  
}

//  This will not run adn throw error because of the hoisting that where should the function be placed 
console.log(addtwo)
const addtwo = function(num) {
    return num +2 
}

  