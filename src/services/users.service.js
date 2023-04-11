const User = require('../models/users.model');


class UserServices {
    static async getAll() {
        try {
            const users = await User.findAll();
            return users;
        } catch (error) {
            throw error;
        }
    };

    static async getId(id) {
        try {
            const user = await User.findByPk(id, {
                attributes: ["id", "name", "email"]
            });
            return user;
        } catch (error) {
            throw error;
        }
    }

    static async getEmail(email) {
        try {
            const user = await User.findOne({
                where: { email },
                attributes: ["id", "name", "email"]

            });
            return user;
        } catch (error) {
            throw error;
        }
    }

    static async postU(newUser) {
        try {
            const result = await User.create(newUser);
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async deleteU(id) {
        try {
            const result = await User.destroy({
                where: { id }
            })
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async updateU(user, id) {
        try {
            const result =await User.update(user, {
                where: {id}
            })
            return result;
        } catch (error) {
            throw error;
        }
    }
}




module.exports = UserServices;