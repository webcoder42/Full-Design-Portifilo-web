import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDXO1kNNwNipaIB7u73Z0SaMh4ameOmIp8",
  authDomain: "portfilo-website-1e323.firebaseapp.com",
  projectId: "portfilo-website-1e323",
  storageBucket: "portfilo-website-1e323.appspot.com",
  messagingSenderId: "273722061509",
  appId: "1:273722061509:web:bb0ab9e6c2f2117e6c36ac",
  measurementId: "G-2TQPN69DD0",
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore();
