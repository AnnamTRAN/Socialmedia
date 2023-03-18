-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : sam. 18 mars 2023 à 19:47
-- Version du serveur : 8.0.30
-- Version de PHP : 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `meowchat`
--

-- --------------------------------------------------------

--
-- Structure de la table `meow`
--

CREATE TABLE `meow` (
  `id` int NOT NULL,
  `title` varchar(32) NOT NULL,
  `tag` varchar(11) NOT NULL,
  `content` varchar(250) NOT NULL,
  `time` timestamp NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `meow`
--

INSERT INTO `meow` (`id`, `title`, `tag`, `content`, `time`) VALUES
(1, 'test', 'tag1', 'incroyable', '2023-03-17 10:06:27'),
(2, 'test2', 'tag3', 'incroyable x2', '2023-03-17 10:27:35'),
(3, 'incroyable 3', 'tag3', 'incroyable x3', '2023-03-17 10:28:55'),
(4, 'incroyable 3', 'tag3', 'incroyable x3', '2023-03-17 10:29:05'),
(5, 'test4', 'tag5', 'incroyable x4', '2023-03-17 10:31:30'),
(6, 'incroyable 4', 'tag6', 'incroyable x4', '2023-03-17 10:31:42'),
(7, 'incroyable 4', 'tag6', 'incroyable x4', '2023-03-17 10:31:52'),
(8, 'test2', 'tag3', 'incroyable x4', '2023-03-17 10:31:52'),
(9, 'test2', 'tag3', 'incroyable x4', '2023-03-17 10:31:58'),
(10, 'incroyable 5', 'tag5', 'incroyable x4', '2023-03-17 10:32:10'),
(11, 'incroyable 5', 'tag5', 'incroyable x4', '2023-03-17 10:32:19'),
(12, 'incroyable 5', 'tag5', 'incroyable x4', '2023-03-17 10:34:14'),
(13, 'test', 'tag3', 'incroyable x4', '2023-03-17 10:39:53'),
(14, 'test', 'tag3', 'incroyable x4', '2023-03-17 10:39:58'),
(15, 'test', 'tag3', 'incroyable x4', '2023-03-17 10:40:01'),
(16, 'stop', 'tag4', 'incroyable x4', '2023-03-17 10:40:24'),
(17, 'stop', 'tag4', 'incroyable x4', '2023-03-17 10:40:28'),
(18, 'stop', 'tag4', 'incroyable x4', '2023-03-17 10:40:29'),
(19, 'stop', 'tag4', 'incroyable x4', '2023-03-17 10:43:14'),
(20, 'stop', 'tag4', 'incroyable x4', '2023-03-17 10:43:16'),
(22, 'stop cela', 'tag3', 'incroyable x4', '2023-03-17 10:43:28');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int NOT NULL,
  `name` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `username` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `pic` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `meow`
--
ALTER TABLE `meow`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `meow`
--
ALTER TABLE `meow`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
