document.addEventListener("DOMContentLoaded", function () {
  function checkLoginStatus() {
    const loginStatus = localStorage.getItem("login");

    const loginElement = document.getElementById("login");
    const signupElement = document.getElementById("signup");
    const accountElement = document.getElementById("account");
    const logoutElement = document.getElementById("logout");
    const innerAccountElement = document.getElementById("inner-account");
    const storedEmail = localStorage.getItem("email");

    function updateBackgroundClasses(element) {
      const innerDiv = element.querySelector("div:not(#inner-account)");
      if (innerDiv) {
        innerDiv.classList.remove("bg-lightblue-300");
        innerDiv.classList.add("bg-lightblue-300/0");
        innerDiv.classList.remove("group-hover:w-[100%]");
        innerDiv.classList.add("group-hover:w-[0%]");
      }
    }

    if (loginStatus !== "true") {
      if (loginElement) {
        loginElement.classList.add("flex");
        loginElement.classList.remove("hidden");
        updateBackgroundClasses(loginElement);
      }
      if (signupElement) {
        signupElement.classList.add("flex");
        signupElement.classList.remove("hidden");
        updateBackgroundClasses(signupElement);
      }
      if (accountElement) {
        accountElement.classList.add("hidden");
        accountElement.classList.remove("flex");
        updateBackgroundClasses(accountElement);
      }
      if (logoutElement) {
        logoutElement.classList.add("hidden");
        logoutElement.classList.remove("flex");
        updateBackgroundClasses(logoutElement);
      }
    } else {
      if (accountElement) {
        accountElement.classList.add("flex");
        accountElement.classList.remove("hidden");
        updateBackgroundClasses(accountElement);
      }
      if (logoutElement) {
        logoutElement.classList.add("flex");
        logoutElement.classList.remove("hidden");
        updateBackgroundClasses(logoutElement);
      }
      if (loginElement) {
        loginElement.classList.add("hidden");
        loginElement.classList.remove("flex");
        updateBackgroundClasses(loginElement);
      }
      if (signupElement) {
        signupElement.classList.add("hidden");
        signupElement.classList.remove("flex");
        updateBackgroundClasses(signupElement);
      }
      if (innerAccountElement && storedEmail) {
        const firstLetter = storedEmail.charAt(0).toUpperCase();
        innerAccountElement.innerText = firstLetter;
      }
    }
  }

  function signup() {
    const emailSignup = document
      .getElementById("email-signup")
      ?.value.toLowerCase();
    const passwordSignup = document.getElementById("password-signup")?.value;
    const confirmPasswordSignup = document.getElementById(
      "confirm-password-signup"
    )?.value;

    if (passwordSignup !== confirmPasswordSignup) {
      console.log("Password dan Konfirmasi Password tidak sama.");
      return;
    }

    if (!validateEmail(emailSignup)) {
      console.log("Format email tidak valid.");
      return;
    }

    localStorage.setItem("email", emailSignup);
    localStorage.setItem("password", passwordSignup);
    window.location.href = "/login";
  }

  function login() {
    const emailLogin = document
      .getElementById("email-login")
      ?.value.toLowerCase();
    const passwordLogin = document.getElementById("password-login")?.value;

    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    if (emailLogin === storedEmail && passwordLogin === storedPassword) {
      localStorage.setItem("login", "true");

      const firstLetter = emailLogin.charAt(0).toUpperCase();
      document.getElementById("inner-account").innerText = firstLetter;

      window.location.href = "/"; // Redirect setelah innerText diubah
    } else {
      console.log("Email atau password salah.");
    }
  }

  function logout() {
    localStorage.removeItem("login"); // Menghapus status login dari localStorage
    window.location.href = "/login"; // Mengarahkan kembali ke halaman login
  }

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  // Hanya tambahkan event listener jika elemennya ada
  const signupBtn = document.getElementById("btn-signup-form");
  if (signupBtn) signupBtn.addEventListener("click", signup);

  const loginBtn = document.getElementById("btn-login-form");
  if (loginBtn) loginBtn.addEventListener("click", login);

  const logoutBtn = document.getElementById("logout");
  if (logoutBtn) logoutBtn.addEventListener("click", logout);

  checkLoginStatus();
});
