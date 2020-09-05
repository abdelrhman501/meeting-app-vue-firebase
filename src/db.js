import firebase from "firebase";

// web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBwOHAbxn6ESwc1ZCn34LE_LlyrQ1iXu8U",
    authDomain: "meetings-67ffb.firebaseapp.com",
    databaseURL: "https://meetings-67ffb.firebaseio.com",
    projectId: "meetings-67ffb",
    storageBucket: "meetings-67ffb.appspot.com",
    messagingSenderId: "244797266733",
    appId: "1:244797266733:web:86a6b6d6ae47062d3fd1a4"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();
