const Waterline = require('waterline')
const config = require('../config')

// Define your collection (aka model) 
module.exports = Waterline.Collection.extend(Object.assign({

    tableName: 'store',

    identity: 'store',

    attributes: {

        name: {
            type: 'string',
            required: true,
            unique: true
        },

        url: {
            type: 'string',
            required: true,
            unique: true
        }
    }
}, config))