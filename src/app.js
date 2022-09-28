import authRoutes from "./routes/auth.route";
import postRoutes from "./routes/posts.route";
import express, { json, urlencoded } from "express";
const app = express();

/**
 *  In the header file of the request,
 *  include Content-Type: application/json
 */

app.use(json());
app.use(urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);

export default app