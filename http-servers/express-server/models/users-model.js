import mongoose from 'mongoose';


const atLeastOneDigitRegexp = /.*\d.*/g;

const userSchema = new mongoose.Schema({
  name: String,
  login: String,
  password: {
    type: String,
    validate: {
      validator: value => atLeastOneDigitRegexp.test(value),
      message: 'Password requires a least 1 digit'
    }
  },
  fbId: String,
  googleId: String
});

export default mongoose.model('Users', userSchema);
