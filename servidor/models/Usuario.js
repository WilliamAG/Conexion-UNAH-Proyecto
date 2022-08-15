const mongoose = require('mongoose');

const UsuarioSchema = mongoose.Schema({
        dni: {
            type: String,
            required: true
            //,unique: true
        },
        nombre: {
            type: String,
            required: true
        },
        apellido:{
            type: String,
            required: true
        },
        telefono:{
            type: String,
            required: true
        },
        nacimiento: {
            type: Date,
            required: true
        },
        facultad: {
            type: String,
            required: true
        },
        carrera: {
            type: String,
            required: true
        },cuenta: {
            type: String,
            required: true
            //,unique: true
        },rol: {
            type: String,
            required: true
        },correo: {
            type: String,
            required: true
            //,unique: true
        },password: {
            type: String,
            required: true
        },fechaCreacion:{
            type: Date,
            default: Date.now()
        }
},{
    timestamps:true
});

 
module.exports = mongoose.model('Usuario', UsuarioSchema);//(Nombre del modelo, esquema a utilizar)