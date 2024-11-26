// Promises:
// In promises you need to understand the three states: 
// pending: Initial start , neither fuilfilled nor rejected 
// fulfilled : that is completes
// rejected : not completed , operations failed 

// So we can define promises as object that represents the comletion and failure of the async program .

// Suntac of the Promises 

// new Promise((resolev , reject));

// let Promise1 = new Promise((resolve , reject) =>{
//     console.log(" Abdul Moiz");
//     resolve(1001);
// })
// let Promise2 = new Promise((resolve , reject) =>{
//     console.log(" Abdul Moiz");
//     reject(new Error("Server Error"));
// })

//  Async Examples 

let Promise3 = new Promise((resolve , reject) => {
    setTimeout(function name(){
        console.log(" My Nmae is : Abdul Moiz!!");  
    }, 10000); // It will take 10sec to execute and while it loads the state will be Pendiong and after completion it would be fullfilled
    resolve(1);
})


let Promise4 = new Promise((resolve , reject) =>{
       let success = true;
       if(success){
        resolve("Promise Fullfilled");
       } else{
        reject(" Promise Rejected");
       }
});

Promise4.then((message) => {
    console.log(" First msg : " + message);
    return "Fullfilled Second Message";
}).then((meesage) =>{
   console.log("Second msg : " + meesage);
   return "Fullfilled Third Message"
}).then((message) =>{
    console.log(" Third msg : " + message);
})


// Some catch()

// let Promise3 = new Promise((resolve , reject) => {
//     setTimeout(function name(){
//         console.log(" My Nmae is : Abdul Moiz!!");  
//     }, 10000); // It will take 10sec to execute and while it loads the state will be Pendiong and after completion it would be fullfilled
//     resolve(1);
// })

let Promise5 = new Promise((resolve , reject) =>{
       let success = false;
       if(success){
        resolve("Promise Fullfilled");
       } else{
        reject(" Promise Rejected");
       }
});

Promise5.then((message) => {
    console.log(" First msg : " + message); // Promise Fullfilled
    return "Fullfilled Second Message";
}).then((meesage) =>{
   console.log("Second msg : " + meesage);
   return "Fullfilled Third Message"
}).then((message) =>{
    console.log(" Third msg : " + message);
}).catch((error)=>{
    console.log("Error a gya Bhai:" + error ); 
})
// First msg : Promise Fullfilled
// Second msg : Fullfilled Second Message
//  Third msg : Fullfilled Third Message
// Error a gya Bhai: Promise Rejected

// let name = new Promise((resolve , reject) => {
//     setTimeout(resolve, 1000, "Monday");
// })
// let name2 = new Promise((resolve , reject) => {
//     setTimeout(resolve, 2000, "Tuesday");
// })
// let name3 = new Promise((resolve , reject) => {
//     setTimeout(resolve, 4000, "Wedenesday");
// })


// Promise.all():

let name = new Promise((resolve , reject) => {
    setTimeout(resolve, 1000, "Monday");
})
let name2 = new Promise((resolve , reject) => {
    setTimeout(resolve, 2000, "Tuesday");
})
let name3 = new Promise((resolve , reject) => {
    setTimeout(resolve, 4000, "Wedenesday");
})

Promise.all([name , name2 , name3])
    .then((values) => {
        console.log(values);
    }).catch((error) => {
        console.log("error : " + error);
    })
    // [ 'Monday', 'Tuesday', 'Wedenesday' ]

// Promise.race();

const fetchData1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data from API 1"), 3000);
  });
  
  const fetchData2 = new Promise((resolve, reject) => {
    setTimeout(() => reject("API 2 failed"), 2000);
  });
  
  const fetchData3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data from API 3"), 1000);
  });
  
  // Using Promise.race
  Promise.race([fetchData1, fetchData2, fetchData3])
    .then(result => {
      console.log("First settled promise:", result);
    })
    .catch(error => {
      console.error("First settled promise failed:", error);
    });
  // First Reolved : Monday