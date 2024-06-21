<script>
  import { goto } from "$app/navigation";
</script>

<svelte:head>
<link
href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
rel="stylesheet"
integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
crossorigin="anonymous"
/>
</svelte:head>

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

<div class="container-fluid">
  <div class="row top-container">
    <div class="col-md-8 px-5 text-intro">
      <span class="v0_5"><b>Welcome to</b></span> <br />
      <span class="v11_2"><b>APOLLO MEDICAL CENTER</b></span><br />
      <span class="v0_6">Leading with Care, Healing with Trust</span>
      <div class="row">
        <div class="col-md-9 py-3">
          <span class="v0_9 mt-2"
            >Apollo Medical Center emphasizes its commitment to providing
            exceptional healthcare services while fostering a trusting
            relationship with patients. Apollo Medical Center positions itself
            as a premier destination for both patients seeking reliable care and
            professionals aspiring to work in an environment that prioritizes
            excellence and empathy. Experience compassionate care and trusted
            healing at Apollo Medical Centre.</span
          >
        </div>
      </div>
      <button type="button" class="btn v0_8 mt-5">Apply Here</button>
    </div>
    <div class="col-md-4 col-l-5 col-s-4">
      <img id="doctor-img" src="images/doctors.png" alt="" class="img-intro" />
    </div>
  </div>
</div>

<style>
  .v0_5 {
    color: rgba(23, 32, 72, 1);
    font-family: Poppins;
    font-weight: Bold;
    font-size: 47px;
    opacity: 1;
    text-align: left;
  }

  .v0_6 {
    color: rgba(23, 32, 72, 1);
    font-family: Poppins;
    font-weight: Bold;
    font-size: 20px;
    opacity: 1;
    text-align: left;
  }

  .v11_2 {
    color: rgba(47, 174, 192, 1);
    font-family: Poppins;
    font-weight: Bold;
    font-size: 57px;
    opacity: 1;
    text-align: left;
  }

  .v0_9 {
    color: rgba(23, 32, 72, 1);
    font-family: Poppins;
    font-weight: Medium;
    font-size: 14px;
    opacity: 1;
    text-align: justify;
  }

  .v0_8 {
    width: 121px;
    color: rgba(255, 255, 255, 1);
    background: rgb(1, 116, 154);
    background: linear-gradient(
      90deg,
      rgba(1, 116, 154, 1) 0%,
      rgba(67, 200, 209, 1) 14%,
      rgba(58, 189, 201, 1) 33%,
      rgba(32, 155, 180, 1) 67%,
      rgba(6, 122, 158, 1) 100%
    );
    font-family: Poppins;
    font-weight: SemiBold;
    font-size: 16px;
    opacity: 1;
    text-align: center;
  }

  .text-intro {
    margin-top: 100px;
  }

  .img-intro {
    position: absolute;
    margin-top: 70px;
    width: 47%;
    left: 700px;
  }

  .top-container {
    position: relative;
  }

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
