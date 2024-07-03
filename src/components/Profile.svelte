<script>
    import Topbar from "./Topbar.svelte";
    import { onMount } from 'svelte';

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
            <img src="images/logo.png" alt="Profile Pic">
        </div>
        <div class="profile-name">
            <h2>{fullName}</h2>
            <a href="/">Change Profile</a>
        </div>
    </div>
    <form>
        <div class="form-group">
            <label for="apearance">Appearance</label>
            <hr>
            <div class="input-group two-column">
                <div class="column">
                    <label for="first-name">First Name</label>
                    <input id="first-name" type="text" placeholder="First Name">
                </div>
                <div class="column">
                    <label for="last-name">Last Name</label>
                    <input id="last-name" type="text" placeholder="Last Name">
                </div>
                <div class="column">
                    <label for="middle-name">Middle Name</label>
                    <input id="middle-name" type="text" placeholder="Middle Name">
                </div>
            </div>
        </div>
        <div class="form-group">
            <label for="contact">Contacts</label>
            <hr>
            <div class="input-group two-column">
                <div class="column">
                    <label for="email">Email Address</label>
                    <input id="email" type="email" placeholder="Email Address">
                </div>
                <div class="column">
                    <label for="phone-number">Phone Number</label>
                    <input id="phone-number" type="text" placeholder="Phone Number">
                </div>
                <div class="column">
                    <label for="telephone-number">Telephone Number</label>
                    <input id="telephone-number" type="text" placeholder="Telephone Number">
                </div>
            <div class="column">
            <label for="home-address">Home Address</label>
            <input id="home-address" type="text" placeholder="Home Address">
        </div>
        <div class="form-actions">
            <button type="button" class="cancel">Cancel</button>
            <button type="submit" class="update">Update</button>
        </div>
    </form>
</div>

</main>

<style>

    .main-content {
        flex: 1;
        overflow-y: auto;
    }



    .profile-section {
        padding: 20px;
    }

    .profile-header {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
    }

    .profile-picture img {
        border-radius: 50%;
        height: 80px;
        width: 80px;
        margin-right: 20px;
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

    .form-actions {
        display: flex;
        justify-content: flex-end;
    }

    .form-actions button {
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        margin-left: 10px;
    }

    .form-actions .cancel {
        background-color: #ccc;
        color: #fff;
    }

    .form-actions .update {
        background-color: #007bff;
        color: #fff;
    }

</style>