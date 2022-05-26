const router = require('express').Router();


// const apiRoute = require('./api') //potential bug
const homeRoutes = require('./home-routes')

router.use('/', homeRoutes);
// // router.use('/api', apiRoutes)


router.use((req, res) => { //if we make a request to any endpoint that doesn't exist. 
  res.status(404).end();
});


module.exports = router;
