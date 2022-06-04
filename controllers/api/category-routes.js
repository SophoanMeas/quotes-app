const router = require('express').Router();
const { Quotes, User, Category } = require('../../models');
const sequelize = require('../../config/connection');

router.get('/category', (req, res) => {
	// Access our User model and run .findAll() method)
	Category.findAll().then((catData) => res.json(catData)).catch((err) => {
		console.log(err);
		res.status(500).json(err);
	});
});

router.get('/:id', (req, res) => {
	Quotes.findAll({
		attributes: [ 'id', 'description', 'author', 'created_at' ],
		order: sequelize.literal('rand()'),
		limit: 5,
		where: {
			category_id: req.params.id
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
	})
		.then((quoteData) => {
			if (!quoteData) {
				res.status(404).json({ message: 'No Quotes Found' });
				return;
			}
			const quotes = quoteData.map((quote) => quote.get({ plain: true }));
			res.render('display-quotes', { quotes, title: 'Results' });
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

module.exports = router;
