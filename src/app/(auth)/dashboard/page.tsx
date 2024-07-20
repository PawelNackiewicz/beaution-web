"use client";
import { redirect } from "next/navigation";
import { useAuth } from "@/providers/AuthProvider";

export default function Home() {
	const { user } = useAuth();
	console.log(user);

	if (!user) redirect("/login");

	return (
		<div className="h-full w-full py-4">
			<h1 className="mt-10 text-6xl font-bold">Dashboard</h1>
		</div>
	);
}
