const 
app = require('express')(),
routes = require('./back_end/routes')


app.get('/', ( req, res ) => { 
    res.send('Hello dude!')
})
app.use('/api', routes )

app.listen( 3000 , console.log( 'API was start '))

