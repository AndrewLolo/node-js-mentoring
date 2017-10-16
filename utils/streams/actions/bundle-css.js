const fs = require('fs');
const path = require('path');
const {promisify} = require('util');
const request = require('request');

function bundleCss(dirPath, urls = []) {
    promisify(fs.readdir)(dirPath)
        .then((files) => files.filter((file) => path.extname(file) === '.css'))
        .then((cssFiles) => [...cssFiles, ...urls])
        .then((resourses) => {
            const outputPath = path.join(dirPath, 'bundle.css');
            const destinationStream = fs.createWriteStream(outputPath);
            writeToStream(resourses, destinationStream);
        });
}

function writeToStream(resourses, writable) {
    if (!resourses.length) {
        return writable.end();
    }
    const currentResourse = resourses.pop();    
    const readable = initializeStream(currentResourse);
    readable.pipe(writable, {end: false});
    readable.on('end', () => {
        writable.write(';');
        writeToStream(resourses, writable);
    });
}

function initializeStream(resourse) {
    return (/^([\w]+:)?\/\/./).test(resourse)
        ? request.get(resourse)
        : fs.createReadStream(resourse);
}

module.exports = bundleCss;