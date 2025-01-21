/**
 * Regular expression pattern to match email addresses.
 * @type {RegExp}
 */
const emailPattern = /[a-zA-Z0-9-._+]+@[a-zA-z0-9.-]+\.[a-zA-Z]{2,}/gi
// Extracts email addresses from a given text.
function extractEmails (text){
     // Check if the input is a string and not empty
    if (typeof text !== "string" || text === "" ) {
        throw new Error ("Input must be a string and not empty");
    }
     // Match and return email addresses or an empty array if none found
    return text.match(emailPattern) || [];
}
// Sample text containing multiple email addresses
let text = "For enquiries, contatact us on +234846921154 or send us a mail on onlyfan@fit.org, winforall098@homemail.com";
console.log(extractEmails(text));