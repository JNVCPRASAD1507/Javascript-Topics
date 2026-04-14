// Task 1: E-commerce Cart Total
// 👉 Scenario: You are building a shopping cart
// let cart = [
//   {name: "Shirt", price: 500, qty: 2},
//   {name: "Shoes", price: 1500, qty: 1},
//   {name: "Cap", price: 300, qty: 3}
// ]
// ✅ Tasks:
// Calculate total price using reduce
// Print only products above 1000 price using filter
// Get all product names in uppercase using map

// let cart = [
//   {name: "Shirt", price: 500, qty: 2},
//   {name: "Shoes", price: 1500, qty: 1},
//   {name: "Cap", price: 300, qty: 3}
// ]

// let totalPrice = cart.reduce((acc,cur) => acc + (cur.price * cur.qty) , 0)
// console.log(totalPrice); //3400

// let above1K = cart.filter(item => item.price > 1000)
// console.log(above1K[0]); //{name: 'Shoes', price: 1500, qty: 1}
// console.log(above1K);


// let upper = cart.map(item => item.name.toUpperCase())
// console.log(upper); //  ['SHIRT', 'SHOES', 'CAP']


//----------------------------------------------------------------------------------------------------------------------

// 🚀 Task 2: Student Result System
// 👉 Scenario: School result processing
// let students = [
//   {name: "Arun", marks: 85},
//   {name: "Bala", marks: 45},
//   {name: "Charan", marks: 60},
//   {name: "Divya", marks: 30}
// ]
// ✅ Tasks:
// Find failed students (marks < 50)
// Check if any student got distinction (>80) using some
// Check if all students passed (>35) using every
// Find first student who failed using find

// let students = [
//   {name: "Arun", marks: 85},
//   {name: "Bala", marks: 45},
//   {name: "Charan", marks: 60},
//   {name: "Divya", marks: 30}
// ]

// let failed = students.filter(item => item.marks < 50 )
// {
//     // what i need to add to get the failed students
// }
// console.log(failed);

// let distinction = students.some(item => item.marks > 80 )
// console.log(distinction);

// let passed = students.every(item => item.marks > 35)
// console.log("All the Students are above 35" , passed)

// let firstFailed = [...students].find(item => item.marks < 50)
// console.log(firstFailed.name)


//----------------------------------------------------------------------------------------------------------------------

// 🚀 Task 3: Employee Salary Analysis
// 👉 Scenario: HR dashboard
// let employees = [
//   {name: "A", salary: 25000},
//   {name: "B", salary: 40000},
//   {name: "C", salary: 15000},
//   {name: "D", salary: 50000}
// ]
// ✅ Tasks:
// Increase salary by 10% using map
// Get employees with salary > 30000
// Calculate total salary expense
// Sort employees by highest salary

// let employees = [
//   {name: "A", salary: 25000},
//   {name: "B", salary: 40000},
//   {name: "C", salary: 15000},
//   {name: "D", salary: 50000}
// ]

// let hike = employees.map(sal => sal.salary*1.1)
// console.log(hike); // [27500.000000000004, 44000, 16500, 55000.00000000001]

// let above30K = employees.filter(sal => sal.salary > 30000)
// console.log(above30K); // {name:"B",name : "D"}

// let totalSal = employees.reduce((sum,emp)=> sum + emp.salary,0)
// console.log(totalSal)

// let highSal = employees.sort((a,b)=> b.salary - a.salary)
// console.log(highSal[0]); // {name: 'D', salary: 50000}
// console.log(highSal);


//----------------------------------------------------------------------------------------------------------------------

// 🚀 Task 4: String Real Use Case (Search System)
// 👉 Scenario: Search feature
// let products = ["Laptop", "Mobile", "Tablet", "Camera"]
// ✅ Tasks:
// Check if "Mobile" exists using includes
// Convert all to lowercase
// Find index of "Tablet"
// Convert array to string using join("-")

// let products = ["Laptop", "Mobile", "Tablet", "Camera"]
// console.log(products)

// let include =products.includes("Mobile")
// console.log(include)

// let str = products.join("-")
// console.log(str)

// let indexe = products.indexOf("Tablet")
// console.log(indexe)

// let lowercase = products.map(item => item.toLowerCase())
// console.log(lowercase)

// let finding = products.find(item => item === "Camera")
// console.log(finding)

//----------------------------------------------------------------------------------------------------------------------

// 🚀 Task 5: Date Real-Time Task (Age Calculator)
// 👉 Scenario: User profile
// ✅ Tasks:
// Take DOB (hardcode or prompt)
// Calculate current age
// Print:
// You are 22 years old

// let dob = new Date(prompt("Enter U r DOB : "))

// let currentAge = new Date();

// let age = currentAge.getFullYear() - dob.getFullYear()

// console.log(`you are ${age} years old`)

//----------------------------------------------------------------------------------------------------------------------

// 🚀 Task 6: Login Validation System
// 👉 Scenario: Basic login check
// let users = [
//   {username: "admin", password: "1234"},
//   {username: "user", password: "abcd"}
// ]
// ✅ Tasks:
// Check if user exists using find
// Validate username & password
// Print:
// "Login Success ✅"
// "Invalid Credentials ❌"

// let users = [
//   {username: "admin", password: "1234"},
//   {username: "user", password: "abcd"}
// ];

// let inputname = prompt("Enter username:");
// let inputPass = prompt("Enter password:");

// let existUser = users.find(
//   user => user.username === inputname
// );

// if (existUser && existUser.password === inputPass) {
//   console.log("Login Success ✅");
// } else {
//   console.log("Invalid Credentials ❌");
// }

//----------------------------------------------------------------------------------------------------------------------

// 🚀 Task 7: Even Number Analyzer
// let numbers = [10, 15, 20, 25, 30]
// ✅ Tasks:
// Get all even numbers
// Check if any odd number exists
// Check if all numbers are even
// Find first number > 20

// let numbers = [10, 15, 20, 25, 30]

// let even = numbers.filter(num => num%2===0)
// console.log(even)

// let oddExist = numbers.some(num => num%2 !== 0)
// console.log(oddExist)

// let evenExist = numbers.every(num => num%2 === 0)
// console.log(evenExist)

// let firstHighNum =  numbers.find(num => num >20)
// console.log(firstHighNum)

//----------------------------------------------------------------------------------------------------------------------

// 🎯 Bonus Challenge (🔥 Interview Level)
// 👉 Combine everything
// let orders = [
//   {id: 1, amount: 500, status: "delivered"},
//   {id: 2, amount: 1500, status: "pending"},
//   {id: 3, amount: 2000, status: "delivered"}
// ]
// ✅ Tasks:
// Total revenue of delivered orders
// Get all pending orders
// Check if any order > 1000
// Sort orders by amount (ascending)

// let orders = [
//     {id: 4, amount: 500, status: "pending"},
//   { id: 2, amount: 1500, status: "pending" },
//   { id: 3, amount: 2000, status: "delivered" },
//   { id: 1, amount: 500, status: "delivered" },
  
// ];

// let totalRev = orders
//   .filter((order) => order.status === "delivered")
//   .reduce((sum, order) => sum + order.amount, 0);

// console.log(totalRev); //2500

// let pending = orders.filter((order) => order.status === "pending");

// console.log(pending); // {id:2, amt:1500 , status : pending}

// let checkOrder = orders.some((order) => order.amount > 1000);
// console.log(checkOrder); // true

// let sorting = orders.sort((a,b) => a.amount - b.amount)

// console.log(sorting); // {...}

