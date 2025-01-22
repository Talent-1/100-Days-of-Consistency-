// define the elements
const submitBtn = document.getElementById('validate');
const errorMsg = document.getElementById('errorMsg');
const phoneNumberInput = document.getElementById('phone-number');
// Add event listener to the submit button
submitBtn.addEventListener('click', (event) => {
  event.preventDefault();// Prevents the form from submitting
    // Validate phone number
  const phoneNumber = phoneNumberInput.value;
  //RegExp pattern for phone number
  const phoneNumPattern = /^\+\d{1,3}[-.]\d{3}[-.]\d{3}[-.]\d{4}$/;
  // Check if the phone number is valid
  if (phoneNumPattern.test(phoneNumber)) {
    // Display a success message if the phone number is valid
    errorMsg.textContent = 'Phone number is valid';
    errorMsg.style.color = 'green';
    errorMsg.style.display = 'block';
  } else {
    // Display an error message if the phone number is invalid
    errorMsg.textContent = 'Phone number is invalid, please enter a valid phone number';
    errorMsg.style.color = 'red';
    errorMsg.style.display = 'block';
  }
}