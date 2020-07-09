// ------------------------------------- Product constructor -------------------------------------

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

// ------------------------------------- Shopping cart constructor -------------------------------------

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

// ------------------------------------- Product Database -------------------------------------

// Products will be stored in this list, then displayed with a function. When an user clicks a product it will reference the object in this list throught the ID.

let productDatabase = [
  {
    name: "Ducky Shine 3 Yellow",
    description:
      "Yellow Ducky is a special Shine 3, clad with yellow engraved PBT keycaps with yellow casing.",
    price: 155.99,
    img: "./img/product_keyboard_ducky_shine3yellow.png",
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
    img: "./img/product_keyboard_ducky_mechamini.png",
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
    img: "./img/product_keyboard_varmilo_beijingopera.png",
    id: 03,
    brand: "Varmilo",
    model: "Beijing Opera",
    category: "Keyboard",
  },
  {
    name: "Varmilo VA87M Radiation",
    description: "Varmilo VA87M Radiation mechanical keyboard with white LEDs.",
    price: 129.99,
    img: "./img/product_keyboard_varmilo_radiation.png",
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
    img: "./img/product_keyboard_leopold_fc750re.png",
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
    img: "./img/product_headset_razer_nariessential.png",
    id: 06,
    brand: "Razer",
    model: "Nari Essential",
    category: "Headset",
  },
  {
    name: "HyperX Cloud Alpha Pro Gaming Headset",
    description:
      "The Cloud Alpha headset builds upon HyperX’s foundation of signature award-winning comfort with premium red memory foam, expanded headband and softer, more pliable leatherette.",
    price: 99.99,
    img: "./img/product_headset_hyperx_cloudalpha.png",
    id: 07,
    brand: "HyperX",
    model: "HyperX Cloud Alpha",
    category: "Headset",
  },
  {
    name: "SteelSeries Arctis Pro Wireless Headset",
    description:
      "The Arctis Pro headset features premium speaker drivers with high-density neodymium magnets that reproduce Hi-Res audio out to 40,000 Hz.",
    price: 329.99,
    img: "./img/product_headset_steelseries_arctisprowireless.png",
    id: 08,
    brand: "SteelSeries",
    model: "Arctis Pro Wireless",
    category: "Headset",
  },
  {
    name: "Recon 200 Headset",
    description:
      "Louder is better! Immerse yourself in your Xbox One and PS4™ games with the Turtle Beach® Recon 200’s powerful amplified audio with Bass Boost.",
    price: 59.99,
    img: "./img/product_headset_turtlebeach_recon200.png",
    id: 09,
    brand: "Turtle Beach",
    model: "Recon 200",
    category: "Headset",
  },
  {
    name: "Elite Atlas Aero Wireless PC Gaming Headset",
    description:
      "The Turtle Beach® Elite Atlas Aero is the ultimate high-performance wireless headset for PC gamers and streamers with customizable audio and unmatched comfort.",
    price: 149.99,
    img: "./img/product_headset_turtlebeach_eliteatlasaerowireless.png",
    id: 10,
    brand: "Turtle Beach",
    model: "Elite Atlas Aero Wireless",
    category: "Headset",
  },
  {
    name: "Razer DeathAdder Elite Gaming Mouse",
    description:
      "Equipped with the new esports-grade 16,000 DPI optical sensor and true tracking at 450 Inches Per Second (IPS), the Razer DeathAdder Elite ergonomic mouse gives you the absolute advantage.",
    price: 69.99,
    img: "./img/product_headset_razer_deathadderelite.png",
    id: 11,
    brand: "Razer",
    model: "DeathAdder Elite",
    category: "Mouse",
  },
  {
    name: "Logitech G203 Prodigy",
    description:
      "Play faster and more accurately than ever before. With gaming-grade performance, you can target more precisely, maneuver more quickly and dominate more opponents.",
    price: 32.99,
    img: "./img/product_headset_logitech_g203prodigy.png",
    id: 12,
    brand: "Logitech",
    model: "G203 Prodigy",
    category: "Mouse",
  },
  {
    name: "Corsair Nightsword",
    description:
      "The CORSAIR NIGHTSWORD RGB PerformanceTunable Gaming Mouse is equipped with a cutting-edge 18,000 DPI optical sensor, sophisticated weight calibration and a real-time center of gravity detection system.",
    price: 79.99,
    img: "./img/product_mouse_corsair_nightsword.png",
    id: 13,
    brand: "Corsair",
    model: "Nightsword",
    category: "Mouse",
  },
  {
    name: 'ASUS ROG Swift PG279Q Black 27"',
    description:
      "The ASUS PG279Q 27-inch monitor boasts stunning 2560 x 1440 resolution and the Republic of Gamers designation, so you know it was built with gamers in mind.",
    price: 899.99,
    img: "./img/product_headset_asus_pg279q.png",
    id: 14,
    brand: "ASUS",
    model: 'ROG Swift PG279Q 27"',
    category: "Monitor",
  },
  {
    name: "Xbox Elite Wireless Controller Series 2",
    description:
      "Improve your play with this Xbox Elite wireless series 2 controller. Swappable thumbsticks and paddle shapes support easy customization, and the integrated Xbox Accessories app provides even more configuration options.",
    price: 179.99,
    img: "./img/product_controller_microsoft_xboxoneeliteseries2.png",
    id: 15,
    brand: "Microsoft",
    model: "Elite Wireless Controller Series 2",
    category: "Controller",
  },
  {
    name: "DualShock 4 Wireless Controller",
    description:
      "Play your favorite video games with this PlayStation 4 DualShock controller. The microUSB port lets you keep it charged and ready to use, and the trigger buttons and controls deliver immediate response on even the most challenging games.",
    price: 59.99,
    img: "./img/product_controller_sony_dualshock4wirelesscontroller.png",
    id: 16,
    brand: "Sony",
    model: "DualShock 4 Wireless",
    category: "Controller",
  },
  {
    name: "Xbox Elite Controller 2 Creeper Edition",
    description:
      "Improve your play with this Xbox Elite wireless series 2 controller, creeper edition. Swappable thumbsticks and paddle shapes support easy customization, and the integrated Xbox Accessories app provides even more configuration options.",
    price: 199.99,
    img: "./img/product_controller_microsoft_xboxoneeliteseries2creeper.png",
    id: 17,
    brand: "Microsoft",
    model: "Elite Controller 2 Creeper Edition",
    category: "Controller",
  },
  {
    name: "Astro Gaming C40 TR Wireless Controller",
    description:
      "Take control of your gaming experience with this Logitech Astro USB controller. The highly durable construction is great for extended sessions, and the fully customizable layout lets you remap each button to mimic any console configuration.",
    price: 199.99,
    img: "./img/product_controller_astro_c40trwirelesscontroller.png",
    id: 18,
    brand: "Astro Gaming",
    model: "C40 TR Wireless Controller",
    category: "Controller",
  },
];

// ------------------------------------- Product Builder Function -------------------------------------

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
  productElement__addBtn.addEventListener("click", addToCart);

  const productElement__infoContainer = document.createElement("div");
  productElement__infoContainer.classList = "product__info-container";

  //productElement.appendChild(productElement__name);
  //productElement.appendChild(productElement__description);
  productElement__infoContainer.appendChild(productElement__model);
  productElement__infoContainer.appendChild(productElement__brand);
  productElement__infoContainer.appendChild(productElement__price);
  productElement.appendChild(productElement__img);
  productElement__infoContainer.appendChild(productElement__addBtn);
  productElement.appendChild(productElement__id);
  productElement.appendChild(productElement__infoContainer);
  productElement.addEventListener("click", productModal);
  productElement.classList.add("noSelect");
  /*
  productElement.appendChild(productElement__category);
  */

  return productElement;
}

function productModal(e) {
  if (
    e.target.classList != "product__add-btn" &&
    e.target.classList != "product__add-btn--green"
  ) {
    // --- Blur Background ---
    const background = document.querySelector(".container");
    background.classList.add("container--blur");
    // --- Prevent body scrolling ---
    const body = document.querySelector("body");
    body.classList.add("body--noscroll");

    const mainContainer = document.querySelector(".container");
    // ------ Get product ID and product ------
    let clickedProdId;
    if (e.target.classList != "product") {
      clickedProdId = e.target.parentElement.querySelector(".product__id")
        .dataset.product__id;
    } else {
      clickedProdId = e.target.querySelector(".product__id").dataset
        .product__id;
    }
    let selectedProduct;
    for (const prod of productDatabase) {
      if (prod.id == clickedProdId) {
        selectedProduct = prod;
      }
    }

    // ------ ------
    const productModalElement = document.createElement("div");
    productModalElement.classList = "product__modal";

    const productModalContent = document.createElement("div");
    productModalContent.classList = "product__modal__content";

    // ------ ------
    const productModalCloseModalBtn = document.createElement("div");
    productModalCloseModalBtn.classList = "product__modal__close-btn";
    productModalCloseModalBtn.innerHTML = "Close";
    productModalCloseModalBtn.addEventListener("click", closeProductModal);

    const productModalImage = document.createElement("img");
    productModalImage.classList = "product__modal__img";
    productModalImage.src = selectedProduct.img;

    const productModalDescription = document.createElement("div");
    productModalDescription.classList = "product__modal__description";

    const productModalName = document.createElement("div");
    productModalName.classList = "product__modal__description__name";
    productModalName.innerHTML = selectedProduct.name;

    const productModalDetails = document.createElement("div");
    productModalDetails.classList = "product__modal__description__details";
    productModalDetails.innerHTML = selectedProduct.description;

    const productModalPrice = document.createElement("div");
    productModalPrice.classList = "product__modal__description__price";
    productModalPrice.innerHTML = "$" + selectedProduct.price;

    const productModalAddBtn = document.createElement("div");
    productModalAddBtn.classList = "product__modal__add-btn";
    productModalAddBtn.innerHTML = "Add to cart";
    productModalAddBtn.addEventListener("click", addToCartFromModal);

    const product__id = document.createElement("div");
    product__id.classList = "product__id";
    product__id.dataset.product__id = clickedProdId;

    // ------ ------

    productModalContent.appendChild(productModalImage);
    productModalContent.appendChild(productModalDescription);

    productModalDescription.appendChild(productModalName);
    productModalDescription.appendChild(productModalDetails);
    productModalDescription.appendChild(productModalPrice);
    productModalDescription.appendChild(productModalAddBtn);
    productModalDescription.appendChild(productModalCloseModalBtn);

    productModalElement.appendChild(productModalContent);
    productModalContent.appendChild(product__id);
    productModalElement.addEventListener("click", closeProductModal);
    mainContainer.appendChild(productModalElement);
  }
}

function closeProductModal(e) {
  // ---
  const productModal = document.querySelector(".product__modal");
  const productModalBtn = document.querySelector(".product__modal__close-btn");
  if (e.target === productModal || e.target === productModalBtn) {
    productModal.remove();
    // --- Remove Blur ---
    const background = document.querySelector(".container");
    const body = document.querySelector("body");
    body.classList.remove("body--noscroll");
    background.classList.remove("container--blur");
  }
}

// ------------------------------------- Shopping Cart -------------------------------------

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
  shoppingCartProductElement__removeBtn.innerHTML = "Remove";
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
  shoppingCartProductElement__qty__arrowup.src = "./img/arrUp.png";
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
  shoppingCartProductElement__qty__arrowDown.src = "./img/arrDwn.png";
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
  // Get the id of the product the user clicked, push item correspoding to id into the cart
  if (e.target.classList == "product__add-btn") {
    const selectedProductID = e.target.parentElement.parentElement.querySelector(
      ".product__id"
    ).dataset.product__id;
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

  // Product Added animation
  e.target.classList = "product__add-btn--green";
  e.target.innerHTML = "Added!";

  setTimeout(restoreBtn, 2000);

  function restoreBtn() {
    e.target.classList = "product__add-btn";
    e.target.innerHTML = "+";
  }
}

function addToCartFromModal(e) {
  // Get the id of the product the user clicked, push item correspoding to id into the cart
  if (e.target.classList == "product__modal__add-btn") {
    const selectedProductID = e.target.parentElement.parentElement.querySelector(
      ".product__id"
    ).dataset.product__id;
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

  // Product Added animation
  e.target.classList = "product__modal__add-btn--green";
  e.target.innerHTML = "Added to cart!";

  setTimeout(restoreBtn, 2000);

  function restoreBtn() {
    e.target.classList = "product__modal__add-btn";
    e.target.innerHTML = "Add to cart";
  }
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
  // --- Blur ---
  const background = document.querySelector(".container");
  background.classList.add("container--blur");
  // --- Prevent body scrolling
  const body = document.querySelector("body");
  body.classList.add("body--noscroll");

  const shoppingCartModal = document.querySelector(".shopping-cart-modal");
  shoppingCartModal.classList.add("shopping-cart-modal--show");
}

function closeShoppingCartModal(e) {
  const shoppingCartModal = document.querySelector(".shopping-cart-modal");
  const shoppingCartModalCloseBtn = document.querySelector(
    ".shopping-cart-modal__content__close"
  );

  if (
    e.target === shoppingCartModal ||
    e.target === shoppingCartModalCloseBtn
  ) {
    const background = document.querySelector(".container");
    const body = document.querySelector("body");
    body.classList.remove("body--noscroll");
    background.classList.remove("container--blur");
    shoppingCartModal.classList.remove("shopping-cart-modal--show");
  }
}

// ------------------------------------- Pagination -------------------------------------
function goToProductPage(e, num) {
  if (e != undefined) {
    scrollToSearchBar();
  }

  document.querySelector(".navbar").style.top = "-100px";
  const pagSelectors = document.querySelector(
    ".products__pagination__selectors"
  );
  for (const item of pagSelectors.children) {
    item.classList = "products__pagination__selectors__number";
  }

  if (e != undefined) {
    e.target.classList = "products__pagination__selectors__number--selected";
  }

  if (num != undefined) {
    for (const item of pagSelectors.children) {
      if (parseInt(item.innerHTML) === num + 1) {
        item.classList = "products__pagination__selectors__number--selected";
      }
    }
  }
  checkSelected();

  if (searchProdList.length === 0) {
    populateUI(orderFilteredProdList(currentProdList));
  } else {
    populateUI(orderFilteredProdList(searchProdList));
  }
}

function buildPagination(prodList) {
  document.querySelector(".products__pagination__selectors").innerHTML = "";

  const numPages = [1];

  for (const prod of prodList) {
    if (!numPages.includes(prod[0])) {
      numPages.push(prod[0]);
    }
  }

  for (const num of numPages) {
    const pagNumber = document.createElement("div");
    if (num === 1) {
      pagNumber.classList = "products__pagination__selectors__number--selected";
    } else {
      pagNumber.classList = "products__pagination__selectors__number";
    }

    pagNumber.innerHTML = num;
    pagNumber.addEventListener("click", goToProductPage);

    document
      .querySelector(".products__pagination__selectors")
      .appendChild(pagNumber);
  }
}

document
  .querySelector(".products__pagination__forward")
  .addEventListener("click", goForward);

function goForward(e) {
  let pagSelectors = e.target.parentElement.querySelector(
    ".products__pagination__selectors"
  ).children;
  let currentPage;
  for (const item of e.target.parentElement.querySelector(
    ".products__pagination__selectors"
  ).children) {
    if (item.classList == "products__pagination__selectors__number--selected") {
      if (parseInt(item.innerHTML) == pagSelectors.length) {
        return;
      } else {
        currentPage = parseInt(item.innerHTML);
      }
    }
  }
  goToProductPage(undefined, currentPage);
}

document
  .querySelector(".products__pagination__back")
  .addEventListener("click", goBackwards);

function goBackwards(e) {
  let currentPage;
  for (const item of e.target.parentElement.querySelector(
    ".products__pagination__selectors"
  ).children) {
    if (item.classList == "products__pagination__selectors__number--selected") {
      if (item.innerHTML == 1) {
        return;
      } else {
        currentPage = parseInt(item.innerHTML) - 2;
      }
    }
  }
  goToProductPage(undefined, currentPage);
}

function checkSelected() {
  let pagSelectors = document.querySelector(".products__pagination__selectors")
    .children;
  const backwardBtn = document.querySelector("#products__pagination__backward");
  const forwardBtn = document.querySelector("#products__pagination__forward");

  backwardBtn.classList = "products__pagination__back";
  forwardBtn.classList = "products__pagination__forward";

  for (const selector of pagSelectors) {
    if (
      selector.classList == "products__pagination__selectors__number--selected"
    ) {
      if (selector.innerHTML == 1) {
        backwardBtn.classList.add("products__pagination--disabled");
      }
      if (selector.innerHTML == pagSelectors.length) {
        forwardBtn.classList.add("products__pagination--disabled");
      }
    }
  }
}

function scrollToSearchBar() {
  document
    .querySelector(".search-bar")
    .scrollIntoView({ behavior: "smooth", block: "start" });
}

// ------------------------------------- Filters -------------------------------------
let currentCategoryFilters = document.querySelectorAll(
  ".products__filter-left__category__form__item"
);
console.log(currentCategoryFilters);
function buildCategoryFilter() {
  const categoryForm = document.querySelector(
    ".products__filter-left__category__form"
  );

  let addedCategories = [];

  for (const prod of productDatabase) {
    if (!addedCategories.includes(prod.category)) {
      const item = document.createElement("div");
      item.classList = "products__filter-left__category__form__item";

      const input = document.createElement("input");
      input.type = "checkbox";
      input.id = prod.category + "_category";
      input.name = prod.category;
      input.value = prod.category;
      input.addEventListener("click", filterProducts);

      const label = document.createElement("label");
      label.for = prod.category;
      label.innerHTML = prod.category;

      item.appendChild(input);
      item.appendChild(label);

      categoryForm.appendChild(item);
      addedCategories.push(prod.category);
    }
  }
}

function buildBrandFilter() {
  const brandForm = document.querySelector(
    ".products__filter-left__brand__form"
  );

  if (brandForm.children.length > 0) {
    for (const brand of brandForm.children) {
      /*brand.children[0].checked = false;*/
    }
  }
  /* Section to filter brands according to the selected category */
  const categories = document.querySelectorAll(
    ".products__filter-left__category__form__item"
  );

  let selectedCategories = [];
  for (const category of categories) {
    if (category.children[0].checked) {
      selectedCategories.push(category.children[0].value);
    }
  }

  let brandsWithintSelectedCategory = [];
  for (const product of productDatabase) {
    if (
      selectedCategories.includes(product.category) &&
      !brandsWithintSelectedCategory.includes(product.brand)
    ) {
      brandsWithintSelectedCategory.push(product.brand);
    }
  }

  if (brandsWithintSelectedCategory[0] === undefined) {
    for (const brand of brandForm.children) {
      if (brand != undefined) {
        brand.style.display = "block";
      }
    }
  } else {
    for (const brand of brandForm.children) {
      if (brand != undefined) {
        if (!brandsWithintSelectedCategory.includes(brand.children[0].value)) {
          brand.style.display = "none";
        } else {
          brand.style.display = "block";
        }
      }
    }
  }

  let addedBrands = [];

  if (brandForm.children[0] === undefined) {
    for (const prod of productDatabase) {
      if (!addedBrands.includes(prod.brand)) {
        const item = document.createElement("div");
        item.classList = "products__filter-left__brand__form__item";

        const input = document.createElement("input");
        input.type = "checkbox";
        input.id = prod.brand + "_brand";
        input.name = prod.brand;
        input.value = prod.brand;
        input.addEventListener("click", filterProducts);

        const label = document.createElement("label");
        label.for = prod.brand;
        label.innerHTML = prod.brand;

        item.appendChild(input);
        item.appendChild(label);

        brandForm.appendChild(item);
        addedBrands.push(prod.brand);
      }
    }
  }
}

window.currentProdList = productDatabase;
window.searchProdList = [];

function buildFilteredProductList(e) {
  const filteredProductsList = [];
  const filterCategory = [];
  const filterBrand = [];

  const filterSelectorsCategory = document
    .querySelector(".products__filter-left__category")
    .querySelectorAll("input");

  for (const input of filterSelectorsCategory) {
    if (input.checked) {
      filterCategory.push(input.value);
    }
  }
  const filterSelectorsBrand = document
    .querySelector(".products__filter-left__brand")
    .querySelectorAll("input");

  for (const input of filterSelectorsBrand) {
    if (input.checked) {
      filterBrand.push(input.value);
    }
  }

  for (const prod of productDatabase) {
    if (filterCategory.length === 0 && filterBrand.length === 0) {
      filteredProductsList.push(prod);
    } else if (
      filterCategory.includes(prod.category) &&
      filterBrand.length === 0
    ) {
      filteredProductsList.push(prod);
    } else if (
      filterBrand.includes(prod.brand) &&
      filterCategory.length === 0
    ) {
      filteredProductsList.push(prod);
    } else if (
      filterCategory.includes(prod.category) &&
      filterBrand.includes(prod.brand)
    ) {
      filteredProductsList.push(prod);
    }
  }
  currentProdList = filteredProductsList;
}

function orderFilteredProdList(prodList) {
  const finalOrderedProductList = [];
  let i = 0;
  let position = 1;
  for (prod of prodList) {
    finalOrderedProductList.push([position, prod]);
    if (i === 7) {
      position++;
      i = -1;
    }
    i++;
  }

  return finalOrderedProductList;
}

function filterProducts() {
  searchProdList = [];
  buildFilteredProductList();
  buildPagination(orderFilteredProdList(currentProdList));
  goToProductPage(undefined, 0);
  populateUI(orderFilteredProdList(currentProdList));
  buildBrandFilter(true);
}

document
  .querySelector(".products__filter-top__menu")
  .addEventListener("click", function () {
    document.querySelector(".products__filter-left").style.display = "grid";
    window.addEventListener("scroll", noScroll);
    const body = document.querySelector("body");
    body.classList.add("body--noscroll");
  });

document
  .querySelector(".products__menu__modal__close-btn")
  .addEventListener("click", function () {
    document.querySelector(".products__filter-left").style.display = "none";
    window.removeEventListener("scroll", noScroll);
    const body = document.querySelector("body");
    body.classList.remove("body--noscroll");
  });

window.addEventListener("resize", function (e) {
  if (window.matchMedia("only screen and (min-width: 39em)").matches) {
    document.querySelector(".products__filter-left").style.display = "grid";
  } else {
    document.querySelector(".products__filter-left").style.display = "none";
  }
});

document
  .querySelectorAll(".navbar__links__a")
  .forEach((x) => x.addEventListener("click", navbarLink));

function navbarLink(e) {
  const categories = document.querySelectorAll(
    ".products__filter-left__category__form__item"
  );
  for (const i of categories) {
    i.children[0].checked = false;
  }

  for (const i of categories) {
    let length = e.target.innerHTML.length;
    if (i.children[0].value == e.target.innerHTML.slice(0, length - 1)) {
      i.children[0].checked = true;
    }
  }

  filterProducts();
  setTimeout(scrollToSearchBar, 100);
}
// ------------------------------------- Search Bar -------------------------------------
const searchBar = document.querySelector(".search-bar");
searchBar.addEventListener("keyup", searchProducts);

function searchProducts(e) {
  if (searchBar.value == "") {
    filterProducts();
  } else {
    searchProductList(currentProdList);
    buildPagination(orderFilteredProdList(searchProdList));
    goToProductPage(undefined, 0);
    checkSelected();
    populateUI(orderFilteredProdList(searchProdList));
  }
}

function searchProductList(currentProdList) {
  const currentSearchProdList = [];

  for (const prod of currentProdList) {
    if (
      prod.brand.toLowerCase().includes(searchBar.value.toLowerCase()) ||
      prod.category.toLowerCase().includes(searchBar.value.toLowerCase()) ||
      prod.model.toLowerCase().includes(searchBar.value.toLowerCase())
    ) {
      currentSearchProdList.push(prod);
    }
  }
  searchProdList = currentSearchProdList;
  console.log(searchProdList);
}

// ------------------------------------- Mobile Navbar -------------------------------------

// ------Hide Navbar When Scrolling --------------
let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  if (document.querySelector(".navbar__menu__modal").style.display != "grid") {
    let currentScrollPos = window.pageYOffset;

    if (currentScrollPos <= 40) {
      document.querySelector(".navbar").style.top = "0px";
    } else if (prevScrollpos > currentScrollPos) {
      document.querySelector(".navbar").style.top = "0px";
    } else {
      document.querySelector(".navbar").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
  }
};

function noScroll() {
  window.scrollTo(0, 0);
}

// ------ Show mobile menu --------------
document
  .querySelector(".navbar__menu__btn")
  .addEventListener("click", openMenuModal);

function openMenuModal(e) {
  const menuModal = document.querySelector(".navbar__menu__modal");

  menuModal.style.display = "grid";

  window.addEventListener("scroll", noScroll);
  const body = document.querySelector("body");
  body.classList.add("body--noscroll");
}
// ------ Hide mobile menu --------------
document
  .querySelector(".navbar__menu__modal__close-btn")
  .addEventListener("click", closeMenuModal);

function closeMenuModal(e) {
  const menuModal = document.querySelector(".navbar__menu__modal");
  const body = document.querySelector("body");

  menuModal.style.display = "none";

  window.removeEventListener("scroll", noScroll);
  body.classList.remove("body--noscroll");
}

// ------------------------------------- Function that adds all objects to UI -------------------------------------
function populateUI(prodList) {
  document.querySelector(".products__list").innerHTML = "";
  for (const prod of prodList) {
    if (
      prod[0] ==
      document.querySelector(
        ".products__pagination__selectors__number--selected"
      ).innerHTML
    ) {
      document
        .querySelector(".products__list")
        .appendChild(createProduct(prod[1]));
    }
  }
}

function paginationPopulation(pageNum, filteredProducts) {
  const prodList = document.querySelector(".products__list");
  const products = prodList.children;
  const finalOrderedProductList = [];

  prodList.innerHTML = "";

  if (filteredProducts.length === productDatabase.length) {
    let i = 0;
    let position = 1;
    for (const prod of productDatabase) {
      finalOrderedProductList.push([position, prod]);
      if (i === 4) {
        position++;
        i = -1;
      }
      i++;
    }

    for (const prod of finalOrderedProductList) {
      if (prod[0] == pageNum) {
        document
          .querySelector(".products__list")
          .appendChild(createProduct(prod[1]));
      }
    }
  } else {
    let i = 0;
    let position = 1;
    for (const prod of filteredProducts) {
      finalOrderedProductList.push([position, prod]);
      console.log(prod);
      if (i === 4) {
        position++;
        i = -1;
      }
      i++;
    }

    for (const prod of finalOrderedProductList) {
      if (prod[0] == pageNum) {
        document
          .querySelector(".products__list")
          .appendChild(createProduct(prod[1]));
      }
    }
  }
}

function viewportHeight() {
  // Get the viewport height and we multiple it by 1% to get a value for a vh unit
  let vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}
window.addEventListener("resize", viewportHeight);

function runTimeFunctions() {
  buildCategoryFilter();
  buildBrandFilter();
  filterProducts();
  viewportHeight();
}

runTimeFunctions();
