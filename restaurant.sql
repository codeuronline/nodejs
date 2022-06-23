-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : jeu. 23 juin 2022 à 14:36
-- Version du serveur : 5.7.33
-- Version de PHP : 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `restaurant`
--

-- --------------------------------------------------------

--
-- Structure de la table `employes`
--

CREATE TABLE `employes` (
  `id_employe` int(11) NOT NULL,
  `first_name` varchar(100) DEFAULT NULL,
  `last_name` varchar(100) DEFAULT NULL,
  `hire_date` date DEFAULT NULL,
  `restaurant_id` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `employes`
--

INSERT INTO `employes` (`id_employe`, `first_name`, `last_name`, `hire_date`, `restaurant_id`) VALUES
(1, 'Bouba', 'Ourson', '2021-05-01', 1),
(2, 'Babouin', 'Singe', '2021-05-01', 2),
(3, 'Mathilde', 'Latronche', '2022-06-01', 3),
(4, 'Goldorak', 'SuperHéros', '2022-05-02', 2),
(5, 'Toto', 'FaitduVelo', '2022-05-19', 2),
(6, 'Tabou', 'Bing', '2022-05-02', 4),
(7, 'ToWork', 'lastChance', '2022-06-01', 5),
(8, 'Batavia', 'Laitue', '2022-05-02', 5);

-- --------------------------------------------------------

--
-- Structure de la table `restaurants`
--

CREATE TABLE `restaurants` (
  `id_restaurant` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `nbCouverts` int(11) DEFAULT NULL,
  `terrasse` varchar(3) DEFAULT NULL,
  `parking` varchar(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `restaurants`
--

INSERT INTO `restaurants` (`id_restaurant`, `name`, `city`, `nbCouverts`, `terrasse`, `parking`) VALUES
(1, 'The Trenchy', 'Grenoble', 14, 'non', 'oui'),
(2, 'La cuisse de grenouille du code', 'Grenoble', 50, 'oui', 'oui'),
(3, 'Le Poulet poilu de l\'espace', 'Grenoble', 25, 'oui', 'non'),
(4, 'la Bamboula Online', 'Mars', 45, 'oui', 'non'),
(5, 'La légende', 'Bora Bora', 18791, 'oui', 'oui');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `employes`
--
ALTER TABLE `employes`
  ADD PRIMARY KEY (`id_employe`);

--
-- Index pour la table `restaurants`
--
ALTER TABLE `restaurants`
  ADD PRIMARY KEY (`id_restaurant`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `employes`
--
ALTER TABLE `employes`
  MODIFY `id_employe` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT pour la table `restaurants`
--
ALTER TABLE `restaurants`
  MODIFY `id_restaurant` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
