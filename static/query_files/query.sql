DROP DATABASE IF EXISTS apollomedcenter;
CREATE DATABASE apollomedcenter;

USE apollomedcenter;

DROP TABLE IF EXISTS users;
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at DATE DEFAULT (CURRENT_DATE)
);



DROP TABLE IF EXISTS applicant;
CREATE TABLE applicant (
    applicantID CHAR(15) NOT NULL,
    userID INT NOT NULL,
    fullName VARCHAR(255) NOT NULL,
    age INT NOT NULL,
    gender VARCHAR(10) NOT NULL,
    civilStatus VARCHAR(20) NOT NULL,
    birthDate DATE NOT NULL,
    birthPlace VARCHAR(255) NOT NULL,
    citizenship VARCHAR(50) NOT NULL,
    homeAddress VARCHAR(255) NOT NULL,
    telephoneNo VARCHAR(20),
    cellphoneNo VARCHAR(20),
    emailAddress VARCHAR(255) NOT NULL,
    tinNo VARCHAR(20),
    insuranceIDType VARCHAR(50),
    insuranceIDNo VARCHAR(50),
    phicNo VARCHAR(50),
    guardianName VARCHAR(255),
    guardianOccupation VARCHAR(100),
    guardianContactNo VARCHAR(20),
    collegeAttended VARCHAR(255),
    degree VARCHAR(100),
    yearGraduated YEAR,
    medSchoolAttended VARCHAR(255),
    medSchoolGradYear YEAR,
    internshipInstitution VARCHAR(255),
    internshipGradYear YEAR,
    status VARCHAR(12),
    PRIMARY KEY (applicantID),
    FOREIGN KEY (userID) REFERENCES users (id) ON DELETE CASCADE
);


DELIMITER $$
CREATE TRIGGER generate_applicant_id BEFORE INSERT ON applicant
FOR EACH ROW
BEGIN
    DECLARE numeric_part INT;
	
    -- Get the current maximum numeric part for the year
    SELECT IFNULL(MAX(CAST(SUBSTRING_INDEX(applicantID, '-', -1) AS UNSIGNED)), 0) + 1 
    INTO numeric_part 
    FROM applicant 
    WHERE applicantID LIKE CONCAT(YEAR(CURDATE()), '-CMC-%');

    -- Set the applicantID column value
    SET NEW.applicantID = CONCAT(YEAR(CURDATE()), '-CMC-', numeric_part);
END$$
DELIMITER ;


DROP TABLE IF EXISTS residency;
CREATE TABLE residency (
  residencyCode CHAR(8) NOT NULL,
  applicantID CHAR(15) NOT NULL,
  departmentSpecialty VARCHAR(30) NOT NULL,
  hospital VARCHAR(70) NOT NULL,
  residencyDuration INT,
  PRIMARY KEY (residencyCode, applicantID),
  FOREIGN KEY (applicantID) REFERENCES applicant (applicantID) ON DELETE CASCADE);


DELIMITER $$
CREATE TRIGGER generate_residency_code BEFORE INSERT ON residency
FOR EACH ROW
BEGIN
    DECLARE numeric_part INT;

    -- Get the current maximum numeric part
    SELECT IFNULL(MAX(CAST(SUBSTRING_INDEX(residencyCode, '-', -1) AS UNSIGNED)), 0) + 1 
    INTO numeric_part 
    FROM residency 
    WHERE residencyCode LIKE 'RS-%';

    -- Set the residencyCode column value
    SET NEW.residencyCode = CONCAT('RS-', numeric_part);
END$$
DELIMITER ;

DROP TABLE IF EXISTS postresidency;
CREATE TABLE postresidency (
  postResCode CHAR(8) NOT NULL,
  applicantID CHAR(15) NOT NULL,
  postResSpecialty VARCHAR(30) NOT NULL,
  postResInstitution VARCHAR(60) NOT NULL,
  postResDuration INT,
  PRIMARY KEY (postResCode, applicantID),
  FOREIGN KEY (applicantID) REFERENCES applicant (applicantID) ON DELETE CASCADE);
    
    
DELIMITER $$
CREATE TRIGGER generate_postres_code BEFORE INSERT ON postresidency
FOR EACH ROW
BEGIN
    DECLARE numeric_part INT;

    -- Get the current maximum numeric part
    SELECT IFNULL(MAX(CAST(SUBSTRING_INDEX(postResCode, '-', -1) AS UNSIGNED)), 0) + 1 
    INTO numeric_part 
    FROM postresidency 
    WHERE postResCode LIKE 'PR-%';

    -- Set the postResCode column value
    SET NEW.postResCode = CONCAT('PR-', numeric_part);
END$$
DELIMITER ;


DROP TABLE IF EXISTS admins;
CREATE TABLE admins (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

-- Insert data into the users table
INSERT INTO users (id, name, email, password, created_at) VALUES
(1, 'Debbie Alagao', 'debbiekayealagao29@gmail.com', '$2a$10$e4NToqfp8uuTVdwAJi8eluKiQSlc8/NcXYgGzdctuKVHFr1KW6Rku', '2024-07-07'),
(2, 'Marie Cris', 'mariecrisedusma@gmail.com', '$2a$10$hv.D0lF6whF3ifKJR6ExQuFdXBnrpxxf4.ef.WiJELAoEKXkXjwQq', '2024-07-07'),
(3, 'Anthony James', 'james.esteban08@gmail.com', '$2a$10$XU/ssNP0rnlAk/Pz8MHICOML7nm6Z1vLjBanZNM67kmrz8bDxgEBS', '2024-07-07'),
(4, 'Brian Sebastian', 'brianmaysebastian@gmail.com', '$2a$10$p1ENfp.s2bdjU4IJ5.N.LutGG1xMRrkP0CQOvAEkh9PTSfu.uLo.K', '2024-07-07');

-- Insert data into the applicant table
INSERT INTO applicant (
    applicantID, userID, fullName, age, gender, civilStatus, birthDate, birthPlace, citizenship, homeAddress, telephoneNo, cellphoneNo, emailAddress, tinNo, insuranceIDType, insuranceIDNo, phicNo, guardianName, guardianOccupation, guardianContactNo, collegeAttended, degree, yearGraduated, medSchoolAttended, medSchoolGradYear, internshipInstitution, internshipGradYear, status
) VALUES
('2024-CMC-1', 1, 'Debbie Kaye Alagao', 42, 'F', 'S', '1982-01-06', 'Quezon City', 'American', '456 Narra st., Antipolo City', '439-4048', '+63 946 009 0359', 'debbiekayealagao29@gmail.com', '149-133-543-000', 'GSIS', '0028-2581546-4', '34-694024595-2', 'Rachel Ann T. Alagao', 'Software Developer', '+63 981 025 1322', 'Our Lady of Fatima University', 'Bachelor of Science in Biology', 2004, 'University of Santo Tomas', 2010, 'St. Luke\'s Medical Center', 2011, 'Approved'),
('2024-CMC-2', 2, 'Marie Cris Edusma', 47, 'F', 'M', '1977-04-07', 'Makati City', 'Filipino', '5964 Gloria, Makati City', '659-0987', '+63 903 753 0040', 'mariecrisedusma@gmail.com', '169-413-123-000', 'SSS', '04-8593851-3', '03-502596032-6', 'Mary C. Edusma', 'Accountant', '+63 931 875 6392', 'University of Santo Tomas', 'Bachelor of Science in Radiologic Technology', 1999, 'University of Santo Tomas', 2003, 'University of Santo Tomas Hospital', 2005, 'Denied'),
('2024-CMC-3', 3, 'Anthony James Esteban', 35, 'M', 'W', '1989-09-21', 'Taguig City', 'Filipino', '24 Brgy Sta Ana, Taguig City', '123-7897', '+63 926 610 8639', 'james.esteban08@gmail.com', '249-832-432-000', 'SSS', '04-7654325-3', '32-162534893-9', 'Maria A. Esteban', 'Waitress', '+63 991 445 4360', 'University of the Philippines', 'Bachelor of Science in Nursing', 2010, 'University of the Philippines', 2013, 'Manila General Hospital', 2015, 'Under review'),
('2024-CMC-4', 4, 'Brian May Sebastian', 35, 'M', 'S', '1989-10-22', 'Manila City', 'Japanese', '26 Brgy Sta Ilena, Manila City', '435-9071', '+63 926 610 8631', 'brianmaysebastian@gmail.com', '449-832-331-000', 'SSS', '04-7654325-3', '32-162534893-9', 'Marian A. Sebastian', 'Driver', '+63 961 455 4160', 'University of the Philippines', 'Bachelor of Science in Nursing', 2011, 'University of the Philippines', 2014, 'Manila General Hospital', 2015, 'Under review');

-- Insert data into the residency table
INSERT INTO residency (applicantID, departmentSpecialty, hospital, residencyDuration)
VALUES ('2024-CMC-1', 'Cardiology', 'St. Luke''s Medical Center', 4),
	   ('2024-CMC-1', 'Radiologic Technology', 'Makati Medical Center', 3),
       ('2024-CMC-1', 'Pediatrics', 'Makati Medical Center', 3),
       ('2024-CMC-2', 'Radiologic Technology', 'St. Clare''s Medical Center, Inc.', 3),
       ('2024-CMC-2', 'Cardiology', 'St. Clare''s Medical Center, Inc.', 3),
       ('2024-CMC-3', 'Pediatrics', 'Rizal Medical Center', 3),
       ('2024-CMC-3', 'Cardiology', 'Rizal Medical Center', 3),
       ('2024-CMC-4', 'Pediatrics', 'Makati Medical Center', 3);

-- Insert data into the postresidency table
INSERT INTO postresidency (applicantID, postResSpecialty, postResInstitution, postResDuration) 
VALUES ('2024-CMC-1', 'Internal Medicine', 'Makati Medical Center', 2),
	   ('2024-CMC-1', 'Ultrasound Technician', 'Makati Medical Center', 2),
       ('2024-CMC-3', 'Ultrasound Technician', 'Makati Medical Center', 3);

-- Insert data into the admins table
INSERT INTO admins (id, name, email, password) VALUES
(1, 'Admin', 'amc.admin@gmail.com', '$2a$10$K/2KjvfBECG4RnxSxLsXXOP9zJUeprK6uTBI/ejNj00yCrGUPokgK');
