
const submit = () => {
	const password = document.getElementById('passwordInput').value;

	fetch('./secretPassword', {
		headers: {
			password: password
		}
	}).then(res => res.text().then((result) => {
		alert(result);
	}));

};
