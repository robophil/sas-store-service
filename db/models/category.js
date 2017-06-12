const Waterline = require('waterline')
const config = require('../config')

// Define your collection (aka model) 
module.exports = Waterline.Collection.extend(Object.assign({

    tableName: 'category',

    identity: 'category',

    schema: true,

    attributes: {

        //model
        store: {
            model: 'store',
            required: true
        },

        name: {
            type: 'string',
            required: true
        },

        url: {
            type: 'string',
            required: true,
            unique: true
        },

        hasSubcategory: {
            type: 'boolean',
            defaultsTo: false
        },

        //collection
        subcategories: {
            collection: 'subcategory',
            via: 'category'
        }
    }
}, config))