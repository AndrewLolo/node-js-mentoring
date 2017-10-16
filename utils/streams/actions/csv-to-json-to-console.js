const fs = require('fs');
const {CsvToJsonTransformer} = require('../transformers');

function csvToJsonToConsole(file) {
    return fs.createReadStream(file)
        .on('error', () => console.error('File access error'))
        .pipe(new CsvToJsonTransformer())
        .pipe(process.stdout);
}

module.exports = csvToJsonToConsole;