import mongoose from 'mongoose';
import addTimestampDocument from 'db/middleware/document/timestamp';
import addTimestampQuery from 'db/middleware/query/timestamp';

const citiesSchema = new mongoose.Schema({
  name: String,
  country: String,
  capital: { type: Boolean, required: true },
  location: { lat: Number, long: Number },
  lastModifiedDate: Date
});

citiesSchema.pre('update', addTimestampQuery);
citiesSchema.pre('save', addTimestampDocument);

export default mongoose.model('Cities', citiesSchema);
