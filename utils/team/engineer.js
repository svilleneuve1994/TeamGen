const Teammate = require("./teammate");

class Engineer extends Teammate {
	constructor(name, id, email, engiGit) {
		super(name, id, email);
		this.engiGit = engiGit;
	}

	role() {
		return "Engineer";
	}

	returnGit() {
		return this.engiGit;
	}
}

module.exports = Engineer;