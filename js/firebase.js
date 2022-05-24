// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: 'AIzaSyB9_T5iScjZP7wU0pB7wfgEKNErEzwTN8M',
  authDomain: 'cocktail-app-ba857.firebaseapp.com',
  projectId: 'cocktail-app-ba857',
  storageBucket: 'cocktail-app-ba857.appspot.com',
  messagingSenderId: '514832182243',
  appId: '1:514832182243:web:5edf9fa9a0890543db8ed6',
  measurementId: 'G-P7BN055J9Y',
};

// Initialize Firebase

export const app = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
