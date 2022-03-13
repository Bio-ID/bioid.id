const types = ["user","discord"];
const bio = {
	"user": async (id, options = {}) => {
		if(typeof options == "object" || !Array.isArray(options)){
			if(options && options.id_type && !types.includes(options.id_type)) throw Error("id_type option must be one of " + types.join(", "));
			options = Object.assign({
				id_type: types[0]
			}, options);
			if(!id || isNaN(id)) throw Error("Method first argument must be a bio ID");
			let data = await fetch(`https://bioid.id/api/${options.id_type}/${id}`).then(res => res.json());
			if(data.error) return false;
			return data;
		}else{
			throw Error("Options must be an object");
		}
	}
}