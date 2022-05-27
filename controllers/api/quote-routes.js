const router = require('express').Router();
const { Quotes, User, Category } = require('../../models');

// GET ALL quotes /api/quotes
router.get('/', (req, res) => {
  // Access our User model and run .findAll() method)
  Quotes.findAll({
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(quoteData => res.json(quoteData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


// GET quotes by category_id
router.get('/:category_id', (req, res) => {
  Quotes.findOne({
    where: {
      category_id: req.params.category_id
    },
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(quoteData => {
      if (!quoteData) {
        res.status(404).json({ message: 'No Quotes Found' });
        return;
      }
      res.json(quoteData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


// GET quotes by Author
router.get('/:author', (req, res) => {
  Quotes.findOne({
    where: {
      author: req.params.author
    },
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(quoteData => {
      if (!quoteData) {
        res.status(404).json({ message: 'No Quotes Found' });
        return;
      }
      res.json(quoteData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});



// POST /api/quotes
router.post('/', (req, res) => {
  // expects { description: "text", created_by: "Adrian", category_id: 1}
  Quotes.create({
    description: req.body.description, 
    author: req.body.author, 
    // likes: req.body.likes, 
    posted_by: req.body.posted_by,
    category_id: req.body.category_id, 
  })
    .then(quoteData => res.json(quoteData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// UPDATE .... upcoming update

// DELETE ... upcoming update

module.exports = router;
