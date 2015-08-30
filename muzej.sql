-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Aug 30, 2015 at 10:44 AM
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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_slovenian_ci AUTO_INCREMENT=38 ;

--
-- Dumping data for table `komentari`
--

INSERT INTO `komentari` (`id`, `vijest`, `tekst`, `autor`, `vrijeme`, `email`) VALUES
(8, 4, 'jls', 'lmfkls', '2015-06-08 22:14:46', ''),
(9, 4, 'dhnlak', 'ndek', '2015-06-08 22:33:23', ''),
(10, 4, 'dhnlak', 'ndek', '2015-06-08 22:34:50', ''),
(12, 4, 'bj', 'kipš', '2015-06-08 22:35:33', ''),
(14, 2, 'ndjka', 'dol', '2015-06-09 00:48:32', 'dmloq'),
(15, 2, 'ndjka', 'dol', '2015-06-09 00:49:23', 'dmloq'),
(18, 2, 'fjlewkjlfkw', 'Anonymous', '2015-08-24 17:09:23', ''),
(21, 3, 'jfldjflksdmč', 'nfdlsmdfs', '2015-08-24 17:25:57', 'mklico1@etf.unsa.ba'),
(22, 4, 'jflksds', 'Anonymous', '2015-08-24 17:34:18', ''),
(27, 5, 'opet nesto', 'Anonymous', '2015-08-25 17:14:03', ''),
(29, 3, 'neki komentar', 'neki neko', '2015-08-25 17:17:06', 'neki@nsto.com'),
(31, 5, 'fjlksd', 'cfjodčsk', '2015-08-26 12:59:49', ''),
(32, 4, 'neki koomentar', 'Anonymous', '2015-08-26 13:24:21', ''),
(33, 2, 'djkljaklmds', 'Anonymous', '2015-08-26 13:25:41', ''),
(34, 3, 'jfdllkf', 'Anonymous', '2015-08-26 13:36:28', ''),
(35, 2, 'jvilds', 'dklsč', '2015-08-27 14:47:59', '');

-- --------------------------------------------------------

--
-- Table structure for table `korisnici`
--

CREATE TABLE IF NOT EXISTS `korisnici` (
  `username` varchar(20) COLLATE utf8_slovenian_ci NOT NULL,
  `password` varchar(20) COLLATE utf8_slovenian_ci NOT NULL,
  `admin` tinyint(1) NOT NULL DEFAULT '0',
  `email` varchar(50) COLLATE utf8_slovenian_ci NOT NULL DEFAULT '',
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_slovenian_ci;

--
-- Dumping data for table `korisnici`
--

INSERT INTO `korisnici` (`username`, `password`, `admin`, `email`) VALUES
('admin', 'lhSUpKEZ', 1, 'mklico1@etf.unsa.ba'),
('gdui', 'fiew', 0, ''),
('ha', 'ha', 0, ''),
('hdsajk', 'nclsak', 0, ''),
('jkdsn', 'fjliwefk', 0, ''),
('korisnik', 'korisnik', 0, ''),
('merima', 'bla', 1, 'bla@gmail.com'),
('neki', 'blabla', 0, ''),
('neko', 'sifra', 0, ''),
('nesto', 'blabla', 0, ''),
('qwertz', '123', 0, ''),
('wt', 'wt', 1, 'wt@nesto.com');

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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_slovenian_ci AUTO_INCREMENT=14 ;

--
-- Dumping data for table `vijest`
--

INSERT INTO `vijest` (`id`, `naslov`, `tekst`, `autor`, `vrijeme`, `slika`) VALUES
(2, 'Baština', 'Promocija trećeg broja godišnjaka Muzeja književnosti i pozorišne umjetnosti BiH BAŠTINA. Nakon dvadeset i tri godine ponovno izašao novi broj.\r\nNa promociji govorili/e:\r\nDamir Arsenijević (teoretičar književnosti), Šejla Šehabović (književnica i direktorica MKPU), Ajla Demiragić(teoretičarka književnosti) i Zlatan Delić (teoretičar feminizma).', 'M.K', '2015-06-07 20:21:17', 'Bastina.jpg'),
(3, 'BHT promocija ', 'BHT - Dnevnik 3 13.4.2015. Promocija časopisa - godišnjaka Muzeja književnosti i pozorišne umjetnosti BiH BAŠTINA', 'M.K', '2015-06-07 20:21:26', 'BHT.jpg'),
(4, 'Vesela večer u Sarajevu', 'Pozorišna predstava "Vesela večer u Sarajevu" bit će izvedena na sceni Sarajevskog ratnog teatra naredna dva dana. \r\n\r\nPredstava ima za cilj da ukaže na tradicionalne vrijednosti zaboravljenog Sarajeva, Sarajeva prije 101 godinu, na sijela koja su bila glavna okupljališta umjetnika i intelektualaca, stranaca i građana koji su značajno uticali na razvoj kulture i umjetnosti, na uspostavljanje kvalitetnijih međuljudskih odnosa i na upoznavanje sa različitostima i specifičnostima naroda i etničkih skupina, navodi se u saopćenju iz SARTR-a.', 'M.K', '2015-06-07 20:21:39', 'VeselaVecerUSarajevu.jpg'),
(5, 'Predavanje', 'Pozivamo Vas u Muzej knjiĹľevnosti i pozoriĹˇne umjetnosti BiH, 14. april 2015. (utorak) u 18h na predavanje Belme KuÄŤukaliÄ‡ i Aide MahmutoviÄ‡ "50 nijansi cyber feminizma - feministiÄŤki principi interneta" u okviru treÄ‡eg ciklusa predavanja Neko je rekao feminizam? koji organizira Sarajevski otvoreni centar uz partnersku podrĹˇku Fondacije Friedrich Ebert. Lorem ipsum', 'M.K', '2015-08-27 16:33:35', 'Predavanje.jpg');

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
