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

document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.getElementById("toggle-mode");
  var htmlElement = document.documentElement;

  // Fungsi untuk mengatur tema dan teks tombol
  function setTheme(isDarkMode) {
    if (isDarkMode) {
      htmlElement.classList.add("dark");
      toggle.innerText = "light_mode";
    } else {
      htmlElement.classList.remove("dark");
      toggle.innerText = "dark_mode";
    }
  }

  // Periksa tema awal dari localStorage
  var isDark = localStorage.getItem("darkMode") === "true";
  setTheme(isDark);

  if (toggle) {
    // Tambahkan event listener untuk tombol toggle
    toggle.addEventListener("click", function () {
      var isDark = htmlElement.classList.toggle("dark"); // Toggle class
      setTheme(isDark); // Perbarui teks tombol
      localStorage.setItem("darkMode", isDark ? "true" : "false"); // Simpan mode ke localStorage
    });
  }
});
