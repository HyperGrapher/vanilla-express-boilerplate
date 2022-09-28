const request = require("supertest");
const app = require("./app");

describe("GET / ", () => {
	it("should get response with a 200 status code", async () => {
		const response = await request(app).get("/").send();
		expect(response.statusCode).toBe(200);
	});

	it("should assert content-type is JSON", async () => {
		const response = await request(app).get("/").send();
		expect(response.headers["content-type"]).toEqual(expect.stringContaining("application/json"));
	});

	it("response object should contain the key 'message' ", async () => {
		const response = await request(app).get("/").send();
		expect(response.body.message).toBeDefined();
	});

	it("response object should contain 'HELLO KITTY!' in the message", async () => {
		const response = await request(app).get("/").send();
		expect(response.body.message).toEqual("HELLO KITTY!");
	});
});
