import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  login: String,
  password: String,
  fbId: String,
  googleId: String
});

export default mongoose.model('Users', userSchema);
