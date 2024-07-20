"use client";
import { Button, Logo, ThemeSwitcher } from "@/components/atoms";
import { useAuth } from "@/providers/AuthProvider";
import Link from "next/link";
import { links } from "./links";

export const DesktopNavigation = () => {
	const { user, signOut } = useAuth();

	return (
		<div className="m-auto flex max-w-7xl items-center justify-between">
			Main branch
			<Link href="/">
				<Logo />
			</Link>
			<ul className="flex gap-4">
				{links.map((link) => (
					<li key={link.href}>
						<Link href={link.href}>
							<Button variant="link">{link.label}</Button>
						</Link>
					</li>
				))}
			</ul>
			<div className="flex items-center gap-4 divide-x-2">
				<ThemeSwitcher />
				<div className="flex items-center gap-2 px-4">
					{user ? (
						<Button onClick={signOut} variant="outline">
							Wyloguj
						</Button>
					) : (
						<>
							<Link href="/login">
								<Button variant="outline">Zaloguj</Button>
							</Link>
							<Link href="/register">
								<Button>Dołącz do programu</Button>
							</Link>
						</>
					)}
				</div>
			</div>
		</div>
	);
};
