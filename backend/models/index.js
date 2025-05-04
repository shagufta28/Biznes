const Sequelize = require('sequelize');
const config = require('../config/db.config').development;


const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Product = require('./product')(sequelize, Sequelize);
db.Customer = require('./customer')(sequelize, Sequelize);
db.Company = require('./company')(sequelize, Sequelize);
db.Invoice = require('./invoice')(sequelize, Sequelize);
db.InvoiceItem = require('./invoiceItem')(sequelize, Sequelize);
db.Expense = require('./Expense')(sequelize, Sequelize.DataTypes);
db.User = require('./User')(sequelize, Sequelize);

// Relations
db.Invoice.hasMany(db.InvoiceItem, { foreignKey: 'invoiceId' });
db.InvoiceItem.belongsTo(db.Invoice);




module.exports = db;
