<script>
  import Topbar from "./Topbar.svelte";
  import { onMount } from 'svelte';
  import { profileCompletion } from '../store/profileStore.js';

  

  let isProfileComplete;
  let isApplicationApproved;

  onMount(() => {
      isProfileComplete = $profileCompletion;
  });

  // this is for checking if the he has submitted the application
  onMount(async () => {
      const [applicantResponse, residencyRespo, postResRespo] = await Promise.all([
      
      fetch('/api/readapplicants', {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json'
          }
      }),
      fetch('/api/readresidency', {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json'
          }
      }),
      fetch('/api/readpostres', {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json'
          }
      })]);

      const applicantData = await applicantResponse.json();
      const residencyData = await residencyRespo.json();
      const postResData = await postResRespo.json();

      if (applicantData.user && residencyData.user && postResData.user) {
          isProfileComplete = true;
      } else {
          isProfileComplete = false;
      }
    });

    // this is for checking if the application is accepted
    onMount(async () => {
      const response = await fetch('/api/readapplicants', {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json'
          }
      });

      const data = await response.json();
      if (data.user.status === 'Approved') {
          isApplicationApproved = 'Approved';
      } else if (data.user.status === 'Denied') {
          isApplicationApproved = 'Denied';
      } else {
          isApplicationApproved = 'Pending';
      }
  });
</script>

<main class="main-content">
  
  <Topbar />

  <section class="dashboard">
      <h1>Dashboard</h1>
      <div class="progress-tracker">
          <div class="step-completed">
            {#if isProfileComplete}
            <h3 class= "Complete">Accomplished</h3>
            {:else}
            <h3 class= "Incomplete">Pending</h3>
            {/if}
          
              
              <div class="tooltip-container">
                <p>Profile Completion</p> 
                <span class="tooltip-icon">[?]</span>
                <div class="tooltip-text">If this is not showing the correct information, refresh this page to update the UI.</div>
              </div>
          </div>
          
          <div class="step-completed">
            {#if isProfileComplete}
            <h3 class= "Complete">Submitted</h3>
            {:else}
            <h3 class= "Incomplete">Pending</h3>
            {/if}
            <div class="tooltip-container">
              <p>Application Completion</p> 
              <span class="tooltip-icon">[?]</span> 
              <div class="tooltip-text">If this is not showing the correct information, refresh this page to update the UI.</div>
            </div>
          </div>
          <div class="step-completed">
            {#if isApplicationApproved === 'Approved'}
                  <h3 class="Complete">Approved</h3>
              {:else if isApplicationApproved === 'Denied'}
                  <h3 class="Incomplete">Denied</h3>
              {:else}
                  <h3 class="Incomplete">Pending</h3>
              {/if}
            <div class="tooltip-container">
              <p>Application Confirmation</p> 
              <span class="tooltip-icon">[?]</span>
              <div class="tooltip-text">If this is not showing the correct information, refresh this page to update the UI.</div>
            </div>
          </div>
      </div>
      
      <h3 class="progress-title">Progress Tracker</h3>
      <div class="progress-bar">
        {#if isApplicationApproved === 'Approved' && isProfileComplete}
          <div class="progress" style="width:100%"><div class="percentage">100%</div></div>
        {:else if isProfileComplete}
            <div class="progress" style="width:67%"><div class="percentage">67%</div></div>
        {:else}
        <div class="progress" style="width:0%"><div class="percentage">0%</div></div>
        {/if}
        
    </div>
    <h3 class="progress-title">Notifications</h3>
    <div class="notif">
    {#if isApplicationApproved === 'Approved' && isProfileComplete}
      <p>Congratulations! You have successfully completed the application process. Please wait for an update regarding your scheduled interview.</p>
    {:else if isApplicationApproved === 'Denied'}
      <p>We regret to inform you that you have not been selected for an interview at this time. We encourage you to apply again in the future.</p>
    {:else if isProfileComplete}
      <p>Your application is currently being reviewed by our HR team. This process typically takes 1-2 weeks.</p>
    {:else}
      <p>Complete your profile and application form to start the application process.</p>
    {/if}
  </div>
  </section>

  
</main>

<style>
  .notif {
    border-width: 3px; 
    background-color: white;
    width: 97%;
    padding-top: 30px;
    padding-bottom: 40px;
    border-radius: 20px;
    text-align: center;
  }

  .progress-title {
    margin-bottom: 10px;
    margin-top: 10px;
  }

  .percentage {
    margin-left: 20px;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 22px;
    color: white;
  }

  .progress-bar {
    height: 30px;
    background-color: #5a5a5a;
    border-radius: 50px;
    margin-bottom: 20px;
    margin-right: 20px;
    overflow: hidden;
  }

  .progress {
    height: 100%;
    background-color: teal; /* Change color based on progress */
    width: 0;
    transition: width 0.3s ease-in-out;
  }

  .tooltip-container {
      position: relative;
      display: inline-flex; /* Change to inline-flex to align items horizontally */
      align-items: center; /* Align items vertically */
  }

  .tooltip-text {
      visibility: hidden;
      width: 200px;
      background-color: #333;
      color: #fff;
      text-align: center;
      border-radius: 6px;
      padding: 5px;
      position: absolute;
      z-index: 1;
      top: -30px; /* Adjust to position above the text */
      left: calc(100% + 10px); /* Position to the right of the tooltip icon */
      opacity: 0;
      transition: opacity 0.3s;
      font-family: "Poppins", sans-serif;
      font-weight: 400;
      font-style: normal;
      font-size: 14px;
  }

  .tooltip-container:hover .tooltip-text {
      visibility: visible;
      opacity: 1;
  }

  .tooltip-icon {
      cursor: help;
      color: #007bff;
      margin-left: 5px; /* Add margin to separate icon from text */
      font-family: "Poppins", sans-serif;
      font-weight: 500;
      font-style: normal;
      font-size: 14px;
  }

  .tooltip-icon:hover {
      color: #00448c;
  }



  .Complete {
    color: teal; /* Custom color for "Accomplished" */
    font-size: 24px;
  }

  .Incomplete {
    color: rgb(255, 68, 0);
    font-size: 24px;
  }

  .main-content {
    width: 80%;
  }

  .main-content .dashboard {
    margin-top: 20px;
    padding-left: 30px;
  }

  .main-content h1 {
    font-size: 36px;
    margin-bottom: 30px;
    font-family: "Poppins", sans-serif;
    font-weight: 800;
    font-style: normal;
  }

  .step-completed {
    border: solid teal; /* Border style with width and color */
    border-width: 3px; 
    background-color: white;
    width: 30%;
    padding-top: 30px;
    padding-bottom: 40px;
    border-radius: 20px;
    text-align: center;
  }

  .main-content p {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  .progress-tracker {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 20px;
  }



  .progress-tracker .step p {
    font-size: 14px;
  }

</style>