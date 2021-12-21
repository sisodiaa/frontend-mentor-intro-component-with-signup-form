document.addEventListener("DOMContentLoaded", () => {
  const firstNameField = document.getElementById("firstname");
  const lastNameField = document.getElementById("lastname");
  const emailField = document.getElementById("email");
  const passwordField = document.getElementById("password");

  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    e.stopPropagation();

    const firstname = firstNameField.value;
    const lastname = lastNameField.value;
    const email = emailField.value;
    const password = passwordField.value;

    if (firstname === "") {
      firstNameField.classList.add("invalid");
      firstNameField.placeholder = "";
    }

    if (lastname === "") {
      lastNameField.classList.add("invalid");
      lastNameField.placeholder = "";
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      emailField.classList.add("invalid");
      emailField.placeholder = "";
    }

    if (password === "") {
      passwordField.classList.add("invalid");
      passwordField.placeholder = "";
    }
  });

  firstNameField.addEventListener("input", () => {
    firstNameField.classList.remove("invalid");
  });

  lastNameField.addEventListener("input", () => {
    lastNameField.classList.remove("invalid");
  });

  emailField.addEventListener("input", () => {
    emailField.classList.remove("invalid");
  });

  passwordField.addEventListener("input", () => {
    passwordField.classList.remove("invalid");
  });
});
