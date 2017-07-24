const routes = require('express').Router()
let inv = require('../controller/inventoryController.js')

/* Inventory Routes */

/*get all client data */
routes.get('/inventory/list', (req, res, next) => {
    inv
        .findall()
        .then(function (result) {
            // console.log(result)
            res
                .status(200)
                .json(result)
        })
        .catch(function (err) {
            console.error(err)
            res
                .status(400)
                .json({error: "something might be going on with the client-server"})
        })
})

routes.get('/inventory/msg', (req, res, next) => {
    seneca.act({role: 'client', cmd: 'message', message: 'message'})
})

/* search for existing client */
routes.post('/inventory/find', (req, res, next) => {

    if (!req.body.company) 
        return res.status(400).json({message: 'please fill company name'})

    inv
        .findClient(req)
        .then(function (user) {
            res
                .status(200)
                .json(user)
        })
        .catch((err) => {
            res
                .status(400)
                .json({message: 'something happened'})
        })

})

/* add Member */
routes.post('/inventory/addMember', (req, res, next) => {
    inv
        .addMember(req)
        .then(function (result) {
            res
                .status(200)
                .json(result)
        })
        .catch((err) => {
            res
                .status(400)
                .json({message: 'something happened during update'})
        })

})

module.exports = routes
