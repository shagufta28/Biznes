const db = require('../models');
const Product = db.Product;

exports.create = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAll = async (req, res) => {
  const products = await Product.findAll();
  res.json(products);
};

exports.update = async (req, res) => {
  await Product.update(req.body, { where: { id: req.params.id } });
  res.json({ message: 'Updated' });
};

exports.delete = async (req, res) => {
  await Product.destroy({ where: { id: req.params.id } });
  res.json({ message: 'Deleted' });
};
