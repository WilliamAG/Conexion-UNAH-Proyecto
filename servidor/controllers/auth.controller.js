const user = require('../auth/auth.dao');
const jws = require('jsonwebtoken');
const bcypt = require('bcryptjs');
const SECRET_KEY = 'secretkey123456';

exports.crearUsuario = (req, res, next)=>{
    const newUser = {
        email: req.body.email,
        password: req.body.password,

    }
}