document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Retrieve and trim input values
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Initialize validation variables
        let isValid = true;
        const messages = [];

        // Username validation
        if (username === '') {
            isValid = false;
            messages.push('Username is required.');
        } else if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }

        // Email validation
        if (email === '') {
            isValid = false;
            messages.push('Email is required.');
        } else if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push('Email must include both "@" and "." characters.');
        }

        // Password validation
        if (password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long.');
        }

        // Display feedback
        feedbackDiv.style.display = 'block';
        if (isValid) {
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.color = '#28a745'; // Green for success
            form.reset(); // Clear form
        } else {
            feedbackDiv.innerHTML = messages.join('<br>'); // Show multiple errors
            feedbackDiv.style.color = '#dc3545'; // Red for errors
        }
    });
});