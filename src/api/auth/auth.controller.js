const User = require("../../model/User");

const create = async (req, res) => {
	const { email, password } = req.body;

	// localhost:4000/api/auth/
	try {
		const user = new User({ email, password });
		const saved = user.save();
		res.status(201).json(saved);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

const login = async (req, res) => {
	const { email, password } = req.body;

	res.status(201).json({ user, message: "success", error: null });
};

module.exports = { create, login };
