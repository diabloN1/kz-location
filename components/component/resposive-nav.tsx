"use client"

import react, { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { useUser } from "@auth0/nextjs-auth0/client"

import { Button, buttonVariants } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

export function ResponsiveNav() {
  const { user, error, isLoading } = useUser()
  const [open, setOpen] = useState(false)

  return (
    <header className="flex h-20 shrink-0 items-center px-4 md:px-6">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button className="lg:hidden" size="icon" variant="outline">
            <MenuIcon />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Link href="/">
            {/* LOGO I MAY ADD IT HERE */}
            <span className="sr-only">Company Logo</span>
          </Link>
          <div className="grid gap-2 py-6">
            <Link
              href="/"
              className="flex w-full items-center py-2 text-lg font-semibold"
              onClick={() => setOpen(false)}
            >
              Accueil
            </Link>
            <Link
              href="/company"
              className="flex w-full items-center py-2 text-lg font-semibold"
              onClick={() => setOpen(false)}
            >
              Entreprise
            </Link>
            {/* <Link
              href="/services"
              className="flex w-full items-center py-2 text-lg font-semibold"
            >
              Services
            </Link> */}
            <Link
              href="/products"
              className="flex w-full items-center py-2 text-lg font-semibold"
              onClick={() => setOpen(false)}
            >
              Produits
            </Link>
            <Link
              href="/contact"
              className="flex w-full items-center py-2 text-lg font-semibold"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
          </div>
          <div className="fixed bottom-4 left-4">
            {(user?.name === "amineamoune904@gmail.com" ||
              user?.name === "orientalbuildingstrategy@gmail.com") && (
              <Link
                href="https://app.xata.io/workspaces/Amine-Yc-s-workspace-dkaoiq/dbs/OBS:eu-central-1/"
                className={buttonVariants({ variant: "outline" })}
                target="_blank"
                onClick={() => setOpen(false)}
              >
                <img
                  src="https://xata.io/icon.svg?9d7a66ec4c0ad6b1"
                  width={20}
                  className="mr-1"
                />
                Dashboard
              </Link>
            )}
            <ThemeToggle />
          </div>
        </SheetContent>
      </Sheet>
      <Link href="/" className="mr-6 hidden lg:flex">
        {/* LOGO MUST BE HERE */}
        <span className="sr-only">Company Logo</span>
      </Link>
      <NavigationMenu className="hidden lg:flex">
        <NavigationMenuList>
          <NavigationMenuLink asChild>
            <Link
              href="/"
              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-yellow-400 hover:text-white focus:bg-yellow-400 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-background dark:hover:bg-yellow-400 dark:hover:text-gray-50 dark:focus:bg-yellow-400 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
            >
              Accueil
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              href="/company"
              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-yellow-400 hover:text-white focus:bg-yellow-400 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-background dark:hover:bg-yellow-400 dark:hover:text-gray-50 dark:focus:bg-yellow-400 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
            >
              Entreprise
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            {/* <Link
              href="/services"
              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-yellow-400 hover:text-white focus:bg-yellow-400 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-background dark:hover:bg-yellow-400 dark:hover:text-gray-50 dark:focus:bg-yellow-400 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
            >
              Services
            </Link> */}
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              href="/products"
              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-yellow-400 hover:text-white focus:bg-yellow-400 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-background dark:hover:bg-yellow-400 dark:hover:text-gray-50 dark:focus:bg-yellow-400 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
            >
              Produits
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              href="/contact"
              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-yellow-400 hover:text-white focus:bg-yellow-400 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-background dark:hover:bg-yellow-400 dark:hover:text-gray-50 dark:focus:bg-yellow-400 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
            >
              Contact
            </Link>
          </NavigationMenuLink>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  )
}

function MenuIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}
