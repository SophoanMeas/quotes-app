//collect all of the API routes from the models

const router = require('express').Router();

const quoteRoutes = require('./quote-routes');

router.use('/quotes', quoteRoutes);

module.exports = router