import {
	LayoutDashboard,
	CalendarRange,
	UserRound,
	ChartNoAxesCombined,
	Bolt,
	CircleArrowRight,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/atoms";

type NavItem = {
	icon: React.ReactNode;
	label: string;
	href: string;
	subItems?: NavItem[];
};

const navItems: NavItem[] = [
	{
		icon: <LayoutDashboard />,
		label: "Panel główny",
		href: "/panel",
	},
	{
		icon: <CalendarRange />,
		label: "Kalendarz",
		href: "/kalendarz",
	},
	{
		icon: <UserRound />,
		label: "Klienci",
		href: "/klienci",
	},
	{
		icon: <ChartNoAxesCombined />,
		label: "Statystyki",
		href: "/statystyki",
	},
	{
		icon: <Bolt />,
		label: "Ustawienia",
		href: "/ustawienia",
	},
];

export const SideNav = () => {
	const [expand, setExpand] = useState(false);

	return (
		<div
			className={`relative flex h-full flex-col gap-4 border-r bg-white transition-all duration-300 ${
				expand ? "w-64" : "w-16"
			}`}
		>
			{navItems.map((item, index) => (
				<Button key={index} variant="ghost">
					<span className="flex w-full items-center gap-1">
						{item.icon} {expand && item.label}
					</span>
				</Button>
			))}
			<Button
				variant="ghost"
				onClick={() => setExpand(!expand)}
				className={`absolute -right-6 bottom-10  rounded-full transition-all duration-300 ${
					expand ? "rotate-180" : "rotate-0"
				}`}
			>
				<CircleArrowRight />
			</Button>
		</div>
	);
};
