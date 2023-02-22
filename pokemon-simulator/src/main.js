import { createApp } from 'vue'
import { getDatabase, ref, child, get } from "firebase/database";
import { initializeApp } from "firebase/app";


import App from './App.vue'

createApp(App).mount('#app')

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAblFxyVGshHCENaqUsS6UGa_IxaAiUjkE",
  authDomain: "fantasticbeasts-showdown.firebaseapp.com",
  databaseURL: "https://fantasticbeasts-showdown-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fantasticbeasts-showdown",
  storageBucket: "fantasticbeasts-showdown.appspot.com",
  messagingSenderId: "38015170978",
  appId: "1:38015170978:web:a5149b6ba80866737bdafb"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const database = getDatabase(firebase);
const dbRef = ref(database);
get(child(dbRef, `creatureSpecies/`)).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});