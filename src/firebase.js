import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxzccm8Fx3N9U_rlwDX6asN5da7jw3YaY",
  authDomain: "resume-cf334.firebaseapp.com",
  projectId: "resume-cf334",
  storageBucket: "resume-cf334.appspot.com",
  messagingSenderId: "761293129677",
  appId: "1:761293129677:web:b46bd7f26fcabd9d06a684"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();