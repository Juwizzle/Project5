/* Create an array of  7 fruits and print the fruit on even number index using a loop.

*/

// Create an array of 7 fruits and print the fruit on even number index using a loop.

let fruitArray = ['Lemon',"Apple",'Orange',"Grape",'Banana',"Almond",'Pineaaple'];
for(let fruit = 0; fruit < fruitArray.length; fruit+=2) {
    console.log(`The Fruits with the index are ${fruit}`);
};

//  Create an object representing a student and print their details.

let student = {name:"James Bond",Matric_No:63383,age:21,
    faculty:{Department:'Computer Science', Level:200},
    Nationality: {Continent:'Asia',origin: 'Chinese'} ,
    others:{sex:'Male',complexion:'Fair'},
}
//console.log(student);
console.log(`The student named ${student.name} with Matric NO ${student.Matric_No} is age ${student.age}
and in level ${student.faculty.Level} studying ${student.faculty.Department}. He is a ${student.Nationality.origin} 
man from ${student.Nationality.Continent}. He is a ${student.others.sex} and ${student.others.complexion} in complexion. `)
console.log(`The student's name is ${student.name} with Matric No >>>${student['Matric_No']}`);

//Create a function that accepts an array of 7 numbers and returns the sum.
function arrayOfSevenNumber(num1,num2,num3,num4,num5,num6,num7){
    return [num1+num2+num3+num4+num5+num6+num7];
}
console.log(`The sum of array of seven numbers is ${arrayOfSevenNumber(1,1,1,1,1,1,1)}`);

/* Create a JavaScript function named getUserDetails that takes a user object as an argument and returns a formatted string.
const user = { name: "Alice", age: 25, role: "QA Engineer" };"Alice is 25 years old and works as a QA Engineer." */

const user = { name: "Alice", age: 25, role: "QA Engineer" };
function getUserDetails(user){
};
console.log(`${user.name} is ${user['age']} years old and works as a ${user.role}`);




