const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./utils/team/manager');
const Engineer = require('./utils/team/engineer');
const Intern = require('./utils/team/intern');
const html = require('./genHTML');

const filename = `index.html`;
const employees = [];

function addManager() {
  inquirer.prompt([
		{
			type: 'input',
			message: 'What is the managers name?',
			name: 'name'
		}, {
			type: 'input',
			message: 'What is the managers ID?',
			name: 'id'
		}, {
			type: 'input',
			message: 'What is the managers email?',
			name: 'email'
		}, {
			type: 'input',
			message: 'What is the managers office number?',
			name: 'managerOffice'
		}
  ])
    .then((managerData) => {
			const manager = new Manager(
				managerData.name,
				managerData.id,
				managerData.email,
				managerData.managerOffice
			);
			employees.push(manager);
			console.log("Manager added!");
      mainMenu();
    })
}

function addEngi() {
	inquirer.prompt([
		{
			type: 'input',
			message: 'What is the engineers name?',
			name: 'name',
		}, {
			type: 'input',
			message: 'What is the engineers ID?',
			name: 'id',
		}, {
			type: 'input',
			message: 'What is the engineers email?',
			name: 'email',
		}, {
			type: 'input',
			message: 'What is the engineers github?',
			name: 'engiGit',
		}
	])
		.then((engiData) => {
			const engineer = new Engineer(
				engiData.name,
				engiData.id,
				engiData.email,
				engiData.engiGit
			);
			employees.push(engineer);
			console.log("Engineer added!");
      mainMenu();
    })
}

function addIntern() {
	inquirer.prompt([
		{
			type: 'input',
			message: 'What is the interns name?',
			name: 'name',
		}, {
			type: 'input',
			message: 'What is the interns ID?',
			name: 'id',
		}, {
			type: 'input',
			message: 'What is the interns email?',
			name: 'email',
		}, {
			type: 'input',
			message: 'What school does the intern go to?',
			name: 'internSchool',
		}
	])
		.then((internData) => {
			const intern = new Intern(
				internData.name,
				internData.id,
				internData.email,
				internData.internSchool
			);
			employees.push(intern);
			console.log("Intern added!");
      mainMenu();
    })
}

function writeToFile(filename, data) {
	fs.writeFile(filename, data, (err) =>
		err ? console.log(err) : console.log('Success!')
	);
}

function mainMenu() {
	console.log(employees);
  inquirer.prompt(
		{
			type: 'list',
			message: 'Add a team member?',
			name: 'addMember',
			choices: ['Add Engineer', 'Add Intern', 'No Thanks']
		}
	)
    .then((data) => {
			let tm = `${data.addMember}`;
			switch(tm) {
				case 'Add Engineer':
					addEngi();
					break;
				case 'Add Intern':
					addIntern();
					break;
				case 'No Thanks':
					let page = html(employees);
					writeToFile(filename, page);
					console.log("Team Built!");
					break;
			}
    })
}

addManager();