const
    router = require('express').Router(),
    { mroutes, mmethods } = require('../util')

router.get('/', (req, res ) => {
    res.send( 'api online')
})

methods = mmethods( 'app_modules' )
mroutes( 'app_modules', router, methods )

module.exports = router