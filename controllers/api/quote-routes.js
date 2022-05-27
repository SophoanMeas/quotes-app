const router = require('express').Router();
const { Quotes } = require('../../models');

// GET ALL quotes /api/quotes
router.get('/', (req, res) => {
  // Access our User model and run .findAll() method)
  Quotes.findAll()
    .then(quoteData => res.json(quoteData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


// GET /api/quotes/category-id
router.get('/:category', (req, res) => {
  Quotes.findOne({
    where: {
      id: req.params.category
    }
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


// GET /api/quotes/category-id
router.get('/:author', (req, res) => {
  Quotes.findOne({
    where: {
      id: req.params.author
    }
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
    author: req.body.author 
    // likes: req.body.likes, 
    // created_by: req.body.created_by,
    // category_id: req.body.category_id, 
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
