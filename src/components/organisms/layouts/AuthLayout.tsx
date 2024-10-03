import { SideNav } from "../navigation/sideNavigation/SideNav";
import { TopNavigation } from "../navigation/TopNavigation";

export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex min-h-screen w-full flex-col">
			<TopNavigation />
			<div className="flex w-full flex-1">
				<div className="">
					<SideNav />
				</div>
				{children}
			</div>
			<footer className="border-t text-center">Auth Footer - Copyright 2024</footer>
		</div>
	);
};
