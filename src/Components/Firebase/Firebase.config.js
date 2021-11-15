import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.init";

const fireInit=()=>{
    initializeApp(firebaseConfig);
}

export default fireInit;