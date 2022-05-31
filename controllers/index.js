const router = require('express').Router();
const apiRoutes = require('./api')
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes) // home page
router.use('/api', apiRoutes) // routes to api folder

router.use((req, res) => { //if we make a request to any endpoint that doesn't exist. 
  res.status(404).end();
});


module.exports = router;