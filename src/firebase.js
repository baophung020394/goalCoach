import * as firebase from "firebase";

var config = {
  apiKey: "AIzaSyCLDXF5Zw3KOjM8qlFQLyE7ClnRkSXwzpk",
  authDomain: "goalcoach-54d99.firebaseapp.com",
  databaseURL: "https://goalcoach-54d99.firebaseio.com",
  projectId: "goalcoach-54d99",
  storageBucket: "goalcoach-54d99.appspot.com",
  messagingSenderId: "208398195954"
};
export const firebaseApp = firebase.initializeApp(config);
