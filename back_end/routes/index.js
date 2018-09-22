const
router = require('express').Router(),
authen = require('../../app_modules/authen/routes')()
author = require('../../app_modules/author/routes')()

router.get('/', (req, res ) => {
    res.send( 'api online')
})

router.use('/authen', authen )
router.use('/author', author )
console.log( authen )

module.exports = router