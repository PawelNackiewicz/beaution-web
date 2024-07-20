import { Spinner } from "@/components/atoms";

export const PageLoadSpinner = () => {
	return (
		<div className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-white/70">
			<Spinner />
		</div>
	);
};
