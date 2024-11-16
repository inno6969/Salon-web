const bookingDetails = {
    name: localStorage.getItem('name'),
    email: localStorage.getItem('email'),
    phone: localStorage.getItem('phone'),
    service: localStorage.getItem('service'),
    date: localStorage.getItem('date'),
    time: localStorage.getItem('time'),
    message: localStorage.getItem('message'),
    account: localStorage.getItem('account'),
    expiry: localStorage.getItem('expiry'),
    cvv: localStorage.getItem('cvv')
};

document.getElementById('receipt-name').textContent = bookingDetails.name || "N/A";
document.getElementById('receipt-email').textContent = bookingDetails.email || "N/A";
document.getElementById('receipt-phone').textContent = bookingDetails.phone || "N/A";
document.getElementById('receipt-service').textContent = bookingDetails.service || "N/A";
document.getElementById('receipt-date').textContent = bookingDetails.date || "N/A";
document.getElementById('receipt-time').textContent = bookingDetails.time || "N/A";
document.getElementById('receipt-message').textContent = bookingDetails.message || "N/A";
document.getElementById('receipt-account').textContent = '**** **** **** ' + bookingDetails.account.slice(-4) || "N/A";
document.getElementById('receipt-expiry').textContent = bookingDetails.expiry || "N/A";
document.getElementById('receipt-cvv').textContent = '***'; // Mask CVV for security
