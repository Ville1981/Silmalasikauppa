import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  nimi: { type: String, required: true },
  hinta: { type: Number, required: true },
  kuva: { type: String, required: true },
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

export default Product;
