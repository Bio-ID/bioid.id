const bioid = require('../../index.js');

myFunction(); // calling the function

async function myFunction(){
	let user = await bioid.user("000000000000");
	console.log(user);
}