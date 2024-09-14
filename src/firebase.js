import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDhfxxOC7E6GsayJ65SZwWFMmkn6nqqzyw",
  authDomain: "facebook-clone-9af2a.firebaseapp.com",
  databaseURL: 'https//facebook-clone-9af2a.firebaseio.com',
  projectId: "facebook-clone-9af2a",
  storageBucket: "facebook-clone-9af2a.appspot.com",
  messagingSenderId: "914263309177",
  appId: "1:914263309177:web:c42a3d48ab024c0b57cda8",
  measurementId: "G-HQ8DP1F2RF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
