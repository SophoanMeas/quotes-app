const router = require('express').Router();

const apiRoutes = require('./api');
router.use('/api', apiRoutes);

//if we make a request to any endpoint that doesn't exist. 
router.use((req, res) => {
  res.status(404).end();
});


// const apiRoute = require('./api')
const homeRoutes = require('./home-routes')

router.use('/', homeRoutes);
// router.use('/api', apiRoutes)

module.exports = router;