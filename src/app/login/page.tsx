import { LoginForm } from "./components/LoginForm";
import Image from "next/image";

export default function LoginPage() {
    return (
        <div className="h-full w-full py-4 flex items-center max-w-7xl">
            <div className=" grid grid-cols-5 bg-slate-100 p-2 rounded-xl">
                <Image src="/login.svg" alt="logo" width={800} height={800} className="col-span-3" />
                <div className="bg-white col-span-2 rounded-xl p-20 flex flex-col gap-8 justify-center items-center">
                    <Image src="/rocket.svg" alt="rocket" width={40} height={40} />
                    <p className="font-semibold text-3xl">Witaj ponownie!</p>
                    <p className="">Wprowadź swoje dane</p>
                    <LoginForm />
                </div>
            </div>
        </div>
    )
}