<script>
    import { onMount } from 'svelte';

    let applicantPost = {
        postResSpecialty: '',
        postResInstitution: '',
        postResDuration: '',
        postDepartmentSpecialties: []
    };

    let nextId = 0;

    const addPostDepartmentSpecialty = () => {
        applicantPost.postDepartmentSpecialties = [
            ...applicantPost.postDepartmentSpecialties,
            { id: nextId++, postResSpecialty: '', postResInstitution: '', postResDuration: '' }
        ];
        saveApplicantData();
    };

    const deletePostDepartmentSpecialty = (index) => {
        applicantPost.postDepartmentSpecialties = applicantPost.postDepartmentSpecialties.filter((_, i) => i !== index);
        saveApplicantData();
    };

    const saveApplicantData = () => {
        localStorage.setItem('applicantPostData', JSON.stringify(applicantPost));
    };

    onMount(async () => {
        const storedData = localStorage.getItem('applicantPostData');
        if (storedData) {
            applicantPost = JSON.parse(storedData);
        }
    });

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
            applicantPost.postResSpecialty = data.user.postResSpecialty;
            applicantPost.postResInstitution = data.user.postResInstitution;
            applicantPost.postResDuration = data.user.postResDuration;
        } else {
            console.error('Failed to retrieve user information');
        }
    });
    
</script>

<div class= "formContainer">
    <form>
        <fieldset>
            <legend>POST RESIDENCY INFORMATION</legend>
            <div class="formLabel">
                <button type="button" on:click={addPostDepartmentSpecialty}>+ Add Specialty</button>
            </div>

            <div class="form-group">
                <label for="postResidencySpecialty">Post Residency Specialty</label>
                <input type="text" id="postResidencySpecialty" bind:value={applicantPost.postResSpecialty}>
                <label for="postResidencyInstitution">Post Residency Institution</label>
                <input type="text" id="postResidencyInstitution" bind:value={applicantPost.postResInstitution}>
                <label for="postResidencyDuration">Post Residency Duration</label>
                <input type="text" id="postResidencyDuration" bind:value={applicantPost.postResDuration}>
            </div>

            {#each applicantPost.postDepartmentSpecialties as specialty, index}
                <div class="form-group" key={index}>
                    <label for="postResSpecialty">Post Residency Specialty</label>
                    <input type="text" id="postResSpecialty" bind:value={applicantPost.postDepartmentSpecialties[index].postResSpecialty}>
                    <label for="postResInstitution">Post Residency Institution</label>
                    <input type="text" id="postResInstitution" bind:value={applicantPost.postDepartmentSpecialties[index].postResInstitution}>
                    <label for="postResDuration">Post Residency Duration</label>
                    <input type="text" id="postResDuration" bind:value={applicantPost.postDepartmentSpecialties[index].postResDuration}>
                    <button class="delButton" type="button" on:click={() => deletePostDepartmentSpecialty(index)}>
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            {/each}

        </fieldset>
    </form>
</div>

<style>
    .formLabel {
        display: flex;
        align-items: center;
        margin-left: 20px;
        font-family: "Poppins", sans-serif;
        font-weight: 600;
        font-style: normal;
        font-size: 16px;
    }

    .formLabel button {
        margin-left: auto;
        margin-right: 20px;
        font-size: 15px;
        font-family: "Poppins", sans-serif;
        font-weight: 600;
        font-style: normal;
        padding: 10px;
    }

    .delButton {
        padding-left: 10px;
        padding-right: 10px;
    }

    .delButton i {
        font-size: 15px;
    }

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
        flex: 1 1 15%;
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