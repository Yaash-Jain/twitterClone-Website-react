import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCvP9OaKB9_cQbJ1fFq3jpiP1z3nl-9bFY",
    authDomain: "twitter-clone1-9c982.firebaseapp.com",
    projectId: "twitter-clone1-9c982",
    storageBucket: "twitter-clone1-9c982.appspot.com",
    messagingSenderId: "530931763292",
    appId: "1:530931763292:web:384a2d6fe8a0358ae17e99"
};

const firebaseApp = initializeApp(firebaseConfig);
const database = getFirestore(firebaseApp);

export default database;