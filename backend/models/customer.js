module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Customer', {
      name: DataTypes.STRING,
      gstin: DataTypes.STRING,
      shippingAddress: DataTypes.STRING,
      billingAddress: DataTypes.STRING,
      phone: DataTypes.STRING
    });
  };
  