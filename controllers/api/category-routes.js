const router = require('express').Router();
const { Quotes, User, Category } = require('../../models');
const sequelize = require('../../config/connection');

// GET ALL - purely FOR TTESTING PURPOSES IN THE BACK END
router.get('/', (req, res) => {
  // Access our User model and run .findAll() method)
  Category.findAll()
    .then(catData => res.json(catData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


// POST - purely FOR TESTING PURPOSES IN THE BACK END
router.post('/', (req, res) => {
  // expects { category_name:}
  Category.create({
    category_name: req.params.category_name
  })
    .then(catData => res.json(catData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//////commented change from pon's brnach
// router.get('/:id', (req, res) => {
//   Quotes.findAll({
//     attributes: [ 'id', 'description', 'author', 'created_at' ],
//     			order: sequelize.literal('rand()'),
//     			limit: 5,
//     where: {
//       category_id: req.params.id
//     },
//     include: [
//       {
//         model: User,
//         attributes: ['username']
//       },
//       {
//         model: Category,
//         attributes: ['category_name']
//       },
//     ],
//     order: [
//       ['created_at', 'DESC'],
//   ],
//   })
//     .then(quoteData => {
      
//       if (!quoteData) {
//         res.status(404).json({ message: 'No Quotes Found' });
//         return;
//       }
//       const quotes = quoteData.map(quote => quote.get({ plain: true }));
//       // res.json(quotes)
//       res.render('quote-category', { quotes, title:'Results' });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });



// UPDATE .... upcoming update

// DELETE ... upcoming update

module.exports = router;