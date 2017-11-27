import productsMock from 'mock/products-mock';

function getProducts() {
  return productsMock;
}

function getProduct(productId) {
  return productsMock.find(({ id }) => id === productId);
}

function getProductReviews(productId) {
  const product = getProduct(productId);
  return product ? product.reviews : null;
}

function addProduct(newProduct) {
  newProduct.id = JSON.stringify(productsMock.length + 1);
  productsMock.push(newProduct);
  return newProduct;
}


export default {
  getProducts, getProduct, getProductReviews, addProduct
};
