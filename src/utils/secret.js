

export default function SecretPassword(password) {
	if (password === process.env.secretPassword) {
		return 'you got the secret password correct!';
	}

	return 'you failed to guess the secret password.';
}






