export async function login(email: string, password: string) {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/sessions`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			// "X-API-Key": `${process.env.NEXT_PUBLIC_API_KEY}`,
			credentials: "include",
		},
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
		headers: {
			"Content-Type": "application/json",
			credentials: "include",
			// "X-API-Key": `${process.env.NEXT_PUBLIC_API_KEY}`,
		},
	});

	if (res.status !== 200) {
		throw new Error("Failed to get user");
	}

	return res.json();
}
