  import * as firebase from 'firebase';
  
  var config = {
    apiKey: "AIzaSyCAhcqtiofC_3gFEzFPK4uAukfayu8bx18",
    authDomain: "blood-bank-f5c95.firebaseapp.com",
    databaseURL: "https://blood-bank-f5c95.firebaseio.com",
    projectId: "blood-bank-f5c95",
    storageBucket: "blood-bank-f5c95.appspot.com",
    messagingSenderId: "745309064976"
  };
  firebase.initializeApp(config);
  export default firebase ;