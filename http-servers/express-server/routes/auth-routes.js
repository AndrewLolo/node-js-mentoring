import express from 'express';
import passport from 'passport';
import authController from 'controllers/auth-controller';

const authRouter = express.Router();

authRouter.post(
  '',
  passport.authenticate('local', { session: false }),
  authController.authUser
);

authRouter.get('/facebook', passport.authenticate('facebook'));
authRouter.get(
  '/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/auth/failed', session: false }),
  authController.authUser
);

authRouter.get('/google', passport.authenticate('google', { scope: ['profile'] }));
authRouter.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/auth/failed', session: false }),
  authController.authUser
);

authRouter.get('/failed', (req, res) => {
  res.end('Auth failed');
});

export default authRouter;
