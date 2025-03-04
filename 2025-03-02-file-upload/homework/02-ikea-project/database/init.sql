-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Hôte : db
-- Généré le : lun. 03 mars 2025 à 14:23
-- Version du serveur : 9.2.0
-- Version de PHP : 8.2.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `ikea`
--
CREATE DATABASE IF NOT EXISTS `ikea` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `ikea`;

-- --------------------------------------------------------

--
-- Structure de la table `furniture`
--

CREATE TABLE `furniture` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `furniture_type_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `dimensions` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `color` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `price` decimal(12,2) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `furniture`
--

INSERT INTO `furniture` (`id`, `furniture_type_id`, `dimensions`, `color`, `price`, `created_at`, `updated_at`) VALUES
('0234ed66-f83b-11ef-bc09-0242ac110002', '77717116-f83a-11ef-bc09-0242ac110002', '125x75', 'white', 250.00, '2025-03-03 14:19:46', '2025-03-03 14:19:46'),
('0234f70d-f83b-11ef-bc09-0242ac110002', '77717b6b-f83a-11ef-bc09-0242ac110002', '228x95x83', 'grey', 2600.00, '2025-03-03 14:19:46', '2025-03-03 14:19:46');

-- --------------------------------------------------------

--
-- Structure de la table `furniture_types`
--

CREATE TABLE `furniture_types` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `furniture_types`
--

INSERT INTO `furniture_types` (`id`, `name`, `created_at`, `updated_at`) VALUES
('77717116-f83a-11ef-bc09-0242ac110002', 'Table', '2025-03-03 14:18:19', '2025-03-03 14:18:19'),
('77717b6b-f83a-11ef-bc09-0242ac110002', 'Sofa', '2025-03-03 14:18:19', '2025-03-03 14:18:19');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `furniture`
--
ALTER TABLE `furniture`
  ADD PRIMARY KEY (`id`),
  ADD KEY `furniture_type_id` (`furniture_type_id`);

--
-- Index pour la table `furniture_types`
--
ALTER TABLE `furniture_types`
  ADD PRIMARY KEY (`id`);

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `furniture`
--
ALTER TABLE `furniture`
  ADD CONSTRAINT `furniture_ibfk_1` FOREIGN KEY (`furniture_type_id`) REFERENCES `furniture_types` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;