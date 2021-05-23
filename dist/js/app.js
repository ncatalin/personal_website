// Menu
const menuToggle = document.getElementById("hamburgerBtn"),
  nav = document.querySelector(".nav"),
  // Animation
  hasFade = document.querySelector(".has-fade"),
  // Form validation
  mainForm = document.getElementById("main-form"),
  nameInput = document.getElementById("name"),
  nameError = document.getElementById("nameError"),
  emailInput = document.getElementById("email"),
  emailError = document.getElementById("emailError"),
  messageInput = document.getElementById("message"),
  messageError = document.getElementById("messageError"),
  // Footer span for year
  insertYear = document.getElementById("currentYear");

// Menu click event
menuToggle.addEventListener("click", mobileMenu);
// Form validation event
mainForm.addEventListener("submit", formError);

// Menu func
function mobileMenu() {
  if (nav.classList.contains("open")) {
    nav.classList.remove("open");
    hasFade.classList.add("fade-out");
    hasFade.classList.remove("fade-in");
  } else {
    nav.classList.add("open");
    hasFade.classList.add("fade-in");
    hasFade.classList.remove("fade-out");
  }
}

// Email validation
function emailValidation(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email,
  );
}

// Form validation func
function formError(e) {
  e.preventDefault();

  const nameValue = nameInput.value;
  const emailValue = emailInput.value;
  const messageValue = messageInput.value;

  if (nameValue.length <= 0) {
    nameInput.classList.add("error--border");
    nameError.classList.add("error");

    setTimeout(() => {
      nameInput.classList.remove("error--border");
      nameError.classList.remove("error");
    }, 5000);
  }
  if (!emailValidation(emailValue)) {
    emailInput.classList.add("error--border");
    emailError.classList.add("error");
    setTimeout(() => {
      emailInput.classList.remove("error--border");
      emailError.classList.remove("error");
    }, 5000);
  }

  if (messageValue.length <= 0) {
    messageInput.classList.add("error--border");
    messageError.classList.add("error");

    setTimeout(() => {
      messageInput.classList.remove("error--border");
      messageError.classList.remove("error");
    }, 5000);
  }
}

// Get current year
const d = new Date();
const currYear = d.getFullYear();

insertYear.innerHTML = currYear;
