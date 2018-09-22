const
    fs = require('fs-extra'),
    path = require('path')

let utils = {}

utils.mroutes = ( mpath, router ) => {
    let target_path = path.join( process.cwd(), mpath )
    fs
        .readdirSync( target_path )
        .forEach( dir => {
            if( fs.existsSync(`${ target_path }/${dir}/routes`) ){
                router.use(`/${dir}`, require(`${ target_path }/${dir}/routes`)( "input" ))
            }
        })
}

module.exports = utils
