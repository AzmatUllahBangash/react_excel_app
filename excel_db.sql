-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 03, 2022 at 01:59 PM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `excel_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `countries`
--

CREATE TABLE `countries` (
  `id` int(5) NOT NULL,
  `countryCode` char(2) NOT NULL DEFAULT '',
  `countryName` varchar(45) NOT NULL DEFAULT '',
  `currencyCode` char(3) DEFAULT NULL,
  `population` varchar(20) DEFAULT NULL,
  `fipsCode` char(2) DEFAULT NULL,
  `isoNumeric` char(4) DEFAULT NULL,
  `north` varchar(30) DEFAULT NULL,
  `south` varchar(30) DEFAULT NULL,
  `east` varchar(30) DEFAULT NULL,
  `west` varchar(30) DEFAULT NULL,
  `capital` varchar(30) DEFAULT NULL,
  `continentName` varchar(15) DEFAULT NULL,
  `continent` char(2) DEFAULT NULL,
  `areaInSqKm` varchar(20) DEFAULT NULL,
  `isoAlpha3` char(3) DEFAULT NULL,
  `geonameId` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `countries`
--

INSERT INTO `countries` (`id`, `countryCode`, `countryName`, `currencyCode`, `population`, `fipsCode`, `isoNumeric`, `north`, `south`, `east`, `west`, `capital`, `continentName`, `continent`, `areaInSqKm`, `isoAlpha3`, `geonameId`) VALUES
(1, 'AD', 'Andorra', 'EUR', '84000', 'AN', '20', '42.6560439', '42.4284926', '1.786542778', '1.407186714', 'Andorra la Vella', 'Europe', 'EU', '468', 'AND', 3041565),
(2, 'AE', 'United Arab Emirates', 'AED', '4975593', 'AE', '784', '26.08415985', '22.63332939', '56.38166046', '51.58332825', 'Abu Dhabi', 'Asia', 'AS', '82880', 'ARE', 290557),
(3, 'AF', 'Afghanistan', 'AFN', '29121286', 'AF', '4', '38.483418', '29.377472', '74.879448', '60.478443', 'Kabul', 'Asia', 'AS', '647500', 'AFG', 1149361),
(4, 'AG', 'Antigua and Barbuda', 'XCD', '86754', 'AC', '28', '17.729387', '16.996979', '-61.672421', '-61.906425', 'St. John\'s', 'North America', 'NA', '443', 'ATG', 3576396),
(5, 'AI', 'Anguilla', 'XCD', '13254', 'AV', '660', '18.27690197', '18.16029297', '-62.96655545', '-63.1680899', 'The Valley', 'North America', 'NA', '102', 'AIA', 3573511),
(6, 'AL', 'Albania', 'ALL', '2986952', 'AL', '8', '42.66116694', '39.64486248', '21.05743348', '19.26391127', 'Tirana', 'Europe', 'EU', '28748', 'ALB', 783754),
(7, 'AM', 'Armenia', 'AMD', '2968000', 'AM', '51', '41.301834', '38.830528', '46.77243505', '43.44978', 'Yerevan', 'Asia', 'AS', '29800', 'ARM', 174982),
(8, 'AO', 'Angola', 'AOA', '13068161', 'AO', '24', '-4.376826', '-18.042076', '24.082119', '11.679219', 'Luanda', 'Africa', 'AF', '1246700', 'AGO', 3351879),
(9, 'AQ', 'Antarctica', '', '0', 'AY', '10', '-60.515533', '-89.9999', '179.9999', '-179.9999', '', 'Antarctica', 'AN', '1.40E+07', 'ATA', 6697173),
(10, 'AR', 'Argentina', 'ARS', '41343201', 'AR', '32', '-21.781277', '-55.061314', '-53.591835', '-73.58297', 'Buenos Aires', 'South America', 'SA', '2766890', 'ARG', 3865483);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`) VALUES
(1, 'Azmat', 'azmatullah063@gmail.com', '12345');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `countries`
--
ALTER TABLE `countries`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `countries`
--
ALTER TABLE `countries`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=251;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
