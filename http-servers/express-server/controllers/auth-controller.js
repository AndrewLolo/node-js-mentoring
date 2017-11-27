import jwt from 'jsonwebtoken';

const secretKey = 'secret';

function authUser(req, res) {
  const { user } = req;
  const token = jwt.sign(user, secretKey);
  const responseData = {
    message: 'OK',
    data: { userName: user.name },
    token
  };
  return res.status(200).send(responseData);
}

export default { authUser };
