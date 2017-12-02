import express from 'express';
import usersController from 'controllers/users-controller';
import jwtVerification from 'middleware/jwt-verification';

const usersRouter = express.Router();

usersRouter.use(jwtVerification);

usersRouter.delete('/:id', usersController.deleteUser);

export default usersRouter;
