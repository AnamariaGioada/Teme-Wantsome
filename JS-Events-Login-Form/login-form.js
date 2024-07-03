const form = document.forms[0];

form.addEventListener("submit", function (event) {
  event.preventDefault();
});

const emailInput = document.getElementById("email");
const validateEmailMessage = document.getElementById("emailValidation");
const validEmailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+/g;

emailInput.addEventListener("change", () => {
  let email = emailInput.value;
  if (email.match(validEmailRegex)) {
    validateEmailMessage.children[0].className = "fa-solid fa-circle-check";
    validateEmailMessage.children[1].innerHTML = `Email is valid!`;
    validateEmailMessage.style.color = "#7bb873";
    emailInput.style.border = "1px solid #7bb873";
  } else {
    validateEmailMessage.children[0].className = "fa-solid fa-circle-xmark";
    validateEmailMessage.children[1].innerHTML = `Email address is not valid!`;
    validateEmailMessage.style.color = "red";
    emailInput.style.border = "1px solid red";
  }
});

const passwordInput = document.getElementById("password");
const validatePasswordMessage = document.getElementById("passValidation");
const validPasswordRegex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

passwordInput.addEventListener("change", () => {
  let password = passwordInput.value;
  if (password.match(validPasswordRegex)) {
    validatePasswordMessage.children[0].className = "fa-solid fa-circle-check";
    validatePasswordMessage.children[1].innerHTML = `Password is correct!`;
    validatePasswordMessage.style.color = "#7bb873";
    passwordInput.style.border = "1px solid #7bb873";
  } else {
    validatePasswordMessage.children[0].className = "fa-solid fa-circle-xmark";
    validatePasswordMessage.children[1].innerHTML = `Password is not valid!`;
    validatePasswordMessage.style.color = "red";
    passwordInput.style.border = "1px solid red";
  }
});
const togglePassword = document.querySelector(".password-toggle-icon i");
togglePassword.addEventListener("click", function () {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    togglePassword.classList.remove("fa-eye");
    togglePassword.classList.add("fa-eye-slash");
  } else {
    passwordInput.type = "password";
    togglePassword.classList.remove("fa-eye-slash");
    togglePassword.classList.add("fa-eye");
  }
});
