const router = require('express').Router();
const { Quotes, User, Category, Like } = require('../../models');
const sequelize = require('../../config/connection');
const Sequelize = require("sequelize");
const Op = Sequelize.Op;



// GET ALL quotes /api/quotes  - (Purely for testing purposes)
router.get('/', (req, res) => {
  // Access our User model and run .findAll() method)
  Quotes.findAll({
    attributes: { exclude: ['updatedAt'] },
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


//GET Random Quote form the general pool
router.get('/day', (req, res) => {
  // Access our User model and run .findAll() method)
  Quotes.findAll({
    order: sequelize.literal('rand()'), 
    limit: 1
  })
    .then(quoteData => res.json(quoteData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});




// // UPDATE - LIKE a quote  --- UPDATE in the WORKS
// router.put('/like', (req, res) => {
//   Like.create({
//     user_id: req.body.user_id,
//     quote_id: req.body.quote_id
//   })
//   // .then(() => {
//   //   return Quotes.findOne({
//   //     where: {
//   //       id: req.body.quote_id
//   //     },
//   //     attributes: [
//   //       'id',
//   //       'description'
//   //       // use raw MySQL aggregate function query to get a count of how many likes
//   //       [
//   //         sequelize.literal('(SELECT COUNT(*) FROM like WHERE quotes.id = like.quote_id)'),
//   //         'likes'
//   //       ]  
//   //     ]
//   //   })
//   // })
//     .then(quoteData => res.json(quoteData))
//     .catch(err => {
//       console.log(err);
//       res.status(400).json(err);
//     });
// });

// GET quotes by keyword 
router.get('/word', (req, res) => {
  Quotes.findAll({
    where: {
        description: 
        {
            [Op.like]: 
            `%${req.body.description}%`
          }
    }
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


// GET quotes by AUTHOR  
router.get('/author', (req, res) => {
  Quotes.findAll({
    where: {
        author: 
        {
            [Op.like]: 
            `%${req.body.author}%`
          }
    }
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



// GET quotes by category_id
router.get('/favourites', (req, res) => {
  Quotes.findAll({
    attributes: { exclude: ['updatedAt'] },
    where: {
      is_liked: true
    }
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



// PUT - INCREASE the NUMBEr of LIKES (inclrease the general count)
router.put('/:id', (req, res) => {
  Quotes.update(
    {
      likes: sequelize.literal('likes + 1'),
      is_liked: 1
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


// GET quotes by category_id
router.get('/:category_id', (req, res) => {
  Quotes.findAll({
    attributes: { exclude: ['updatedAt'] },
    where: {
      category_id: req.params.category_id
    },
    include: [
      {
        model: User,
        attributes: ['username']
      }
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
  // expects { description: "text", created_by: "Adrian", category_id: 1}
  Quotes.create({
    description: req.body.description, 
    author: req.body.author, 
    likes: 0, 
    user_id: req.body.user_id,
    category_id: req.body.category_id, 
    is_liked: 0,
  })
    .then(quoteData => res.json(quoteData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


// DELETE ... upcoming update

module.exports = router;