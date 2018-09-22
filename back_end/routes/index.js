const
    router = require('express').Router(),
    { mroutes } = require('../util')

router.get('/', (req, res ) => {
    res.send( 'api online')
})

mroutes( 'app_modules', router )

module.exports = router
