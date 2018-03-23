import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDrzbJ0zoPf0bJbIYeFO7Rhacv7IZbg0KA",
  authDomain: "quiz-806a6.firebaseapp.com",
  databaseURL: "https://quiz-806a6.firebaseio.com",
  projectId: "quiz-806a6",
  storageBucket: "",
  messagingSenderId: "806098474699"
  };

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default }
