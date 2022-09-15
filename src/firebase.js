import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyCzQ-k11ba7gnRa2KXB1cMnjNCzA6wpKXU",
  authDomain: "netflixapp-153ce.firebaseapp.com",
  projectId: "netflixapp-153ce",
  storageBucket: "netflixapp-153ce.appspot.com",
  messagingSenderId: "105975477156",
  appId: "1:105975477156:web:ab57650e3d7505e68a8731"
};

const firebaseapp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth } ; 