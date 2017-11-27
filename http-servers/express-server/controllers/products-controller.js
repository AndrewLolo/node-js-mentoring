import productsModel from 'models/products-model';

function getProducts(req, res) {
  const products = productsModel.getProducts();
  res.json(products);
}

function getProduct(req, res) {
  const { id } = req.params;
  const product = productsModel.getProduct(id);
  return product ? res.json(product) : res.sendStatus(404);
}

function getProductReviews(req, res) {
  const { id } = req.params;
  const productReviews = productsModel.getProductReviews(id);
  return productReviews ? res.json(productReviews) : res.sendStatus(404);
}

function addProduct(req, res) {
  const newProduct = req.body;
  const addedProduct = productsModel.addProduct(newProduct);
  return res.json(addedProduct);
}


export default {
  getProducts, getProduct, getProductReviews, addProduct
};
