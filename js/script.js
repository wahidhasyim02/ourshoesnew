document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("toggle-mode");
  const htmlElement = document.documentElement;

  // Cek status dark mode dari localStorage
  if (localStorage.getItem("theme") === "dark") {
    htmlElement.classList.add("dark");

    toggle.innerText = "light_mode";
  } else {
    htmlElement.classList.remove("dark");

    toggle.innerText = "dark_mode";
  }

  // Tambahkan event listener pada tombol toggle
  toggle.addEventListener("click", function () {
    if (htmlElement.classList.contains("dark")) {
      // Jika class dark ada, hapus dan ubah innerText
      htmlElement.classList.remove("dark");
      toggle.innerText = "dark_mode";
      localStorage.setItem("theme", "light");
    } else {
      // Jika class dark tidak ada, tambahkan dan ubah innerText
      htmlElement.classList.add("dark");
      toggle.innerText = "light_mode";
      localStorage.setItem("theme", "dark");
    }
  });
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
