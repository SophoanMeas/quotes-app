const router = require('express').Router();
const { Quotes, User, Category } = require('../../models');
const sequelize = require('../../config/connection');

// GET ALL - purely FOR TTESTING PURPOSES IN THE BACK END
router.get('/', (req, res) => {
  // Access our User model and run .findAll() method)
  Category.findAll()
    .then(catData => res.json(catData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


// POST - purely FOR TESTING PURPOSES IN THE BACK END
router.post('/', (req, res) => {
  // expects { category_name:}
  Category.create({
    category_name: req.params.category_name
  })
    .then(catData => res.json(catData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;