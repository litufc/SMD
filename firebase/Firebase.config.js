import * as firebase from 'firebase/app'
import "firebase/auth";
import "firebase/firestore";

export const initFirebase = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyCtbA9sfhUz6tENlPsdTcHIH2L2az3RqdA",
    authDomain: "app-smd-ae250.firebaseapp.com",
    databaseURL: "https://app-smd-ae250.firebaseio.com",
    projectId: "app-smd-ae250",
    storageBucket: "",
    messagingSenderId: "852945902477",
    appId: "1:852945902477:web:d4dd80ee5386bafd"
  }

  firebase.initializeApp(firebaseConfig);
}