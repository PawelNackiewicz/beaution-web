import { DesktopNavigation } from "./DesktopNavigation";
import { MobileNavigation } from "./MobileNavigation";

export const Navigation = () => {
	return (
		<nav className="border-b p-4">
			<div className="z-10 hidden md:inline">
				<DesktopNavigation />
			</div>
			<div className="z-10 inline md:hidden">
				<MobileNavigation />
			</div>
		</nav>
	);
};
