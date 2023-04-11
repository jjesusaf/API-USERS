const UserServices = require('../services/users.service');


const getAllUsers = async (req, res) => {
    try {
        const data = await UserServices.getAll();
        res.json(data);
    } catch (error) {
        res.status(400).json(error);
    }

};

const getUserId = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await UserServices.getId(id)
        res.json(data);
    } catch (error) {
        res.status(400).json(error);
    }

};

const getUserEmail = async (req, res) => {
    try {
        const { email } = req.params;
        const data = await UserServices.getEmail(email)
        res.json(data);
    } catch (error) {
        res.status(400).json(error);

    }

};

const postUser = async (req, res) => {
    try {
        const newUser = req.body;
        const data = await UserServices.postU(newUser)
        res.status(201).send(data)
    } catch (error) {
        res.status(400).json(error);
    }

}

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await UserServices.deleteU(id)
        res.status(204).send()
    } catch (error) {
        res.status(400).json(error);
    }

}

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = req.body;
        const data = await UserServices.updateU(user, id)
        res.status(204).send()
    } catch (error) {
        res.status(400).json(error);
    }

}


module.exports = {
    getAllUsers,
    getUserId,
    getUserEmail,
    postUser,
    deleteUser,
    updateUser,
};