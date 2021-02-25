import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAgRu3OnJPlqewc9qAwGPKPhv9KSKzSsv4",
  authDomain: "authtasks.firebaseapp.com",
  projectId: "authtasks",
  storageBucket: "authtasks.appspot.com",
  messagingSenderId: "718539342222",
  appId: "1:718539342222:web:1cc2a541aba0f3ff0de4df"
};
firebase.initializeApp(firebaseConfig);

export default firebase;