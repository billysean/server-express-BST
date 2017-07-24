const routes = require('express').Router()
let client = require('../controller/clientController.js')

/* Client Routes */

/*get all client data */
routes.get('/allclient', (req, res, next) => {
    client
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
                .json({ error: "something might be going on with the client-server" })
        })
})

routes.get('/client/msg', (req, res, next) => {
    seneca.act({ role: 'client', cmd: 'message', message: 'message' })
})

/* search for existing client */
routes.post('/client/find', (req, res, next) => {

    if (!req.body.company)
        return res.status(400).json({ message: 'please fill company name' })

    client
        .findClient(req)
        .then(function (user) {
            res
                .status(200)
                .json(user)
        })
        .catch((err) => {
            res
                .status(400)
                .json({ message: 'something happened' })
        })

})


/* add Member */
routes.post('/client/addMember', (req, res, next) => {
    client
        .addMember(req)
        .then(function (result) {
            res
                .status(200)
                .json(result)
        })
        .catch((err) => {
            res
                .status(400)
                .json({ message: 'something happened during update' })
        })

})

/* delete member */

module.exports = routes
