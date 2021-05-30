import firebase from 'firebase';
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDOkA7o2OoStcT7t9UXU5YY2TFbe1DHzlY",
    authDomain: "books-81dc1.firebaseapp.com",
    projectId: "books-81dc1",
    storageBucket: "books-81dc1.appspot.com",
    messagingSenderId: "485746668697",
    appId: "1:485746668697:web:911e85d8512e176223f408"
};
// Initialize Firebase
try {
    firebase.initializeApp(firebaseConfig);
} catch(err){
    if (!/already exists/.test(err.message)) {
        console.error('Firebase initialization error', err.stack)}
}

const fire = firebase;
export default fire;