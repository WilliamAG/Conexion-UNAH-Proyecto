
const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();


//Creamos el servidor
const app = express();

//Conectamos a la BDD
conectarDB();
app.use(cors());

app.use(express.json());

// Guardar temporalmente la imagen
const storage = multer.diskStorage({
    destination: path.join(__dirname, '/public/uploads'),
    filename: (req, file, cb) => {
        const date = new Date();
        cb(null, date.getTime() + path.extname(file.originalname) );
    }
});

// Utilizando el middleware de multer
app.use(multer({storage}).single('image'));

app.use('/api/actividad', require('./routes/actividad'));
app.use('/api/usuario', require('./routes/usuario'));
app.use('/api/constancia',require('./routes/constancia'))

//TAMBIEN USADO EN LOGIN, PERO IMPLEMENTADO DESDE REGISTER

app.listen(process.env.PORT || 4000, ()=>{
    console.log(`El servidor esta corriendo en el puerto ${process.env.PORT}`);
})

