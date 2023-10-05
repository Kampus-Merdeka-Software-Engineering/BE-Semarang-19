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
        // Lakukan sesuatu setelah berhasil mengirimkan formulir, jika diperlukan
      } else {
        // Handle jika ada kesalahan pada server atau validasi gagal
        alert("Terjadi kesalahan saat mengirimkan formulir.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  });
  

// // efek scrol
// $(document).ready(function(params) {
//     let scroll_pos = 0;
//     $(document).scroll(function(params) {
//         scroll_pos = $(this).scrollTop();
//         if (scroll_pos > 0) {
//             $("nav").addClass("putih");
//             $("nav img.black").show();
//             $("nav img.putih").hide();
//         }else{
//             $("nav").removeClass("putih");
//             $("nav img.black").hide();
//             $("nav img.putih").show();
//         }
//     })
// });
// efek scrol

