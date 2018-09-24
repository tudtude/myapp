const 
    router = require('express').Router()

module.exports = methods => {

    router.get('/', ( req, res ) => {
        res.send('Authorization page') 
    })

    router.get('/test', ( req, res ) => {
        methods.testauthor().then( result => {
            res.send( result )
        })
    })
    
    return router
}