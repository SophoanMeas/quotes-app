const router = require('express').Router();
const { Quotes, User, Category } = require('../models');
const sequelize = require('../config/connection')
// TODO: Import the custom middleware

// GET Quotes of the Day
// router.get('/', async (req, res) => {
// 	try {
// 		const quotesData = await Quotes.findAll({
//             include: [
//                 {
//                   model: User,
//                   attributes: ['username', 'first_name'],
//                 },
//               ],
           
// 		});

// 		const quotes = quotesData.map((quote) => quote.get({ plain: true }));
// 		res.render('homepage', {
// 			quotes
// 			// loggedIn: req.session.loggedIn,
// 		});
// 	} catch (err) {
// 		console.log(err);
// 		res.status(500).json(err);
// 	}
// });

// router.get('/login', (req, res) => {
// 	if (req.session.loggedIn) {
// 		res.redirect('/');
// 		return;
// 	}

// 	res.render('login');
// });

//FROM ADRIAN BRANCH=======================================
router.get('/', (req, res) => {
	Quotes.findAll({
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
  })
    .then(quoteData => {
			console.log(quoteData);
			const quotes = quoteData.map(post => post.get({ plain: true }));
			res.render('homepage', { quotes });
		})
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
//FROM ADRIAN BRANCH=======================================

module.exports = router;
