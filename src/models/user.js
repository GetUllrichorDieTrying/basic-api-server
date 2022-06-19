'use strict';

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('user', {
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
