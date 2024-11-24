const { generateHtmlFile } = require("../html/create");

const testCreateHtmlFile = () => {
     console.log("*** Testing the file creation function for html ***");
     const testPassed = generateHtmlFile('dushime');
     if(testPassed) console.log("file created");
     else console.log("File creation failed. check the console for errors");

}

module.exports = {
     testCreateHtmlFile
}