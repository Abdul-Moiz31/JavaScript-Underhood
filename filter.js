// Before we dive into these we should know what is Foreach
//  Syntax of For Each 
// var array = [1,2,3];
// array.forEach(function(i){
//   console.log(i);
// });

// Converting a for loop to forEach


const items = ["item1", "item2", "item3"];
const copyItems = [];

// before -> Simple for Loop
for (let i = 0; i < items.length; i++) {
  copyItems.push(items[i]);
  
}
// console.log(items)

// after -> For each
items.forEach((item) => {
  copyItems.push(item);
//   console.log(items)  
  /* OUTPUT : [ 'item1', 'item2', 'item3' ]
  [ 'item1', 'item2', 'item3' ]
  [ 'item1', 'item2', 'item3' ]*/
});

// Filter 
const myNum = [1 , 2 , 3 , 4, , 5];
const newNum = myNum.filter((num)=>{
     return num > 4 
    
    
})
console.log(newNum); //[ 5 ]

const newNum1 = myNum.filter((num) =>{
 return num > 2;
})
console.log(newNum1); //  [ 3, 4, 5 ]

const newNum2 = myNum.filter((num)=>{
  return num >1
})
console.log(newNum2); //  [ 2, 3, 4, 5 ]

//  Lets try with the some Real thing 

const Team = [
    {title:"GDSC Lead" , Name:"Moiz" , Semster: 7 , Skills:"Full Stack Dev" }, 
    {title:"GDSC Co-Lead" , Name:"Aqib" , Semster: 5 , Skills:"Full Stack Dev" }, 
    {title:"Technical Lead" , Name:"ALi" , Semster: 2 , Skills:"FrontEnd Dev" }, 
    {title:"Content Lead" , Name:"Ahmad" , Semster: 5 , Skills:"Content Writer" },
    {title:"Web Lead" , Name:"Rehman" , Semster: 4 , Skills:"Backend Dev" },  
    {title:"Design Lead" , Name:"Iqra" , Semster: 5 , Skills:"Graphic Design" }, 
];

const GDSCteam = Team.filter((gdsc) => {
    return gdsc.Semster===5;
})
// console.log(GDSCteam);

const GDSCteam1 = Team.filter((gdsc) => {
    return gdsc.Semster >=2 ;
})
console.log(GDSCteam1);
