document.querySelector(".form .main").addEventListener("click", (e) => {
  e.preventDefault();

  const form = document.querySelector(".form");
  const email = document.querySelector(".form input");

  if (!email.value) addAlert(form);
  else removeAlert(form);

  if (!validateEmail(email.value)) addAlert(form);
});

const addAlert = (element) => {
  element.style.border = "1px solid red";
  element.style.borderRadius = "0.5rem";
};

const removeAlert = (element) => {
  element.style.border = "1px solid transparent";
  element.style.borderRadius = "0.5rem";
};

const validateEmail = (email) => {
  console.log(email);
  const regex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  console.log(email.match(regex));
  return email.match(regex);
};
