import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAXv5caHRp-RnjOJp7l68t9PGgHu6yWmEs",
  authDomain: "insta-clone-709cf.firebaseapp.com",
  projectId: "insta-clone-709cf",
  storageBucket: "insta-clone-709cf.appspot.com",
  messagingSenderId: "1052668160820",
  appId: "1:1052668160820:web:2fa6e2d958268050609361"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const storage=firebase.storage();
  const provider=new firebase.auth.GoogleAuthProvider();
  export {db,auth,provider,storage};