const Teammate = require("./teammate");

class Intern extends Teammate {
	constructor(name, id, email, internSchool) {
		super(name, id, email);
		this.internSchool = internSchool;
	}

	role() {
		return "Intern";
	}

	returnSchool() {
		return this.internSchool;
	}
}

module.exports = Intern;