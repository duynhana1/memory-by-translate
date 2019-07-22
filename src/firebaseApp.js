// import firebase from "@firebase/app";
// import "@firebase/auth";

// JUST FOR DEVELOPMENT
import * as firebase from "firebase";

import firebaseConfig from "./firebase.config";

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      console.log("You are signed in");
      console.log("TODO: show toast");
    } else {
      console.log("You are signed out");
      console.log("TODO: show toast");
    }
  });
}
const firebaseApp = firebase.app();

export default firebaseApp;
