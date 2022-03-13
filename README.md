# Bio

<center>
	<a href="https://nodei.co/npm/bioid.id/">
		<img alt="Bio ID NPM Package Statistics" src="https://nodei.co/npm/bioid.id.png">
	</a>
</center>

* NPM package that gets information from bio id official API
* Useful for websites where users can input any bio id and get user info
* Supports the Promise-API, you will be able to use .then, .catch, etc...

Check out or website [Bio](https://bioid.id).

# Installation from [NPM](https://www.npmjs.com/package/bioid.id)

`npm i bioid.id`

# Usage

- `user(id, options)` - Get a user
    - `id`: (REQUIRED) User Bio ID or other ID from options
    - `options`: (OPTIONAL) Options object can have (id_type) propertie(s)
    - `options.id_type`: (OPTIONAL) id_type option sets search by a specific ID type, can be one of (user, discord), default is "user"

## Examples
### (Using Await)

```js
const bio = require('bioid.id');

async function getUserData(){
	let user = await bio.user('000000000000');
	console.log(user);
}
getUserData(); // calling the function
```

### (Using .then function)

```js
const bio = require('bioid.id');

bio.user('000000000000').then(user => {
	console.log(user);
})
```

### (Validation)

```js
const bio = require('bioid.id');

bio.user('000000000000').then(user => {
	if(user){
		console.log(user); // user found
	}else{
		console.log("User not found");
	}
})
```

## Contributing

© Bio, 2021 - 2022 | TARIQ (contact@itariq.dev)