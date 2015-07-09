-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jul 08, 2015 at 11:02 AM
-- Server version: 5.6.24-log
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `muzej`
--

-- --------------------------------------------------------

--
-- Table structure for table `komentari`
--

CREATE TABLE IF NOT EXISTS `komentari` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `vijest` int(11) NOT NULL,
  `tekst` text COLLATE utf8_slovenian_ci NOT NULL,
  `autor` varchar(20) COLLATE utf8_slovenian_ci NOT NULL,
  `vrijeme` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `email` varchar(50) COLLATE utf8_slovenian_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `vijest` (`vijest`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_slovenian_ci AUTO_INCREMENT=17 ;

--
-- Dumping data for table `komentari`
--

INSERT INTO `komentari` (`id`, `vijest`, `tekst`, `autor`, `vrijeme`, `email`) VALUES
(1, 2, 'Dobar clanak', 'Imenko1', '2015-06-08 16:09:06', 'imenko1@nesto.com'),
(2, 2, 'los clanak', 'Imenko2', '2015-06-08 16:09:06', 'imenko2@nesto.com'),
(5, 3, 'komentar jedan', 'imenko3', '2015-06-08 22:06:14', 'imenko3@nesto.com'),
(6, 4, 'komentar drugi', 'imenko3', '2015-06-08 22:06:14', 'imenko3@nesto.com'),
(7, 4, 'nesto', 'neko', '2015-06-08 22:09:09', 'neko@nesto.com'),
(8, 4, 'jls', 'lmfkls', '2015-06-08 22:14:46', ''),
(9, 4, 'dhnlak', 'ndek', '2015-06-08 22:33:23', ''),
(10, 4, 'dhnlak', 'ndek', '2015-06-08 22:34:50', ''),
(11, 4, 'dhnlak', 'ndek', '2015-06-08 22:35:26', ''),
(12, 4, 'bj', 'kipš', '2015-06-08 22:35:33', ''),
(13, 2, 'hfuiw', 'Anonymous', '2015-06-09 00:43:49', ''),
(14, 2, 'ndjka', 'dol', '2015-06-09 00:48:32', 'dmloq'),
(15, 2, 'ndjka', 'dol', '2015-06-09 00:49:23', 'dmloq'),
(16, 3, 'jflds', 'kfpčs', '2015-07-05 13:36:25', 'mfksl');

-- --------------------------------------------------------

--
-- Table structure for table `korisnici`
--

CREATE TABLE IF NOT EXISTS `korisnici` (
  `username` varchar(20) COLLATE utf8_slovenian_ci NOT NULL,
  `password` varchar(20) COLLATE utf8_slovenian_ci NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_slovenian_ci;

--
-- Dumping data for table `korisnici`
--

INSERT INTO `korisnici` (`username`, `password`) VALUES
('admin', 'sifra');

-- --------------------------------------------------------

--
-- Table structure for table `vijest`
--

CREATE TABLE IF NOT EXISTS `vijest` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `naslov` varchar(100) COLLATE utf8_slovenian_ci NOT NULL,
  `tekst` text COLLATE utf8_slovenian_ci NOT NULL,
  `autor` varchar(20) COLLATE utf8_slovenian_ci NOT NULL,
  `vrijeme` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `slika` varchar(100) COLLATE utf8_slovenian_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_slovenian_ci AUTO_INCREMENT=6 ;

--
-- Dumping data for table `vijest`
--

INSERT INTO `vijest` (`id`, `naslov`, `tekst`, `autor`, `vrijeme`, `slika`) VALUES
(1, 'FTV promocija časopisa', 'FTV - Kulturno 14.4.2015. Promocija časopisa - godišnjaka Muzeja književnosti i pozorišne umjetnosti BiH BAŠTINA.', 'M.K', '2015-06-07 20:21:06', 'FTV.jpg'),
(2, 'Baština', 'Promocija trećeg broja godišnjaka Muzeja književnosti i pozorišne umjetnosti BiH BAŠTINA. Nakon dvadeset i tri godine ponovno izašao novi broj.\r\nNa promociji govorili/e:\r\nDamir Arsenijević (teoretičar književnosti), Šejla Šehabović (književnica i direktorica MKPU), Ajla Demiragić(teoretičarka književnosti) i Zlatan Delić (teoretičar feminizma).', 'M.K', '2015-06-07 20:21:17', 'Bastina.jpg'),
(3, 'BHT promocija ', 'BHT - Dnevnik 3 13.4.2015. Promocija časopisa - godišnjaka Muzeja književnosti i pozorišne umjetnosti BiH BAŠTINA', 'M.K', '2015-06-07 20:21:26', 'BHT.jpg'),
(4, 'Vesela večer u Sarajevu', 'Pozorišna predstava "Vesela večer u Sarajevu" bit će izvedena na sceni Sarajevskog ratnog teatra naredna dva dana. \r\n\r\nPredstava ima za cilj da ukaže na tradicionalne vrijednosti zaboravljenog Sarajeva, Sarajeva prije 101 godinu, na sijela koja su bila glavna okupljališta umjetnika i intelektualaca, stranaca i građana koji su značajno uticali na razvoj kulture i umjetnosti, na uspostavljanje kvalitetnijih međuljudskih odnosa i na upoznavanje sa različitostima i specifičnostima naroda i etničkih skupina, navodi se u saopćenju iz SARTR-a.', 'M.K', '2015-06-07 20:21:39', 'VeselaVecerUSarajevu.jpg'),
(5, 'Predavanje', 'Pozivamo Vas u Muzej književnosti i pozorišne umjetnosti BiH, 14. april 2015. (utorak) u 18h na predavanje Belme Kučukalić i Aide Mahmutović "50 nijansi cyber feminizma - feministički principi interneta" u okviru trećeg ciklusa predavanja Neko je rekao feminizam? koji organizira Sarajevski otvoreni centar uz partnersku podršku Fondacije Friedrich Ebert.\r\n', 'M.K', '2015-06-07 20:21:52', 'Predavanje.jpg');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `komentari`
--
ALTER TABLE `komentari`
  ADD CONSTRAINT `vijest_fk` FOREIGN KEY (`vijest`) REFERENCES `vijest` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
