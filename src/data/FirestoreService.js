import { initializeApp } from "firebase/app";
import { collection, doc, getDocs, getDoc, getFirestore, query, where, addDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC9iJ17BpXLO6HifKg78nJFrmtDYU-0qI0",
    authDomain: "proyecto-coder-react-93236.firebaseapp.com",
    projectId: "proyecto-coder-react-93236",
    storageBucket: "proyecto-coder-react-93236.firebasestorage.app",
    messagingSenderId: "80821435533",
    appId: "1:80821435533:web:a979f1d651e45bf3ccb6c4",
    measurementId: "G-RT8SRNX505"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

async function getData() {
    const productsRef = collection(db, "products")
    const productsSnapshot = await getDocs(productsRef)
    const docs = productsSnapshot.docs;
    const dataDocs = docs.map(item => {
        return { ...item.data(), id: item.id }
    })
    return dataDocs;
}

export async function getProductById(idParam) {
    const docRef = doc(db, "products", idParam)
    const docSnapshot = await getDoc(docRef);
    const docData = docSnapshot.data();
    const idDoc = docSnapshot.id
    return { ...docData, id: idDoc }
}

export async function getProductByCategory(categParam) {
    const productsRef = collection(db, "products")
    const q = query(productsRef, where("category", "==", categParam))
    const productsSnapshot = await getDocs(q)
    const docs = productsSnapshot.docs;
    const dataDocs = docs.map(item => {
        return { ...item.data(), id: item.id }
    })
    return dataDocs;
}

export async function createBuyOrder(orderData) {
    const orderRef = collection(db, "orders")
    const newDoc = await addDoc(orderRef, orderData)
    return newDoc
}

export async function exportProducts() {
    const productsRef = collection(db, "products")

    for (let item of db) {
        console.log("Exportando:", item.image)
        delete item.id;
        const newDoc = await addDoc(productsRef, item)
        console.log("doc creado", newDoc.id)
    }
}

export default getData