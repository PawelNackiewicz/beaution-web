"use client";
import React, { createContext, useContext, useEffect, useState } from 'react';

interface User {
    id: number;
    name: string;
}

interface AuthProviderType {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>
}

const AuthContext = createContext<AuthProviderType | undefined>(undefined)

export function AuthProvider({
    children
}: { children: React.ReactNode }) {
    const [user, setUser] = useState<{ id: number; name: string } | null>(null)

    // useEffect(() => {
    //     getMe().then((user) => {
    //         setUser(user)
    //     }).catch(() => {
    //         setUser(null)
    //     })
    // }, [])

    return (
        <AuthContext.Provider
            value={{
                user, setUser
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)
    if (!context)
        throw new Error(
            'useAuth must be used within the AuthProviderProvider'
        )
    return context
}