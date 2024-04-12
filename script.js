// Get the submit button element
const submitButton = document.querySelector(".submit");

// Get the age input element
const ageInput = document.querySelector(".age");

// Get the taste input element
const tasteInput = document.querySelector(".taste");

// Add a click event listener to the submit button
submitButton.addEventListener("click", function() {
  // Get the values from the input fields
  const age = ageInput.value;
  const taste = tasteInput.value;

  // Create the message
  const message = "You are " + age + " years old and you like foods that taste " + taste + ".";

  // Display the message in an alert
  alert(message);
});