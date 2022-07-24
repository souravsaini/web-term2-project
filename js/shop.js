//DATA
const products = [
  {
    id: 1,
    company: "Adidas",
    image: "./images/products/f1.jpg",
    name: "Cartoon astronaut T-Shirts",
    ratings: 5,
    price: 78,
  },
  {
    id: 2,
    company: "Peter England",
    image: "./images/products/f2.jpg",
    name: "Cartoon astronaut T-Shirts",
    ratings: 4.5,
    price: 89,
  },
  {
    id: 3,
    company: "Louis Phillipe",
    image: "./images/products/f3.jpg",
    name: "Cartoon astronaut T-Shirts",
    ratings: 4.5,
    price: 78,
  },
  {
    id: 4,
    company: "John Players",
    image: "./images/products/f4.jpg",
    name: "Cartoon astronaut T-Shirts",
    ratings: 4.5,
    price: 90,
  },
  {
    id: 5,
    company: "Gap",
    image: "./images/products/f5.jpg",
    name: "Cartoon astronaut T-Shirts",
    ratings: 4,
    price: 65,
  },
  {
    id: 6,
    company: "Gucci",
    image: "./images/products/f6.jpg",
    name: "Cartoon astronaut T-Shirts",
    ratings: 4.5,
    price: 99,
  },
  {
    id: 7,
    company: "Levis",
    image: "./images/products/f7.jpg",
    name: "Cartoon astronaut T-Shirts",
    ratings: 4.5,
    price: 77,
  },
  {
    id: 8,
    company: "Van Heusen",
    image: "./images/products/f8.jpg",
    name: "Cartoon astronaut T-Shirts",
    ratings: 4,
    price: 85,
  },
  {
    id: 9,
    company: "",
    image: "./images/products/n1.jpg",
    name: "Cartoon astronaut T-Shirts",
    ratings: 4,
    price: 65,
  },
  {
    id: 10,
    company: "Gucci",
    image: "./images/products/n2.jpg",
    name: "Cartoon astronaut T-Shirts",
    ratings: 4.5,
    price: 99,
  },
  {
    id: 11,
    company: "Levis",
    image: "./images/products/n3.jpg",
    name: "Cartoon astronaut T-Shirts",
    ratings: 4.5,
    price: 77,
  },
  {
    id: 12,
    company: "Van Heusen",
    image: "./images/products/n4.jpg",
    name: "Cartoon astronaut T-Shirts",
    ratings: 4,
    price: 85,
  },
  {
    id: 13,
    company: "",
    image: "./images/products/n5.jpg",
    name: "Cartoon astronaut T-Shirts",
    ratings: 4,
    price: 65,
  },
  {
    id: 14,
    company: "Gucci",
    image: "./images/products/n6.jpg",
    name: "Cartoon astronaut T-Shirts",
    ratings: 4.5,
    price: 99,
  },
  {
    id: 15,
    company: "Levis",
    image: "./images/products/n7.jpg",
    name: "Cartoon astronaut T-Shirts",
    ratings: 4.5,
    price: 77,
  },
  {
    id: 16,
    company: "Van Heusen",
    image: "./images/products/n8.jpg",
    name: "Cartoon astronaut T-Shirts",
    ratings: 4,
    price: 85,
  },
  {
    id: 17,
    company: "Gap",
    image: "./images/products/f9.jpg",
    name: "Cartoon astronaut T-Shirts",
    ratings: 4,
    price: 65,
  },
  {
    id: 18,
    company: "Gucci",
    image: "./images/products/f10.jpg",
    name: "Cartoon astronaut T-Shirts",
    ratings: 4.5,
    price: 99,
  },
  {
    id: 19,
    company: "Levis",
    image: "./images/products/f11.jpg",
    name: "Cartoon astronaut T-Shirts",
    ratings: 4.5,
    price: 77,
  },
  {
    id: 20,
    company: "Van Heusen",
    image: "./images/products/f12.jpg",
    name: "Cartoon astronaut T-Shirts",
    ratings: 4,
    price: 85,
  },
];

//FUNCTIONS
const loadFeaturedProducts = () => {
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
};

loadFeaturedProducts();

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
  }
};
