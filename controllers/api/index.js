//collect all of the API routes from the models

const router = require('express').Router();

const quoteRoutes = require('./quote-routes');
const userRoutes = require('./user-routes'); //not to be used by the front end
const categoryRoutes = require('./category-routes')

router.use('/quotes', quoteRoutes);
router.use('/users', userRoutes);
router.use('/categories', categoryRoutes);

module.exports = router