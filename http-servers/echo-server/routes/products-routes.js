import express from 'express';
import productsController from 'controllers/products-controller';

const productsRouter = express.Router();

productsRouter.route('/')
    .get(productsController.getProducts)
    .post(productsController.addProduct);

productsRouter.get('/:id', productsController.getProduct);
productsRouter.get('/:id/reviews', productsController.getProductReviews);

export default productsRouter;