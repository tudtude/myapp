const
    fs = require('fs-extra'),
    path = require('path')

mroutes = ( mpath, router, methods ) => {
    let target_path = path.join( process.cwd(), mpath )
    fs
        .readdirSync( target_path )
        .forEach( dir => {
            if( fs.existsSync(`${ target_path }/${dir}/routes`) ){
                router.use(`/${dir}`, require(`${ target_path }/${dir}/routes`)( methods ))
            }
        })
}

module.exports = mroutes