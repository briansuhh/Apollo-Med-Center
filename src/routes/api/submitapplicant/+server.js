import pool from '$lib/db';
import { verifyToken } from "$lib/auth";

export async function POST({ request }) {
    const token = request.headers.get('cookie')?.split('token=')[1];
    if (!token) {
        return new Response(JSON.stringify({ error: 'No token provided' }), { status: 401 });
    }

    const {
        fullName,
        age,
        gender,
        civilStatus,
        birthDate,
        birthPlace,
        citizenship,
        homeAddress,
        telephoneNo,
        cellphoneNo,
        emailAddress,
        tinNo,
        insuranceIDType,
        insuranceIDNo,
        phicNo,
        guardianName,
        guardianOccupation,
        guardianContactNo,
        collegeAttended,
        degree,
        yearGraduated,
        medSchoolAttended,
        medSchoolGradYear,
        internshipInstitution,
        internshipGradYear,
        departmentSpecialty,
        hospital,
        residencyDuration,
        postResSpecialty,
        postResInstitution,
        postResDuration
    } = await request.json();

    const connection = await pool.getConnection();

    // Function to replace undefined with null
    const toSQLValue = (value) => (value === undefined ? null : value);

    try {
        // Start a transaction
        const decoded = verifyToken(token);
        const userId = decoded.user.id;
        
        await connection.beginTransaction();

        // Insert data into the applicant table
        const [applicantResults] = await connection.execute(
            `INSERT INTO applicant (
                userID, fullName, age, gender, civilStatus, birthDate, birthPlace, citizenship, homeAddress, telephoneNo, cellphoneNo, emailAddress, tinNo, insuranceIDType, insuranceIDNo, phicNo, guardianName, guardianOccupation, guardianContactNo, collegeAttended, degree, yearGraduated, medSchoolAttended, medSchoolGradYear, internshipInstitution, internshipGradYear
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                userId,
                toSQLValue(fullName),
                toSQLValue(age),
                toSQLValue(gender),
                toSQLValue(civilStatus),
                toSQLValue(birthDate),
                toSQLValue(birthPlace),
                toSQLValue(citizenship),
                toSQLValue(homeAddress),
                toSQLValue(telephoneNo),
                toSQLValue(cellphoneNo),
                toSQLValue(emailAddress),
                toSQLValue(tinNo),
                toSQLValue(insuranceIDType),
                toSQLValue(insuranceIDNo),
                toSQLValue(phicNo),
                toSQLValue(guardianName),
                toSQLValue(guardianOccupation),
                toSQLValue(guardianContactNo),
                toSQLValue(collegeAttended),
                toSQLValue(degree),
                toSQLValue(yearGraduated),
                toSQLValue(medSchoolAttended),
                toSQLValue(medSchoolGradYear),
                toSQLValue(internshipInstitution),
                toSQLValue(internshipGradYear)
            ]
        );

        // Retrieve the applicantID generated by the trigger
        const [newApplicant] = await connection.execute(
            `SELECT applicantID FROM applicant WHERE emailAddress = ?`,
            [emailAddress]
        );
        const applicantID = newApplicant[0].applicantID;

        // Insert data into the residency table
        await connection.execute(
            `INSERT INTO residency (applicantID, departmentSpecialty, hospital, residencyDuration)
            VALUES (?, ?, ?, ?)`,
            [
                applicantID,
                "Internal Medicine",
                "St. Luke's Medical Center",
                "3 years"
            ]
        );

        // Insert data into the postresidency table
        await connection.execute(
            `INSERT INTO postresidency (applicantID, postResSpecialty, postResInstitution, postResDuration)
            VALUES (?, ?, ?, ?)`,
            [
                applicantID,
                "Cardiology",
                "Philippine Heart Center",
                "2 years"
            ]
        );

        // Commit the transaction
        await connection.commit();

        connection.release();

        return new Response(JSON.stringify({ message: 'Applicant registered successfully' }), { status: 201 });
    } catch (error) {
        // Rollback the transaction if an error occurs
        await connection.rollback();

        connection.release();
        console.error(error);
        return new Response(JSON.stringify({ error: 'Failed to register applicant' }), { status: 500 });
    }
}