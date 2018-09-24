const
    fs = require('fs-extra'),
    path = require('path')

mmethods = ( mpath ) => {
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

module.exports = mmethods