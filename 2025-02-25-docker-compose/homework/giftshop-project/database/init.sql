-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Hôte : db
-- Généré le : sam. 01 mars 2025 à 17:57
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
-- Base de données : `giftshop`
--
CREATE DATABASE IF NOT EXISTS `giftshop` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `giftshop`;

-- --------------------------------------------------------

--
-- Structure de la table `gifts`
--

CREATE TABLE `gifts` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `target_audience_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(40) COLLATE utf8mb4_general_ci NOT NULL,
  `description` text COLLATE utf8mb4_general_ci NOT NULL,
  `price` decimal(20,2) NOT NULL,
  `discount` decimal(20,2) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `gifts`
--

INSERT INTO `gifts` (`id`, `target_audience_id`, `name`, `description`, `price`, `discount`, `created_at`, `updated_at`) VALUES
('62a4db54-a6a7-44cc-b8a7-ca6826eb6baf', 'b090b16e-f6c5-11ef-8ae4-0242ac110002', 'Cadeau spécial3', 'Un magnifique cadeau pour toutes les occasions.', 49.99, 10.00, '2025-03-01 17:56:43', '2025-03-01 17:56:43'),
('876422ff-6513-40d1-a92d-e988fb62290a', 'b090b16e-f6c5-11ef-8ae4-0242ac110002', 'Cadeau spécial', 'Un magnifique cadeau pour toutes les occasions.', 49.99, 10.00, '2025-03-01 17:54:55', '2025-03-01 17:54:55'),
('895edbff-25c8-4aa4-bc14-7b0109ee2af2', 'b090b16e-f6c5-11ef-8ae4-0242ac110002', 'Cadeau spécial2', 'Un magnifique cadeau pour toutes les occasions.', 49.99, 10.00, '2025-03-01 17:56:22', '2025-03-01 17:56:22'),
('bf26b846-f6c5-11ef-8ae4-0242ac110002', 'b090a745-f6c5-11ef-8ae4-0242ac110002', 'Taki', 'Is a card game', 10.00, 0.00, '2025-03-01 17:50:47', '2025-03-01 17:50:47');

-- --------------------------------------------------------

--
-- Structure de la table `target_audiences`
--

CREATE TABLE `target_audiences` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `type` varchar(40) COLLATE utf8mb4_general_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `target_audiences`
--

INSERT INTO `target_audiences` (`id`, `type`, `created_at`, `updated_at`) VALUES
('b090a745-f6c5-11ef-8ae4-0242ac110002', 'Children', '2025-03-01 17:50:14', '2025-03-01 17:50:14'),
('b090b16e-f6c5-11ef-8ae4-0242ac110002', 'Adult', '2025-03-01 17:50:14', '2025-03-01 17:50:14');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `gifts`
--
ALTER TABLE `gifts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `target_audience_id` (`target_audience_id`);

--
-- Index pour la table `target_audiences`
--
ALTER TABLE `target_audiences`
  ADD PRIMARY KEY (`id`);

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `gifts`
--
ALTER TABLE `gifts`
  ADD CONSTRAINT `gifts_ibfk_1` FOREIGN KEY (`target_audience_id`) REFERENCES `target_audiences` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;