const fs = require('fs');
const { getPath } = require('../dirFuncs');
const readHtmlData = (filePath) => {
     let fileData = null;
     console.log(getPath(filePath));
     if(filePath){
          fs.readFile(getPath(filePath),'utf-8', (error, data) => {
               if(error) console.log(error);
               else fileData = data
          })
     }    
     console.log(fileData)
     return fileData;
}

module.exports = {
     readHtmlData
}