# Bio ID

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

- `user(bioID)` - Get a user
    - `bioID`: (REQUIRED) User Bio ID

## Examples
### (Using Await)

```js
const bioid = require('bioid');

async function getUserData(){
	let user = await bioid.user('000000000000');
	console.log(user);
}
getUserData(); // calling the function
```

### (Using .then function)

```js
const bioid = require('bioid');

bioid.user('000000000000').then(user => {
	console.log(user);
})
```

### (Validation)

```js
const bioid = require('bioid');

bioid.user('000000000000').then(user => {
	if(user){
		console.log(user); // user found
	}else{
		console.log("User not found");
	}
})
```

## Contributing

© Bio, 2021 - 2022 | TARIQ (contact@itariq.dev)