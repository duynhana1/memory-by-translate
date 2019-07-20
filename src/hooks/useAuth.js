import * as firebase from "firebase";
import { useState } from "react";

export default () => {
  const firebaseAuth = firebase.auth();
  let [currentUser, setUser] = useState(firebaseAuth.currentUser);
  firebaseAuth.onAuthStateChanged(function(user) {
    setUser(user);
    if (user) {
      // Signed In
      console.log(user);
    } else {
      // No user is signed in.
    }
  });
  return currentUser;
};
