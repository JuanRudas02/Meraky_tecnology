// src/lib/firestore.ts

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { app } from "lib/firebase"; // Asegúrate de que la ruta sea correcta
import { User } from "firebase/auth"; // Importa el tipo User de Firebase Auth

const db = getFirestore(app);

/**
 * Crea un usuario en Firestore si no existe.
 * @param user Objeto de usuario autenticado de Firebase.
 */
export async function createUserIfNotExists(user: User): Promise<void> {
  if (!user || !user.uid || !user.email) {
    console.error("❌ Usuario inválido o datos incompletos.");
    return;
  }

  try {
    const userRef = doc(db, "usuarios", user.uid);
    const docSnap = await getDoc(userRef);

    if (!docSnap.exists()) {
      await setDoc(userRef, {
        uid: user.uid,
        email: user.email,
        planActivo: "free",
        fechaInicio: new Date().toISOString(), // Guardar fecha en formato ISO
        freeTrial: true,
      });
      console.log("✅ Usuario creado en Firestore");
    } else {
      console.log("ℹ️ Usuario ya existe en Firestore");
    }
  } catch (error) {
    console.error("❌ Error al crear el usuario en Firestore:", error);
  }
}