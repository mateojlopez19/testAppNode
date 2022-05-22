const db = require('../models')
const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.send({message: 'Hello adsi 2231424'});
});

module.exports = router;  //se exporta el modulo para poder usar

router.post('/new', async (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;
    try {
        await db.User.create({
            name,
            email,
            password,
        });
        res.status(200).send('Usuario creado');
    } catch (error) {
        res.status(400).send('Usuario no pudo ser creado');
    }
});

//Ruta para traer todos los datos
router.get('/all', async (req, res) => {
    try {
        let users = await db.User.findAll();
        res.status(200).send(users);
    } catch (error) {
        res.status(400).send('No se pudieron obtener los usuarios');
    }
});

//Ruta para traer un usuario especifico
router.get('/:id', async (req, res) => {
    try {
        let id = req.params.id;
        let users = await db.User.findByPk(id);
        res.status(200).send(users);
    } catch (error) {
        res.status(400).send('No se pudo obtener el usuario');
    }
});


//Ruta para actualizar un usuario
router.put('/:id', async (req, res) => {
    try {
        let id = req.params.id;
        let {name, email, password} = req.body;

        await db.User.update(
            {name, email, password},
            {
                where: {
                    id,
                }
            }
        )
        res.status(200).send('Usuario actualizado correctamente');
    } catch (error) {
        res.status(400).send('No se pudo actualizar el usuario');
    }
});


//Ruta para eliminar un usuario
router.delete('/:id', async (req, res) => {
    try {
        let id = req.params.id;

        await db.User.destroy(
            {
                where: {
                    id,
                }
            }
        )
        res.status(200).send('Usuario eliminado correctamente');
    } catch (error) {
        res.status(400).send('No se pudo eliminar el usuario');
    }
});
