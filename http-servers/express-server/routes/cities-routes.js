import express from 'express';
import citiesController from 'controllers/cities-controller';
import jwtVerification from 'middleware/jwt-verification';

const citiesRouter = express.Router();

citiesRouter.use(jwtVerification);

citiesRouter.route('/')
  .get(citiesController.getCities)
  .post(citiesController.addCity);

citiesRouter.route('/:id')
  .get(citiesController.getCity)
  .put(citiesController.updateCity)
  .delete(citiesController.deleteCity);

export default citiesRouter;
