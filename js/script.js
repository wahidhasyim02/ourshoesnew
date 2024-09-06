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

// Script Darkmode
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.getElementById("toggle-mode");
  var toggleSpan = toggle.querySelector("a span");
  var toggleDiv = toggle.querySelector("div");
  var htmlElement = document.documentElement;

  // Fungsi untuk mengatur tema dan teks ikon
  function setTheme(isDarkMode) {
    if (isDarkMode) {
      htmlElement.classList.add("dark");
      toggleSpan.innerText = "light_mode";
    } else {
      htmlElement.classList.remove("dark");
      toggleSpan.innerText = "dark_mode";
    }
  }

  // Periksa tema awal dari localStorage
  var isDark = localStorage.getItem("darkMode") === "true";
  setTheme(isDark);

  // Sembunyikan div di dalam li
  if (toggleDiv) {
    toggleDiv.classList.remove("bg-lightblue-300");
    toggleDiv.classList.add("bg-lightblue-300/0");
  }

  if (toggle) {
    // Tambahkan event listener untuk tombol toggle
    toggle.addEventListener("click", function () {
      var isDark = htmlElement.classList.toggle("dark"); // Toggle class
      setTheme(isDark); // Perbarui teks ikon
      localStorage.setItem("darkMode", isDark ? "true" : "false"); // Simpan mode ke localStorage
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".view-button");
  const container = document.getElementById("view-container");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const view = this.getAttribute("data-view");

      if (view === "grid") {
        container.className = "grid grid-cols-2 gap-4"; // Tampilan grid
      } else if (view === "list") {
        container.className = "flex flex-col space-y-4"; // Tampilan list
      } else if (view === "details") {
        container.className = "flex flex-col space-y-2"; // Tampilan detail
        // Tambahkan logika khusus untuk detail view jika diperlukan
      }
    });
  });
});

// Script untuk mengatur view
/* document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".view-button");
  const container = document.getElementById("view-container");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const view = this.getAttribute("data-view");

      if (view === "grid") {
        container.className = "grid grid-cols-2 gap-4"; // Tampilan grid
      } else if (view === "list") {
        container.className = "flex flex-col space-y-4"; // Tampilan list
      } else if (view === "details") {
        container.className = "flex flex-col space-y-2"; // Tampilan detail
        // Tambahkan logika khusus untuk detail view jika diperlukan
      }
    });
  });
});
*/
