const router = require('express').Router();
const { User } = require('../../models');

// GET ALL USERS - (not to be used other than testing in insomnia)
router.get('/all', (req, res) => {
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


// // POST a user (CREATE A USER)
// router.post('/', (req, res) => {
//   User.create({
//     username: req.body.username,
//     first_name: req.body.first_name,
//     last_name: req.body.last_name,
//     email: req.body.email,
//     password: req.body.password
//   })
//     .then(quoteData => res.json(quoteData))
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });


// User routes
// http://localhost:3006/api/users
router.get('/', async (req, res) => {

  res.send('User section');

});

module.exports = router;

