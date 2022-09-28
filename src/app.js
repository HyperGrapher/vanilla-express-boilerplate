const express = require("express");
const authRoutes = require("./routes/auth.route");
const postRoutes = require("./routes/posts.route");

const app = express();
/**
 *  In the header file of the request,
 *  include Content-Type: application/json
 */

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);

module.exports = app;
