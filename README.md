# 100-Days-of-Consistency-
# Password Validation Script

This JavaScript script implements a function to validate passwords based on the following criteria:

* **Minimum Length:** At least 8 characters long.
* **Character Requirements:**
    * Must contain at least one uppercase letter.
    * Must contain at least one lowercase letter.
    * Must contain at least one digit.
    * Must contain at least one special character (from the defined set).
* **Whitespace Restriction:** Does not allow any whitespace characters.

**Usage:**

1. **Save the code:** Save the code as a `.js` file (e.g., `password_validator.js`).
2. **Run the script:** 
    * **In your browser's console:** 
        * Open the browser console (usually by pressing F12).
        * Paste the code and run it.
        * Define a `userPassword` variable and call the `validatePassword` function with the desired password string.
    * **Using Node.js:**
        * Save the code as a `.js` file.
        * Run it from your terminal using `node password_validator.js`.

**Example:**

```javascript
let userPassword = "MyStrongP@ssw0rd"; 
console.log(validatePassword(userPassword)); // Output: Valid Password