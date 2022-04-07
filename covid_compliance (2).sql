-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 06, 2022 at 09:48 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `covid_compliance`
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
-- Table structure for table `image`
--

CREATE TABLE `image` (
  `image_id` int(25) NOT NULL,
  `pictureName` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `notification`
--

CREATE TABLE `notification` (
  `notification_id` int(25) NOT NULL,
  `admin_id` int(25) NOT NULL,
  `message` varchar(255) NOT NULL
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
  `Record_id` int(25) NOT NULL,
  `Officer_id` int(11) NOT NULL,
  `User_id` varchar(25) NOT NULL,
  `Form_check` varchar(25) NOT NULL,
  `Date` varchar(10) NOT NULL,
  `Tempareture` int(4) NOT NULL,
  `isAllowedEntrence` tinyint(1) NOT NULL,
  `Health_status_reason` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `record`
--

INSERT INTO `record` (`Record_id`, `Officer_id`, `User_id`, `Form_check`, `Date`, `Tempareture`, `isAllowedEntrence`, `Health_status_reason`) VALUES
(1, 0, '2164', '1', '', 0, 0, ''),
(4, 0, '2164', '0', '', 0, 0, ''),
(5, 0, '2164', '0', '', 0, 0, ''),
(6, 0, '222', '0', '', 0, 0, ''),
(7, 0, '13', '1', '', 0, 0, '');

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
(1, '0000', '1', 'undefined', 'undefined', '&', 'u', 'undefined', 'undefined', 'undefined', '');

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
-- Indexes for table `image`
--
ALTER TABLE `image`
  ADD PRIMARY KEY (`image_id`);

--
-- Indexes for table `notification`
--
ALTER TABLE `notification`
  ADD PRIMARY KEY (`notification_id`);

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
  ADD KEY `FK_record_user_has` (`User_id`);

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
-- AUTO_INCREMENT for table `image`
--
ALTER TABLE `image`
  MODIFY `image_id` int(25) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `notification`
--
ALTER TABLE `notification`
  MODIFY `notification_id` int(25) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `record`
--
ALTER TABLE `record`
  MODIFY `Record_id` int(25) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

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
