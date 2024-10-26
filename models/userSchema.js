import mongoose from "mongoose";

const User = new mongoose.Schema({
    login: { type: String, required: true },
    password: { type: String, required: true },
    id: { type: String, required: true },
    notes: {type: Array, required: true}
})

export default mongoose.model('User', User)