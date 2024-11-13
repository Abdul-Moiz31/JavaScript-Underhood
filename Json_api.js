// Structuring & Destructuring 

const course ={
    coursename : " Hello Javascript",
    price: "999",
    courseInstructor:"Ali"
}

// course.courseInstructor ( Avoid using this method )

const{courseInstructor} = course;

console.log(courseInstructor)

// Destructiuring 
const navbar = ({company} )=> {

}

/* ++++++++++++++++++++++++ API'S ++++++++++++++++++++++++*/

// All the valure come in Json Files , APis arer under javascript Notations

// {
//     "name":"Moiz",
//    "coursename": "Hello World",
// }
[
    {},
    {},
    {},
]