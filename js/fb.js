import { initializeApp } from 'firebase/app';
import { getFirestore, collection, onSnapshot, setDoc, deleteDoc, doc, query, where, getDoc, updateDoc } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB9_T5iScjZP7wU0pB7wfgEKNErEzwTN8M',
  authDomain: 'cocktail-app-ba857.firebaseapp.com',
  projectId: 'cocktail-app-ba857',
  storageBucket: 'cocktail-app-ba857.appspot.com',
  messagingSenderId: '514832182243',
  appId: '1:514832182243:web:5edf9fa9a0890543db8ed6',
  measurementId: 'G-P7BN055J9Y',
};

class firebase {
  constructor(collectionName) {
    this.collectionName = collectionName;
  }
}

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

// Get All
export const getDocuments = (collectionName, filterBy, queryString) => {
  const colRef = collection(db, collectionName);
  const q = query(colRef, where(filterBy, '==', queryString));
  onSnapshot(colRef, (snapshot) => {
    let data = [];
    snapshot.docs.forEach((doc) => data.push({ ...doc.data(), id: doc.id }));
    console.log(data);
  });
};
// Post
export const addDocument = async (collectionName, data) => {
  try {
    const colRef = doc(db, collectionName, data.id);
    const response = await setDoc(colRef, data);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
// Delete
export const deleteDocument = async (collectionName, id) => {
  const docRef = doc(db, collectionName, id);

  try {
    const response = await deleteDoc(docRef);
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};
// Get One
export const getOneDocument = async (collectionName, id) => {
  const colRef = collection(db, collectionName, id);
  const response = await getDoc(colRef);
  console.log(response);
};

export const updateDocument = async (collectionName, id, data) => {
  const docRef = doc(db, collectionName, id);
  updateDoc(docRef, { data });
};

export const signup = async (email, password) => {
  const response = await createUserWithEmailAndPassword(auth, email, password);
  console.log(response.user);
};

export const login = async (email, password) => {
  const response = await signInWithEmailAndPassword(auth, email, password);
};

export const logout = async () => {
  const response = await signOut(auth);
};

export const onAuthChange = async () => {
  onAuthStateChanged(auth, () => {
    console.log('auth state changed');
  });
};
