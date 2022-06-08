const userService = require('../services/userService');

const getAllUsers = async(req, res) => {
    try {
        const allUsers = await userService.getAllUsers();
        res.status(200).send({status: "OK", data: allUsers});
    } catch (error) {
        res.status(error.status || 500).send({status: "FAILED", data: {error: error.message}});
    }
};

const getUser = async(req, res) => {
    let id = req.params.userId;
    try {
        const user = await userService.getUser(id);
        res.status(200).send({status: "OK", data: user});
    } catch (error) {
        res.status(error.status || 500).send({status: "FAILED", data: {error: error.message}});
    }
};

const createUser = async(req, res) => {
    const {body} = req;
    try {
        const createdUser = await userService.createUser(body.name, body.email, body.password);
        res.status(201).send({status: "OK", data: createdUser});
    } catch (error) {
        res.status(error.status || 500).send({status: "FAILED", data: {error: error.message}});
    }
};

const updateUser = async(req, res) => {
    let id = req.params.userId; 
    try {
        const {name, email, password} = req.body;
        const updateUser = await userService.updateUser(id, name, email, password);
        res.status(200).send({status: "OK", data: updateUser});
    } catch (error) {
        res.status(error.status || 500).send({status: "FAILED", data: {error: error.message}});
    }
};

const deleteUser = async(req, res) => {
    let id = req.params.userId;

    try {
        const deleteUser = await userService.deleteUser(id);
        res.status(200).send({status: "OK", data: deleteUser});
    } catch (error) {
        res.status(error.status || 500).send({status: "FAILED", data: {error: error.message}});
    }
};

module.exports = {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
};



