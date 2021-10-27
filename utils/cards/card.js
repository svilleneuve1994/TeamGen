//what all do we want on our cards?
//in card header: name, [i]role
//in card body: ID, email, [role variable 3rd row]

//so for the card constructor:
//constructor should build the pieces that each one shares (name, id, email)
//ig extend the card class to include the role variable and icon?


class Card {
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

	rRole() {
		return "Teammate";
	}

}

module.exports = Card;