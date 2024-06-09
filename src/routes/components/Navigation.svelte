<script>
  import { goto } from "$app/navigation";
</script>

<nav class="navbar navbar-light bg-light bg-header">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">
      <img src="images/logo.png" alt="" width="auto" height="50" />
      <span class="logo-text"> Apollo Medical Center</span>
    </a>
    <div class="d-flex">
      <button class="btn log-text" on:click={() => goto(`/login`)}>Login</button
      >
      <div class="vr"></div>
      <button class="btn log-text" on:click={() => goto(`/login`)}
        >Register</button
      >
    </div>
  </div>
</nav>

<style>
  .logo-text {
    font-size: 16px;
    color: #323b5d;
    font-weight: bold;
  }

  .log-text {
    font-size: 16px;
    color: #2faec0;
    font-weight: bold;
  }

  .bg-header {
    background: #f9f9fd;
  }

  .navbar {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
  }

  .container-fluid {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
</style>
