import {parseHashMapString} from 'helpers/parser-utils';

export default function queryParser(req, res, next) {
    const [,query] = req.url.split('?');
    if (!query) {
        return next();
    }
    req.parsedQuery = parseHashMapString(query, '&', '=');
    next();
}
