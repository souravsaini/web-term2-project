const populateCart = (cart) => {
  if (!cart) cart = localStorage.getItem("cart");
  const cartEmpty = document.querySelector(".cart-empty");
  console.log(cart);
  if (!cart) {
    cartEmpty.style.display = "block";
  } else {
    const cartTable = document.querySelector(".cart-table");
    const cartBody = document.querySelector(".cart-body");
    cartBody.innerHTML = "";

    cart = JSON.parse(cart);
    if (cart.length === 0) {
      cartEmpty.style.display = "block";
      cartTable.style.display = "none";
      document.getElementById("cart-total").style.display = "none";
      return;
    }

    cart.forEach((item) => {
      const row = document.createElement("tr");

      let columns = [];
      for (let i = 0; i <= 5; i++) columns[i] = document.createElement("td");

      const aEl = document.createElement("a");
      aEl.setAttribute("href", "#");
      const iEl = document.createElement("i");
      iEl.classList.add("far");
      iEl.classList.add("fa-times-circle");
      iEl.addEventListener("click", (e) => {
        handleItemRemove(e, item, cart);
      });
      aEl.appendChild(iEl);
      columns[0].appendChild(aEl);

      const img = document.createElement("img");
      img.setAttribute("src", item.image);
      img.setAttribute("alt", "product");
      columns[1].appendChild(img);

      columns[2].textContent = item.name;
      columns[3].textContent = `$${item.price}`;

      const spanEl = document.createElement("span");
      spanEl.classList.add("span-quantity");
      spanEl.setAttribute("data-quantity", item.id);
      spanEl.textContent = item.quantity;

      const increment = document.createElement("button");
      increment.textContent = "+";
      increment.classList.add("main");
      increment.classList.add("increment-btn");
      increment.setAttribute("data-id", item.id);
      increment.addEventListener("click", (e) =>
        incrementQuantity(e, item.price, item.id)
      );
      columns[4].appendChild(increment);

      columns[4].appendChild(spanEl);
      // const inputEl = document.createElement("input");
      // inputEl.setAttribute("type", "number");
      // inputEl.setAttribute("value", item.quantity);
      // columns[4].appendChild(inputEl);

      const decrement = document.createElement("button");
      decrement.textContent = "-";
      decrement.classList.add("main");
      decrement.classList.add("decrement-btn");
      decrement.setAttribute("data-id", item.id);
      decrement.addEventListener("click", (e) =>
        decrementQuantity(e, item.price, item.id)
      );
      columns[4].appendChild(decrement);

      const subTotal = Math.round(item.price * item.quantity, 2);
      const spanSubtotal = document.createElement("span");
      spanSubtotal.classList.add("span-subtotal");
      spanSubtotal.setAttribute("data-subtotal", item.id);
      spanSubtotal.textContent = `$${subTotal}`;
      columns[5].appendChild(spanSubtotal);

      for (let i = 0; i <= 5; i++) row.appendChild(columns[i]);

      cartBody.appendChild(row);

      cartTable.style.display = "block";

      cartEmpty.style.display = "none";

      const cartTotalEl = document.getElementById("cart-total");
      cartTotalEl.style.display = "flex";

      populateCartTotal();
    });
  }
};

const populateCartTotal = () => {
  const subTotalEl = document.querySelector(".subtotal-price");
  const shippingEl = document.querySelector(".shipping-price");
  const totalEl = document.querySelector(".total-price");
  const cartSubtotal = parseFloat(localStorage.getItem("subtotal")) || 0;

  subTotalEl.textContent = `$${cartSubtotal}`;
  const shipping = cartSubtotal > 100 ? "Free" : cartSubtotal > 50 ? 5 : 10;
  shippingEl.textContent = shipping === "Free" ? `${shipping}` : `$${shipping}`;
  totalEl.textContent =
    shipping > 0 ? `$${cartSubtotal + shipping}` : `$${cartSubtotal}`;
};

document.querySelector(".checkout-btn").addEventListener("click", (e) => {
  e.preventDefault();

  let cart = localStorage.getItem("cart");
  const subtotal = localStorage.getItem("subtotal");
  if (!cart || !subtotal) {
    alert("Cart is empty");
    return;
  }

  console.log(subtotal);
  localStorage.removeItem("subtotal");
  cart = [];
  localStorage.setItem("cart", cart);
  alert(`Checkout completed. You have paid $${subtotal}`);
  // window.location.href = "./shop.html"; //redirect to shop.html
  document.location.reload();
});

const incrementQuantity = (e, price, id) => {
  e.preventDefault();

  let cart = JSON.parse(localStorage.getItem("cart"));

  const span = document.querySelector(`[data-quantity="${id}"]`);
  const spanText = parseInt(span.textContent);
  if (spanText + 1 > 10) return;
  span.textContent = spanText + 1;

  const cartTotalEl = document.querySelector(`[data-subtotal="${id}"]`);
  let cartTotal = parseInt(cartTotalEl.textContent.split("$")[1]);

  cartTotal += price;
  cartTotalEl.textContent = `$${cartTotal}`;

  let storedSubtotal = parseFloat(localStorage.getItem("subtotal"));
  storedSubtotal += price;
  localStorage.setItem("subtotal", storedSubtotal);

  cart = cart.map((item) => {
    if (item.id === id) {
      return { ...item, quantity: item.quantity + 1 };
    }
    return item;
  });
  console.log(cart);
  localStorage.setItem("cart", JSON.stringify(cart));
  populateCartTotal();
};

const decrementQuantity = (e, price, id) => {
  e.preventDefault();

  let cart = JSON.parse(localStorage.getItem("cart"));

  const span = document.querySelector(`[data-quantity="${id}"]`);
  const spanText = parseInt(span.textContent);
  if (spanText - 1 < 1) return;
  span.textContent = spanText - 1;

  const cartTotalEl = document.querySelector(`[data-subtotal="${id}"]`);
  let cartTotal = parseInt(cartTotalEl.textContent.split("$")[1]);

  cartTotal -= price;
  cartTotalEl.textContent = `$${cartTotal}`;

  let storedSubtotal = parseFloat(localStorage.getItem("subtotal"));
  storedSubtotal -= price;
  localStorage.setItem("subtotal", storedSubtotal);

  cart = cart.map((item) => {
    if (item.id === id) {
      console.log(item.quantity);
      return { ...item, quantity: item.quantity - 1 };
    }
    return item;
  });

  localStorage.setItem("cart", JSON.stringify(cart));
  populateCartTotal();
};

handleItemRemove = (e, item, cart) => {
  e.preventDefault();

  cart = cart.filter((cartItem) => cartItem.id !== item.id);
  let subTotal = parseFloat(localStorage.getItem("subtotal"));
  console.log(subTotal);
  console.log(item.price);
  subTotal -= item.price * item.quantity;
  localStorage.setItem("subtotal", JSON.stringify(subTotal));
  localStorage.setItem("cart", JSON.stringify(cart));
  populateCart(JSON.stringify(cart));
  populateCartTotal();
};
