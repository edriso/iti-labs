const fname = prompt("Enter first name");
const lname = prompt("Enter last name");
const fullName = `${fname} ${lname}`;

const birthYear = prompt("Enter year of birth");
const age = new Date().getFullYear() - birthYear;

document.write(`Welcome ${fullName}! you are ${age} years old.`);
