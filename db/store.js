var Waterline = require('waterline');

// Define your collection (aka model) 
var store = Waterline.Collection.extend({

    tableName: 'store',

    schema: true,

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
});