document.addEventListener("DOMContentLoaded", function () {
  // Default - sembunyikan elemen dengan id "login" dan "signup"
  const loginElement = document.getElementById("login");
  const signupElement = document.getElementById("signup");
  const btnLoginElement = document.getElementById("btn-login");
  const btnLoginFormElement = document.getElementById("btn-login-form");
  const accountElement = document.getElementById("account");
  const btnLogoutElement = document.getElementById("btn-logout");

  loginElement.classList.add("hidden");
  signupElement.classList.add("hidden");

  // Cek local storage
  if (localStorage.getItem("login") === null) {
    btnLoginElement.classList.remove("hidden");
    btnLoginElement.classList.add("inline-flex");
    btnLogoutElement.classList.add("hidden");
    accountElement.classList.add("hidden");
    accountElement.classList.remove("flex");
  } else {
    btnLoginElement.classList.add("hidden");
    btnLoginElement.classList.remove("inline-flex");
    accountElement.classList.remove("hidden");
    accountElement.classList.add("flex");
    accountElement.innerText = localStorage
      .getItem("email")
      .charAt(0)
      .toUpperCase();
    btnLogoutElement.classList.remove("hidden");
    btnLogoutElement.classList.add("inline-flex");
  }

  // Event listener untuk signup
  const btnsignup = document.getElementById("btn-signup");
  if (btnsignup) {
    btnsignup.addEventListener("click", function () {
      const email = document.getElementById("email-signup").value.toLowerCase(); // Ubah email menjadi huruf kecil
      const password = document.getElementById("password-signup").value;
      const confirmPassword = document.getElementById(
        "confirm-password-signup"
      ).value;

      if (password === confirmPassword) {
        localStorage.setItem("email", email); // Simpan email dalam huruf kecil
        localStorage.setItem("password", password);
        window.location.href = "/login";
      } else {
        console.log("Password dan konfirmasi password tidak sama.");
      }
    });
  }

  // Event listener untuk login
  if (btnLoginFormElement) {
    btnLoginFormElement.addEventListener("click", function () {
      const email = document.getElementById("email-login").value.toLowerCase(); // Ubah email menjadi huruf kecil
      const password = document.getElementById("password-login").value;
      const storedEmail = localStorage.getItem("email");
      const storedPassword = localStorage.getItem("password");

      if (email === storedEmail && password === storedPassword) {
        localStorage.setItem("login", "true");
        window.location.href = "/";
      } else {
        console.log("Email atau password salah.");
      }
    });
  }

  // Event listener untuk logout
  if (btnLogoutElement) {
    btnLogoutElement.addEventListener("click", function () {
      localStorage.removeItem("login"); // Hanya hapus nilai 'login'
      window.location.href = "/";
    });
  }
});
