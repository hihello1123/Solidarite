'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class board extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.board.belongsTo(models.user, { foreignKey: "userId", onDelete: "CASCADE" });
    }
  };
  board.init({
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    like: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'board',
  });
  return board;
};