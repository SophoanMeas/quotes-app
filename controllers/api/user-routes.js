const router = require('express').Router();
const { User } = require('../../models');

// GET ALL 
router.get('/', (req, res) => {
  // Access our User model and run .findAll() method)
  User.findAll({
    // attributes: { exclude: ['password'] }
  })
    .then(userData => res.json(userData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});




// POST /api/quotes
router.post('/', (req, res) => {
  User.create({
    username: req.body.username,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password
  })
    .then(quoteData => res.json(quoteData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


module.exports = router;

