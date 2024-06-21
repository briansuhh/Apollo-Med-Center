<script>
    import Sidebar from '../../components/Sidebar.svelte';

</script>

<div class="mainbox">
    <div class="box">
        <Sidebar />
        <div class="form-container">
            <div class="search-header">
                <header>
                    <input type="text" placeholder="Search">
                    <button><i class="fa-solid fa-magnifying-glass buttonIcon"></i></button>
                    <h3 class="user"><i class="fa-solid fa-user-tie icon"></i>Brian Sebastian</h3>
                </header>
            </div>
            <form class="medical-form">
                <fieldset>
                    <legend>PERSONAL INFORMATION</legend>
                    <div class="form-group">
                        <label for="firstName">First Name</label>
                        <input type="text" id="firstName">
                        <label for="lastName">Last Name</label>
                        <input type="text" id="lastName">
                        <label for="middleName">Middle Name</label>
                        <input type="text" id="middleName">
                    </div>
                    <div class="form-group">
                        <label for="age">Age</label>
                        <input type="number" id="age">
                        <label for="birthdate">Birthdate</label>
                        <input type="date" id="birthdate">
                        <label for="birthplace">Birthplace</label>
                        <input type="text" id="birthplace">
                    </div>
                    <div class="form-group">
                        <label for="gender">Gender</label>
                        <input type="text" id="gender">
                        <label for="civilStatus">Civil Status</label>
                        <input type="text" id="civilStatus">
                        <label for="citizenship">Citizenship</label>
                        <input type="text" id="citizenship">
                    </div>
                    <div class="form-group">
                        <label for="homeAddress">Home Address</label>
                        <input type="text" id="homeAddress">
                        <label for="telephoneNo">Telephone No.</label>
                        <input type="tel" id="telephoneNo">
                        <label for="cellphoneNo">Cellphone No.</label>
                        <input type="tel" id="cellphoneNo">
                    </div>
                    <div class="form-group">
                        <label for="insuranceIDType">Insurance ID Type</label>
                        <input type="text" id="insuranceIDType">
                        <label for="email">Email Address</label>
                        <input type="email" id="email">
                        <label for="tinNo">TIN No.</label>
                        <input type="text" id="tinNo">
                    </div>
                    <div class="form-group">
                        <label for="phicNo">Phic No.</label>
                        <input type="text" id="phicNo">
                        <label for="insuranceIDNo">Insurance ID No.</label>
                        <input type="text" id="insuranceIDNo">
                    </div>
                    <div class="form-group">
                        <label for="guardianName">Guardian Name</label>
                        <input type="text" id="guardianName">
                        <label for="guardianContactNo">Guardian Contact No.</label>
                        <input type="tel" id="guardianContactNo">
                        <label for="guardianOccupation">Guardian Occupation</label>
                        <input type="text" id="guardianOccupation">
                    </div>
                </fieldset>
                <fieldset>
                    <legend>EDUCATIONAL BACKGROUND</legend>
                    <div class="form-group">
                        <label for="collegeAttended">College Attended</label>
                        <input type="text" id="collegeAttended">
                        <label for="degree">Degree</label>
                        <input type="text" id="degree">
                        <label for="yearGraduated">Year Graduated</label>
                        <input type="number" id="yearGraduated">
                    </div>
                    <div class="form-group">
                        <label for="medicalSchool">Medical School Attended</label>
                        <input type="text" id="medicalSchool">
                        <label for="medYearGraduated">Year Graduated</label>
                        <input type="number" id="medYearGraduated">
                    </div>
                    <div class="form-group">
                        <label for="internshipInstitution">Internship Institution</label>
                        <input type="text" id="internshipInstitution">
                        <label for="internYearGraduated">Year Graduated</label>
                        <input type="number" id="internYearGraduated">
                    </div>
                </fieldset>
                <fieldset>
                    <legend>RESIDENCY INFORMATION</legend>
                    <div class="form-group">
                        <label for="departmentSpecialty">Department Specialty</label>
                        <input type="text" id="departmentSpecialty">
                        <label for="hospital">Hospital</label>
                        <input type="text" id="hospital">
                        <label for="residencyDuration">Duration</label>
                        <input type="text" id="residencyDuration">
                    </div>
                </fieldset>
                <fieldset>
                    <legend>POST RESIDENCY INFORMATION</legend>
                    <div class="form-group">
                        <label for="postResidencySpecialty">Post Residency Specialty</label>
                        <input type="text" id="postResidencySpecialty">
                        <label for="postResidencyInstitution">Post Residency Institution</label>
                        <input type="text" id="postResidencyInstitution">
                        <label for="postResidencyDuration">Post Residency Duration</label>
                        <input type="text" id="postResidencyDuration">
                    </div>
                </fieldset>
                <div class="form-buttons">
                    
                    <button type="submit" id="submitButton">Submit</button>
                </div>
            </form>
        </div>
    </div>
</div>
    
    
    
<style>
    /* General Styles */
    .mainbox {
        font-family: Arial, sans-serif;
        background-color: #f0f0f0;
        margin: 0;
        display: flex;
        height: 100vh;
        overflow: hidden;
    }

    .box {
        display: flex;
        width: 100%;
    }

    .icon {
        font-size: 18px;
        color: #6e7ba2;
        margin-right: 15px; /* Space between icon and text */
    }

    .form-container {
        width: 80%;
        
    }

    .search-header header {
        display: flex;
        align-items: center;
        box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.1);
        background-color: white;
        position: sticky;
        top: 0;
    }

    .search-header .user {
        padding-right: 20px;
        font-family: "Poppins", sans-serif;
        font-weight: 600;
        font-style: normal;
        font-size: 18px;
        margin-left: auto;
    }

    .search-header .icon {
        padding-right: 5px;
        color: #333;
        font-size: 20px;
    }

    .search-header button {
        background-color: #13102d;
        border: none;
        border-radius: 0px 15px 15px 0px;
        padding: 9.5px 15px;
        margin: 0;
        margin-left: 5px;
    }

    .search-header .buttonIcon {
        color: #fff;
        font-size: 15px;
    }

    .search-header header input[type="text"] {
        width: 30%;
        padding: 5px;
        font-family: "Poppins", sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 15px;
        border: 2px solid #ccc;
        border-radius: 15px 0 0 15px;
        margin-left: 20px;
        background-color: #f3f5ff;
    }

    .medical-form {
        padding: 20px;
        overflow-y: auto;
        max-height: calc(100vh - 60px); /* Adjusts form height to be scrollable */
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