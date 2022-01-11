const router = require('express').Router();
const { Recipe, User, Ingredients, Instructions } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  res.render('homepage')
    });


router.get('/login', (req, res) => {

  res.render('login');
});


router.get('/search', (req, res) => {

  res.render('recipes');
});


// Use withAuth middleware to prevent access to route
// router.get('/profile', withAuth, async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: Project }],
//     });

//     const user = userData.get({ plain: true });

//     res.render('profile', {
//       ...user,
//       logged_in: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get('/profile', async (req, res) => {
  try {
    const allRecipes = await Recipe.findAll();

    const recipes = allRecipes.map((recipe) => recipe.get({ plain: true }));

    const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
          });
    
    const user = userData.get({ plain: true })


    res.render('recipes', { 
      ...recipes,
      ...user
    });
  } catch (error) {
    res.status(500).json(err);
  }
   
 });

 router.get('/recipes/:id', async (req, res) => {
  try {
    
    const indRecipeData = await Recipe.findByPk(req.params.id, {

      include: [
        {
          model: Ingredients,
          attributes: ['ingredient'],
        },
      ],
    
    });

    const recipe = indRecipeData.get({ plain: true });

    res.render('search', {
      ...recipe,
  
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

 module.exports = router;
