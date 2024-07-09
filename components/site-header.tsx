"use client"

import { useEffect } from "react"
import Link from "next/link"
import { useUser } from "@auth0/nextjs-auth0/client"
import { useTheme } from "next-themes"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

import { ResponsiveNav } from "./component/resposive-nav"

export function SiteHeader() {
  const { user, error, isLoading } = useUser()
  const { theme } = useTheme()

  if (isLoading)
    return (
      <div>
        <header className="bg-background sticky top-0 z-40 w-full border-b">
          <div className="container flex h-30 items-center space-x-4 sm:justify-between sm:space-x-0">
            {/* <MainNav items={siteConfig.mainNav} /> */}
            <Link href="/" className="flex items-center space-x-2">
              <img
                src={
                  theme === "light"
                    ? "https://i.ibb.co/qDhjYrR/light.webp"
                    : "https://i.ibb.co/sbRPkVW/dark.webp"
                }
                alt="Logo"
                width={100}
                height={100}
              />
            </Link>
            <div className="hidden lg:block ">
              <ResponsiveNav />
            </div>
            <div className="flex flex-1 items-center justify-end space-x-4">
              <nav className="flex items-center space-x-1">
                <Link
                  href="https://wa.me/212708162668/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    className={buttonVariants({
                      size: "icon",
                      variant: "ghost",
                    })}
                  >
                    <Icons.whatsapp />
                    <span className="sr-only">whatsapp</span>
                  </div>
                </Link>
                <ThemeToggle />
                <div className="block lg:hidden ">
                  <ResponsiveNav />
                </div>
              </nav>
            </div>
          </div>
        </header>
      </div>
    )
  if (error) return <div>{error.message}</div>

  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="container flex h-30 items-center space-x-4 sm:justify-between sm:space-x-0">
        {/* <MainNav items={siteConfig.mainNav} /> */}
        <Link href="/" className="flex items-center space-x-2">
          <img
            src={
              theme === "light"
                ? "https://i.ibb.co/qDhjYrR/light.webp"
                : "https://i.ibb.co/sbRPkVW/dark.webp"
            }
            alt="Logo"
            width={100}
            height={100}
          />
        </Link>
        <div className="hidden lg:block ">
          <ResponsiveNav />
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Link
              href="https://wa.me/212708162668/"
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.whatsapp />
                <span className="sr-only">whatsapp</span>
              </div>
            </Link>
            <ThemeToggle />
            {user?.name === "amineamoune904@gmail.com" && (
              <Link href="/dashboard" className={buttonVariants()}>
                Dashboard
              </Link>
            )}
            <div className="ml-5 mr-5">
              {user ? (
                <Link
                  href="/api/auth/logout"
                  className={buttonVariants({ variant: "outline" })}
                >
                  deconnection
                </Link>
              ) : (
                <Link href="/api/auth/login" className={buttonVariants()}>
                  Connexion
                </Link>
              )}
            </div>
            {user && user.picture && (
              <div>
                <img
                  src={user.picture || ""}
                  alt={user.name || ""}
                  className="rounded-full w-[50px] ml-2"
                />
                <h2>{user.email}</h2>
              </div>
            )}
            <div className="block lg:hidden mx-[-100px]">
              <ResponsiveNav />
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
