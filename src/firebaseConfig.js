// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app';

// Add the Firebase products that you want to use
import 'firebase/firestore';

import './App.css';

const firebaseConfig = {
  apiKey: 'AIzaSyCDqdFpiCFRjhNHV21K_-tVLTtkLxfyeR4',
  authDomain: 'snoopdoggyjog.firebaseapp.com',
  databaseURL: 'https://snoopdoggyjog.firebaseio.com',
  projectId: 'snoopdoggyjog',
  storageBucket: 'snoopdoggyjog.appspot.com',
  messagingSenderId: '139231448717',
  appId: '1:139231448717:web:0a32f64075b8e7a1',
};

firebase.initializeApp(firebaseConfig);
