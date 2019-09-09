import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC-wMLGeSRMl9HugblbuG094gNCRs3A1vo",
  authDomain: "catch-of-the-day-mariaseim.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-mariaseim.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

// this is a named export
export { firebaseApp };

//this is a default export
export default base;

