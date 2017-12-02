import mongoose from 'mongoose';
import addTimestampDocument from 'db/middleware/document/timestamp';
import addTimestampQuery from 'db/middleware/query/timestamp';

const productsSchema = new mongoose.Schema({
  name: String,
  reviews: [String]
});

productsSchema.pre('update', addTimestampQuery);
productsSchema.pre('save', addTimestampDocument);

export default mongoose.model('Products', productsSchema);
