$(document).ready(function() {
	const loginHandler = async (event) => {
		event.preventDefault();

		const username = document.querySelector('#username').value.trim();
		const password = document.querySelector('#password').value.trim();

		if (username && password) {
			const res = await fetch('/api/users/login', {
				method: 'POST',
				body: JSON.stringify({ username, password }),
				headers: { 'Content-Type': 'application/json' }
			});

			if (res.ok) {
				document.location.replace('/');
			} else {
				alert('Failed to log in.');
			}
		}
	};

	const signupHandler = async (event) => {
		event.preventDefault();

		const firstName = document.querySelector('#first-name-signup').value.trim();
		const lastName = document.querySelector('#last-name-signup').value.trim();
		const username = document.querySelector('#username-signup').value.trim();
		const email = document.querySelector('#email-signup').value.trim();
		const password = document.querySelector('#password-signup').value.trim();

		if (firstName && lastName && username && email && password) {
			const res = await fetch('/api/users', {
				method: 'POST',
				body: JSON.stringify({ username, firstName, lastName, email, password }),
				headers: { 'Content-Type': 'application/json' }
			});

			if (res.ok) {
				document.location.replace('/');
				alert('New user created successfully!');
			} else {
				alert('Failed to sign up.');
			}
		}
	};

	document.querySelector('.login-form').addEventListener('submit', loginHandler);
	document.querySelector('.signup-form').addEventListener('submit', signupHandler);
});
