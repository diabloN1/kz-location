"use client"

import Link from "next/link"
import useSWR from "swr"

import fetcher from "@/lib/fetcher"
import { HoverEffectCard } from "@/components/ui/ProductCard"
import { buttonVariants } from "@/components/ui/button"
import { HoverEffect } from "@/components/ui/card-hover-effect"
import RotatingDotsLoader from "@/components/ui/loading"

import { TextGenerateEffect } from "../components/textgenerateeffect"

const label = `Chez Kz Location Voiture, trouvez le véhicule idéal pour tous vos deplacement. Profitez de tarifs compétitifs, d'un service rapide et 
d'une flotte moderne pour voyager en toute sérénité.`

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
    // {
    //   title: "Developpement",
    //   link: "/developpement",
    //   image: "/service4.png",
    //   description:
    //     "Nous développons des solutions innovantes pour répondre aux besoins spécifiques de nos clients. Notre équipe crée des produits, améliore des services et intègre des technologies avancées, garantissant des résultats de qualité dans les délais et budgets impartis.",
    // },
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
      <section>
        <div className="m-20 mt-[25px] mx-auto sm:hidden">
          <img
            className="absolute ml-4 left-0 h-[300px] animate-bounce"
            loading="lazy"
            alt=""
            src="/unsplash3mamj1zksza@2x.png"
          />
          <img
            className="absolute ml-4 left-0 h-[280px] animate-bounce"
            loading="lazy"
            alt=""
            src="/unsplash3mamj1zksza-1@2x.png"
          />
          <img
            className="absolute ml-4 left-0 h-[254px] animate-bounce"
            loading="lazy"
            alt=""
            src="/image-13@2x.png"
          />
        </div>
      </section>
      <section className="flex mt-[350px] sm:mt-10 ml-2 sm:ml-10 xl:ml-40 items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex w-[100%] lg:w-2/3  flex-col">
          <h1 className="text-3xl font-bold leading-tight tracking-tighter sm:mt-10 md:text-7xl sm:text-4xl">
            KZ LOC{" "}
            <span className=" text-yellow-400 dark:text-yellow-400  ">
              Location voiture
            </span>{" "}
            -Louer l'Excellence
          </h1>
          <br />
          <TextGenerateEffect words={label} />
          <div className="flex gap-4 mt-10">
            <Link href="/products" className={buttonVariants()}>
              Produits {">"}
            </Link>
            <Link
              href="/contact"
              className={buttonVariants({ variant: "outline" })}
            >
              Contactez-Nous {">"}
            </Link>
          </div>
        </div>
        <div className="w-1/2 relative mr-20 flex-col pb-40  xl:ml-60 mt-[-110px] hidden lg:flex">
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
      <br /> <br />
      <br />
      {/* <section className="mt-30 mb-[1200px] md:mb-[500px] lg:mb-[-400px] ml-3 lg:ml-10 xl:ml-40 xl:mb-10 items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex flex-col md:flex-row pb-10 ml-8 md:ml-4">
          <h1 className="w-full md:w-1/3 ml-3 mt-10 text-2xl font-bold leading-tight tracking-tighter md:text-5xl xl:text-6xl sm:text-2xl xs:text-xl">
            Nos Services
          </h1>
          <p className="w-full md:w-2/3 text-left mt-10 max-w-[600px] text-lg text-muted-foreground">
            Découvrez nos services complets dans la construction, le négoce,
            l'import/export et les travaux divers. Nous offrons des solutions
            fiables adaptées à vos besoins spécifiques.
          </p>
        </div>
        <div className="grid justify-center pr-10 lg:pr-40 h-[450px]">
          <HoverEffect items={services.slice(0, 4)} />
        </div>
      </section> */}
      <section className="mt-10 mb-[1500px] md:mb-[600px] lg:mb-[200px] ml-3 md:ml-2 sm:ml-10 lg:ml-10 xl:ml-40 xl:mt-10 items-center gap-6 pb-8 pt-6 sm:pt-[500px] md:pt-6 md:py-10 ">
        <div className="flex flex-col md:flex-row pb-10 ml-8 md:ml-4">
          <h1 className="w-full sm:mt:[1000px] md:w-1/3 ml-6 sm:ml-10 lg:ml-1 mt-10 text-2xl font-bold leading-tight tracking-tighter md:text-5xl xl:text-6xl sm:text-2xl xs:text-xl">
            Nos Articles
          </h1>
          <p className="w-full md:w-2/3 text-left mt-10 max-w-[600px] text-lg text-muted-foreground">
            Découvrez notre gamme de produits pratiques conçus pour faciliter
            votre quotidien. Trouvez la solution qui vous convient.
          </p>
        </div>
        <div className="pr-10 lg:pr-40 h-[450px]">
          <HoverEffectCard items={data.slice(0, 4)} search={""} min="" max="" />
          <Link
            className={`${buttonVariants({ variant: "outline" })} w-full`}
            href="/products"
          >
            More {">"}
          </Link>
        </div>
      </section>
    </>
  )
}
