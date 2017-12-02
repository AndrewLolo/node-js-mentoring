import ProductsModel from 'models/products-model';


function getProducts(req, res) {
  return ProductsModel.find()
    .then(products => res.json(products))
    .catch(() => res.sendStatus(404));
}

function getProduct(req, res) {
  return ProductsModel.findById(req.params.id)
    .then(product => (product ? res.json(product) : Promise.reject()))
    .catch(() => res.sendStatus(404));
}

function getProductReviews(req, res) {
  return ProductsModel.findById(req.params.id)
    .select('reviews')
    .then(review => res.json(review))
    .catch(() => res.sendStatus(404));
}

function addProduct(req, res) {
  const product = new ProductsModel(req.body);
  return product.save()
    .then(addedProduct => res.json(addedProduct))
    .catch(() => res.sendStatus(422));
}

function deleteProduct(req, res) {
  return ProductsModel.deleteOne({ _id: req.params.id })
    .then(() => res.sendStatus(200))
    .catch(() => res.sendStatus(404));
}


export default {
  getProducts, getProduct, getProductReviews, addProduct, deleteProduct
};
