const router = require('express').Router();
const { Quotes, User } = require('../models');
// TODO: Import the custom middleware

// GET Quotes of the Day
router.get('/', async (req, res) => {
	try {
		const quotesData = await Quotes.findAll({
            include: [
                {
                  model: User,
                  attributes: ['username', 'first_name'],
                },
              ],
           
		});

		const quotes = quotesData.map((quote) => quote.get({ plain: true }));
		res.render('homepage', {
			quotes
			// loggedIn: req.session.loggedIn,
		});
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

router.get('/login', (req, res) => {
	if (req.session.loggedIn) {
		res.redirect('/');
		return;
	}

	res.render('login');
});

module.exports = router;
