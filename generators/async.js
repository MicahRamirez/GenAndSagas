const co = require('co');
const fetch = require('node-fetch');

const SERVER_URL = 'http://localhost:3000/';

const fetchJsonPromise = (url) => {
	return fetch(url)
		.then(res => Promise.resolve(res.json()))
		.then(text => Promise.resolve(text))
		.catch(error => console.log(`Error: ${error.stack}`));
};

function* fetchJsonGen(url) {
	try {
		console.log('trying to request');
		let request = yield fetch(url);
		console.log(request);
		let res = yield request.json();
		yield JSON.parse(res);
	}
	catch(error) {
		console.log(`Error: ${error.stack}`);
	}
};


function* fetchWrapper() {
	let iter = yield fetchJsonGen(SERVER_URL + 'test');
	let {value, done} = iter;
	while(!done) {
		console.log(value);
		iter.next() = {value, done};
	}
}

let val = fetchWrapper();
console.log(val.next());
val.next();