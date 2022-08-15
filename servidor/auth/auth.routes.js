const Users = require('../controllers/usuarioController');
const router = require('../routes/usuario');

router.post('/', authController.loginUser);

//module.exports = router;
module.exports = (router)