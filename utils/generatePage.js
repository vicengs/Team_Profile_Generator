/* --------------------------------- */
/* Project  : Team Profile Generator */
/* File     : generatePage.js        */
/* Author   : Vicente Garcia         */
/* Date     : 04/09/2022             */
/* Modified : 04/10/2022             */
/* --------------------------------- */
// Add access to fs functions & methods to manage (create) files
const fs = require('fs');
// Function to generate HTML file
const writeFile = fileContent => {
    // Call fs function called writeFile to: 
    // Create index.md file (path and name first argument)
    // With the data (in second argument)
    // And lastly an error control function
    return fs.writeFile('./dist/index.html', fileContent, errorWrite => {
        // If there is an error, show the error and return
        if (errorWrite) {
            console.log(errorWrite);
            return;
        }
    });
};
// Function to copy CSS file
const copyFile = () => {
    // Call fs function called copyFile to: 
    // Copy style.css file from (path and name first argument)
    // To (path and name in second argument)
    // And lastly an error control function
    return fs.copyFile('./src/style.css', './dist/style.css', errorCopy => {
        // If there is an error, show the error and return
        if (errorCopy) {
            console.log(errorCopy);
            return;
        }
        // If everything went well, return message
        console.log(`
  =====================================
  Team Profile Page index.html created!
  -------------------------------------
    Review distribution folder (dist)
  =====================================
`
        );
    });
};
// Export functions write and file to invoke out
module.exports = { writeFile, copyFile };