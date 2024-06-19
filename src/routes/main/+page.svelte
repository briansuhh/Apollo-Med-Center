<script>
    // Any JavaScript you need can go here
</script>

<div class="box">
        <aside class="sidebar">
            <div class="logo">
                <img src="images/logo.png" alt="Appollo Med Logo">
                <h1>Apollo Medical Center</h1>
        </div>
        <nav class="navigation">
            <span class="separator">GENERAL</span>
            <a style = "color: #333;" href="mainpage.html"><i class="fa-solid fa-house icon" style = "color: #333;"></i>Dashboard</a>
            <a href="profile.html"><i class="fa-solid fa-id-card-clip icon"></i>Profile</a>
            <a href="application-form.html"><i class="fa-solid fa-window-restore icon" style = "padding-right: 2px;"></i>Application Form</a>
            <a href="about-us.html"><i class="fa-solid fa-address-card icon"></i>About Us</a>
            <span class="separator">SUPPORT</span>
            <a href="settings.html"><i class="fa-solid fa-gear icon"></i>Settings</a>
            <a href="logout.html" class="logout"><i class="fa-solid fa-right-from-bracket icon"></i>Logout</a>
        </nav>
    </aside>
    <main class="main-content">
        <header>
            <input type="text" placeholder="Search">
            <button><i class="fa-solid fa-magnifying-glass buttonIcon"></i></button>
            <h3 class="user"><i class="fa-solid fa-user-tie icon"></i>Brian Sebastian</h3>
        </header>
        <section class="dashboard">
            <h1>Dashboard</h1>
            <div class="progress-tracker">
                <div class="step completed">
                    <span>100%</span>
                    <p>Profile Completion</p>
                </div>
                <div class="step completed">
                    <span>100%</span>
                    <p>Application Completion</p>
                </div>
                <div class="step completed">
                    <span>100%</span>
                    <p>Application Confirmation</p>
                </div>
                <div class="step">
                    <span>0%</span>
                    <p>Interview Schedule</p>
                </div>
                <div class="step">
                    <span>0%</span>
                    <p>Interview Result</p>
                </div>
            </div>
            <p>Your application is currently being reviewed by our HR team. This process typically takes 1-2 weeks.</p>
            <div class="interview-schedule">
                <h2>Interview Schedule</h2>
                <table>
                    <tr>
                        <th>Date</th>
                        <th>8:00</th>
                        <th>9:00</th>
                        <th>10:00</th>
                        <th>11:00</th>
                        <th>12:00</th>
                        <th>13:00</th>
                    </tr>
                    <tr>
                        <td>Mon</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Tue</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Wed</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Thu</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
            </div>
        </section>
        <aside class="notifications">
            <h2>Notifications</h2>
            <div class="notification"></div>
            <div class="notification"></div>
            <div class="notification"></div>
        </aside>
    </main>

</div>

<style>
    :global(body) {
        margin: 0;
        padding: 0;
        display: flex;  
        height: 100vh;
        background-color: #f0f2f5;
            
  }

  .box {
    display: flex;
    width: 100%;
  } 

  .sidebar {
    width: 20%;
    height: 100%;
    background-color: white;
    padding: 20px;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  }

  .sidebar .logo {
    text-align: center;
    display: flex;
    margin-bottom: 20px;
  }

  .sidebar .logo img {
    padding-left: 10px;
    padding-right: 10px;
    width: 80px;
    border-radius: 50%;
  }

  .sidebar .logo h1 {
    font-size: 18px;
    margin: 10px 0;
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-style: normal;
  }

  .sidebar .navigation {
    display: flex;
    flex-direction: column;
  }

  .navigation .separator {
    color: #a3aecd;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-style: normal;  
    font-size: 13px;
    padding-bottom: 10px;
    padding-top: 30px;
    padding-left: 15px;
  }

  .icon {
    font-size: 18px;
    color: #6e7ba2;
    margin-right: 15px;
  }

  .sidebar .navigation a {
    text-decoration: none;
    color: #6e7ba2;
    padding: 10px 0;
    font-size: 16px;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-style: normal;
    padding-left: 40px;
    transition: background 0.5s;
  }

  .sidebar .navigation a:hover,
  .sidebar .navigation a:hover .icon {
    color: #333;
  }

  .sidebar .navigation a:active,
  .sidebar .navigation a:active .icon {
    color: #314fa8;
  }

  .main-content {
    width: 80%;
  }

  
  .main-content header {
    padding: 10px;
    display: flex;
    align-items: center;
    box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.1);
    background-color: white;
    position: sticky;
    margin-top: auto;
  }

  .main-content .user {
    padding-right: 20px;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 18px;
    margin-left: auto;
    margin-top: auto;
    align-items: center;
  }

  .main-content .icon {
    padding-right: 5px;
    color: #333;
    font-size: 20px;
  }

  .main-content button {
    background-color: #13102d;
    border: none;
    border-radius: 0px 15px 15px 0px;
    padding: 9.5px 15px;
    margin: 0;
    margin-left: 5px;
  }

  .main-content .buttonIcon {
    color: #fff;
    font-size: 15px;
  }

  .main-content header input[type="text"] {
    width: 30%;
    padding: 5px;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 15px;
    border: 2px solid #ccc;
    border-radius: 15px 0 0 15px;
    margin-left: 20px;
    background-color: #f3f5ff;
  }

  .main-content .dashboard {
    margin-top: 20px;
    padding-left: 30px;
  }

  .main-content h1 {
    font-size: 24px;
    margin-bottom: 20px;
    font-family: "Poppins", sans-serif;
    font-weight: 800;
    font-style: normal;
  }

  .main-content h2 {
    font-size: 20px;
    margin-bottom: 20px;
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-style: normal;
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

  .progress-tracker .step {
    text-align: center;
    flex: 1;
  }

  .progress-tracker .step span {
    display: block;
    font-size: 20px;
    margin-bottom: 5px;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  .progress-tracker .step p {
    font-size: 14px;
  }

  .progress-tracker .step.completed span {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: normal;
    color: #314fa8;
  }

  .interview-schedule {
    margin-top: 20px;
  }

  .interview-schedule h2 {
    font-size: 20px;
    margin-bottom: 10px;
  }

  .interview-schedule table {
    width: 100%;
    border-collapse: collapse;
  }

  .interview-schedule th {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: center;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-style: normal;
  }

  .interview-schedule td {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: center;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  .notifications {
    margin-top: 20px;
    padding-left: 30px;
  }

  .notifications h2 {
    font-size: 20px;
    margin-bottom: 10px;
  }

  .notifications .notification {
    background-color: #fff;
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }
</style>
