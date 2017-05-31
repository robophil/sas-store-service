const Waterline = require('waterline')
const SailsMongo = require('sails-mongo')
const glob = require("glob")

// Instantiate a new instance of the ORM
const orm = new Waterline()

// Build A Config Object
var config = {

    // Setup Adapters
    // Creates named adapters that have have been required
    adapters: {
        'mongo': SailsMongo
    },

    // Build Connections Config
    // Setup connections using the named adapter configs
    connections: {
        myMongoDb: {
            adapter: 'mongo',
            host: 'localhost',
            port: 27017,
            user: '', //optional
            password: '', //optional
            database: 'sas_store_service' //optional
        }
    },

    defaults: {
        migrate: 'alter'
    }

}

//config options for glob
var options = { cwd: './db' }

module.exports = {
    start: () => new Promise((resolve, reject) => {
        glob("models/*.js", options, function (err, files) {
            if (err) return reject({error: err, message: 'error loading models for waterline'})

            files.map(file => "./" + file.substr(0, file.length - 3)).forEach(file => {
                const model = require(file)
                orm.loadCollection(model)
                console.log(`Model "${file}" has been loaded`)
            })

            // Start Waterline passing adapters in
            orm.initialize(config, function (err, models) {
                if (err) return reject({error: err, message: 'could not initialize waterline orm after loading models'})
                console.log('OK')
                return resolve(models)
            })
        })
    })
}