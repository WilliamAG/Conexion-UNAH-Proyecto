const mongoose = require('mongoose');
require('dotenv').config();
const UsuarioSchema = require('../models/Usuario')


const conectarDB = async()=>{
 try {
    await mongoose.connect(process.env.DB_MONGO, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        keepAlive: true,
        //useFindAndModify: false,
    })
    console.log('BASE DE DATOS CONECTADA')
 } catch (error) {
    console.log(error);
    process.exit(1);//Detenemos el app
 }
}

module.exports=conectarDB;

//PARA LA PARTE DEL LOGIN NUEVO


UsuarioSchema.statics = {
   
   create: function (data,cb){
      const usuario = new this(data);
      usuario.save(cb);
   },
   login: function(query, cb){
      this.find(query, cb);
   }
} 

//const Usuario = mongoose.model('Usuarios', UsuarioSchema);
// module.exports = Usuario;
//module.exports = mongoose.model(UsuarioSchema,mongoose.model(),"Usuarios");
//const Usuario = mongoose.model('Usuario', UsuarioSchema);
// module.exports = UsuarioSchema;

//FIN PARA LA PARTE DEL LOGIN NUEVO