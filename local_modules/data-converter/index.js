import {EOL} from 'os';

function createEntity(tokens, data) {
    return data.reduce((accumulator, currentValue, index) => {
        const currentToken = tokens[index];
        accumulator[currentToken] = currentValue;
        return accumulator;
    }, {});
}

function csvToJson(buffer) {
    const [gridHeader, ...gridData] = buffer.toString().split(EOL);
    const tokens = gridHeader.split(',');
    return gridData.map((data) => createEntity(tokens, data.split(',')));
}

export default {csvToJson};