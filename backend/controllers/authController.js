import User from '../models/User.js';
import jwt from 'jsonwebtoken';

// Luo JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

// Rekisteröi käyttäjä
const registerUser = async (req, res) => {
  const { nimi, email, salasana } = req.body;
  const userExists = await User.findOne({ email });

  if (userExists) {
    return res.status(400).json({ message: 'Käyttäjä on jo olemassa' });
  }

  const user = await User.create({ nimi, email, salasana });

  if (user) {
    res.status(201).json({
      _id: user._id,
      nimi: user.nimi,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400).json({ message: 'Virheellinen käyttäjätieto' });
  }
};

// Kirjaudu käyttäjä
const loginUser = async (req, res) => {
  const { email, salasana } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(salasana))) {
    res.json({
      _id: user._id,
      nimi: user.nimi,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(401).json({ message: 'Virheellinen sähköposti tai salasana' });
  }
};

export { registerUser, loginUser };
