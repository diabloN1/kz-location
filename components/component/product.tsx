"use client"

import { useState } from "react"
import Link from "next/link"
import useSWR from "swr"

import fetcher from "@/lib/fetcher"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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
import { Label } from "../ui/label"
import RotatingDotsLoader from "../ui/loading"
import { Textarea } from "../ui/textarea"
import { Reviewsmodel } from "./reviews model"

export function Product({ id }: { id: any }) {
  const [NewComment, setNewComment] = useState("")

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
      {/* <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid md:grid-cols-2 gap-6 lg:gap-12 items-center px-4 md:px-6">
          <div className="order-2 md:order-1">
            <Carousel className="w-full max-w-md mx-auto">
              <CarouselContent>
                {product.img.length > 0 ? (
                  Array.from({ length: product.img.length }).map((_, index) => (
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
                  ))
                ) : (
                  <CarouselItem>
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-1">
                          <span className="text-4xl font-semibold">
                            <img
                              alt="No product image placeholder"
                              src="https://i.ibb.co/1zC9b9m/No-Product-White.jpg"
                              width={800}
                              height={800}
                            />
                          </span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                )}
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
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-0.5">
                  <StarIcon fill="white" />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  (23 reviews)
                </span>
              </div>
            </div>
            <div className="grid gap-4 text-sm leading-loose">
              <p>{product.description}</p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <h1 className="mt-2 extra-bold">{product.price} MAD</h1>
              <DialogDemo id={id} name={product.product} />
            </div>
            {/* Comments and rewiews section */}
      {/* <div className="grid gap-4">
              <h2 className="font-bold text-xl">Reviews</h2>
              <div className="grid gap-6">
                <div className="flex gap-4">
                  <Avatar className="w-10 h-10 border">
                    <AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
                    <AvatarFallback>JP</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-2">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-0.5">
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        1 week ago
                      </span>
                    </div>
                    <p className="text-sm leading-loose text-gray-500 dark:text-gray-400">
                      I absolutely love this mug! The quality is top-notch, and
                      the design is both stylish and practical. I've been using
                      it every day and it's become an essential part of my
                      morning routine.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid gap-4">
                <h2 className="font-bold text-xl">Leave a Review</h2>
                <form className="grid gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">
                      Rate this product:
                    </span>
                    <div className="flex items-center gap-0.5">
                      <button
                        className="hover:text-primary"
                        type="button"
                        title="1 star"
                      >
                        <StarIcon />
                      </button>
                      <button
                        className="hover:text-primary"
                        type="button"
                        title="2 stars"
                      >
                        <StarIcon />
                      </button>
                      <button
                        className="hover:text-primary"
                        type="button"
                        title="3 stars"
                      >
                        <StarIcon />
                      </button>
                      <button
                        className="hover:text-primary"
                        type="button"
                        title="4 stars"
                      >
                        <StarIcon />
                      </button>
                      <button
                        className="hover:text-primary"
                        type="button"
                        title="5 stars"
                      >
                        <StarIcon />
                      </button>
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="comment">Your Review</Label>
                    <Textarea
                      id="comment"
                      placeholder="Share your thoughts about this product..."
                    />
                  </div>
                  <Button type="submit">Submit Review</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section>
        <Reviewsmodel id={id} />
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
function StarIcon(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={props.fill}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}
