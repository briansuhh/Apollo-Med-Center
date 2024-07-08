<script>
  import Topbar from "./Topbar.svelte";
  import { onMount } from 'svelte';
  import { profileCompletion } from '../store/profileStore.js';

  

  let isProfileComplete;

  onMount(() => {
      isProfileComplete = $profileCompletion;
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
                <div class="tooltip-text">If this is not showing the correct information, visit the profile page to update the UI.</div>
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
              <div class="tooltip-text">If this is not showing the correct information, visit the profile page to update the UI.</div>
            </div>
          </div>
          <div class="step-completed">
            <h3 class= "Incomplete">Pending</h3>
              <p>Application Confirmation</p>
          </div>
      </div>
      
      <h3 class="progress-title">Progress Tracker</h3>
      <div class="progress-bar">
        {#if isProfileComplete}
            <div class="progress" style="width:67%"><div class="percentage">67%</div></div>
        {:else}
        <div class="progress" style="width:0%"><div class="percentage">0%</div></div>
        {/if}
        
    </div>
      <p>Your application is currently being reviewed by our HR team. This process typically takes 1-2 weeks.</p>
  </section>

  
</main>

<style>

  .progress-title {
    margin-bottom: 10px;
    margin-top: 10px;
  }

  .percentage {
    margin-left: 30px;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 50px;
    color: white;
  }

  .progress-bar {
    height: 70px;
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
    font-size: 40px;
  }

  .Incomplete {
    color: rgb(255, 68, 0);
    font-size: 40px;
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