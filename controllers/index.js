const router = require('express').Router();

// const apiRoute = require('./api')
const homeRoutes = require('./home-routes')

router.use('/', homeRoutes);
// router.use('/api', apiRoutes)

module.exports = router;