const express = require("express");
const authRoutes = require("./routes/auth.route");

const app = express();
/**
 *  In the header file of the request,
 *  include Content-Type: application/json
 */

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use("/api/auth", authRoutes);

app.get("/", (_req, res) => {
	res.json({ message: "HELLO KITTY!" });
});

module.exports = app;
