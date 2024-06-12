<script>
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';

    
    let applicant = {
        fullName: 'John Doe',
        age: 30,
        gender: 'M',
        civilStatus: 'S',
        birthDate: '1994-05-15',
        birthPlace: 'Cityville',
        citizenship: 'American',
        homeAddress: '123 Main Street',
        telephoneNo: '123-456-7890',
        cellphoneNo: '987-654-3210',
        emailAddress: 'john.doe@example.com',
        tinNo: '123456789',
        insuranceIDType: 'SSS',
        insuranceIDNo: 'ABC123',
        phicNo: 'PHIC987',
        guardianName: 'Jane Doe',
        guardianOccupation: 'Teacher',
        guardianContactNo: '555-555-5555',
        collegeAttended: 'University of City',
        degree: 'Bachelor of Science in Engineering',
        yearGraduated: 2016,
        medSchoolAttended: 'City Medical College',
        medSchoolGradYear: 2020,
        internshipInstitution: 'City General Hospital',
        internshipGradYear: 2021,
        departmentSpecialty: 'Internal Medicine',
        hospital: 'City General Hospital',
        residencyDuration: '3 years',
        postResSpecialty: 'Cardiology',
        postResInstitution: 'City Heart Center',
        postResDuration: '3 years'
    };


    // let applicant = {
    //     fullName: '',
    //     age: '',
    //     gender: '',
    //     civilStatus: '',
    //     birthDate: '',
    //     birthPlace: '',
    //     citizenship: '',
    //     homeAddress: '',
    //     telephoneNo: '',
    //     cellphoneNo: '',
    //     emailAddress: '',
    //     tinNo: '',
    //     insuranceIDType: '',
    //     insuranceIDNo: '',
    //     phicNo: '',
    //     guardianName: '',
    //     guardianOccupation: '',
    //     guardianContactNo: '',
    //     collegeAttended: '',
    //     degree: '',
    //     yearGraduated: '',
    //     medSchoolAttended: '',
    //     medSchoolGradYear: '',
    //     internshipInstitution: '',
    //     internshipGradYear: '',
    //     departmentSpecialty: '',
    //     hospital: '',
    //     residencyDuration: '',
    //     postResSpecialty: '',
    //     postResInstitution: '',
    //     postResDuration: ''
    // }; 

    async function registerApplicant() {
        try {
            const response = await fetch('/api/registrationform', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(applicant)
            });

            if (response.ok) {
                const result = await response.json();
                alert('Registration successful');
                goto('/registrationform'); 
            } else {
                const error = await response.json();
                alert(`Registration failed: ${error.message}`);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred during registration');
        }
    }
</script>

<svelte:head>
    <link rel="stylesheet" href="/css/color.css">
</svelte:head>

<div class="mainContainer">
    <div class="container">
        <h2>Register Applicant</h2>
        <form on:submit|preventDefault={registerApplicant}>
            <div class="form-group">
                <label for="fullName">Full Name</label>
                <input type="text" id="fullName" bind:value={applicant.fullName} required>
            </div>
            <div class="form-group">
                <label for="age">Age</label>
                <input type="number" id="age" bind:value={applicant.age} required>
            </div>
            <div class="form-group">
                <label for="gender">Gender</label>
                <input type="text" id="gender" bind:value={applicant.gender} required>
            </div>
            <div class="form-group">
                <label for="civilStatus">Civil Status</label>
                <input type="text" id="civilStatus" bind:value={applicant.civilStatus} required>
            </div>
            <div class="form-group">
                <label for="birthDate">Birth Date</label>
                <input type="date" id="birthDate" bind:value={applicant.birthDate} required>
            </div>
            <div class="form-group">
                <label for="birthPlace">Birth Place</label>
                <input type="text" id="birthPlace" bind:value={applicant.birthPlace} required>
            </div>
            <div class="form-group">
                <label for="citizenship">Citizenship</label>
                <input type="text" id="citizenship" bind:value={applicant.citizenship} required>
            </div>
            <div class="form-group">
                <label for="homeAddress">Home Address</label>
                <input type="text" id="homeAddress" bind:value={applicant.homeAddress} required>
            </div>
            <div class="form-group">
                <label for="telephoneNo">Telephone No.</label>
                <input type="text" id="telephoneNo" bind:value={applicant.telephoneNo} required>
            </div>
            <div class="form-group">
                <label for="cellphoneNo">Cellphone No.</label>
                <input type="text" id="cellphoneNo" bind:value={applicant.cellphoneNo} required>
            </div>
            <div class="form-group">
                <label for="emailAddress">Email Address</label>
                <input type="email" id="emailAddress" bind:value={applicant.emailAddress} required>
            </div>
            <div class="form-group">
                <label for="tinNo">TIN No.</label>
                <input type="text" id="tinNo" bind:value={applicant.tinNo} required>
            </div>
            <div class="form-group">
                <label for="insuranceIDType">Insurance ID Type</label>
                <input type="text" id="insuranceIDType" bind:value={applicant.insuranceIDType} required>
            </div>
            <div class="form-group">
                <label for="insuranceIDNo">Insurance ID No.</label>
                <input type="text" id="insuranceIDNo" bind:value={applicant.insuranceIDNo} required>
            </div>
            <div class="form-group">
                <label for="phicNo">PHIC No.</label>
                <input type="text" id="phicNo" bind:value={applicant.phicNo} required>
            </div>
            <div class="form-group">
                <label for="guardianName">Guardian Name</label>
                <input type="text" id="guardianName" bind:value={applicant.guardianName}>
            </div>
            <div class="form-group">
                <label for="guardianOccupation">Guardian Occupation</label>
                <input type="text" id="guardianOccupation" bind:value={applicant.guardianOccupation}>
            </div>
            <div class="form-group">
                <label for="guardianContactNo">Guardian Contact No.</label>
                <input type="text" id="guardianContactNo" bind:value={applicant.guardianContactNo}>
            </div>
            <div class="form-group">
                <label for="collegeAttended">College Attended</label>
                <input type="text" id="collegeAttended" bind:value={applicant.collegeAttended} required>
            </div>
            <div class="form-group">
                <label for="degree">Degree</label>
                <input type="text" id="degree" bind:value={applicant.degree} required>
            </div>
            <div class="form-group">
                <label for="yearGraduated">Year Graduated</label>
                <input type="number" id="yearGraduated" bind:value={applicant.yearGraduated} required>
            </div>
            <div class="form-group">
                <label for="medSchoolAttended">Medical School Attended</label>
                <input type="text" id="medSchoolAttended" bind:value={applicant.medSchoolAttended} required>
            </div>
            <div class="form-group">
                <label for="medSchoolGradYear">Medical School Graduation Year</label>
                <input type="number" id="medSchoolGradYear" bind:value={applicant.medSchoolGradYear} required>
            </div>
            <div class="form-group">
                <label for="internshipInstitution">Internship Institution</label>
                <input type="text" id="internshipInstitution" bind:value={applicant.internshipInstitution} required>
            </div>
            <div class="form-group">
                <label for="internshipGradYear">Internship Graduation Year</label>
                <input type="number" id="internshipGradYear" bind:value={applicant.internshipGradYear} required>
            </div>
            <div class="form-group">
                <label for="departmentSpecialty">Department Specialty</label>
                <input type="text" id="departmentSpecialty" bind:value={applicant.departmentSpecialty} required>
            </div>
            <div class="form-group">
                <label for="hospital">Hospital</label>
                <input type="text" id="hospital" bind:value={applicant.hospital} required>
            </div>
            <div class="form-group">
                <label for="residencyDuration">Residency Duration</label>
                <input type="text" id="residencyDuration" bind:value={applicant.residencyDuration} required>
            </div>
            <div class="form-group">
                <label for="postResSpecialty">Post-Residency Specialty</label>
                <input type="text" id="postResSpecialty" bind:value={applicant.postResSpecialty} required>
            </div>
            <div class="form-group">
                <label for="postResInstitution">Post-Residency Institution</label>
                <input type="text" id="postResInstitution" bind:value={applicant.postResInstitution} required>
            </div>
            <div class="form-group">
                <label for="postResDuration">Post-Residency Duration</label>
                <input type="text" id="postResDuration" bind:value={applicant.postResDuration} required>
            </div>
            <button type="submit" class="btn btn-primary">Register</button>
        </form>
    </div>
</div>

<style>
    .mainContainer {
        height: calc(100vh - 76px);
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #323B5D;
        background-image: linear-gradient(180deg, white 10%, #2FAEC0 100%);
        background-size: cover;
        font-family: "Poppins", sans-serif;
        overflow-y: hidden;
        border-radius: 8px;
    }
    .container {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        width: 100%;
        max-height: 80vh;
        overflow-y: auto;
    }

    /* Style for the scrollbar */
    .container::-webkit-scrollbar {
        width: 12px;
    }

    .container::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 10px;
    }

    .container::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 10px;
    }

    .container::-webkit-scrollbar-thumb:hover {
        background: #555;
    }

    .form-group {
        margin-bottom: 15px;
    }
    label {
        display: block;
        margin-bottom: 5px;
    }
    input {
        width: 100%;
        padding: 8px;
        box-sizing: border-box;
    }
    button {
        width: 100%;
        padding: 10px;
        background: #2FAEC0;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
    button:hover {
        background: #28a1b0;
    }
</style>
