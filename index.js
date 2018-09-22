const 
app = require('express')()

app.get('/', ( req, res, next) => { 
    res.send('Hello dude!')
})

app.listen( 3000 , console.log( 'API was start '))

