const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Instructions extends Model {}

Instructions.init(
  {
    instructions_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    instructions: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    recipe_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'recipe',
        key: 'recipe_id',
      }
  }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'instructions',
  }
);

module.exports = Instructions;