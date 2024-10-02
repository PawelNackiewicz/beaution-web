"use client";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

export const useIsProtectedRoute = (): boolean => {
	const pathname = usePathname();

	const isProtected = useMemo(() => {
		const pathSegments = pathname.split("/").filter(Boolean);
		return pathSegments[0] === "panel";
	}, [pathname]);

	return isProtected;
};
