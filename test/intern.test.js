const Intern = require("../utils/team/intern");

describe("Intern", () => {
	describe("Initialization", () => {
		it("should construct a card for the intern data passing through it", () => {
			const labrat = new Intern("Alice", 1, "alice@gmail.com", "school");

			expect(labrat).toBeInstanceOf(Intern);
		});

	});

	describe("renderName", () => {
		it("should pull the interns name from the given data", () => {
			const name = "Alice";
			const labratName = new Intern("Alice", 1, "alice@gmail.com", "school");

			expect(labratName.renderName()).toBe(name);
		});
	});

	describe("renderID", () => {
		it("should pull the interns id from the given data", () => {
			const id = 1;
			const labratId = new Intern("Alice", 1, "alice@gmail.com", "school");

			expect(labratId.renderID()).toBe(id);
		});
	});

	describe("renderEmail", () => {
		it("should pull the interns email from the given data", () => {
			const email = "alice@gmail.com";
			const labratEmail = new Intern("Alice", 1, "alice@gmail.com", "school");

			expect(labratEmail.renderEmail()).toBe(email);
		});
	});

	describe("returnSchool", () => {
		it("should pull the interns school from the given data", () => {
			const school = "school";
			const labratSchool = new Intern("Alice", 1, "alice@gmail.com", "school");

			expect(labratSchool.returnSchool()).toBe(school);
		});
	});

	describe("role", () => {
		it("should return the interns role", () => {
			const labratRole = new Intern();

			expect(labratRole.role()).toBe('Intern');
		});
	});


});