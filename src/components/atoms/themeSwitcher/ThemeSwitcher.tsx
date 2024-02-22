"use client";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

export const ThemeSwitcher = () => {
	const { setTheme, theme } = useTheme();
	return (
		<button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
			{theme === "dark" ? <SunIcon /> : <MoonIcon />}
		</button>
	);
};
