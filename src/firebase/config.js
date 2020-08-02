import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDo5RF_h9Oi9fubrqIvH8lV8ToygXeGuEc',
  authDomain: 'fir-test-db015.firebaseapp.com',
  databaseURL: 'https://fir-test-db015.firebaseio.com',
  projectId: 'fir-test-db015',
  storageBucket: 'fir-test-db015.appspot.com',
  messagingSenderId: '324384768182',
  appId: '1:324384768182:web:9bf3c2ef0eea2a9ee86617',
  measurementId: 'G-7EWX13LRH4',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const firestoreTimestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, firestoreTimestamp };
