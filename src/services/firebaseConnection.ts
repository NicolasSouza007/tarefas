import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB46_5m7OyPCLhzRVxDiIf3rHy__KzB1XU",
  authDomain: "tarefasnick.firebaseapp.com",
  projectId: "tarefasnick",
  storageBucket: "tarefasnick.firebasestorage.app",
  messagingSenderId: "780197225614",
  appId: "1:780197225614:web:577dff6f4051f4dbfc15df",
};

const firebaseapp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseapp);

export { db };
