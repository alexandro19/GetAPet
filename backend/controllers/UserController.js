const User = require('../models/User')

module.exports = class UserController{
  static async register(req, res){
    const name = req.body.name
    const email = req.body.email
    res.json('Olá Get A Pet')
  }  
}