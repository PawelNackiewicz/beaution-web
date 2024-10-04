"use client";
import { Reminders } from "./components/Reminders";
import { NotificationBar } from "./components/NotificationBar";
import { RecentActivity } from "./components/RecentActivity";
import { Calendar } from "./components/Calendar";

export default function PanelPage() {
	return (
		<div className="flex flex-col gap-4 bg-slate-100 p-4 dark:bg-gray-900">
			<div className="col-span-12">
				<NotificationBar />
			</div>
			<div className="grid h-full w-full grid-cols-12 gap-4">
				<div className="col-span-9 flex flex-col gap-4">
					<Calendar />
				</div>
				<div className="col-span-3 flex flex-col gap-4">
					<Reminders />
					<RecentActivity />
				</div>
			</div>
		</div>
	);
}
