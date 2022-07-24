//DATA
const products = [
  {
    company: "Adidas",
    image: "./images/products/f1.jpg",
    name: "Cartoon astronaut T-Shirts",
    ratings: 5,
    price: 78,
  },
  {
    company: "Peter England",
    image: "./images/products/f2.jpg",
    name: "Cartoon astronaut T-Shirts",
    ratings: 4.5,
    price: 89,
  },
  {
    company: "Louis Phillipe",
    image: "./images/products/f3.jpg",
    name: "Cartoon astronaut T-Shirts",
    ratings: 4.5,
    price: 78,
  },
  {
    company: "John Players",
    image: "./images/products/f4.jpg",
    name: "Cartoon astronaut T-Shirts",
    ratings: 4.5,
    price: 90,
  },
  {
    company: "Gap",
    image: "./images/products/f5.jpg",
    name: "Cartoon astronaut T-Shirts",
    ratings: 4,
    price: 65,
  },
  {
    company: "Gucci",
    image: "./images/products/f6.jpg",
    name: "Cartoon astronaut T-Shirts",
    ratings: 4.5,
    price: 99,
  },
  {
    company: "Levis",
    image: "./images/products/f7.jpg",
    name: "Cartoon astronaut T-Shirts",
    ratings: 4.5,
    price: 77,
  },
  {
    company: "Van Heusen",
    image: "./images/products/f8.jpg",
    name: "Cartoon astronaut T-Shirts",
    ratings: 4,
    price: 85,
  },
];

//FUNCTIONS
const loadFeaturedProducts = () => {
  const productContainer = document.querySelector(".product-container");
  products.forEach(({ company, image, name, ratings, price }) => {
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
};

loadFeaturedProducts();
