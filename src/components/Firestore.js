import firebase from "firebase";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBQx-wf_VkmnZsW2V7rS2eCK_m0oZf9e7o",
  authDomain: "kaustik-frontend.firebaseapp.com",
  databaseURL: "https://kaustik-frontend.firebaseio.com",
  projectId: "kaustik-frontend",
  storageBucket: "kaustik-frontend.appspot.com",
  messagingSenderId: "734305366566"
};
firebase.initializeApp(config);

export default firebase;
