<script>
    import { onMount } from 'svelte';

    let applicantPost = {};

    onMount(() => {
        const storedData = localStorage.getItem('applicantPost');
        if (storedData) {
            applicantPost = JSON.parse(storedData);
        }
    });

    console.log(applicantPost);
</script>

<div>
    <h2>POST RESIDENCY INFORMATION</h2>
    <div>
        <label for="postResSpecialty">Specialty</label>
        <input type="text" id="postResSpecialty" bind:value={applicantPost.postResSpecialty}>
        <label for="postResInstitution">Institution</label>
        <input type="text" id="postResInstitution" bind:value={applicantPost.postResInstitution}>
        <label for="postResDuration">Duration</label>
        <input type="number" id="postResDuration" bind:value={applicantPost.postResDuration}>
    </div>
</div>
