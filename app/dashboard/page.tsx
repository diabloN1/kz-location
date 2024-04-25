"use client"

import React, { useEffect, useState } from "react"
import { useUser } from "@auth0/nextjs-auth0/client"
import { set } from "@auth0/nextjs-auth0/dist/session"

import { Button, buttonVariants } from "@/components/ui/button"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

/**
 * Renders the dashboard page if the user is authenticated.
 *
 * Checks if the user is loading. If so, returns a loading message.
 * Checks if the user email matches the allowed email. If not, returns null.
 *
 * If the user is authenticated, it returns the dashboard UI:
 * - Page title
 * - Dashboard, Clients, and dashboards buttons
 * - Button click handlers call menuHandler with different params
 */
function page() {
  const [dashtype, setDashType] = useState("dashboard")
  const { user, error, isLoading } = useUser()
  //console.log the user data to see if it is working
  useEffect(() => {
    console.log(user)
  }, [user])
  //Navbar buttons handler
  const menuHandler = (dashType: string) => {
    console.log(dashType)
    if (dashType === "dashboard") {
      setDashType("dashboard")
    }
    if (dashType === "clients dash") {
      setDashType("clients dash")
    }
    if (dashType === "product dash") {
      setDashType("product dash")
    }
  }

  if (isLoading) return <div>Loading...</div>
  if (user?.name !== "amineamoune904@gmail.com") return null
  else
    return (
      <div className="ml-20">
        <h1 className="text-3xl m-10 mb-[3px] font-bold">Management Center</h1>
        <Button
          className={buttonVariants({ variant: "outline" })}
          onClick={() => {
            menuHandler("dashboard")
          }}
        >
          Dashboard
        </Button>
        <Button
          className={buttonVariants({ variant: "outline" })}
          onClick={() => {
            menuHandler("clients dash")
          }}
        >
          Relation clients
        </Button>
        <Button
          className={buttonVariants({ variant: "outline" })}
          onClick={() => {
            menuHandler("product dash")
          }}
        >
          Gestion produits
        </Button>
        {dashtype ? <div>{dashtype} </div> : null}
        <Sheet>
      <SheetTrigger>Open</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your account
            and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
      </div>
    )
}

export default page
