const fs = require('fs');
const { readHtmlData } = require('./read');
const { getPath } = require('../dirFuncs');

const generateHtmlFile = (name) => {
     //checking if the name is valid
     if(!name) return "name cannot be empty";

     //getting the template data for a normal html
     const templateData = readHtmlData("templates/template.html");
     if(!templateData) return console.log("Error creating html file: template file not found");

     //generating a processed name for the html file
     const filename = name.split(' ').join('-');
     
     //creating the file
     let fileCreated = false;
     fs.writeFile(getPath(`htmlFiles/${filename}.html`), templateData,(err => {
          if(err) console.log(err);
          fileCreated = true
     }))

     //returning file created check
     return fileCreated;
}

module.exports = {
     generateHtmlFile
}