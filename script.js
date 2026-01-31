products = [
  {
    id: 1,
    name: "Smartphone X",
    title: "Smartphone X Pro",
    description: "High-performance smartphone with OLED display.",
    price: 799,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    quantity: 1,
  },
  {
    id: 2,
    name: "Laptop Air",
    title: "Ultra Slim Laptop",
    description: "Lightweight laptop for work and gaming.",
    price: 1299,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    quantity: 1,
  },
  {
    id: 3,
    name: "Bluetooth Headphones",
    title: "Wireless Noise Cancelling",
    description: "Immersive sound with deep bass.",
    price: 199,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    quantity: 1,
  },
  {
    id: 4,
    name: "Smartwatch",
    title: "Fitness Smartwatch 2025",
    description: "Tracks health metrics all day.",
    price: 149,
    image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b",
    quantity: 1,
  },
  {
    id: 5,
    name: "Gaming Keyboard",
    title: "RGB Mechanical Keyboard",
    description: "Blue switch mechanical keyboard.",
    price: 89,
    image: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68",
    quantity: 1,
  },
  {
    id: 6,
    name: "Samrt Watch",
    title: "Ergonomic Pro Mouse",
    description: "Precision sensor and programmable buttons.",
    quantity: 1,
    price: 49,
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&q=80",
    quantity: 1,
  },
  {
    id: 7,
    name: "4K Monitor",
    title: "Ultra HD 27-inch Monitor",
    description: "Sharp and vivid colors for work and gaming.",
    price: 399,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    quantity: 1,
  },
  {
    id: 8,
    name: "DSLR Camera",
    title: "Professional DSLR Camera",
    description: "High-quality photography tool.",
    price: 999,
    image:
      "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500&q=80",
    quantity: 1,
  },
  {
    id: 9,
    name: "Wireless Speaker",
    title: "Portable Bluetooth Speaker",
    description: "Crystal clear sound on the go.",
    price: 59,
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&q=80",
    quantity: 1,
  },
  {
    id: 10,
    name: "KeyBoard Pro",
    title: "10-inch HD Tablet",
    description: "Perfect for study, movies, and work.",
    price: 349,
    image:
      "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=500&q=80",
    quantity: 1,
  },
  {
    id: 11,
    name: "Speaker",
    title: "Virtual Reality Set",
    description: "Immersive VR gaming experience.",
    price: 299,
    image:
      "https://images.unsplash.com/photo-1591405351990-4726e331f141?w=500&q=80",
    quantity: 1,
  },
  {
    id: 12,
    name: "Drone",
    title: "4K Camera Drone",
    description: "Perfect aerial photography.",
    price: 499,
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    quantity: 1,
  },
  {
    id: 13,
    name: "Wireless Charger",
    title: "Wireless Earbuds",
    description: "With active noise cancellation.",
    price: 129,
    image:
      "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=500&q=80",
    quantity: 1,
  },
  {
    id: 14,
    name: "SSD HardDesk",
    title: "Fast Charging 20000mAh",
    description: "Charge devices multiple times.",
    price: 39,
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80",
    quantity: 1,
  },
  {
    id: 15,
    name: "Power Bank",
    title: "50-inch 4K Smart TV",
    description: "Netflix, YouTube, and more built-in.",
    price: 699,
    image:
      "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500&q=80",
    quantity: 1,
  },
];
//svgheart variable to add it to innerHTML easily
var svgHeart = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
</svg>`;
//Checking if certain elements exist in a webpage to initiate certain script
var inputElm = document.querySelector("#searchInput");
if (inputElm) {
  filteredProductsCreation();
}
var productsContainer = document.querySelector("#productsContainer");
if (productsContainer) {
  productDivsCreation(products);
}
var cartLink = document.querySelector("#cart");
var cartProducts = JSON.parse(localStorage.getItem("cart")) || [];
var cartContainer = document.querySelector("#cartContainer");
if (cartContainer) {
  cartDivsCreation();
}

var favProducts = [];
var tableCreated = false;
//Creating the products layout
function productDivsCreation(arr) {
  //Creating the row divs
  for (let i = 0; i < 3; i++) {
    var divRow = document.createElement("div");
    divRow.classList.add("divRows");
    divRow.id = "row" + [i];
    productsContainer.appendChild(divRow);
  }
  //Looping over each row to fill it with 5 products
  for (let i = 0; i < arr.length; i++) {
    var productDiv = document.createElement("div");
    var productDescription = document.createElement("div");
    productDiv.classList.add("productCard");
    productDescription.classList.add("productDescription");
    //Product content creation
    var productImg = document.createElement("img");
    productImg.src = arr[i].image;
    var productName = document.createElement("h2");
    productName.innerText = arr[i].title;
    var productPrice = document.createElement("p");
    productPrice.innerText = "$" + arr[i].price;
    var productCartButton = document.createElement("button");
    productCartButton.innerText = "Add to cart";
    productCartButton.id = "cart" + [i];
    productCartButton.addEventListener("click", (e) => {
      e.preventDefault();
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      console.log(arr[i]);
      cart.push(arr[i]);
      localStorage.setItem("cart", JSON.stringify(cart));
      alert("Added to cart!");
    });

    var productFavButton = document.createElement("button");
    productFavButton.innerHTML = svgHeart;
    productFavButton.id = "fav" + [i];
    productFavButton.addEventListener("click", () => {
      favProducts.push(arr[i]);
      alert("Added to favorites !");
    });
    //Appending product card content:
    productDiv.appendChild(productImg);
    productDiv.appendChild(productDescription);
    productDescription.appendChild(productName);
    productDescription.appendChild(productPrice);
    productDescription.appendChild(productCartButton);
    productDescription.appendChild(productFavButton);
    productDiv.id = "prod" + arr[i].id;
    var divRowOne = document.querySelector("#row0");
    var divRowTwo = document.querySelector("#row1");
    var divRowThree = document.querySelector("#row2");
    if (i < 5) {
      divRowOne.appendChild(productDiv);
    } else if (i < 10) {
      divRowTwo.appendChild(productDiv);
    } else divRowThree.appendChild(productDiv);
  }
  tableCreated = true;
}

//creating product divs based on filtered products (searched products)
function filteredProductsCreation() {
  inputElm.addEventListener("input", function (e) {
    var searchValue = e.target.value.toLowerCase();
    productsContainer.innerHTML = "";
    if (searchValue === "" && tableCreated === false) {
      productDivsCreation(products);
    }
    var filteredProducts = [];
    for (let i = 0; i < products.length; i++) {
      if (products[i].title.toLowerCase().includes(searchValue)) {
        filteredProducts.push(products[i]);
      }
    }
    productDivsCreation(filteredProducts);
  });
}

//cart products

function cartDivsCreation() {
  cartContainer.innerHTML = "";
  for (let i = 0; i < 3; i++) {
    var divRow = document.createElement("div");
    divRow.classList.add("divRows");
    divRow.id = "row" + [i];
    cartContainer.appendChild(divRow);
  }
  for (let i = 0; i < cartProducts.length; i++) {
    var productDiv = document.createElement("div");
    productDiv.id = "cartProd" + cartProducts[i].id;
    var productDescription = document.createElement("div");
    productDiv.classList.add("productCard");
    productDescription.classList.add("productDescription");
    var productImg = document.createElement("img");
    productImg.src = cartProducts[i].image;
    var productName = document.createElement("h2");
    productName.innerText = cartProducts[i].title;
    var productPrice = document.createElement("p");
    productPrice.innerText = "$" + cartProducts[i].price;

    var quantityContainer = document.createElement("div");
    quantityContainer.classList.add("quantityContainer");

    const quantityNumber = document.createElement("span");
    quantityNumber.innerText = "1";
    var productSubtractButton = document.createElement("button");
    productSubtractButton.innerText = "-";

    var productAddButton = document.createElement("button");
    productAddButton.innerText = "+";

    //Adding at max 3
    const subtotalDetails = document.createElement("p");
    var subtotalPriceAdd =
      cartProducts[i].price * Number(quantityNumber.innerText);

    subtotalDetails.innerText = "Subtotal: $" + subtotalPriceAdd;
    productAddButton.addEventListener("click", function () {
      const currentQuantity = Number(quantityNumber.innerText);
      if (currentQuantity < 3) {
        quantityNumber.innerText = currentQuantity + 1;
        subtotalDetails.innerText =
          "Subtotal: $" + cartProducts[i].price * Number(currentQuantity + 1);
        cartProducts[i].quantity++;
        calculateTotal();
        //adding the subtotal to Total value
        // var currentSubtotalAdded =
        //   cartProducts[i].price * Number(currentQuantity + 1);
        // totalValue += currentSubtotalAdded;

        // console.log(totalValue);
      }
    });

    //Subtracting products if there is at least more than 1
    productSubtractButton.addEventListener("click", function () {
      //checking which button is being pressed to add and sub
      const currentQuantity = Number(quantityNumber.innerText);
      if (currentQuantity > 1) {
        quantityNumber.innerText = currentQuantity - 1;
        subtotalDetails.innerText =
          "Subtotal: $" + cartProducts[i].price * Number(currentQuantity - 1);
        cartProducts[i].quantity--;
        calculateTotal();
        // var currentSubtotalSubtracted =
        //   cartProducts[i].price * Number(currentQuantity - 1);
        // totalValue -= currentSubtotalSubtracted;

        // console.log(totalValue);
      }
    });
    //removing element form DOM and localstorage
    var removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    removeButton.addEventListener("click", function () {
      var removeParentCont = this.parentElement.parentElement;
      removeParentCont.remove();
      //filtering from cart products array based on product id
      cartProducts = cartProducts.filter(
        (item) => item.id !== cartProducts[i].id,
      );
      localStorage.setItem("cart", JSON.stringify(cartProducts));
      calculateTotal();
    });

    //Appending
    productDiv.appendChild(productImg);
    productDiv.appendChild(productDescription);
    productDescription.appendChild(productName);
    productDescription.appendChild(productPrice);
    productDescription.appendChild(quantityContainer);
    quantityContainer.appendChild(productSubtractButton);
    quantityContainer.appendChild(quantityNumber);
    quantityContainer.appendChild(productAddButton);
    productDescription.appendChild(subtotalDetails);
    productDescription.appendChild(removeButton);
    var divRowOne = document.querySelector("#row0");
    var divRowTwo = document.querySelector("#row1");
    var divRowThree = document.querySelector("#row2");
    if (i < 5) {
      divRowOne.appendChild(productDiv);
    } else if (i < 10) {
      divRowTwo.appendChild(productDiv);
    } else divRowThree.appendChild(productDiv);
    //Calculating total of all products:
    var totalPorductsValue = document.createElement("h3");
    function calculateTotal() {
      let total = 0;
      cartProducts.forEach((product) => {
        const qty = product.quantity || 1;
        total += Number(product.price) * qty;
      });

      totalPorductsValue.innerText = "Total: $" + total.toFixed(2);
      var totalContainer = document.querySelector("#totalContainer");
      totalContainer.appendChild(totalPorductsValue);
    }

    // totalValue += subtotalPriceAdd;
    // console.log(totalValue);
    // totalPorductsValue.innerText = "Total: $" + totalValue;
  }
  calculateTotal();
}
