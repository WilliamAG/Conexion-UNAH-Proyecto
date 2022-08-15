const { json } = require("express");
const Usuario = require("../models/Usuario");
const jws = require('jsonwebtoken');//para encriptar la contrasena
const bcypt = require('bcryptjs');//
const { generarPass } = require("../helpers/generarPassword");
const emailer = require('../config/emailer');
const SECRET_KEY = 'secretkey123456';



exports.crearUsuario =async (req, res) => {//next en el parametro//agrege
try {
    let usuario;
    //Creamos nuestro usuario
    usuario = new Usuario(req.body);
    await  usuario.save();//elimine await

    const expiresIn = 24 * 60 * 60;//HERE
    const accessToken = jws.sign({id: usuario.id},
        SECRET_KEY,{
            expiresIn: expiresIn
    });
    /*
    const expiresIn = 24 * 60 * 60;//HERE
    const accessToken = jws.sign({id: usuario.id},
        SECRET_KEY,{
            expiresIn: expiresIn
        });//HERE
    */
    res.status(200).json({accessToken});

} catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error');
    
}
}

exports.loginIn  = async (req, res) =>{//el bueno, iniciar sesion
    const {correo, password} = req.body;
    const usuario = await Usuario.findOne({correo});
    if (!usuario) return res.status(401).send("La informacion es incorrecta.");
    if (usuario.password!== password) return res.status(401).send("La informacion es incorrecta");

    const token = jws.sign({_id: usuario._id}, SECRET_KEY);
    return res.status(200).json({token, usuario});
}

exports.tarea = (req, res)=>{

    //console.log(req.body);
    //res.send('Testing sign up');
    res.json([
        {
            _id:'1',
            name: 'Tasks one',
            description: 'lorem ipsum',
            date: "2022-07-10T06:11:08.152Z"
        },
        {
            _id:'2',
            name: 'Tasks two',
            description: 'lorem ipsum',
            date: "2022-07-10T06:11:08.152Z"
        },
        {
            _id:'3',
            name: 'Tasks three',
            description: 'lorem ipsum',
            date: "2022-07-10T06:11:08.152Z"
        }
    ]);
}

exports.privateTarea = verificarToken, (req, res)=>{
    
    res.json([
        {
            _id:1,
            name: 'Tasks private one',
            description: 'lorem ipsum',
            date: "2019-11-17"
        },
        {
            _id:2,
            name: 'Tasks private two',
            description: 'lorem ipsum',
            date: "2019-11-17"
        },
        {
            _id:3,
            name: 'Tasks private three',
            description: 'lorem ipsum',
            date: "2019-11-17"
        }
    ])  
}
//original
/*
exports.loginUser = (req, res, next) =>{
    const usuario = new Usuario(req.body);

}*/
exports.loginUser = (req, res, next) =>{
    const usuarioInfo = {
        correo: req.body.correo,
        password: req.body.password 
    }
    Usuario.findOne({correo : usuarioInfo.correo}, (err, usuario) => {
        if(err) return res.status(500).send('Server error!');
        if(!usuario){
            res.status(409).send({message : 'Something is wrong'});//El email no existe
        }else {
            const resultPassword = usuarioInfo.password;
            if(resultPassword){
                const expireIn = 24*60*60;
                const accessToken = jws.sign({id: user.id}, SECRET_KEY, {expireIn: expireIn});
                res.send({usuarioInfo});
            }else{
                res.status(409).send({message : 'Something is wrong'});//password malo
            }
        }
    })

}

exports.obtenerUsuarios = async (req, res) => {
    try {
        
        const usuarios = await Usuario.find();
        res.json(usuarios);

    } catch (error) {
        console.log(error);
    res.status(500).send('Hubo un error');
    }
}

exports.actualizarUsuarios = async (req, res)=>{
    try {
        const {dni,nombre,apellido,telefono,nacimiento,facultad,carrera,cuenta,rol,correo,password}= req.body;
        let usuario = await Usuario.findById(req.params.id);

        if(!usuario){
            res.status(404).json({msg:'N existe un usuario'})
        }

        usuario.dni = dni;
        usuario.nombre = nombre;
        usuario.apellido = apellido;
        usuario.telefono = telefono;
        usuario.nacimiento = nacimiento;
        usuario.facultad = facultad;
        usuario.carrera = carrera;
        usuario.cuenta = cuenta;
        usuario.rol = rol;
        usuario.correo = correo;
        usuario.password = password;

      usuario = await Usuario.findOneAndUpdate({ _id: req.params.id }, usuario, { new:true },  (err, doc) => {
            if (err) {
                console.log("Something wrong when updating data!");
            }
        
            console.log(doc);
        }); 
        usuario = await Usuario.findOneAndUpdate({ _id: req.params.id }, usuario, { new:true });
        res.json(usuario)
    } catch (error) {
        console.log(error); 
    res.status(500).send('Hubo un error');
    }
}

exports.obtenerUsuario = async (req, res)=>{
    try {
        let usuario = await Usuario.findById(req.params.id);

        if(!usuario){
            res.status(404).json({msg:'N existe un usuario'})
        }
        res.json(usuario);
    } catch (error) {
        console.log(error); 
    res.status(500).send('Hubo un error');
    }
}

exports.obtenerUsuario2 = verificarToken,async (req, res)=>{
    try {
        let usuario = await Usuario.findById(req.params.id);
        
        if(!usuario){
            res.status(404).json({msg:'N existe un usuario'})
        }
        res.json(usuario);
        console.log(usuario);
    } catch (error) {
        console.log(error); 
    res.status(500).send('Hubo un error');
    }
}

exports.eliminarUsuarios = async (req, res)=>{
    try {
        let usuario = await Usuario.findById(req.params.id);

        if(!usuario){
            res.status(404).json({msg:'N existe un usuario'})
        }
        await Usuario.findOneAndRemove({_id:req.params.id});
        res.json({msg:'Usuario Eliminado con exito.'});
    } catch (error) {
        console.log(error); 
    res.status(500).send('Hubo un error');
    }
}

//validar el acceso 
function verificarToken(req, res, next) {
    console.log(req.headers.authorization);
    if(!req.headers.authorization){
        return res.status(401).send('Unthorize Request');
    }

    const tokenRecuperado = req.headers.authorization.split(' ')[1];
    if (tokenRecuperado ==='null'){
        return res.status(401).send('Unathorize request.');
    };

    const payload = jws.verify(tokenRecuperado, SECRET_KEY);
    console.log(payload);// AQUI ESTA EL ID FINAL QUE SE NECESITA PARA ALIMENTAR
    req.userId = payload._id;
    next(); 
}
//obtener info perfil
exports.perfil = verificarToken, async (req, res)=>{
    try {
        let usuario = await Usuario.findById(req.params.id);

        if(!usuario){
            res.status(404).json({msg:'N existe un usuario'})
        }
        res.json(usuario);
    } catch (error) {
        console.log(error); 
    res.status(500).send('Hubo un error');
    }
}


exports.generarPassTemporal = async (req = request, res = response) => {
    try {
        const { email } = req.body
        console.log(email)
        const usuario = await Usuario.findOne({ correo: email }).exec()

        if (!usuario) {
            res.status(404).json({ msg: 'No se encontro usuario' })
            return
        }

        const { _id } = usuario
        const nuevaPass = generarPass(16)
        await Usuario.updateOne(
            { _id },
            { cambiarPassword: true, tempPassword: nuevaPass }
        )

        // enviarEmail(nuevaPass)
        emailer.sendMail(usuario, true, nuevaPass)

        res.status(200).json({ msg: 'ok' })
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}

exports.cambiarPass = async (req = request, res = response) => {
    try {
        const { tempPass, nuevaPass, id } = req.body
        console.log('viendo el id', id)
        const usuario = await Usuario.findById(id).exec()

        console.log('viendo el usuario', usuario)

        if (!usuario) {
            res.status(404).json({ msg: 'No se encontro usuario' })
            return
        }

        const { cambiarPassword, tempPassword } = usuario

        if (!cambiarPassword) {
            res.status(404).json({ msg: 'Cambio de contrasena no solicitado' })
            return
        }

        if (tempPass !== tempPassword) {
            res.status(404).json({ msg: 'Contrasena Incorrecta' })
            return
        }

        await Usuario.updateOne(
            { _id: id },
            { password: nuevaPass, cambiarPassword: false, tempPassword: '' }
        )
        res.status(200).json({ msg: 'Contrasena Cambiada exitosamente' })
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}

