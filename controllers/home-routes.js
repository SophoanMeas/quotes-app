const router = require('express').Router();

// TODO: Import the custom middleware

// GET all galleries for homepage
router.get('/author:', async (req, res) => {

    res.send('Welcome to Quotes-Smith Homepage');
  
});

module.exports = router;