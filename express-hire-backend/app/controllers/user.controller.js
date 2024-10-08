const User = require('../models/user.model');

//
exports.createUserAccount = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error creating interviewer' });
    }
};

//get users
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.json({ message: 'User not found' });
        }

        // Match password

        if (user.password != password) {
            return res.json({ message: 'Invalid password' });
        }

        // If successful, return user (without password)
        res.json({
            name: user.name,
            email: user.email,
            message: "ok"
        });

    } catch (error) {
        res.status(500).json({ message: 'Error fetching candidates' });
    }
};