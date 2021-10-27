const Manager = require("../utils/team/manager");

describe("Manager", () => {
	describe("Initialization", () => {
		it("should construct a card for the manager data passing through it", () => {
			const labrat = new Manager("Alice", 1, "alice@gmail.com", 2);

			expect(labrat).toBeInstanceOf(Manager);
		});

	});

	describe("renderName", () => {
		it("should pull the managers name from the given data", () => {
			const name = "Alice";
			const labratName = new Manager("Alice", 1, "alice@gmail.com", 2);

			expect(labratName.renderName()).toBe(name);
		});
	});

	describe("renderID", () => {
		it("should pull the managers id from the given data", () => {
			const id = 1;
			const labratId = new Manager("Alice", 1, "alice@gmail.com", 2);

			expect(labratId.renderID()).toBe(id);
		});
	});

	describe("renderEmail", () => {
		it("should pull the managers email from the given data", () => {
			const email = "alice@gmail.com";
			const labratEmail = new Manager("Alice", 1, "alice@gmail.com", 2);

			expect(labratEmail.renderEmail()).toBe(email);
		});
	});

	describe("returnOffice", () => {
		it("should pull the managers office number from the given data", () => {
			const office = 2;
			const labratOffice = new Manager("Alice", 1, "alice@gmail.com", 2);

			expect(labratOffice.returnOffice()).toBe(office);
		});
	});

	describe("role", () => {
		it("should return the managers role", () => {
			const labratRole = new Manager();

			expect(labratRole.role()).toBe('Manager');
		});
	});


});