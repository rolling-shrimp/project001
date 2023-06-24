-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Jun 24, 2023 at 05:41 AM
-- Server version: 5.7.24
-- PHP Version: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `musicc`
--

-- --------------------------------------------------------

--
-- Table structure for table `beatforsell`
--

CREATE TABLE `beatforsell` (
  `id` int(11) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `beatforsell`
--

INSERT INTO `beatforsell` (`id`, `product_name`, `price`) VALUES
(1, '001 Dark 98bpm', '3000.00'),
(2, '002 Cloudy Street 98bpm', '3000.00'),
(3, '003 Cloudy Street 2.0 98bpm', '3000.00'),
(4, '004 Sampled from Jazz 98bpm', '3000.00'),
(5, '005 Day Dreaming 98bpm', '3000.00'),
(6, '006 Sampled from 1970s R&B 87.5bpm', '3000.00'),
(7, '007 Bind 98bpm', '3500.00');

-- --------------------------------------------------------

--
-- Table structure for table `course_products`
--

CREATE TABLE `course_products` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



-- --------------------------------------------------------

--
-- Table structure for table `course_users`
--

CREATE TABLE `course_users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `email` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--


--
-- Table structure for table `selected_beats`
--

CREATE TABLE `selected_beats` (
  `id` int(11) NOT NULL,
  `beat_option` varchar(255) DEFAULT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



--
-- Table structure for table `the_courses_forsell`
--

CREATE TABLE `the_courses_forsell` (
  `course_id` int(11) NOT NULL,
  `course_name` varchar(100) NOT NULL,
  `price` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `the_courses_forsell`
--

INSERT INTO `the_courses_forsell` (`course_id`, `course_name`, `price`) VALUES
(1, '數位編曲課程', '3600.00'),
(2, '混音課程', '3600.00'),
(3, '獨立音樂人課程', '5000.00');

-- --------------------------------------------------------


-- --------------------------------------------------------

--
-- Table structure for table `your_table`
--

CREATE TABLE `your_table` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `phone_number` varchar(20) NOT NULL,
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--

-- Indexes for dumped tables
--

--
-- Indexes for table `beatforsell`
--
ALTER TABLE `beatforsell`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `course_products`
--
ALTER TABLE `course_products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `course_users`
--
ALTER TABLE `course_users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `selected_beats`
--
ALTER TABLE `selected_beats`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_refYourTableID` (`user_id`);

--
-- Indexes for table `the_courses_forsell`
--
ALTER TABLE `the_courses_forsell`
  ADD PRIMARY KEY (`course_id`);

--
-- Indexes for table `user_selected_beats`
--
ALTER TABLE `user_selected_beats`
  ADD KEY `user_id` (`user_id`),
  ADD KEY `beat_id` (`beat_id`);

--
-- Indexes for table `your_table`
--
ALTER TABLE `your_table`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `beatforsell`
--
ALTER TABLE `beatforsell`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `course_products`
--
ALTER TABLE `course_products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `course_users`
--
ALTER TABLE `course_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `selected_beats`
--
ALTER TABLE `selected_beats`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=96;

--
-- AUTO_INCREMENT for table `the_courses_forsell`
--
ALTER TABLE `the_courses_forsell`
  MODIFY `course_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `your_table`
--
ALTER TABLE `your_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=75;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `course_products`
--
ALTER TABLE `course_products`
  ADD CONSTRAINT `course_products_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `course_users` (`id`);

--
-- Constraints for table `selected_beats`
--
ALTER TABLE `selected_beats`
  ADD CONSTRAINT `fk_refYourTableID` FOREIGN KEY (`user_id`) REFERENCES `your_table` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
