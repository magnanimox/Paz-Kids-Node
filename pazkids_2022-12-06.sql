# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: localhost (MySQL 5.7.39)
# Database: pazkids
# Generation Time: 2022-12-06 19:55:11 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table abEpisodes
# ------------------------------------------------------------

DROP TABLE IF EXISTS `abEpisodes`;

CREATE TABLE `abEpisodes` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL DEFAULT '',
  `img` varchar(100) NOT NULL DEFAULT '',
  `download` varchar(150) NOT NULL DEFAULT '',
  `materiais` varchar(150) NOT NULL DEFAULT '',
  `showAt` varchar(20) NOT NULL DEFAULT '#',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `abEpisodes` WRITE;
/*!40000 ALTER TABLE `abEpisodes` DISABLE KEYS */;

INSERT INTO `abEpisodes` (`id`, `name`, `img`, `download`, `materiais`, `showAt`)
VALUES
	(1,'No começo','/assets/images/thumbs/aventura-biblica/E1.png','https://www.mediafire.com/file/fux4tw2b3uwspxl/EP_01_-_NO_COME%25C3%2587O.mp4/file','https://www.mediafire.com/folder/b6ay6j5xtyknm/01.+No+Come%C3%A7o','#'),
	(2,'O primeiro pecado','/assets/images/thumbs/aventura-biblica/E2.png','https://www.mediafire.com/file/fhdp5u93ma32fmg/EP_02_-_O_PRIMEIRO_PECADO.mp4/file','https://www.mediafire.com/folder/axv5yx5p05yba/2._O_Primeiro_Pecado','#'),
	(3,'De dois em dois','/assets/images/thumbs/aventura-biblica/E3.png','https://www.mediafire.com/file/mmperxk70x52fck/EP_03_-_DE_DOIS_EM_DOIS.mp4/file','https://www.mediafire.com/folder/ssra5b7p6nhs7/3._De_Dois_em_Dois','#'),
	(4,'A difícil prova de Abraão','/assets/images/thumbs/aventura-biblica/E4.png','https://www.mediafire.com/file/l30ki3px83nnguk/EP_04_-_A_DIF%25C3%258DCIL_PROVA_DE_ABRA%25C3%2583O.mp4/filehttps://www.mediafire.com/file/l30ki3px83nn','https://www.mediafire.com/folder/hnxm5yzxeib8a/04._A_Dif%C3%ADcil_Prova_de_Abra%C3%A3o','#'),
	(5,'O sonhador','/assets/images/thumbs/aventura-biblica/E5.png','https://www.mediafire.com/file/v2oaf55oy5nf51r/EP_05_-_O_SONHADOR.mp4/file','https://www.mediafire.com/folder/or7crr95mf1u5/05._O_Sonhador','#'),
	(6,'Os sonhos se realizam','/assets/images/thumbs/aventura-biblica/E6.png','http://www.mediafire.com/file/ye7loe9atrcadsx/EP_6_-_Os_Sonhos_se_Realizam.mp4/file','https://www.mediafire.com/folder/0bd99m3cwt95t/06._Os_Sonhos_se_Realizam','#'),
	(7,'Uma prova no deserto','/assets/images/thumbs/aventura-biblica/E7.png','https://www.mediafire.com/file/fn272lo8k37p2e7/EP_07_-_UMA_PROVA_NO_DESERTO.mp4/file','#','#'),
	(8,'Um bebê especial','/assets/images/thumbs/aventura-biblica/E8.png','http://www.mediafire.com/file/oubkihzqm1n2z3b/EP_8_Um_Bebe%25CC%2582_Especial.mp4/file','https://www.mediafire.com/folder/6h24pqk02e0l1/8._Um_Beb%C3%AA_Especial','#'),
	(9,'Uma voz na noite','/assets/images/thumbs/aventura-biblica/E9.png','http://www.mediafire.com/file/9a8cmpdtcmvvpnt/EP_9_-_Uma_Voz_na_Noite.mp4/file','https://www.mediafire.com/folder/esmt5af8dqa2f/9._Uma_Voz_na_Noite','#'),
	(10,'O menino e o gigante','/assets/images/thumbs/aventura-biblica/E10.png','http://www.mediafire.com/file/t4do3dsy5mbvgao/EP_10_O_menino_e_o_gigante.mp4/file','https://www.mediafire.com/folder/zmcunhjdz7012/17._O_Menino_e_o_Gigante','setembro'),
	(11,'Um tremendo resgate','/assets/images/thumbs/aventura-biblica/E11.png','http://www.mediafire.com/file/dcx8u15a4k0d0jv/EP_11_Um_tremendo_resgate.mp4/file','https://www.mediafire.com/folder/guwjvjchrcyky/11.%20Um%20Tremendo%20Resgate','outubro'),
	(12,'A bela e corajosa rainha','/assets/images/thumbs/aventura-biblica/E12.png','http://www.mediafire.com/file/b9p3u8yq5q78e24/EP_12_A_Bela_e_Corajosa_Rainha.mp4/file','https://www.mediafire.com/folder/flbw91tnw9fq5/12._A_Bela_e_Corajosa_Rainha','novembro'),
	(13,'O primeiro natal','/assets/images/thumbs/aventura-biblica/E13.png','http://www.mediafire.com/file/pddydl2f4eiuzcu/EP_13__O_PRIMEIRO_NATAL.mp4/file','https://www.mediafire.com/folder/8ncw42i91wrzc/13._O_Primeiro_Presente_de_Natal','dezembro'),
	(14,'O rei e o reino','/assets/images/thumbs/aventura-biblica/E14.png','https://www.mediafire.com/file/edhznxdkhwlmv3u/EP_14_-_O_REI_E_O_REINO.mp4/file','https://www.mediafire.com/folder/ew2cfdlwo6xmn/14._Rei_e_o_Reino','#'),
	(15,'O grande pequinique','/assets/images/thumbs/aventura-biblica/E15.png','https://www.mediafire.com/file/jlkfpjvwazpanv7/EP_15_-_O_GRANDE_PIQUENIQUE.mp4/file','https://www.mediafire.com/folder/0osggyt2pu4vm/15.+O+Grande+Piquenique','#'),
	(16,'Um furo no teto','/assets/images/thumbs/aventura-biblica/E16.png','https://www.mediafire.com/file/keunpvn5pec6ega/EP_16_-_UM_FURO_NO_TETO.mp4/file','https://www.mediafire.com/folder/ikp8exymwy1o4/16.+Um+Furo+no+Teto','#'),
	(17,'O jumento e o rei','/assets/images/thumbs/aventura-biblica/E17.png','http://www.mediafire.com/file/48yq7386s34m3e6/EP_17_-_O_JUMENTO_E_O_REI.mp4/file','https://www.mediafire.com/folder/iwe0jvjsw1kn5/15.+O+Jumento+e+o+Rei','#'),
	(18,'Está consumado','/assets/images/thumbs/aventura-biblica/E18.png','http://www.mediafire.com/file/pgumfzry7mc7o9c/EP_18_-_EST%25C3%2581_CONSUMADO.mp4/file','https://www.mediafire.com/folder/n88e49pl28si8/18.+Est%C3%A1+Consumado','#'),
	(19,'Um domingo feliz','/assets/images/thumbs/aventura-biblica/E19.png','https://www.mediafire.com/file/peqxi3dskvc5clj/EP_19_-_UM_DOMINGO_FELIZ.mp4/file','https://www.mediafire.com/folder/8l4ntea5n6uhe/19.+Um+Domingo+Feliz','#'),
	(20,'Um presente de Deus','/assets/images/thumbs/aventura-biblica/E20.png','http://www.mediafire.com/file/jezv731xx2vq7qr/EP_20_-_UM_PRESENTE_DE_DEUS.mp4/file','https://www.mediafire.com/folder/ir26k12d4okng/20.+Um+Presente+de+Deus','#'),
	(21,'Venham todos','/assets/images/thumbs/aventura-biblica/E21.png','https://www.mediafire.com/file/0m65wqln9e05ybz/EP_21_-_VENHAM_TODOS.mp4/file','https://www.mediafire.com/folder/rrv5e5sd9lgr0/21._Venham_Todos','#'),
	(22,'Jornadas para Jesus','/assets/images/thumbs/aventura-biblica/E22.png','https://www.mediafire.com/file/hffk6tjfg1zve49/EP+22+-+JORNADAS+PARA+JESUS.mp4/file','https://www.mediafire.com/folder/ru2br08opabsi/22._Jornadas_para_Jesus','#'),
	(23,'A boa notícia de Jesus','/assets/images/thumbs/aventura-biblica/E23.png','http://www.mediafire.com/file/55xq6dd3n01v2qd/Ep_23__A_Boa_noti%25CC%2581cia_de_Deus.mp4/file','https://www.mediafire.com/folder/bulmhgnk6nq9g/23._A_Boa_Not%C3%ADcia_de_Deus_-_Fa%C3%A7a_parte_dessa_Hist%C3%B3ria','#');

/*!40000 ALTER TABLE `abEpisodes` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table churchs
# ------------------------------------------------------------

DROP TABLE IF EXISTS `churchs`;

CREATE TABLE `churchs` (
  `id_city` int(11) NOT NULL,
  `church` varchar(80) NOT NULL DEFAULT '',
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  KEY `church_city` (`id_city`),
  CONSTRAINT `church_city` FOREIGN KEY (`id_city`) REFERENCES `cities` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `churchs` WRITE;
/*!40000 ALTER TABLE `churchs` DISABLE KEYS */;

INSERT INTO `churchs` (`id_city`, `church`, `id`)
VALUES
	(1,'Paz Church Rio Branco',1),
	(2,'Paz Church AssisBrasil',2),
	(3,'Paz Church Brasiléia',3),
	(4,'Paz Church Senador Guiomard',4),
	(5,'Paz Church Macapá',5),
	(5,'Núcleo Açaí',6),
	(5,'Núcleo Brasil Novo',7),
	(5,'Núcleo Fazendinha',8),
	(5,'Núcleo Marabaixo',9),
	(5,'Núcleo Novo Horizonte',10),
	(5,'Núcleo Universidade',11),
	(6,'Paz Church Amapá',12),
	(7,'Paz Church Calçoene',13),
	(8,'Paz Church Itaubal',14),
	(9,'Paz Church Laranjal do Jari',15),
	(10,'Paz Church Mazagão',16),
	(11,'Paz Church Monte Dourado',17),
	(12,'Paz Church Oiapoque',18),
	(12,'Núcleo Aldeia Santa Izabel',19),
	(13,'Paz Church Piquiazal',20),
	(14,'Paz Church Planalto',21),
	(15,'Paz Church Porto Grande',22),
	(16,'Paz Church Santana',23),
	(17,'Paz Church Vitória de Jari',24),
	(18,'Paz Church Manaus',25),
	(18,'Núcleo Jorge Teixeira',26),
	(18,'Núcleo Zumbi',27),
	(18,'Núcleo Comunidade Nobre',28),
	(18,'Núcleo Cidade de Deus',29),
	(18,'Núcleo Cidade Nova',30),
	(18,'Núcleo Aleixo',31),
	(19,'Paz Church Mauês',32),
	(19,'Núcleo Comunidade Igarapé Alegria Residência',33),
	(19,'Núcleo Ig. Senador José Esteves',34),
	(19,'Núcleo Ig. Mario Fonseca',35),
	(19,'Núcleo Ramalho Júnior',36),
	(20,'Paz Church Apuí',37),
	(21,'Paz Church Lábrea',38),
	(21,'Núcleo Comunidade do Capacini',39),
	(21,'Núcleo Comunidade do Jurucua',40),
	(21,'Núcleo Comunidade do Samaúma',41),
	(21,'Núcleo Comunidade do Laranjeiras',42),
	(21,'Núcleo Comunidade do São Paulo',43),
	(21,'Núcleo Comunidade do Madeirinho',44),
	(22,'Paz Church Itacoatiara',45),
	(22,'Núcleo Comunidade Betel',46),
	(22,'Núcleo Comunidade Bacabal',47),
	(22,'Núcleo Comunidade Jurupari',48),
	(23,'Paz Church Tapauá',49),
	(23,'Núcleo Comunidade Primavera',50),
	(23,'Núcleo Comunidade Trevo',51),
	(23,'Núcleo Comunidade Caetano',52),
	(23,'Núcleo Comunidade Ponta do Evaristo',53),
	(23,'Núcleo Comunidade Bela Vista Rio Itaparanã',54),
	(23,'Núcleo Comunidade Ilhinha',55),
	(24,'Núcleo Ramal do Gama',56),
	(24,'Núcleo Novo Horizonte',57),
	(24,'Núcleo Ramal da Chica',58),
	(24,'Núcleo Comunidade Santa Cruz',59),
	(24,'Núcleo Ramal São Benedito',60),
	(25,'Paz Church São Gabriel da Cachoeira',61),
	(26,'Paz Church Presidente Figueiredo',62),
	(27,'Paz Church Manaquiri',63),
	(28,'Paz Church Humaitá',64),
	(29,'Paz Church Novo Ayrão',65),
	(30,'Paz Church Boa Vista do Ramos',66),
	(31,'Paz Church Iranduba',67),
	(31,'Núcleo Comunidade Caldeirão',68),
	(32,'Núcleo Urucará',69),
	(33,'Núcleo Comunidade do Samaúma',70),
	(34,'Núcleo São Sebastião do Uatuma',71),
	(35,'Núcleo Canutama',72),
	(36,'Núcleo Manacapurú',73),
	(37,'Paz Church Fortaleza',74),
	(38,'Paz Church Itaitinga',75),
	(38,'Paz Church Barrocão',76),
	(40,'Paz Church Quixadá',77),
	(41,'Paz Church Quixeramobim',78),
	(39,'Paz Church Mucunã',79),
	(37,'Paz Church Messejana',80),
	(39,'Paz Church Maracanaú',82),
	(143,'Núcleo Lagoa do Mato',83),
	(37,'Paz Church Mondubim',84),
	(144,'Paz Church Aquiiraz',85),
	(145,'Paz Church Beberibe',86),
	(146,'Paz Church Cascavel',87),
	(145,'Paz Church Serra de Félix',88),
	(147,'Paz Church Umari',89),
	(148,'Paz Church Palhano',90),
	(145,'Paz Church Boqueirão do Cesário',91),
	(37,'Núcleo Barra do Ceará',92),
	(37,'Núcleo Delmiro Gouveia',93),
	(37,'Núcleo Pau dos Ferros',94),
	(37,'Núcleo Valença',95),
	(42,'Paz Church Espinho',96),
	(43,'Paz Church Limoeiro do Norte',97),
	(44,'Paz Church Teresina',98),
	(45,'Paz Church Pacoti',99),
	(46,'Paz Church Picos',100),
	(47,'Paz Church Santo Antõnio de Lisboa',101),
	(48,'Paz Church Paracuru',102),
	(49,'Paz Church Coqueirinhos',103),
	(50,'Paz Church Paraipaba',104),
	(51,'Paz Church Crateús',105),
	(52,'Paz Church Quiterianópolis',106),
	(53,'Paz Church Monsenhor Tabosa',107),
	(54,'Paz Church Realejo',108),
	(55,'Paz Church Nova Russas',109),
	(56,'Paz Church Barreira',110),
	(58,'Paz Church Pacajus',112),
	(59,'Paz Church Itapipoca',113),
	(60,'Paz Church Sobral',114),
	(61,'Paz Church Ubajara',115),
	(62,'Paz Church Ipú',116),
	(63,'Paz Church Tianguá',117),
	(64,'Paz Church Jaibaras',118),
	(65,'Paz Church Santa Quitéria',119),
	(66,'Paz Church Juazeiro do Norte',120),
	(67,'Paz Church Arrojado',121),
	(68,'Paz Church Lavras de Mangabeira',122),
	(69,'Paz Church Aracati',123),
	(70,'Paz Church Horizonte',124),
	(71,'Paz Church Vitória',125),
	(72,'Paz Church Serra',126),
	(73,'Paz Church Goiãnia',127),
	(73,'Núcleo de Vianópolis',128),
	(73,'Núcleo de Guanabara',129),
	(73,'Núcleo Brasilinha',130),
	(73,'Núcleo Planaltina de Goiás',131),
	(74,'Paz Church São Luiz',132),
	(75,'Paz Church Rosário',133),
	(76,'Paz Church Chapadinha',134),
	(77,'Paz Church Santa Rita',135),
	(78,'Paz Church Cuiabá',136),
	(79,'Paz Church São José do Rio Claro',137),
	(80,'Núcleo Nova Maringá',138),
	(81,'Núcleo Varzea Grande',139),
	(82,'Paz Church Campo Grande',140),
	(83,'Paz Church Ponta Porã',141),
	(84,'Paz Church Dourados',142),
	(85,'Paz Church Belo Horizonte',143),
	(86,'Paz Church Divinópolis',144),
	(87,'Paz Church Patrocínio',145),
	(85,'Núcleo Sete Lagoas',146),
	(85,'Núcleo Ibirité',147),
	(85,'Núcleo Manhuaçu',148),
	(57,'Paz Church SImplício Mendes',149),
	(88,'Paz Church Araújos',150),
	(89,'Paz Church Belém Sede',151),
	(89,'Paz Church Ananindeua',152),
	(89,'Paz Church Icoaraci',153),
	(89,'Paz Church Outeiro',154),
	(89,'Distrito',155),
	(89,'Paz Church Parke Anne',156),
	(89,'Paz Church Mangueirão',157),
	(89,'Paz Church Mosqueio',158),
	(89,'Paz Church Marabá',159),
	(89,'Paz Church Santa Isabel',160),
	(89,'Paz Church Bujarú',161),
	(89,'Paz Church Jutaí',162),
	(89,'Paz Church Campo Verde',163),
	(89,'Paz Church Santa Maria',164),
	(89,'Paz Church Vila de Corcovado',165),
	(89,'Paz Church Nova Breves',166),
	(89,'Paz Church Vila dos Cabanos',167),
	(89,'Paz Church Tucuruí',168),
	(89,'Paz Church Novo Repartimento',169),
	(89,'Paz Church Benevides',170),
	(89,'Paz Church Tapanã',171),
	(89,'Paz Church Maracapucu',172),
	(89,'Paz Church Arumanduba',173),
	(89,'Paz Church Vila de Beja',174),
	(89,'Paz Church Felipe Soares',175),
	(89,'Paz Church Apim-Açu',176),
	(89,'Paz Church Abaetuba',177),
	(89,'Paz Church Barcanera',178),
	(89,'Paz Church Cabeceiras',179),
	(89,'Paz Church Bacuri',180),
	(89,'Paz Church Piramanha',181),
	(89,'Paz Church Cachoeira do Arari',182),
	(92,'Paz Church Castanhal',183),
	(92,'Núcleo Japim',184),
	(92,'Paz Church Bragança',185),
	(92,'Paz Church Capanema',186),
	(92,'Paz Church Augusto Corrêa',187),
	(92,'Paz Church Rio do Meio',188),
	(92,'Paz Church Marudá',189),
	(92,'Paz Church Algodoal',190),
	(92,'Paz Church Camará',191),
	(92,'Paz Church Pacamorema',192),
	(92,'Paz Church São Francisco',193),
	(92,'Paz Church Moju',194),
	(92,'Comunidade Alça Viária',195),
	(92,'Comunidade Mamão',196),
	(92,'Comunidade Terra Firme',197),
	(92,'Comunidade Santa Maria do Acará',198),
	(92,'Comunidade Aguapé',199),
	(92,'Comunidade Ilha dos Santos',200),
	(92,'Comunidade Itacoã',201),
	(92,'Comunidade Bosque',202),
	(92,'Comunidade Juquiri',203),
	(92,'Comunidade Ribeira',204),
	(92,'Comunidade Cruzeirinho',205),
	(92,'Comunidade Dom Eliseu',206),
	(93,'Paz Church Monte Alegre',207),
	(9999,'Aplicado Manualmente',9999);

/*!40000 ALTER TABLE `churchs` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table cities
# ------------------------------------------------------------

DROP TABLE IF EXISTS `cities`;

CREATE TABLE `cities` (
  `id_state` int(11) NOT NULL,
  `city` varchar(80) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  KEY `city_state` (`id_state`),
  CONSTRAINT `city_state` FOREIGN KEY (`id_state`) REFERENCES `states` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `cities` WRITE;
/*!40000 ALTER TABLE `cities` DISABLE KEYS */;

INSERT INTO `cities` (`id_state`, `city`, `id`)
VALUES
	(1,'Rio Branco',1),
	(1,'AssisBrasil',2),
	(1,'Brasiléia',3),
	(1,'Senador Guiomard',4),
	(1,'Macapá',5),
	(1,'Amapá',6),
	(1,'Calçoene',7),
	(1,'Itaubal',8),
	(1,'Laranjal do Jari',9),
	(1,'Mazagão',10),
	(1,'Monte Dourado',11),
	(1,'Oiapoque',12),
	(1,'Piquiazal',13),
	(1,'Planalto',14),
	(1,'Porto Grande',15),
	(1,'Santana',16),
	(1,'Vitória de Jari',17),
	(4,'Manaus',18),
	(4,'Mauês',19),
	(4,'Apuí',20),
	(4,'Lábrea',21),
	(4,'Itacoatiara',22),
	(4,'Tapauá',23),
	(4,'Rio Preto da Eva',24),
	(4,'São Gabriel de Cachoeira',25),
	(4,'Presidente Figueiredo',26),
	(4,'Manaquiri',27),
	(4,'Humaitá',28),
	(4,'Novo Ayrão',29),
	(4,'Boa Vista do Ramos',30),
	(4,'Iranduba',31),
	(4,'Urucará',32),
	(4,'Barreirinha',33),
	(4,'São Sebastião do Uatuma',34),
	(4,'Canutama',35),
	(4,'Manacapuru',36),
	(6,'Fortaleza',37),
	(6,'Itaitinga',38),
	(6,'Maracanaú',39),
	(6,'Quixada',40),
	(6,'Quixeramobim',41),
	(6,'Espinho',42),
	(6,'Limoeiro do Norte',43),
	(6,'Teresina',44),
	(6,'Pacoti',45),
	(18,'Picos',46),
	(18,'Santo Antônio de Lisboa',47),
	(6,'Paracuru',48),
	(6,'Coqueirinhos',49),
	(6,'Paraipaba',50),
	(6,'Crateús',51),
	(6,'Quiterianópolis',52),
	(6,'Monsenhor Tabosa',53),
	(6,'Realejo',54),
	(6,'Nova Russas',55),
	(6,'Barreia',56),
	(18,'Simplício Mendes',57),
	(6,'Pacajus',58),
	(6,'Itapipoca',59),
	(6,'Sobral',60),
	(6,'Ubajara',61),
	(6,'Ipú',62),
	(6,'Tianguá',63),
	(6,'Jaibaras',64),
	(6,'Santa Quitéria',65),
	(6,'Juazeiro do Norte',66),
	(6,'Arrojado',67),
	(6,'Lavras de Mangabeira',68),
	(6,'Aracati',69),
	(6,'Horizonte',70),
	(8,'Vitória',71),
	(8,'Serra',72),
	(9,'Goiânia',73),
	(10,'São Luiz',74),
	(10,'Rosário',75),
	(10,'Chapadinha',76),
	(10,'Santa Rita',77),
	(11,'Cuiabá',78),
	(11,'São José do Rio Claro',79),
	(11,'Nova Maringá',80),
	(11,'Várzea Grande',81),
	(12,'Campo Grande',82),
	(12,'Ponta Porã',83),
	(12,'Dourados',84),
	(13,'Belo Horizonte',85),
	(13,'Divinópolis',86),
	(13,'Patrocínio',87),
	(13,'Araújos',88),
	(14,'Região - Belém',89),
	(14,'Região - Santarém',90),
	(14,'Santarém Ribeirinho',91),
	(14,'Região - Castanhal',92),
	(14,'Região - Monte Alegre',93),
	(16,'Curitiba',94),
	(16,'Ponta Grossa',95),
	(16,'Jataizinho',96),
	(16,'São José dos Pinhais',97),
	(16,'Guarapuava',98),
	(16,'Palmeira',99),
	(16,'Matinhos',100),
	(17,'Recife',101),
	(19,'Rio de Janeiro / Armação de Búzios',102),
	(21,'Porto Alegre',103),
	(21,'Panambi',104),
	(22,'Porto Velho',105),
	(22,'Costa Marques',106),
	(22,'Ji-Paraná',107),
	(22,'Buritis',108),
	(22,'Guajará-Mirim',109),
	(23,'Boa Vista',110),
	(23,'Bonfin',111),
	(23,'Mucajaí',112),
	(23,'Pacaraima',113),
	(23,'São João da Baliza',114),
	(23,'Rorainópolis',115),
	(23,'Caracaraí',116),
	(23,'Campos Novos',117),
	(24,'Florianópolis',118),
	(24,'Itajaí',119),
	(24,'Navegantes',120),
	(25,'São Paulo',121),
	(25,'Barueri',122),
	(25,'São Vicente',123),
	(25,'Sorocaba',124),
	(25,'Itapetininga',125),
	(25,'Taboão da Serra',126),
	(25,'Suzano',127),
	(25,'Macatuba',128),
	(25,'Lençóis Paulista',129),
	(25,'Bauru',130),
	(25,'Graça',131),
	(25,'Marília',132),
	(25,'Guararapes',133),
	(25,'Vera Cruz',134),
	(25,'Álvaro de Carvalho',135),
	(25,'Tatuí',136),
	(25,'Campinas',137),
	(25,'Rio Claro',138),
	(26,'Aracajú',139),
	(26,'Guaratinga',140),
	(27,'Palmas',141),
	(27,'Araguaína',142),
	(6,'Itatira',143),
	(6,'Aquiraz',144),
	(6,'Beberibe',145),
	(6,'Cascavel',146),
	(6,'Umari',147),
	(6,'Palhano',148),
	(9999,'Aplicado Manualmente',9999);

/*!40000 ALTER TABLE `cities` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table sessions
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sessions`;

CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) unsigned NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  PRIMARY KEY (`session_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table states
# ------------------------------------------------------------

DROP TABLE IF EXISTS `states`;

CREATE TABLE `states` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `state` varchar(50) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `states` WRITE;
/*!40000 ALTER TABLE `states` DISABLE KEYS */;

INSERT INTO `states` (`id`, `state`)
VALUES
	(1,'Acre'),
	(2,'Alagoas'),
	(3,'Amapá'),
	(4,'Amazonas'),
	(5,'Bahia'),
	(6,'Ceará'),
	(7,'Distrito Federal'),
	(8,'Espírito Santo'),
	(9,'Goiás'),
	(10,'Maranhão'),
	(11,'Mato Grosso'),
	(12,'Mato Grosso do Sul'),
	(13,'Minas Gerais'),
	(14,'Pará'),
	(15,'Paraíba'),
	(16,'Paraná'),
	(17,'Pernambuco'),
	(18,'Piauí'),
	(19,'Rio de Janeiro'),
	(20,'Rio Grande do Norte'),
	(21,'Rio Grande do Sul'),
	(22,'Rondônia'),
	(23,'Roraima'),
	(24,'Santa Catarina'),
	(25,'São Paulo'),
	(26,'Sergipe'),
	(27,'Tocantins'),
	(9999,'Aplicado Manualmente');

/*!40000 ALTER TABLE `states` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table tpEpisodes
# ------------------------------------------------------------

DROP TABLE IF EXISTS `tpEpisodes`;

CREATE TABLE `tpEpisodes` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `episodio` int(3) NOT NULL,
  `temp` int(2) NOT NULL,
  `name` varchar(50) NOT NULL DEFAULT '',
  `img` varchar(100) NOT NULL DEFAULT '',
  `download` varchar(150) NOT NULL DEFAULT '',
  `youtube` varchar(150) NOT NULL DEFAULT '',
  `slides` varchar(150) NOT NULL DEFAULT '',
  `lifekids` varchar(150) NOT NULL DEFAULT '',
  `showAt` varchar(20) NOT NULL DEFAULT '#',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `tpEpisodes` WRITE;
/*!40000 ALTER TABLE `tpEpisodes` DISABLE KEYS */;

INSERT INTO `tpEpisodes` (`id`, `episodio`, `temp`, `name`, `img`, `download`, `youtube`, `slides`, `lifekids`, `showAt`)
VALUES
	(1,1,1,'Primeiro dia na escola de missões','/assets/images/thumbs/terra-prometida/temp-1/T1E1.png','https://drive.google.com/file/d/1dcqKYvoG6eyPveRQj0kRxRpPOWdwY0iE/view?usp=sharing','https://www.youtube.com/watch?v=DRUVa860zXc','#','https://drive.google.com/file/d/1VCQ5goBcdRmUx9ySyc2nfeDFYmt4_bWC/view?usp=sharing',''),
	(2,2,1,'Cookies: O teste de obediência','/assets/images/thumbs/terra-prometida/temp-1/T1E2.png','https://drive.google.com/file/d/1_nxz0GOtdOAsYHAbFzjGWd3MItLChIur/view?usp=sharing','https://www.youtube.com/watch?v=lhzkwqipSM8','https://drive.google.com/drive/folders/1PSo3HQlH7HAOmmrpahfAHFQBzOexSDwS?usp=sharing','https://drive.google.com/file/d/1_HHbaLbyWO14YcViB5z9BKLVbS3FnwN_/view?usp=sharing',''),
	(3,3,1,'Deus vê o coração','/assets/images/thumbs/terra-prometida/temp-1/T1E3.png','https://drive.google.com/file/d/1FdT8LXu1Xg5gHnkp0NIKtX_0cxf6oxp7/view?usp=sharing','https://www.youtube.com/watch?v=0iT6eS71sh4','https://drive.google.com/drive/folders/1UUTEaYa6R_VjX16NzkmlA_Y2uC1Kwoci?usp=sharing','https://drive.google.com/file/d/1G9D-hI1DSXXmAGZNp2J8vZc8jlN6i1Xw/view?usp=sharing',''),
	(4,4,1,'Introdução às armas espirituais','/assets/images/thumbs/terra-prometida/temp-1/T1E4.png','https://drive.google.com/file/d/1ujcyKwWVJ4FgFmYavvcTQ0LUG4AcQLU3/view?usp=sharing','https://www.youtube.com/watch?v=G1ljRJXtILo','https://drive.google.com/drive/folders/1rFiMaEJJu77AgSVg_K858EkskkTrm_Nb?usp=sharing','https://drive.google.com/file/d/1BR09dmaMVFE5o0W5V20VwuQp7sNlp9HQ/view?usp=sharing',''),
	(5,5,1,'Unidos Somos Mais Fortes','/assets/images/thumbs/terra-prometida/temp-1/T1E4.png','https://drive.google.com/file/d/1zQ9VkW-V-cuPo5UzEiAtPacOPgigq9GE/view?usp=sharing','https://www.youtube.com/watch?v=6Z-sBNdQf94','https://drive.google.com/drive/folders/1f52PSGOfKiaa5n5EkyAyKfJsyyOdm-Kh?usp=sharing','https://drive.google.com/file/d/1QlEE9bCezApz59JyLvwdMiZoToLsguXu/view?usp=sharing',''),
	(6,6,1,'Vencendo o medo','/assets/images/thumbs/terra-prometida/temp-1/T1E6.png','https://drive.google.com/file/d/1pJm-PuP87FxHzSe0HNv7hncj7uP1WuA_/view?usp=sharing','https://www.youtube.com/watch?v=UxQwqki7dws','https://drive.google.com/drive/folders/1F9cJ082bs5S0hvRkMGRvvkLycMzZey9w?usp=sharing','https://drive.google.com/file/d/1SNr_etZTtVG2x6mQSY04ThhLf-eF_Hsm/view?usp=sharing',''),
	(7,7,1,'Primeira invasão à nave','/assets/images/thumbs/terra-prometida/temp-1/T1E7.png','https://drive.google.com/file/d/1MiCu2mVktXwJKHr9GiB_7JHu0zvdMd52/view?usp=sharing','https://www.youtube.com/watch?v=b1lDH565FwQ','https://drive.google.com/drive/folders/1OXg5Hw7as91EqV2KRPRvEbjlk10gvIy3?usp=sharing','https://drive.google.com/file/d/1GPMNG-L9X3WRKGLSmn7Nlb3fwzEX-dBC/view?usp=sharing',''),
	(8,8,1,'Big mal vai atrás das jóias pela primeira vez','/assets/images/thumbs/terra-prometida/temp-1/T1E8.png','https://drive.google.com/file/d/1LfRoFmhZQ_dEE5Ko20sj58ai5rVk5kpE/view?usp=sharing','https://www.youtube.com/watch?v=s7nUk5NwhR8','https://drive.google.com/drive/folders/1aJdlHXefo4_vNoJD0e3elet55rj5zhKv?usp=sharing','https://drive.google.com/file/d/1ai9l03DHsmWYOOuWQJBj2WcR_sduLRs-/view?usp=sharing',''),
	(9,9,1,'Ler, decorar, meditar, APLICAR!','/assets/images/thumbs/terra-prometida/temp-1/T1E9.png','https://drive.google.com/file/d/1bC7nDzwC1CcHgvr0d9fmgC6BouZWfZeI/view?usp=sharing','https://www.youtube.com/watch?v=lD-J2Dm5vR0','https://drive.google.com/drive/folders/1zwOslW00fSPb7iXNrXMZFCHKQukVclZH?usp=sharing','https://drive.google.com/file/d/1bTo3wW2mncQfvbYOaPlbCFg5EAZUFAou/view?usp=sharing',''),
	(10,10,1,'A oração que segue a vontade de Deus','/assets/images/thumbs/terra-prometida/temp-1/T1E10.png','https://drive.google.com/file/d/1cCf0D2tRBpgkppKQKpuGhthjIuVl17MQ/view?usp=sharing','https://www.youtube.com/watch?v=hEibobAsbk0','https://drive.google.com/drive/folders/1c1PGNTJcx1VK-U025LxAKtlFBNlVf7CH?usp=sharing','https://drive.google.com/file/d/1OW-K2QUFIK8CsaW8Hi6wPexg-eNJyCBq/view?usp=sharing',''),
	(11,11,1,'Flechas de intercessão','/assets/images/thumbs/terra-prometida/temp-1/T1E11.png','https://drive.google.com/file/d/1knsDQ8SEcc6-AlOYRcq8fiHuzRlAETHf/view?usp=sharing','https://www.youtube.com/watch?v=2-YZth_A46w','https://drive.google.com/drive/folders/1LF-9M-doCH8SM9k7juosopTDFNly24jk?usp=sharing','https://drive.google.com/file/d/1bg3S9x0jhfGZ8J2Jazh89TMLwhI-9N37/view?usp=sharing',''),
	(12,12,1,'O ataque ao Tatuapé','/assets/images/thumbs/terra-prometida/temp-1/T1E12.png','https://drive.google.com/file/d/1ChfA8ZNQUqX7w7ozgEpyeScW6h_YA_CE/view?usp=sharing','https://www.youtube.com/watch?v=2ckwXQgYrm8','https://drive.google.com/drive/folders/1N6IklWdm3U88Cl6hXGxsG174K3pjG5ky?usp=sharing','https://drive.google.com/file/d/1lLpg9VLe14qp5Xx_Kc76iTc4IRsILCJT/view?usp=sharing',''),
	(13,13,1,'Cristina descobre o lugar secreto','/assets/images/thumbs/terra-prometida/temp-1/T1E13.png','https://drive.google.com/file/d/1sGPIkUHCzBz1u03nlxOKpP-6d9ai8HIN/view?usp=sharing','https://www.youtube.com/watch?v=yFDX8bLpvWc','https://drive.google.com/drive/folders/1yY1P1UbJFKs2gGVeO8lzh2PR0yBBjQg7?usp=sharing','https://drive.google.com/file/d/1EZuhQYP4vLisdB0YKCWGni7Zb5pKGgMN/view?usp=sharing',''),
	(14,14,1,'O poder do louvor e adoração','/assets/images/thumbs/terra-prometida/temp-1/T1E14.png','https://drive.google.com/file/d/1UJPAB3VJaO4DSnahRxIED8q0MPxJxoo6/view?usp=sharing','https://www.youtube.com/watch?v=5ZpPnGl1pjE','https://drive.google.com/drive/folders/1LPRyo02nGMSF25oKSQ15ZPiPZSXRU_Jl?usp=sharing','https://drive.google.com/file/d/1zUJst4oI668Yv7JoaIQjEYyiShEsJA4A/view?usp=sharing',''),
	(15,15,1,'Não consigo limpar vasos e adorar ao mesmo tempo','/assets/images/thumbs/terra-prometida/temp-1/T1E15.png','https://drive.google.com/file/d/16QkTRfRIkqpM1Aw1QD2GYNHqv0JWo4Ri/view?usp=sharing','https://www.youtube.com/watch?v=ED_clxRjeTQ','https://drive.google.com/drive/folders/1GCkQtR8JYR3ZVpShg0i48v0nji9vJ2l9?usp=sharing','https://drive.google.com/file/d/1HAT23Vcsdx2HW9Y_g1ksI6VWvxqYMdl1/view?usp=sharing',''),
	(16,16,1,'Louvor, uma poderosa arma de guerra,','/assets/images/thumbs/terra-prometida/temp-1/T1E16.png','https://drive.google.com/file/d/1nNu_6LRPTEt6ji-Dtt2bsW9qkExKBctA/view?usp=sharing','https://www.youtube.com/watch?v=JHUtC3VWQD8','https://drive.google.com/drive/folders/17oFpSiPf_Zre2KlwE2BFHuKBfAyryv6z?usp=sharing','https://drive.google.com/file/d/1nIsuUiUYL3BNip5ZiQZRPF3Wv-A_Rjrh/view?usp=sharing',''),
	(17,17,1,'A competição dos Cookies','/assets/images/thumbs/terra-prometida/temp-1/T1E17.png','https://drive.google.com/file/d/1B14MeWtQAJod4zjK5QPbCjslg5o_OCyI/view?usp=sharing','https://www.youtube.com/watch?v=y4jXaVyMnFE','https://drive.google.com/drive/folders/18IBJ_-gKOzKAS6vOraH7Sg4M-BNrcAW0?usp=sharing','https://drive.google.com/file/d/1yGeDxJQzYSKQGcyIhYMtXY_0zJs6REVY/view?usp=sharinghttps://drive.google.com/file/d/1yGeDxJQzYSKQGcyIhYMtXY_0zJs6REVY/vi',''),
	(18,18,1,'Não duvidar, mas sim acreditar','/assets/images/thumbs/terra-prometida/temp-1/T1E18.png','https://drive.google.com/file/d/1N_Fwe4nXzq52mjLSNCnykdzL0dq6V9QV/view?usp=sharing','https://www.youtube.com/watch?v=lDTVGcTt_sE','https://drive.google.com/drive/folders/15gmS0UEX0Q7xxKHEBkk76CqNO1Nu7uaj?usp=sharing','https://drive.google.com/file/d/1yRc450XasVYHSu4GO1_NgU6S1-2y4WKS/view?usp=sharing',''),
	(19,19,1,'Noite dos meninos X Noite das meninas','/assets/images/thumbs/terra-prometida/temp-1/T1E19.png','https://drive.google.com/file/d/102okML13v4s1BM8MlP0ps6LpDFkCh0Ll/view?usp=sharing','https://www.youtube.com/watch?v=lgKiXBxHeUk','https://drive.google.com/drive/folders/1d_wbIOGIYBR_LrG8CNNGB1OdSP9zrgai?usp=sharing','https://drive.google.com/file/d/1Qvzogf4c51tDvGiHTkSRIZngBToZUf0U/view?usp=sharing',''),
	(20,20,1,'Batalha nos ribeirinhos','/assets/images/thumbs/terra-prometida/temp-1/T1E20.png','https://drive.google.com/file/d/14p_hL9HPY9tHNP7tOR2XwimGFKShWGH1/view?usp=sharing','https://www.youtube.com/watch?v=pQBmIcfty4E','https://drive.google.com/drive/folders/18VSIwAwn66wQmAD7teogd56GvQEPFxai?usp=sharing','https://drive.google.com/file/d/1lg1OYb4ESVOONzrW2LvpMWnxuoSTBahh/view?usp=sharing','2022/10/02'),
	(21,21,1,'Destruindo Fortalezas - Parte 01','/assets/images/thumbs/terra-prometida/temp-1/T1E21.png','https://drive.google.com/file/d/18M3Cv3ggeWKwEUjg72ClhZmlPtch3nWO/view?usp=sharing','https://www.youtube.com/watch?v=lpDKKHQLk8c','https://drive.google.com/drive/folders/1zJ1xZcYqm9l1zmpKe_kzVxnO2v4vKEAz?usp=sharing','https://drive.google.com/file/d/1cTB7MuBCkCxJOD6wA6oF_AXf6WLbxOjc/view?usp=sharing','2022/10/09'),
	(22,22,1,'Destruindo Fortalezas - Parte 02','/assets/images/thumbs/terra-prometida/temp-1/T1E22.png','https://drive.google.com/file/d/1XbAtWP8nr3bIHXDQ39y8O5qwQu3DRK8a/view?usp=sharing','https://www.youtube.com/watch?v=kJ_T2sKFdIg','https://drive.google.com/drive/folders/1BlDIXe9rdvTNjxcBfT1-wly5M93vssjC?usp=sharing','https://drive.google.com/file/d/1atf4MgcQ7tFVPq0IzhGD0c2_ZO1t7e7n/view?usp=sharing','2022/10/16'),
	(23,23,1,'Destruindo Fortalezas - Parte 03','/assets/images/thumbs/terra-prometida/temp-1/T1E23.png','https://drive.google.com/file/d/1OjSJxD77HLh-PmLGFgjmLWzefk_0DgwB/view?usp=sharing','https://www.youtube.com/watch?v=iw-CIBwezVU','https://drive.google.com/drive/folders/1ifSQKxM8hu0pTys33XfxUiavHe49iTU1?usp=sharing','https://drive.google.com/file/d/1VkaqDb2g3xjZoj8zbeFjUnK2b3hLDVAT/view?usp=sharing','2022/10/23'),
	(24,1,2,'Os quatro diamantes do destino','/assets/images/thumbs/terra-prometida/temp-2/T2E1.png','https://drive.google.com/file/d/1ZPoGPBvu2Sj1qtn2hBxcqVrE_Om_HJGO/view?usp=sharing','https://www.youtube.com/watch?v=CzT-qFEqFKY','https://drive.google.com/drive/folders/1LtaAg7SxokFjrrbq64uQSrUxGkWtWc8R?usp=sharing','https://drive.google.com/file/d/1EFRm5P-MLYgW0U3PJzisM95fyYU4MhC4/view?usp=sharing','2022/10/30'),
	(25,2,2,'As duas árvores','/assets/images/thumbs/terra-prometida/temp-2/T2E2.png','https://drive.google.com/file/d/1YQQEZWwmFRfAUig0OBA2uf0sv9T3tkPA/view?usp=sharing','https://www.youtube.com/watch?v=tmrXsb7TkRg','https://drive.google.com/drive/folders/1fT8etkYMOgXW919mQ8u8W9KeGvdea7hD?usp=sharing','https://drive.google.com/file/d/1i9Ja7w9LUeWZYI09iDKFyRhvjuYFKJSh/view?usp=sharing','2022/11/06'),
	(26,3,2,'Passeio escolar','/assets/images/thumbs/terra-prometida/temp-2/T2E3.png','https://drive.google.com/file/d/1gJ6oHaV4rzH3ZbbbjRtbOipBppUEPUAL/view?usp=sharing','https://www.youtube.com/watch?v=6VcWo9hRp9g','https://drive.google.com/drive/folders/1NZ7EDzeDigzlVGHrDWGueFC_KuJoYzyt?usp=sharing','https://drive.google.com/file/d/1JgubE1CNDikTPCOLtmUAuBbi2bsawNG4/view?usp=sharing','2022/11/13'),
	(27,4,2,'Fumaça da discórdia','/assets/images/thumbs/terra-prometida/temp-2/T2E4.png','https://drive.google.com/file/d/1Pv187K4_S21Ds_rFLAvDTREYoo7MH90E/view?usp=sharing','https://www.youtube.com/watch?v=sojwaKftc50','https://drive.google.com/drive/folders/1WdhHq67GtiQ0qt_z5rlHhENekOJLoPW-?usp=sharing','https://drive.google.com/file/d/1NfF8A5YfLXc-o01Z2LawuslbpBV86vST/view?usp=sharing','2022/11/20'),
	(28,5,2,'O amor preenche os nossos corações','/assets/images/thumbs/terra-prometida/temp-2/T2E5.png','https://drive.google.com/file/d/1ghDNnsJwa-Zy4LklMu8MndWFuRuT613G/view?usp=sharing','https://www.youtube.com/watch?v=RisqZM4qOM0','https://drive.google.com/drive/folders/1ZLQr_RtBS-liKfwu1m8oir3-d4uX8mrS?usp=sharing','https://drive.google.com/file/d/1VI7Ao4FtEPhQbwt7a2lElC_0nBwA2SiF/view?usp=sharing','2022/11/27'),
	(29,6,2,'Deus me deu poder para perdoar','/assets/images/thumbs/terra-prometida/temp-2/T2E6.png','https://drive.google.com/file/d/1L4m0-SI0QpxxwFF_xWGEJj8ooH_2ASQ9/view?usp=sharing','https://www.youtube.com/watch?v=_AJ4si5lWu4','https://drive.google.com/drive/folders/1me_zI5ykgX1VlfEMiDr0cXy4YwG398YN?usp=sharing','https://drive.google.com/file/d/1Zh5ZIagRAPaCryAKnF3OzfOc1AXPkhWe/view?usp=sharing','2022/12/04'),
	(30,7,2,'A alegria do Senhor','/assets/images/thumbs/terra-prometida/temp-2/T2E7.png','https://drive.google.com/file/d/1_Nq1wyDmGbnDxa17UQpuW878853avviw/view?usp=sharing','https://www.youtube.com/watch?v=JjLMzoGiXZk','https://drive.google.com/drive/folders/19wfGrvDj2oe69HwVlZ_uRCEqxD8nPhDE?usp=sharing','https://drive.google.com/file/d/1kQVDaJPFQhg8YqeYcvTPIDxtEMkLDf3A/view?usp=sharing','2022/12/11'),
	(31,8,2,'A paz que excede todo o entendimento','/assets/images/thumbs/terra-prometida/temp-2/T2E8.png','https://drive.google.com/file/d/1UWEiPIuuQZVckonFSg1-B2qZAzA1-xI1/view?usp=sharing','https://www.youtube.com/watch?v=FwsiU1PbIgI','https://drive.google.com/drive/folders/18Tsk9juzuAaYelZuHFtnx8makUYECFjL?usp=sharing','https://drive.google.com/file/d/1XuIUDOBF5HwICQ1jkeIMAvT2amFfWdp1/view?usp=sharing','2022/12/18'),
	(32,9,2,'A paciência me faz ouvir a voz de Deus','/assets/images/thumbs/terra-prometida/temp-2/T2E9.png','https://drive.google.com/file/d/1Y2up-n4r9SEiaYBHszXsfsnCW4GMW6ok/view?usp=sharing','https://www.youtube.com/watch?v=c9QFuaZxQms','https://drive.google.com/drive/folders/11lwLPRHjtKgUsQscOA5gcJMxZfVn2QQP?usp=sharing','https://drive.google.com/file/d/1vUA3071EKnTdRGUQow2h7YV0RZkoolXm/view?usp=sharing','2022/12/25'),
	(33,10,2,'Amabilidade','/assets/images/thumbs/terra-prometida/temp-2/T2E10.png','https://drive.google.com/file/d/1SM5VUL6KfimlWAlePoGdmZEKxjMG3he-/view?usp=sharing','https://www.youtube.com/watch?v=6pgW5tdPWTs','https://drive.google.com/drive/folders/1VF4LvMUlLkF-l9CdHrNQBpXYpGPLM8Hp?usp=sharing','https://drive.google.com/file/d/1ZbNfxbeYx7z5d8ambqVMoXIPxVj_FZSq/view?usp=sharing',''),
	(34,11,2,'Bondade','/assets/images/thumbs/terra-prometida/temp-2/T2E11.png','https://drive.google.com/file/d/1Ac1yMR3DPZ5TG3AT7f1akgci9Xi6drn8/view?usp=sharing','https://www.youtube.com/watch?v=OMYrC2-uGQA','https://drive.google.com/drive/folders/1rs7C3bOTbsZA6bqlgubl2uFRiUizgsHd?usp=sharing','https://drive.google.com/file/d/1JugdQ6gigvfa_jQt7leAwvV368izfxAw/view?usp=sharing',''),
	(35,12,2,'Fidelidade','/assets/images/thumbs/terra-prometida/temp-2/T2E12.png','https://drive.google.com/file/d/1rhnBY-dWyPwlBWKslZqDJ5JFqfUTqNhK/view?usp=sharing','https://www.youtube.com/watch?v=jJekpQ1NHJs','https://drive.google.com/drive/folders/1avZ_Jxq-5Wci10aAo6cKrBzkySpGFP3S?usp=sharing','https://drive.google.com/file/d/1ueEfIsRbpgzc0sWdtnB7z27fNiHLlHe-/view?usp=sharing',''),
	(36,13,2,'Mansidão','/assets/images/thumbs/terra-prometida/temp-2/T2E13.png','https://drive.google.com/file/d/11vOLQSd9dV2c3fPuCOKX6Yg32tS1l-yR/view?usp=sharing','https://www.youtube.com/watch?v=5iUn60OElnU','https://drive.google.com/drive/folders/1nQTMHUaQGPXI516wySuexhJDQYzOfT7P?usp=sharing','https://drive.google.com/file/d/1ITbz-nrrLxxugMys3mGnMEVJQhDcZqS1/view?usp=sharing',''),
	(37,14,2,'Domínio próprio','/assets/images/thumbs/terra-prometida/temp-2/T2E14.png','https://drive.google.com/file/d/1lKUVkr0f5VA2eZQw2pRiisVzL3Q0xkB-/view?usp=sharing','https://www.youtube.com/watch?v=m9Czs2k2Ncs','https://drive.google.com/drive/folders/1jTERAUCYQ7EtxKNxcXi1HVj6Lp_2DNQP?usp=sharing','https://drive.google.com/file/d/1ekrC-s6Y4Mr_skqDrl4Wnt_nO0-Yg6Nl/view?usp=sharing',''),
	(38,15,2,'Frutos do Espírito Pt.1','/assets/images/thumbs/terra-prometida/temp-2/T2E15.png','https://drive.google.com/file/d/1yyAMaHNwuFKOeH1_lFstRnrXE0zDctfL/view?usp=sharing','https://www.youtube.com/watch?v=CzT-qFEqFKY','https://drive.google.com/drive/folders/1jv3LfLLKrNDaAlTzVGbbeNOhP0935QNO?usp=sharing','https://drive.google.com/file/d/1l6rpPy6qpDDRq3KJj3PN6YSk-LMFFyHC/view?usp=sharing',''),
	(39,16,2,'Frutos do Espírito Pt.2','/assets/images/thumbs/terra-prometida/temp-2/T2E16.png','https://drive.google.com/file/d/1JwJp_BJWXzbK1hFfIZB0CADzbMnYxVQj/view?usp=sharing','https://www.youtube.com/watch?v=IrG7l399eU8','https://drive.google.com/drive/folders/1dLtuSXyUnhiVrl58qOagkKAMU95mP67i?usp=sharing','https://drive.google.com/file/d/1CO1NgoWO6YhXP0TCF3iwC2z39MSqPHqT/view?usp=sharing','');

/*!40000 ALTER TABLE `tpEpisodes` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table users
# ------------------------------------------------------------

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL DEFAULT '',
  `lastname` varchar(150) NOT NULL DEFAULT '',
  `cellphone` varchar(40) NOT NULL DEFAULT '',
  `email` varchar(80) NOT NULL DEFAULT '',
  `passwordHash` varchar(150) NOT NULL DEFAULT '',
  `isPazChurch` tinyint(1) NOT NULL,
  `nameCity` varchar(100) DEFAULT NULL,
  `nameChurch` varchar(100) DEFAULT NULL,
  `id_state` int(11) DEFAULT NULL,
  `id_city` int(11) DEFAULT NULL,
  `id_church` int(11) DEFAULT NULL,
  `token` varchar(130) NOT NULL DEFAULT '',
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_state` (`id_state`),
  KEY `user_city` (`id_city`),
  KEY `user_church` (`id_church`),
  CONSTRAINT `user_church` FOREIGN KEY (`id_church`) REFERENCES `churchs` (`id`) ON DELETE CASCADE,
  CONSTRAINT `user_city` FOREIGN KEY (`id_city`) REFERENCES `cities` (`id`) ON DELETE CASCADE,
  CONSTRAINT `user_state` FOREIGN KEY (`id_state`) REFERENCES `states` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;

INSERT INTO `users` (`id`, `name`, `lastname`, `cellphone`, `email`, `passwordHash`, `isPazChurch`, `nameCity`, `nameChurch`, `id_state`, `id_city`, `id_church`, `token`, `createdAt`, `updatedAt`)
VALUES
	(3,'Aaron','Helland','11963748374','aaron@gmail.com','$2b$10$BnNuOFJSQIMUrl4mLtG0B.GlyjozOFEDVdwPPSFIvvvZBdFqdIei2',1,'','',6,37,80,'$2b$10$yE/rGoGDfCAg2nHT3Zr9y.56ghxiqnb1FCEhQeevGQdae64wQAdPS','2022-11-13 12:20:34','2022-12-06 16:04:01'),
	(4,'Luiza','Amorim','48994857485','luiza@gmail.com','$2b$10$V08xXrQuX6AdohOg1xovO.l6WAoNDJ6r/Gool4oRsxkbgBjjRflf6',0,'São João Batista','Igreja Vida e Paz',24,9999,9999,'$2b$10$FHPMAwu/hxc21Dlpmi1h5ORpSWYkuxISqcb3OKzJLcD.WtyuNwS4C','2022-11-13 12:31:57','2022-11-13 12:31:57'),
	(5,'Gabriel','Fiuza','11987589586','fiuza@gmail.com','$2b$10$SvEAk97edAvcFh9uDOJrSu/f3M0grI8fOWJjlS.UY9VuQSjxNy97y',1,'','',4,23,49,'$2b$10$1g1wnWaRBmzp6XcV61SQ8O3IplRVNddlz6TVlrLELSbqheaWKRKCO','2022-11-13 16:35:12','2022-11-13 16:35:12'),
	(6,'Heston','Delgado','11985647382','heston@gmail.com','$2b$10$kc/hBRsxBodMiIO3UdKzFuk2PDmJcfX/D.DhmS4tAjVLGrloALmv.',1,'','',6,37,80,'$2b$10$.cUNL/uwm4FU2luefCdF3OuNN9bIvVM57kgXvGtwx5Y652NiNls0W','2022-11-14 22:01:34','2022-11-14 22:01:34');

/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
