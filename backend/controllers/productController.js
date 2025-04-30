// backend/controllers/productController.js
import Product from '../models/Product.js';

// Hae kaikki tuotteet
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Tuotteiden hakeminen epäonnistui' });
  }
};

// Hae tuote ID:n perusteella
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Tuotetta ei löytynyt' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Tuotteen hakeminen epäonnistui' });
  }
};

// Lisää uusi tuote (suojaus: admin-tasoinen)
export const createProduct = async (req, res) => {
  try {
    const { name, price, category, image, description } = req.body;
    const newProduct = new Product({
      name,
      price,
      category,
      image,
      description,
    });
    const createdProduct = await newProduct.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    res.status(400).json({ message: 'Tuotteen luominen epäonnistui' });
  }
};
