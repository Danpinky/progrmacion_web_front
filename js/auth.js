let nameInput, surnameInput, emailInput, passwordInput;
if (window.location.pathname == "/pages/index.html") {
  const loginForm = document.querySelector("#login_form");
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
  });
}
if (window.location.pathname == "/pages/sign_up.html") {
  const signupForm = document.querySelector("#signup_form");
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
  });
  nameInput = document.querySelector("#name");
  surnameInput = document.querySelector("#surname");
  // nameInput.value = "angel";
  // surnameInput.value = "retana";
}
emailInput = document.querySelector("#email");
passwordInput = document.querySelector("#password");
// emailInput.value = "angel@gmail.com";
// passwordInput.value = "qwerty123";

const login = async () => {
  const resp = await execApiCall(
    "/auth/login",
    {
      email: emailInput.value,
      password: passwordInput.value,
    },
    "POST"
  );
  if (resp != null) {
    window.localStorage.setItem("token", resp.data.token);
    window.location.href = "/pages/landing_page.html";
  }
};

const signup = async () => {
  const resp = await execApiCall(
    "/auth/sign_up",
    {
      name: nameInput.value,
      surname: surnameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
    },
    "POST"
  );
  if (resp != null) {
    window.localStorage.setItem("token", resp.data.token);
    window.location.href = "/pages/landing_page.html";
  }
};
