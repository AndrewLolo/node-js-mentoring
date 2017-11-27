import parseHashMapString from 'helpers/parser-utils';

export default (req, res, next) => {
  const { cookie } = req.headers;
  if (!cookie) {
    return next();
  }
  req.parsedCookies = parseHashMapString(cookie, ';', '=');
  return next();
};
