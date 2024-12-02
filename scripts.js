// Add event listener for form submission
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting
    
    // Optional: You can add form validation or checks here
    // If valid, redirect to another page
    window.location.href = "ontcyinv/main_inv.html";
});
