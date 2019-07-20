import React from "react";
import * as firebase from "firebase";
// import "firebase/auth";
import firebaseConfig from "../firebase.config";

import FormSignIn from "./FormSignIn";

const firebaseApp =
  firebase.apps.length === 0
    ? firebase.initializeApp(firebaseConfig)
    : firebase.apps[0];

console.log(firebaseApp);

const App = props => {
  // const { user, signOut, signInWithGoogle } = props;
  // let user = useAuth(firebaseApp);

  return <FormSignIn />;
};

// let email = "jendavan@gmail.com";
// let password = "Vanvuive3010";
// // firebase
// //   .auth()
// //   .createUserWithEmailAndPassword(email, password)
// //   .catch(function(error) {
// //     console.log(error);
// //     // Handle Errors here.
// //     // var errorCode = error.code;
// //     // var errorMessage = error.message;
// //     // ...
// //   });
// firebase.auth().useDeviceLanguage();
// firebase
//   .auth()
//   .signOut()
//   .then(function() {
//     // Sign-out successful.
//   })
//   .catch(function(error) {
//     // An error happened.
//   });

// firebase
//   .auth()
//   .signInWithEmailAndPassword(email, password)
//   .catch(function(error) {
//     console.log(error.message);
//     // Handle Errors here.
//     // var errorCode = error.code;
//     // var errorMessage = error.message;
//     // ...
//   });

// firebase.auth().onAuthStateChanged(function(user) {
//   if (user) {
//     console.log("Sign in");
//     console.log(user);
//     // User is signed in.
//     // var displayName = user.displayName;
//     // var email = user.email;
//     // var emailVerified = user.emailVerified;
//     // var photoURL = user.photoURL;
//     // var isAnonymous = user.isAnonymous;
//     // var uid = user.uid;
//     // var providerData = user.providerData;
//     // ...
//   } else {
//     console.log("Sign out");
//     // User is signed out.
//     // ...
//   }
// });

// // const providers = {
// //   googleProvider: new firebase.auth.GoogleAuthProvider()
// // };

export default App;
