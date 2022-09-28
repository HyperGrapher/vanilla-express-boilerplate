// import { sign } from "jsonwebtoken";
import { Router } from "express";
const router = Router();
import User from "../model/User";

//localhost:3000/api/auth
router.get("/", (req, res, next) => {
	res.send("HELLO KITTY!");
});

//localhost:4000/api/auth/register
router.post("/register", async (req, res, next) => {
	try {
		const user = new User({
			email: req.body.email,
			password: req.body.password,
		});

		const saved = user.save();

		res.json(saved);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
});

//localhost:3000/api/auth/login
router.post("/login", async (req, res, next) => {
	// const user = await findOne({ email: req.body.email });
	// if (!user) return res.status(400).json({ error: true, message: "Email not found" });

	// if (req.body.password !== user.password) return res.status(400).json({ error: true, message: "Invalid Password" });

	// // create JWT token

	// const token = sign({ id: user._id }, process.env.TOKEN_SECRET);
	// res.header("auth-token", token);

	res.status(200).json({ error: null, message: "Login successful" });
});

export default router;
