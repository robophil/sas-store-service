const Waterline = require('waterline')
const config = require('../config')

// Define your collection (aka model) 
module.exports = Waterline.Collection.extend(Object.assign({

    tableName: 'subcategory',

    identity: 'subcategory',

    schema: true,

    attributes: {

        name: {
            type: 'string',
            required: true
        },

        url: {
            type: 'string',
            required: true
        },

        //model
        category: {
            model: 'category'
        }
    }
}, config))