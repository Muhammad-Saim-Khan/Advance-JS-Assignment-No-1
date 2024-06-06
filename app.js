// Assignment No 1 (ES6) Start

// Q1
let name = "John Doe";
let email = "john.doe@example.com";
let city = "Lahore";
let education = "ABC";
let occupation = "Software Developer";
let phoneNumber = "123-456-7890";
let instituteName = "Jawan Pakistan";

let biodata = `
 <b> Name: ${name}</br>
  Age: 30</br>
  Occupation: ${occupation}</br>
  Email: ${email}</br>
  Phone Number: ${phoneNumber}</br>
  Institute Name: ${instituteName}</br>
  Education: ${education} </br> </br></b>
`;

document.write(biodata);

// Q2
let maths = 80;
let english = 75;
let science = 90;
let computerScience = 85;
let totalMarks = maths + english + science + computerScience;
let percentage = (totalMarks / 400) * 100;

let grade = "";
if (percentage >= 80) {
  grade = "A";
} else if (percentage >= 60) {
  grade = "B";
} else if (percentage >= 40) {
  grade = "C";
} else {
  grade = "F";
}

let bioData = `
 <b> Marks: </br>
  Maths: ${maths} </br>
  English: ${english} </br>
  Science: ${science} </br>
  Computer Science: ${computerScience} </br>
  Total Marks: ${totalMarks} </br>
  Percentage: ${percentage}%  </br>
  Grade: ${grade}</b>
`;

document.write(bioData);

// Q3
// global scope

// var is global scope
var Name = "Saim";
{
  var Name = "Muhammad";
  console.log(Name);
}
console.log(Name);

// let is not global scope
let Name = "Saim";
{
  let Name = "Muhammad";
  console.log(Name);
}
console.log(Name);

// const is not global scope
const Name = "Saim";
{
  const Name = "Muhammad";
  console.log(Name);
}
console.log(Name);

// block scope

// var is not block scope scope
var Name = "Saim";
{
  var Name = "Muhammad";
  console.log(Name);
}
console.log(Name);

// let is black scope
let Name = "Saim";
{
  let Name = "Muhammad";
  console.log(Name);
}
console.log(Name);

// const is block scope
const Name = "Saim";
{
  const Name = "Muhammad";
  console.log(Name);
}
console.log(Name);

// reassigned

// // var can rassigned
var Name = "Muhammad";
Name = "Saim";
document.write(Name);

// const cant reassigned
const Name = "Muhammad";
Name = "Saim";
document.write(Name);

// let can reassigned
let Name = "Muhammad";
Name = "Saim";
document.write(Name);

// recreate
// // var can recreate
var Name = "Saim";
var Name = "Muhammad";
document.write(Name);

// let cant recreate
let Name = "Saim";
let Name = "Muhammad";
document.write(Name);

// const cant recreate
const Name = "Saim";
const Name = "Muhammad";
document.write(Name);

// hoisted

// // var can be hoisted
console.log(nameone);
var nameone = "faraz";

// // let cant be hoisted
console.log(nameone);
let nameone = "faraz";

// // const cant be hoisted
console.log(nameone);
const nameone = "faraz";

// function scope

// // var is functionnal scope
function Name() {
  var a = "Muhammad";
  document.write(a);
}
Name();

// // let is functionnal scope
function Name() {
  let a = "Muhammad";
  document.write(a);
}
Name();

// // const is functionnal scope
function Name() {
  const a = "Muhammad";
  document.write(a);
}
Name();

// Assignment No 1 (ES6) End
