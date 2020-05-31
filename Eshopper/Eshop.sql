-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jun 01, 2020 at 01:07 AM
-- Server version: 5.7.30-0ubuntu0.18.04.1
-- PHP Version: 7.2.24-0ubuntu0.18.04.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `Eshop`
--

-- --------------------------------------------------------

--
-- Table structure for table `featured`
--

CREATE TABLE `featured` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `featured`
--

INSERT INTO `featured` (`id`, `name`, `price`, `image`) VALUES
(1, 'Girls T-Shit and Blue Edition', 760, 'product1.jpg'),
(2, 'Men\'s Polo T-Shirt', 860, 'product2.jpg'),
(3, 'Girls Polo Black Edition', 2060, 'product3.jpg'),
(4, 'Puma Black Edition', 5060, 'product4.jpg'),
(5, 'Polo Blue Girls Edition', 3600, 'product5.jpg'),
(6, 'White Edition', 1100, 'product6.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`) VALUES
(1, 'tisanthan', 'tisanthan12@gmail.com', '4148b6fa3fa217c0327a817c9e0e6e76'),
(2, 'kala', 'tisanthan@gmail.com', '2a4545d7c28d1b0a302080fcf1c7b255'),
(3, 'tisanthu', 'tasdkaankd@gmail.com', '4148b6fa3fa217c0327a817c9e0e6e76'),
(4, 'tisanthu', 'tisanthan@gmail.com', '4148b6fa3fa217c0327a817c9e0e6e76'),
(5, 'tisa', 'tisanthan@gmail.com', '4148b6fa3fa217c0327a817c9e0e6e76'),
(6, 'nisanthan', 'nisa@email.com', '7bcab1f2e9fe82f0e35e1a2e8d12fe9c'),
(7, 'knbrothers', 'knbrothers@ymail.com', 'bcfca869f6d3205ecf8da55ed239ada7'),
(8, 'knbrothers123', 'knbrothers@ymail.com', 'bcfca869f6d3205ecf8da55ed239ada7');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `featured`
--
ALTER TABLE `featured`
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
-- AUTO_INCREMENT for table `featured`
--
ALTER TABLE `featured`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
