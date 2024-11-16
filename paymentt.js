document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get payment data
    const accountNumber = document.getElementById('account-number').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvv = document.getElementById('cvv').value;

    // Store payment data in local storage
    localStorage.setItem('account', accountNumber);
    localStorage.setItem('expiry', expiryDate);
    localStorage.setItem('cvv', cvv);

    // Show success message
    document.getElementById('success-message').style.display = 'block';

    // Redirect to the receipt page after a short delay
    setTimeout(function() {
        window.location.href = 'receipt.html';
    }, 3000); // Redirect after 3 seconds
});
