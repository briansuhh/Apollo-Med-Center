DROP DATABASE IF EXISTS apollomedcenter;
CREATE DATABASE apollomedcenter;

USE apollomedcenter;

DROP TABLE IF EXISTS users;
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
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
    status VARCHAR(10),
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
  residencyDuration VARCHAR(10) NOT NULL,
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
  postResDuration VARCHAR(10) NOT NULL,
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


-- Insert data into the `applicant` table
INSERT INTO applicant (applicantID, userID, fullName, age, gender, civilStatus, birthDate, birthPlace, citizenship, 
					   homeAddress, telephoneNo, cellphoneNo, emailAddress, tinNo, insuranceIDType, insuranceIDNo, 
                       phicNo, guardianName, guardianOccupation, guardianContactNo, collegeAttended, degree, yearGraduated, 
                       medSchoolAttended, medSchoolGradYear, internshipInstitution, internshipGradYear, status)
VALUES ('2024-CMC-1', 1, 'Alberto Esteban Sebastian', 42, 'M', 'S', '1982-01-06', 'Quezon City', 'American', 
        '456 Narra st., Antipolo City', '639', '+63 946 009 0359', 'albrtosebastian06@gmail.com', '149-133-543-000', 'GSIS', '0028-2581546-4',
        '34-694024595-2', 'Rachel Ann T. Sebastian', 'Software Developer', '+63 981 025 1322', 'Our Lady of Fatima University', 'Bachelor of Science in Biology', '2004',
        'University of Santo Tomas', '2010', 'St. Luke''s Medical Center', '2011', 'Confirm'),
        ('2024-CMC-2', 2, 'Mutya Carilla Reyes', 47, 'F', 'M', '1977-04-07', 'Makati City', 'Filipino',
        '5964 Gloria, Makati City', 'N/A', '+63 903 753 0040', 'mutya.cr07@gmail.com', '149-413-123-000', 'SSS', '04-8593851-3',
        '03-502596032-6', 'Mary C. Reyes', 'Accountant', '+63 931 875 6392', 'University of Santo Tomas', 'Bachelor of Science in Radiologic Technology', '1999',
        'University of Santo Tomas', '2003', 'University of Santo Tomas Hospital', '2005', 'On review'),
        ('2024-CMC-3', 3, 'Elena Arena Delos Santos', 35, 'F', 'W', '1989-09-21', 'Taguig City', 'Filipino',
        '24 Brgy Sta Ana, Taguig City', '(02) 2876-5413', '+63 926 610 8639', 'JCelenadelossantos@gmail.com', '149-832-432-000', 'SSS', '04-7654325-3',
        '32-162534893-9', 'Maria A. Delos Santos', 'Waitress', '+63 991 455 4160', 'University of the Philippines', 'Bachelor of Science in Nursing', '2010',
        'University of the Philippines', '2014', 'Manila General Hospital', '2015', 'Denied');
        
        
-- SELECT applicantID FROM applicant WHERE userID = 1;
-- SELECT * FROM postresidency WHERE applicantID = (SELECT applicantID FROM applicant WHERE userID = ?)

select * from applicant where userID = 1;

select applicantID from applicant;

select * from residency where applicantID = (select applicantID from applicant where userID = 1);

-- Insert data into the `residency` table
INSERT INTO residency (applicantID, departmentSpecialty, hospital, residencyDuration)
VALUES ('2024-CMC-1', 'Cardiology', 'St. Luke''s Medical Center', '4 years'),
       ('2024-CMC-2', 'Radiologic Technology', 'St. Clare''s Medical Center, Inc.', '1 year'),
       ('2024-CMC-3', 'Pediatrics', 'Rizal Medical Center', '3 years');

-- Insert data into the `postresidency` table
INSERT INTO postresidency (applicantID, postResSpecialty, postResInstitution, postResDuration) 
VALUES ('2024-CMC-1', 'Internal Medicine', 'Makati Medical Center', '2 years'),
       ('2024-CMC-2', 'MRI Technician', 'Makati Medical Center', '1 year'),
       ('2024-CMC-3', 'Ultrasound Technician', 'Makati Medical Center', '6 months');

  
  

  
-- More specific way of showing a record
SELECT * FROM applicant 
WHERE applicantID='2024-CMC-A-0002';

SELECT * FROM postresidency 
WHERE postResCode='TC-A-2' AND applicantID='2024-CMC-A-0002';

DROP TABLE IF EXISTS admins;
CREATE TABLE admins (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

-- To read the application record of the first user
SELECT *
FROM applicant as a, residency as r, postresidency as pr
WHERE a.applicantID = r.applicantID AND r.applicantID = pr.applicantID;

select * 
from applicant 
where userID = 1;


SELECT 
                a.applicantID, a.fullName, a.age, a.gender, a.civilStatus, a.birthDate, 
                a.birthPlace, a.citizenship, a.homeAddress, a.telephoneNo, a.cellphoneNo, 
                a.emailAddress, a.tinNo, a.insuranceIDType, a.insuranceIDNo, a.phicNo, 
                a.guardianName, a.guardianOccupation, a.guardianContactNo, a.collegeAttended, 
                a.degree, a.yearGraduated, a.medSchoolAttended, a.medSchoolGradYear, 
                a.internshipInstitution, a.internshipGradYear, r.residencyCode, 
                r.departmentSpecialty, r.hospital, r.residencyDuration, pr.postResCode, 
                pr.postResSpecialty, pr.postResInstitution, pr.postResDuration
            FROM 
                applicant as a, residency as r, postresidency as pr
			WHERE
				a.applicantID = r.applicantID AND r.applicantID = pr.applicantID;


SELECT * 
FROM applicant as a, residency as r, postresidency as pr 
WHERE a.applicantID = r.applicantID AND r.applicantID = pr.applicantID AND userID = 1

-- applicationStatus
-- Confirm - 1
-- Denied - 0
-- For review - "default"

