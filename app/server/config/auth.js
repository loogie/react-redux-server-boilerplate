// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'twitterAuth' : {
        'consumerKey'       : 'l8OUT3cIwZVkwQRQOOLh6OJ1Y',
        'consumerSecret'    : 'lwMEI2wAlCUd8MnZMiDwJ6QpiODawLDHjnNL4Ha2znap7EXEpp',
        'callbackURL'       : 'http://localhost:3000/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : '291231267816-m2vib60t122fcqn6bqckb734pe3ad2b2.apps.googleusercontent.com',
        'clientSecret'  : '3XRkrHTLivkKITonezdQDd8K',
        'callbackURL'   : 'http://localhost:3000/auth/google/callback'
    }

};
