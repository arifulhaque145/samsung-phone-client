import { initializeApp } from "@firebase/app";
import firebaseConfig from "./firebaseConfig";

const initalizeApp = () => initializeApp(firebaseConfig);

export default initalizeApp;
