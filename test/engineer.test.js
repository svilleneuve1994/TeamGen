const Engineer = require("../utils/team/engineer");

describe("Engineer", () => {
	describe("Initialization", () => {
		it("should construct a card for the engineer data passing through it", () => {
			const labrat = new Engineer("Alice", 1, "alice@gmail.com", "githubuser");

			expect(labrat).toBeInstanceOf(Engineer);
		});

	});

	describe("renderName", () => {
		it("should pull the engineer name from the given data", () => {
			const name = "Alice";
			const labratName = new Engineer("Alice", 1, "alice@gmail.com", "githubuser");

			expect(labratName.renderName()).toBe(name);
		});
	});

	describe("renderID", () => {
		it("should pull the engineer id from the given data", () => {
			const id = 1;
			const labratId = new Engineer("Alice", 1, "alice@gmail.com", "githubuser");

			expect(labratId.renderID()).toBe(id);
		});
	});

	describe("renderEmail", () => {
		it("should pull the engineer email from the given data", () => {
			const email = "alice@gmail.com";
			const labratEmail = new Engineer("Alice", 1, "alice@gmail.com", "githubuser");

			expect(labratEmail.renderEmail()).toBe(email);
		});
	});

	describe("returnGit", () => {
		it("should pull the engineer office number from the given data", () => {
			const githubUser = "githubuser";
			const labratGit = new Engineer("Alice", 1, "alice@gmail.com", "githubuser");

			expect(labratGit.returnGit()).toBe(githubUser);
		});
	});

	describe("role", () => {
		it("should return the engineer role", () => {
			const labratRole = new Engineer();

			expect(labratRole.role()).toBe('Engineer');
		});
	});


});