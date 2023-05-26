-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : ven. 26 mai 2023 à 12:15
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
  `meow_id` int NOT NULL,
  `meow_tag` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `meow_pic` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `meow_content` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `meow_time` timestamp NOT NULL,
  `meow_userid` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `meow`
--

INSERT INTO `meow` (`meow_id`, `meow_tag`, `meow_pic`, `meow_content`, `meow_time`, `meow_userid`) VALUES
(1, '#meme', 'PIC64351cb7067754.20697285.jpg', 'lolllll', '2023-04-11 08:39:19', 3),
(2, '#food', 'PIC64352d9481c609.98576625.jpg', 'cookies are the best. hihhihihihih', '2023-04-11 09:51:16', 4),
(21, '#meme', 'surprised_face.png', 'Post made with a button, NO WAY!!', '2023-05-10 16:17:54', 1),
(22, '#cat', 'PIC645bc4bf86daa4.75380393.jpg', 'cat', '2023-05-10 16:22:23', 1),
(23, '#meme', 'surprised_face.png', 'Post made with a button, NO WAY!!', '2023-05-10 16:53:19', 1),
(24, '#politics', 'PIC645e4c4c621cf1.38188520.jpg', '', '2023-05-12 14:25:16', 1),
(25, '#meme', 'surprised_face.png', 'Post made with a button, NO WAY!!', '2023-05-12 14:26:43', 1),
(26, '#meme', 'surprised_face.png', 'Post made with a button, NO WAY!!', '2023-05-12 14:26:44', 1),
(32, '#politics', 'catoh.png', 'Dinguerie', '2023-05-13 17:21:48', 1),
(33, '#gaming', 'catoh.png', 'Super dinguerie', '2023-05-13 17:22:33', 1),
(34, '#technology', 'catoh.png', 'Ultra dinguerie', '2023-05-14 17:50:50', 1),
(37, '#politics', 'catoh.png', 'Dinguerie', '2023-05-14 17:57:06', 1),
(38, '#politics', 'catoh.png', 'Dinguerie', '2023-05-14 17:57:24', 1),
(39, '#politics', 'catoh.png', 'Dinguerie', '2023-05-14 17:59:51', 1),
(54, '#gaming', 'catoh.png', 'Super dinguerie', '2023-05-14 18:07:26', 1),
(55, '#gaming', 'catoh.png', 'Super dinguerie', '2023-05-14 18:07:26', 1),
(57, '#meme', 'surprised_face.png', 'Post made with a button, NO WAY!!', '2023-05-14 18:20:11', 1),
(68, '#meme', 'PIC647078201a1c64.79335627.jpg', 'super!', '2023-05-26 09:13:04', 1),
(69, '#meme', 'PIC6470786a01be87.07791309.jpg', 'super!', '2023-05-26 09:14:18', 1);

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `user_id` int NOT NULL,
  `user_name` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `user_username` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `user_email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `user_password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `user_pic` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`user_id`, `user_name`, `user_username`, `user_email`, `user_password`, `user_pic`) VALUES
(1, 'Annam', 'Admin', 'admin@test.com', '$2y$10$5tj9xhfQaZbYjZWuHvxyDuW6pUYR3cZGYYhtziozke2cyi8Kov4jq', 'PIC64351bfa5c98d4.40105822.jpg'),
(2, 'Lynda', 'benabdessadok', 'admin@test.com', '$2y$10$qX4DwKS.rQ7fRGFwu0Yu6OJhS4LN4bN1EGA5I.CRfX2gP3/AwbdxK', 'PIC64351c45c1c6f5.65253088.jpg'),
(3, 'Lynda', 'test', 'user@user.com', '$2y$10$2fyuJCiVfjwoJu6BtCfCmechJ6NaBQ9fGMYn6Xtl.jP.MYO26TM46', 'PIC64351c89251191.17774207.jpg'),
(4, 'sara', 'sdt', 'sara@gmail.com', '$2y$10$RtvFXalA2rDJAoqyDpr.keIsImKZ1mdg/c/7Ld8Vn0zfxFR9NDrtm', 'PIC64352d335ca5a5.74748949.jpg'),
(5, 'eye', 'eye', 'eye@eye.com', '$2y$10$8/j7bgjKl5/tgP1UkBtAfO0yFyOjs2LQgT09Zs7iGKcYk5bt17eVi', 'PIC64423284036889.97645191.jpg');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `meow`
--
ALTER TABLE `meow`
  ADD PRIMARY KEY (`meow_id`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `meow`
--
ALTER TABLE `meow`
  MODIFY `meow_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
