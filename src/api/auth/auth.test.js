const request = require("supertest");
const app = require("../../app");

describe("POST /api/auth ", () => {
	it("should response with a 400 Bad Request status code", async () => {
		const response = await request(app).post("/api/auth").send();
		expect(response.statusCode).toBe(400);
	});

	it("should response with a 400 Bad Request status code for invalid email", async () => {
		const response = await request(app).post("/api/auth").send({
			email: "not-a-email",
			password: "password",
		});
		expect(response.statusCode).toBe(400);
	});

	it("should response with a 400 Bad Request status code for weak password", async () => {
		const response = await request(app).post("/api/auth").send({
			email: "test@email.com",
			password: "pass",
		});
		expect(response.statusCode).toBe(400);
	});

	it("Response should have error field", async () => {
		const response = await request(app).post("/api/auth").send({
			email: "not-an-email",
			password: "password",
		});
		expect(response.body.error).toBeDefined();
	});

	it("Response should have error field with a email not valid message", async () => {
		const response = await request(app).post("/api/auth").send({
			email: "not-an-email",
			password: "password",
		});
		expect(response.body.error).toEqual("Not a valid email!");
	});

	it("Response should have error field with a password is weak message", async () => {
		const response = await request(app).post("/api/auth").send({
			email: "test@email.com",
			password: "pass",
		});
		expect(response.body.error).toEqual("Weak password!");
	});

	it("should response with a 201 status code", async () => {
		const response = await request(app).post("/api/auth").send({
			email: "test@email.com",
			password: "password",
		});
		expect(response.statusCode).toBe(201);
	});

	it("response body should NOT include password field", async () => {
		const response = await request(app).post("/api/auth").send({
			email: "test@email.com",
			password: "password",
		});
		expect(response.body.password).not.toBeDefined();
	});

	it("should include response body with email field", async () => {
		const response = await request(app).post("/api/auth").send({
			email: "test@email.com",
			password: "password",
		});
		expect(response.body.email).toBeDefined();
	});
});
