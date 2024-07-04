<script>
    import { onMount } from 'svelte';

    let applicant = {
        collegeAttended: '',
        degree: '',
        yearGraduated: '',
        medSchoolAttended: '',
        medSchoolGradYear: '',
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
            applicant.collegeAttended = data.user.collegeAttended;
            applicant.degree = data.user.degree;
            applicant.yearGraduated = data.user.yearGraduated;
            applicant.medSchoolAttended = data.user.medSchoolAttended;
            applicant.medSchoolGradYear = data.user.medSchoolGradYear;
            applicant.internshipInstitution = data.user.internshipInstitution;
            applicant.internshipGradYear = data.user.internshipGradYear;
        } else {
            console.error('Failed to retrieve user information');
        }
    });


</script>

<div class= "formContainer">
    <form>
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
    </form>
</div>

<style>
    .formContainer {
        margin-left: 40px;
        margin-right: 40px;
    }

    .formContainer fieldset {
        border-radius: 15px;
        margin-top: 20px;
        border-width: 1.6px;
        background-color: white;
    }

    .formContainer legend {
        text-align: center;
        padding: 0 15px;
        font-size: 22px;
        font-weight: bold;
        color: #333;
        margin-left: 15px;
        font-family: "Poppins", sans-serif;
        font-weight: 700;
        font-style: normal;
    }

    .form-group {
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
        margin: 20px 20px 20px 20px;
    }

    .form-group input {
        flex: 1 1 20%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-family: "Poppins", sans-serif;
        font-weight: 400;
        font-style: normal;
    }

    .form-group label {
        flex: 1 1 10%;
        font-family: "Poppins", sans-serif;
        font-weight: 500;
        font-style: normal;
    }


</style>