'use strict'

let seneca = require('seneca')()
seneca.client({ type: 'http', port: 8000, host: 'localhost' })

module.exports = {
    addClient: (req) => {
        return new Promise((resolve, reject) => {
            seneca.act({
                role: 'client',
                cmd: 'add',
                data: req.body
            }, (err, result) => {
                err
                    ? reject(err)
                    : resolve(result)
            })
        })
    },

    findClient: (req) => {
        return new Promise((resolve, reject) => {
            seneca.act({
                role: 'client',
                cmd: 'findOne',
                data: req.body
            }, (err, result) => {
                err
                    ? reject(err)
                    : resolve(result)
            })
        })
    },

    addMember: (req) => {
        return new Promise((resolve, reject) => {
            seneca.act({
                role: 'client',
                cmd: 'addMember',
                data: req.body
            }, (err, result) => {
                if (err) {
                    console.error(err)
                    reject(err)
                } else {
                    console.log('no error found in updating member')
                    console.log(result)
                    resolve(result)
                }
            })
        })
    },

    findall: () => {
        return new Promise((resolve, reject) => {
            seneca.act({
                role: 'client',
                cmd: 'findAll'
            }, (err, result) => {
                if (result)
                    resolve(result)
                else
                    reject(err)
            })
        })
    }

}