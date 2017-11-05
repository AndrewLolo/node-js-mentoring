import {parseHashMapString} from 'helpers/parser-utils';

export default function cookieParser(req, res, next) {
    const {cookie} = req.headers;
    if (!cookie) {
        return next();
    }
    req.parsedCookies = parseHashMapString(cookie, ';', '=');
    next();
}