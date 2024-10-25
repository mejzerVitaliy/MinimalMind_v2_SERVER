import User from './models/userSchema.js';

class UserController {
    async create(req, res) {
        try {
            const { login, password, id } = req.body;
            const user = await User.create({login, password, id});
            res.json(user);
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async getAll(req, res) {
        try {
            const users = await User.find()
            return res.json(users)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async getOne(req, res) {
        try {
            const { id } = req.params;
            !id && res.status(400).json({message: 'There is not ID'})
            const user = await User.findById(id)
            return res.json(user)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async update(req, res) {
        try {
            const user = req.body;
            !user._id && res.status(400).json({message: 'There is not ID'})
            const updatedUser = await User.findByIdAndUpdate(user._id, user, { new: true })
            return res.json(updatedUser)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            !id && res.status(400).json({ message: 'There is not ID' })
            const user = await User.findByIdAndDelete(id);
            return res.json(user)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

export default new UserController;