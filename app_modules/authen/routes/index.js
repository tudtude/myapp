const 
router = require('express').Router()

module.exports = methods => {

    router.get('/', ( req, res ) => {
        res.send('Authentication page') 
    })
    
    return router
}