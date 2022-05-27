const router = require('express').Router();
const { Category } = require('../../models');

// GET ALL 
router.get('/', (req, res) => {
  // Access our User model and run .findAll() method)
  Category.findAll()
    .then(catData => res.json(catData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


// POST 
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

// UPDATE .... upcoming update

// DELETE ... upcoming update

module.exports = router;