import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyBxbgShXDjxoTZcWgIMIXVYxa91hnHItzk",
    authDomain: "atividadeapp-641d1.firebaseapp.com",
    databaseURL: "https://atividadeapp-641d1-default-rtdb.firebaseio.com",
    projectId: "atividadeapp-641d1",
    storageBucket: "atividadeapp-641d1.appspot.com",
    messagingSenderId: "321251984560",
    appId: "1:321251984560:web:65f061864abe7533ad6775",
    measurementId: "G-MLPRPJQC5H"
  };

// Initialize Firebase
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;