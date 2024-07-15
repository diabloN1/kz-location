"use client"

import React from "react"

import Dashboard from "@/components/SIDEBAR"

export default function ServicesPage() {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="flex flex-row justify-center w-full space-x-4">
        <h1 className="sm:mt-10 text-4xl font-bold md leading-tight tracking-tighter md:text-xl xl:text-4xl sm:text-2xl xs:text-xl">
          Services fournis
        </h1>
        <p className="w-[100%] lg:w-2/3 text-left mt-10 xs:w-[100%] lg:max-w-[600px] text-lg text-muted-foreground">
          Veuillez cliquer sur le service souhaité et envoyer un message
          décrivant vos besoins.
        </p>
      </div>

      <br />
      <Dashboard />
    </div>
  )
}
