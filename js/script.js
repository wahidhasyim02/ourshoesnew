(function () {
  if (localStorage.getItem("darkMode") === "true") {
    document.documentElement.classList.add("dark");
  }
})();

document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.getElementById("toggle-mode");
  var htmlElement = document.documentElement;

  // Fungsi untuk mengatur tema
  function setTheme(isDarkmode) {
    if (isDarkmode) {
      htmlElement.classList.add("dark");
      toggle.innerText = "light_mode";
    } else {
      htmlElement.classList.remove("dark");
      toggle.innerText = "dark_mode";
    }
  }

  // Periksa status dark mode dari localStorage saat halaman pertama kali dimuat
  var isDark = localStorage.getItem("darkMode") === "true";
  setTheme(isDark);

  if (toggle) {
    // Tambahkan event listener pada tombol toggle
    toggle.addEventListener("click", function () {
      var isDark = htmlElement.classList.toggle("dark"); // Toggle class dan ambil status terbaru
      setTheme(isDark);
      localStorage.setItem("darkMode", isDark ? "true" : "false");
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const colorButtons = document.querySelectorAll(".color-btn");
  const productImage = document.getElementById("product-image");

  const imageMap = {
    red: "/images/sepatu1.png",
    yellow: "/images/sepatu2.png",
    green: "/images/sepatu3.png",
    tosca: "/images/sepatu4.png",
    blue: "/images/sepatu5.png",
  };

  colorButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Hapus kelas 'active' dari semua tombol
      colorButtons.forEach((btn) => btn.classList.remove("active"));

      // Tambahkan kelas 'active' ke tombol yang diklik
      this.classList.add("active");

      // Ubah gambar produk berdasarkan ID yang dipilih
      const colorId = this.id;
      productImage.src = imageMap[colorId];
    });
  });
});
