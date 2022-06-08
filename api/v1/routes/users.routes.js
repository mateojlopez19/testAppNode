const db = require('../../../models')
const {Router} = require('express');
const userController = require('../../../controllers/userController');
const router = Router();


router.post('/', userController.createUser);

//Ruta para traer todos los datos
router.get('/', userController.getAllUsers);

//Ruta para traer un usuario especifico
router.get('/:userId', userController.getUser);


//Ruta para actualizar un usuario
router.put('/:userId', userController.updateUser);


//Ruta para eliminar un usuario
router.delete('/:userId', userController.deleteUser);

module.exports = router;  //se exporta el modulo para poder usar