"use strict"

function addUser() {
	var user = {};
	user.firstName = prompt('Enter name:');
	user.lastName = prompt('Enter last name:');
	user.birthDay = prompt('Birth day:');
	user.phones = [];
	while (true) {
		var phone = prompt('Phone number:(to quit enter enpty phone number) ');
		if (!phone) break;
		user.phones.push(phone);
	}

	users.push(user);
}

function csvFormat(users) {
	return users.map(function(user) {
		return Object.keys(user).map(function(key) {
			if (typeof user[key] === 'string' || typeof user[key] == 'number')
				return '"' + user[key] + '"';
			else
				return user[key].map(function(phone) {
					return '"' + phone + '"';
				}).join(';');
		}).join(';');
	}).join('\r\n');
}

// user storage
var users = [];

addUser();
addUser();

for (var i = 0; i < users.length; ++i) {
	console.log('User ' + i + ':')
	console.log('\tName: ' + users[i].firstName + ' Last name: ' + users[i].lastName +
								 ' Birth day: ' + users[i].birthDay + 
								 ' Phones: ' + users[i].phones.join(', '));
}

console.log("CSV format:");
console.log(csvFormat(users));