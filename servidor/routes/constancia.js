const express = require ('express');
const router = express.Router();
const constanciaController = require('../controllers/constanciaController');

router.post('/', constanciaController.editarConstancia);
router.get('/', constanciaController.obtenerConstancias);
router.put('/:id', constanciaController.actualizarConstancia);
router.get('/:id', constanciaController.obtenerConstancia);
router.delete('/:id', constanciaController.eliminarConstancia);


module.exports = router;