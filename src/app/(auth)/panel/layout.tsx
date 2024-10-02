"use client";
import { type ReactNode } from "react";
import { redirect } from "next/navigation";
import { useAuth } from "@/providers/AuthProvider";
import { AuthLayout } from "@/components/organisms/layouts/AuthLayout";

interface LayoutProps {
	children: ReactNode;
}

export default function PanelLayout({ children }: LayoutProps) {
	const user = useAuth();

	if (!user) {
		redirect("/logowanie");
	}

	return <AuthLayout>{children}</AuthLayout>;
}
