import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { Navigation } from "@/components/organisms/navigation/Navigation";
import { cn } from "@/lib/utils";
import { AuthProvider } from "@/providers/AuthProvider";
import { ThemeProvider } from "@/providers/ThemeProviders";
import { ToasterProvider } from "@/providers/ToasterProvider";
import "./globals.css";

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<AuthProvider>
						<ToasterProvider>
							<div className="flex min-h-screen w-full flex-col">
								<Navigation />
								<div className="m-auto h-full">{children}</div>
								<footer className="border-t text-center">2023</footer>
							</div>
						</ToasterProvider>
					</AuthProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
