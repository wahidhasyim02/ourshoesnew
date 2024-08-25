// Cek mode dark saat halaman dimuat pertama kali
(function () {
  if (localStorage.getItem("darkMode") === "true") {
    document.documentElement.classList.add("dark");
    document.getElementById("toggle-mode").innerText = "light_mode";
  } else {
    document.documentElement.classList.remove("dark");
    document.getElementById("toggle-mode").innerText = "dark_mode";
  }
})();
(function () {
  if (localStorage.getItem("login") === null) {
    btnLoginElement.classList.remove("hidden");
  } else {
    btnLoginElement.classList.add("hidden");
  }
})();
