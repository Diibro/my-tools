const path = require('path');

const roorDir = path.resolve(__dirname, '../');

const getPath = (fileapath) => {
     return path.join(roorDir, fileapath);
} 

const getPathWithFolder = (filename, foldername) => {
     return path.join(roorDir, foldername,filename);
}

module.exports = {getPath, getPathWithFolder}