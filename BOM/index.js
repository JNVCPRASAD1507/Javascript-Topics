// 📌 Requirements
// 1. Fetch Data
// Use API:
// https://fakestoreapi.com/products
// Use fetch() with .then() or async/await

// let api = fetch("https://fakestoreapi.com/products/1");
// console.log(api);

// api
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

////====================================================================================================================

// 2. Display Products
// For each product:
// Show:
// Product Title (limit to 20 chars)
// Product Image
// Description (limit to 60 chars)
// Price button

////====================================================================================================================

// 3. UI Design
// Use Flexbox or Grid
// Cards should look clean and aligned
// Add:
// Border radius
// Spacing
// Hover effect (scale or shadow)

////====================================================================================================================

// 4. Error Handling
// If API fails:
// Show "Error loading data" in red color
// 🔥 Level Up (Important for evaluation)
// ⭐ Task 1: Loader
// Show "Loading..." before API loads
// Remove after data is displayed
// ⭐ Task 2: Search Filter
// Add an input box
// Filter products based on title (real-time typing)
// ⭐ Task 3: Price Sorting
// Add buttons:
// Sort Low → High
// Sort High → Low
// ⭐ Task 4: Category Filter
// Add dropdown:
// electronics
// jewelery
// men's clothing
// women's clothing
// ⭐ Task 5: View Details
// Add "View More" button
// Show full details in:
// Modal OR
// New page

let allProducts = [];
let filteredProducts = [];

async function products() {

  let box = document.getElementById("products");

  box.innerHTML = "<h2>Loading...</h2>";

  try {

    let api = await fetch("https://fakestoreapi.com/products");
    let data = await api.json();

    allProducts = data;
    filteredProducts = data;

    displayProducts(filteredProducts);

  } catch (error) {

    box.innerHTML =
      "<h2 style='color:red'>Error loading data</h2>";

    console.log(error);
  }
}

function displayProducts(items) {

  let box = document.getElementById("products");

  box.innerHTML = "";

  if (items.length === 0) {
    box.innerHTML = "<h2>No Products Found</h2>";
    return;
  }

  items.forEach((product) => {

    box.innerHTML += `
      <div class="card">
        <h3>${product.title.slice(0,20)}</h3>
        <img src="${product.image}" width="150">
        <p>${product.description.slice(0,60)}...</p>
        <button>$${product.price}</button>
        <button onclick="viewDetails(${product.id})">
          View More
        </button>
      </div>
    `;

  });
}

document.getElementById("search")
.addEventListener("input", function () {

  let value = this.value.toLowerCase();

  filteredProducts = allProducts.filter((item) =>
    item.title.toLowerCase().includes(value)
  );

  displayProducts(filteredProducts);
});

function sortLow() {

  filteredProducts.sort((a, b) => a.price - b.price);

  displayProducts(filteredProducts);
}

function sortHigh() {

  filteredProducts.sort((a, b) => b.price - a.price);

  displayProducts(filteredProducts);
}

function filterCategory() {

  let value = document.getElementById("category").value;

  if (value === "all") {
    filteredProducts = allProducts;
  } else {
    filteredProducts = allProducts.filter((item) =>
      item.category === value
    );
  }

  displayProducts(filteredProducts);
}

function viewDetails(id) {

  let product = allProducts.find((item) => item.id === id);

  document.getElementById("modal").style.display = "flex";

  document.getElementById("modalData").innerHTML = `
    <h2>${product.title}</h2>
    <img src="${product.image}" width="200">
    <p>${product.description}</p>
    <h3>Price: $${product.price}</h3>
    <h4>Category: ${product.category}</h4>
  `;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

products();
