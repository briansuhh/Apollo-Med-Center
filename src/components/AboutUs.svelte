<script>
    import Topbar from "./Topbar.svelte";
</script>


<body class="container">
    <div >
        <Topbar />
        <main class="content">
            
            
            <section class="about">
                <h1>About Us</h1>
                <p>Apollo Medical Center emphasizes its commitment to providing exceptional healthcare services while fostering a trusting relationship with patients. Experience healthcare that meets expectations. Join the Apollo Medical Centre family and discover a place where leading with care and healing with trust are more than simply ideals; they are our driving principles. Together, we can improve health outcomes and create a brighter future.</p>
                <h2>Mission</h2>
                <p>To be a trusted partner on your journey to health and well-being, leading the way with care and building a healthier community together.</p>
                <h2>Vision</h2>
                <p>To be the region's leading medical center, known for our dedication to patient care, medical education, and community health.</p>
                <h2>Values</h2>
                <ul>
                    <li>Healthcare Excellence</li>
                    <li>Integrity</li>
                    <li>Compassion</li>
                    <li>Accountability</li>
                    <li>Teamwork</li>
                </ul>
            </section>
        </main>
    </div>
</body>

<style>
    body {
        font-family: 'Poppins', sans-serif;
        margin: 0;
        display: flex;
        height: 100vh;
    }

    .container {
        display: flex;
        width: 80%;
    }

    .content {
        flex: 1;
        margin-left: 30px;
        margin-top: 19px;
        margin-right: 30px;
        width: 95%;
        color: #1a1a1a;
    }

    .about h1 {
        font-size: 36px;
        margin-bottom: 10px;
        font-family: "Poppins", sans-serif;
        font-weight: 800;
        font-style: normal;
    }

    .about h2 {
        font-size: 24px;
        margin-top: 20px;
    }

    .about p, .about ul {
        font-size: 16px;
    }

    .about ul {
        padding-left: 20px;
    }

    .about ul li {
        margin: 10px 0;
    }


</style>