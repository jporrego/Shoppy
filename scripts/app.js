// Product constructor

function Product(name, description, price, img, id, brand, model, category) {
  this.name = name;
  this.description = description;
  this.price = price;
  this.img = img;
  this.id = id;
  this.brand = brand;
  this.model = model;
  this.category = category;
}

// Shopping cart constructor

function ShoppingCart() {
  this.total = 0;
  this.cartProducts = [];
}

ShoppingCart.prototype.calculateTotal = function () {
  let totalPrice = 0;

  for (product of this.cartProducts) {
    totalPrice = totalPrice + product[1].price * product[0];
  }

  this.total = parseFloat(totalPrice.toFixed(2));
};

ShoppingCart.prototype.calculateNumberOfItems = function () {
  let numItems = 0;

  for (product of this.cartProducts) {
    numItems = numItems + product[0];
  }

  return numItems;
};

let shoppingCartInstance = new ShoppingCart();

// Testing list of products

// Products will be stored in this list, then displayed with a function. When an user clicks a product it will reference the object in this list throught the ID.

let productDatabase = [
  {
    name: "Ducky Shine 3 Yellow",
    description:
      "Yellow Ducky is a special Shine 3, clad with yellow engraved PBT keycaps with yellow casing.",
    price: 155.99,
    img: "../img/product_keyboard_ducky_shine3yellow.png",
    id: 01,
    brand: "Ducky",
    model: "Shine 3 Yellow",
    category: "Keyboard",
  },
  {
    name: "Ducky Mecha Mini",
    description:
      "The Ducky One 2 Mini Mecha is everything you love about the classic One 2 Mini wrapped in one of the most beautifully balanced frames ever used in a keyboard.",
    price: 119.99,
    img: "../img/product_keyboard_ducky_mechamini.png",
    id: 02,
    brand: "Ducky",
    model: "Mecha Mini",
    category: "Keyboard",
  },
  {
    name: "Varmilo Beijing Opera",
    description:
      "Varmilo keyboard with a traditional Chinese opera design, with red, white and gold accents.",
    price: 162.99,
    img: "../img/product_keyboard_varmilo_beijingopera.png",
    id: 03,
    brand: "Varmilo",
    model: "Beijing Opera",
    category: "Keyboard",
  },
  {
    name: "Varmilo VA87M Radiation",
    description: "Varmilo VA87M Radiation mechanical keyboard with white LEDs.",
    price: 129.99,
    img: "../img/product_keyboard_varmilo_radiation.png",
    id: 04,
    brand: "Varmilo",
    model: "VA87M Radiation",
    category: "Keyboard",
  },
  {
    name: "Leopold FC750R Grey/Blue",
    description:
      "Leopold FC750R Grey/Blue PD TKL Double Shot PBT Mechanical Keyboard.",
    price: 119.99,
    img: "../img/product_keyboard_leopold_fc750re.png",
    id: 05,
    brand: "Leopold",
    model: "FC750R Grey/Blue",
    category: "Keyboard",
  },
  {
    name: "Razer Nari Essential Wireless Headset",
    description:
      "Razer Nari Essential Wireless THX Spatial Audio Gaming Headset for PC and PlayStation 4.",
    price: 89.99,
    img: "../img/product_headset_razer_nariessential.png",
    id: 06,
    brand: "Razer",
    model: "Nari Essential",
    category: "Headset",
  },
];

// Product Builder Function, returns a div element of the product in the argument
function createProduct(prod) {
  // Create product object
  const product = new Product(
    prod.name,
    prod.description,
    prod.price,
    prod.img,
    prod.id,
    prod.brand,
    prod.model,
    prod.category
  );

  // Create product HTML element with a class of "product", and add its components
  const productElement = document.createElement("div");
  productElement.classList = "product";

  const productElement__model = document.createElement("div");
  productElement__model.classList = "product__model";
  productElement__model.innerHTML = product.model;

  const productElement__brand = document.createElement("div");
  productElement__brand.classList = "product__brand";
  productElement__brand.innerHTML = product.brand;

  const productElement__price = document.createElement("div");
  productElement__price.classList = "product__price";
  productElement__price.innerHTML = `$${product.price}`;

  const productElement__img = document.createElement("img");
  productElement__img.classList = "product__img";
  productElement__img.src = product.img;

  const productElement__id = document.createElement("div");
  productElement__id.classList = "product__id";
  productElement__id.dataset.product__id = product.id;

  const productElement__category = document.createElement("div");
  productElement__category.classList = "product__category";
  productElement__category.dataset.product__category = product.category;

  const productElement__addBtn = document.createElement("div");
  productElement__addBtn.classList = "product__add-btn";
  productElement__addBtn.innerHTML = "+";

  //productElement.appendChild(productElement__name);
  //productElement.appendChild(productElement__description);
  productElement.appendChild(productElement__model);
  productElement.appendChild(productElement__brand);
  productElement.appendChild(productElement__price);
  productElement.appendChild(productElement__img);
  productElement.appendChild(productElement__addBtn);
  productElement.appendChild(productElement__id);
  /*
  productElement.appendChild(productElement__category);
  */

  return productElement;
}

// Function that adds all objects to UI
function populateUI() {
  for (prod of productDatabase) {
    // Calls "createProduct" on each product of the databse, then appends it to the container
    document.querySelector(".products").appendChild(createProduct(prod));
  }
}

populateUI();

// ----------- Shopping Cart -----------
document.querySelectorAll(".product__add-btn").forEach((item) => {
  item.addEventListener("click", addToCart);
});

// Creates the HTML for an object in the Shopping Cart
function createShoppingCartProductHTML(cartProduct) {
  // --- Create HTML element for product in cart, append it to the shopping cart list ---
  // Create base div element
  const shoppingCartProductElement = document.createElement("div");
  shoppingCartProductElement.classList =
    "shopping-cart-modal__product-list__product";

  // Create "img" element
  const shoppingCartProductElement__img = document.createElement("img");
  shoppingCartProductElement__img.classList =
    "shopping-cart-modal__product-list__product__img";
  shoppingCartProductElement__img.src = cartProduct[1].img;

  // Create "name" element
  const shoppingCartProductElement__name = document.createElement("div");
  shoppingCartProductElement__name.classList =
    "shopping-cart-modal__product-list__product__name";
  shoppingCartProductElement__name.innerHTML = cartProduct[1].name;

  // Create "price" element
  const shoppingCartProductElement__price = document.createElement("div");
  shoppingCartProductElement__price.classList =
    "shopping-cart-modal__product-list__product__price";
  shoppingCartProductElement__price.innerHTML = "$" + cartProduct[1].price;

  // Create remove button element
  const shoppingCartProductElement__removeBtn = document.createElement("div");
  shoppingCartProductElement__removeBtn.classList =
    "shopping-cart-modal__product-list__product__remove-btn";
  shoppingCartProductElement__removeBtn.innerHTML = "x";
  shoppingCartProductElement__removeBtn.addEventListener(
    "click",
    removeCartItem
  );

  // Create quantity selector
  const shoppingCartProductElement__qty = document.createElement("div");
  shoppingCartProductElement__qty.classList =
    "shopping-cart-modal__product-list__product__qty-selector";
  // Increase qty button
  const shoppingCartProductElement__qty__arrowup = document.createElement(
    "img"
  );
  shoppingCartProductElement__qty__arrowup.classList =
    "shoppingCartProductElement__qty-selector__arrow-up";
  shoppingCartProductElement__qty__arrowup.src = "../img/arrUp.png";
  shoppingCartProductElement__qty__arrowup.addEventListener(
    "click",
    increaseQty
  );
  //Decrease qty button
  const shoppingCartProductElement__qty__arrowDown = document.createElement(
    "img"
  );
  shoppingCartProductElement__qty__arrowDown.classList =
    "shoppingCartProductElement__qty-selector__arrow-down";
  shoppingCartProductElement__qty__arrowDown.src = "../img/arrDwn.png";
  shoppingCartProductElement__qty__arrowDown.addEventListener(
    "click",
    decreaseQty
  );
  // Item qty counter
  const shoppingCartProductElement__qty__counter = document.createElement(
    "div"
  );
  shoppingCartProductElement__qty__counter.classList =
    "shoppingCartProductElement__qty-selector__counter";
  shoppingCartProductElement__qty__counter.innerHTML = cartProduct[0];

  // Appends all elements to qty selector
  shoppingCartProductElement__qty.appendChild(
    shoppingCartProductElement__qty__arrowup
  );
  shoppingCartProductElement__qty.appendChild(
    shoppingCartProductElement__qty__counter
  );
  shoppingCartProductElement__qty.appendChild(
    shoppingCartProductElement__qty__arrowDown
  );

  // Create id dataset
  const shoppingCartProductElement__id = document.createElement("div");
  shoppingCartProductElement__id.classList = "product__id";
  shoppingCartProductElement__id.dataset.product__id = cartProduct[1].id;

  shoppingCartProductElement.appendChild(shoppingCartProductElement__img);
  shoppingCartProductElement.appendChild(shoppingCartProductElement__name);
  shoppingCartProductElement.appendChild(shoppingCartProductElement__price);
  shoppingCartProductElement.appendChild(shoppingCartProductElement__removeBtn);
  shoppingCartProductElement.appendChild(shoppingCartProductElement__id);
  shoppingCartProductElement.appendChild(shoppingCartProductElement__qty);

  return shoppingCartProductElement;
}

// Gets number of items and total price in Shopping Cart, adds html for products inside the Shopping Cart
function getShopCartData() {
  // Creates html element for each product in cart, adds it to modal cart list
  const shoppingCartList = document.querySelector(
    ".shopping-cart-modal__product-list"
  );
  shoppingCartList.innerHTML = "";
  for (const cartProduct of shoppingCartInstance.cartProducts) {
    shoppingCartList.appendChild(createShoppingCartProductHTML(cartProduct));
  }

  // Updates number of items icon in cart icon
  document.querySelector(
    ".navbar__shoppingCart__number"
  ).innerHTML = shoppingCartInstance.calculateNumberOfItems();

  // Calculates the total in the shopping cart
  shoppingCartInstance.calculateTotal();
  document.querySelector(
    ".shopping-cart-modal__content__total__price"
  ).innerHTML = "$" + shoppingCartInstance.total;
}
// Calls "getShopCartData" when first loading the page
getShopCartData();

// Adds clicked product to cart instante, then calls "getShopCartData" so it will be displayed
function addToCart(e) {
  // Get the shopping cart HTML element -- not used--
  const shoppingCart = document.querySelector(".shopping-cart");

  // Get the id of the product the user clicked, push item correspoding to id into the cart
  const selectedProductID = e.target.parentElement.querySelector(".product__id")
    .dataset.product__id;
  for (item of productDatabase) {
    if (item.id == selectedProductID) {
      let itemCount = 0;
      if (shoppingCartInstance.cartProducts.length > 0) {
        for (const product of shoppingCartInstance.cartProducts) {
          if (product[1].id === item.id) {
            itemCount++;
          }
        }
      }
      if (itemCount === 0) {
        let qtyItemObj = [1, item];
        shoppingCartInstance.cartProducts.push(qtyItemObj);
      } else if (itemCount > 0) {
        for (const product of shoppingCartInstance.cartProducts) {
          if (product[1].id === item.id) {
            product[0]++;
          }
        }
      }
    }
  }

  getShopCartData();
}

function removeCartItem(e) {
  console.log(shoppingCartInstance.cartProducts);
  const productToRemoveId = e.target.parentElement.querySelector(".product__id")
    .dataset.product__id;
  console.log(productToRemoveId);
  shoppingCartInstance.cartProducts = shoppingCartInstance.cartProducts.filter(
    (x) => x[1].id != productToRemoveId
  );

  console.log(shoppingCartInstance.cartProducts);
  getShopCartData();
}

function increaseQty(e) {
  const productId = e.target.parentElement.parentElement.querySelector(
    ".product__id"
  ).dataset.product__id;

  for (const product of shoppingCartInstance.cartProducts) {
    if (product[1].id == productId) {
      product[0]++;
    }
  }
  getShopCartData();
}

function decreaseQty(e) {
  const productId = e.target.parentElement.parentElement.querySelector(
    ".product__id"
  ).dataset.product__id;

  for (const product of shoppingCartInstance.cartProducts) {
    if (product[1].id == productId) {
      if (product[0] > 1) {
        product[0]--;
      } else if (confirm("Do you want to remove this product?")) {
        shoppingCartInstance.cartProducts = shoppingCartInstance.cartProducts.filter(
          (x) => x[1].id != productId
        );
      }
    }
  }
  getShopCartData();
}

// Gets the Shopping Cart HTML element and calls "openCartModal" when clicked
document
  .querySelector(".navbar__shoppingCart__select-area")
  .addEventListener("click", openCartModal);

document
  .querySelector(".shopping-cart-modal")
  .addEventListener("click", closeShoppingCartModal);

function openCartModal(e) {
  const shoppingCartModal = document.querySelector(".shopping-cart-modal");
  shoppingCartModal.classList.add("shopping-cart-modal--show");
}

function closeShoppingCartModal(e) {
  const shoppingCartModal = document.querySelector(".shopping-cart-modal");
  if (e.target === shoppingCartModal) {
    shoppingCartModal.classList.remove("shopping-cart-modal--show");
  }
}
