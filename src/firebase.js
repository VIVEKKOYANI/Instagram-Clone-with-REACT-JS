import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDQryCa-vkF_dOOtIrMQ5yimPdlnMSxdCI",
    authDomain: "instagram-clone-react-59d27.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-59d27.firebaseio.com",
    projectId: "instagram-clone-react-59d27",
    storageBucket: "instagram-clone-react-59d27.appspot.com",
    messagingSenderId: "879291107567",
    appId: "1:879291107567:web:d03d566f9619d6b1e0b31a",
    measurementId: "G-KQDSTLR73X"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();



  export {db, auth, storage};