"use client";
import { useTheme } from "next-themes";
import { Bruno_Ace_SC } from "next/font/google";
import { cn } from "@/lib/utils";

const brunoAceSC = Bruno_Ace_SC({ weight: "400", subsets: ["latin"] });

export const Logo = () => {
	const { theme } = useTheme();
	return (
		<p
			style={{ fill: theme === "dark" ? "white" : "black" }}
			className={cn(brunoAceSC.className, "text-3xl")}
		>
			BEAUTION
		</p>
	);
};
