const
    fs = require('fs-extra')
    
let utils = {}
fs
    .readdirSync( __dirname )
    .forEach( file => {
        if(file.match(/\.js$/) !== null && file !== 'index.js'){
            file = file.replace('.js', '')
            utils[file] = require(`./${file}`)
        }
    })
module.exports = utils
