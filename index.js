const app = require("./src/app");
const dotenv = require("dotenv");

dotenv.config();

app.get("/", (_req, res) => {
	res.json({ message: "HELLO KITTY!" });
});

app.listen(process.env.PORT || "4000", () => {
	console.log(`Server is running on port: ${process.env.PORT || "4000"}`);
});
