const
    router = require('express').Router()

module.exports = methods => {
    
    router.get('/', ( req, res ) => {
        res.send('Authentication page') 
    })

    router.get('/test', ( req, res ) => {
        methods.testauthen().then( result => {
            res.send( result )
        })
    })
    
    return router
}