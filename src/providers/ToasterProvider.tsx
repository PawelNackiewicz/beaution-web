"use client";
import { Toaster } from "@/components/organisms";

export function ToasterProvider({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Toaster />
			{children}
		</>
	);
}
