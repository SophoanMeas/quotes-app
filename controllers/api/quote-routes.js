
const router = require('express').Router();
const { Quotes, User, Category } = require('../../models');
const sequelize = require('../../config/connection');
const Sequelize = require("sequelize");
const op = Sequelize.Op;

////// GET ALL quotes - (Purely for testing purposes)
router.get('/', (req, res) => {
  Quotes.findAll({
    attributes: ['id', 'description', 'author', 'likes', 'created_at'],
    include: [
      {
        model: User,
        attributes: ['username']
      },
      {
        model: Category,
        attributes: ['category_name']
      },
    ],
    order: [
      ['created_at', 'DESC'],
  ],
  })
    .then(quoteData => res.json(quoteData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


//SEARCH BY CATEGORY (buttons)
router.get('/catego/:category', async (req, res) => {
	try {
		const quotesData = await Quotes.findAll({
      order: sequelize.literal('rand()'),
			limit: 6,
			attributes: [ 'id', 'description', 'author', 'likes' ],
			where: {
				category_id: req.params.category 
			},
			include: [
				{
					model: User,
					attributes: [ 'username' ]
				},
				{
					model: Category,
					attributes: [ 'category_name' ]
				}
			]
		});

		const quotes = quotesData.map((quote) => quote.get({ plain: true }));
		res.render('quote-category', {
			title: 'Query Quotes',
			quotes,
		});
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});






////// UPDATE - LIKE a quote by USER Session --- UPDATE in the WORKS
router.put('/like', (req, res) => {
Quotes.update({likes: 1}, {where: {id: req.body.id}
    })
    .then(quoteData => res.json(quoteData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    })
    });


router.put('/unlike', (req, res) => {
  Quotes.update({likes: 0}, {where: {id: req.body.id}
      })
      .then(quoteData => res.json(quoteData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      })
      });

// GET quotes that are liked -----IN THE WORKS
router.get('/favourites', (req, res) => {
  Quotes.findAll({
    attributes: { exclude: ['updatedAt'] },
    where: {
      likes: true
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


// POST a Quote
router.post('/add', (req, res) => {
	Quotes.create({
		description: req.body.description,
		author: req.body.author,
		likes: 0,
		user_id: req.body.id, //req.session.user_id
		category_id: req.body.category_id,
	})
		.then((quoteData) => res.json(quoteData))
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

module.exports = router;