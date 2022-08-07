//DATA
const products = [
  {
    id: 1,
    company: "Adidas",
    category: "T-shirt",
    image: "./images/products/f1.jpg",
    name: "Cartoon astronaut T-shirt",
    ratings: 5,
    price: 78,
  },
  {
    id: 2,
    company: "Peter England",
    category: "T-shirt",
    image: "./images/products/f2.jpg",
    name: "Cartoon astronaut T-shirt",
    ratings: 4.5,
    price: 89,
  },
  {
    id: 3,
    company: "Louis Phillipe",
    category: "T-shirt",
    image: "./images/products/f3.jpg",
    name: "Cartoon astronaut T-shirt",
    ratings: 4.5,
    price: 78,
  },
  {
    id: 4,
    company: "John Players",
    category: "T-shirt",
    image: "./images/products/f4.jpg",
    name: "Cartoon astronaut T-shirt",
    ratings: 4.5,
    price: 90,
  },
  {
    id: 5,
    company: "Gap",
    image: "./images/products/f5.jpg",
    category: "T-shirt",
    name: "Cartoon astronaut T-shirt",
    ratings: 4,
    price: 65,
  },
  {
    id: 6,
    company: "Gucci",
    image: "./images/products/f6.jpg",
    category: "T-shirt",
    name: "Cartoon astronaut T-shirt",
    ratings: 4.5,
    price: 99,
  },
  {
    id: 7,
    company: "Levis",
    category: "T-shirt",
    image: "./images/products/f7.jpg",
    name: "Cartoon astronaut T-shirt",
    ratings: 4.5,
    price: 77,
  },
  {
    id: 8,
    company: "Van Heusen",
    category: "T-shirt",
    image: "./images/products/f8.jpg",
    name: "Cartoon astronaut T-shirt",
    ratings: 4,
    price: 85,
  },
  {
    id: 9,
    company: "Levis",
    category: "T-shirt",
    image: "./images/products/n1.jpg",
    name: "Cartoon astronaut T-shirt",
    ratings: 4,
    price: 65,
  },
  {
    id: 10,
    company: "Gucci",
    category: "T-shirt",
    image: "./images/products/n2.jpg",
    name: "Cartoon astronaut T-shirt",
    ratings: 4.5,
    price: 99,
  },
  {
    id: 11,
    company: "Levis",
    category: "T-shirt",
    image: "./images/products/n3.jpg",
    name: "Cartoon astronaut T-shirt",
    ratings: 4.5,
    price: 77,
  },
  {
    id: 12,
    company: "Van Heusen",
    category: "T-shirt",
    image: "./images/products/n4.jpg",
    name: "Cartoon astronaut T-shirt",
    ratings: 4,
    price: 85,
  },
  {
    id: 13,
    company: "Gucci",
    category: "T-shirt",
    image: "./images/products/n5.jpg",
    name: "Cartoon astronaut T-shirt",
    ratings: 4,
    price: 65,
  },
  {
    id: 14,
    company: "Gucci",
    category: "T-shirt",
    image: "./images/products/n6.jpg",
    name: "Cartoon astronaut T-shirt",
    ratings: 4.5,
    price: 99,
  },
  {
    id: 15,
    company: "Levis",
    category: "T-shirt",
    image: "./images/products/n7.jpg",
    name: "Cartoon astronaut T-shirt",
    ratings: 4.5,
    price: 77,
  },
  {
    id: 16,
    company: "Van Heusen",
    category: "T-shirt",
    image: "./images/products/n8.jpg",
    name: "Cartoon astronaut T-shirt",
    ratings: 4,
    price: 85,
  },
  {
    id: 17,
    company: "Gap",
    category: "T-shirt",
    image: "./images/products/f9.jpg",
    name: "Cartoon astronaut T-shirt",
    ratings: 4,
    price: 65,
  },
  {
    id: 18,
    company: "Gucci",
    category: "T-shirt",
    image: "./images/products/f10.jpg",
    name: "Cartoon astronaut T-shirt",
    ratings: 4.5,
    price: 99,
  },
  {
    id: 19,
    company: "Levis",
    category: "T-shirt",
    image: "./images/products/f11.jpg",
    name: "Cartoon astronaut T-shirt",
    ratings: 4.5,
    price: 77,
  },
  {
    id: 20,
    company: "Van Heusen",
    category: "T-shirt",
    image: "./images/products/f12.jpg",
    name: "Cartoon astronaut T-shirt",
    ratings: 4,
    price: 85,
  },
  {
    id: 21,
    company: "Levis",
    category: "Jeans",
    image: "./images/products/1.png",
    name: "Jeans",
    ratings: 4.5,
    price: 95,
  },
  {
    id: 22,
    company: "Van Heusen",
    category: "Jeans",
    image: "./images/products/2.png",
    name: "Jeans",
    ratings: 4.5,
    price: 95,
  },
  {
    id: 23,
    company: "Levis",
    category: "Jeans",
    image: "./images/products/3.png",
    name: "Jeans",
    ratings: 4.5,
    price: 95,
  },
  {
    id: 24,
    company: "Van Heusen",
    category: "Jeans",
    image: "./images/products/4.png",
    name: "Jeans",
    ratings: 4.5,
    price: 95,
  },
  {
    id: 25,
    company: "Old Navy",
    category: "Jeans",
    image: "./images/products/5.png",
    name: "Jeans",
    ratings: 4.5,
    price: 95,
  },
  {
    id: 26,
    company: "Gap",
    category: "Jeans",
    image: "./images/products/6.png",
    name: "Jeans",
    ratings: 4.5,
    price: 95,
  },
  {
    id: 27,
    company: "Gap",
    category: "Jeans",
    image: "./images/products/7.png",
    name: "Jeans",
    ratings: 4.5,
    price: 95,
  },
  {
    id: 28,
    company: "Levis",
    category: "Jeans",
    image: "./images/products/8.png",
    name: "Jeans",
    ratings: 4.5,
    price: 95,
  },
  {
    id: 29,
    company: "Old Navy",
    category: "Jeans",
    image: "./images/products/9.png",
    name: "Jeans",
    ratings: 4.5,
    price: 95,
  },
  {
    id: 30,
    company: "Nike",
    category: "Shoes",
    image: "./images/products/shoes1.jpg",
    name: "Shoes",
    ratings: 4.5,
    price: 120,
  },
  {
    id: 31,
    company: "Reebok",
    category: "Shoes",
    image: "./images/products/shoes2.jpg",
    name: "Shoes",
    ratings: 4,
    price: 100,
  },
  {
    id: 32,
    company: "Adidas",
    category: "Shoes",
    image: "./images/products/shoes3.jpg",
    name: "Shoes",
    ratings: 4.5,
    price: 135,
  },
  {
    id: 33,
    company: "Reebok",
    category: "Shoes",
    image: "./images/products/shoes4.jpg",
    name: "Shoes",
    ratings: 4.5,
    price: 95,
  },
  {
    id: 34,
    company: "Nike",
    category: "Shoes",
    image: "./images/products/shoes5.jpg",
    name: "Shoes",
    ratings: 5,
    price: 105,
  },
  {
    id: 35,
    company: "Adidas",
    category: "Shoes",
    image: "./images/products/shoes6.jpg",
    name: "Shoes",
    ratings: 4.5,
    price: 140,
  },
  {
    id: 36,
    company: "Nike",
    category: "Shoes",
    image: "./images/products/shoes7.jpg",
    name: "Shoes",
    ratings: 4,
    price: 95,
  },
  {
    id: 37,
    company: "Reebok",
    category: "Shoes",
    image: "./images/products/shoes8.jpg",
    name: "Shoes",
    ratings: 4.5,
    price: 90,
  },
  {
    id: 38,
    company: "Adidas",
    category: "Shoes",
    image: "./images/products/shoes9.jpg",
    name: "Shoes",
    ratings: 4.5,
    price: 130,
  },
  {
    id: 39,
    company: "Nike",
    category: "Shoes",
    image: "./images/products/shoes10.jpg",
    name: "Shoes",
    ratings: 5,
    price: 110,
  },
];

//Register event listeners
const filterCompanyEl = document.querySelector(".filter-company");
const filterPriceEl = document.querySelector(".filter-price");
const filterRatingEl = document.querySelector(".filter-rating");
const filterCategoryEl = document.querySelector(".filter-category");

const filterProducts = () => {
  let filteredProducts = products;

  if (filterCategoryEl.value !== "all") {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === filterCategoryEl.value
    );
  }
  if (filterCompanyEl.value !== "all") {
    filteredProducts = filteredProducts.filter(
      (product) => product.company === filterCompanyEl.value
    );
  }
  filteredProducts = filteredProducts.filter(
    (product) => product.price <= filterPriceEl.value
  );
  filteredProducts = filteredProducts.filter(
    (product) => product.ratings >= filterRatingEl.value
  );

  const productContainer = document.querySelector(".product-container");
  productContainer.innerHTML = "";

  loadFeaturedProducts(filteredProducts);
};

filterCompanyEl.addEventListener("change", filterProducts);
filterPriceEl.addEventListener("change", filterProducts);
filterRatingEl.addEventListener("change", filterProducts);
filterCategoryEl.addEventListener("change", filterProducts);

//FUNCTIONS

const loadCategories = () => {
  let categories = ["all"];
  const filterCategoryEl = document.querySelector(".filter-category");
  products.forEach((product) => {
    if (!categories.includes(product.category))
      categories.push(product.category);
  });

  categories.forEach((category) => {
    const optionEl = document.createElement("option");
    optionEl.setAttribute("value", category);
    optionEl.textContent = category;
    filterCategoryEl.appendChild(optionEl);
  });
};
loadCategories();

const loadCompanies = () => {
  let companies = ["all"];
  const filterCompanyEl = document.querySelector(".filter-company");
  products.forEach((product) => {
    if (!companies.includes(product.company)) companies.push(product.company);
  });

  companies.forEach((company) => {
    const optionEl = document.createElement("option");
    optionEl.setAttribute("value", company);
    optionEl.textContent = company;
    filterCompanyEl.appendChild(optionEl);
  });
};
loadCompanies();

const loadFilterPrice = () => {
  const filterPriceEl = document.querySelector(".filter-price");
  let max = Math.max();
  let min = Math.min();
  products.forEach((product) => {
    if (product.price > max) max = product.price;
    if (product.price < min) min = product.price;
  });
  filterPriceEl.setAttribute("min", min);
  filterPriceEl.setAttribute("max", max);
  filterPriceEl.setAttribute("value", max);

  const priceLabelEl = document.querySelector(".price-label");
  priceLabelEl.textContent = `Price: $${max}`;

  filterPriceEl.addEventListener("change", () => {
    // const priceLabelEl = document.querySelector(".price-label");
    priceLabelEl.textContent = `Price: $${filterPriceEl.value}`;
  });
};
loadFilterPrice();

const loadFilterRating = () => {
  const filterRatingEl = document.querySelector(".filter-rating");
  let max = Math.max();
  let min = Math.min();
  products.forEach((product) => {
    if (product.ratings > max) max = product.ratings;
    if (product.ratings < min) min = product.ratings;
  });
  filterRatingEl.setAttribute("min", min);
  filterRatingEl.setAttribute("max", max);
  filterRatingEl.setAttribute("value", min);

  const ratingLabelEl = document.querySelector(".rating-label");
  ratingLabelEl.textContent = `Rating: ${min}`;

  filterRatingEl.addEventListener("change", () => {
    // const ratingLabelEl = document.querySelector(".rating-label");
    ratingLabelEl.textContent = `Rating: ${filterRatingEl.value}`;
  });
};
loadFilterRating();

const loadFeaturedProducts = (products) => {
  const productContainer = document.querySelector(".product-container");
  products.forEach(({ id, company, image, name, ratings, price }) => {
    let mainDiv = document.createElement("div");
    mainDiv.classList.add("product");

    let img = document.createElement("img");
    img.setAttribute("src", image);
    img.setAttribute("alt", "product");

    let descDiv = document.createElement("div");
    descDiv.classList.add("description");

    let spanEl = document.createElement("span");
    spanEl.textContent = company;
    let h5El = document.createElement("h5");
    h5El.textContent = name;

    let starDiv = document.createElement("div");
    starDiv.classList.add("star");

    let i;
    for (i = 1; i <= Math.floor(ratings); i++) {
      let iEl = document.createElement("i");
      iEl.classList.add("fas");
      iEl.classList.add("fa-star");
      starDiv.appendChild(iEl);
    }

    if (ratings % 1 !== 0) {
      let iEl = document.createElement("i");
      iEl.classList.add("fas");
      iEl.classList.add("fa-star-half");
      starDiv.appendChild(iEl);
    }

    let h4El = document.createElement("h4");
    h4El.textContent = `$${price}`;

    let aEl = document.createElement("a");
    aEl.setAttribute("href", "#");

    let iEl = document.createElement("i");
    iEl.addEventListener("click", (e) =>
      addToCart(e, id, company, image, name, price)
    );
    iEl.classList.add("fa-solid");
    iEl.classList.add("fa-cart-shopping");
    iEl.classList.add("cart");
    aEl.appendChild(iEl);

    descDiv.appendChild(spanEl);
    descDiv.appendChild(h5El);
    descDiv.appendChild(starDiv);
    descDiv.appendChild(h4El);

    mainDiv.appendChild(img);
    mainDiv.appendChild(descDiv);
    mainDiv.appendChild(aEl);

    productContainer.appendChild(mainDiv);
  });

  if (productContainer.childElementCount === 0) {
    const h2 = document.createElement("h2");
    h2.style.width = "100%";
    h2.textContent = "No products found.";
    productContainer.appendChild(h2);
  }
};

loadFeaturedProducts(products);

const addToCart = (e, id, company, image, name, price) => {
  e.preventDefault();
  console.log(company, image, name, price);

  let cart = localStorage.getItem("cart");
  const product = {
    company,
    image,
    name,
    price,
    id,
  };
  if (!cart) {
    cart = [];
    product["quantity"] = 1;
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("subtotal", price);
  } else {
    cart = JSON.parse(cart);

    const existingItem = cart.find((item) => item.id === id);

    if (!existingItem) {
      product["quantity"] = 1;
      cart.push(product);
    } else {
      existingItem.quantity += 1;
      const index = cart.findIndex((item) => item.id === id);
      cart[index] = existingItem;
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    let storedSubtotal = parseFloat(localStorage.getItem("subtotal"));
    console.log(storedSubtotal);
    storedSubtotal += price;
    localStorage.setItem("subtotal", storedSubtotal);

    alert("Item added to cart");
  }
};
