const outputFileToConsole = require('./file-to-console');
const csvToJsonToConsole = require('./csv-to-json-to-console');
const csvToJsonToFile = require('./csv-to-json-to-file');
const userInputToOutput = require('./input-to-output');
const bundleCss = require('./bundle-css');

module.exports = {
    'file-to-console': (file) => outputFileToConsole(file),
    'csv-to-json-to-console': (file) => csvToJsonToConsole(file),
    'csv-to-json-to-file': (file) => csvToJsonToFile(file),
    'input-to-output': () => userInputToOutput(),
    'bundle-css': (file, path, cssUrl) => bundleCss(path, [cssUrl])
}