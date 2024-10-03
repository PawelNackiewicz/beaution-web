"use client";
import { DesktopTopNav } from "./topNavigation/DesktopTopNav";
import { MobileTopNav } from "./topNavigation/MobileTopNav";

export const TopNavigation = () => {
	return (
		<nav className="border-b p-4">
			<div className="z-10 hidden md:inline">
				<DesktopTopNav />
			</div>
			<div className="z-10 inline md:hidden">
				<MobileTopNav />
			</div>
		</nav>
	);
};
