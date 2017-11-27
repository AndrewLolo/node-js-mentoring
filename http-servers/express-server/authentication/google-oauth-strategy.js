import usersModel from 'models/users-model';
import passport from 'passport';
import { Strategy } from 'passport-google-oauth20';

const GOOGLE_CLIENT_ID = '714841661536-4jvvsh9egcv1idu9d94mtd0s0lvq02t6.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '7JqQhooxhKwidiH8e-Zi2VWF';

passport.use(new Strategy(
  {
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:8080/auth/google/callback'
  },
  ((accessToken, refreshToken, profile, done) => {
    usersModel.findOne({ googleId: profile.id })
      .exec((err, user) => {
        if (!user) {
          return done(null, false, { message: 'Not Found' });
        }
        return done(null, user);
      });
  })
));
