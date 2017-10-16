const through2 = require('through2');
const {EOL}  = require('os');

const defaultOptions = {separator: ',', serialize: true};

function createEntity(tokens, data) {
    return data.reduce((accumulator, currentValue, index) => {
        const currentToken = tokens[index];
        accumulator[currentToken] = currentValue;
        return accumulator;
    }, {});
}

function transformFunction(buffer, encoding, next) {
    let gridData;
    let gridHeader;
    const tableData = buffer.toString().split(EOL);

    if (!this.tokens) {
        [gridHeader, ...gridData] = tableData;
        this.tokens = gridHeader.split(this.options.separator);
    } else {
        [gridData] = tableData;
    }

    const transformedData = gridData.forEach((data) => {
        const entity = createEntity(this.tokens, data.split(this.options.separator));
        const transformedEntity = this.options.serialize ? JSON.stringify(entity) : entity;
        this.push(transformedEntity);
    });
    next();
}

module.exports = through2.ctor(defaultOptions, transformFunction);