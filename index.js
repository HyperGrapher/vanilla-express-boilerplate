import app from "./src/app";
import { config } from "dotenv";

config();

app.get("/", (_req, res) => {
	res.json({ message: "HELLO KITTY!" });
});

app.listen(process.env.PORT || "4000", () => {
	console.log(`Server is running on port: ${process.env.PORT || "4000"}`);
});
