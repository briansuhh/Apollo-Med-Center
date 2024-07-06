<script>
    import { pagename } from '../store/page.js'; // Adjust the path as necessary
    import { goto } from '$app/navigation';

    function showDashboard() {
      pagename.set('Dashboard');
      console.log('Dashboard');
    }
  
    function showProfile() {
      pagename.set('Profile');
      console.log('Profile');
    }
  
    function showApplicationForm() {
      pagename.set('Application Form');
    }
  
    function showAboutUs() {
      pagename.set('About Us');
    }
  
    function showSettings() {
      pagename.set('Settings');
    }

    async function logout() {
    try {
      const response = await fetch('/api/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        pagename.set('');
        console.log('Logout successful');
        goto('/');
      } else {
        console.log('Logout failed');
      }
    } catch (error) {
      console.log('Error during logout:', error);
    }
  }
  </script>

<aside class="sidebar">
    <div class="logo">
        <img src="images/logo.png" alt="Appollo Med Logo">
        <h1>Apollo Medical Center</h1>
    </div>
    <nav class="navigation">
        <span class="separator">GENERAL</span>

        <button class="nav-button {$pagename === 'Dashboard' ? 'active' : ''}" on:click={showDashboard}>
            <i class="fa-solid fa-house icon"></i>Dashboard
        </button>

        <button class="nav-button {$pagename === 'Profile' ? 'active' : ''}" on:click={showProfile}>
            <i class="fa-solid fa-id-card-clip icon"></i>Profile
        </button>

        <button class="nav-button {$pagename === 'Application Form' ? 'active' : ''}" on:click={showApplicationForm}>
            <i class="fa-solid fa-window-restore icon"></i>Application Form
        </button>

        <button class="nav-button {$pagename === 'About Us' ? 'active' : ''}" on:click={showAboutUs}>
            <i class="fa-solid fa-address-card icon"></i>About Us
        </button>

        <span class="separator">ACCOUNT</span>
        <button class="nav-button" on:click={logout}>
            <i class="fa-solid fa-right-from-bracket icon"></i>Logout
        </button>
    </nav>
</aside>
  
  <style>
    .icon {
      font-size: 18px;
      color: #6e7ba2;
      margin-right: 15px; /* Space between icon and text */
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
    .nav-button {
      background: none;
      border: none;
      text-decoration: none;
      color: #6e7ba2;
      padding: 10px 0;
      font-size: 16px;
      font-family: "Poppins", sans-serif;
      font-weight: 600;
      font-style: normal;
      padding-left: 40px;
      text-align: left;
      cursor: pointer;
      transition: background 0.5s;
    }
    .nav-button.active,
    .nav-button:hover {
      color: #333;
    }
    .nav-button.active .icon,
    .nav-button:hover .icon {
      color: #333;
    }
    .nav-button:focus {
      outline: none;
    }
  </style>