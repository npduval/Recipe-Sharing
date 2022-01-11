const router = require('express').Router();
const { Recipe } = require('../../models');
const withAuth = require('../../utils/auth');

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

    res.status(200).json(newRecipe);
  } catch (err) {
    res.status(400).json(err);
  }
});



module.exports = router;