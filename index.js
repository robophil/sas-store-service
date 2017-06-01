const db = require('./db')
const glob = require("glob")

//config options for glob
var options = {}

//try to establish connection to the database
db.start().then(models => {
    for (var key in models.collections) {
        var model = key.toLocaleLowerCase()
        model = model[0].toUpperCase() + model.substr(1)

        //make models global
        global[model] = models.collections[key]
    }
}).then(() => {
    //load all service in ./app directory
    loadServices().then(console.log).catch(console.log)
}).catch(err => {
    console.log(err.message)
    console.log(err.error)
})

/**
 * Function for loading services
 */
function loadServices() {
    return new Promise((resolve, reject) => {
        glob("app/*.js", options, function (err, files) {
            if (err) return reject({ error: err, message: 'error loading services' })

            files.map(file => "./" + file.substr(0, file.length - 3)).forEach(file => {
                //load microservice
                require(file)
                console.log(`Service "${file}" has been loaded`)
            })

            return resolve("All services has been loaded")
        })
    })
}