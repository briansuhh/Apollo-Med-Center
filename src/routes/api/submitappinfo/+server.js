import { verifyToken } from "$lib/auth";
import pool from "$lib/db";

export async function POST({ request }) {
    const token = request.headers.get('cookie')?.split('token=')[1];

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

    if (!token) {
        return new Response(JSON.stringify({ error: 'No token provided' }), { status: 401 });
    }

    const connection = await pool.getConnection();
    try {
        const decoded = verifyToken(token);
        const userId = decoded.user.id;

        await connection.beginTransaction();

        const [existingApplicant] = await connection.execute(
            `SELECT applicantID FROM applicant WHERE userID = ?`,
            [userId]
        );

        let applicantID;

        // if existing: update applicant table, else insert new record
        if (existingApplicant.length > 0) {
            applicantID = existingApplicant[0].applicantID;
            await connection.execute(
                `UPDATE applicant SET
                    fullName = ?, age = ?, gender = ?, civilStatus = ?, birthDate = ?, birthPlace = ?, citizenship = ?, homeAddress = ?, telephoneNo = ?, cellphoneNo = ?, emailAddress = ?, tinNo = ?, insuranceIDType = ?, insuranceIDNo = ?, phicNo = ?, guardianName = ?, guardianOccupation = ?, guardianContactNo = ?, collegeAttended = ?, degree = ?, yearGraduated = ?, medSchoolAttended = ?, medSchoolGradYear = ?, internshipInstitution = ?, internshipGradYear = ?
                WHERE applicantID = ?`,
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
                    internshipGradYear,
                    applicantID
                ]
            );
        } else {
            const [applicantResults] = await connection.execute(
                `INSERT INTO applicant (
                    userID, fullName, age, gender, civilStatus, birthDate, birthPlace, citizenship, homeAddress, telephoneNo, cellphoneNo, emailAddress, tinNo, insuranceIDType, insuranceIDNo, phicNo, guardianName, guardianOccupation, guardianContactNo, collegeAttended, degree, yearGraduated, medSchoolAttended, medSchoolGradYear, internshipInstitution, internshipGradYear
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                [
                    userId,
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

            // get the applicantID of the newly inserted record
            const [newApplicant] = await connection.execute(
                `SELECT applicantID FROM applicant WHERE emailAddress = ?`,
                [emailAddress]
            );
            applicantID = newApplicant[0].applicantID;
        }

        const [existingResidency] = await connection.execute(
            `SELECT residencyCode FROM residency WHERE applicantID = ?`,
            [applicantID]
        );
        
        // if existing: update residency table, else insert new record
        if (existingResidency.length > 0) {
            await connection.execute(
                `UPDATE residency SET
                    departmentSpecialty = ?, hospital = ?, residencyDuration = ?
                WHERE residencyCode = ?`,
                [
                    departmentSpecialty,
                    hospital,
                    residencyDuration,
                    existingResidency[0].residencyCode
                ]
            );
        } else {
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
        }

        const [existingPostResidency] = await connection.execute(
            `SELECT postResCode FROM postresidency WHERE applicantID = ?`,
            [applicantID]
        );

        // if existing: update postresidency table, else insert new record
        if (existingPostResidency.length > 0) {
            await connection.execute(
                `UPDATE postresidency SET
                    postResSpecialty = ?, postResInstitution = ?, postResDuration = ?
                WHERE postResCode = ?`,
                [
                    postResSpecialty,
                    postResInstitution,
                    postResDuration,
                    existingPostResidency[0].postResCode
                ]
            );
        } else {
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
        }

        await connection.commit();
        connection.release();
        return new Response(JSON.stringify({ message: 'Applicant registered successfully' }), { status: 201 });
        
    } catch (error) {
        await connection.rollback();
        connection.release();
        console.error(error);
        return new Response(JSON.stringify({ error: 'Failed to register applicant' }), { status: 500 });
    }
}
