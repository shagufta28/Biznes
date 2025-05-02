// models/company.model.js
module.exports = (sequelize, DataTypes) => {
    const Company = sequelize.define('Company', {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      gstin: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      address: {
        type: DataTypes.STRING,
        allowNull: true
      },
      logo: {
        type: DataTypes.STRING,
        allowNull: true
      },
      bankDetails: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      terms: {
        type: DataTypes.TEXT,
        allowNull: true
      }
    });
  
    return Company;
  };
  