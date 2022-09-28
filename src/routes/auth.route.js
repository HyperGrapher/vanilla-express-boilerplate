const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { create, login } = require("../api/auth/auth.controller");
const User = require("../model/User");

// ? -> Route examples without params
// router.route('/').get(index).post(create) // 'api/blog'
// ? -> Route examples with params
// router.route('/:id').get(detail).patch(update).delete(destroy) // 'api/blog/3'

router.route("/").post(create);
router.route("/login").post(login);

//localhost:3000/api/auth/login
// router.post("/login", async (req, res, next) => {
// const user = await findOne({ email: req.body.email });
// if (!user) return res.status(400).json({ error: true, message: "Email not found" });

// if (req.body.password !== user.password) return res.status(400).json({ error: true, message: "Invalid Password" });

// // create JWT token

// const token = jwt.sign({ id: user._id }, process.env.TOKEN_SECRET);
// res.header("auth-token", token);

// 	res.status(200).json({ error: null, message: "Login successful" });
// });

module.exports = router;
