<script>
    import Topbar from "./Topbar.svelte";
    import Section1 from "./ApplicationForm/Section1.svelte";
    import Section2 from "./ApplicationForm/Section2.svelte";
    import Section3 from "./ApplicationForm/Section3.svelte";
    import Section4 from "./ApplicationForm/Section4.svelte";
    import FormNav from "./ApplicationForm/FormNav.svelte"
    import { currentSection } from '../store/applicationPart.js';
</script>

<div class="form-container">
    <Topbar />
    <FormNav />
    <div class="sectionContent">
      {#if $currentSection === 'Section1'}
        <Section1 />
      {:else if $currentSection === 'Section2'}
        <Section2 />
      {:else if $currentSection === 'Section3'}
        <Section3 />
      {:else if $currentSection === 'Section4'}
        <Section4 />
      {/if}
    </div>
  </div>
  
  <style>
    .form-container {
      display: flex;
      flex-direction: column;
      height: 100vh; /* Adjust as needed */
      width: 100%;
    }
  
    .sectionContent {
      flex: 1;
      overflow-y: auto;
    }
  
  </style>