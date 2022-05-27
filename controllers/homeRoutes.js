const router = require('express').Router();

// TODO: Import the custom middleware

// GET Quotes of the Day
router.get('/home', async (req, res) => {

    res.send('Welcome to Quotes-Smith Homepage');
  
});

module.exports = router;