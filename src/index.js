import firebase from 'react-native-firebase'
    firebase.initializeApp({
  apiKey: "AIzaSyBnvYvXXW--4bHvjOhhwdW3vKZFGL6N_F0",
  authDomain: "forms-2a62b.firebaseapp.com",
  projectId: "forms-2a62b",
  storageBucket: "forms-2a62b.appspot.com",
  messagingSenderId: "18468383313",
  appId: "1:18468383313:web:ca516da968e984017da670",
  measurementId: "G-DWWFQXJ846"
});

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });