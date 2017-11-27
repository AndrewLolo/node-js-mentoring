import express from 'express';
import productsController from 'controllers/products-controller';
import jwtVerification from 'middleware/jwt-verification';

const productsRouter = express.Router();

productsRouter.use(jwtVerification);

productsRouter.route('/')
  .get(productsController.getProducts)
  .post(productsController.addProduct);

productsRouter.get('/:id', productsController.getProduct);
productsRouter.get('/:id/reviews', productsController.getProductReviews);

export default productsRouter;
