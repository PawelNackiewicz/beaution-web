import { useEffect, useState } from "react";
import { getUserSalons, type Salon } from "@/services/salonService";

export function SalonList() {
	const [salons, setSalons] = useState<Salon[]>([]);

	useEffect(() => {
		const fetchSalons = async () => {
			try {
				const res = await getUserSalons();
				setSalons(res);
			} catch (error) {
				console.error(error);
			}
		};

		void fetchSalons();
	}, []);

	return (
		<div>
			<p>Salon list</p>
			{salons.map((salon) => (
				<div key={salon.id}>
					<p>{salon.name}</p>
					<p>{salon.location}</p>
				</div>
			))}
		</div>
	);
}
