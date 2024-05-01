"use client"

import React, { useState } from "react"
import { Search } from "lucide-react"
import useSWR from "swr"

import fetcher from "@/lib/fetcher"
import { HoverEffectCard } from "@/components/ui/ProductCard"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function page() {
  const { data, error } = useSWR("/api/xataClient", fetcher)
  const { data: categories, error: err } = useSWR(
    "/api/xataClientCategories",
    fetcher
  )

  const [search, setsearch] = useState("")
  console.log(data)
  if (error || err) return <div>Failed to load products or categories</div>
  if (!data || !categories) return <div>Loading...</div>
  return (
    <div className="flex flex-col items-center">
      <header className="flex justify-between items-center w-full p-4">
        <h1 className="text-xl font-bold xl leading-tight tracking-tighter md:text-xl xl:text-6xl sm:text-xl xs:text-xl mx-[150px] mt-4">
          Products
        </h1>
        <div className="flex items-center gap-4">
          <div className="relative md: mt-10 ml-5">
            <Search className="absolute right-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search products..."
              className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              onChange={(e) => setsearch(e.target.value)}
            />
          </div>
          {/* <button className="border border-orange-500 bg-black text-white font-bold py-2 px-6 rounded hover:bg-orange-500 hover:text-black mt-5 mr-30">
            All
          </button> */}
          <Sheet>
            <SheetTrigger className="pt-10 mr-[160px]">
              <Button variant="secondary">Filter</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                  <br />
                  <p className="text-bold mb-5 mt-10">Choix par categorie</p>
                  <Select onValueChange={(e: string) => setsearch(e)}>
                    <SelectTrigger className="w-[320px]">
                      <SelectValue placeholder="Choose a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat: any) => {
                        return (
                          <div key={cat.id}>
                            <SelectItem value={cat.name}>
                              {cat.name}
                              {/* <a onClick={() => setsearch(cat.name)}>
                          {cat.name}
                        </a> */}
                            </SelectItem>
                          </div>
                        )
                      })}
                    </SelectContent>
                  </Select>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <main className="mt-2 ml-10 xl:ml-40 items-center gap-6 pb-8 pt-6 md:py-10 mr-10 xl:mr-40">
        <HoverEffectCard items={data} search={search} />
      </main>
    </div>
  )
}
