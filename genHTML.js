function renderManager(manager) {
	return `
	<div class="card">
		<div class="card-header">
			<div class="employee-name">${manager.name}</div>
			<div class="employee-role">
				<i class="fas fa-user-tie"></i>
				<span class="role">${manager.role()}</span>
			</div>
		</div>
		<div class="card-body">
			<ul>
				<li>ID: <span>${manager.id}</span></li>
				<li>Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
				<li>Office: <span>${manager.managerOffice}</span></li>
			</ul>
		</div>
	</div>`;	
}

function renderEngineer(engineer) {
	return `
	<div class="card">
		<div class="card-header">
			<div class="employee-name">${engineer.name}</div>
			<div class="employee-role">
				<i class="fas fa-user-ninja"></i>
				<span class="role">${engineer.role()}</span>
			</div>
		</div>
		<div class="card-body">
			<ul>
				<li>ID: <span>${engineer.id}</span></li>
				<li>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
				<li>Github: <a href="https://github.com/${engineer.engiGit}" target="_blank">${engineer.engiGit}</a></li>
			</ul>
		</div>
	</div>`;
}

function renderIntern(intern) {
	return `
	<div class="card">
		<div class="card-header">
			<div class="employee-name">${intern.name}</div>
			<div class="employee-role">
				<i class="fas fa-user-graduate"></i>
				<span class="role">${intern.role()}</span>
			</div>
		</div>
		<div class="card-body">
			<ul>
				<li>ID: <span>${intern.id}</span></li>
				<li>Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
				<li>School: <span>${intern.internSchool}</span></li>
			</ul>
		</div>
	</div>`;
}

function genHTML(employees) {
	let newCard = "";
	console.log(newCard);

	employees.forEach(employee => {
		if (employee.role() === 'Manager') {
			 newCard += renderManager(employee);
		} else if (employee.role() === 'Engineer') {
			 newCard += renderEngineer(employee);
		} else if (employee.role() === 'Intern') {
			 newCard += renderIntern(employee);
		}
	});


return `<!DOCTYPE html>
<html lang="en-US">
<head>
	<!-- Required meta tags -->
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Team Generator</title>

	<!-- Font Icon Styles -->
	<script src="https://kit.fontawesome.com/fd91f3fcd6.js" crossorigin="anonymous"></script>

	<!-- Style -->
	<link href="./assets/style.css" rel="stylesheet">
</head>
<body>
${newCard}
</body>
</html>`
}

module.exports = genHTML;