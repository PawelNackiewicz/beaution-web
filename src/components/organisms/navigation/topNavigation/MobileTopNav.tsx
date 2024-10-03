"use client";
import { MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { links } from "../links";
import { useAuth } from "@/providers/AuthProvider";
import { Button, Logo, ThemeSwitcher } from "@/components/atoms";

export const MobileTopNav = () => {
	const { user, signOut } = useAuth();
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="m-auto flex flex-col">
			<div className="flex w-full items-center justify-between">
				<Link href="/">
					<Logo />
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
					{links.map((link) => (
						<li key={link.href}>
							<Link href={link.href}>
								<Button variant="link">{link.label}</Button>
							</Link>
						</li>
					))}
				</ul>
				<div className="flex w-full justify-between gap-4 border-t py-4">
					<ThemeSwitcher />
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
