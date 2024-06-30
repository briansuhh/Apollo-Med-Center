import { writable } from 'svelte/store';

export const notification = writable({
  show: false,
  message: '',
  type: '' 
});

// when called in other page, it will change the value of notification store
export function showNotificationMessage(type, message) {
  notification.set({
    show: true,
    message,
    type
  });

  setTimeout(() => {
    notification.set({
      show: false,
      message: '',
      type: ''
    });
  }, 3000);
}
