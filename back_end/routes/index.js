const
router = require('express').Router()

router.get('/', (req, res ) => {
    res.send( 'api online')
})

module.exports = router