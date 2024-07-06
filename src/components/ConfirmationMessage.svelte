<script>
    import { createEventDispatcher } from 'svelte';

    export let show = false;
    export let message = '';
  
    const dispatch = createEventDispatcher();

    function confirm() {
        dispatch('confirm');
    }

    function cancel() {
        dispatch('cancel');
    }
</script>

{#if show}
  <div class="confirmation-overlay">
    <div class="confirmation-box">
      <p>{message}</p>
      <div class="buttons">
        <button on:click={confirm}>Yes</button>
        <button on:click={cancel}>No</button>
      </div>
    </div>
  </div>
{/if}

<style>
  .confirmation-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }

  .confirmation-box {
    background: #fff;
    padding: 2rem;
    border-radius: 5px;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .confirmation-box p {
    margin-bottom: 1rem;
  }

  .buttons {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }

  .buttons button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
  }

  .buttons button:first-of-type {
    background: green;
    color: white;
  }

  .buttons button:last-of-type {
    background: red;
    color: white;
  }
</style>
