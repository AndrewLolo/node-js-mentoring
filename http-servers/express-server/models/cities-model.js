import mongoose from 'mongoose';

const citiesSchema = new mongoose.Schema({
  name: String,
  country: String,
  capital: { type: Boolean, required: true },
  location: { lat: Number, long: Number },
  lastModifiedDate: Date
});

citiesSchema.pre('update', (next) => {
  console.log('here');
  this.update({ $set: { lastModifiedDate: new Date() } });
  next();
});

citiesSchema.pre('save', (next) => {
  console.log(this);
  this.update({ $set: { lastModifiedDate: new Date() } });
  next();
});

export default mongoose.model('Cities', citiesSchema);
