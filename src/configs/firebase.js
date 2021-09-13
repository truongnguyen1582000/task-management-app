import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBc6pOtcH2bPtMvntFpKE3KD6eIFX_-VGw",
  authDomain: "vue-final-project-70997.firebaseapp.com",
  databaseURL:
    "https://vue-final-project-70997-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "vue-final-project-70997",
  storageBucket: "vue-final-project-70997.appspot.com",
  messagingSenderId: "877149128655",
  appId: "1:877149128655:web:da76abbb1bea770a00b4ba",
  measurementId: "G-XV4YPHHGTK",
};

firebase.initializeApp(firebaseConfig);
const fireStoreCore = firebase.firestore();
export { fireStoreCore };
