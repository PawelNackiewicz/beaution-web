import Image from "next/image";
import { LoginForm } from "./components/LoginForm";

export default function LoginPage() {
	return (
		<div className="flex h-full w-full max-w-7xl items-center p-4">
			<div className="grid grid-cols-1 rounded-xl bg-slate-100 p-2 dark:bg-gray-700 md:grid-cols-5">
				<Image src="/login.svg" alt="logo" width={800} height={800} className="col-span-3 " />
				<div className="col-span-2 flex flex-col items-center justify-center gap-8 rounded-xl bg-white p-2 dark:bg-black md:p-20">
					<Image src="/rocket.svg" alt="rocket" width={40} height={40} />
					<p className="text-3xl font-semibold">Witaj ponownie!</p>
					<p className="">Wprowadź swoje dane</p>
					<LoginForm />
				</div>
			</div>
		</div>
	);
}
