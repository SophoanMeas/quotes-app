const router = require('express').Router();
const { Quotes, User, Category } = require('../models');
const sequelize = require('../config/connection');
const Sequelize = require("sequelize");
const op = Sequelize.Op;
// TODO: Import the custom middleware

// GET Quotes of the Day
router.get('/home', async (req, res) => {
	try {
		const quotesData = await Quotes.findAll({
			attributes: [ 'id', 'description', 'author', 'likes' ],
			order: sequelize.literal('rand()'),
			limit: 1,
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
		res.render('homepage', {
			title: 'Random Quote',
			quotes,
		});
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});



router.get('/', (req, res) => {
	res.render('login')

	if (req.session.loggedIn) {
		res.redirect('/');
		return;
	}

	res.render('login');
});

//FROM ADRIAN BRANCH=======================================

router.get('/catego/:category', async (req, res) => {
	try {
		const quotesData = await Quotes.findAll({
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
		res.render('queryquotes', {
			title: 'Query Quotes',
			quotes,
		});
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});



router.get('/results/:key', async (req, res) => {
	try {
		const quotesData = await 
			Quotes.findAll({
				attributes: ['id', 'description', 'author', 'likes'],
				where: {
					[op.or]: [
						{description: 
							{
								[op.like]: `%${req.params.key}%`
							}}, 
						{author: 
							{
								[op.like]: `%${req.params.key}%`
							}}
					]

					// author: 
					// 		{
					// 			[op.like]: `%${req.params.key}%`
					// 		}

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
					['created_at', 'DESC'],
			]
			
		})
		const quoteResults = quotesData.map((quote) => quote.get({ plain: true }));
		console.log(quoteResults);
		res.render('queryresults', {
			title: 'Query Results',
			quoteResults,
		});
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
	
});

//FROM ADRIAN BRANCH=======================================

module.exports = router;
