<script>
    import ApplicationForm from '../../components/ApplicationForm.svelte';
    import Profile from '../../components/Profile.svelte'
    import Sidebar from '../../components/Sidebar.svelte';
    import Dashboard from '../../components/Dashboard.svelte';
    import AboutUs from '../../components/AboutUs.svelte';
    import { pagename } from '../../store/page.js'; 
    import { onMount } from 'svelte';

onMount(() => {
    const token = localStorage.getItem('token');

    // Clear token to prevent subsequent reloads
    localStorage.removeItem('token');

    if (token) {
        location.reload();
    }
});


  </script>
  
  <div class="mainbox">
    <div class="box">

      <Sidebar />
      {#if $pagename == "Dashboard"}
        <Dashboard />
      {:else if $pagename === "Application Form"}
        <ApplicationForm />
      {:else if $pagename === "Profile"}
        <Profile />  
      {:else if $pagename === "About Us"}
        <AboutUs />
      {/if}


    </div>
  </div>

<style>
    /* this acts as the body */
  .mainbox {
    margin: 0;
    padding: 0;
    display: flex;  
    height: 100vh;
    background-color: #f0f2f5;
    overflow: hidden;
  }

  /* this is the container */
  .box {
    display: flex;
    width: 100%;
  } 

  /* body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    margin: 0;
    display: flex;
    height: 100vh;
    overflow: hidden;
}

.container {
    display: flex;
    width: 100%;
} */


  
</style>
