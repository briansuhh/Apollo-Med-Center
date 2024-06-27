<script>
    import Topbar from "./Topbar.svelte";
    import { onMount } from 'svelte';

    let applicant = {
        fullName: '',
        firstName: '',
        middleName: '',
        lastName: '',
        age: '',
        gender: '',
        civilStatus: '',
        birthDate: '',
        birthPlace: '',
        citizenship: '',
        homeAddress: '',
        telephoneNo: '',
        cellphoneNo: '',
        emailAddress: '',
        tinNo: '',
        insuranceIDType: '',
        insuranceIDNo: '',
        phicNo: '',
        guardianName: '',
        guardianOccupation: '',
        guardianContactNo: '',
        collegeAttended: '',
        degree: '',
        yearGraduated: '',
        medSchoolAttended: '',
        medSchoolGradYear: '',
        internshipInstitution: '',
        internshipGradYear: '',
        departmentSpecialty: '',
        hospital: '',
        residencyDuration: '',
        postResSpecialty: '',
        postResInstitution: '',
        postResDuration: ''
    };

    onMount(async () => {
        const response = await fetch('/api/readapplicantinfo', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        });

        if (response.ok) {
            const data = await response.json();
            applicant.fullName = data.user.fullName;      
            applicant.age = data.user.age;
            applicant.gender = data.user.gender;
            applicant.civilStatus = data.user.civilStatus;
            applicant.birthDate = data.user.birthDate;
            applicant.birthPlace = data.user.birthPlace;
            applicant.citizenship = data.user.citizenship;
            applicant.homeAddress = data.user.homeAddress;
            applicant.telephoneNo = data.user.telephoneNo;
            applicant.cellphoneNo = data.user.cellphoneNo;
            applicant.emailAddress = data.user.emailAddress;
            applicant.tinNo = data.user.tinNo;
            applicant.insuranceIDType = data.user.insuranceIDType;
            applicant.insuranceIDNo = data.user.insuranceIDNo;
            applicant.phicNo = data.user.phicNo;
            applicant.guardianName = data.user.guardianName;
            applicant.guardianOccupation = data.user.guardianOccupation;
            applicant.guardianContactNo = data.user.guardianContactNo;
            applicant.collegeAttended = data.user.collegeAttended;
            applicant.degree = data.user.degree;
            applicant.yearGraduated = data.user.yearGraduated;
            applicant.medSchoolAttended = data.user.medSchoolAttended;
            applicant.medSchoolGradYear = data.user.medSchoolGradYear;
            applicant.internshipInstitution = data.user.internshipInstitution;
            applicant.internshipGradYear = data.user.internshipGradYear;
            applicant.departmentSpecialty = data.user.departmentSpecialty;
            applicant.hospital = data.user.hospital;
            applicant.residencyDuration = data.user.residencyDuration;
            applicant.postResSpecialty = data.user.postResSpecialty;
            applicant.postResInstitution = data.user.postResInstitution;
            applicant.postResDuration = data.user.postResDuration;

            splitFullName();
        } else {
            console.error('Failed to retrieve user information');
        }
    });

    const splitFullName = () => {
        const [firstName, middleName, lastName] = applicant.fullName.split(' ');
        applicant.firstName = firstName;
        applicant.middleName = middleName;
        applicant.lastName = lastName;
    }
</script>

<div class="form-container">
    <Topbar />
    <form class="medical-form">
        <fieldset>
            <legend>PERSONAL INFORMATION</legend>
            <div class="form-group">
                <label for="firstName">First Name</label>
                <input type="text" id="firstName" bind:value={applicant.firstName}>
                <label for="middleName">Middle Name</label>
                <input type="text" id="middleName" bind:value={applicant.middleName}>
                <label for="lastName">Last Name</label>
                <input type="text" id="lastName" bind:value={applicant.lastName}>
            </div>
            <div class="form-group">
                <label for="age">Age</label>
                <input type="number" id="age" bind:value={applicant.age}>
                <label for="birthdate">Birthdate</label>
                <input type="date" id="birthdate" bind:value={applicant.birthDate}>
                <label for="birthplace">Birthplace</label>
                <input type="text" id="birthplace" bind:value={applicant.birthPlace}>
            </div>
            <div class="form-group">
                <label for="gender">Gender</label>
                <input type="text" id="gender" bind:value={applicant.gender}>
                <label for="civilStatus">Civil Status</label>
                <input type="text" id="civilStatus" bind:value={applicant.civilStatus}>
                <label for="citizenship">Citizenship</label>
                <input type="text" id="citizenship" bind:value={applicant.citizenship}>
            </div>
            <div class="form-group">
                <label for="homeAddress">Home Address</label>
                <input type="text" id="homeAddress" bind:value={applicant.homeAddress}>
                <label for="telephoneNo">Telephone No.</label>
                <input type="tel" id="telephoneNo" bind:value={applicant.telephoneNo}>
                <label for="cellphoneNo">Cellphone No.</label>
                <input type="tel" id="cellphoneNo" bind:value={applicant.cellphoneNo}>
            </div>
            <div class="form-group">
                <label for="insuranceIDType">Insurance ID Type</label>
                <input type="text" id="insuranceIDType" bind:value={applicant.insuranceIDType}>
                <label for="email">Email Address</label>
                <input type="email" id="email" bind:value={applicant.emailAddress}>
                <label for="tinNo">TIN No.</label>
                <input type="text" id="tinNo" bind:value={applicant.tinNo}>
            </div>
            <div class="form-group">
                <label for="phicNo">Phic No.</label>
                <input type="text" id="phicNo" bind:value={applicant.phicNo}>
                <label for="insuranceIDNo">Insurance ID No.</label>
                <input type="text" id="insuranceIDNo" bind:value={applicant.insuranceIDNo}>
            </div>
            <div class="form-group">
                <label for="guardianName">Guardian Name</label>
                <input type="text" id="guardianName" bind:value={applicant.guardianName}>
                <label for="guardianContactNo">Guardian Contact No.</label>
                <input type="tel" id="guardianContactNo" bind:value={applicant.guardianContactNo}>
                <label for="guardianOccupation">Guardian Occupation</label>
                <input type="text" id="guardianOccupation" bind:value={applicant.guardianOccupation}>
            </div>
        </fieldset>
        <fieldset>
            <legend>EDUCATIONAL BACKGROUND</legend>
            <div class="form-group">
                <label for="collegeAttended">College Attended</label>
                <input type="text" id="collegeAttended" bind:value={applicant.collegeAttended}>
                <label for="degree">Degree</label>
                <input type="text" id="degree" bind:value={applicant.degree}>
                <label for="yearGraduated">Year Graduated</label>
                <input type="number" id="yearGraduated" bind:value={applicant.yearGraduated}>
            </div>
            <div class="form-group">
                <label for="medicalSchool">Medical School Attended</label>
                <input type="text" id="medicalSchool" bind:value={applicant.medSchoolAttended}>
                <label for="medYearGraduated">Year Graduated</label>
                <input type="number" id="medYearGraduated" bind:value={applicant.medSchoolGradYear}>
            </div>
            <div class="form-group">
                <label for="internshipInstitution">Internship Institution</label>
                <input type="text" id="internshipInstitution" bind:value={applicant.internshipInstitution}>
                <label for="internYearGraduated">Year Graduated</label>
                <input type="number" id="internYearGraduated" bind:value={applicant.internshipGradYear}>
            </div>
        </fieldset>
        <fieldset>
            <legend>RESIDENCY INFORMATION</legend>
            <div class="form-group">
                <label for="departmentSpecialty">Department Specialty</label>
                <input type="text" id="departmentSpecialty" bind:value={applicant.departmentSpecialty}>
                <label for="hospital">Hospital</label>
                <input type="text" id="hospital" bind:value={applicant.hospital}>
                <label for="residencyDuration">Duration</label>
                <input type="text" id="residencyDuration" bind:value={applicant.residencyDuration}>
            </div>
        </fieldset>
        <fieldset>
            <legend>POST RESIDENCY INFORMATION</legend>
            <div class="form-group">
                <label for="postResidencySpecialty">Post Residency Specialty</label>
                <input type="text" id="postResidencySpecialty" bind:value={applicant.postResSpecialty}>
                <label for="postResidencyInstitution">Post Residency Institution</label>
                <input type="text" id="postResidencyInstitution" bind:value={applicant.postResInstitution}>
                <label for="postResidencyDuration">Post Residency Duration</label>
                <input type="text" id="postResidencyDuration" bind:value={applicant.postResDuration}>
            </div>
        </fieldset>
        <div class="form-buttons">
            
            <button type="submit" id="submitButton">Submit</button>
        </div>
    </form>
</div>

<style>
    /* css for the application form */
    .form-container {
        width: 80%;

    }

    .medical-form {
        padding: 20px;
        overflow-y: auto;
        max-height: calc(100vh - 70px); /* Adjusts form height to be scrollable */
    }

    .medical-form fieldset {
        border: 1px solid #ddd;
        padding: 15px;
        margin-bottom: 20px;
        border-radius: 5px;
    }

    .medical-form legend {
        font-size: 16px;
        font-weight: bold;
        color: #2d3a8a;
        margin-left: 15px;
        font-family: "Poppins", sans-serif;
        font-weight: 700;
        font-style: normal;
    }

    .form-group {
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
        margin-bottom: 15px;
    }

    .form-group label {
        flex: 1 1 30%;
        font-weight: bold;
        color: #2d3a8a;
        font-family: "Poppins", sans-serif;
        font-weight: 400;
        font-style: normal;
    }

    .form-group input {
        flex: 1 1 65%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-family: "Poppins", sans-serif;
        font-weight: 400;
        font-style: normal;
    }

    .form-group input[type="number"],
    .form-group input[type="date"] {
        width: 100%;
    }

    input[type="text"],
    input[type="email"],
    input[type="tel"],
    input[type="number"],
    input[type="date"] {
        box-sizing: border-box;
    }

    input:focus {
        border-color: #2d3a8a;
        outline: none;
    }

    /* Scrollable Form */
    .form-container {
        max-height: 100%;
        overflow-y: auto;
    }

    fieldset {
        margin: 0 0 15px;
        padding: 10px;
    }

    fieldset legend {
        padding: 0 10px;
    }

    .form-group {
        margin: 0 0 10px;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
    }

    .form-group label {
        flex: 0 0 30%;
        font-weight: bold;
    }

    .form-group input {
        flex: 1 1 65%;
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        margin-right: 15px;
    }

    .form-group input:focus {
        border-color: #2d3a8a;
        outline: none;
    }

    .medical-form fieldset {
        border: 1px solid #ccc;
        padding: 15px;
        border-radius: 4px;
        margin-bottom: 20px;
    }

    .medical-form legend {
        color: #2d3a8a;
        font-weight: bold;
        padding: 0 10px;
        font-size: 16px;
        margin-bottom: 10px;
    }

    .medical-form .form-group {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }

    .medical-form .form-group label {
        flex: 0 0 30%;
        font-size: 14px;
        color: #323B5D;
    }

    .medical-form .form-group input {
        flex: 1 1 65%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }

    .medical-form .form-group input[type="text"],
    .medical-form .form-group input[type="email"],
    .medical-form .form-group input[type="tel"],
    .medical-form .form-group input[type="number"],
    .medical-form .form-group input[type="date"] {
        width: 100%;
    }

    .medical-form .form-group input:focus {
        border-color: #2d3a8a;
        outline: none;
    }

    /* Scrollbar Styling */
    .form-container::-webkit-scrollbar {
        width: 12px;
    }

    .form-container::-webkit-scrollbar-track {
        background: #f0f0f0;
    }

    .form-container::-webkit-scrollbar-thumb {
        background-color: #2d3a8a;
        border-radius: 20px;
        border: 3px solid #f0f0f0;
    }
    .form-buttons {
        text-align: center;
        margin-top: 20px;
    }

    .form-buttons button {
        margin-right: 50px;
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
        border: none;
        background-color: #333;
        color: white;
        border-radius: 5px;
        transition: background-color 0.3s;
        font-family: "Poppins", sans-serif;
        font-weight: 400;
        font-style: normal;
        float: right;

    }

    .form-buttons button:hover {
        background-color: #0056b3;
    }

</style>