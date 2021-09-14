import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBc6pOtcH2bPtMvntFpKE3KD6eIFX_-VGw",
  authDomain: "vue-final-project-70997.firebaseapp.com",
  databaseURL:
    "https://vue-final-project-70997-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "vue-final-project-70997",
  storageBucket: "vue-final-project-70997.appspot.com",
  messagingSenderId: "877149128655",
  appId: "1:877149128655:web:da76abbb1bea770a00b4ba",
  measurementId: "G-XV4YPHHGTK",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// users queries
const usersCollection = db.collection("users");

export const createUser = (user) => {
  return usersCollection.add(user);
};

export const getUser = async (id) => {
  const user = await usersCollection.doc(id).get();
  return user.exists ? user.data() : null;
};

export const updateUser = (id, user) => {
  return usersCollection.doc(id).update(user);
};

export const deleteUser = (id) => {
  return usersCollection.doc(id).delete;
};

export const useLoadUsers = async () => {
  const response = await usersCollection.get();
  const data = response.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return data;
};

export const validationLogin = async (username, password) => {
  const response = await usersCollection.get();
  const data = response.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  const userIdx = data.findIndex((user) => user.username === username);
  if (userIdx === -1) {
    return false;
  } else {
    if (data[userIdx].password !== password) {
      return false;
    }
  }
  return data[userIdx].id;
};

// task queries
export const useLoadTask = async (id) => {
  const user = await usersCollection.doc(id).get();
  const isUserExist = user.exists ? user.data() : null;

  return isUserExist;
};

export const addNewTask = async (userId, newTask) => {
  await usersCollection.doc(userId).update({
    tasks: firebase.firestore.FieldValue.arrayUnion(newTask),
  });
};
