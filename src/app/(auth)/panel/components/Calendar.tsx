import { Button } from "@/components/atoms";
import { Card, CardHeader, CardTitle } from "@/components/organisms";
import { cn } from "@/lib/utils";

export const Calendar = () => {
	return (
		<Card>
			<CardHeader className={cn("flex-row w-full justify-between items-center")}>
				<CardTitle>Kalenarz</CardTitle>
				<Button>Dodaj wydarzenie</Button>
			</CardHeader>
		</Card>
	)
};
