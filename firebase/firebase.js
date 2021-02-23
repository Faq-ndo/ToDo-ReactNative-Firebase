import firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
    apiKey: "AIzaSyCK00rHhqmN2M6kHnW0s5xHmkyJmupi-C8",
    authDomain: "auth-development-e0c2c.firebaseapp.com",
    projectId: "auth-development-e0c2c",
    storageBucket: "auth-development-e0c2c.appspot.com",
    messagingSenderId: "414010170095",
    appId: "1:414010170095:web:43c61d3bbabbaea0ef591a"
});

export const auth = app.auth();
export default app;