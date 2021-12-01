import { initializeApp } from "@firebase/app";

import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyBKrLFNGYftnPV9RAEsbkyRzyGICO7fr4s",
  authDomain: "reserve-lab.firebaseapp.com",
  projectId: "reserve-lab",
  storageBucket: "reserve-lab.appspot.com",
  messagingSenderId: "974394128831",
  appId: "1:974394128831:web:d05c75014d571ddfedc90a",
};

initializeApp(firebaseConfig);

export const db = getFirestore();
