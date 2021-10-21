const fs = require('fs');
const inquirer = require('inquirer');
const html = require('./utils/genHTML');
const filename = `index.html`;
const questions = [
	{
		type: 'input',
		message: 'What is the managers name?',
		name: 'managerName'
	}, {
		type: 'input',
		message: 'What is the managers ID?',
		name: 'managerID'
	}, {
		type: 'input',
		message: 'What is the managers email?',
		name: 'managerEmail'
	}, {
		type: 'input',
		message: 'What is the managers office number?',
		name: 'managerOffice'
	}, 	{
		type: 'list',
		message: 'Add a team member?',
		name: 'addMember',
		choices: ['Add Engineer', 'Add Intern', 'No Thanks']
	}, {
		type: 'input',
		message: 'What is the team members name?',
		name: 'teammateName',
		when: (data) => (data.addMember || data.anotherMember) !== 'No Thanks'
	}, {
		type: 'input',
		message: 'What is the team members ID?',
		name: 'teammateID',
		when: (data) => (data.addMember || data.anotherMember) !== 'No Thanks'
	}, {
		type: 'input',
		message: 'What is the team members email?',
		name: 'teammateEmail',
		when: (data) => (data.addMember || data.anotherMember) !== 'No Thanks'
	}, {
		type: 'input',
		message: 'What is the team members github?',
		name: 'engineerGit',
		when: (data) => (data.addMember || data.anotherMember) === 'Add Engineer'
	}, {
		type: 'input',
		message: 'What school does the team member go to?',
		name: 'internSchool',
		when: (data) => (data.addMember || data.anotherMember) === 'Add Intern'
	}, {
		type: 'list',
		message: 'Add another team member?',
		name: 'anotherMember',
		choices: ['Add Engineer', 'Add Intern', 'No Thanks'],
		when: (data) => (data.addMember || data.anotherMember) !== 'No Thanks'
	}
];

// function writeToFile(filename, data) {
// 	fs.writeFile(filename, data, (err) =>
// 		err ? console.log(err) : console.log('Success!')
// 	);
// }

function init() {
	console.log("Build your team");
	inquirer.prompt(questions)
		.then((data) => 
			console.log(data)
		);
}

init();
	
	
	

