import pool from '$lib/db';

export async function POST({ request }) {
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

    try {
        // Start a transaction
        await connection.beginTransaction();

        // Insert data into the applicant table
        const [applicantResults] = await connection.execute(
            `INSERT INTO applicant (
                fullName, age, gender, civilStatus, birthDate, birthPlace, citizenship, homeAddress, telephoneNo, cellphoneNo, emailAddress, tinNo, insuranceIDType, insuranceIDNo, phicNo, guardianName, guardianOccupation, guardianContactNo, collegeAttended, degree, yearGraduated, medSchoolAttended, medSchoolGradYear, internshipInstitution, internshipGradYear
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
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
                internshipGradYear
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
                departmentSpecialty,
                hospital,
                residencyDuration
            ]
        );

        // Insert data into the postresidency table
        await connection.execute(
            `INSERT INTO postresidency (applicantID, postResSpecialty, postResInstitution, postResDuration)
            VALUES (?, ?, ?, ?)`,
            [
                applicantID,
                postResSpecialty,
                postResInstitution,
                postResDuration
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