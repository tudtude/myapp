const
    fs = require('fs-extra'),
    path = require('path')

let utils = {}

utils.mroutes = ( mpath, router, methods ) => {
    let target_path = path.join( process.cwd(), mpath )
    fs
        .readdirSync( target_path )
        .forEach( dir => {
            if( fs.existsSync(`${ target_path }/${dir}/routes`) ){
                router.use(`/${dir}`, require(`${ target_path }/${dir}/routes`)( methods ))
            }
        })
}

utils.mmethods = ( mpath ) => {
    let methods = {}
    let target_path = path.join( process.cwd(), mpath )
    fs
        .readdirSync( target_path )
        .forEach( dir => {
            if( fs.existsSync(`${ target_path }/${ dir }/methods`)) {
                Object.assign( methods, require(`${ target_path }/${ dir }/methods`)())
            }
        })
    return methods
}

module.exports = utils
