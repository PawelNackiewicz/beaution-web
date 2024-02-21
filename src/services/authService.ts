export async function login(email: string, password: string) {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/sessions`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		credentials: "include",
		body: JSON.stringify({ login: email, password }),
	});

	if (res.status !== 201) {
		throw new Error("Failed to login");
	}
	return res.text();
}

export async function getMe() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/sessions/me`, {
		method: "GET",
		credentials: "include",
		headers: {
			"Content-Type": "application/json",
		},
	});

	if (res.status !== 200) {
		throw new Error("Failed to get user");
	}

	return res.json();
}
