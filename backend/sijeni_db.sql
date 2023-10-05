-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 05 Okt 2023 pada 15.34
-- Versi server: 10.4.21-MariaDB
-- Versi PHP: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sijeni_db`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_order`
--

CREATE TABLE `tbl_order` (
  `id` int(11) NOT NULL,
  `namaPenerima` varchar(255) DEFAULT NULL,
  `alamatPengirim` varchar(255) DEFAULT NULL,
  `nomerTelpon` varchar(255) DEFAULT NULL,
  `jenisLayanan` varchar(255) DEFAULT NULL,
  `namaKurir` varchar(255) DEFAULT NULL,
  `nomerTelponKurir` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `tbl_order`
--

INSERT INTO `tbl_order` (`id`, `namaPenerima`, `alamatPengirim`, `nomerTelpon`, `jenisLayanan`, `namaKurir`, `nomerTelponKurir`, `createdAt`, `updatedAt`) VALUES
(34, 'Firdan', 'bogor', '085716415670', 'same-day', 'Jojon', '0856321373', '2023-10-03 05:21:48', '2023-10-03 05:21:48'),
(35, 'coba2', 'bandung', '09344343', 'express', 'fifi', '45454545', '2023-10-03 05:29:19', '2023-10-03 05:29:19'),
(36, NULL, NULL, NULL, NULL, NULL, NULL, '2023-10-03 05:34:51', '2023-10-03 05:34:51'),
(37, NULL, NULL, NULL, NULL, NULL, NULL, '2023-10-03 05:59:33', '2023-10-03 05:59:33'),
(38, NULL, NULL, NULL, NULL, NULL, NULL, '2023-10-03 06:13:47', '2023-10-03 06:13:47'),
(39, NULL, NULL, NULL, NULL, NULL, NULL, '2023-10-03 06:20:11', '2023-10-03 06:20:11'),
(40, NULL, NULL, NULL, NULL, NULL, NULL, '2023-10-03 06:28:15', '2023-10-03 06:28:15'),
(41, NULL, NULL, NULL, NULL, NULL, NULL, '2023-10-03 06:33:07', '2023-10-03 06:33:07'),
(42, NULL, NULL, NULL, NULL, NULL, NULL, '2023-10-03 12:46:13', '2023-10-03 12:46:13'),
(43, 'coba 4', 'bandung', '342423', 'same-day', 'joju', '45454545', '2023-10-03 12:49:44', '2023-10-03 12:49:44'),
(44, NULL, NULL, NULL, NULL, NULL, NULL, '2023-10-03 12:53:23', '2023-10-03 12:53:23'),
(45, NULL, NULL, NULL, NULL, NULL, NULL, '2023-10-03 12:55:37', '2023-10-03 12:55:37'),
(46, NULL, NULL, NULL, NULL, NULL, NULL, '2023-10-03 13:00:46', '2023-10-03 13:00:46'),
(47, NULL, NULL, NULL, NULL, NULL, NULL, '2023-10-03 13:03:50', '2023-10-03 13:03:50'),
(48, 'wkkdwkdwod', NULL, NULL, NULL, NULL, NULL, '2023-10-03 13:24:01', '2023-10-03 13:24:01'),
(49, 'Ari Permana', 'bandung', '089611482495', NULL, 'Dwi Cahyo', '23232323', '2023-10-03 13:41:56', '2023-10-03 13:41:56'),
(50, 'coba2', 'makasar', '342423', 'express', 'Dwi Cahyo', 'asdsa', '2023-10-03 14:55:51', '2023-10-03 14:55:51'),
(51, 'Muhamad Firdan Husaini', 'Tanggerang Selatan , BSD', '085716415670', 'express', 'Saep', '0885948394', '2023-10-04 12:47:52', '2023-10-04 12:47:52');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `tbl_order`
--
ALTER TABLE `tbl_order`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `tbl_order`
--
ALTER TABLE `tbl_order`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
