
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAVoglue8KM9oldjFpfvz4-6fkephcWRok",
    authDomain: "proyecto-final-2d5b5.firebaseapp.com",
    projectId: "proyecto-final-2d5b5",
    storageBucket: "proyecto-final-2d5b5.appspot.com",
    messagingSenderId: "695759940517",
    appId: "1:695759940517:web:bd70e835bea557900e964c"
};

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)