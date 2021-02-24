import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQUCxQyw8gr1bcX3jzW-Rj3NbCY1gqm0s",
  authDomain: "crudusers-native.firebaseapp.com",
  projectId: "crudusers-native",
  storageBucket: "crudusers-native.appspot.com",
  messagingSenderId: "328354682208",
  appId: "1:328354682208:web:715837faae5a3534dd7a05",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const deleteToDoById = async () => {
  const dbRef = firebase.db.collection("users").doc(props.route.params.userId);
  await dbRef.delete();
  props.navigation.navigate("UserList");
};

const updateToDo = async () => {
  const dbRef = firebase.db.collection("todos").doc(user.id);
  await dbRef.set({
    name: todo.name,
    description: todo.email,
    date: todo.phone,
    status: todo.status,
  });
  setToDo(initialState);
  props.navigation.navigate("ToDosList");
};

const getToDoById = async (id) => {
  const dbRef = firebase.db.collection("todos").doc(id);
  const doc = await dbRef.get();
  const todo = doc.data();
  setToDo({
    ...todo,
    id: doc.id,
  });
  setLoading(false);
};

const addToDo = async (state) => {
  if (state.name === "") {
    alert("Plese complete the name field");
  } else {
    try {
      await firebase.firestore().collection("todos").add({
        name: state.name,
        description: state.description,
        date: state.date,
        status: state.status,
      });
      props.navigation.navigate("ToDoList");
    } catch (error) {
      console.log(error);
    }
  }
};

const addUser = async (state) => {
  if (state.username === "") {
    alert("Plese complete the name field");
  } else {
    try {
      await firebase.firestore().collection("todos").add({
        username: state.username,
        pass: state.pass,
        todos: {},
      });
      props.navigation.navigate("ToDoList");
    } catch (error) {
      console.log(error);
    }
  }
};

const db = firebase.firestore();
export default {
  firebase,
  getToDoById,
  updateToDo,
  deleteToDoById,
  addToDo,
  addUser,
  db,
};
