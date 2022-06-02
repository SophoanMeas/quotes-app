const router = require('express').Router();
const { Quotes, User, Category } = require('../../models');
const sequelize = require('../../config/connection');
// const Sequelize = require("sequelize");

router.get('/category', (req, res) => {
	// Access our User model and run .findAll() method)
	Category.findAll().then((catData) => res.json(catData)).catch((err) => {
		console.log(err);
		res.status(500).json(err);
	});
});

// GET quotes by category_id
// router.get('/:id', async (req, res) => {
// 	try {
// 	const quotesData =	Quotes.findAll({
// 			attributes: [ 'id', 'description', 'author', 'created_at' ],
// 			order: sequelize.literal('rand()'),
// 			limit: 4,

// 			where: {
// 				category_id: req.params.id
// 			},
// 			include: [
// 				{
// 					model: User,
// 					attributes: [ 'username' ]
// 				},
// 				{
// 					model: Category,
// 					attributes: [ 'category_name' ]
// 				}
// 			],
// 			order: [ [ 'created_at', 'DESC' ] ]
// 		});
//     const quotes = quotesData.map(quote => quote.get({plain: true}))
//     res.render('category-quotes', 
//     {
//       quotes, 
//       title: 'Result'
//     })
// 	} catch (err) {
// 		console.log(err);
// 		res.status(500).json(err);
// 	}

// });

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
      const quotes = quoteData.map(quote => quote.get({ plain: true }));
      // res.json(quotes)
      res.render('quote-category', { quotes, title:'Results' });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});









module.exports = router;
