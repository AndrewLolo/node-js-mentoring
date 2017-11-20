import usersModel from 'models/users-model';
import passport from 'passport';
import {Strategy} from 'passport-facebook';

const FACEBOOK_APP_ID = '1756019338033520';
const FACEBOOK_APP_SECRET = '2a45a0c09de7b48becb3898e9bf02050';

passport.use(new Strategy({
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: 'http://localhost:8080/auth/facebook/callback'
  },
  function(accessToken, refreshToken, profile, done) {
    const user = usersModel.getUserByKey('fbId', profile.id);
    if (!user) {
        return done(null, false, { message: 'Not Found'});
    }
    done(null, user);
  }
));
