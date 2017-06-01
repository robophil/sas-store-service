const cote = require('cote')

const storeResponder = new cote.Responder({
    name: 'SAS-STORE-SERVICE: store-responder ',
    namespace: '',
    respondsTo: ['store.create', 'store.update', 'store.get', 'store.delete']
})

/**
 * Responder: {model, body}
 * Create a store. req.body eg {name: 'foo'} is the object to be created
 */
storeResponder.on('store.create', (req) => {
    switch (req.model) {
        case "store": return Store.create(req.body)

        case "category": return Category.create(req.body)

        case "subcategory": return Subcategory.create(req.body)

        default: return null
    }
})

/**
 * Responder: {model, body}
 * Update a store. req.query is an object eg {id: 1}, req.body eg {name: 'foo'} is the object to be updated
 */
storeResponder.on('store.update', (req) => {
    switch (req.model) {
        case "store": return Store.update(req.query, req.body)

        case "category": return Category.update(req.query, req.body)

        case "subcategory": return Subcategory.update(req.query, req.body)

        default: return null
    }
})

/**
 * Responder: {model, query}
 * Gets a store. req.query is an object eg {id: 1}
 */
storeResponder.on('store.get', (req) => {
    switch (req.model) {
        case "store": return Store.get(req.query)

        case "category": return Category.get(req.query)

        case "subcategory": return Subcategory.get(req.query)

        default: return null
    }
})

/**
 * Responder: {model, query}
 * Deletes a store. req.query is an object eg {id: 1}
 */
storeResponder.on('store.delete', (req) => {
    switch (req.model) {
        case "store": return Store.delete(req.query)

        case "category": return Category.delete(req.query)

        case "subcategory": return Subcategory.delete(req.query)

        default: return null
    }
})