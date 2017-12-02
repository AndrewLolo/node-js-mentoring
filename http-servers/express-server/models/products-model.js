import mongoose from 'mongoose';

const productsSchema = new mongoose.Schema({
  name: String,
  reviews: [String]
});

export default mongoose.model('Products', productsSchema);
