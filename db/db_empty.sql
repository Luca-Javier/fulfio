-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-08-2023 a las 03:23:09
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `fulfio`
--
CREATE DATABASE IF NOT EXISTS `fulfio` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `fulfio`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `incidences`
--

CREATE TABLE `incidences` (
  `id` int(16) NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT 1,
  `id_user` int(16) NOT NULL,
  `title` varchar(65) NOT NULL,
  `first_message` varchar(255) NOT NULL,
  `upload_time` timestamp NOT NULL DEFAULT current_timestamp(),
  `last_interaction_time` timestamp NULL DEFAULT NULL,
  `type` varchar(10) NOT NULL,
  `state` varchar(25) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `messages`
--

CREATE TABLE `messages` (
  `id` int(16) NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT 1,
  `incidence_id` int(16) NOT NULL,
  `user_id` int(16) NOT NULL,
  `message` text NOT NULL,
  `upload_time` timestamp NOT NULL DEFAULT current_timestamp(),
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(16) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `active` tinyint(1) DEFAULT 1,
  `name` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `iv` varchar(100) DEFAULT NULL,
  `is_admin` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `incidences`
--
ALTER TABLE `incidences`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`);

--
-- Indices de la tabla `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `incidence_id` (`incidence_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `incidences`
--
ALTER TABLE `incidences`
  MODIFY `id` int(16) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(16) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `incidences`
--
ALTER TABLE `incidences`
  ADD CONSTRAINT `incidences_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `messages`
--
ALTER TABLE `messages`
  ADD CONSTRAINT `messages_ibfk_1` FOREIGN KEY (`incidence_id`) REFERENCES `incidences` (`id`),
  ADD CONSTRAINT `messages_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
