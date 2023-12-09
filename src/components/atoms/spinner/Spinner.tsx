import { Loader2 } from "lucide-react";

export const Spinner = () => {
    return (
        <div className="flex h-full w-full items-center justify-center bg-white/70">
            <Loader2 size={100} className="animate-spin text-primary" />
        </div>
    );
};
