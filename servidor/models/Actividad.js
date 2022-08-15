const { Schema, model } = require('mongoose')

const ActividadSchema = Schema({
    nombre: {
        type: String,
        required: true,
    },
    area: {
        type: String,
        required: true,
    },
    horasArt: {
        type: Number,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
    modalidad: {
        type: String,
        required: true,
    },
    direccionPlataforma: {
        type: String,
        required: true,
    },
    fecha: {
        type: Date,
        required: true,
    },
    hora: {
        type: String,
        required: true,
    },
    facultad: {
        type: String,
        required: true,
    },
    encargados: {
        type: String,
        required: true,
    },
    urlImagen: {
        type: String,
        required: true,
    },
    usuarios: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Usuario',
        }
    ]
})

module.exports = model('Actividades', ActividadSchema)
