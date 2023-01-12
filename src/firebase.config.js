import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDC36kH4ktFOkrsMDVl3fp0MQrmOHA_ezY",
  authDomain: "house-marketplace-app-6a5e0.firebaseapp.com",
  projectId: "house-marketplace-app-6a5e0",
  storageBucket: "house-marketplace-app-6a5e0.appspot.com",
  messagingSenderId: "418651461771",
  appId: "1:418651461771:web:61cf015816781e84495c8e"
};


initializeApp(firebaseConfig);

export const db = getFirestore()
