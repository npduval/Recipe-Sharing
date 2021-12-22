//biolerplate file
const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', userRoutes);

module.exports = router;
