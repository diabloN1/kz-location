"use client"

import React, { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function page() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(email==="admin" && password==="admin"){
      window.location.href = "/admin/dashboard"
    }
  }
  return (
    <>
      <section className="mt-10 ml-10 xl:ml-40 items-center gap-6 pb-8 pt-6 md:py-10 mr-10 xl:mr-40">
        <h1 className="w-[100%] md:mt-10 text-7xl font-bold leading-tight tracking-tighter md:text-5xl xl:text-6xl sm:text-2xl xs:text-xl">
          Insiders authentification
        </h1>
        <br />
        <form onSubmit={(e)=>handleSubmit(e)} className="border-[5px] border-orange-800 rounded p-5 w-[400px] bg-gray-300 dark:bg-orange-950 content-center">
          <Label htmlFor="email">User</Label>
          <Input
            type="text"
            placeholder="Username"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Label htmlFor="email">Password</Label>
          <Input
            type="password"
            placeholder="*** *** ***"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button className="mt-5 w-full" type="submit">Login</Button>
        </form>
      </section>
    </>
  )
}
