const fs = require('fs');

function outputFileToConsole(file) {
    return fs.createReadStream(file)
        .on('error', () => console.error('File access error'))
        .pipe(process.stdout);
}

module.exports = outputFileToConsole;