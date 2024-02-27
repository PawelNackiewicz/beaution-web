"use client";
import Image from "next/image";
import { useState } from "react";
import { LoginForm } from "./components/LoginForm";
import { RegisterForm } from "./components/RegisterForm";
import { ResetPasswordForm } from "./components/ResetPasswordForm";

export default function LoginPage() {
	const [mode, setMode] = useState<"login" | "resetPassword" | "register">("login");

	return (
		<div className="flex h-full w-full max-w-7xl items-center p-4">
			<div className="grid grid-cols-1 rounded-xl bg-slate-100 p-2 dark:bg-gray-700 md:grid-cols-5">
				<Image src="/login.svg" alt="logo" width={800} height={800} className="col-span-3 " />
				<div className="col-span-2 flex flex-col items-center justify-center gap-8 rounded-xl bg-white p-2 dark:bg-black md:p-20">
					<Image src="/rocket.svg" alt="rocket" width={40} height={40} />
					{mode === "resetPassword" && (
						<>
							<div className="flex flex-col items-center gap-4">
								<p className="text-3xl font-semibold">Zresetuj hasło...</p>
							</div>
							<ResetPasswordForm onBackClick={() => setMode("login")} />
						</>
					)}
					{mode === "login" && (
						<>
							<div className="flex flex-col items-center gap-4">
								<p className="text-3xl font-semibold">Witaj ponownie!</p>
								<p className="">Wprowadź swoje dane</p>
							</div>
							<LoginForm onForgotPasswordClick={() => setMode("resetPassword")} />
							<div className="flex items-center gap-2">
								<p className="">Nie masz konta?</p>
								<button
									className="font-semibold hover:underline"
									onClick={() => setMode("register")}
								>
									Zarejestruj się
								</button>
							</div>
						</>
					)}
					{mode === "register" && (
						<>
							<div className="flex flex-col items-center gap-4">
								<p className="text-3xl font-semibold">Witaj na pokładzie!</p>
							</div>
							<RegisterForm />
							<div className="flex items-center gap-2">
								<p className="">Masz konto?</p>
								<button className="font-semibold hover:underline" onClick={() => setMode("login")}>
									Zaloguj się
								</button>
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	);
}
