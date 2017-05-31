//try to establish connection to the database
const db = require('./db')
db.start().then(models => {
    for (var key in models.collections) {
        var model = key.toLocaleLowerCase()
        model = model[0].toUpperCase() + model.substr(1)

        //make models global
        global.model = models.collections[key]
    }
    console.log("Models can now be accessed globally as you would in sails.js")
}).catch(err => {
    console.log(err.message)
    console.log(err.error)
})