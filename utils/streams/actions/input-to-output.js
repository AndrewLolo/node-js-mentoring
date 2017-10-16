const {ToUpperCaseTransformer} = require('../transformers');

function userInputToOutput() {
    return process.stdin
        .pipe(new ToUpperCaseTransformer())
        .pipe(process.stdout);
}

module.exports = userInputToOutput;