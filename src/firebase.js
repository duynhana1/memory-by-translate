import * as firebase from "firebase/app";
import firebaseConfig from "./firebase.config";
require("firebase/firestore");
// Initialize Firebase
export let app = firebase.initializeApp(firebaseConfig);
export let db = firebase.firestore();

// db.collection("users")
//   .add({
//     first: "Alan",
//     middle: "Mathison",
//     last: "Turing",
//     born: 1912
//   })
//   .then(function(docRef) {
//     console.log("Document written with ID: ", docRef.id);
//   })
//   .catch(function(error) {
//     console.error("Error adding document: ", error);
//   });
db.collection("cities")
  .doc("LA")
  .set({
    name: "Los Angeles",
    state: "CA",
    country: "USA"
  })
  .then(function() {
    console.log("Document successfully written!");
  })
  .catch(function(error) {
    console.error("Error writing document: ", error);
  });

db.collection("cities")
  .get()
  .then(querySnapshot => {
    querySnapshot.forEach(doc => {
      console.log(`${doc.id} =>`, doc.data());
    });
  });
