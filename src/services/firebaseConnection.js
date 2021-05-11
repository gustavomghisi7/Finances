import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
  apiKey: "AIzaSyCs5SiIHPYFAK8_zemjzUDZvlelJciH1Cs",
  authDomain: "financaapp-f423f.firebaseapp.com",
  projectId: "financaapp-f423f",
  storageBucket: "financaapp-f423f.appspot.com",
  messagingSenderId: "107978044850",
  appId: "1:107978044850:web:b3c4f1f6b8163b9ff220ab"
};

// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;