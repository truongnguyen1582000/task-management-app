import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAu7f885mShDGtjGND1brN7LtCLirdv-jo",
  authDomain: "vue-project-50f62.firebaseapp.com",
  projectId: "vue-project-50f62",
  storageBucket: "vue-project-50f62.appspot.com",
  messagingSenderId: "989059856907",
  appId: "1:989059856907:web:428b8a60c31411b39d250e",
  measurementId: "G-07NRP72SBH",
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
  return data[userIdx];
};

export const getUserData = async (id) => {
  const response = await usersCollection.get();
  const data = response.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  const userIdx = data.findIndex((user) => user.id === id);
  return data[userIdx];
};

export const getAllUserData = async () => {
  const response = await usersCollection.get();
  const data = response.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return data;
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

export const updateTask = async (userId, tasks) => {
  await usersCollection.doc(userId).update({
    tasks: [...tasks],
  });
};
