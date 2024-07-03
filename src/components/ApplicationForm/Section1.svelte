<script>
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
            splitFullName();
            applicant.age = data.user.age;
            applicant.gender = data.user.gender;
            applicant.civilStatus = data.user.civilStatus;
            applicant.birthDate = formatDate(data.user.birthDate);
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

    const formatDate = (dateParam) => {
        return dateParam.split('T')[0];
    }

    // chamge the full name when first name, middle name, or last name changes
    $: applicant.fullName = `${applicant.firstName} ${applicant.middleName} ${applicant.lastName}`.trim();

</script>

<div class= "formContainer">
    <form>
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
                <select id="options" name="options" bind:value={applicant.gender}>
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                </select>
                <label for="civilStatus">Civil Status</label>
                <select id="options2" name="options2" bind:value={applicant.civilStatus}>
                    <option value="S">Single</option>
                    <option value="M">Married</option>\
                    <option value="W">Widowed</option>
                </select>
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

    .form-group select {
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