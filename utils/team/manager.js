const Teammate = require("./teammate");

class Manager extends Teammate {
	constructor(name, id, email, managerOffice) {
		super(name, id, email);
		this.managerOffice = managerOffice;
	}

	role() {
		return "Manager";
	}

	returnOffice() {
		return this.managerOffice;
	}
}

module.exports = Manager;