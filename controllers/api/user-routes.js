const router = require('express').Router();

// User routes
// http://localhost:3006/api/users
router.get('/', async (req, res) => {

    res.send('User section');
  
});

module.exports = router;