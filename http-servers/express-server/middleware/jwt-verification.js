import jwt from 'jsonwebtoken';

const secretKey = 'secret';

export default (req, res, next) => {
  const token = req.headers['x-access-token'];
  if (!token) {
    res.sendStatus(401);
    return;
  }
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.sendStatus(401);
    }
    res.username = decoded.username;
    return next();
  });
};
