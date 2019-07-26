-- phpMyAdmin SQL Dump
-- version 4.6.6deb4
-- https://www.phpmyadmin.net/
--
-- Client :  localhost:3306
-- Généré le :  Ven 26 Juillet 2019 à 16:34
-- Version du serveur :  10.1.26-MariaDB-0+deb9u1
-- Version de PHP :  7.0.33-0+deb9u3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `BDD-C-test`
--

-- --------------------------------------------------------

--
-- Structure de la table `activities_users`
--

CREATE TABLE `activities_users` (
  `activity_id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `activity`
--

CREATE TABLE `activity` (
  `id` bigint(20) NOT NULL,
  `condition` bit(1) NOT NULL,
  `content` varchar(255) DEFAULT NULL,
  `cover` bit(1) NOT NULL,
  `date` datetime DEFAULT NULL,
  `localisation` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `time` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `activity`
--

INSERT INTO `activity` (`id`, `condition`, `content`, `cover`, `date`, `localisation`, `name`, `time`) VALUES
(34, b'1', 'test', b'1', '2019-07-22 15:24:37', 'ici', 'test', NULL),
(40, b'0', 'on est la ', b'0', '2019-07-24 07:08:00', 'la', 'hop', NULL),
(68, b'0', 'okokoko', b'1', '2019-07-28 09:07:00', 'okokok', 'okokok', '');

-- --------------------------------------------------------

--
-- Structure de la table `event`
--

CREATE TABLE `event` (
  `id` bigint(20) NOT NULL,
  `content` varchar(255) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `localisation` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `event`
--

INSERT INTO `event` (`id`, `content`, `date`, `localisation`, `name`) VALUES
(43, 'content', '2019-07-23 14:52:22', 'localisation', 'name'),
(58, 'test', '2019-07-28 11:11:00', 'test', 'test');

-- --------------------------------------------------------

--
-- Structure de la table `events_users`
--

CREATE TABLE `events_users` (
  `event_id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `hibernate_sequence`
--

CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `hibernate_sequence`
--

INSERT INTO `hibernate_sequence` (`next_val`) VALUES
(72),
(72),
(72);

-- --------------------------------------------------------

--
-- Structure de la table `persistent_logins`
--

CREATE TABLE `persistent_logins` (
  `username` varchar(64) NOT NULL,
  `series` varchar(64) NOT NULL,
  `token` varchar(64) NOT NULL,
  `last_used` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `privilege`
--

CREATE TABLE `privilege` (
  `id` bigint(20) NOT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `privilege`
--

INSERT INTO `privilege` (`id`, `name`) VALUES
(1, 'READ_PRIVILEGE'),
(2, 'WRITE_PRIVILEGE'),
(3, 'CHANGE_PASSWORD_PRIVILEGE');

-- --------------------------------------------------------

--
-- Structure de la table `role`
--

CREATE TABLE `role` (
  `id` bigint(20) NOT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `role`
--

INSERT INTO `role` (`id`, `name`) VALUES
(4, 'ROLE_ADMIN'),
(5, 'ROLE_USER');

-- --------------------------------------------------------

--
-- Structure de la table `roles_privileges`
--

CREATE TABLE `roles_privileges` (
  `role_id` bigint(20) NOT NULL,
  `privilege_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `roles_privileges`
--

INSERT INTO `roles_privileges` (`role_id`, `privilege_id`) VALUES
(4, 1),
(4, 2),
(4, 3),
(5, 1),
(5, 3);

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` bigint(20) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `user`
--

INSERT INTO `user` (`id`, `email`, `first_name`, `last_name`, `password`) VALUES
(29, 'admin@admin.com', 'admin', 'admin', '$2a$10$R/ppdSLITfIkn6t7DcEc/OGwrjQSLHo3kAOjDiTMSWoQWWvUke5Pu'),
(55, 'ertyu@gmail.com', 'erer', 'erer', '$2a$10$qs58vTe2FIbajS4UsfwlZOwtLAsW.ILODdpeWRCQMtgmUCuBp2Qky'),
(56, 'uhh@o', 'uhuh', 'uhuh', '$2a$10$7x/Ko9UcHXgeO9kMunMJZug95oeXKn6SmZh217pYIKfC46f4MoBfq'),
(57, 'tyty', 'tyty', 'tyty', '$2a$10$24xZbwwEF5PacBRQA.L6E.DFHEC35hBUnHZXAuCgUpcT4R1Dotqom'),
(69, 'jojo', 'jojo', 'user', '$2a$10$XX5nMqb./QOmnDRoDiqSsenWjwJBNFCgx.ZSDpL9I7utM4D2ihTM6');

-- --------------------------------------------------------

--
-- Structure de la table `users_roles`
--

CREATE TABLE `users_roles` (
  `user_id` bigint(20) NOT NULL,
  `role_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `users_roles`
--

INSERT INTO `users_roles` (`user_id`, `role_id`) VALUES
(29, 4),
(57, 5),
(69, 4);

--
-- Index pour les tables exportées
--

--
-- Index pour la table `activities_users`
--
ALTER TABLE `activities_users`
  ADD KEY `FKc5h7616jv51my82xa35hpc1yr` (`user_id`),
  ADD KEY `FKk8qw8u1e205n4spoabgtobcni` (`activity_id`);

--
-- Index pour la table `activity`
--
ALTER TABLE `activity`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `event`
--
ALTER TABLE `event`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `events_users`
--
ALTER TABLE `events_users`
  ADD KEY `FKn59igw3r1403i5kv85ts3fn7v` (`user_id`),
  ADD KEY `FK85k7f7g3exgsnyrwoovs4oid7` (`event_id`);

--
-- Index pour la table `persistent_logins`
--
ALTER TABLE `persistent_logins`
  ADD PRIMARY KEY (`series`);

--
-- Index pour la table `privilege`
--
ALTER TABLE `privilege`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `roles_privileges`
--
ALTER TABLE `roles_privileges`
  ADD KEY `FK5yjwxw2gvfyu76j3rgqwo685u` (`privilege_id`),
  ADD KEY `FK9h2vewsqh8luhfq71xokh4who` (`role_id`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UKob8kqyqqgmefl0aco34akdtpe` (`email`),
  ADD UNIQUE KEY `UKoshmjvr6wht0bg9oivn75aajr` (`email`);

--
-- Index pour la table `users_roles`
--
ALTER TABLE `users_roles`
  ADD KEY `FKt4v0rrweyk393bdgt107vdx0x` (`role_id`),
  ADD KEY `FKgd3iendaoyh04b95ykqise6qh` (`user_id`);

--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `activities_users`
--
ALTER TABLE `activities_users`
  ADD CONSTRAINT `FKc5h7616jv51my82xa35hpc1yr` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `FKk8qw8u1e205n4spoabgtobcni` FOREIGN KEY (`activity_id`) REFERENCES `activity` (`id`);

--
-- Contraintes pour la table `events_users`
--
ALTER TABLE `events_users`
  ADD CONSTRAINT `FK85k7f7g3exgsnyrwoovs4oid7` FOREIGN KEY (`event_id`) REFERENCES `event` (`id`),
  ADD CONSTRAINT `FKn59igw3r1403i5kv85ts3fn7v` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Contraintes pour la table `roles_privileges`
--
ALTER TABLE `roles_privileges`
  ADD CONSTRAINT `FK5yjwxw2gvfyu76j3rgqwo685u` FOREIGN KEY (`privilege_id`) REFERENCES `privilege` (`id`),
  ADD CONSTRAINT `FK9h2vewsqh8luhfq71xokh4who` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`);

--
-- Contraintes pour la table `users_roles`
--
ALTER TABLE `users_roles`
  ADD CONSTRAINT `FKgd3iendaoyh04b95ykqise6qh` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `FKt4v0rrweyk393bdgt107vdx0x` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
