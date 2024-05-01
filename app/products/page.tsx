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
        <h1 className="text-xl font-bold leading-tight tracking-tighter md:text-xl lg:text-2xl xl:text-6xl sm:text-xl xs:text-xl mx-4 md:mx-8 lg:mx-12 mt-4 lg:ml-40">
          Products
        </h1>
        <div className="flex items-center gap-4">
          <div className="relative md:mt-10 ml-5">
            <Search className="absolute right-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Chercher Produit..."
              className="pl-8 w-full sm:w-auto md:w-[300px] lg:w-[200px] xl:w-[300px] focus:ring-2 focus:ring-offset-2 focus:ring-amber-900 dark:focus:ring-orange-500"
              onChange={(e) => setsearch(e.target.value)}
            />
          </div>
          <Sheet>
            <SheetTrigger className="pt-10 mr-4 md:mr-8 lg:mr-40">
              <Button variant="outline">Categorie</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Categories</SheetTitle>
                <SheetDescription>
                  Choisir une categorie pour voir les produits
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
