// Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHhN7f_lOlBevfGGaTuHbBuMXPnaEqrek",
  authDomain: "salon-blissful.firebaseapp.com",
  databaseURL: "https://salon-blissful-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "salon-blissful",
  storageBucket: "salon-blissful.appspot.com",
  messagingSenderId: "760708014447",
  appId: "1:760708014447:web:e5ece56fdc63ea4893489a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// inputs
const form = document.getElementById("login-form");
const email = document.getElementById("email");
const password = document.getElementById("password");

//  Prevent the form from submitting by Default
form.addEventListener("submit", function (event) {
    event.preventDefault();  

    const userEmail = email.value;
    const userPassword = password.value;

    // Firebase Authentication for Sign in with email and password
    signInWithEmailAndPassword(auth, userEmail, userPassword)
        .then((userCredential) => {
            // Successful sign-in
            const user = userCredential.user;
            console.log("Signed in as:", user.email);
            // Redirect to a welcome page or dashboard
            window.location.href = "welcome.html"; // Go to the next page welcome page
        })
        .catch((error) => {
            // Handle errors
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Error signing in:", errorCode, errorMessage);
            alert("Login failed: " + errorMessage);  // Display error message to the user
        });
});
