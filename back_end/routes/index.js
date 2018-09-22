const
router = require('express').Router(),
fs = require('fs-extra'),
path = require('path')

router.get('/', (req, res ) => {
    res.send( 'api online')
})

let traget_path = path.join( process.cwd(), 'app_modules' )
fs
.readdirSync( traget_path )
.forEach( dir => {
    if( fs.existsSync(`../../app_modules/${dir}/routes`) ){
        router.use(`/${dir}`, require(`../../app_modules/${dir}/routes`)( "input" ))
    }
})

module.exports = router

// authen = require('../../app_modules/authen/routes')('input')
// author = require('../../app_modules/author/routes')('input')
// router.use('/authen', authen )
// router.use('/author', author )

