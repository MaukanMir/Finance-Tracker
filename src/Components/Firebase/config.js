//Firebase imports 
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC2MP0tcL-ndZe7WEuvaMpvpQN-PXJ3dx0",
    authDomain: "mymoney-9ff01.firebaseapp.com",
    projectId: "mymoney-9ff01",
    storageBucket: "mymoney-9ff01.appspot.com",
    messagingSenderId: "654577468324",
    appId: "1:654577468324:web:f4745e52773596a51a3731"
  };

//init firebase
firebase.initializeApp(firebaseConfig);

//init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

//timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
