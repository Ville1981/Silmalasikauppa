import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  // Vanha kenttä 'name' säilytetty
  name: {
    type: String,
    required: true,
  },
  // Uusi kenttä 'nimi' mahdollista käyttöä varten
  nimi: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  // Vanha kenttä 'password' säilytetty
  password: {
    type: String,
    required: true,
  },
  // Uusi kenttä 'salasana' tukemaan suomenkielistä käyttöä
  salasana: {
    type: String,
  },
}, {
  timestamps: true,
});

// ✅ Salasanan tarkistus: käytetään joko salasana- tai password-kenttää
userSchema.methods.matchPassword = async function (enteredPassword) {
  const hash = this.salasana || this.password;
  return await bcrypt.compare(enteredPassword, hash);
};

// ✅ Hashaa salasana ennen tallennusta, jos käytetään kenttää 'salasana' tai 'password'
userSchema.pre('save', async function (next) {
  if (this.isModified('salasana')) {
    const salt = await bcrypt.genSalt(10);
    this.salasana = await bcrypt.hash(this.salasana, salt);
  }
  if (this.isModified('password')) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

// ✅ Tarkista onko malli jo olemassa, ennen kuin luot uuden
const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
