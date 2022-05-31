
const router = require('express').Router();
const { Quotes, User, Category } = require('../../models');
const sequelize = require('../../config/connection');
const Sequelize = require("sequelize");
const op = Sequelize.Op;

// GET ALL quotes - (Purely for testing purposes)
router.get('/', (req, res) => {
  Quotes.findAll({
    attributes: ['id', 'description', 'author', 'created_at'],
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

//GET Random Quote - Quote fo the Day
router.get('/day', (req, res) => {
  Quotes.findAll({
    attributes: ['id', 'description', 'author'],
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
    .then(quoteData => res.json(quoteData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET quotes by Keyword 
router.get('/word', (req, res) => {
  Quotes.findAll({
    attributes: ['id', 'description', 'author', 'created_at'],
    where: {
        description: 
        {
          [op.like]: `%${req.body.description}%`
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

// GET quotes by Author  
router.get('/author', (req, res) => {
  Quotes.findAll({
    attributes: ['id', 'description', 'author', 'created_at'],
    where: {
        author: 
        {
          [op.like]: `%${req.body.author}%`
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

// UPDATE - LIKE a quote by USER Session --- UPDATE in the WORKS
router.put('/like', (req, res) => {
  Liked.create({
    user_id: req.body.user_id,
    quote_id: req.body.quote_id
  })

  // .then( Quotes.update(
  //   {
  //     likes: sequelize.literal('likes + 1'),
  //     is_liked: 1
  //   },
  //   {
  //     where: {
  //       id: req.body.id
  //     }
  //   }))

  .then(() => {
    return Quotes.findOne({
      where: {
        id: req.body.quote_id
      },
      attributes: [
        'id',
        'description',
        'category_id'
        // use raw MySQL aggregate function query to get a count of how many likes
      // [sequelize.literal('(SELECT COUNT(*) FROM liked WHERE req.body.quote_id = liked.quote_id)'), 'likes_count']  
      ],
      include:       {
        model: Category,
        attributes: ['category_name']
      },
    })
  })
    .then(quoteData => res.json(quoteData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

// GET quotes that are liked -----IN THE WORKS
// router.get('/favourites', (req, res) => {
//   Quotes.findAll({
//     attributes: { exclude: ['updatedAt'] },
//     where: {
//       is_liked: true
//     }
//   })
//     .then(quoteData => {
//       if (!quoteData) {
//         res.status(404).json({ message: 'No Quotes Found' });
//         return;
//       }
//       res.json(quoteData);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });



// PUT - BOOLEAN LIKES (chnage the si_liked status)
router.put('/:id', (req, res) => {
  Quotes.update(
    // {
    //   // likes: sequelize.literal('likes + 1'),
    //   is_liked: 1
    // },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(quoteData => {
      if (!quoteData) {
        res.status(404).json({ message: 'No quotes found with this id' });
        return;
      }
      res.json(quoteData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


// GET quotes by category_id
router.get('/:category_id', (req, res) => {
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


// POST a Quote
router.post('/', (req, res) => {
  // expects { description: "text", created_by: "Adrian", category_id: 1}
  Quotes.create({
    description: req.body.description, 
    author: req.body.author, 
    likes: 0, 
    user_id: req.body.user_id, //req.session.user_id
    category_id: req.body.category_id, 
    is_liked: 0,
  })
    .then(quoteData => res.json(quoteData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;