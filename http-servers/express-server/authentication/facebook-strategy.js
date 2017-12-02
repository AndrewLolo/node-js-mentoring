import UsersModel from 'models/users-model';
import passport from 'passport';
import { Strategy } from 'passport-facebook';

const FACEBOOK_APP_ID = '1756019338033520';
const FACEBOOK_APP_SECRET = '2a45a0c09de7b48becb3898e9bf02050';

passport.use(new Strategy(
  {
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: 'http://localhost:8080/auth/facebook/callback'
  },
  ((accessToken, refreshToken, profile, done) => {
    UsersModel.findOne({ fbId: profile.id })
      .then(user => (user ? done(null, user) : Promise.reject()))
      .catch(() => done(null, false, { message: 'Not Found' }));
  })
));
