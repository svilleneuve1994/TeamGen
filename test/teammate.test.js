const Teammate = require("../utils/team/teammate");

describe("Teammate", () => {
	describe("Initialization", () => {
		it("should construct a card for the teammate data passing through it", () => {
			const labrat = new Teammate("Alice", 1, "alice@gmail.com");

			expect(labrat).toBeInstanceOf(Teammate);
		});
	});

	describe("renderName", () => {
		it("should pull the teammates name from the given data", () => {
			const name = "Alice";
			const labratName = new Teammate("Alice", 1, "alice@gmail.com");

			expect(labratName.renderName()).toBe(name);
		});
	});

	describe("renderID", () => {
		it("should pull the teammates id from the given data", () => {
			const id = 1;
			const labratId = new Teammate("Alice", 1, "alice@gmail.com");

			expect(labratId.renderID()).toBe(id);
		});
	});

	describe("renderEmail", () => {
		it("should pull the teammates email from the given data", () => {
			const email = "alice@gmail.com";
			const labratEmail = new Teammate("Alice", 1, "alice@gmail.com");

			expect(labratEmail.renderEmail()).toBe(email);
		});
	});

	describe("role", () => {
		it("should return the teammates role", () => {
			const labratRole = new Teammate();

			expect(labratRole.role()).toBe('Teammate');
		});
	});


});