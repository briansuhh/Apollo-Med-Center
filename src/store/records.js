import { writable } from 'svelte/store';

export const records = writable({
    fullName: '',
    firstName: '',
    middleName: '',
    lastName: '',
    age: '',
    gender: '',
    civilStatus: '',
    birthDate: '',
    birthPlace: '',
    citizenship: '',
    homeAddress: '',
    telephoneNo: '',
    cellphoneNo: '',
    emailAddress: '',
    tinNo: '',
    insuranceIDType: '',
    insuranceIDNo: '',
    phicNo: '',
    guardianName: '',
    guardianOccupation: '',
    guardianContactNo: '',
    collegeAttended: '',
    degree: '',
    yearGraduated: '',
    medSchoolAttended: '',
    medSchoolGradYear: '',
    internshipInstitution: '',
    internshipGradYear: '',
    departmentSpecialty: '',
    hospital: '',
    residencyDuration: '',
    postResSpecialty: '',
    postResInstitution: '',
    postResDuration: ''
});