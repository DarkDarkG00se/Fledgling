import firebase from 'firebase';
// Initialize Firebase
var config = {
  apiKey: 'AIzaSyBwr7tqvMEEqFYQYT7IFL5zi3272p2XRyc',
  authDomain: 'fledgling-9ec75.firebaseapp.com',
  databaseURL: 'https://fledgling-9ec75.firebaseio.com',
  projectId: 'fledgling-9ec75',
  storageBucket: 'fledgling-9ec75.appspot.com',
  messagingSenderId: '419593792961'
};
var fire = firebase.initializeApp(config);
export default fire;
