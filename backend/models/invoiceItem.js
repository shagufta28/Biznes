module.exports = (sequelize, DataTypes) => {
    return sequelize.define('InvoiceItem', {
      invoiceId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      unitPrice: DataTypes.FLOAT,
      taxPercent: DataTypes.FLOAT,
      hsnCode: DataTypes.STRING
    });
  };
  