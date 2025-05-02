const db = require('../models');
const fs = require('fs');
const path = require('path');

exports.exportAll = async (req, res) => {
  try {
    const data = {
      products: await db.Product.findAll(),
      customers: await db.Customer.findAll(),
      companies: await db.Company.findAll(),
      invoices: await db.Invoice.findAll({ include: db.InvoiceItem }),
      expenses: await db.Expense.findAll()
    };

    const filePath = path.join(__dirname, '../exports/data.json');
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    res.download(filePath, 'biznas-data.json');
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
