"use client"

import { useEffect } from "react"
import Link from "next/link"
import { useUser } from "@auth0/nextjs-auth0/client"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  const { user, error, isLoading } = useUser()
  useEffect(() => {
    console.log(user)
  }, [user])
  if (isLoading)
    return (
      <div>
        <header className="bg-background sticky top-0 z-40 w-full border-b">
          <div className="container flex h-30 items-center space-x-4 sm:justify-between sm:space-x-0">
            <MainNav items={siteConfig.mainNav} />
            <div className="flex flex-1 items-center justify-end space-x-4">
              <nav className="flex items-center space-x-1">
                <Link
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    className={buttonVariants({
                      size: "icon",
                      variant: "ghost",
                    })}
                  >
                    <Icons.gitHub className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </div>
                </Link>
                <Link
                  href={siteConfig.links.twitter}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    className={buttonVariants({
                      size: "icon",
                      variant: "ghost",
                    })}
                  >
                    <Icons.twitter className="h-5 w-5 fill-current" />
                    <span className="sr-only">Twitter</span>
                  </div>
                </Link>
                <ThemeToggle />
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
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.twitter className="h-5 w-5 fill-current" />
                <span className="sr-only">Twitter</span>
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
                  Se connecter
                </Link>
              )}
            </div>
            {/* {user?<Link
              href="/api/auth/login"
              target="_blank"
              rel="noreferrer"
              className={buttonVariants()}
            >
              Se connecter{" >"}
            </Link>:
            <Link
              href="/api/auth/logout"
              target="_blank"
              rel="noreferrer"
              className={buttonVariants()}
            >
              Logout{" >"}
            </Link>} */}
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
          </nav>
        </div>
      </div>
    </header>
  )
}
