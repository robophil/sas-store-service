var Waterline = require('waterline');

// Define your collection (aka model) 
var subcategory = Waterline.Collection.extend({

    tableName: 'subcategory',

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
});