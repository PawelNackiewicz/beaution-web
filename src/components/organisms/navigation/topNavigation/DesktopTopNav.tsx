"use client";
import Link from "next/link";
import { links } from "../links";
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
	Button,
	Logo,
	ThemeSwitcher,
} from "@/components/atoms";
import { useAuth } from "@/providers/AuthProvider";
import { useIsProtectedRoute } from "@/hooks/useIsProtectedRoute";

export const DesktopTopNav = () => {
	const { user } = useAuth();
	const isProtectedRoute = useIsProtectedRoute();

	return (
		<div className="m-auto flex max-w-7xl items-center justify-between">
			<Link href="/">
				<Logo />
			</Link>
			<ul className="flex gap-4">
				{!isProtectedRoute &&
					links.map((link) => (
						<li key={link.href}>
							<Link href={link.href}>
								<Button variant="link">{link.label}</Button>
							</Link>
						</li>
					))}
			</ul>
			<div className="flex items-center gap-4 divide-x-2">
				{user && !isProtectedRoute && (
					<Link href="/panel">
						<Button variant="default">Mój Salon</Button>
					</Link>
				)}
				<ThemeSwitcher />
				<div className="flex items-center gap-2 px-4">
					{user ? (
						<Avatar>
							<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
							<AvatarFallback>
								{user?.firstName?.[0]}
								{user?.lastName?.[0]}
							</AvatarFallback>
						</Avatar>
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
