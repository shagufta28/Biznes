const db = require('../models');
const Company = db.Company;

exports.createOrUpdateCompany = async (req, res) => {
    try {
      const {
        name,
        gstin,
        address, // allow this to come from body
        bankDetails,
        terms
      } = req.body;

      let company = await Company.findOne({ where: { gstin } });

      if (company) {
        // Update company without logoPath
        await company.update({ name, address, bankDetails, terms });
      } else {
        // Create new company without logoPath
        company = await Company.create({
          name,
          gstin,
          address,
          bankDetails,
          terms
        });
      }

      res.json(company);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
};

exports.getCompany = async (req, res) => {
  try {
    const { gstin } = req.params;
    const company = await Company.findOne({ where: { gstin } });
    res.json(company);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const company = await Company.create(req.body);
    res.json(company);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAll = async (req, res) => {
  const companies = await Company.findAll();
  res.json(companies);
};

exports.update = async (req, res) => {
  await Company.update(req.body, { where: { id: req.params.id } });
  res.json({ message: 'Updated' });
};

exports.delete = async (req, res) => {
  await Company.destroy({ where: { id: req.params.id } });
  res.json({ message: 'Deleted' });
};
