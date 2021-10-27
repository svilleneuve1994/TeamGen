const Card = require("./card");

class InternCard extends Card {
	constructor(name, id, email, managerOffice) {
		super(name, id, email);
		this.managerOffice = managerOffice;
	}

	rRole() {
		return "Manager";
	}

	rOffice() {
		return this.managerOffice;
	}
}

module.exports = InternCard;