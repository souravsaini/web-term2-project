const populateCart = () => {
  let cart = localStorage.getItem("cart");
  const cartEmpty = document.querySelector(".cart-empty");
  if (!cart) {
    cartEmpty.style.display = "block";
  } else {
    const cartTable = document.querySelector(".cart-table");
    const cartBody = document.querySelector(".cart-body");

    cart = JSON.parse(cart);
    cart.forEach((item) => {
      const row = document.createElement("tr");

      let columns = [];
      for (let i = 0; i <= 5; i++) columns[i] = document.createElement("td");

      const aEl = document.createElement("a");
      aEl.setAttribute("href", "#");
      const iEl = document.createElement("i");
      iEl.classList.add("far");
      iEl.classList.add("fa-times-circle");
      aEl.appendChild(iEl);
      columns[0].appendChild(aEl);

      const img = document.createElement("img");
      img.setAttribute("src", item.image);
      img.setAttribute("alt", "product");
      columns[1].appendChild(img);

      columns[2].textContent = item.name;
      columns[3].textContent = `$${item.price}`;

      const inputEl = document.createElement("input");
      inputEl.setAttribute("type", "number");
      inputEl.setAttribute("value", item.quantity);
      columns[4].appendChild(inputEl);

      const subTotal = Math.round(item.price * item.quantity, 2);
      columns[5].textContent = `$${subTotal}`;

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
