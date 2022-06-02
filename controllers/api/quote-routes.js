const router = require('express').Router();
const { Quotes, User, Category } = require('../../models');
const sequelize = require('../../config/connection');
const Sequelize = require('sequelize');
const op = Sequelize.Op;

// POST a Quote
router.post('/', (req, res) => {
	Quotes.create({
		description: req.body.description,
		author: req.body.author,
		likes: 0,
		user_id: req.body.user_id, //req.session.user_id
		category_id: req.body.category_id,
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
		const quotesData = await 
			Quotes.findAll({
				attributes: ['id', 'description', 'author', 'likes'],
				where: {
					description: 
							{
								[op.like]: `%${req.params.key}%`
							}

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
		res.render('search-results', {
			title: 'Query Results',
			quoteResults,
		});
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

//SEARCH BY AUTHOR - (searchbar)
router.get('/author/:key', async (req, res) => {
	try {
		const quotesData = await 
			Quotes.findAll({
				attributes: ['id', 'description', 'author', 'likes'],
				where: {
					author: 
							{
								[op.like]: `%${req.params.key}%`
							}
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
		res.render('search-by-author', {
			title: 'Author Results',
			quoteResults,
		});
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});


module.exports = router;
