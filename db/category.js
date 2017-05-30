var Waterline = require('waterline');

// Define your collection (aka model) 
var category = Waterline.Collection.extend({

    tableName: 'category',

    schema: true,

    attributes: {

        store: {
            model: 'store'
        },

        name: {
            type: 'string',
            required: true
        },

        hasSubcategory: {
            type: 'boolean',
            defaultsTo: false
        },

        subcategories: {
            collection: 'subcategory',
            via: 'category'
        },

        url: {
            type: 'string',
            required: true,
            unique: true
        }
    }
});