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
    totalPrice = totalPrice + product.price;
  }

  this.total = totalPrice;
};

let shoppingCartInstance = new ShoppingCart();

// Testing list of products

// Add a product ID. Products will be stored in this list, then displayed with a function. When an user clicks a product it will reference the object in this list throught the ID.

let productDatabase = [
  {
    name: "Ducky Shine 3 Yellow",
    description:
      "Yellow Ducky is a special Shine 3, clad with yellow engraved PBT keycaps with yellow casing.",
    price: 155.0,
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
    price: 119.0,
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
    price: 162.0,
    img: "../img/product_keyboard_varmilo_beijingopera.png",
    id: 03,
    brand: "Varmilo",
    model: "Beijing Opera",
    category: "Keyboard",
  },
  {
    name: "Ducky Shine 3 Yellow",
    description:
      "Yellow Ducky is a special Shine 3, clad with yellow engraved PBT keycaps with yellow casing.",
    price: 155.0,
    img: "../img/product_keyboard_ducky_shine3yellow.png",
    id: 04,
    brand: "Ducky",
    model: "Shine 3 Yellow",
    category: "Keyboard",
  },
  {
    name: "Ducky Mecha Mini",
    description:
      "The Ducky One 2 Mini Mecha is everything you love about the classic One 2 Mini wrapped in one of the most beautifully balanced frames ever used in a keyboard.",
    price: 119.0,
    img: "../img/product_keyboard_ducky_mechamini.png",
    id: 05,
    brand: "Ducky",
    model: "Mecha Mini",
    category: "Keyboard",
  },
  {
    name: "Varmilo Beijing Opera",
    description:
      "Varmilo keyboard with a traditional Chinese opera design, with red, white and gold accents.",
    price: 162.0,
    img: "../img/product_keyboard_varmilo_beijingopera.png",
    id: 06,
    brand: "Varmilo",
    model: "Beijing Opera",
    category: "Keyboard",
  },
];

// Product Builder Fucntion, returns a div element of the product in the argument
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

  /*
  const productElement__name = document.createElement("div");
  productElement__name.classList = "product__name";
  productElement__name.innerHTML = product.name;
  
  const productElement__description = document.createElement("div");
  productElement__description.classList = "product__description";
  productElement__description.innerHTML = product.description;
  */

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

  //productElement.appendChild(productElement__name);
  //productElement.appendChild(productElement__description);
  productElement.appendChild(productElement__model);
  productElement.appendChild(productElement__brand);
  productElement.appendChild(productElement__price);
  productElement.appendChild(productElement__img);
  productElement.appendChild(productElement__id);
  productElement.appendChild(productElement__category);

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

// WIP Shopping Cart
document.querySelectorAll(".product").forEach((item) => {
  item.addEventListener("click", addToCart);
});

console.log(shoppingCartInstance);

function getShopCartData() {
  const shoppingCart = document.querySelector(".shopping-cart");
  const cartItems = shoppingCart.querySelector(".shopping-cart__products");
  const total = shoppingCart.querySelector(".shopping-cart__total");

  shoppingCart.querySelector(".shopping-cart__products").innerHTML = "";
  for (product of shoppingCartInstance.cartProducts) {
    let productLi = document.createElement("li");
    productLi.innerHTML = product.name + " - $" + product.price;

    shoppingCart
      .querySelector(".shopping-cart__products")
      .appendChild(productLi);
  }

  shoppingCartInstance.calculateTotal();
  total.innerHTML = "$" + shoppingCartInstance.total;
}

getShopCartData();

function addToCart(e) {
  // Get the shopping cart HTML element
  const shoppingCart = document.querySelector(".shopping-cart");

  // Get the id of the product the user clicked, push item correspoding to id into the cart
  const selectedProductID = e.target.querySelector(".product__id").dataset
    .product__id;
  for (item of productDatabase) {
    if (item.id == selectedProductID) {
      shoppingCartInstance.cartProducts.push(item);
    }
  }

  getShopCartData();
}
