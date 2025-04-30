import Order from '../models/Order.js';

// Luo uusi tilaus
export const createOrder = async (req, res) => {
  try {
    const { products, totalPrice } = req.body;
    const order = new Order({
      user: req.user.id,
      products,
      totalPrice,
    });
    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Tilauksen luonti epäonnistui.' });
  }
};

// Hae käyttäjän omat tilaukset
export const getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id });
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Omien tilausten haku epäonnistui.' });
  }
};
