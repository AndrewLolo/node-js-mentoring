const through2 = require('through2');

const transformFunction = (chunk, encoding, next) => {
    const transformedData = chunk.toString().toUpperCase();
    next(null, transformedData);
};

module.exports = through2.ctor(transformFunction);