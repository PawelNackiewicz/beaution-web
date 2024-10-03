"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { getMe, logout, type User } from "@/services/authService";

interface AuthProviderType {
	user: User | null;
	setUser: React.Dispatch<React.SetStateAction<User | null>>;
	signOut: () => void;
}

const AuthContext = createContext<AuthProviderType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
	const [user, setUser] = useState<User | null>(null);

	useEffect(() => {
		getMe()
			.then((user) => {
				setUser(user);
			})
			.catch(() => {
				setUser(null);
			});
	}, []);

	const signOut = () => {
		void setUser(null);
		void logout();
	};

	return (
		<AuthContext.Provider
			value={{
				user,
				setUser,
				signOut,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}

export function useAuth() {
	const context = useContext(AuthContext);
	if (!context) throw new Error("useAuth must be used within the AuthProviderProvider");
	return context;
}
