// Section 1: Printing & User Interaction
//=======================================
// Print your name and designation in the console.
let name = "Prasad"
let designation = "developer"
console.log(name+" is "+designation)
console.log("Name : Prasad")  // Name :  Prasad
console.log("Designation : developer"); // Designation : developer

// Show an alert saying "Welcome to JavaScript Session".

// alert("Welcome to JavaScript Session") // Welcome to JavaScript Session

// Ask the user: "Do you like coding?" using confirm() and print the result.

// var a="Do u like Coding"
// var b=confirm(a)  // Do u like Coding - ok
// console.log(b) //true

// Take user input for favorite food using prompt() and print it.

// let a = prompt("Which fruit do u like most")
// console.log(a); // gauva

// Display "Good Evening Team" on the UI using document.writeln().

// document.writeln("Good Evening Team") // Good Evening Team

////-----------------------------------------------------------------------------------------------------------------------------

// 🔹 Section 2: Console Methods
//===============================

// Print a number using console.log().
// const a = 89
// console.log(a); //89


// Print a warning message: "This is a warning".

// console.warn("This is warning");

// Print an error message: "Something went wrong!".

// console.error("this is an error");

// Clear the console after printing 3 messages.

// console.log("1");
// console.log("2");
// console.log("3");
// console.clear()

////-----------------------------------------------------------------------------------------------------------------------------

// 🔹 Section 3: Data Types
//==========================

// Create a variable with your name and print its type.

// let name = "surya"
// console.log(typeof(name)); // Type = String

// Store your age and print the datatype.

// var age=22
// console.log(typeof(age)); //   Type = number

// Store a boolean value (true/false) and print it.

// let bool = true
// let fool = false
// console.log(bool); // True
// console.log(typeof(fool)); // Type = Boolean

// Declare a variable without value and print it.

// let a;
// console.log(a); // undefined

// Assign null to a variable and print it.

// let k = null
// console.log(k); // null

////-----------------------------------------------------------------------------------------------------------------------------

// 🔹 Section 4: Arrays
//======================

// Create an array of 5 fruits and print it.

// let array = ["apple" , "banana" , "gauva" , "mango" , "tomato"]
// console.log(array); // ['apple', 'banana', 'gauva', 'mango', 'tomato']

// Print the first and last element of the array.

// let element = ["apple" , "banana" , "gauva" , "mango" , "tomato"]
// console.log(element[0] , "and" , element[element.length-1]); //apple and tomato

// Add one more fruit dynamically and print updated array.

// let fruits = ["apple" , "banana" , "cherry" , "jack fruit" , "Orange"]
// console.log(fruits.push("Mango"))
// console.log(fruits); // ['apple', 'banana', 'cherry', 'jack fruit', 'Orange', 'Mango']

// Remove the last element and print array.

// let element = ["apple" , "banana" , "gauva" , "mango" , "tomato"]
// console.log(element.pop()); // tomato
// console.log(element); // ['apple', 'banana', 'gauva', 'mango']

// Find the length of the array.

// let size = ["apple" , "banana" , "gauva" , "mango" , "tomato"]
// console.log(size.length); //5

////----------------------------------------------------------------------------------------------------------------------------

// 🔹 Section 5: Objects
//======================= 
// Create an object for a student (name, age, course).

// const student ={
//     name:"Prasad",
//     age:22,
//     course:"Developer",
//     college:"Sasi Engineering College"
// }
// console.log(student);

// Print the student name.

// console.log(student.name) // Prasad

// Add a new property (college) dynamically.

// console.log(student.college ="Sri Engineering College") //Sri Engineering College

// Access nested array inside object (like your fruit example).

// student.skills = ["HTML", "CSS", "JavaScript"];
// console.log(student.skills[0]); // HTML

// Update a property value.

// student.course = "c# Developer";
// console.log(student.course);



////-----------------------------------------------------------------------------------------------------------------------------

// 🔹 Section 6: Operators
//=========================
// Add two numbers and print result.

// console.log(2+3); //5

// Subtract two numbers.

// console.log(2-3); //-1

// Multiply two numbers.

// console.log(2*3); //6

// Divide two numbers.

// console.log(2/3); //0.6666666

// Find remainder using %.

// console.log(2%3); //2

// Use exponent operator (**) to find power.

// console.log(2**3); // 2x2x2=8

////-----------------------------------------------------------------------------------------------------------------------------

// 🔹 Section 7: Increment & Decrement
//=====================================
// Create a variable and use post increment.

// let a=1
// console.log(a++) // currently 1 then increment for the next time 
// console.log(a) // 2 

// Create a variable and use pre increment.

// let b=2
// console.log(++b) // value update immediately

// Show difference between num++ and ++num.

// num++(post increment):-- First returns the current value then increment
// ++num(pre increment):--  first increments then give the updated value

// Use decrement operator and print values.

// let b=7
// console.log(b--); // 7-- = 7  currently 1 then decrement takes action
// console.log(--b); //--6 means 6-1 =5  decrement first and update the value


// Predict output before running (important logic task 👇)

// let a = 5;
// let b = a++;
// let c = ++a;

// console.log(a);  7
// console.log(b); 5
// console.log(c); 7

////-----------------------------------------------------------------------------------------------------------------------------

// 🔹 Section 8: Real-Time Logic Tasks
//=====================================

// Ask user age and check if eligible to vote.

// let age = prompt("Enter your age:");

// if (age >= 18) {
//     console.log("You are eligible to vote"); // 18+ u r eligible
// } else {
//     console.log("You are not eligible to vote"); // below 18 u r not
// }

// Ask user name and greet: "Hello Naveen".

// let name = prompt("Enter your name:");
// let age = prompt("Enter your age:");
// console.log("Hello " + name); //Hello prasad
// console.log(" u r just " , age); // u r just  20
// console.log("Hello " + name ," u r just " , age); // Hello prasad  u r just  20


// Store marks in array and print highest value.

// let marks = [78, 85, 92, 67, 88];

// let highMarks = Math.max(...marks);
// console.log("High marks:", highMarks);

// Create object for fruits category (like your example) and access values.

// let fruits = {
//     yellowColor: ["mango", "banana"],
//     orangeColor: ["orange"],
//     redColor: ["apple", "strawberry"]
// };

// console.log(fruits.yellowColor[1]); //banana
// console.log(fruits.orangeColor[0]); // orange
// console.log(fruits.redColor[1]);   // strawberry

// Combine prompt + array:
// Ask user to enter 3 favorite fruits
// Store in array
// Print them

// let f1 = prompt("first fruit:");
// let f2 = prompt("second fruit:");
// let f3 = prompt("third fruit:");

// let favFruits = [f1, f2, f3];

// console.log(favFruits); // ['grapes', 'papaya', 'karbuja']

////-----------------------------------------------------------------------------------------------------------------------------