import productsModel from 'models/products-model';


function getProducts(req, res) {
  return productsModel.find()
    .then(products => res.json(products))
    .catch(() => res.sendStatus(404));
}

function getProduct(req, res) {
  return productsModel.findOne({ _id: req.params.id })
    .then(product => (product ? res.json(product) : Promise.reject()))
    .catch(() => res.sendStatus(404));
}

function getProductReviews(req, res) {
  return productsModel.findOne({ _id: req.params.id })
    .select('reviews')
    .then(review => res.json(review))
    .catch(() => res.sendStatus(404));
}

function addProduct(req, res) {
  const newProduct = req.body;
  return productsModel.create(newProduct)
    .then(addedProduct => res.json(addedProduct))
    .catch(() => res.sendStatus(422));
}

function deleteProduct(req, res) {
  return productsModel.deleteOne({ _id: req.params.id })
    .then(() => res.sendStatus(200))
    .catch(() => res.sendStatus(404));
}


export default {
  getProducts, getProduct, getProductReviews, addProduct, deleteProduct
};
