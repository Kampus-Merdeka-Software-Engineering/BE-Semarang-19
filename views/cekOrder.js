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

// Halaman CekOrder


$(document).ready(function() {
    $.ajax({
        url: '/tbl_order', // Ganti dengan endpoint yang sesuai
        method: 'GET',
        success: function(data) {
            var orderTable = $('#orderTable'); // Seleksi elemen dengan id "orderTable"
            orderTable.empty(); // Kosongkan isi tbody

            // Loop melalui data dan tambahkan baris baru untuk setiap entri
            data.forEach(function(order) {
                var newRow = $('<tr>');
                newRow.append('<td>' + order.namaPenerima + '</td>');
                newRow.append('<td>' + order.nomerTelpon + '</td>');
                newRow.append('<td>' + order.alamatPengirim + '</td>');
                newRow.append('<td>' + order.jenisLayanan + '</td>');
                newRow.append('<td>' + order.namaKurir + '</td>');
                newRow.append('<td>' + order.nomerTelponKurir + '</td>');
                orderTable.append(newRow); // Tambahkan baris ke tbody
            });
        },
        error: function(error) {
            console.log('Error:', error);
        }
    });
});

