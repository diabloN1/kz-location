import React from "react"

import { HoverEffect } from "@/components/ui/ProductCard"

export default function page() {
  const projects = [
    {
      title: "Construction",
      link: "/construction",
      img: "/service1.png",
    },

    {
      title: "Travaux Divers",
      link: "/travauxdivers",
      img: "/service2.png",
    },
    {
      title: "Negoce",
      link: "/negoce",
      img: "/service3.jpg",
    },
    {
      title: "Exportation-Importation",
      link: "/exportationimportation",
      img: "/service4.png",
    },
  ]
  return (
    <div>
      <section className="mt-10 ml-10 xl:ml-40 items-center gap-6 pb-8 pt-6 md:py-10 mr-10 xl:mr-40">
        <h1 className="w-[100%] md:mt-10 text-7xl font-bold xl  leading-tight tracking-tighter md:text-5xl xl:text-6xl sm:text-2xl xs:text-xl">
          Services fournis:
        </h1>
        <p className="w-[100%] lg:w-2/3 text-left mt-10 xs:w-[100%] lg:max-w-[800px] text-lg text-muted-foreground">
          Pour accéder à ces services, veuillez cliquer sur le service souhaité
          et envoyer un message décrivant vos besoins.
        </p>
        <HoverEffect items={projects} />
      </section>
    </div>
  )
}
