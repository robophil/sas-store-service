var Waterline = require('waterline');

// Define your collection (aka model) 
var category = Waterline.Collection.extend({

    tableName: 'category',

    schema: true,

    attributes: {

        //model
        store: {
            model: 'store'
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
});