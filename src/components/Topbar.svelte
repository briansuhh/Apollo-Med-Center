<script>
  import { onMount } from 'svelte';

  let fullName = '';

  onMount(async () => {
    const response = await fetch('/api/readlogin', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    });

    if (response.ok) {
      const data = await response.json();
      fullName = data.user.name;
    } else {
      console.error('Failed to retrieve user information');
    }
  });
</script>

<header>
    <input type="text" placeholder="Search">
    <button><i class="fa-solid fa-magnifying-glass buttonIcon"></i></button>
    <h3 class="user"><i class="fa-solid fa-user-tie icon"></i>{fullName}</h3>
  </header>

<style>
.icon {
    font-size: 18px;
    color: #6e7ba2;
    margin-right: 15px;
  }

  header {
    padding: 10px;
    display: flex;
    align-items: center;
    box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.1);
    background-color: white;
    position: sticky;
    margin-top: auto;
  }

  .user {
    padding-right: 20px;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 18px;
    margin-left: auto;
    margin-top: auto;
    align-items: center;
  }

  .icon {
    padding-right: 5px;
    color: #333;
    font-size: 20px;
  }

  button {
    background-color: #13102d;
    border: none;
    border-radius: 20px;
    padding: 9.5px 15px;
    margin: 0;
    margin-left: 5px;
  }

  .buttonIcon {
    color: #fff;
    font-size: 15px;
  }

  header input[type="text"] {
    width: 30%;
    padding: 5px;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 15px;
    border: 2px solid #ccc;
    border-radius: 15px;
    margin-left: 20px;
    background-color: #f3f5ff;
  }

</style>