"use client"

import Link from "next/link"
import useSWR from "swr"

import fetcher from "@/lib/fetcher"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { DialogDemo } from "../ProduitDemande"
import { Card, CardContent } from "../ui/card"
import RotatingDotsLoader from "../ui/loading"

export function Product({ id }: { id: any }) {


  const { data, error } = useSWR("/api/xataClient", fetcher)

  if (error) return <div>Failed to load products or categories</div>
  if (!data)
    return (
      <div>
        <RotatingDotsLoader />
      </div>
    )
  const product = data.find((item: any) => item.id === id)
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid md:grid-cols-2 gap-6 lg:gap-12 items-center px-4 md:px-6">
          {/* <img
              alt="Product Image"
              className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
              height={600}
              src={product.img[0].url}
              width={600}
            /> */}

          <div className="order-2 md:order-1">
            <Carousel className="w-full max-w-md mx-auto">
              <CarouselContent>
                {Array.from({ length: product.img.length }).map((_, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-1">
                          <span className="text-4xl font-semibold">
                            <img
                              alt={product.img[index].name}
                              src={product.img[index].url}
                              width={800}
                              height={800}
                            />
                          </span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          <div className="space-y-4 md:space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                {product.product}
              </h1>
              <p className="text-orange-400">{product.categorie}</p>
            </div>
            <div className="grid gap-4 text-sm leading-loose">
              <p>{product.description}</p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <h1 className="mt-2 extra-bold">{product.price} MAD</h1>
              <DialogDemo id={id} name={product.product} />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container grid items-center justify-center gap-4 px-4 md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Experience the magic of the WhimsiMug
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Elevate your daily routine with the WhimsiMug, a captivating blend
              of form and function.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button
              className="bg-primary text-white hover:bg-primary/90 focus:ring-primary"
              size="lg"
            >
              <div className="mr-2">
                <ShoppingCartIcon />
              </div>
              Buy Now
            </Button>
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md border border-primary text-primary bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

function ShoppingCartIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  )
}
