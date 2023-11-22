import { collection, getDocs, query, doc, addDoc, deleteDoc, updateDoc } from "firebase/firestore"
import { db } from "../config/firebase/firebaseDB";


//CONSULTA
export const getProductosNavidadData = async() =>{
    const result = await getDocs(query(collection(db, 'producto-navidad')));
    return result;
}