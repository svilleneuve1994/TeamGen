class Teammate {
	constructor(name, id, email) {
		this.name = name;
		this.id = id;
		this.email = email;
	}

	renderName() {
		return this.name;
	}

	renderID() {
		return this.id;
	}

	renderEmail() {
		return this.email;
	}

	role() {
		return "Teammate";
	}

}

module.exports = Teammate;