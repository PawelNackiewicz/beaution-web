import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/organisms";
import { cn } from "@/lib/utils";

export const Reminders = () => {
	const notifications = [
		{
			title: "Masz niesfinansowaną wizytę",
			description: "1 hour ago",
		},
		{
			title: "Wystaw recenzję salonu",
			description: "1 hour ago",
		},
		{
			title: "Zrób zamówienie nowych produktów",
			description: "2 hours ago",
		},
	];

	return (
		<Card className={cn("w-full")}>
			<CardHeader>
				<CardTitle>Przypomnienia</CardTitle>
				<CardDescription>Masz 3 przypomnienia.</CardDescription>
			</CardHeader>
			<CardContent className="grid gap-4">
				<div>
					{notifications.map((notification, index) => (
						<div
							key={index}
							className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
						>
							<span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
							<div className="space-y-1">
								<p className="text-sm font-medium leading-none">{notification.title}</p>
								<p className="text-sm text-muted-foreground">{notification.description}</p>
							</div>
						</div>
					))}
				</div>
			</CardContent>
			<CardFooter></CardFooter>
		</Card>
	);
};