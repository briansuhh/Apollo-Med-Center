import { writable } from 'svelte/store';

// Create a writable store with an initial value of false
export const profileCompletion = writable(false);

// Function to check if profile is complete
export function checkProfileCompletion(profileData) {
    // Replace with your logic to check if all fields are filled
    const isComplete =
        profileData.firstName &&
        profileData.lastName &&
        profileData.middleName &&
        profileData.emailAddress &&
        profileData.phoneNumber &&
        profileData.telephoneNumber &&
        profileData.homeAddress;

    // Update profile completion status in the store
    profileCompletion.set(isComplete);
}
