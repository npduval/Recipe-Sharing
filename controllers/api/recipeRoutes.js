const router = require('express').Router();
const { Recipe } = require('../../models');
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
    const newRecipe = await Recipe.create({
      ...req.body,
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