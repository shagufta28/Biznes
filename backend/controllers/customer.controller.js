const db = require('../models');
const Customer = db.Customer;

exports.create = async (req, res) => {
  try {
    const customer = await Customer.create(req.body);
    res.json(customer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAll = async (req, res) => {
  const customers = await Customer.findAll();
  res.json(customers);
};

exports.update = async (req, res) => {
  await Customer.update(req.body, { where: { id: req.params.id } });
  res.json({ message: 'Updated' });
};

exports.delete = async (req, res) => {
  await Customer.destroy({ where: { id: req.params.id } });
  res.json({ message: 'Deleted' });
};
