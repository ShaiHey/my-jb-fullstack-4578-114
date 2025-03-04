-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Hôte : db
-- Généré le : dim. 02 mars 2025 à 07:42
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
-- Base de données : `ampm`
--
CREATE DATABASE IF NOT EXISTS `ampm` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `ampm`;

-- --------------------------------------------------------

--
-- Structure de la table `categories`
--

CREATE TABLE `categories` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `categories`
--

INSERT INTO `categories` (`id`, `name`, `created_at`, `updated_at`) VALUES
('75bf42d9-f739-11ef-b37d-0242ac110002', 'Beverages', '2025-03-02 07:37:23', '2025-03-02 07:37:23'),
('75bf4c9a-f739-11ef-b37d-0242ac110002', 'Dairy', '2025-03-02 07:37:23', '2025-03-02 07:37:23'),
('75bf50cb-f739-11ef-b37d-0242ac110002', 'Meat', '2025-03-02 07:37:23', '2025-03-02 07:37:23');

-- --------------------------------------------------------

--
-- Structure de la table `products`
--

CREATE TABLE `products` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `production_time` datetime NOT NULL,
  `expiration_time` datetime NOT NULL,
  `category_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `products`
--

INSERT INTO `products` (`id`, `name`, `production_time`, `expiration_time`, `category_id`, `price`, `created_at`, `updated_at`) VALUES
('b3f7caed-f739-11ef-b37d-0242ac110002', 'Coca Cola', '2025-03-02 07:39:39', '2025-03-02 07:39:39', '75bf42d9-f739-11ef-b37d-0242ac110002', 20, '2025-03-02 07:39:39', '2025-03-02 07:39:39'),
('b3f7d0d2-f739-11ef-b37d-0242ac110002', 'Martini Bianco', '2025-03-02 07:39:39', '2025-03-02 07:39:39', '75bf42d9-f739-11ef-b37d-0242ac110002', 28, '2025-03-02 07:39:39', '2025-03-02 07:39:39'),
('b3f7d56f-f739-11ef-b37d-0242ac110002', 'Danone Strawberry', '2025-03-02 07:39:39', '2025-03-02 07:39:39', '75bf4c9a-f739-11ef-b37d-0242ac110002', 9, '2025-03-02 07:39:39', '2025-03-02 07:39:39');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`);

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;