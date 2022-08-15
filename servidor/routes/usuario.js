//Rutas del usuario
const express= require('express');
const router=express.Router();
const usuarioController = require('../controllers/usuarioController');
const authController = require('../controllers/auth.controller')

//api/usuario
router.post('/', usuarioController.crearUsuario);
router.get('/tarea', usuarioController.tarea);
router.get('/privateTarea', usuarioController.privateTarea);
router.get('/', usuarioController.obtenerUsuarios);
router.put('/:id', usuarioController.actualizarUsuarios);
router.get('/user', usuarioController.obtenerUsuario2);
router.get('/:id', usuarioController.obtenerUsuario);
router.delete('/:id', usuarioController.eliminarUsuarios);
router.post('/loginIn', usuarioController.loginIn);//desde aqui comence a modificar

// Rutas de cambio de contraseña
router.post('/generar-pass', usuarioController.generarPassTemporal);
router.post('/cambiar-pass', usuarioController.cambiarPass);

//router.get('/privateTasks', usuarioController.privateTasks);
//prueba
//router.get('/',(req, res)=> res.send('Hello bitchess'));

//api/login
//router.post('/', authController.loginUser);
router.post('/login', usuarioController.loginUser);

module.exports = router;