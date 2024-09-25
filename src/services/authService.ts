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
	localStorage.setItem("sessionId", new Date().getTime().toString());
	return res.text();
}

export async function logout() {
	localStorage.removeItem("sessionId");

	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		credentials: "include",
	});

	if (res.status !== 200) {
		throw new Error("Failed to logout");
	}
}

export async function getMe(): Promise<User | null> {
	if (!localStorage.getItem("sessionId")) return null;

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

	return res.json() as unknown as User;
}

export async function register({
	email,
	password,
	firstName,
	lastName,
}: {
	email: string;
	password: string;
	firstName: string;
	lastName: string;
}) {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/users`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ email, password, firstName, lastName }),
	});

	if (res.status !== 201) {
		throw new Error("Failed to create user");
	}

	return res.json();
}

type User = {
	id: number;
	name: string;
};
