import usersModel from 'models/users-model';
import passport from 'passport';
import {Strategy} from 'passport-local';

passport.use(new Strategy(
    {
        usernameField: 'login',
        passwordField: 'password'
    },
    function(username, password, done) {   
        const user = usersModel.getUserByKey('login', username);
    
        if (!user || user.password !== password) {
            return done(null, false, { message: 'Not Found'});
        }
        done(null, user);
    }
));