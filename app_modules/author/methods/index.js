module.exports = models => {

    let methods = {}
    methods.testauthor = input => {
        return new Promise( res  => res( 'testauthor') )
    }

    methods.testauthor2 = input => {
        return new Promise( res  => res( 'testauthor2') )
    }

    return methods 
} 