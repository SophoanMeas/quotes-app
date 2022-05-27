//collect all of the API routes from the models

const router = require('express').Router();

const quoteRoutes = require('./quote-routes');
const userRoutes = require('./user-routes'); //not to be used by the fornt end

router.use('/quotes', quoteRoutes);
router.use('/users', userRoutes);

module.exports = router