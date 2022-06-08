const db = require('../models');

const getAllUsers = async() => {
    try {
        let users = await db.User.findAll();
        return users;
    } catch (error) {
        throw {status: 400, message: error.message || "failed to get users"};
    }
};

const getUser = async(id) => {
    try {
        let user = await db.User.findByPk(id);
        return user;
    } catch (error) {
        throw {status: 500, message: error.message || "failed to get user"};
    }
};

const createUser = async(name, email, password) => {
    try {
        let newUser = await db.User.create({
            name,
            email,
            password,
        });
        return newUser;
    } catch (error) {
        throw {status: 500, message: error.message || "User could not be created"};
    }
};

const updateUser = async(id, name, email, password) => {
    try {
        let updateUser = await db.User.update({
            name,
            email,
            password,
        }, {
            where: {
                id,
            }
        });
        return updateUser;
    } catch (error) {
        throw {status: 500, message: error.message || "User could not be updated"};
    }
};

const deleteUser = async(id) => {
    try {
        const deletedUser = await db.User.destroy({
            where: {
                id,
            }
        });
        return deletedUser;
    } catch (error) {
        throw {status: 500, message: error.message  || "User could not be deleted"};
    }
};

module.exports = {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
};