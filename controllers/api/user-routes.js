const router = require('express').Router();
const { User } = require('../../models');

// CREATE new user
router.post('/', async (req, res) => {
	try {
		const userData = await User.create({
			username: req.body.username,
			first_name: req.body.firstName,
			last_name: req.body.lastName,
			email: req.body.email,
			password: req.body.password
		});

		req.session.save(() => {
			req.session.loggedIn = true;
			req.session.userId = userData.id;
            req.session.username = userData.username;
			res.status(200).json(userData);
		});
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

// login
router.post('/login', async (req, res) => {
	try {
		const userData = await User.findOne({
			where: {
				username: req.body.username
			}
		});
		if (!userData) {
			res.status(400).json({ message: 'Wrong username/password. Try again!' });
			return;
		}
		const password = await userData.checkPassword(req.body.password);
		if (!password) {
			res.status(400).json({ message: 'Incorrect username or password. Please try again!' });
			return;
		}
		req.session.save(() => {
			req.session.loggedIn = true;
			res.status(200).json({ user: userData, message: 'You are now logged in!' });
		});
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

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

module.exports = router;
