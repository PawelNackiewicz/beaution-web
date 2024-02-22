"use client";
import { Button, Logo, ThemeSwitcher } from "@/components/atoms";
import { useAuth } from "@/providers/AuthProvider";
import Link from "next/link";

export const DesktopNavigation = () => {
	const { user } = useAuth();

	return (
		<div className="m-auto flex max-w-7xl items-center justify-between">
			<Link href="/">
				<Logo />
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
				<ThemeSwitcher />
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
