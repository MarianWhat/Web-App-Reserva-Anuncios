import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import './index.css';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';
// Initialize Firebase
firebase.initializeApp({
  apiKey: 'AIzaSyCEV44bwQis9WuCSFDqI_cIPRmflKxs4Gg',
  authDomain: 'web-app-reserva-de-anuncios.firebaseapp.com',
  databaseURL: 'https://web-app-reserva-de-anuncios.firebaseio.com',
  projectId: 'web-app-reserva-de-anuncios',
  storageBucket: 'web-app-reserva-de-anuncios.appspot.com',
  messagingSenderId: '964377975348',
  appId: '1:964377975348:web:239e2e054b2dbf80660861',
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
