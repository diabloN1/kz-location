"use client"

import Link from "next/link"
import useSWR from "swr"

import fetcher from "@/lib/fetcher"
import { HoverEffectCard } from "@/components/ui/ProductCard"
import { buttonVariants } from "@/components/ui/button"
import { HoverEffect } from "@/components/ui/card-hover-effect"
import RotatingDotsLoader from "@/components/ui/loading"

import { TextGenerateEffect } from "../components/textgenerateeffect"
import { InlineReviewSectionComponent } from "@/components/inline-review-section"
import { WhyChooseUsComponent } from "@/components/why-choose-us"

const label = `Chez KZ LOC, trouvez le véhicule idéal pour tous vos deplacement. Profitez de tarifs compétitifs, d'un service rapide et 
d'une flotte moderne pour voyager en toute sérénité.`

export default function IndexPage() {

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
            KZ Loc{" "}
            <span className=" text-yellow-400 dark:text-yellow-400  ">
             <br/>Louer l'excellence
            </span>{" "}
          </h1>
          <br />
          <TextGenerateEffect words={label} />
          <div className="flex gap-4 mt-10">
            <Link href="/voitures" className={buttonVariants()}>
              Voitures {">"}
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
      <section className="mt-10 mb-[1500px] md:mb-[600px] lg:mb-[200px] ml-3 md:ml-2 sm:ml-10 lg:ml-10 xl:ml-40 xl:mt-10 items-center gap-6 pb-8 pt-6 sm:pt-[500px] md:pt-6 md:py-10 ">
        <div className="flex flex-col md:flex-row pb-10 ml-8 md:ml-4">
          <h1 className="w-full sm:mt:[1000px] md:w-1/3 ml-6 sm:ml-10 lg:ml-1 mt-10 text-2xl font-bold leading-tight tracking-tighter md:text-5xl xl:text-6xl sm:text-2xl xs:text-xl">
            Nos Voitures
          </h1>
          <p className="w-full md:w-2/3 text-left mt-10 max-w-[600px] text-lg text-muted-foreground">
            Découvrez notre gamme des voitures luxe et économique conçus pour faciliter
            votre dèplacement. Trouvez la solution qui vous convient.
          </p>
        </div>
        <div className="pr-10 lg:pr-40 h-[450px]">
          <HoverEffectCard items={data.slice(0, 4)} search={""} min="" max="" />
          <Link
            className={`${buttonVariants({ variant: "default" })} w-full`}
            href="/voitures"
          >
            More {">"}
          </Link>
        </div>
      </section>
      <WhyChooseUsComponent/>
      <InlineReviewSectionComponent/>
    </>
  )
}
