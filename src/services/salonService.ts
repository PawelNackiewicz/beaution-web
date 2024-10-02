export type Salon = {
	id: number;
	name?: string;
	location?: string;
};

export async function getUserSalons() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/salons/user`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
		credentials: "include",
	});

	if (res.status !== 200) {
		throw new Error("Failed to fetch user salons");
	}
	return res.json() as unknown as Salon[];
}
