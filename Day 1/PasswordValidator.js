// Regular expression pattern for password validation
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d])(?=.*[+=*%$£!>@~#_-:;/])([^\s])[a-zA-Z\d+=*%$£!>@~#_-:;/]{8,}$/;

// Function to validate a given password
function validatePassword(userPassword) {
  // Handles error message if password is an empty string
  if (typeof userPassword !== 'string' || userPassword.trim() === "") {
    return "Password must not be an empty string!";
  }
  // Check if the password matches the defined regular expression pattern
  if (passwordPattern.test(userPassword)) { 
    return "Valid Password"; 
  } else { 
    // Return an error message if the password does not meet the criteria
    return "Password must be at least 8 characters long and include at least one uppercase, one lowercase, a digit and a special character"; 
  }
}

// Example usage:
let userPassword = 'simplr123'; 
console.log(validatePassword(userPassword)); // Output: Password must be at least 8 characters long and include at least one uppercase, one lowercase, a digit and a special character
