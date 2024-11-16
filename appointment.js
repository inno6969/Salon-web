// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// Firebase configuration (replace with your own configuration details)
const firebaseConfig = {
    apiKey: "AIzaSyAHhN7f_lOlBevfGGaTuHbBuMXPnaEqrek",
    authDomain: "salon-blissful.firebaseapp.com",
    databaseURL: "https://salon-blissful-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "salon-blissful",
    storageBucket: "salon-blissful.appspot.com",
    messagingSenderId: "760708014447",
    appId: "1:760708014447:web:e5ece56fdc63ea4893489a"
};
 
        const form = document.getElementById('appointment-form');

        form.addEventListener('submit', async (event) => {
            event.preventDefault();  // Prevent the form from submitting in the usual way

            // Gather form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const service = document.getElementById('service').value;
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;
            const message = document.getElementById('message').value;

            // Create an object for the appointment
            const appointmentData = {
                name: name,
                email: email,
                phone: phone,
                service: service,
                date: date,
                time: time,
                message: message,
                timestamp: firebase.firestore.Timestamp.now()  // Current timestamp
            };

            try {
                // Save the appointment data to Firestore
                const appointmentsRef = db.collection('');
                await appointmentsRef.add(appointmentData);

                // Show success message
                document.getElementById('success-message').style.display = 'block';
                form.reset();  // Reset the form after successful submission
            } catch (error) {
                console.error("Error adding appointment: ", error);
                // Show error message
                document.getElementById('error-message').style.display = 'block';
            }
        });
    

