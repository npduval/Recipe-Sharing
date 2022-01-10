const Recipe = require('./Recipe');
const Ingredients = require('./Ingredients');
const Instructions = require('./Instructions');
const User = require('./User');

Recipe.hasOne(Ingredients, {
    foreignKey: 'recipe_id',
    onDelete: 'CASCADE',
});

Ingredients.belongsTo(Recipe, {
    foreignKey: 'recipe_id'
});

Recipe.hasOne(Instructions, {
    foreignKey: 'recipe_id',
    onDelete: 'CASCADE',
});

Instructions.belongsTo(Recipe, {
    foreignKey: 'recipe_id'
});

module.exports = { Recipe, Ingredients, Instructions, User };