import React, { Component } from 'react';
import Signup from './auth/SignUp';
import SignIn from './auth/SignIn';
import ProfilePage from './profilePage/profileHome';

import { PageSwitcher, PageSwitcherTitle } from './auth/PageSwitch';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app';

// Add the Firebase products that you want to use
import 'firebase/firestore';
import 'firebase/auth';

import './App.css';

// Initialise Firebase
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
export const db = firebase.firestore();
export const auth = firebase.auth();

// db.collection('test')
//   .get()
//   .then(snapshot => {
//     snapshot.forEach(doc => {
//       console.log(doc.id, doc.data());
//     });
//   });

// const signedInUser = firebase
//   .auth()
//   .onAuthStateChanged(function(user) {
//     if (user) {
//       console.log('user logged in: ', user);
//       true;
//     } else {
//       console.log('user logged out');
//       false;
//     }
//   });

// make auth and firestore references

// db.collection("test").add({
//   name: "Ray",
// }).then(result => {
//   console.log("success!");

//   const id = result.id;

//   localStorage.setItem("userID", id);
// }).catch(error => {
//   console.error('fck');
//   console.error(error);
// });

const userID = db
  .collection('user')
  .get()
  .then(snapshot => {
    snapshot.forEach(doc => {
      console.log(doc.id, doc.data());
    });
  });

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: '' };
  }

  callAPI() {}
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App__Aside" />

          <div className="App__Form">
            <PageSwitcher />
            <PageSwitcherTitle />

            <Route exact path="/sign-up" component={Signup} />

            <Route exact path="/sign-in" component={SignIn} default />

            <Route
              exact
              path="/profile(/:userID)"
              component={ProfilePage}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
