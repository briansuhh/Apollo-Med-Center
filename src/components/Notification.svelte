<script>
    import { notification } from '../store/notification.js';
    import { onDestroy } from 'svelte';
  
    let show = false;
    let message = '';
    let type = '';
  
    const unsubscribe = notification.subscribe(value => {
      show = value.show;
      message = value.message;
      type = value.type;
    });
  
    // para mag-unsubscribe sa store if the component is destroyed
    onDestroy(() => {
      unsubscribe();
    });
</script>

{#if show}
  <div class="notification {type}">
    <p>{message}</p>
  </div>
{/if}

<style>
  .notification {
    position: fixed;
    top: 10px;
    right: 20px;
    background: #fff;
    padding: 1rem;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  }

  .notification.success {
    border-left: 5px solid green;
  }

  .notification.error {
    border-left: 5px solid red;
  }

  .notification p {
    margin: 0;
    font-size: small;
  }
</style>
