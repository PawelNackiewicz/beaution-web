import { Button } from "@/components/atoms";
import { Card, CardHeader, CardTitle } from "@/components/organisms";
import { cn } from "@/lib/utils";

export const Calendar = () => {
	return (
		<Card>
			<CardHeader className={cn("w-full flex-row items-center justify-between")}>
				<CardTitle>Kalenarz</CardTitle>
				<Button>Dodaj wydarzenie</Button>
			</CardHeader>
		</Card>
	);
};
