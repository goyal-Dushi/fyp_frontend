import firebase from 'firebase';
import 'firebase/auth'; 
const firebaseConfig = {
    apiKey: "AIzaSyDvcZ0Rh1urVdgGHNMiwV2aHkfMp7U2bt0",
    authDomain: "clone-8b2e1.firebaseapp.com",
    databaseURL: "https://clone-8b2e1.firebaseio.com",
    projectId: "clone-8b2e1",
    storageBucket: "clone-8b2e1.appspot.com",
    messagingSenderId: "428438139141",
    appId: "1:428438139141:web:26f246d2b5a5b4f54bc76c"
  };

firebase.initializeApp(firebaseConfig);

export const db=firebase.firestore();
  export const auth=firebase.auth();
  