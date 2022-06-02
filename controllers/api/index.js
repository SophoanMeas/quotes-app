//collect all of the API routes from the models
const router = require('express').Router();

const quoteRoutes = require('./quote-routes');
const userRoutes = require('./user-routes');
const categoryRoutes = require('./category-routes') //not to be used by the front end

router.use('/quotes', quoteRoutes);
router.use('/users', userRoutes);
router.use('/categories', categoryRoutes);
// router.use('/quotes/category', categoryRoutes);   CHANGE FORM pon bRANCH

module.exports = router