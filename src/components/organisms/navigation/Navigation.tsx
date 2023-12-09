'use client'
import Link from "next/link";
import { Button } from "@/components/atoms";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes"
import { Bruno_Ace_SC } from 'next/font/google'
import { cn } from "@/lib/utils";

const brunoAceSC = Bruno_Ace_SC({ weight: "400", subsets: ["latin"] })

export const Navigation = () => {
  const { setTheme, theme } = useTheme()

  return (
    <nav className="border-b p-4">
      <div className="flex justify-between max-w-7xl m-auto items-center">

        <Link href="/" >
          <p style={{ fill: theme === 'dark' ? 'white' : 'black' }} className={cn(brunoAceSC.className, 'text-3xl')}>BEAUTION</p>
        </Link>
        <ul>
          <li className="flex gap-4">
            <Link href="/">
              <Button variant="link">Funkcje</Button>
            </Link>

            <Link href="/about">
              <Button variant="link">
                O Projekcie
              </Button>
            </Link>

            <Link href="/contact">
              <Button variant="link">
                Blog
              </Button>
            </Link>

          </li>
        </ul>
        <div className="flex gap-4 items-center divide-x-2">
          <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {
              theme === 'dark' ? <SunIcon /> : <MoonIcon />
            }
          </button>
          <div className="px-4 flex gap-2 items-center">
            <Link href="/login">
              <Button variant='outline'>Zaloguj</Button>
            </Link>
            <Link href="/register">
              <Button>Dołącz do programu</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav >
  );
};
