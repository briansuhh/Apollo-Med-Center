// profileStore.js

import { writable } from 'svelte/store';

// Initial profile completion status
const initialProfileCompletion = {
    isComplete: false
};

// Create a writable store
const profileCompletion = writable(initialProfileCompletion);

// Function to check if profile is complete
function checkProfileCompletion(profileData) {
    // Replace with your logic to check if all fields are filled
    const isComplete =
        profileData.firstName &&
        profileData.lastName &&
        profileData.middleName &&
        profileData.email &&
        profileData.phoneNumber &&
        profileData.telephoneNumber &&
        profileData.homeAddress;

    // Update profile completion status in the store
    profileCompletion.set({ isComplete });
}

export { profileCompletion, checkProfileCompletion };
