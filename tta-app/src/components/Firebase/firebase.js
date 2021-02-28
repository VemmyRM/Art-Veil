import app from 'firebase/app';
import firebase from 'firebase'
import 'firebase/auth';
import 'firebase/database';
//import 'firebase/storage';

const config = {
  apiKey: "AIzaSyCIqpmXP5DBSpBSntLbawhRqr7-yzjUCIg",
  authDomain: "techtogetherid.firebaseapp.com",
  projectId: "techtogetherid",
  storageBucket: "techtogetherid.appspot.com",
  messagingSenderId: "347562559995",
  appId: "1:347562559995:web:bd88827d76b13abddc635e",
  measurementId: "G-TV16B8BJPR"
};

export class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.database();
  }


  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);


    createQueue = (username, course) =>
    this.auth.createUserWithEmailAndPassword(username, course);

    doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);
  
    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
 
  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

      // *** User API ***
 
  user = uid => this.db.ref(`users/${uid}`);
 
  users = () => this.db.ref('users');
}

export default Firebase;
