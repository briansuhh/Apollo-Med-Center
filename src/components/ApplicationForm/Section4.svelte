<script>
    import { onMount } from 'svelte';

    let applicantPost = {
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

        const response = await fetch('/api/readpostres', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        });

        if (response.ok) {
            const data = await response.json();
            if (data.user && Array.isArray(data.user)) {
                applicantPost.postDepartmentSpecialties = data.user.map(item => ({
                    id: nextId++,
                    postResSpecialty: item.postResSpecialty,
                    postResInstitution: item.postResInstitution,
                    postResDuration: item.postResDuration
                }));
            }
        } else {
            console.error('Failed to retrieve user information');
        }
    });
</script>

<div class="formContainer">
    <form>
        <fieldset>
            <legend>POST RESIDENCY INFORMATION</legend>
            <div class="formLabel">
                <button type="button" on:click={addPostDepartmentSpecialty}>+ Add Specialty</button>
            </div>

            {#each applicantPost.postDepartmentSpecialties as specialty, index}
                <div class="form-group" key={specialty.id}>
                    <label for={`postResSpecialty_${index}`}>Post Residency Specialty</label>
                    <input type="text" id={`postResSpecialty_${index}`} bind:value={specialty.postResSpecialty}>
                    <label for={`postResInstitution_${index}`}>Post Residency Institution</label>
                    <input type="text" id={`postResInstitution_${index}`} bind:value={specialty.postResInstitution}>
                    <label for={`postResDuration_${index}`}>Post Residency Duration</label>
                    <input type="text" id={`postResDuration_${index}`} bind:value={specialty.postResDuration}>
                    <button class="delButton" type="button" on:click={() => deletePostDepartmentSpecialty(index)}><i class="fa-solid fa-trash"></i></button>
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
