"use client";
import { Button } from "@/components/atoms";
import { cn } from "@/lib/utils";
import { useAuth } from "@/providers/AuthProvider";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Bruno_Ace_SC } from "next/font/google";
import Link from "next/link";

const brunoAceSC = Bruno_Ace_SC({ weight: "400", subsets: ["latin"] });

export const DesktopNavigation = () => {
	const { setTheme, theme } = useTheme();
	const { user } = useAuth();

	return (
		<div className="m-auto flex max-w-7xl items-center justify-between">
			<Link href="/">
				<p
					style={{ fill: theme === "dark" ? "white" : "black" }}
					className={cn(brunoAceSC.className, "text-3xl")}
				>
					BEAUTION
				</p>
			</Link>
			<ul>
				<li className="flex gap-4">
					<Link href="/">
						<Button variant="link">Funkcje</Button>
					</Link>

					<Link href="/about">
						<Button variant="link">O Projekcie</Button>
					</Link>

					<Link href="/contact">
						<Button variant="link">Blog</Button>
					</Link>
				</li>
			</ul>
			<div className="flex items-center gap-4 divide-x-2">
				<button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
					{theme === "dark" ? <SunIcon /> : <MoonIcon />}
				</button>
				<div className="flex items-center gap-2 px-4">
					{user ? (
						<Link href="/logout">
							<Button variant="outline">Wyloguj</Button>
						</Link>
					) : (
						<Link href="/login">
							<Button variant="outline">Zaloguj</Button>
						</Link>
					)}
					<Link href="/register">
						<Button>Dołącz do programu</Button>
					</Link>
				</div>
			</div>
		</div>
	);
};
