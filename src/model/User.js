class User {
	constructor(val) {
		if (!val.email.includes("@")) {
			throw new Error("Not a valid email!");
		}
		if (val.email.length < 6) {
			throw new Error("Valid email should have more characters!");
		}
		if (val.password.length < 6) {
			throw new Error("Weak password!");
		}
		this.email = val.email;
		this.password = val.password;
	}

	get user() {
		return { email: this.email };
	}

	save() {
        return this.user
	}
}

module.exports = User;
