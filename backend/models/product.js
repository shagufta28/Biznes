module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Product', {
      name: DataTypes.STRING,
      hsnCode: DataTypes.STRING,
      serialNumber: DataTypes.STRING,
      price: DataTypes.FLOAT,
      taxPercent: DataTypes.FLOAT,
      stock: DataTypes.INTEGER
    });
  };
  