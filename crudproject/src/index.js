import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'firebase/firestore'
import firebase from 'firebase/app';

var firebaseConfig = {
  apiKey: "AIzaSyDXR4mgiOi0XgeOV7c7oBEqlfRvMNzPkFU",
  authDomain: "crued-react.firebaseapp.com",
  projectId: "crued-react",
  storageBucket: "crued-react.appspot.com",
  messagingSenderId: "149871555868",
  appId: "1:149871555868:web:2cc69709341d6c5732f6d9",
  measurementId: "G-MMZEY529K8"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
