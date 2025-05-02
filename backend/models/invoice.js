module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Invoice', {
      invoiceNo: DataTypes.STRING,
      date: DataTypes.DATE,
      customerId: DataTypes.INTEGER,
      transportDetails: DataTypes.TEXT,
      companyId: DataTypes.INTEGER,
      totalAmount: DataTypes.FLOAT,
      gstAmount: DataTypes.FLOAT
    });
  };
  