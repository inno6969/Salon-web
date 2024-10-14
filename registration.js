// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";

// Firebase configuration object
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
const auth = getAuth();
const database = getDatabase(app);

// Select form inputs
const first_name = document.getElementById('first_name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const confirm_password = document.getElementById('confirm_password');
const form = document.getElementById('registration-form');
const submitBtn = document.getElementById('submit');
const successMessage = document.getElementById('success-message');

// Add event listener for the form submission
submitBtn.addEventListener("click", function(event) {
    event.preventDefault();

    // Validate form
    if (first_name.value === '' || email.value === '' || phone.value === '' || password.value === '' || confirm_password.value === '') {
        alert("Please fill out all fields.");
        return;
    }
 //If password doest not match
    if (password.value !== confirm_password.value) {
        alert("Passwords do not match.");
        return;
    }

    // Create a new user with Firebase Authentication
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            const user = userCredential.user;

            // Save additional user data (e.g., name and phone) in Firebase Realtime Database
            set(ref(database, 'users/' + user.uid), {
                first_name: first_name.value,
                email: email.value,
                phone: phone.value,
                password: password.value,
                confirm_password : confirm_password.value,
            })
            .then(() => {
                // Show success message and redirect or reset form
                successMessage.style.display = 'block';
                setTimeout(() => {
                    successMessage.style.display = 'none';
                    form.reset();  // Reset the form
                }, 3000); // Hide message after 3 seconds
            })
            .catch((error) => {
                console.error("Error saving user data: ", error);
                alert("Error saving user data: " + error.message);
            });
        })
        .catch((error) => {
            console.error("Error creating user: ", error);
            alert("Error creating user: " + error.message);
        });
});
