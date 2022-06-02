const router = require('express').Router();
const { Quotes, User, Category } = require('../../models');
const sequelize = require('../../config/connection');
const Sequelize = require('sequelize');
const op = Sequelize.Op;

// GET quotes by Keyword 
router.get('/word/:keyword', (req, res) => {
	Quotes.findAll({
	  attributes: ['id', 'description', 'author', 'created_at'],
	  where: {
		  description: 
		  {
			// [op.like]: `%${req.body.description}%`
			[op.like]: `%${req.params.keyword}%`
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
	],
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
  
  // GET quotes by Author/Keyword
  router.get('/:query', (req, res) => {
  
	Quotes.findAll({
	  attributes: ['id', 'description', 'author', 'created_at'],
	  where: {
		[op.or]: [
		  {description: 
			{
			  [op.like]: `%${req.params.query}%`
			}}, 
		  {author: 
			{
			  [op.like]: `%${req.params.query}%`
			}}
		]
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

module.exports = router;
