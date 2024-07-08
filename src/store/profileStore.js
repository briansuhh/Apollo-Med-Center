import { writable } from 'svelte/store';

export const profileCompletion = writable(false);

export function checkProfileCompletion(profileData) {
    const fields = [
        profileData.firstName,
        profileData.lastName,
        profileData.middleName,
        profileData.emailAddress,
        profileData.phoneNumber,
        profileData.telephoneNumber,
        profileData.homeAddress
    ];

    // Check if all fields are filled
    const isComplete = fields.every(field => field && field.trim() !== '');

    console.log('Is profile complete?', isComplete);

    // Update the store value
    profileCompletion.set(isComplete);

    profileCompletion.subscribe(value => {
        console.log('Profile completion state:', value);
    });

    
}
