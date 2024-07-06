<script>
  import { goto } from "$app/navigation";
  import { showNotificationMessage } from '../../store/notification.js';
  import Notification from '../../components/Notification.svelte';
  

  let isRegister = false;
  let email = '';
  let password = '';
  let name = ''; 

  function showRegister() {
    isRegister = true;
  }

  function showLogin() {
    isRegister = false;
  }

  async function login() {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      if (response.ok) {
          const data = await response.json();
          localStorage.setItem('token', data.token);
          goto('/main');
          showNotificationMessage('success', 'You have logged in successfully');
        } else {
          console.error('Login failed');
          showNotificationMessage('error', 'Error loading applicants. Please try again later.');
        }
    } catch (error) {
      console.error('Error logging in:', error);
      showNotificationMessage('error', 'Error loading applicants. Please try again later.');
    }
  }

  async function register() {
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      });

      if (response.ok) {
        const data = await response.json();
        // Store user data/token and navigate to the login or dashboard
        localStorage.setItem('user', JSON.stringify(data.user));
        showLogin();
      } else {
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error registering:', error);
    }
  }
</script>

<svelte:head>
  <link rel="stylesheet" href="css/color.css" />
</svelte:head>


<nav class="navbar navbar-light bg-light bg-header">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">
      <img src="images/logo.png" alt="" width="auto" height="50" />
      <span class="logo-text"> Apollo Medical Center</span>
    </a>
    <div class="d-flex">
      <button class="btn log-text" href="/login" on:click={showLogin}>Login</button>
      <div class="vr"></div>
      <button class="btn log-text" href="/login" on:click={showRegister}
        >Register</button>
    </div>
  </div>
</nav>

<div class="mainContainer">
  <div class="container">    
    <!-- Outer Row -->
    <div class="row justify-content-center">
      <div class="col-xl-10 col-lg-12 col-md-11">
        <div class="card o-hidden border-0 shadow-lg my-5">
          <div class="card-body p-0">
            <!-- Nested Row within Card Body -->
            <div class="justify-content-center align-items-center row">
              <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
              <div class="col-lg-6 mx-auto">
                <div class="p-5">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">
                      {#if isRegister}
                        Create an Account!
                      {:else}
                        Welcome Back!
                      {/if}
                    </h1>
                  </div>
                  {#if isRegister}
                    <!-- Register Form -->
                    <form class="user" on:submit|preventDefault={register}>
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control form-control-user"
                          placeholder="Enter Your Name..."
                          bind:value={name}
                        />
                      </div>
                      <div class="form-group">
                        <input
                          type="email"
                          class="form-control form-control-user"
                          placeholder="Enter Email Address..."
                          bind:value={email}
                        />
                      </div>
                      <div class="form-group">
                        <input
                          type="password"
                          class="form-control form-control-user"
                          placeholder="Password"
                          bind:value={password}
                        />
                      </div>
                      <button class="btn btn-primary btn-user btn-block" type="submit">
                        Register
                      </button>
                    </form>
                    <hr />
                    <div class="text-center">
                      <a class="small" href="/login" on:click={showLogin}>
                        Already have an account? Login!
                      </a>
                    </div>
                  {:else}
                    <!-- Login Form -->
                    <form class="user" on:submit|preventDefault={login}>
                      <div class="form-group">
                        <input
                          type="email"
                          class="form-control form-control-user"
                          id="exampleInputEmail"
                          aria-describedby="emailHelp"
                          placeholder="Enter Email Address..."
                          bind:value={email}
                        />
                      </div>
                      <div class="form-group">
                        <input
                          type="password"
                          class="form-control form-control-user"
                          id="exampleInputPassword"
                          placeholder="Password"
                          bind:value={password}
                        />
                      </div>
                      <div class="form-group">
                        <div class="custom-control custom-checkbox small">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="customCheck"
                          />
                          <label class="custom-control-label" for="customCheck">
                            Remember Me
                          </label>
                        </div>
                      </div>
                      <button class="btn btn-primary btn-user btn-block" type="submit">
                        Login
                      </button>
                    </form>
                    <hr />
                    <div class="text-center">
                      <a class="small" href="forgot-password.html">
                        Forgot Password?
                      </a>
                    </div>
                    <div class="text-center">
                      <a class="small" href="/login" on:click={showRegister}>
                        Create an Account!
                      </a>
                    </div>
                  {/if}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<Notification />

<style>
  .mainContainer {
    height: calc(100vh - 76px);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #323b5d;
    background-image: linear-gradient(180deg, white 10%, #2faec0 100%);
    background-size: cover;
    font-family: "Poppins", sans-serif;
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
