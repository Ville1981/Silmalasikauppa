// backend/controllers/userController.js
import User from '../models/user.js';

// Hae käyttäjäprofiili
export const getUserProfile = async (req, res) => {
  const user = await User.findById(req.user.id).select('-password');
  res.json(user);
};

// Päivitä käyttäjäprofiili
export const updateUserProfile = async (req, res) => {
  const user = await User.findById(req.user.id);
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    const updatedUser = await user.save();
    res.json(updatedUser);
  } else {
    res.status(404).json({ message: 'Käyttäjää ei löydy' });
  }
};

// Poista käyttäjäprofiili
export const deleteUserProfile = async (req, res) => {
  await User.findByIdAndDelete(req.user.id);
  res.json({ message: 'Käyttäjä poistettu' });
};

// Rekisteröi uusi käyttäjä
export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).json({ message: 'Käyttäjä on jo olemassa' });
  }
  const user = await User.create({ name, email, password });
  res.status(201).json(user);
};

// Kirjaudu sisään
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: user.generateToken(),
    });
  } else {
    res.status(401).json({ message: 'Virheelliset kirjautumistiedot' });
  }
};
