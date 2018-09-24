module.exports = models => {

    let methods = {}
    methods.testauthor = input => {
        return new Promise( res  => res( 'testauthor') )
    }

    return methods 
} 