async function fetchUserData() {
    const dataContainer = document.getElementById('api-data');
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const users = await response.json();

        // Clear the loading message
        dataContainer.innerHTML = '';

        // Create the <ul> element
        const userList = document.createElement('ul');

        // Loop through users and create <li> elements
        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = user.name;
            userList.appendChild(li);
        });

        // Append the user list to the container
        dataContainer.appendChild(userList);

    } catch (error) {
        // Clear existing content and display error message
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
        console.error('Error fetching user data:', error);
    }
}

// Ensure fetchUserData runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);