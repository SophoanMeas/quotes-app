const router = require('express').Router();
const { User } = require('../../models');


// GET a user
// router.get('/', async (req, res) =>{

// })
// CREATE new user
router.post('/', async (req, res) => {
	try {
		const userData = await User.create({
			username: req.body.username,
			first_name: req.body.first_name,
			last_name: req.body.last_name,
			email: req.body.email,
			password: req.body.password
		});

		req.session.save(() => {
			req.session.loggedIn = true;
			res.status(200).json(userData);
		});
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

// Login
// router.post('/login', async (req, res) => {
// 	try {
// 		const userData = await User.findOne({
// 			where: {
// 				username: req.body.username
// 			},
//       include: [
//         {
//           mode: User,
//           attributes:[
//             'id',
//             'username',
//             'first_name',
//             'last_name'
//           ]
//         }
//       ]
// 		});
// 		if (!userData) {
// 			res.status(400).json({ message: 'Wrong username/password. Try again!' });
// 			return;
// 		}
// 		const password = await userData.checkPassword(req.body.password);
// 		if (!password) {
// 			req.session.loggedIn = true;
// 			res.status(200).json({ user: userData, message: 'Your are logged in' });
//       const user = userData.get({ plain: true});
//       res.render.json(user)



// 		}
// 	} catch (err) {
// 		console.log(err);
// 		res.status(500).json(err);
// 	}
// });

// Logout
router.post('/logout', async (req, res) => {
	if (req.session.loggedIn) {
		req.session.destroy(() => {
			res.status(204).end();
		});
	} else {
		res.status(404).end();
	}
});


// ADRIAN TEST--- DELETE++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// GET All users
router.get('/', (req, res) => {
  // Access our User model and run .findAll() method)
  User.findAll({
		attributes: { exclude: ['password'] }
	})
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// LOGIN User
router.post('/login', (req, res) => {
	User.findOne({
		where: {
			email: req.body.email
		}
	}).then(userData => {
		if (!userData) {
			res.status(400).json({ message: 'No user with that email address!' });
			return;
		}

		// Verify user password if the email was  found
		const validPassword = userData.checkPassword(req.body.password);
		if (!validPassword) {
			res.status(400).json({ message: 'Incorrect Password'});
			return
		}
		res.json({ user: userData, message: 'You are now logged IN'});
	});  
});

// GET User By ID
router.get('/:id', (req, res) => {
User.findOne({
  attributes: { exclude: ['password'] },
  where: {
    id: req.params.id
  }
})
  .then(dbUserData => {
    if (!dbUserData) {
      res.status(404).json({ message: 'No user found with this id' });
      return;
    }
    res.json(dbUserData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});
// ADRIAN TEST--- DELETE++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
module.exports = router;
