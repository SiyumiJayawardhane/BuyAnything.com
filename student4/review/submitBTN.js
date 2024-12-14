// submitBTN.js

document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.getElementById('submitReviewButton');
    submitButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default action
        alert('Your review has been submitted successfully!');
    });
});
