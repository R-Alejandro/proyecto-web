-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: localhost    Database: herramientaweb
-- ------------------------------------------------------
-- Server version	8.0.22
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `herramientaweb`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `herramientaweb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `herramientaweb`;

--
-- Table structure for table `component`
--

DROP TABLE IF EXISTS `component`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `component` (
  `cp_uuid` varchar(255) NOT NULL,
  `dsb_uuid` varchar(255) NOT NULL,
  `cp_name` varchar(255) NOT NULL,
  `cp_description` varchar(255) NOT NULL,
  PRIMARY KEY (`cp_uuid`),
  KEY `dsb_uuid` (`dsb_uuid`),
  CONSTRAINT `component_ibfk_1` FOREIGN KEY (`dsb_uuid`) REFERENCES `dashboard` (`dsb_uuid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `component`
--

LOCK TABLES `component` WRITE;
/*!40000 ALTER TABLE `component` DISABLE KEYS */;
INSERT INTO `component` VALUES ('15e11916-434c-4888-98d2-9a174ab7de26','350f4b6c-f3d7-4456-b17f-250702d10b9f','test component','test component');
/*!40000 ALTER TABLE `component` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dashboard`
--

DROP TABLE IF EXISTS `dashboard`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dashboard` (
  `dsb_uuid` varchar(255) NOT NULL,
  `usr_email` char(40) DEFAULT NULL,
  `dsb_name` char(60) DEFAULT 'Nuevo Tablero',
  `dsb_description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`dsb_uuid`),
  KEY `usr_email` (`usr_email`),
  CONSTRAINT `dashboard_ibfk_1` FOREIGN KEY (`usr_email`) REFERENCES `user` (`usr_email`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dashboard`
--

LOCK TABLES `dashboard` WRITE;
/*!40000 ALTER TABLE `dashboard` DISABLE KEYS */;
INSERT INTO `dashboard` VALUES ('235aff78-27e9-4d1a-8617-7653f286879f','santiagoa-rozoh@unilibre.edu.co','postgres','learn postgres'),('350f4b6c-f3d7-4456-b17f-250702d10b9f','mysql@gmail.com','francisco','f'),('770a816e-4b03-4351-a096-fccaa766d8f5','mysql@gmail.com','postgres','aprender postgres');
/*!40000 ALTER TABLE `dashboard` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dashboard_x_label`
--

DROP TABLE IF EXISTS `dashboard_x_label`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dashboard_x_label` (
  `dsb_uuid` varchar(255) NOT NULL,
  `lbl_id` smallint unsigned NOT NULL,
  PRIMARY KEY (`dsb_uuid`,`lbl_id`),
  KEY `lbl_id` (`lbl_id`),
  CONSTRAINT `dashboard_x_label_ibfk_1` FOREIGN KEY (`dsb_uuid`) REFERENCES `dashboard` (`dsb_uuid`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `dashboard_x_label_ibfk_2` FOREIGN KEY (`lbl_id`) REFERENCES `label` (`lbl_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dashboard_x_label`
--

LOCK TABLES `dashboard_x_label` WRITE;
/*!40000 ALTER TABLE `dashboard_x_label` DISABLE KEYS */;
INSERT INTO `dashboard_x_label` VALUES ('350f4b6c-f3d7-4456-b17f-250702d10b9f',1),('235aff78-27e9-4d1a-8617-7653f286879f',5),('770a816e-4b03-4351-a096-fccaa766d8f5',5),('235aff78-27e9-4d1a-8617-7653f286879f',9),('770a816e-4b03-4351-a096-fccaa766d8f5',9);
/*!40000 ALTER TABLE `dashboard_x_label` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `followers`
--

DROP TABLE IF EXISTS `followers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `followers` (
  `follower_email` char(40) NOT NULL,
  `usr_email` char(40) NOT NULL,
  PRIMARY KEY (`follower_email`,`usr_email`),
  KEY `usr_email` (`usr_email`),
  CONSTRAINT `followers_ibfk_1` FOREIGN KEY (`follower_email`) REFERENCES `user` (`usr_email`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `followers_ibfk_2` FOREIGN KEY (`usr_email`) REFERENCES `user` (`usr_email`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `followers`
--

LOCK TABLES `followers` WRITE;
/*!40000 ALTER TABLE `followers` DISABLE KEYS */;
/*!40000 ALTER TABLE `followers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `label`
--

DROP TABLE IF EXISTS `label`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `label` (
  `lbl_id` smallint unsigned NOT NULL AUTO_INCREMENT,
  `lbl_name` char(20) NOT NULL,
  PRIMARY KEY (`lbl_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `label`
--

LOCK TABLES `label` WRITE;
/*!40000 ALTER TABLE `label` DISABLE KEYS */;
INSERT INTO `label` VALUES (1,'sports'),(2,'music'),(3,'education'),(4,'design'),(5,'programming'),(6,'maths'),(7,'science'),(8,'biology'),(9,'technology');
/*!40000 ALTER TABLE `label` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `usr_email` char(40) NOT NULL,
  `usr_name` char(20) DEFAULT NULL,
  `usr_nickname` char(40) NOT NULL,
  `usr_password` char(60) NOT NULL,
  `usr_avatar` char(80) DEFAULT NULL,
  `usr_auth` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`usr_email`),
  UNIQUE KEY `usr_nickname` (`usr_nickname`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('AlejandroRHiguera@gmail.com','Alejandro','alejo','$2b$10$WV9gLN5emJZKvICgxMwR9.tzt4mrrjhBJPYHHK292l0BcPygOtUYG',NULL,0),('mysql@gmail.com','mysql','mysql','$2b$10$EXqOQsEgpcdxWDcTaOkqdOSyI0LHagcc.4KKkipPDC4cMuqnQrGUK',NULL,0),('santiagoa-rozoh@unilibre.edu.co','francisco','fran','$2b$10$D8FnfN/bhJgOSgWjmIDgEuAViVIILVWEThgBG0/WloIdwppStJcWm',NULL,0);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'herramientaweb'
--
/*!50003 DROP PROCEDURE IF EXISTS `p_addUSerArgs` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = cp850 */ ;
/*!50003 SET character_set_results = cp850 */ ;
/*!50003 SET collation_connection  = cp850_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `p_addUSerArgs`(email CHAR(40), U_name CHAR(20), nickname CHAR(40), U_password CHAR(60))
BEGIN
        INSERT INTO user(
                    usr_email,
                    usr_name,
                    usr_nickname,
                    usr_password
                )
        VALUES (
            email,
            U_name,
            nickname,
            U_password
        );
    END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `p_getAllDashboards` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = cp850 */ ;
/*!50003 SET character_set_results = cp850 */ ;
/*!50003 SET collation_connection  = cp850_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `p_getAllDashboards`()
BEGIN SELECT * FROM dashboard ORDER BY RAND(); END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `p_getDashboardXLabel` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = cp850 */ ;
/*!50003 SET character_set_results = cp850 */ ;
/*!50003 SET collation_connection  = cp850_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `p_getDashboardXLabel`(IN email CHAR(40))
BEGIN
    SELECT d.dsb_uuid, d.usr_email, d.dsb_name, d.dsb_description,
    GROUP_CONCAT(l.lbl_name) AS labels 
    FROM dashboard d
    INNER JOIN dashboard_x_label dxl ON d.dsb_uuid = dxl.dsb_uuid
    INNER JOIN label l ON dxl.lbl_id = l.lbl_id
    WHERE d.usr_email = email
    GROUP BY dxl.dsb_uuid;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-11-07 18:16:30
