const router = require('express').Router();
const { Quotes, User, Category } = require('../models');
const sequelize = require('../config/connection')
// TODO: Import the custom middleware

// GET Quote of the Day
router.get('/', async (req, res) => {
	try {
		const quotesData = await Quotes.findAll({
			attributes: ['id', 'description', 'author', 'likes'],
			order: sequelize.literal('rand()'), 
			limit: 1,
			include: [
				{
					model: User,
					attributes: ['username']
				},
				{
					model: Category,
					attributes: ['category_name']
				},
			]
		});

		const quotes = quotesData.map((quote) => quote.get({ plain: true }));
		res.render('homepage', {
			quotes
			// loggedIn: req.session.loggedIn,
		});
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

router.get('/login', (req, res) => {
	if (req.session.loggedIn) {
		res.redirect('/');
		return;
	}

	res.render('login');
});

//FROM ADRIAN BRANCH=======================================
// ROUTE for QUOTE Search by Category
// GET quotes by category_id
router.get('/category/:category_id', (req, res) => {
  Quotes.findAll({
    attributes: ['id', 'description', 'author', 'is_liked', 'created_at'],
    // attributes: { exclude: ['updatedAt'] },
    where: {
      category_id: req.params.category_id
    },
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
      ['is_liked', 'DESC'],
      ['created_at', 'DESC'],
  ],
  })
    .then(quoteData => {
      if (!quoteData) {
        res.status(404).json({ message: 'No Quotes Found' });
        return;
      }
			// serializing the data
			const quotes = quoteData.map((quote) => quote.get({ plain: true }));
			res.render('homepage', { quotes	}
				// loggedIn: req.session.loggedIn,
				);

			//passing data to the template
      res.render('quote', { quotes });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
//FROM ADRIAN BRANCH=======================================

module.exports = router;
