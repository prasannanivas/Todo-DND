import {initializeApp} from 'firebase/app';
import { getFirestore, serverTimestamp } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCk9eGbChn0m3hxhzwtfq1QrsA70OxLmCI",
    authDomain: "todo-board-3e2b4.firebaseapp.com",
    projectId: "todo-board-3e2b4",
    storageBucket: "todo-board-3e2b4.appspot.com",
    messagingSenderId: "1025904661747",
    appId: "1:1025904661747:web:ff43c7214bc1ef1dd25386"
  };


  const app = initializeApp(firebaseConfig)
  const db = getFirestore();
  const timestamp = serverTimestamp();

  export {app, db, timestamp};