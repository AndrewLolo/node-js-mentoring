const fs = require('fs');
const path = require('path');
const {CsvToJsonTransformer} = require('../transformers');

function csvToJsonToFile(file) {
    const dirname = path.dirname(file);
    const baseName = path.basename(file, '.csv');
    const outputPath = path.join(dirname, `${baseName}.json`);

    return fs.createReadStream(file)
        .on('error', () => console.error('File access error'))
        .pipe(new CsvToJsonTransformer())
        .pipe(fs.createWriteStream(outputPath))
        .on('error', () => console.error('File access error'))
}

module.exports = csvToJsonToFile;