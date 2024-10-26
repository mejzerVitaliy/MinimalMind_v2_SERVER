import express from 'express'
import mongoose from 'mongoose';
import router from './router.js';
import cors from 'cors'

const PORT = 5000;
const DB_URL = 'mongodb+srv://user:user@cluster0.nanvc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const app = express();

app.use(express.json())
app.use(cors({
    origin: ['http://localhost:3000', 'https://minimal-mind-v2.vercel.app'],
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}))
app.use('/api', router)


async function startApp() {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (e) {
        console.error(e);
    }
}

startApp()

