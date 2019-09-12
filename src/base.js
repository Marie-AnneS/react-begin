import Rebase from "re-base";
import firebase from "firebase";

// ATTENTION Doit mettre le apiKey, authDomain en brut video 24 14:36
const firebaseApp = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.AUTH_DOMAIN_FIREBASE,
  databaseURL: "https://catch-of-the-day-seim.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

// this is a named export
export { firebaseApp };

//this is a default export
export default base;

