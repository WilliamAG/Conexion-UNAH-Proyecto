
const mongoose = require('mongoose');
const UsuarioSchema = require('../models/Usuario')

UsuarioSchema.statics = {
   
    create: function (data,cb){
       const usuario = new this(data);
       usuario.save(cb);
    },
    login: function(query, cb){
       this.find(query, cb);
    }
 }
 
 //const Usuario = mongoose.model('Usuarios', UsuarioSchema);//module.exports = Usuario;
 //module.exports = mongoose.model(UsuarioSchema,mongoose.model(),"Usuarios");
 //const Usuario = mongoose.model('Usuario', UsuarioSchema);
 // module.exports = UsuarioSchema;
 
 //FIN PARA LA PARTE DEL LOGIN NUEVO
 