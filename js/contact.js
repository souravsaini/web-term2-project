document.querySelector(".form-submit").addEventListener("click", (e) => {
  e.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");

  if (!name.value) addAlert(name);
  else removeAlert(name);
  if (!email.value) addAlert(email);
  else {
    removeAlert(email);
  }
  if (!subject.value) addAlert(subject);
  else removeAlert(subject);
  if (!message.value) addAlert(message);
  else removeAlert(message);

  if (!validateText(name.value)) addAlert(name);
  if (!validateEmail(email.value)) addAlert(email);
});

const addAlert = (element) => {
  element.style.border = "1px solid red";
};

const removeAlert = (element) => {
  element.style.border = "1px solid #e1e1e1";
};

const validateText = (text) => {
  const regex = "^[A-Za-z s*]+$";
  return text.match(regex);
};

const validateEmail = (email) => {
  console.log(email);
  const regex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  console.log(email.match(regex));
  return email.match(regex);
};
