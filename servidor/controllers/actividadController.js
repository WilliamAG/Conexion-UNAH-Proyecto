const { request, response } = require('express')
const { v2 } = require('cloudinary')
const cloudinary = v2
const Actividad = require('../models/Actividad')
var fs = require('fs')
const path = require('path')

// Configurando las credenciales de cloudanary
cloudinary.config({
    cloud_name: 'dwze7fq4u',
    api_key: '727758864851128',
    api_secret: 'FFe7eb8gy6uieFvE853ZxhQExts',
})

const nuevaActividad = async (req = request, res = response) => {
    try {
        const body = req.body
        const actividad = new Actividad(body)
        await actividad.save()
        res.send(actividad)
    } catch (error) {
        res.status(500).json({ msg: 'error al crear actividad' })
        console.log(error)
    }
}

// Controlador para subir imagenes
const subirImagen = async (req = request, res = response) => {
    try {
        const pathImg = req.file.path // Guardar los datos de la imagen
        const { url } = await cloudinary.uploader.upload(pathImg) // subir la imagen a cloudanary
        res.status(201).json(url) // retornando url de la imagen
    } catch (error) {
        res.status(500).json({ msg: 'No se pudo guardar la imagen' })
        console.log(error)
    }
}

// Controlador para obtener una actividad
const obtenerActividad = async (req, res) => {
    try {
        const id = req.params.id
        const actividad = await Actividad.findById(id).populate('usuarios')
        res.json(actividad)
    } catch (error) {
        res.status(500).json({ msg: 'No se pudo obtener la actividad' })
        console.log(error)
    }
}

//  Controlador para actualizar una actividad
const actualizarActividad = async (req, res) => {
    try {
        const id = req.params.id
        const body = req.body
        const actividad = await Actividad.findByIdAndUpdate(id, body, {
            new: true,
        })
        res.json(actividad)
    } catch (error) {
        res.status(500).json({ msg: 'No se pudo actualizar la actividad' })
        console.log(error)
    }
}

const obtenerActividades = async (req, res) => {
    try {
        const actividad = await Actividad.find().populate('usuarios').exec()
        res.json(actividad)
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}

const eliminarActividad = async (req, res) => {
    try {
        const id = req.params.id
        const actividad = await Actividad.findByIdAndDelete(id)
        res.json(actividad)
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}

const agregarUsuarioActividad = async (req, res) => {
    try {
        const id = req.params.id
        const usuario = req.params.usuario
        const actividad = await Actividad.findById(id)
        actividad.usuarios.push(usuario)
        await actividad.save()
        res.json(actividad)
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}

module.exports = {
    nuevaActividad,
    subirImagen,
    obtenerActividades,
    eliminarActividad,
    obtenerActividad,
    actualizarActividad,
    agregarUsuarioActividad,
}
