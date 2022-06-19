'use strict';

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('userMsg', {
    recipient: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    messageBody: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
};
