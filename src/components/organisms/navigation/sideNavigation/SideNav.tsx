import { LayoutDashboard, CalendarRange, UserRound, ChartNoAxesCombined, Bolt } from "lucide-react";
import { Button } from "@/components/atoms";

export const SideNav = () => {
	return (
		<div className="flex h-full flex-col gap-4 border-r">
			<Button variant="ghost">
				<LayoutDashboard />
			</Button>
			<Button variant="ghost">
				<UserRound />
			</Button>
			<Button variant="ghost">
				<CalendarRange />
			</Button>
			<Button variant="ghost">
				<ChartNoAxesCombined />
			</Button>
			<Button variant="ghost">
				<Bolt />
			</Button>
		</div>
	);
};
