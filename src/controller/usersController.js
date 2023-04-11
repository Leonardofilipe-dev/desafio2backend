import Users from "../models/Users.js";
import bcrypt from "bcryptjs"


class usersController {
    static async registerUser(req, res) {
        try {
            const { userName, email, password } = req.body

            let passwordHash = bcrypt.hashSync(password)
            let newUser = new Users({
                userName, email, password: passwordHash
            })

            const result = await newUser.save()
            res.json(result)

        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    static async listUser(req, res) {
        try {
            const userList = await Users.find()
            res.json(userList)
        } catch (error) {
            return res.status(500).json({ error });
        }
    }

    static async searchUser(req, res) {

        try {
            const id = req.params.id
            const users = await Users.findById(id)
            return res.status(200).json(users);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    static async updateUser(req, res) {
        try {
            const id = req.params.id
            const { userName, email, password } = req.body
            const userUpdate = await Users.findByIdAndUpdate(id,
                {
                    userName,
                    email,
                    password

                })
            return res.status(200).json(userUpdate)

        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    static async deleteUser(req, res) {
        try {
            const id = req.params.id
            const userDelete = await Users.findByIdAndDelete(id)
            return res.status(200).json(userDelete)

        } catch (error) {
            return res.status(500).json({ error: err.message })
        }
    }
}

export default usersController