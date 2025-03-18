-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Hôte : db
-- Généré le : dim. 16 mars 2025 à 09:45
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
-- Base de données : `twitter`
--
CREATE DATABASE IF NOT EXISTS `twitter` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `twitter`;

-- --------------------------------------------------------

--
-- Structure de la table `comments`
--

CREATE TABLE `comments` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `post_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `user_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `body` text COLLATE utf8mb4_general_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `comments`
--

INSERT INTO `comments` (`id`, `post_id`, `user_id`, `body`, `created_at`, `updated_at`) VALUES
('0066a7b1-d38c-4027-8682-6e366d2c81e7', 'e3799d20-411d-4469-bcaf-cb191abd7a95', '034485be-cfd2-48a7-b80d-f54773eab18c', 'Gardening is a rewarding hobby that anyone can enjoy. Whether you have a large yard or just a few pots, growing your own plants can be a fulfilling experience.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('04f6fa31-d0fa-4a06-8e93-1c5fe23521f7', 'f500eabc-7451-4327-b4f3-afdc2a442c73', '4b1193cc-7ba1-462c-99c5-2e3ea4ab6d14', 'Gardening is a rewarding hobby that anyone can enjoy. Whether you have a large yard or just a few pots, growing your own plants can be a fulfilling experience.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('058dd8c9-d589-4c30-b74f-1820838dfec6', 'e3799d20-411d-4469-bcaf-cb191abd7a95', '034485be-cfd2-48a7-b80d-f54773eab18c', 'Starting a small business requires careful planning and dedication. With the right strategy, anyone can turn their entrepreneurial dreams into reality.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('0665245f-6b4b-4831-af55-dd911945e876', '21eec5bc-a204-4b9b-b181-8d45d5b57fc0', '4b1193cc-7ba1-462c-99c5-2e3ea4ab6d14', 'The mountains provide a sense of peace and adventure. Whether you are a seasoned hiker or just starting out, there are always new trails to explore.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('0b6db0bf-3d43-4d5e-9ea1-07d8e75bf221', '6c732eca-e0ab-4e93-874d-89ed175a3066', '1230ae30-dc4f-4752-bd84-092956f5c633', 'Improving your cooking skills takes time and practice. Start with mastering the basics, and soon you\'ll be creating culinary masterpieces.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('0c1b8835-4fe2-4c41-9772-ff3b9b487bf2', '9dadf7cd-59ed-4d2d-817c-d9dca835823d', '4b1193cc-7ba1-462c-99c5-2e3ea4ab6d14', 'Improving your cooking skills takes time and practice. Start with mastering the basics, and soon you\'ll be creating culinary masterpieces.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('0c62a82d-dbfa-4c41-a197-7ddb53fac1ed', '71fa80e3-0bd2-4471-8c57-42be69ff5b5e', '034485be-cfd2-48a7-b80d-f54773eab18c', 'Space has fascinated humans for centuries. With modern technology, we are closer than ever to unraveling the secrets of the cosmos.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('0d50983f-0ced-4b47-a3dc-5035411076c3', 'c6e5ea19-cd7e-43ec-9619-739cf587f211', '1230ae30-dc4f-4752-bd84-092956f5c633', 'Daily exercise is essential for maintaining a healthy lifestyle. It doesn\'t take much—just a few minutes of activity each day can make a huge difference.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('0e217b71-cc65-4757-8091-f96a9f0640f6', '07a9fc97-e7f9-49da-a761-2dbfcd05b0f1', '57ca1e6a-fc89-4d28-ad45-a1f351862cfc', 'Mental health awareness has become increasingly important in today\'s society. Understanding and supporting mental health is crucial for overall well-being.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('0eb2d55b-ef95-4a65-8dd9-afbdb8c1115b', '9dadf7cd-59ed-4d2d-817c-d9dca835823d', 'bff2018c-b130-4de4-b645-3246b6e4dbb6', 'Improving your cooking skills takes time and practice. Start with mastering the basics, and soon you\'ll be creating culinary masterpieces.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('0fb74ce2-220f-429e-8b49-1f7078352f9c', '53f1d881-bb94-4dad-bffb-01fcc561537c', 'bff2018c-b130-4de4-b645-3246b6e4dbb6', 'The mountains provide a sense of peace and adventure. Whether you are a seasoned hiker or just starting out, there are always new trails to explore.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('0fc6c172-e602-4523-bd9c-0421a77dcfda', '4dba0c8b-33ce-43c2-802f-5942ee37c668', '034485be-cfd2-48a7-b80d-f54773eab18c', 'Gardening is a rewarding hobby that anyone can enjoy. Whether you have a large yard or just a few pots, growing your own plants can be a fulfilling experience.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('10758c75-fe2f-4558-b2f0-2532416c6c06', '0bc5925c-c089-45b3-bf98-5e7f8654ba46', '57ca1e6a-fc89-4d28-ad45-a1f351862cfc', 'Climate change is an urgent global issue. Understanding its causes and effects is crucial in the fight for a sustainable future.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('1464854d-87f2-444e-9d40-971031a24684', '2dc9c4bb-cdf3-47ef-a899-e9aa1a153bd9', '57ca1e6a-fc89-4d28-ad45-a1f351862cfc', 'Starting a small business requires careful planning and dedication. With the right strategy, anyone can turn their entrepreneurial dreams into reality.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('167c1d88-3d5e-4807-834a-686784cc0e45', '06bb35a0-db3a-4a9f-aed6-c4578d6b3526', '57ca1e6a-fc89-4d28-ad45-a1f351862cfc', 'Climate change is an urgent global issue. Understanding its causes and effects is crucial in the fight for a sustainable future.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('171eb160-c740-4706-91fa-d56aa0a999f1', '0bc5925c-c089-45b3-bf98-5e7f8654ba46', '4b1193cc-7ba1-462c-99c5-2e3ea4ab6d14', 'The mountains provide a sense of peace and adventure. Whether you are a seasoned hiker or just starting out, there are always new trails to explore.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('187ef2bd-07fa-4fbc-8d19-8dc0fb3c34fd', '53f1d881-bb94-4dad-bffb-01fcc561537c', '4b1193cc-7ba1-462c-99c5-2e3ea4ab6d14', 'Climate change is an urgent global issue. Understanding its causes and effects is crucial in the fight for a sustainable future.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('1c523a55-74ea-42d5-8719-f6931b78f0f2', '07a9fc97-e7f9-49da-a761-2dbfcd05b0f1', '57ca1e6a-fc89-4d28-ad45-a1f351862cfc', 'Gardening is a rewarding hobby that anyone can enjoy. Whether you have a large yard or just a few pots, growing your own plants can be a fulfilling experience.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('1cb03c2f-9d27-4f23-9048-2675c2718385', 'e7c71e61-c8fd-4961-bdf8-0ff323f6063c', '034485be-cfd2-48a7-b80d-f54773eab18c', 'The ocean is one of the least explored areas of our planet. In recent years, scientists have made incredible discoveries that give us a glimpse into this mysterious world.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('210f5ef2-1e36-4c88-b7a5-68b5cca1f4f1', 'd779557a-aaf7-4dcc-af4c-193b87860dbe', '034485be-cfd2-48a7-b80d-f54773eab18c', 'Mindfulness is about being present and aware in each moment. It can help reduce stress and increase overall happiness.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('226e818f-831f-4f8c-90db-ee3575be746b', '6c732eca-e0ab-4e93-874d-89ed175a3066', 'bff2018c-b130-4de4-b645-3246b6e4dbb6', 'Positive thinking can change your life. By focusing on the good, you can improve your mental and emotional well-being.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('265e54e3-bba5-44d8-807e-640915a0eb0e', 'b8767839-76f9-4f21-bbc8-a9f9c89a41f9', '1230ae30-dc4f-4752-bd84-092956f5c633', 'salut je test ca parce', '2025-03-16 09:20:54', '2025-03-16 09:20:54'),
('28fc3e2e-87db-4592-9381-092bf1e52764', 'e3799d20-411d-4469-bcaf-cb191abd7a95', 'bff2018c-b130-4de4-b645-3246b6e4dbb6', 'Daily exercise is essential for maintaining a healthy lifestyle. It doesn\'t take much—just a few minutes of activity each day can make a huge difference.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('2b39d906-8187-41f4-bafe-599072fa95c5', 'f8f2373f-eef8-4f71-89c2-f3df7cb9eb7d', '57ca1e6a-fc89-4d28-ad45-a1f351862cfc', 'Improving your cooking skills takes time and practice. Start with mastering the basics, and soon you\'ll be creating culinary masterpieces.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('2d8241c9-4437-4a52-bc9c-7aa26c94b817', '0bc5925c-c089-45b3-bf98-5e7f8654ba46', '034485be-cfd2-48a7-b80d-f54773eab18c', 'Improving your cooking skills takes time and practice. Start with mastering the basics, and soon you\'ll be creating culinary masterpieces.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('30557031-46fe-4b3a-9719-71c4e7fde19b', 'b36cbf8c-b16c-41a2-92eb-e25a09229c48', '57ca1e6a-fc89-4d28-ad45-a1f351862cfc', 'Artificial intelligence is rapidly transforming industries, but the future holds even more exciting possibilities for AI\'s development.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('32864d9c-d186-4e13-b064-6c213c0b701d', '9dadf7cd-59ed-4d2d-817c-d9dca835823d', '1230ae30-dc4f-4752-bd84-092956f5c633', 'Starting a small business requires careful planning and dedication. With the right strategy, anyone can turn their entrepreneurial dreams into reality.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('352f85c3-08bd-42ee-94a9-c692dda06522', 'b36cbf8c-b16c-41a2-92eb-e25a09229c48', 'bff2018c-b130-4de4-b645-3246b6e4dbb6', 'Space has fascinated humans for centuries. With modern technology, we are closer than ever to unraveling the secrets of the cosmos.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('3632001e-68bc-41bc-8c68-12df96b6f2bf', 'b91c6e54-4bc0-48fe-83fc-a706ca430977', '1230ae30-dc4f-4752-bd84-092956f5c633', 'The ocean is one of the least explored areas of our planet. In recent years, scientists have made incredible discoveries that give us a glimpse into this mysterious world.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('376d31f4-de8e-40b6-8007-2a921a9bf81e', 'f500eabc-7451-4327-b4f3-afdc2a442c73', '1230ae30-dc4f-4752-bd84-092956f5c633', 'Mental health awareness has become increasingly important in today\'s society. Understanding and supporting mental health is crucial for overall well-being.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('388ba467-4e9f-4c66-bc87-a685eb4c1919', 'b91c6e54-4bc0-48fe-83fc-a706ca430977', '57ca1e6a-fc89-4d28-ad45-a1f351862cfc', 'The ocean is one of the least explored areas of our planet. In recent years, scientists have made incredible discoveries that give us a glimpse into this mysterious world.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('38a47f52-6a0b-48ad-9d1f-bc4428bb796a', 'b91c6e54-4bc0-48fe-83fc-a706ca430977', '1230ae30-dc4f-4752-bd84-092956f5c633', 'Mindfulness is about being present and aware in each moment. It can help reduce stress and increase overall happiness.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('3a81a949-d4b9-4899-a1f8-715feec2e198', 'd914b0bb-0826-468e-8c32-66296f4bc421', '4b1193cc-7ba1-462c-99c5-2e3ea4ab6d14', 'Improving your cooking skills takes time and practice. Start with mastering the basics, and soon you\'ll be creating culinary masterpieces.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('3af34d82-bc80-438d-9503-26ca02dbc05c', 'f8f2373f-eef8-4f71-89c2-f3df7cb9eb7d', 'bff2018c-b130-4de4-b645-3246b6e4dbb6', 'Social media has evolved drastically in the past decade, shaping the way we communicate and share information.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('3b5b92bb-df6a-4188-85df-cd6c181eb740', 'd779557a-aaf7-4dcc-af4c-193b87860dbe', '1230ae30-dc4f-4752-bd84-092956f5c633', 'Positive thinking can change your life. By focusing on the good, you can improve your mental and emotional well-being.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('3d0e27bb-bca4-4c8f-b756-195e00453739', 'f500eabc-7451-4327-b4f3-afdc2a442c73', 'bff2018c-b130-4de4-b645-3246b6e4dbb6', 'Gardening is a rewarding hobby that anyone can enjoy. Whether you have a large yard or just a few pots, growing your own plants can be a fulfilling experience.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('3dc19779-ef6d-4fa5-a439-152bc280d72f', 'a49a1cb6-d2ab-4e83-b789-99e70334a8a7', 'bff2018c-b130-4de4-b645-3246b6e4dbb6', 'Traveling opens your mind to new cultures and experiences. Whether you\'re visiting bustling cities or remote islands, the world has so much to offer.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('3edd8842-b6e6-45c2-9dcc-f52a2d3c651d', 'c6e5ea19-cd7e-43ec-9619-739cf587f211', 'bff2018c-b130-4de4-b645-3246b6e4dbb6', 'Mindfulness is about being present and aware in each moment. It can help reduce stress and increase overall happiness.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('43045729-fd64-49a1-b8b3-397d214689f3', 'd779557a-aaf7-4dcc-af4c-193b87860dbe', '57ca1e6a-fc89-4d28-ad45-a1f351862cfc', 'Starting a small business requires careful planning and dedication. With the right strategy, anyone can turn their entrepreneurial dreams into reality.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('431d7dde-6bed-447e-bf74-ad99e38bb93e', 'd914b0bb-0826-468e-8c32-66296f4bc421', '57ca1e6a-fc89-4d28-ad45-a1f351862cfc', 'Mindfulness is about being present and aware in each moment. It can help reduce stress and increase overall happiness.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('499fea81-f0d1-4974-9fc8-3967bdb87bee', 'f3a0ad0c-5445-4bf1-99e2-213b4f6d34f4', '4b1193cc-7ba1-462c-99c5-2e3ea4ab6d14', 'Photography allows us to capture moments in time. With a few simple tips, you can take stunning photos with any camera.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('4b16d146-f222-45ae-acd3-5ebaa9bb78cd', '53f1d881-bb94-4dad-bffb-01fcc561537c', '4b1193cc-7ba1-462c-99c5-2e3ea4ab6d14', 'Traveling opens your mind to new cultures and experiences. Whether you\'re visiting bustling cities or remote islands, the world has so much to offer.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('4b3ec27c-d468-4c00-b2ec-f62108e207a7', 'f3a0ad0c-5445-4bf1-99e2-213b4f6d34f4', '1230ae30-dc4f-4752-bd84-092956f5c633', 'Traveling opens your mind to new cultures and experiences. Whether you\'re visiting bustling cities or remote islands, the world has so much to offer.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('4ea55b21-91be-4fb6-8d3d-107c611fc05a', '4c310189-951d-48e5-9477-c85d59290358', '034485be-cfd2-48a7-b80d-f54773eab18c', 'The ocean is one of the least explored areas of our planet. In recent years, scientists have made incredible discoveries that give us a glimpse into this mysterious world.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('50380414-aacd-4329-a51f-518f4074b25a', '9dadf7cd-59ed-4d2d-817c-d9dca835823d', '034485be-cfd2-48a7-b80d-f54773eab18c', 'The ocean is one of the least explored areas of our planet. In recent years, scientists have made incredible discoveries that give us a glimpse into this mysterious world.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('523f2950-044b-4706-94e4-baf371e23f96', '2dc9c4bb-cdf3-47ef-a899-e9aa1a153bd9', '1230ae30-dc4f-4752-bd84-092956f5c633', 'Daily exercise is essential for maintaining a healthy lifestyle. It doesn\'t take much—just a few minutes of activity each day can make a huge difference.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('52f9226f-155d-4d4f-a5d8-05abd7d04309', 'a49a1cb6-d2ab-4e83-b789-99e70334a8a7', 'bff2018c-b130-4de4-b645-3246b6e4dbb6', 'Improving your cooking skills takes time and practice. Start with mastering the basics, and soon you\'ll be creating culinary masterpieces.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('54b734b0-ee8f-4dd3-881d-a0c744a1ca78', '2dc9c4bb-cdf3-47ef-a899-e9aa1a153bd9', '4b1193cc-7ba1-462c-99c5-2e3ea4ab6d14', 'Space has fascinated humans for centuries. With modern technology, we are closer than ever to unraveling the secrets of the cosmos.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('5557dfbb-89d7-4255-9084-164f314719a4', 'b91c6e54-4bc0-48fe-83fc-a706ca430977', 'bff2018c-b130-4de4-b645-3246b6e4dbb6', 'Mental health awareness has become increasingly important in today\'s society. Understanding and supporting mental health is crucial for overall well-being.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('56a11b1e-0ea0-4e22-a975-1bb94ee660b6', '06bb35a0-db3a-4a9f-aed6-c4578d6b3526', '034485be-cfd2-48a7-b80d-f54773eab18c', 'Photography allows us to capture moments in time. With a few simple tips, you can take stunning photos with any camera.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('58c6b3ea-75cf-4ff6-9b68-da42dd42b702', 'a7385d69-8331-406e-a25a-9f206414ebc5', '4b1193cc-7ba1-462c-99c5-2e3ea4ab6d14', 'Daily exercise is essential for maintaining a healthy lifestyle. It doesn\'t take much—just a few minutes of activity each day can make a huge difference.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('5d29ceef-7a31-4f32-b915-a5a32f76eb4e', '9dadf7cd-59ed-4d2d-817c-d9dca835823d', 'bff2018c-b130-4de4-b645-3246b6e4dbb6', 'Space has fascinated humans for centuries. With modern technology, we are closer than ever to unraveling the secrets of the cosmos.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('5e9d660d-e1b4-4c09-9f98-9d5729a2ebb4', 'f8f2373f-eef8-4f71-89c2-f3df7cb9eb7d', '1230ae30-dc4f-4752-bd84-092956f5c633', 'Gardening is a rewarding hobby that anyone can enjoy. Whether you have a large yard or just a few pots, growing your own plants can be a fulfilling experience.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('60aba216-b382-4973-bee1-3122ef264469', 'd914b0bb-0826-468e-8c32-66296f4bc421', 'bff2018c-b130-4de4-b645-3246b6e4dbb6', 'Starting a small business requires careful planning and dedication. With the right strategy, anyone can turn their entrepreneurial dreams into reality.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('614756c8-393e-4409-ae78-ec4d3a4bb109', '59624e96-6167-411a-9846-06e5bddd17fe', '4b1193cc-7ba1-462c-99c5-2e3ea4ab6d14', 'Mental health awareness has become increasingly important in today\'s society. Understanding and supporting mental health is crucial for overall well-being.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('61ece0c1-11fc-4b7c-b736-f38e32cd6f0b', '06bb35a0-db3a-4a9f-aed6-c4578d6b3526', '57ca1e6a-fc89-4d28-ad45-a1f351862cfc', 'Improving your cooking skills takes time and practice. Start with mastering the basics, and soon you\'ll be creating culinary masterpieces.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('63f2e104-0172-47bf-9bf7-2233d118134c', 'c6e5ea19-cd7e-43ec-9619-739cf587f211', '1230ae30-dc4f-4752-bd84-092956f5c633', 'The mountains provide a sense of peace and adventure. Whether you are a seasoned hiker or just starting out, there are always new trails to explore.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('693b6a2b-13be-4f7e-bfcb-6f7d2f22241a', '07a9fc97-e7f9-49da-a761-2dbfcd05b0f1', '4b1193cc-7ba1-462c-99c5-2e3ea4ab6d14', 'Mental health awareness has become increasingly important in today\'s society. Understanding and supporting mental health is crucial for overall well-being.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('6c3d591c-0708-4e03-a983-7aa29f9177c4', 'f8f2373f-eef8-4f71-89c2-f3df7cb9eb7d', 'bff2018c-b130-4de4-b645-3246b6e4dbb6', 'Positive thinking can change your life. By focusing on the good, you can improve your mental and emotional well-being.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('6ebfcdde-098e-45e7-81a9-4b3f0fc1cd38', 'e3799d20-411d-4469-bcaf-cb191abd7a95', '4b1193cc-7ba1-462c-99c5-2e3ea4ab6d14', 'Gardening is a rewarding hobby that anyone can enjoy. Whether you have a large yard or just a few pots, growing your own plants can be a fulfilling experience.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('70418eda-7ef7-4365-bee0-eef6e3b3ced3', '4dba0c8b-33ce-43c2-802f-5942ee37c668', '034485be-cfd2-48a7-b80d-f54773eab18c', 'Gardening is a rewarding hobby that anyone can enjoy. Whether you have a large yard or just a few pots, growing your own plants can be a fulfilling experience.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('717bde79-86cd-4823-a34d-9063589458f7', '4c310189-951d-48e5-9477-c85d59290358', '1230ae30-dc4f-4752-bd84-092956f5c633', 'Daily exercise is essential for maintaining a healthy lifestyle. It doesn\'t take much—just a few minutes of activity each day can make a huge difference.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('75121388-79b7-4764-8061-a048fcf3460f', 'd779557a-aaf7-4dcc-af4c-193b87860dbe', '57ca1e6a-fc89-4d28-ad45-a1f351862cfc', 'Climate change is an urgent global issue. Understanding its causes and effects is crucial in the fight for a sustainable future.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('766f461c-5bb0-43da-b51b-f3e365679fb8', '4c310189-951d-48e5-9477-c85d59290358', 'bff2018c-b130-4de4-b645-3246b6e4dbb6', 'Starting a small business requires careful planning and dedication. With the right strategy, anyone can turn their entrepreneurial dreams into reality.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('7a7c8033-2244-4621-8b8e-1dedb08dad09', '71fa80e3-0bd2-4471-8c57-42be69ff5b5e', '4b1193cc-7ba1-462c-99c5-2e3ea4ab6d14', 'Gardening is a rewarding hobby that anyone can enjoy. Whether you have a large yard or just a few pots, growing your own plants can be a fulfilling experience.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('7d0aa8c3-602b-4f0f-99d5-9a76027997d2', '06bb35a0-db3a-4a9f-aed6-c4578d6b3526', '4b1193cc-7ba1-462c-99c5-2e3ea4ab6d14', 'Daily exercise is essential for maintaining a healthy lifestyle. It doesn\'t take much—just a few minutes of activity each day can make a huge difference.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('7f2db5e0-f158-4718-a57d-6757f2786c42', '4dba0c8b-33ce-43c2-802f-5942ee37c668', 'bff2018c-b130-4de4-b645-3246b6e4dbb6', 'Climate change is an urgent global issue. Understanding its causes and effects is crucial in the fight for a sustainable future.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('814a3250-ec16-48cc-a529-2fabda108087', 'f500eabc-7451-4327-b4f3-afdc2a442c73', '034485be-cfd2-48a7-b80d-f54773eab18c', 'Mental health awareness has become increasingly important in today\'s society. Understanding and supporting mental health is crucial for overall well-being.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('81ec2bb3-31cc-427a-8639-a85e96b537ba', 'a7385d69-8331-406e-a25a-9f206414ebc5', '1230ae30-dc4f-4752-bd84-092956f5c633', 'Positive thinking can change your life. By focusing on the good, you can improve your mental and emotional well-being.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('81ffa076-b032-408f-bc40-a5a8043aa596', '9d0d05bd-1f97-4a0a-bd73-5e2b3b901fd9', '1230ae30-dc4f-4752-bd84-092956f5c633', 'Social media has evolved drastically in the past decade, shaping the way we communicate and share information.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('82271520-f7b9-442a-b327-fc88eb824ecd', '4dba0c8b-33ce-43c2-802f-5942ee37c668', 'bff2018c-b130-4de4-b645-3246b6e4dbb6', 'Gardening is a rewarding hobby that anyone can enjoy. Whether you have a large yard or just a few pots, growing your own plants can be a fulfilling experience.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('85abc7e8-37af-4b35-bd07-5ab96f36365c', 'a7385d69-8331-406e-a25a-9f206414ebc5', '034485be-cfd2-48a7-b80d-f54773eab18c', 'The mountains provide a sense of peace and adventure. Whether you are a seasoned hiker or just starting out, there are always new trails to explore.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('86b1cf3f-8eb7-415e-b3aa-51e827acaea1', 'a7385d69-8331-406e-a25a-9f206414ebc5', '57ca1e6a-fc89-4d28-ad45-a1f351862cfc', 'Social media has evolved drastically in the past decade, shaping the way we communicate and share information.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('895b67dc-f795-407a-97ec-e7565d1bc692', '07a9fc97-e7f9-49da-a761-2dbfcd05b0f1', '4b1193cc-7ba1-462c-99c5-2e3ea4ab6d14', 'Traveling opens your mind to new cultures and experiences. Whether you\'re visiting bustling cities or remote islands, the world has so much to offer.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('8f77e82d-74dd-456e-9142-360e7d9ced70', '06bb35a0-db3a-4a9f-aed6-c4578d6b3526', '1230ae30-dc4f-4752-bd84-092956f5c633', 'Starting a small business requires careful planning and dedication. With the right strategy, anyone can turn their entrepreneurial dreams into reality.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('97321ff4-0f93-4468-b173-b107f956c838', '6c732eca-e0ab-4e93-874d-89ed175a3066', '1230ae30-dc4f-4752-bd84-092956f5c633', 'The mountains provide a sense of peace and adventure. Whether you are a seasoned hiker or just starting out, there are always new trails to explore.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('97aadfc8-d8d1-4f12-bf0a-8114291044db', 'f8f2373f-eef8-4f71-89c2-f3df7cb9eb7d', '57ca1e6a-fc89-4d28-ad45-a1f351862cfc', 'Improving your cooking skills takes time and practice. Start with mastering the basics, and soon you\'ll be creating culinary masterpieces.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('97cab74c-0f3a-48e2-9720-b42db5a7a0ea', '53f1d881-bb94-4dad-bffb-01fcc561537c', '57ca1e6a-fc89-4d28-ad45-a1f351862cfc', 'Artificial intelligence is rapidly transforming industries, but the future holds even more exciting possibilities for AI\'s development.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('97f1af53-5004-4c38-971c-df973ecf104a', '07a9fc97-e7f9-49da-a761-2dbfcd05b0f1', 'bff2018c-b130-4de4-b645-3246b6e4dbb6', 'The ocean is one of the least explored areas of our planet. In recent years, scientists have made incredible discoveries that give us a glimpse into this mysterious world.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('99741614-6e57-44ce-a655-d4185c837a6e', '2dc9c4bb-cdf3-47ef-a899-e9aa1a153bd9', '57ca1e6a-fc89-4d28-ad45-a1f351862cfc', 'Social media has evolved drastically in the past decade, shaping the way we communicate and share information.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('9b40788e-9ffe-4e4c-9cb1-5ef05edeabf2', '71fa80e3-0bd2-4471-8c57-42be69ff5b5e', '034485be-cfd2-48a7-b80d-f54773eab18c', 'Gardening is a rewarding hobby that anyone can enjoy. Whether you have a large yard or just a few pots, growing your own plants can be a fulfilling experience.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('9c04068d-6f45-4e89-b2d6-0a0b291a1645', 'b91c6e54-4bc0-48fe-83fc-a706ca430977', '034485be-cfd2-48a7-b80d-f54773eab18c', 'Artificial intelligence is rapidly transforming industries, but the future holds even more exciting possibilities for AI\'s development.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('a0855c8f-4862-4f71-8614-557fb30925d2', 'd914b0bb-0826-468e-8c32-66296f4bc421', '57ca1e6a-fc89-4d28-ad45-a1f351862cfc', 'Climate change is an urgent global issue. Understanding its causes and effects is crucial in the fight for a sustainable future.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('a098859b-e715-43ff-9879-644b407f220d', 'c6e5ea19-cd7e-43ec-9619-739cf587f211', '57ca1e6a-fc89-4d28-ad45-a1f351862cfc', 'Climate change is an urgent global issue. Understanding its causes and effects is crucial in the fight for a sustainable future.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('a9b6c01c-6c7f-41ee-a30e-5b9b3581b111', 'c6e5ea19-cd7e-43ec-9619-739cf587f211', '57ca1e6a-fc89-4d28-ad45-a1f351862cfc', 'Space has fascinated humans for centuries. With modern technology, we are closer than ever to unraveling the secrets of the cosmos.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('ab3f2f87-9175-441a-a3a5-590a0873ed93', '53f1d881-bb94-4dad-bffb-01fcc561537c', '4b1193cc-7ba1-462c-99c5-2e3ea4ab6d14', 'Starting a small business requires careful planning and dedication. With the right strategy, anyone can turn their entrepreneurial dreams into reality.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('ab70b2ec-924c-44af-8560-b7cc8384e93d', 'e7c71e61-c8fd-4961-bdf8-0ff323f6063c', 'bff2018c-b130-4de4-b645-3246b6e4dbb6', 'Artificial intelligence is rapidly transforming industries, but the future holds even more exciting possibilities for AI\'s development.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('ab96f474-c832-4691-b683-b5db9496fc02', '21eec5bc-a204-4b9b-b181-8d45d5b57fc0', '57ca1e6a-fc89-4d28-ad45-a1f351862cfc', 'The mountains provide a sense of peace and adventure. Whether you are a seasoned hiker or just starting out, there are always new trails to explore.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('afce5574-c736-4ff4-bf76-e5d7e7d5e3de', '71fa80e3-0bd2-4471-8c57-42be69ff5b5e', 'bff2018c-b130-4de4-b645-3246b6e4dbb6', 'Mindfulness is about being present and aware in each moment. It can help reduce stress and increase overall happiness.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('aff9f4b4-20c1-40b1-bb26-8295a8e42058', 'b36cbf8c-b16c-41a2-92eb-e25a09229c48', '034485be-cfd2-48a7-b80d-f54773eab18c', 'Social media has evolved drastically in the past decade, shaping the way we communicate and share information.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('b1b21f91-5847-4011-bce3-fd96c4892038', 'a49a1cb6-d2ab-4e83-b789-99e70334a8a7', 'bff2018c-b130-4de4-b645-3246b6e4dbb6', 'Social media has evolved drastically in the past decade, shaping the way we communicate and share information.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('b2c63bac-b7db-4370-9792-6d29aacba06f', 'a49a1cb6-d2ab-4e83-b789-99e70334a8a7', '1230ae30-dc4f-4752-bd84-092956f5c633', 'The ocean is one of the least explored areas of our planet. In recent years, scientists have made incredible discoveries that give us a glimpse into this mysterious world.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('b36df1f5-c9e3-4998-b234-26c08a2906e0', 'd779557a-aaf7-4dcc-af4c-193b87860dbe', '1230ae30-dc4f-4752-bd84-092956f5c633', 'The mountains provide a sense of peace and adventure. Whether you are a seasoned hiker or just starting out, there are always new trails to explore.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('b71147f9-737b-4ac4-a71c-6e52e2f3e429', '4dba0c8b-33ce-43c2-802f-5942ee37c668', '1230ae30-dc4f-4752-bd84-092956f5c633', 'Gardening is a rewarding hobby that anyone can enjoy. Whether you have a large yard or just a few pots, growing your own plants can be a fulfilling experience.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('b9281da7-0ca4-48c8-96e5-0cddd2b0cd0b', 'e7c71e61-c8fd-4961-bdf8-0ff323f6063c', '1230ae30-dc4f-4752-bd84-092956f5c633', 'Starting a small business requires careful planning and dedication. With the right strategy, anyone can turn their entrepreneurial dreams into reality.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('b938d4e7-1ff6-43e8-89a6-6ebfbdec550a', 'f3a0ad0c-5445-4bf1-99e2-213b4f6d34f4', '57ca1e6a-fc89-4d28-ad45-a1f351862cfc', 'The ocean is one of the least explored areas of our planet. In recent years, scientists have made incredible discoveries that give us a glimpse into this mysterious world.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('bba78cdf-63a7-4565-96a9-5983839da1f7', '9d0d05bd-1f97-4a0a-bd73-5e2b3b901fd9', '4b1193cc-7ba1-462c-99c5-2e3ea4ab6d14', 'The mountains provide a sense of peace and adventure. Whether you are a seasoned hiker or just starting out, there are always new trails to explore.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('bc1e1d45-6db4-46cb-8bf9-dbea683e8166', '0bc5925c-c089-45b3-bf98-5e7f8654ba46', 'bff2018c-b130-4de4-b645-3246b6e4dbb6', 'The mountains provide a sense of peace and adventure. Whether you are a seasoned hiker or just starting out, there are always new trails to explore.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('bc492ce5-a46b-42c1-a1b3-0dd47f79b519', 'e7c71e61-c8fd-4961-bdf8-0ff323f6063c', '1230ae30-dc4f-4752-bd84-092956f5c633', 'Space has fascinated humans for centuries. With modern technology, we are closer than ever to unraveling the secrets of the cosmos.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('bdefe8be-c9de-4439-9887-9a0d5480aecc', 'e7c71e61-c8fd-4961-bdf8-0ff323f6063c', '4b1193cc-7ba1-462c-99c5-2e3ea4ab6d14', 'The mountains provide a sense of peace and adventure. Whether you are a seasoned hiker or just starting out, there are always new trails to explore.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('be2f86ca-981d-47d2-879f-b460c18e3ba0', '59624e96-6167-411a-9846-06e5bddd17fe', 'bff2018c-b130-4de4-b645-3246b6e4dbb6', 'The mountains provide a sense of peace and adventure. Whether you are a seasoned hiker or just starting out, there are always new trails to explore.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('caa22c47-47e8-446f-b294-76b93d88b4ee', 'd914b0bb-0826-468e-8c32-66296f4bc421', '1230ae30-dc4f-4752-bd84-092956f5c633', 'The mountains provide a sense of peace and adventure. Whether you are a seasoned hiker or just starting out, there are always new trails to explore.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('d50a4e51-ebb9-48d9-aae3-c29572ca6ac3', 'f500eabc-7451-4327-b4f3-afdc2a442c73', 'bff2018c-b130-4de4-b645-3246b6e4dbb6', 'Improving your cooking skills takes time and practice. Start with mastering the basics, and soon you\'ll be creating culinary masterpieces.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('d9c877b4-694d-4397-a5b1-09718034c02a', '59624e96-6167-411a-9846-06e5bddd17fe', '57ca1e6a-fc89-4d28-ad45-a1f351862cfc', 'Artificial intelligence is rapidly transforming industries, but the future holds even more exciting possibilities for AI\'s development.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('daab4405-53a6-47e4-b161-840c027bbf9f', '59624e96-6167-411a-9846-06e5bddd17fe', 'bff2018c-b130-4de4-b645-3246b6e4dbb6', 'Space has fascinated humans for centuries. With modern technology, we are closer than ever to unraveling the secrets of the cosmos.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('dada012a-a60f-4740-b685-f2a3d6d3ecc9', 'a7385d69-8331-406e-a25a-9f206414ebc5', 'bff2018c-b130-4de4-b645-3246b6e4dbb6', 'Photography allows us to capture moments in time. With a few simple tips, you can take stunning photos with any camera.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('db348ebf-329f-459c-b4db-a41c59231e4e', 'b36cbf8c-b16c-41a2-92eb-e25a09229c48', 'bff2018c-b130-4de4-b645-3246b6e4dbb6', 'Positive thinking can change your life. By focusing on the good, you can improve your mental and emotional well-being.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('db6624d9-92e5-4e09-8ff1-83ce68637937', '59624e96-6167-411a-9846-06e5bddd17fe', 'bff2018c-b130-4de4-b645-3246b6e4dbb6', 'Mental health awareness has become increasingly important in today\'s society. Understanding and supporting mental health is crucial for overall well-being.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('de705178-aa1a-44ae-9b48-6ea893597b3b', '0bc5925c-c089-45b3-bf98-5e7f8654ba46', '57ca1e6a-fc89-4d28-ad45-a1f351862cfc', 'The mountains provide a sense of peace and adventure. Whether you are a seasoned hiker or just starting out, there are always new trails to explore.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('dec9fa44-e817-4fe0-9303-085b910a2420', '4c310189-951d-48e5-9477-c85d59290358', '034485be-cfd2-48a7-b80d-f54773eab18c', 'Photography allows us to capture moments in time. With a few simple tips, you can take stunning photos with any camera.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('e5b70975-00d7-4130-b829-85159ace48b3', 'f3a0ad0c-5445-4bf1-99e2-213b4f6d34f4', 'bff2018c-b130-4de4-b645-3246b6e4dbb6', 'Daily exercise is essential for maintaining a healthy lifestyle. It doesn\'t take much—just a few minutes of activity each day can make a huge difference.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('e632f905-210f-4a3b-8fa2-207e7548e5e7', '62a447cc-d06f-4a91-9d32-9eb86f1ef5ba', '1230ae30-dc4f-4752-bd84-092956f5c633', 'mishel how are you today ?', '2025-03-16 09:20:10', '2025-03-16 09:20:10'),
('e78c4e96-378b-4810-bf62-4bd914b4b91d', '4c310189-951d-48e5-9477-c85d59290358', '57ca1e6a-fc89-4d28-ad45-a1f351862cfc', 'The mountains provide a sense of peace and adventure. Whether you are a seasoned hiker or just starting out, there are always new trails to explore.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('e85cfad8-a5fd-4210-950f-98e6ea1e2990', '21eec5bc-a204-4b9b-b181-8d45d5b57fc0', '1230ae30-dc4f-4752-bd84-092956f5c633', 'Social media has evolved drastically in the past decade, shaping the way we communicate and share information.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('e8e85223-238c-4f4d-a603-c4fc479a0c03', '9d0d05bd-1f97-4a0a-bd73-5e2b3b901fd9', '4b1193cc-7ba1-462c-99c5-2e3ea4ab6d14', 'Climate change is an urgent global issue. Understanding its causes and effects is crucial in the fight for a sustainable future.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('e91d19d8-8210-47af-8a1c-2698144364e0', '6c732eca-e0ab-4e93-874d-89ed175a3066', '034485be-cfd2-48a7-b80d-f54773eab18c', 'The ocean is one of the least explored areas of our planet. In recent years, scientists have made incredible discoveries that give us a glimpse into this mysterious world.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('ec03adde-1b00-497c-84b5-d824612ff2c1', '9d0d05bd-1f97-4a0a-bd73-5e2b3b901fd9', '57ca1e6a-fc89-4d28-ad45-a1f351862cfc', 'Starting a small business requires careful planning and dedication. With the right strategy, anyone can turn their entrepreneurial dreams into reality.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('ec923e84-9c66-4632-aa76-769d5b788431', '9d0d05bd-1f97-4a0a-bd73-5e2b3b901fd9', 'bff2018c-b130-4de4-b645-3246b6e4dbb6', 'Positive thinking can change your life. By focusing on the good, you can improve your mental and emotional well-being.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('ec9595eb-b19f-413b-a520-dee1d13308a0', '07a9fc97-e7f9-49da-a761-2dbfcd05b0f1', '1230ae30-dc4f-4752-bd84-092956f5c633', 'tettetetetetetetetetete', '2025-03-16 09:34:34', '2025-03-16 09:34:34'),
('eca36f44-8ab7-4f0b-9451-59b361088982', '6c732eca-e0ab-4e93-874d-89ed175a3066', '034485be-cfd2-48a7-b80d-f54773eab18c', 'Space has fascinated humans for centuries. With modern technology, we are closer than ever to unraveling the secrets of the cosmos.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('ee4e0279-31d4-4439-85c6-fa88b16d8132', 'e3799d20-411d-4469-bcaf-cb191abd7a95', '57ca1e6a-fc89-4d28-ad45-a1f351862cfc', 'Space has fascinated humans for centuries. With modern technology, we are closer than ever to unraveling the secrets of the cosmos.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('ef1b8b5c-043f-4547-9b8e-c5f80a27312d', '07a9fc97-e7f9-49da-a761-2dbfcd05b0f1', '1230ae30-dc4f-4752-bd84-092956f5c633', 'je test les comments', '2025-03-16 09:33:50', '2025-03-16 09:33:50'),
('f1ef651b-c3a9-4622-aec6-63d592ecfd5b', 'a49a1cb6-d2ab-4e83-b789-99e70334a8a7', '4b1193cc-7ba1-462c-99c5-2e3ea4ab6d14', 'Positive thinking can change your life. By focusing on the good, you can improve your mental and emotional well-being.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('f72fac20-08e6-43a9-b4fc-0466c1e6146d', '21eec5bc-a204-4b9b-b181-8d45d5b57fc0', '4b1193cc-7ba1-462c-99c5-2e3ea4ab6d14', 'The ocean is one of the least explored areas of our planet. In recent years, scientists have made incredible discoveries that give us a glimpse into this mysterious world.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('f7533b9c-03bc-48b6-9119-4e9b665eee7f', 'b36cbf8c-b16c-41a2-92eb-e25a09229c48', '4b1193cc-7ba1-462c-99c5-2e3ea4ab6d14', 'Traveling opens your mind to new cultures and experiences. Whether you\'re visiting bustling cities or remote islands, the world has so much to offer.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('fb9f63ff-98e5-4481-9772-d1eceeb875af', '2dc9c4bb-cdf3-47ef-a899-e9aa1a153bd9', '034485be-cfd2-48a7-b80d-f54773eab18c', 'The mountains provide a sense of peace and adventure. Whether you are a seasoned hiker or just starting out, there are always new trails to explore.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('fd0dc2e5-357d-4c12-91fd-88dbb1d0ba7a', 'f3a0ad0c-5445-4bf1-99e2-213b4f6d34f4', '4b1193cc-7ba1-462c-99c5-2e3ea4ab6d14', 'Daily exercise is essential for maintaining a healthy lifestyle. It doesn\'t take much—just a few minutes of activity each day can make a huge difference.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('fe903729-9ec5-48ee-b0dc-ac2b9dda6949', '21eec5bc-a204-4b9b-b181-8d45d5b57fc0', '1230ae30-dc4f-4752-bd84-092956f5c633', 'Starting a small business requires careful planning and dedication. With the right strategy, anyone can turn their entrepreneurial dreams into reality.', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('ff7e5d11-d20a-46c3-af33-4925ddbc719e', '71fa80e3-0bd2-4471-8c57-42be69ff5b5e', '034485be-cfd2-48a7-b80d-f54773eab18c', 'Daily exercise is essential for maintaining a healthy lifestyle. It doesn\'t take much—just a few minutes of activity each day can make a huge difference.', '2025-03-03 13:55:18', '2025-03-03 13:55:18');

-- --------------------------------------------------------

--
-- Structure de la table `follows`
--

CREATE TABLE `follows` (
  `follower_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `followee_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `follows`
--

INSERT INTO `follows` (`follower_id`, `followee_id`, `created_at`, `updated_at`) VALUES
('034485be-cfd2-48a7-b80d-f54773eab18c', '1230ae30-dc4f-4752-bd84-092956f5c633', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('034485be-cfd2-48a7-b80d-f54773eab18c', '4b1193cc-7ba1-462c-99c5-2e3ea4ab6d14', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('034485be-cfd2-48a7-b80d-f54773eab18c', 'bff2018c-b130-4de4-b645-3246b6e4dbb6', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('1230ae30-dc4f-4752-bd84-092956f5c633', '4b1193cc-7ba1-462c-99c5-2e3ea4ab6d14', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('1230ae30-dc4f-4752-bd84-092956f5c633', '57ca1e6a-fc89-4d28-ad45-a1f351862cfc', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('1230ae30-dc4f-4752-bd84-092956f5c633', 'bff2018c-b130-4de4-b645-3246b6e4dbb6', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('4b1193cc-7ba1-462c-99c5-2e3ea4ab6d14', '034485be-cfd2-48a7-b80d-f54773eab18c', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('4b1193cc-7ba1-462c-99c5-2e3ea4ab6d14', '1230ae30-dc4f-4752-bd84-092956f5c633', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('4b1193cc-7ba1-462c-99c5-2e3ea4ab6d14', 'bff2018c-b130-4de4-b645-3246b6e4dbb6', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('57ca1e6a-fc89-4d28-ad45-a1f351862cfc', '034485be-cfd2-48a7-b80d-f54773eab18c', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('57ca1e6a-fc89-4d28-ad45-a1f351862cfc', '4b1193cc-7ba1-462c-99c5-2e3ea4ab6d14', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('57ca1e6a-fc89-4d28-ad45-a1f351862cfc', 'bff2018c-b130-4de4-b645-3246b6e4dbb6', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('bff2018c-b130-4de4-b645-3246b6e4dbb6', '034485be-cfd2-48a7-b80d-f54773eab18c', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('bff2018c-b130-4de4-b645-3246b6e4dbb6', '1230ae30-dc4f-4752-bd84-092956f5c633', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('bff2018c-b130-4de4-b645-3246b6e4dbb6', '4b1193cc-7ba1-462c-99c5-2e3ea4ab6d14', '2025-03-03 13:55:18', '2025-03-03 13:55:18');

-- --------------------------------------------------------

--
-- Structure de la table `posts`
--

CREATE TABLE `posts` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `user_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `title` varchar(40) COLLATE utf8mb4_general_ci NOT NULL,
  `body` text COLLATE utf8mb4_general_ci NOT NULL,
  `image_url` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `posts`
--

INSERT INTO `posts` (`id`, `user_id`, `title`, `body`, `image_url`, `created_at`, `updated_at`) VALUES
('06bb35a0-db3a-4a9f-aed6-c4578d6b3526', '034485be-cfd2-48a7-b80d-f54773eab18c', 'How to Improve Your Cooking Skills', 'Artificial intelligence is rapidly transforming industries, but the future holds even more exciting possibilities for AI\'s development.', 'https://picsum.photos/500/700', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('07a9fc97-e7f9-49da-a761-2dbfcd05b0f1', '1230ae30-dc4f-4752-bd84-092956f5c633', 'Exploring the Depths of the Ocean', 'Gardening is a rewarding hobby that anyone can enjoy. Whether you have a large yard or just a few pots, growing your own plants can be a fulfilling experience.', 'https://picsum.photos/500/700', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('0bc5925c-c089-45b3-bf98-5e7f8654ba46', '1230ae30-dc4f-4752-bd84-092956f5c633', 'A Journey Through the Mountains', 'The ocean is one of the least explored areas of our planet. In recent years, scientists have made incredible discoveries that give us a glimpse into this mysterious world.', 'https://picsum.photos/400/600', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('137fcd5b-664f-4e51-b71e-3618c0320e05', '1230ae30-dc4f-4752-bd84-092956f5c633', 'shaishaishaishaishaishai', 'shaishaishai\r\nshaishaishai\r\nshaishaishai\r\nshaishaishai\r\nshaishaishai\r\n', NULL, '2025-03-16 07:34:04', '2025-03-16 07:34:04'),
('21eec5bc-a204-4b9b-b181-8d45d5b57fc0', '57ca1e6a-fc89-4d28-ad45-a1f351862cfc', 'Exploring the Depths of the Ocean', 'Positive thinking can change your life. By focusing on the good, you can improve your mental and emotional well-being.', 'https://picsum.photos/300/300', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('28d569e5-20cb-46b5-bcd8-223368f505ab', '1230ae30-dc4f-4752-bd84-092956f5c633', 'my new post from today', 'my new post from todaymy new post from today', NULL, '2025-03-16 07:28:16', '2025-03-16 07:28:16'),
('2dc9c4bb-cdf3-47ef-a899-e9aa1a153bd9', '57ca1e6a-fc89-4d28-ad45-a1f351862cfc', 'Top 10 Travel Destinations for 2024', 'Daily exercise is essential for maintaining a healthy lifestyle. It doesn\'t take much—just a few minutes of activity each day can make a huge difference.', 'https://picsum.photos/300/300', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('4c310189-951d-48e5-9477-c85d59290358', '1230ae30-dc4f-4752-bd84-092956f5c633', 'Top 10 Travel Destinations for 2024', 'Traveling opens your mind to new cultures and experiences. Whether you\'re visiting bustling cities or remote islands, the world has so much to offer.', 'https://picsum.photos/500/700', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('4dba0c8b-33ce-43c2-802f-5942ee37c668', 'bff2018c-b130-4de4-b645-3246b6e4dbb6', 'Mastering the Basics of Photography', 'Gardening is a rewarding hobby that anyone can enjoy. Whether you have a large yard or just a few pots, growing your own plants can be a fulfilling experience.', 'https://picsum.photos/400/600', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('53f1d881-bb94-4dad-bffb-01fcc561537c', '4b1193cc-7ba1-462c-99c5-2e3ea4ab6d14', 'How to Start a Small Business', 'Improving your cooking skills takes time and practice. Start with mastering the basics, and soon you\'ll be creating culinary masterpieces.', 'https://picsum.photos/300/300', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('59624e96-6167-411a-9846-06e5bddd17fe', '4b1193cc-7ba1-462c-99c5-2e3ea4ab6d14', 'The Art of Mindfulness', 'Climate change is an urgent global issue. Understanding its causes and effects is crucial in the fight for a sustainable future.', 'https://picsum.photos/600/400', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('62a447cc-d06f-4a91-9d32-9eb86f1ef5ba', '1230ae30-dc4f-4752-bd84-092956f5c633', 'mishel mishel mishel ', 'mishel mishel mishel mishel mishel mishel ', NULL, '2025-03-16 09:19:40', '2025-03-16 09:19:40'),
('6c732eca-e0ab-4e93-874d-89ed175a3066', 'bff2018c-b130-4de4-b645-3246b6e4dbb6', 'The Art of Mindfulness', 'The mountains provide a sense of peace and adventure. Whether you are a seasoned hiker or just starting out, there are always new trails to explore.', 'https://picsum.photos/300/300', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('71fa80e3-0bd2-4471-8c57-42be69ff5b5e', '034485be-cfd2-48a7-b80d-f54773eab18c', 'How to Start a Small Business', 'Starting a small business requires careful planning and dedication. With the right strategy, anyone can turn their entrepreneurial dreams into reality.', 'https://picsum.photos/200/300', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('9d0d05bd-1f97-4a0a-bd73-5e2b3b901fd9', '57ca1e6a-fc89-4d28-ad45-a1f351862cfc', 'The Art of Mindfulness', 'Traveling opens your mind to new cultures and experiences. Whether you\'re visiting bustling cities or remote islands, the world has so much to offer.', 'https://picsum.photos/500/700', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('9dadf7cd-59ed-4d2d-817c-d9dca835823d', '4b1193cc-7ba1-462c-99c5-2e3ea4ab6d14', 'How to Start a Small Business', 'The mountains provide a sense of peace and adventure. Whether you are a seasoned hiker or just starting out, there are always new trails to explore.', 'https://picsum.photos/200/300', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('a155cf30-a146-4f46-9c47-6eb120d7379d', '1230ae30-dc4f-4752-bd84-092956f5c633', 'shaishaishai', 'shaishaishaishaishaishaishaishaishaishaishaishai', 'http://localhost:4566/il.co.johnbryce.shaihey/43df088a-0ae9-4cab-88ca-538d9a625eaf.jpg', '2025-03-16 07:33:00', '2025-03-16 07:33:00'),
('a49a1cb6-d2ab-4e83-b789-99e70334a8a7', '1230ae30-dc4f-4752-bd84-092956f5c633', 'Gardening Tips for Beginners', 'Improving your cooking skills takes time and practice. Start with mastering the basics, and soon you\'ll be creating culinary masterpieces.', 'https://picsum.photos/500/700', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('a7385d69-8331-406e-a25a-9f206414ebc5', '034485be-cfd2-48a7-b80d-f54773eab18c', 'Top 10 Travel Destinations for 2024', 'Social media has evolved drastically in the past decade, shaping the way we communicate and share information.', 'https://picsum.photos/400/600', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('b36cbf8c-b16c-41a2-92eb-e25a09229c48', '4b1193cc-7ba1-462c-99c5-2e3ea4ab6d14', 'Understanding Climate Change', 'Positive thinking can change your life. By focusing on the good, you can improve your mental and emotional well-being.', 'https://picsum.photos/400/600', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('b8767839-76f9-4f21-bbc8-a9f9c89a41f9', '1230ae30-dc4f-4752-bd84-092956f5c633', 'itay itay itay itay itay itay ', 'itay itay itay itay itay itay itay itay itay ', NULL, '2025-03-16 08:02:25', '2025-03-16 08:02:25'),
('b91c6e54-4bc0-48fe-83fc-a706ca430977', '57ca1e6a-fc89-4d28-ad45-a1f351862cfc', 'Top 10 Travel Destinations for 2024', 'Artificial intelligence is rapidly transforming industries, but the future holds even more exciting possibilities for AI\'s development.', 'https://picsum.photos/300/300', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('c6e5ea19-cd7e-43ec-9619-739cf587f211', '4b1193cc-7ba1-462c-99c5-2e3ea4ab6d14', 'Unveiling the Mysteries of Space', 'Gardening is a rewarding hobby that anyone can enjoy. Whether you have a large yard or just a few pots, growing your own plants can be a fulfilling experience.', 'https://picsum.photos/300/300', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('d779557a-aaf7-4dcc-af4c-193b87860dbe', '57ca1e6a-fc89-4d28-ad45-a1f351862cfc', 'The Evolution of Social Media', 'Climate change is an urgent global issue. Understanding its causes and effects is crucial in the fight for a sustainable future.', 'https://picsum.photos/200/300', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('d914b0bb-0826-468e-8c32-66296f4bc421', '034485be-cfd2-48a7-b80d-f54773eab18c', 'Exploring the Depths of the Ocean', 'The ocean is one of the least explored areas of our planet. In recent years, scientists have made incredible discoveries that give us a glimpse into this mysterious world.', 'https://picsum.photos/400/600', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('e3799d20-411d-4469-bcaf-cb191abd7a95', 'bff2018c-b130-4de4-b645-3246b6e4dbb6', 'The Benefits of Daily Exercise', 'The mountains provide a sense of peace and adventure. Whether you are a seasoned hiker or just starting out, there are always new trails to explore.', 'https://picsum.photos/300/300', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('e7c71e61-c8fd-4961-bdf8-0ff323f6063c', 'bff2018c-b130-4de4-b645-3246b6e4dbb6', 'Exploring the Depths of the Ocean', 'Climate change is an urgent global issue. Understanding its causes and effects is crucial in the fight for a sustainable future.', 'https://picsum.photos/300/300', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('f3a0ad0c-5445-4bf1-99e2-213b4f6d34f4', '034485be-cfd2-48a7-b80d-f54773eab18c', 'The Art of Mindfulness', 'Traveling opens your mind to new cultures and experiences. Whether you\'re visiting bustling cities or remote islands, the world has so much to offer.', 'https://picsum.photos/300/300', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('f500eabc-7451-4327-b4f3-afdc2a442c73', '1230ae30-dc4f-4752-bd84-092956f5c633', 'Unveiling the Mysteries of Space', 'Social media has evolved drastically in the past decade, shaping the way we communicate and share information.', 'https://picsum.photos/600/400', '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('f8f2373f-eef8-4f71-89c2-f3df7cb9eb7d', 'bff2018c-b130-4de4-b645-3246b6e4dbb6', 'Unveiling the Mysteries of Space', 'Space has fascinated humans for centuries. With modern technology, we are closer than ever to unraveling the secrets of the cosmos.', 'https://picsum.photos/600/400', '2025-03-03 13:55:18', '2025-03-03 13:55:18');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(40) COLLATE utf8mb4_general_ci NOT NULL,
  `username` varchar(40) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(64) COLLATE utf8mb4_general_ci NOT NULL,
  `pic_url` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `name`, `username`, `password`, `pic_url`, `created_at`, `updated_at`) VALUES
('034485be-cfd2-48a7-b80d-f54773eab18c', 'Diana', 'diana0', '7f7737fddd2842bc2afdbf1868aaa8e986b83133a1f010fe96535c15e4584628', NULL, '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('1230ae30-dc4f-4752-bd84-092956f5c633', 'Bob', 'bob000', '7f7737fddd2842bc2afdbf1868aaa8e986b83133a1f010fe96535c15e4584628', NULL, '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('25c4d152-ea50-4f15-b916-b0d74d64e4e6', 'ShaiHey', 'shaihey', '7f7737fddd2842bc2afdbf1868aaa8e986b83133a1f010fe96535c15e4584628', 'http://localhost:4566/il.co.johnbryce.shaihey/Sans%20titre%201.PNG', '2025-03-03 13:59:26', '2025-03-03 13:59:26'),
('4b1193cc-7ba1-462c-99c5-2e3ea4ab6d14', 'Alice', 'alice0', '7f7737fddd2842bc2afdbf1868aaa8e986b83133a1f010fe96535c15e4584628', NULL, '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('57ca1e6a-fc89-4d28-ad45-a1f351862cfc', 'Charlie', 'charlie', '7f7737fddd2842bc2afdbf1868aaa8e986b83133a1f010fe96535c15e4584628', NULL, '2025-03-03 13:55:18', '2025-03-03 13:55:18'),
('7dc1001f-fd14-4b64-9ebd-082e5f8980ad', 'ShaiHey1212', 'shaihey1212', '7f7737fddd2842bc2afdbf1868aaa8e986b83133a1f010fe96535c15e4584628', 'http://localhost:4566/il.co.johnbryce.shaihey/159f388d-029a-48c9-aff2-1efaa974c9c7.PNG', '2025-03-04 09:01:11', '2025-03-04 09:01:11'),
('a33c17d6-7b21-4dd5-8512-1a5441be780c', 'ShaiHey2', 'shaihey2', '7f7737fddd2842bc2afdbf1868aaa8e986b83133a1f010fe96535c15e4584628', 'http://localhost:4566/il.co.johnbryce.shaihey/b2dec795-5049-4089-8346-30402e959cb3.PNG', '2025-03-04 08:46:15', '2025-03-04 08:46:15'),
('bc817893-af76-41d8-ab3f-34e55c7ee398', 'shaihey00', 'shaihey00', '7f7737fddd2842bc2afdbf1868aaa8e986b83133a1f010fe96535c15e4584628', 'http://localhost:4566/il.co.johnbryce.shaihey/c1362125-30f1-4401-afd7-a444f2052424.PNG', '2025-03-04 11:17:26', '2025-03-04 11:17:26'),
('bf96f290-9877-4375-b7e7-7393ef5617e1', 'shaihey90', 'shaihey90', '6ec56a12fe30637e1c4c9b83439923cc0bf868b50722e61722c9424420cea89e', 'http://localhost:4566/il.co.johnbryce.shaihey/c40d8766-440e-49ca-a8e6-f1752878c9e7.PNG', '2025-03-04 09:44:56', '2025-03-04 09:44:56'),
('bff2018c-b130-4de4-b645-3246b6e4dbb6', 'Gustav', 'gustav', '7f7737fddd2842bc2afdbf1868aaa8e986b83133a1f010fe96535c15e4584628', NULL, '2025-03-03 13:55:18', '2025-03-03 13:55:18');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `post_id` (`post_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Index pour la table `follows`
--
ALTER TABLE `follows`
  ADD PRIMARY KEY (`follower_id`,`followee_id`),
  ADD UNIQUE KEY `follows_followerId_followeeId_unique` (`follower_id`,`followee_id`),
  ADD KEY `followee_id` (`followee_id`);

--
-- Index pour la table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_username` (`username`);

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `follows`
--
ALTER TABLE `follows`
  ADD CONSTRAINT `follows_ibfk_1` FOREIGN KEY (`follower_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `follows_ibfk_2` FOREIGN KEY (`followee_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;