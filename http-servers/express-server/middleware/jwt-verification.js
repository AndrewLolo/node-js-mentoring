import jwt from 'jsonwebtoken';

const secretKey = 'secret';

export default (req, res, next) => {
    const token = req.headers['x-access-token'];
    if (!token) {
        return res.sendStatus(401);
    }
    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.sendStatus(401);
        }
        res.username = decoded.username;
        next();
    });
}