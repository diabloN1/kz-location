"use client"

import { Search } from "lucide-react"
import { HoverEffect } from "@/components/ui/card-hover-effect"
import { Input } from "@/components/ui/input"
import React, { useState } from "react"
import useSWR from "swr"

import fetcher from "@/lib/fetcher"
import { HoverEffect } from "@/components/ui/ProductCard"

export default function page() {
  const [products, setProducts] = useState([
    {
      product: "Contruction",
      description:
        "Nous spécialisons dans la construction de projets, de résidentiels à commerciaux, en assurant qualité et efficacité.",
      id: "https://stripe.com",
      img: "/service1.png",
    },
    {
      title: "Travaux Divers",
      description:
        "Nous offrons une gamme diversifiée de services de construction et de rénovation pour répondre à vos besoins spécifiques.",
      link: "https://netflix.com",
      img: "/service2.png",
    },
    {
      title: "Negoce",
      description:
        "Fournissant des solutions stratégiques d'affaires pour vous aider à croître, y compris des conseils, du marketing et des services financiers.",
      link: "https://google.com",
      img: "/service3.jpg",
    },
  ]
  ])
  const { data, error } = useSWR("/api/xataClient", fetcher)
  console.log(data)
  if (error) return <div>Failed to load products</div>
  if (!data) return <div>Loading...</div>
  return (
    <div className="flex justify-end ">
      <form className="ml-auto flex-1 sm:flex-initial">
        <div className="relative">
          <Search className="absolute right-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search products..."
            className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
          />
        </div>
      </form>
      <section className="mt-10 ml-10 xl:ml-40 items-center gap-6 pb-8 pt-6 md:py-10 mr-10 xl:mr-40">
        <h1 className="w-[100%] md:mt-10 text-7xl font-bold xl  leading-tight tracking-tighter md:text-5xl xl:text-6xl sm:text-2xl xs:text-xl">
          Recommandés pour vous
        </h1>
        <HoverEffect items={data} />
      </section>
    </div>
  )
}
