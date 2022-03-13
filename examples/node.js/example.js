const bio = require('../../index.js');

async function myFunction(){
	let userByBioID = await bio.user("000000000000");
	console.log(userByBioID);
	let userByDiscordID = await bio.user("300530315351425024", {
		id_type: "discord"
	});
	console.log(userByDiscordID);
}

myFunction(); // calling the function