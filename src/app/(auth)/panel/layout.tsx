"use client";
import { type ReactNode } from "react";
import { redirect } from "next/navigation";
import { useAuth } from "@/providers/AuthProvider";
import { SideNav } from "@/components/organisms/navigation/sideNavigation/SideNav";

interface LayoutProps {
	children: ReactNode;
}

export default function PanelLayout({ children }: LayoutProps) {
	const user = useAuth();

	if (!user) {
		redirect("/logowanie");
	}

	return (
		<div className="flex w-full flex-grow">
			<SideNav />
			{children}
		</div>
	);
}
