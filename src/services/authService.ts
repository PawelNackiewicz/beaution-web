export async function login(email: string, password: string) {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}authorize`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"X-API-Key": `${process.env.NEXT_PUBLIC_API_KEY}`,
		},
		body: JSON.stringify({ email, password }),
	});

	if (res.status !== 200) {
		throw new Error("Failed to login");
	}

	return res.text();
}

export async function getMe(token: string) {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}me`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			"X-API-Key": `${process.env.NEXT_PUBLIC_API_KEY}`,
			Authorization: `Bearer ${token}`,
		},
	});

	if (res.status !== 200) {
		throw new Error("Failed to get user");
	}

	return res.json();
}
