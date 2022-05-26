const router = require('express').Router();
const { Quotes } = require('../../models');

// GET ALL quotes /api/quotes
router.get('/', (req, res) => {
  // this is equal to SELECT * FROM Quotes;
  Quotes.findAll()
    .then(quoteData = res.json(quoteData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


// GET /api/quotes/category-id
router.get('/:category_id', (req, res) => {
  Quotes.findOne({
    where: {
      category_id: req.params.category_id
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
  // expects {id: 1, description: "text", created_by: "Adrian", category_id: 1}
  Quotes.create({
    id: req.body.id, 
    description: req.body.description, 
    created_by: req.body.created_by, 
    category_id: req.body.category_id
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
