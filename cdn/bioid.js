const bioid = {
	"user": async function(arg){
		if(!arg){
			throw Error ("Bio ID: user() function first argument must be a bio ID".brightYellow);
		}else{
			let data = await fetch("https://bioid.id/api/user/" + arg).then(res => res.json());
			if(data.error){
				return false;
			}else{
				return data;
			}
		}
	}
}