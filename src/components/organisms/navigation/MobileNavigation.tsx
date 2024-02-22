"use client";
import { Button } from "@/components/atoms";
import { cn } from "@/lib/utils";
import { useAuth } from "@/providers/AuthProvider";
import { MenuIcon, MoonIcon, SunIcon, XIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Bruno_Ace_SC } from "next/font/google";
import Link from "next/link";
import { useState } from "react";

const brunoAceSC = Bruno_Ace_SC({ weight: "400", subsets: ["latin"] });

type MobileNavigationProps = {};

export const MobileNavigation = () => {
	const { setTheme, theme } = useTheme();
	const { user } = useAuth();
	const [isOpen, setIsOpen] = useState(true);

	return (
		<div className="m-auto flex flex-col">
			<div className="flex w-full items-center justify-between">
				<Link href="/">
					<p
						style={{ fill: theme === "dark" ? "white" : "black" }}
						className={cn(brunoAceSC.className, "text-3xl")}
					>
						BEAUTION
					</p>
				</Link>
				<div className="flex items-center">
					<button onClick={() => setIsOpen(!isOpen)}>
						{isOpen ? <XIcon aria-label="close" /> : <MenuIcon aria-label="menu" />}
					</button>
				</div>
			</div>
			<div
				className={`transition-height mt-4 w-full flex-col gap-4 border-t duration-500 ease-in-out ${
					isOpen ? "min-h-screen" : "hidden h-0"
				}`}
			>
				<ul className="flex w-full flex-col items-end gap-2 py-4">
					<li>
						<Link href="/">
							<Button variant="link">Funkcje</Button>
						</Link>
					</li>
					<li>
						<Link href="/about">
							<Button variant="link">O Projekcie</Button>
						</Link>
					</li>
					<li>
						<Link href="/contact">
							<Button variant="link">Blog</Button>
						</Link>
					</li>
				</ul>
				<div className="flex w-full justify-between gap-4 border-t py-4">
					<button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
						{theme === "dark" ? <SunIcon /> : <MoonIcon />}
					</button>
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
