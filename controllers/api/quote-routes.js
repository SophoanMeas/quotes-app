const router = require('express').Router();
const { Quotes, User, Category, Like } = require('../../models');
const sequelize = require('../../config/connection')

// GET ALL quotes /api/quotes
router.get('/', (req, res) => {
  // Access our User model and run .findAll() method)
  Quotes.findAll({
    attributes: { exclude: ['updatedAt'] },
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


// UPDATE - LIKE a quote
router.put('/like', (req, res) => {
  Like.create({
    user_id: req.body.user_id,
    quote_id: req.body.quote_id
  })
  .then(() => {
    //find the quote just liked
    return Quotes.findOne({
      where: {
        id: req.body.quote_id
      },
      attributes: [
        'description',
        'author'
        // use raw MySQL aggregate function query to get a count of how many votes the post has and return it under the name `vote_count`
        [
          sequelize.literal('(SELECT COUNT(*) FROM like WHERE quotes.id = like.quote_id)'),
          'likes'
        ]  
      ]
    })
  })
    .then(quoteData => res.json(quoteData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});



// GET quotes by category_id
router.get('/:category_id', (req, res) => {
  Quotes.findAll({
    attributes: { exclude: ['updatedAt'] },
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
router.get('/author/:author_name', (req, res) => {
  Quotes.findAll({
    attributes: { exclude: ['updatedAt'] },
    where: {
      author: req.params.author_name
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


// DELETE ... upcoming update

module.exports = router;
