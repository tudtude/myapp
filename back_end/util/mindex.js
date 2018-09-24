const
    fs = require('fs-extra'),
    path = require('path')

mindex = ( cwd ) => {
    let mobject = {}
    let dir = path.relative( __dirname, cwd )
    fs
        .readdirSync( cwd )
        .forEach( file => {
            if(file.match(/\.js$/) !== null && file !== 'index.js'){
                file = file.replace('.js', '')
                mobject[file] = require(`${dir}/${file}`)()
            }
        })
    return mobject     
}

module.exports = mindex