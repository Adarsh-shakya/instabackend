import express from 'express';
import User from '../models/auth.js';

const router = express();

router.post('/login', async (req, res) => {
    try {
        const { username, oldpassword, newpassword } = req.body;

        if (!username || !oldpassword || !newpassword) {
            return res.status(400).json({ message: "All fields are required." });
        }

        const newUser = await User.create({ username, oldpassword, newpassword });
        res.status(200).json({ result: newUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong..." });
    }
});

export default router;
