// 🧩 Task 1: E-commerce Cart System
// Concepts: spread, array methods, object manipulation
// 👉 Build a cart system:
// Requirements:
// Add products to cart using push
// Remove last added product using pop
// Merge two carts using spread
// Calculate total price
// let cart1 = [
//   {name: "Shirt", price: 500},
//   {name: "Shoes", price: 1500}
// ]

// let cart2 = [
//   {name: "Watch", price: 2000}
// ]
// 👉 Task:
// Merge both carts
// Add 1 new product
// Remove last product
// Find total price


// let cart1 = [
//   { name: "Shirt", price: 500 },
//   { name: "Shoes", price: 1500 }
// ];

// let cart2 = [
//   { name: "Watch", price: 2000 }
// ];

// let merge = [...cart1, ...cart2];

// merge.push({ name: "Cap", price: 300 });

// merge.pop();

// let total = merge.reduce((sum, item) => sum + item.price, 0);

// console.log("Cart Data : ", merge);
// console.log("Total:", total);


//===================================================================================================

// 🧩 Task 2: User Profile Management
// Concepts: object spread, destructuring
// 👉 You are building a profile update feature
// let user = {
//   name: "Naveen",
//   role: "Trainee",
//   salary: 20000
// }

// let update = {
//   role: "Developer",
//   salary: 50000
// }
// 👉 Task:
// Merge user + update using spread
// Destructure name, role, salary
// Print formatted output:
// 👉 "Naveen is now a Developer earning 50000"

// let user = {
//   name: "Prasad",
//   role: "Trainee",
//   salary: 20000
// };

// let update = {
//   role: "Developer",
//   salary: 500000
// };

// let updated = { ...user, ...update };


// let { name, role, salary } = updated;

// console.log(`${name} is now a ${role} earning ${salary}`);

//===================================================================================================

// 🧩 Task 3: Function with Rest Operator (Team Score System)
// Concepts: rest operator
// 👉 Create a function:
// function teamScore(teamName, ...scores)
// 👉 Task:
// Print team name
// Print all scores
// Find total score
// Find highest score



// function teamScore(teamName, ...scores) {
//     let total = scores.reduce((sum, addScore) => sum + addScore, 0);
//     let highest = Math.max(...scores);

//     console.log("Team:", teamName);
//     console.log("Scores:", scores);
//     console.log("Total:", total);
//     console.log("Highest:", highest);
// }
// teamScore("Mumbai Indians", 150, 190, 170, 230);

//===================================================================================================

// 🧩 Task 4: Nested Data Extraction (API Response Simulation)
// Concepts: nested destructuring
// let apiData = {
//   user: {
//     name: "Naveen",
//     address: {
//       city: "Bangalore",
//       pincode: 560001
//     }
//   }
// }
// 👉 Task:
// Extract name, city, pincode using destructuring
// Print:
// 👉 "Naveen lives in Bangalore - 560001"

// let apiData = {
//   user: {
//     name1: "Prasad",
//     address: {
//       city: "Hyderabad",
//       pincode: 510001
//     }
//   }
// };

// let {
//   user: {
//     name1,
//     address: { city, pincode }
//   }
// } = apiData;

// console.log(`${name1} lives in ${city} - ${pincode}`);

//===================================================================================================

// 🧩 Task 5: Array Dashboard (Admin Panel)
// Concepts: splice, slice, includes, indexOf
// let users = ["A", "B", "C", "D", "E"]
// 👉 Task:
// Remove "C" and "D" using splice
// Add "X", "Y" in same place
// Get only first 3 users using slice
// Check if "B" exists
// Find index of "E"

// let users = ["A", "B", "C", "D", "E"];

// users.splice(2, 2, "x", "y");

// let slice = users.slice(0, 3);

// let include = users.includes("b");
// let include1 = users.includes("B");

// let index = users.indexOf("E");

// console.log(users);
// console.log(slice);
// console.log("Include b:", include);
// console.log("Include B:", include1);
// console.log("Index of E:", index);

//===================================================================================================

// 🧩 Task 6: Data Cleaning Tool
// Concepts: flat, filter, type handling
// let messyData = [1, 2, [3, 4, [5]], null, undefined, "hello"]
// 👉 Task:
// Convert to flat array
// Remove null and undefined
// Output clean array

// let messyData = [1, 2, [3, 4, [5]], null, undefined, "hello"];

// let cleanArr = messyData.flat(Infinity)  // [1, 2, 3, 4, 5, null, undefined, 'hello']

// let cleanArr1=cleanArr.filter(value => value !==null && value!== undefined)
  

// console.log(cleanArr1);  //  [1, 2, 3, 4, 5, 'hello']

//===================================================================================================

// 🧩 Task 7: Sorting Bug Fix (Real Industry Issue ⚠️)
// Concepts: sort()
// let prices = [1000, 200, 50, 5000]
// 👉 Task:
// Sort correctly in ascending order
// Explain why default sort fails

// let prices = [1000, 200, 50, 5000];

// let sort = prices.sort()
// console.log(sort);  // [1000, 200, 50, 5000]


// prices.sort((a, b) => a - b);
// console.log(prices);   // [50, 200, 1000, 5000]

//===================================================================================================

// 🧩 Task 8: Analytics Report Generator
// Concepts: reduce (important for real jobs)
// let orders = [
//   {id:1, amount:100},
//   {id:2, amount:200},
//   {id:3, amount:300}
// ]
// 👉 Task :
// Find total revenue
// Find average order value

// let orders = [
//   { id: 1, amount: 100 },
//   { id: 2, amount: 200 },
//   { id: 3, amount: 300 }
// ];

// // Total revenue
// let total = orders.reduce((sum, add) => sum + add.amount, 0);

// // Average
// let avg = total / orders.length;

// console.log("Total:", total);  //Total: 600
// console.log("Average:", avg);  //Average: 200

//===================================================================================================

// 🧩 Task 9: Inventory System (Advanced)
// Concepts: combine everything
// 👉 Build:
// Add items
// Remove items
// Update item using splice
// Search item using includes
// Merge inventory

// let array = ["apple", "banana"];

// // Add items
// array.push("orange");

// console.log(array); //['apple', 'banana', 'orange']

// // Remove item
// array.splice(array.indexOf("banana"), 1);

// console.log(array); ['apple', 'orange']

// // Update item
// let index = array.indexOf("apple");

// console.log(index); // 0

// array.splice(0, 1, "green apple");

// console.log(array.includes("orange"));

// array = [...array, "mango", "grapes"];

// console.log(array);  // ['green apple', 'orange', 'mango', 'grapes']

//===================================================================================================

// 🧩 Task 10: Interview Level Challenge 🔥
// 👉 Create a function:
// function processData(...data)
// Input:
// processData(1,2,[3,4],[5,[6]])
// 👉 Task:
// Flatten all values
// Remove duplicates
// Sort ascending
// Return final array

// function processData(...data){
//     let flat = data.flat(Infinity)
//     console.log(flat)   

//     let unique = new Set (flat)
//     console.log(unique)

//     let ascending = [...unique].sort((a,b)=>a-b);
//     return ascending;
// }

// let finalArray = processData(1,2,[3,3,4,4],[5,[6]])

// console.log(finalArray)


