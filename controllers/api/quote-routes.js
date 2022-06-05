const router = require('express').Router();
const { Quotes, User, Category } = require('../../models');
const sequelize = require('../../config/connection');
const Sequelize = require('sequelize');
const op = Sequelize.Op;

// POST a Quote
router.post('/add', (req, res) => {
	Quotes.create({
		description: req.body.description,
		author: req.body.author,
		likes: 0,
		user_id: req.body.id, // get session id
		category_id: req.body.category_id
	})
		.then((quoteData) => res.json(quoteData))
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

//SEARCH BY KEYWORD - (searchbar)
router.get('/keyword/:key', async (req, res) => {
	try {
		const quotesData = await Quotes.findAll({
			attributes: [ 'id', 'description', 'author' ],
			where: {
				description: {
					[op.like]: `%${req.params.key}%`
				}
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
			],
			order: [ [ 'created_at', 'DESC' ] ]
		});
		const quotes = quotesData.map((quote) => quote.get({ plain: true }));

		if (Object.keys(quotes).length === 0) {
			res.render('display-quotes', {
				title: 'No result found',
				loggedIn: req.session.loggedIn,
				userId: req.session.userId,
				username: req.session.username,
			});
		} else {
			res.render('display-quotes', {
				title: 'Results',
				quotes,
				loggedIn: req.session.loggedIn,
				userId: req.session.userId,
				username: req.session.username,
			});
		}
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

//SEARCH BY AUTHOR - (searchbar)
router.get('/author/:key', async (req, res) => {
	try {
		const quotesData = await Quotes.findAll({
			attributes: [ 'id', 'description', 'author' ],
			where: {
				author: {
					[op.like]: `%${req.params.key}%`
				}
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
			],
			order: [ [ 'created_at', 'DESC' ] ]
		});
		const quotes = quotesData.map((quote) => quote.get({ plain: true }));
		if (Object.keys(quotes).length === 0) {
			res.render('display-quotes', {
				title: 'No result found',
				loggedIn: req.session.loggedIn,
				userId: req.session.userId,
			});
		} else {
			res.render('display-quotes', {
				title: 'Results',
				quotes,
				loggedIn: req.session.loggedIn,
				userId: req.session.userId,
				username: req.session.username,
			});
		}
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

module.exports = router;
