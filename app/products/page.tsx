"use client"

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
  ])
  const { data, error } = useSWR("/api/xataClient", fetcher)
  console.log(data)
  if (error) return <div>Failed to load products</div>
  if (!data) return <div>Loading...</div>
  return (
    <div>
      <section className="mt-10 ml-10 xl:ml-40 items-center gap-6 pb-8 pt-6 md:py-10 mr-10 xl:mr-40">
        <h1 className="w-[100%] md:mt-10 text-7xl font-bold xl  leading-tight tracking-tighter md:text-5xl xl:text-6xl sm:text-2xl xs:text-xl">
          Recommandés pour vous
        </h1>
        <HoverEffect items={data} />
      </section>
    </div>
  )
}
