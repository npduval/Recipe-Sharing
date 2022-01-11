const router = require('express').Router();
const { Recipe, Instructions, Ingredients } = require('../../models');
const withAuth = require('../../utils/auth');
const { Op } = require("sequelize");

router.get('/', async (req, res) => {
 try {
   const allRecipes = await Recipe.findAll();
   console.log(allRecipes);
   res.json(allRecipes);
 } catch (error) {
  res.status(400).json(err);
 }
  
});





router.post('/',  async (req, res) => {
  try {
    const newRecipe = await Recipe.create(req.body);
    const newInst = await Instructions.create({
      recipe_id: newRecipe.dataValues.recipe_id,
      instructions: req.body.instructions
    });
    const newIngred = await Ingredients.create({
      recipe_id: newRecipe.dataValues.recipe_id,
      ingredient: req.body.ingredients
    });
    console.log(newRecipe)

    // const rec = newRecipe.map((recipe) => recipe.get({ plain: true }));


    res.status(200).json(newRecipe);
  } catch (err) {
    res.status(400).json(err);
  }
});




router.post('/search', async (req, res) => {
  try {
    const likeRecipes = await Recipe.findAll({
      where : {
        name : { [Op.like]: `%${req.body.search}%` }
    }
    });

    const recipes = likeRecipes.map((recipe) => recipe.get({ plain: true }));

  res.json(recipes);

  } catch (err) {
    res.status(500).json(err);
  }
   
 });



module.exports = router;