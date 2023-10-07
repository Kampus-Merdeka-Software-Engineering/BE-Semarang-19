// menu

const tombolMenu = $(".tombol-menu");
const menu = $("nav .menu ul");

function klikMenu(params) {
    tombolMenu.click(function (params) {
        menu.toggle();
    });
    menu.click(function (params) {
        menu.toggle();
    });
}
$(document).ready(function(params) {
    let width = $(window).width();
    if (width < 999) {
        klikMenu();
    }
});

// check lebar
$(window).resize(function (params) {
    let width = $(window).width();
    if (width > 989) {
        menu.css("display", "block");
    }else{
        menu.css("display", "none");
    }
    klikMenu();
});

document.getElementById("orderForm").addEventListener("submit", async function (e) {
    e.preventDefault(); // Mencegah pengiriman formulir default

    const namaPenerima = document.getElementById("namaPenerima").value;
    const alamatPengirim = document.getElementById("alamatPengirim").value;
    const nomerTelpon = document.getElementById("nomerTelpon").value;  
    const jenisLayanan = document.getElementById("jenisLayanan").value;  
    const namaKurir = document.getElementById("namaKurir").value;  
    const nomerTelponKurir = document.getElementById("nomerTelponKurir").value;  


    try {
      const response = await fetch("/tbl_order", {
        method: "POST",
        headers : {'Content-Type': 'application/json'},
        body: JSON.stringify ({
          namaPenerima,
          alamatPengirim,
          nomerTelpon,
          jenisLayanan,
          namaKurir,
          nomerTelponKurir,
        })
      });
  
      if (response.ok) {
        // Handle jika permintaan sukses (status 200)
        alert("Order berhasil!");

        // Hapus isi dari input setelah berhasil mengirimkan formulir
        document.getElementById("namaPenerima").value = "";
        document.getElementById("alamatPengirim").value = "";
        document.getElementById("nomerTelpon").value = "";
        document.getElementById("jenisLayanan").value = "reguler"; // Setel ke nilai default
        document.getElementById("namaKurir").value = "";
        document.getElementById("nomerTelponKurir").value = "";

        // Sembunyikan pesan alert setelah beberapa detik
        setTimeout(function () {
            alert(""); // Mengosongkan pesan alert
        }, 3000); // Tunggu 3 detik sebelum mengosongkan pesan alert
    } else {
        // Handle jika ada kesalahan pada server atau validasi gagal
        alert("Terjadi kesalahan saat mengirimkan formulir.");
    }
    } catch (error) {
      console.error("Error:", error);
    }
  });
