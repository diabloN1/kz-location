"use client"

import React, { useState } from "react"
import { Search } from "lucide-react"
import useSWR from "swr"

import fetcher from "@/lib/fetcher"
import { HoverEffectCard } from "@/components/ui/ProductCard"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import RotatingDotsLoader from "@/components/ui/loading"
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
import { ResetIcon, GearIcon } from "@radix-ui/react-icons"

export const dynamic = 'force-dynamic';

export default function page() {
  const { data, error } = useSWR("/api/xataClient", fetcher, {
      refreshInterval: 5000, // Refresh every 10 seconds
      revalidateOnFocus: true,
  });
  const { data: niches, error: errNiches } = useSWR(
    "/api/xataClientNiches",
    fetcher,
    {
      refreshInterval: 5000, // Refresh every 10 seconds
      revalidateOnFocus: true,
    }
  );
  
  const { data: categories, error: errCategories } = useSWR(
    "/api/xataClientCategories",
    fetcher,
    {
      refreshInterval: 5000, // Refresh every 10 seconds
      revalidateOnFocus: true,
    }
  );

  const [search, setsearch] = useState("")
  const [niche, setniche] = useState("")
  const [min, setMin] = useState("")
  const [max, setMax] = useState("")

  const setCategorie = (e:any) => {
    setsearch(e)
    setniche(e)

  } 

  if (error || errNiches || errCategories ) return <div>Failed to load products or categories</div>
  if (!data || !categories)
    return (
      <div>
        <RotatingDotsLoader />
      </div>
    )
  return (
    <div className="flex flex-col items-center">
      <header className="flex justify-between items-center w-full p-4">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:text-6xl xl:text-6xl sm:text-xl xs:text-xl mx-4 md:mx-8 lg:mx-6 xl:mx-12 mt-4 lg:ml-10">
          Products
        </h1>
        <div className="flex items-center gap-4">
          <div className="relative md:mt-10 ml-5 hidden md:block">
            <Search className="absolute right-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Chercher Produit..."
              className="pl-8 w-full sm:w-auto md:w-[300px] lg:w-[200px] xl:w-[300px] focus:ring-2 focus:ring-offset-2 focus:ring-amber-900 dark:focus:ring-orange-500"
              onChange={(e) => setsearch(e.target.value)}
            />
          </div>

          <Sheet>
            <SheetTrigger className="pt-10 mr-6 md:mr-8 lg:mr-40">
              <Button variant="outline"><GearIcon className="mr-2"/>Filtre</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Filtrer les produits</SheetTitle>
                <SheetDescription>
                  Choisir une categorie pour voir les produits
                  <br />
                  {/* --------------Niches select (categories)-------------- */}
                  <p className="text-bold mb-5 mt-10">Choix par niche</p>
                  <Select onValueChange={(e: string) => setCategorie(e)}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Choosir une niche" />
                    </SelectTrigger>
                    <SelectContent>
                      {niches
                        ? niches.map((niche: any) => {
                            return (
                              <div key={niche.id}>
                                <SelectItem value={niche.name}>
                                  {niche.name}
                                </SelectItem>
                              </div>
                            )
                          })
                        : null}
                    </SelectContent>
                  </Select>
                  {/* --------------Sous-cat select-------------- */}
                  <p className="text-bold mb-5 mt-10">Choix par categorie</p>
                  <Select onValueChange={(e: string) => setsearch(e)}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Choosir une categorie" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories && niche == ""
                        ? 
                        categories.map((categorie: any) => {
                            return (
                              <div key={categorie.id}>
                                <SelectItem value={categorie.name}>
                                  {categorie.name}
                                </SelectItem>
                              </div>
                            )
                          })
                        : null}
                        {categories && niche != ""
                        ? 
                        categories
                        .filter((categorie: any)=>{return categorie.niche.toLowerCase().includes(niche.toLowerCase())})
                        .map((categorie: any) => {
                            return (
                              <div key={categorie.id}>
                                <SelectItem value={categorie.name}>
                                  {categorie.name}
                                </SelectItem>
                              </div>
                            )
                          })
                        : null}
                    </SelectContent>
                  </Select>
                  {/* --------------Price-range-------------- */}
                  {
                  search != ""
                    ?
                    <>
                      <p className="text-bold mb-5 mt-10">Fourchette de prix</p>
                      <Input
                        type="text"
                        placeholder="min"
                        className="pl-8 w-[80%] mx-auto focus:ring-2 focus:ring-offset-2 focus:ring-amber-900 dark:focus:ring-orange-500"
                        onChange={(e) => setMin(e.target.value)}
                      />
                      <center>---</center>
                      <Input
                        type="text"
                        placeholder="max"
                        className="pl-8 w-[80%] mx-auto focus:ring-2 focus:ring-offset-2 focus:ring-amber-900 dark:focus:ring-orange-500"
                        onChange={(e) => setMax(e.target.value)}
                      />
                  </>
                    :
                    null
                  }

                  {/* --------------Reset-filters-------------- */}
                  <div className="fixed bottom-4 right-4">
                    <Button onClick={()=>location.reload()} variant="destructive"><ResetIcon className="mr-2"/>réinitialiser</Button>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <div className="block w-full md:hidden">
        <Input
          type="text"
          placeholder="Chercher Produit..."
          className="pl-8 w-[80%] mx-auto focus:ring-2 focus:ring-offset-2 focus:ring-amber-900 dark:focus:ring-orange-500"
          onChange={(e) => setsearch(e.target.value)}
        />
      </div>
      <main className="mt-2 ml-10 xl:ml-40 items-center gap-6 pb-8 pt-6 md:py-10 mr-10 xl:mr-40">
        <HoverEffectCard items={data} search={search} min={min} max={max} />
      </main>
    </div>
  )
}
