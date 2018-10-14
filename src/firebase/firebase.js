import firebase from 'firebase';
import 'firebase/auth';


var config = {
  apiKey: "AIzaSyAfuEFWmsjU7AifzBLomYYd459Pz02zysE",
  authDomain: "online-chat-6203d.firebaseapp.com",
  databaseURL: "https://online-chat-6203d.firebaseio.com",
  projectId: "online-chat-6203d",
  storageBucket: "online-chat-6203d.appspot.com",
  messagingSenderId: "107912395345"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

  const auth = firebase.auth();

  export {
    auth,
  };