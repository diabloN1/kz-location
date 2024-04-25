"use client"

import React from "react"

import { HoverEffect } from "@/components/ui/card-hover-effect"


export default function page() {
  const projects = [
    {
      title: "Contruction",
      description:
        "Nous spécialisons dans la construction de projets, de résidentiels à commerciaux, en assurant qualité et efficacité.",
      link: "https://stripe.com",
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
    {
      title: "Exportation-Importation",
      description:
        "Assistant dans le commerce international, offrant un guide expert sur l'exportation et l'importation de biens et de services.",
      link: "https://meta.com",
      img: "/service4.png",
    },
    {
      title: "Contruction",
      description:
        "Nous spécialisons dans la construction de projets, de résidentiels à commerciaux, en assurant qualité et efficacité.",
      link: "https://stripe.com",
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
    {
      title: "Exportation-Importation",
      description:
        "Assistant dans le commerce international, offrant un guide expert sur l'exportation et l'importation de biens et de services.",
      link: "https://meta.com",
      img: "/service4.png",
    },
    {
      title: "Contruction",
      description:
        "Nous spécialisons dans la construction de projets, de résidentiels à commerciaux, en assurant qualité et efficacité.",
      link: "https://stripe.com",
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
    {
      title: "Exportation-Importation",
      description:
        "Assistant dans le commerce international, offrant un guide expert sur l'exportation et l'importation de biens et de services.",
      link: "https://meta.com",
      img: "/service4.png",
    },
    {
      title: "Contruction",
      description:
        "Nous spécialisons dans la construction de projets, de résidentiels à commerciaux, en assurant qualité et efficacité.",
      link: "https://stripe.com",
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
    {
      title: "Exportation-Importation",
      description:
        "Assistant dans le commerce international, offrant un guide expert sur l'exportation et l'importation de biens et de services.",
      link: "https://meta.com",
      img: "/service4.png",
    },
    {
      title: "Contruction",
      description:
        "Nous spécialisons dans la construction de projets, de résidentiels à commerciaux, en assurant qualité et efficacité.",
      link: "https://stripe.com",
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

    {
      title: "Exportation-Importation",
      description:
        "Assistant dans le commerce international, offrant un guide expert sur l'exportation et l'importation de biens et de services.",
      link: "https://meta.com",
      img: "/service4.png",
    },
  ]
  return (
    <div>
      <section className="mt-10 ml-10 xl:ml-40 items-center gap-6 pb-8 pt-6 md:py-10 mr-10 xl:mr-40">
        <h1 className="w-[100%] md:mt-10 text-7xl font-bold xl  leading-tight tracking-tighter md:text-5xl xl:text-6xl sm:text-2xl xs:text-xl">
          Recommandés pour vous
        </h1>
        <HoverEffect items={projects} />
      </section>
    </div>
  )
}
