"use client"

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import React, { useState } from "react"
import useSWR from "swr"

import fetcher from "@/lib/fetcher"
import { HoverEffectCard } from "@/components/ui/ProductCard"

export default function page() {
  const { data, error } = useSWR("/api/xataClient", fetcher)
  const [search, setsearch]=useState("")
  console.log(data)
  if (error) return <div>Failed to load products</div>
  if (!data) return <div>Loading...</div>
  return (
    <div className="flex justify-end ">
        <div className="relative md: mt-5 ml-5">
          <Search className="absolute right-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search products..."
            className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
            onChange={(e) => setsearch(e.target.value)}
          />
        </div>
      <section className="mt-10 ml-10 xl:ml-40 items-center gap-6 pb-8 pt-6 md:py-10 mr-10 xl:mr-40">
        <h1 className="w-[100%] md:mt-10 text-7xl font-bold xl  leading-tight tracking-tighter md:text-5xl xl:text-6xl sm:text-2xl xs:text-xl">
          Recommandés pour vous
        </h1>
        <HoverEffectCard items={data} search={search} />
      </section>
    </div>
  )
}
