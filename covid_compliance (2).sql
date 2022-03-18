-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 18, 2022 at 08:49 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bus`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `Admin_id` varchar(25) NOT NULL,
  `Campus_id` varchar(25) NOT NULL,
  `Gender` char(1) NOT NULL,
  `Email` varchar(25) NOT NULL,
  `Password` varchar(25) NOT NULL,
  `First_name` varchar(25) NOT NULL,
  `Last_name` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`Admin_id`, `Campus_id`, `Gender`, `Email`, `Password`, `First_name`, `Last_name`) VALUES
('111', '1', 'm', 'tb@gmail.com', '12345', 'thabo', 'chauke');

-- --------------------------------------------------------

--
-- Table structure for table `campus`
--

CREATE TABLE `campus` (
  `Camp_id` varchar(25) NOT NULL,
  `Campus_name` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `campus`
--

INSERT INTO `campus` (`Camp_id`, `Campus_name`) VALUES
('1', 'sosh');

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--

CREATE TABLE `feedback` (
  `Feed_id` varchar(25) NOT NULL,
  `User_id` varchar(25) NOT NULL,
  `Camp_id` varchar(25) NOT NULL,
  `Comment` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `officer`
--

CREATE TABLE `officer` (
  `Officer_id` varchar(25) NOT NULL,
  `Campus_id` varchar(25) NOT NULL,
  `First_name` varchar(25) NOT NULL,
  `Last_name` varchar(25) NOT NULL,
  `Gender` char(1) NOT NULL,
  `Cellphone_number` varchar(10) NOT NULL,
  `Email` varchar(25) NOT NULL,
  `Password` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `officer`
--

INSERT INTO `officer` (`Officer_id`, `Campus_id`, `First_name`, `Last_name`, `Gender`, `Cellphone_number`, `Email`, `Password`) VALUES
('111', '1', 'thabo', 'chauke', 'm', '0123662559', 'tb@gmail.com', '12345');

-- --------------------------------------------------------

--
-- Table structure for table `record`
--

CREATE TABLE `record` (
  `Record_id` varchar(25) NOT NULL,
  `Office_id` varchar(25) NOT NULL,
  `User_id` varchar(25) NOT NULL,
  `Form_check` varchar(25) NOT NULL,
  `Date` varchar(10) NOT NULL,
  `Tempareture` int(4) NOT NULL,
  `isAllowedEntrence` tinyint(1) NOT NULL,
  `Health_status_reason` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `no` int(11) NOT NULL,
  `User_id` varchar(13) NOT NULL,
  `Camp_id` varchar(25) NOT NULL,
  `First_name` varchar(25) NOT NULL,
  `Last_name` varchar(25) NOT NULL,
  `Gender` char(1) NOT NULL,
  `Type` char(1) NOT NULL,
  `Cellphone_number` varchar(10) DEFAULT NULL,
  `Email` varchar(25) NOT NULL,
  `Password` varchar(25) NOT NULL,
  `profile_pic` blob DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`no`, `User_id`, `Camp_id`, `First_name`, `Last_name`, `Gender`, `Type`, `Cellphone_number`, `Email`, `Password`, `profile_pic`) VALUES
(1, '0000', '1', 'undefined', 'undefined', '&', 'u', 'undefined', 'undefined', 'undefined', ''),
(2, '0001', '1', 'four', 'smith', '1', '2', '0767668445', 'fs@gmail.com', '12345', ''),
(3, '0006', '1', 'four', 'smith', '1', '2', '0767668445', 'fs@gmail.com', '12345', ''),
(4, '00066', '1', 'four', 'smith', '1', '2', '0767668445', 'fs@gmail.com', '12345', ''),
(5, '0007', '1', 'four', 'smith', '1', '2', '0767668445', 'fs@gmail.com', '12345', ''),
(6, '0011', '1', 'five', 'smith', '1', '2', '0767668445', 'fs@gmail.com', '12345', ''),
(7, '002', '1', 'five', 'smith', '1', '2', '0767668445', 'fs@gmail.com', '12345', ''),
(8, '0111', '1', 'five', 'smith', '1', '2', '0767668445', 'fs@gmail.com', '12345', ''),
(9, '1111', '1', 'five', 'smith', '1', '2', '0767668445', 'fs@gmail.com', '12345', ''),
(10, '11111', '1', 'relay', 'javas', '1', '2', '0787665445', 'rj@gmail.com', '12345', ''),
(12, '218179088', '1', 'thabo', 'chauke', 'm', '1', '0123662559', 'tb@gmail.com', 'Lerato@1', ''),
(13, '2424', '1', 'filessss', 'javascript', '1', '2', '0787665445', 'js@gmail.com', '12345', ''),
(14, '3111', '1', 'five', 'smith', '1', '2', '0767668445', 'fs@gmail.com', '12345', ''),
(15, '3452672', '1', 'sesi', 'Phakane', 'f', 'f', '036251586', 'eliz@gmail.com', '12345', ''),
(16, '4111', '1', 'five', 'smith', '1', '2', '0767668445', 'fs@gmail.com', '12345', ''),
(17, '5111', '1', 'five', 'smith', '1', '2', '0767668445', 'fs@gmail.com', '12345', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`Admin_id`),
  ADD KEY `FK_admin_campus_works` (`Campus_id`);

--
-- Indexes for table `campus`
--
ALTER TABLE `campus`
  ADD PRIMARY KEY (`Camp_id`);

--
-- Indexes for table `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`Feed_id`),
  ADD KEY `FK_feedback_user_sends` (`User_id`),
  ADD KEY `FK_feedback_camp_reiceves` (`Camp_id`);

--
-- Indexes for table `officer`
--
ALTER TABLE `officer`
  ADD PRIMARY KEY (`Officer_id`),
  ADD KEY `FK_officer_campus_employes` (`Campus_id`);

--
-- Indexes for table `record`
--
ALTER TABLE `record`
  ADD PRIMARY KEY (`Record_id`),
  ADD KEY `FK_record_user_has` (`User_id`),
  ADD KEY `FK_record_officer_input` (`Office_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`User_id`),
  ADD KEY `FK_user_camp_accom` (`Camp_id`),
  ADD KEY `all` (`no`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `admin`
--
ALTER TABLE `admin`
  ADD CONSTRAINT `FK_admin_campus_works` FOREIGN KEY (`Campus_id`) REFERENCES `campus` (`Camp_id`);

--
-- Constraints for table `feedback`
--
ALTER TABLE `feedback`
  ADD CONSTRAINT `FK_feedback_camp_reiceves` FOREIGN KEY (`Camp_id`) REFERENCES `campus` (`Camp_id`),
  ADD CONSTRAINT `FK_feedback_user_sends` FOREIGN KEY (`User_id`) REFERENCES `user` (`User_id`);

--
-- Constraints for table `officer`
--
ALTER TABLE `officer`
  ADD CONSTRAINT `FK_officer_campus_employes` FOREIGN KEY (`Campus_id`) REFERENCES `campus` (`Camp_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
