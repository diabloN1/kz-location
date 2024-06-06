"use client"

import Link from "next/link"
import { useRouter } from "next/router"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function ResponsiveNav() {
  return (
    <header className="flex h-20 shrink-0 items-center px-4 md:px-6">
      <Sheet>
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
            >
              Home
            </Link>
            <Link
              href="/company"
              className="flex w-full items-center py-2 text-lg font-semibold"
            >
              Company
            </Link>
            <Link
              href="/services"
              className="flex w-full items-center py-2 text-lg font-semibold"
            >
              Services
            </Link>
            <Link
              href="/productsS"
              className="flex w-full items-center py-2 text-lg font-semibold"
            >
              Products
            </Link>
            <Link
              href="/contact"
              className="flex w-full items-center py-2 text-lg font-semibold"
            >
              Contact
            </Link>
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
              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-amber-900 hover:text-white focus:bg-amber-900 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-background dark:hover:bg-orange-500 dark:hover:text-gray-50 dark:focus:bg-orange-500 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
            >
              Home
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              href="/company"
              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-amber-900 hover:text-white focus:bg-amber-900 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-background dark:hover:bg-orange-500 dark:hover:text-gray-50 dark:focus:bg-orange-500 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
            >
              Company
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              href="/services"
              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-amber-900 hover:text-white focus:bg-amber-900 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-background dark:hover:bg-orange-500 dark:hover:text-gray-50 dark:focus:bg-orange-500 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
            >
              Services
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              href="/products"
              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-amber-900 hover:text-white focus:bg-amber-900 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-background dark:hover:bg-orange-500 dark:hover:text-gray-50 dark:focus:bg-orange-500 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
            >
              Products
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              href="/contact"
              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-amber-900 hover:text-white focus:bg-amber-900 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-background dark:hover:bg-orange-500 dark:hover:text-gray-50 dark:focus:bg-orange-500 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
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
