import usersModel from 'models/users-model';
import passport from 'passport';
import { Strategy } from 'passport-local';

passport.use(new Strategy(
  {
    usernameField: 'login',
    passwordField: 'password'
  },
  ((username, password, done) => {
    usersModel.findOne({ login: username })
      .select('login password')
      .then(user => (!user || user.password !== password ? Promise.reject() : done(null, user)))
      .catch(() => done(null, false, { message: 'Not Found' }));
  })
));
