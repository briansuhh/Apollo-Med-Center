// src/store/formData.js
import { writable } from 'svelte/store';

export const formData = writable({
    section1: {},
    section2: {},
    section3: {},
    section4: {}
});
