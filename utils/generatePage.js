/* --------------------------------- */
/* Project  : Team Profile Generator */
/* File     : generatePage.js        */
/* Author   : Vicente Garcia         */
/* Date     : 04/09/2022             */
/* Modified : 04/10/2022             */
/* --------------------------------- */
const fs = require('fs');
const writeFile = fileContent => {
    return fs.writeFile('./dist/index.html', fileContent, errorWrite => {
        // If there's an error, reject the Promise and send the error to the Promise's `.catch()` method
        if (errorWrite) {
            console.log(errorWrite);
            // Return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
            return;
        }
    });
};
const copyFile = () => {
    return fs.copyFile('./src/style.css', './dist/style.css', errorCopy => {
        // If there's an error, reject the Promise and send the error to the Promise's `.catch()` method
        if (errorCopy) {
            // Return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
            console.log(errorCopy);
            return;
        }
        // If everything went well, resolve the Promise and send the successful data to the `.then()` method
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
module.exports = { writeFile, copyFile };