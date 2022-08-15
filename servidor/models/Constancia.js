const mongoose = require('mongoose');

const ConstanciaSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },

    carrera: {
        type: String,
        required: true
    },

    cuenta: {
        type: Number,
        required: true
    },

    actividad: {
        type: String,
        required: true
    },

    horas: {
        type: Number,
        required: true
    },

    ambito: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Constancia',ConstanciaSchema);
