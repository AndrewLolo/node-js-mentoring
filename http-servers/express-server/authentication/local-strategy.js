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
      .exec((err, user) => {
        if (!user || user.password !== password) {
          return done(null, false, { message: 'Not Found' });
        }
        return done(null, user);
      });
  })
));
