module.exports = models => {

    let methods = {}
    methods.testauthen = input => {
        return new Promise( res  => res( 'testauthen') )
    }

    return methods 
} 