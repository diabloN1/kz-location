"use client"

import Link from "next/link"
import useSWR from "swr"

import fetcher from "@/lib/fetcher"
import { HoverEffectCard } from "@/components/ui/ProductCard"
import { buttonVariants } from "@/components/ui/button"
import { HoverEffect } from "@/components/ui/card-hover-effect"
import RotatingDotsLoader from "@/components/ui/loading"

import { TextGenerateEffect } from "../components/textgenerateeffect"

const label = `Découvrez Oriental Building Strategy, votre solution pour la
            construction, travaux divers, négoce et exportation/importation.
            Nous vous offrons des solutions innovantes et durables.`

export default function IndexPage() {
  const services = [
    {
      title: "Contruction",
      description:
        "Nous spécialisons dans la construction de projets, de résidentiels à commerciaux, en assurant qualité et efficacité.",
      link: "/services",
      img: "/service1.png",
    },
    {
      title: "Travaux Divers",
      description:
        "Nous offrons une gamme diversifiée de services de construction et de rénovation pour répondre à vos besoins spécifiques.",
      link: "/services",
      img: "/service2.png",
    },
    {
      title: "Negoce",
      description:
        "Fournissant des solutions stratégiques d'affaires pour vous aider à croître, y compris des conseils, du marketing et des services financiers.",
      link: "/services",
      img: "/service3.jpg",
    },
    {
      title: "Exportation-Importation",
      description:
        "Assistant dans le commerce international, offrant un guide expert sur l'exportation et l'importation de biens et de services.",
      link: "/services",
      img: "/service4.png",
    },
  ]

  const { data, error } = useSWR("/api/xataClient", fetcher)
  if (error) return <div>Failed to load products or categories</div>
  if (!data)
    return (
      <div>
        <RotatingDotsLoader />
      </div>
    )
  return (
    <>
      <section className="flex mt-10 ml-10 xl:ml-40 items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex w-[100%] lg:w-2/3  flex-col">
          <h1 className=" mt-10 text-9xl font-bold leading-tight tracking-tighter md:text-7xl sm:text-4xl xs:text-2xl">
            Oriental{" "}
            <span className=" text-amber-900 dark:text-orange-400  ">
              Building
            </span>{" "}
            Strategy
          </h1>
          <br />
          <TextGenerateEffect words={label} />
          <div className="flex gap-4 mt-10">
            <Link href="/products" className={buttonVariants()}>
              Produits {">"}
            </Link>
            <Link
              href="/services"
              className={buttonVariants({ variant: "outline" })}
            >
              Services {">"}
            </Link>
          </div>
        </div>
        <div className="w-1/2 relative flex-col pb-40  xl:ml-60 mt-[-110px] hidden lg:flex">
          <img
            className="absolute left-0 h-[450px] animate-bounce"
            loading="lazy"
            alt=""
            src="/unsplash3mamj1zksza@2x.png"
          />
          <img
            className="absolute left-0 h-[420px] animate-bounce"
            alt=""
            src="/unsplash3mamj1zksza-1@2x.png"
          />
          <img
            className="absolute left-0 h-[380px] animate-bounce"
            alt=""
            src="/image-13@2x.png"
          />
        </div>
      </section>
      <section className="mt-40 mb-60 ml-10 lg:ml-20 xl:ml-40 xl:mb-10 items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="lg:flex pb-10">
          <h1 className="w-[100%] lg:w-1/3 mt-10 text-7xl font-bold leading-tight tracking-tighter md:text-5xl xl:text-6xl sm:text-2xl xs:text-xl">
            Nos Services
          </h1>
          <p className="w-[100%] lg:w-2/3 text-left mt-10 xs:w-[100%] lg:max-w-[800px] text-lg text-muted-foreground">
            <br />
            <TextGenerateEffect
              words="À Oriental Building Strategy, nous nous enorgueillissons de
            proposer une gamme complète d'articles conçus pour répondre à vos
            besoins en matière de construction, de commerce, d'affaires et
            d'exportation-importation."
            />
          </p>
        </div>
        <div className="grid justify-center pr-10 lg:pr-40 h-[450px]">
          <HoverEffect items={services} />
        </div>
      </section>
      <section className="mt-[440px] mb-40 ml-10 xl:ml-40 xl:mt-10 items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="lg:flex pb-10">
          <h1 className="w-[100%] lg:w-1/3 mt-[1450px] md:mt-10 text-7xl font-bold leading-tight tracking-tighter md:text-5xl xl:text-6xl sm:text-2xl xs:text-xl">
            Nos Articles
          </h1>
          <p className="w-[100%] lg:w-2/3 text-left mt-10 xs:w-[100%] lg:max-w-[800px] text-lg text-muted-foreground">
            <br />À Oriental Building Strategy, nous nous enorgueillissons de
            proposer une gamme complète d'articles conçus pour répondre à vos
            besoins en matière de construction, de commerce, d'affaires et
            d'exportation-importation.
          </p>
        </div>
        <div className="grid justify-center pr-10 lg:pr-40 h-[450px]">
          <HoverEffectCard items={data.slice(0, 4)} search={""} />
          <Link
            className={buttonVariants({ variant: "outline" })}
            href="/products"
          >
            More {">"}
          </Link>
        </div>
      </section>
    </>
  )
}
