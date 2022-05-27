const router = require('express').Router();

// User routes
router.get('/', async (req, res) => {

    res.send('User section');
  
});

module.exports = router;