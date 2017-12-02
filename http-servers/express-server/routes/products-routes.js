import express from 'express';
import productsController from 'controllers/products-controller';
import jwtVerification from 'middleware/jwt-verification';

const productsRouter = express.Router();

productsRouter.use(jwtVerification);

productsRouter.route('/')
  .get(productsController.getProducts)
  .post(productsController.addProduct);

productsRouter.route('/:id')
  .get(productsController.getProduct)
  .delete(productsController.deleteProduct);

productsRouter.get('/:id/reviews', productsController.getProductReviews);

export default productsRouter;
