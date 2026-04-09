// Task 1: E-Commerce Discount System
// Concepts: function, parameters, return, condition
// 👉 Build a function:
// Input: product name, price
// Apply:
// If price > 1000 → 20% discount
// Else → 10% discount
// Return final price
// 👉 Example:
// calculateDiscount("Shoes", 2000)
// 👉 Output:
// Product: Shoes
// Final Price: 1600

function ecommerce(productName, price) {
  let Discount = 0;

  if (price > 1000) {
    Discount = (20 * price) / 100;
  } else {
    Discount = (10 * price) / 100;
  }
  let finalPrice = price - Discount;
    console.log(`Product: ${productName}  Final Price: ${finalPrice}`);
  return finalPrice;
}
ecommerce("Redtape", 2000)

//=============================================================================================
// 🔹 Task 2: Order Processing using Callback
// Concepts: callback, higher order function
// 👉 Create:
// placeOrder(callback)
// payment(amount)
// orderSuccess()
// 👉 Flow:
// Place order
// Call payment
// Then success message
// 👉 Expected Output:
// Order placed
// Payment of 500 successful
// Order delivered

// function payment(amount,call) {
//     console.log(`payment of ${amount} successful`)
//     call();     
// }

// function delivery(){
//     console.log("order delivered")
// }

// function placeOrder(call){
//     console.log("order Placed")
//     // call(500, delivery())  // just pass the reference not to execute function
//      call(500, delivery)
// }

// placeOrder(payment)

//=============================================================================================
// 🔹 Task 3: Employee Data Loop System
// Concepts: for loop, array, object
// 👉 Create an array of employees:
// [
//  {name:"Navi", salary:50000},
//  {name:"John", salary:70000}
// ]
// 👉 Task:
// Loop and print:
// Salary > 60000 → "High Salary"
// Else → "Normal Salary"

// let employeeData = [
//   { name: "chinna", salary: 80000 },
//   { name: "sindhu", salary: 59999 },
// ];

// for (let i in employeeData){
//     if (employeeData[i].salary > 60000){
//         console.log(employeeData[i].name , "High Salry")
//     }else{
//         console.log(employeeData[i].name , "Normal Salary")
//     }
// }

// chinna High Salry
// sindhu Normal Salary

//=============================================================================================
// 🔹 Task 4: Login Attempts (While Loop)
// Concepts: while loop
// 👉 Scenario:
// User has max 3 login attempts
// If correct password → stop loop
// Else → keep asking
// 👉 Output:
// Attempt 1
// Attempt 2
// Login success

// let correctPassword = "1234";
// let attempt = 1;
// let maxAttempts = 3;

// while (attempt <= maxAttempts) {
    
//     let enteredPassword = attempt === 2 ? "1234" : "wrong";

//     console.log(`Attempt ${attempt}`);

//     if (enteredPassword === correctPassword) {
//         console.log("Login success");
//         break;
//     }

//     attempt++;
// }

//=============================================================================================
// 🔹 Task 5: Coupon Generator (Generator Function)
// Concepts: generator
// 👉 Create offers:
// 10% OFF
// 20% OFF
// Free Delivery
// Cashback
// 👉 Task:
// Show one offer at a time when user clicks button (simulate with .next())

// function* offers() {
//     yield "10% OFF";
//     yield "20% OFF";
//     yield "Free Delivery";
//     yield "Cashback";
// }

// let generator = offers();

// console.log(generator.next().value);
// console.log(generator.next());
// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next());

//=============================================================================================
// 🔹 Task 6: Shopping Cart Total (for...of)
// Concepts: for...of
// 👉 Input:
// let cart = [100, 200, 300, 400]
// 👉 Task:
// Calculate total bill
// Print final amount

// let cart = [100, 200, 300, 400]
// let total=0
// for ( let a of cart){
//     total = total+a
//    // console.log(total)
// }
//  console.log(total)

//=============================================================================================
// 🔹 Task 7: User Profile System (for...in)
// Concepts: object loop
// 👉 Input:
// let user = {
//   name: "Navi",
//   role: "Developer",
//   location: "India"
// }
// 👉 Task:
// Print:
// name : Navi
// role : Developer
// location : India

//  let userData = {
//   name: "Prasad",
//   role: "Developer",
//   location: "India"
// }

// for (let data in userData){
//     console.log(data ," : ", userData[data])
// }
// name  :  Prasad
// role  :  Developer
// location  :  India

//=============================================================================================
// 🔹 Task 8: Factory Pattern (Function Reuse)
// Concepts: return, reuse
// 👉 Build:
// createPhone()
// createBattery()
// createCharger()
// 👉 Combine:
// Your Order: Phone + Battery + Charger

// function createPhone() {
//   return "phone";
// }
// function createBattery() {
//   return "battery";
// }
// function createCharger() {
//   return "charger";
// }

// function createOrder() {
//   return {
//     phone: createPhone(),
//     battery: createBattery(),
//     charger: createCharger(),
//   };
// }
// const order = createOrder();

// console.log("Your Order:");
// console.log(order);

// console.log(`your order : ${createPhone()} + ${createCharger()} + ${createBattery()}`,); // your order : phone + charger + battery

//=============================================================================================
// 🔹 Task 9: College Form with Default Values
// Concepts: default parameters
// 👉 If department not given:
// Department: Not Assigned

// function college(name,department="not assigned"){
//     // return {
//     //     name : name,
//     //     department : department
//     // }
//     return `Name : ${name} and Department is ${department} `
// }
// console.log(college("Prasad"))

//=============================================================================================
// 🔹 Task 10: Currying - EMI Calculator
// Concepts: currying
// 👉 Structure:
// emi(principal)(rate)(time)
// 👉 Formula:
// EMI = (P * R * T) / 100
// 👉 Example:
// emi(10000)(2)(12)

// function emi(p) {
//   return function time(t) {
//     return function rate(r) {
//         return (emi = (p * t * r) / 100);
//       };
//     };
// }

// console.log(emi(10000)(12)(2)); //2400

//=============================================================================================
// 🔹 Task 11: Even/Odd Analyzer
// Concepts: loop + condition
// 👉 Print:
// 1 → Odd
// 2 → Even
// ...
// 10 → Even

// for(i=0;i<=10;i++){
//     if (i%2!=0){
//         console.log(i,"odd")
//     }else{
//         console.log(i,"even")
//     }
// }

//=============================================================================================
// 🔹 Task 12: Function Scope Debugging
// Concepts: var, let, const
// 👉 Ask students:
// // Why var works outside block?

// it follows the global scope and function scope.and it is also follows the hoisting.

// // Why let/const fails?

// they execute within the block only.
// outside the function they won't works. these are the block scope.they show the reference error.

//=============================================================================================
// 🔹 Task 13: Real-Time Alert System (IIFE)
// Concepts: IIFE
// 👉 Create:
// Sale announcement auto runs
// 🔥 Flash Sale: 50% OFF on Shirts

// (function autoRun(){
//     console.log(" 👌 Flash Sale: 50% OFF on Shirts")    
// }())

//=============================================================================================
// 🔹 Task 14: Marks Calculator with Return
// Concepts: return
// 👉 Input:
// marks(80, 90, 70)
// 👉 Output:
// Total: 240
// Average: 80

// let marks = [20,24,19]
// let total = 0

// for(let i in marks){
//     total = total + marks[i]
//     // avg = total/3
// }
// let avg =total/marks.length
// console.log(total)
// console.log(avg)

//=============================================================================================
// 🔹 Task 15: Retry Offer System (Generator + Condition)
// Concepts: generator + done
// 👉 If offers finished:
// All offers expired

// function* offers() {
//     yield "10% OFF";
//     yield "20% OFF";
//     yield "Free Delivery";
// }

// let generator = offers();

// let result = generator.next();

// while (!result.done) {
//     console.log(result.value);
//     result = generator.next();
// }

// console.log("All offers expired");
