export async function login(username: string, password: string) {
	console.log('*** Attempting Login ***');
	const headers = new Headers({
		'Content-Type': 'application/x-www-form-urlencoded',
		'Access-Control-Allow-Origin': '*'
	});

	return fetch(`https://news.ycombinator.com/login`, {
		method: 'POST',
		headers,
		body: `acct=${username}&pw=${password}`,
		mode: 'no-cors',
		credentials: 'include'
	})
		.then((res) => res.text())
		.then((resText) => !/Bad Login/i.test(resText));
}
