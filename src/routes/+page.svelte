<script>
    import { goto } from '$app/navigation';
</script>

<!-- <nav class="navbar navbar-light bg-light bg-header">
    <div class="container-fluid">
        <a class="navbar-brand" href="/login">
            <img src="images/logo.png" alt="" width=auto height="50">
            <span class="logo-text"> Apollo Medical Center</span>
        </a>
        <div class="d-flex">
            <button class="btn log-text" on:click={() => goto(`/login`)}>Login</button>
            <div class="vr"></div>
            <button class="btn log-text" on:click={() => goto(`/login`)}>Register</button>
        </div>
    </div>
</nav> -->

<div class="container-fluid">
    <div class="row top-container">
        <div class="col-md-8 px-4 text-intro">
            <span class="v0_5"><b>Welcome to</b></span> <br>
            <span class="v11_2"><b>APOLLO MEDICAL CENTER</b></span><br>
            <span class="v0_6">Leading with Care, Healing with Trust</span>
            <div class="row">
                <div class="col-md-9 py-3">
                    <span class="v0_9 mt-2">Apollo Medical Center emphasizes its commitment to providing exceptional healthcare services while fostering a trusting relationship with patients. Apollo Medical Center positions itself as a premier destination for both patients seeking reliable care and professionals aspiring to work in an environment that prioritizes excellence and empathy. Experience compassionate care and trusted healing at Apollo Medical Centre.</span>
                </div>
            </div>
            <button type="button" class="btn v0_8 mt-2">Apply Here</button>
        </div>
        <div class="col-md-4">
            <img id="doctor-img" src="images/doctors.png" alt="" class="img-intro">
        </div>
    </div>
</div>

<style>
    .logo-text {
        font-size: 16px;
        color: #323B5D;
        font-weight: bold;
    }

    .log-text {
        font-size: 16px;
        color: #2FAEC0;
        font-weight: bold;
    }

    .v0_5 {
        color: rgba(23,32,72,1);
        font-family: Poppins;
        font-weight: Bold;
        font-size: 47px;
        opacity: 1;
        text-align: left;
    }

    .v0_6 {
        color: rgba(23,32,72,1);
        font-family: Poppins;
        font-weight: Bold;
        font-size: 20px;
        opacity: 1;
        text-align: left;
    }

    .v11_2 {
        color: rgba(47,174,192,1);
        font-family: Poppins;
        font-weight: Bold;
        font-size: 57px;
        opacity: 1;
        text-align: left;
    }

    .v0_9 {
        color: rgba(23,32,72,1);
        font-family: Poppins;
        font-weight: Medium;
        font-size: 14px;
        opacity: 1;
        text-align: justify;
    }

    .v0_8 {
        width: 121px;
        color: rgba(255,255,255,1);
        background: rgb(1,116,154);
        background: linear-gradient(90deg, rgba(1,116,154,1) 0%, rgba(67,200,209,1) 14%, rgba(58,189,201,1) 33%, rgba(32,155,180,1) 67%, rgba(6,122,158,1) 100%);
        position: absolute;
        top: 550px;
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
        margin-top: 100px;
        position: absolute;
        width: 45%;
        height: auto;
        top: 40px;
        left: 700px;
    }

    .bg-header {
        background: #f9f9fd;
    }
</style>
