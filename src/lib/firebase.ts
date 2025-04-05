// src/lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Configuración de tu Firebase (verificada)
const firebaseConfig = {
  apiKey: "AIzaSyBOUU_j6Q3lNVuT7nW-FsMZ_O_-Y9mFkiY",
  authDomain: "merakytecnology.firebaseapp.com",
  projectId: "merakytecnology",
  storageBucket: "merakytecnology.appspot.com", 
  messagingSenderId: "1093275686823",
  appId: "1:1093275686823:web:52894a28df9585fc6cc882"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar Auth para usar en otras partes
export const auth = getAuth(app);
// Inicializa la app solo si no está inicializada
export { app };
