const Constancia = require("../models/Constancia");
const path = require('path');

exports.editarConstancia = async (req, res) => {

    try{
        let constancia;
        constancia = new Constancia(req.body);

        await constancia.save();
        res.send(constancia)

    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

exports.obtenerConstancias = async (req, res) =>{
    try{
        const constancias = await Constancia.find();
        res.json(constancias)
    } catch(error){
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.actualizarConstancia = async (req,res) => {
    try{
        const{ nombre, carrera, cuenta, actividad, horas, ambito } = req.body;
        let constancia = await Constancia.findById(req.params.id);

        if (!constancia) {
            res.status(400).json({msg:'La constancia NO Existe'})
        }

        constancia.nombre = nombre;
        constancia.carrera = carrera;
        constancia.cuenta = cuenta;
        constancia.actividad = actividad;
        constancia.horas = horas;
        constancia.ambito = ambito; 

        constancia = await Constancia.findOneAndUpdate({_id: req.params.id},constancia,{new:true})
        res.json(constancia);
    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error');  
    }
}

exports.obtenerConstancia = async (req,res) => {
    try{
        let constancia = await Constancia.findById(req.params.id);

        if (!constancia) {
            res.status(400).json({msg:'La constancia NO Existe'})
        }

        res.json(constancia);
    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error');  
    }
}

exports.eliminarConstancia = async (req,res) => {
    try{
        let constancia = await Constancia.findById(req.params.id);

        if (!constancia) {
            res.status(400).json({msg:'La constancia NO Existe'})
        }

        await Constancia.findOneAndRemove({_id:req.params.id})
        res.json({msg: 'Constancia eliminada exitosamente'});
    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error');  
    }
}

