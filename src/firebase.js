import * as firebase from "firebase/app";
import "firebase/auth";

import firebaseConfig from "./firebase.config";

const firebaseApp =
  firebase.apps.length === 0
    ? firebase.initializeApp(firebaseConfig)
    : firebase.apps[0];

export default firebaseApp;
