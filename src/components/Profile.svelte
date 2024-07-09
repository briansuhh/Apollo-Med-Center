<script>
    import Topbar from "./Topbar.svelte";
    import { onMount } from 'svelte';
    import { profileCompletion, checkProfileCompletion } from '../store/profileStore.js';

    let profileData = {
        firstName: '',
        lastName: '',
        middleName: '',
        emailAddress: '',
        phoneNumber: '',
        telephoneNumber: '',
        homeAddress: ''
    };

    let isProfileComplete;

    onMount(async () => {
        try {
            const response = await fetch('/api/readapplicants', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Failed to retrieve user information');
            }

            const data = await response.json();
            console.log(data);

            profileData.fullName = data.user.fullName;
            splitFullName();
            profileData.homeAddress = data.user.homeAddress;
            profileData.telephoneNumber = data.user.telephoneNo;
            profileData.phoneNumber = data.user.cellphoneNo;
            profileData.emailAddress = data.user.emailAddress;

            checkProfileCompletion(profileData);

            isProfileComplete = $profileCompletion;
            console.log('Is profile complete?', isProfileComplete);

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    });

    const splitFullName = () => {
        const [firstName, middleName, lastName] = profileData.fullName.split(' ');
        profileData.firstName = firstName;
        profileData.middleName = middleName;
        profileData.lastName = lastName;
    };

    let fullName = '';

    onMount(async () => {
        const response = await fetch('/api/readlogin', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        });

        if (response.ok) {
            const data = await response.json();
            fullName = data.user.name;
        } else {
            console.error('Failed to retrieve user information');
        }
    });
</script>

<main class="main-content">
<Topbar />

<div class="profile-section">
    <h1>Profile</h1>
    <div class="profile-header">
        <div class="profile-picture">
            <img src="images/account.png" alt="Profile Pic">
        </div>
        <div class="profile-name">
            <h2>{fullName}</h2>
            <a href="/">Change Profile</a>
            {#if isProfileComplete}
            <p class= "Complete">Profile details is up to date</p>
            {:else}
            <p class= "Incomplete">Update Your Application form to fill your profile</p>
            {/if}
        </div>
    </div>
    <form>
        <div class="form-group">
            <label for="apearance">Appearance</label>
            <hr>
            <div class="input-group two-column">
                <div class="column">
                    <label for="first-name">First Name</label>

                    <input id="first-name" type="text" placeholder="First Name" bind:value={profileData.firstName}  readonly>
                </div>
                <div class="column">
                    <label for="last-name">Last Name</label>
                    <input id="last-name" type="text" placeholder="Last Name" bind:value={profileData.lastName}  readonly>
                </div>
                <div class="column">
                    <label for="middle-name">Middle Name</label>
                    <input id="middle-name" type="text" placeholder="Middle Name" bind:value={profileData.middleName}  readonly>
                </div>
            </div>
        </div>
        <div class="form-group">
            <label for="contact">Contacts</label>
            <hr>
            <div class="input-group two-column">
                <div class="column">
                    <label for="email">Email Address</label>
                    <input id="email" type="email" placeholder="Email Address" bind:value={profileData.emailAddress}  readonly>
                </div>
                <div class="column">
                    <label for="phone-number">Phone Number</label>
                    <input id="phone-number" type="text" placeholder="Phone Number" bind:value={profileData.phoneNumber}  readonly>
                </div>
                <div class="column">
                    <label for="telephone-number">Telephone Number</label>
                    <input id="telephone-number" type="text" placeholder="Telephone Number" bind:value={profileData.telephoneNumber}  readonly>
                </div>
            <div class="column">
            <label for="home-address">Home Address</label>

            <input id="home-address" type="text" placeholder="Home Address" bind:value={profileData.homeAddress}  readonly>

        </div>
    </form>
</div>

</main>

<style>

    h1 {
        font-size: 36px;
        font-family: "Poppins", sans-serif;
        font-weight: 800;
        font-style: normal;
    }

    .Complete {
        color: teal; /* Custom color for "Accomplished" */
        font-family: "Poppins", sans-serif;
        font-weight: 500;
        font-style: normal;
    }

    .Incomplete {
        color: rgb(255, 68, 0);
        font-family: "Poppins", sans-serif;
        font-weight: 500;
        font-style: normal;
    }

    .main-content {
        flex: 1;
        overflow-y: auto;
    }

    input:read-only {
        border-width: 3;
    }

    input:focus {
    outline: none;
    }


    .profile-section {
        padding: 20px;
        margin-left: 10px;
        margin-right: 30px;
    }

    .profile-header {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
    }
    .profile-picture {
        width: 100px; /* Adjust width as needed */
        height: 100px; /* Adjust height as needed */
        border-radius: 50%;
        overflow: hidden;
        margin-right: 20px;
    }

    .profile-picture img {
        width: 100%;
        height: 100%;
        object-fit: cover; /* Maintain aspect ratio; crop if necessary */
    }

    .profile-name h2 {
        margin: 0;
    }

    .profile-name a {
        text-decoration: none;
        color: #007bff;
    }

    form .form-group {
        margin-bottom: 20px;
    }

    form .form-group label {
        display: block;
        font-weight: bold;
        margin-bottom: 5px;
    }

    form .form-group hr {
        border: 1px solid #ccc;
        margin-bottom: 15px;
    }

    form .input-group {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
    }

    form .input-group.two-column .column {
        flex: 1;
        min-width: calc(50% - 10px);
    }

    form .input-group .column {
        display: flex;
        flex-direction: column;
    }

    .column label {
        font-family: "Poppins", sans-serif;
        font-weight: 700;
        font-style: normal;
    }

    form .input-group input {
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        margin-bottom: 10px;
        margin-right: 10px;
        font-family: "Poppins", sans-serif;
        font-weight: 300;
        font-style: normal;
    }
</style>