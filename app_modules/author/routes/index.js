const 
    router = require('express').Router()

module.exports = methods => {

    router.get('/', ( req, res ) => {
        res.send('Authorization page') 
    })
    
    return router
}