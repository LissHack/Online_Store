const {query} = require("express");
const ApiError = require('../error/ApiError')

class UserController {
    async registration(req, res) {

    }

    async login(req, res) {

    }

    async check(req, res, next) {
        // res.json('123131321')
        const {id} = req.query
        if(!id){
            return next(ApiError.badRequest('Не задан id'))
        }
        res.json(id)
    }
}

module.exports = new UserController()