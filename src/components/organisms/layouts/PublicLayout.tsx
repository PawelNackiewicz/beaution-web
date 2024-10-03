import { TopNavigation } from "../navigation/TopNavigation";

export const PublicLayout = ({ children }: { children?: React.ReactNode }) => {
	return (
		<div className="flex min-h-screen w-full flex-col">
			<TopNavigation />
			<div className="h-full w-full">{children}</div>
			<footer className="border-t text-center">Public Footer - Copyright 2024</footer>
		</div>
	);
};
