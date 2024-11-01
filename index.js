const reviewButton = document.getElementById("review");
const thankYouContainer = document.getElementById("container1");
let selectedFeedback = "";
const feedbackButtons = document.querySelectorAll(".fbtn");

// Show "Send Review" button and store selected feedback when a feedback button is clicked
feedbackButtons.forEach(button => {
    button.addEventListener('click', () => {
        selectedFeedback = button.textContent.trim(); // Get button text
        reviewButton.style.display = 'inline'; // Show "Send Review" button
    });
});

// Show Thank You message and selected feedback when "Send Review" is clicked
reviewButton.addEventListener("click", () => {
    document.getElementById("container").style.display='none';
    thankYouContainer.style.display = 'inline';
    document.getElementById("text4").innerText = `Feedback: ${selectedFeedback}`;
    feedbackButtons.forEach(button => button.style.display = 'none'); // Hide feedback buttons
    reviewButton.style.display = 'none'; // Hide "Send Review" button
});
