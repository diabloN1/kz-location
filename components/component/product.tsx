'use client'
import Link from "next/link"

import { Button } from "@/components/ui/button"

export function Product() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid md:grid-cols-2 gap-6 lg:gap-12 items-center px-4 md:px-6">
          <div className="order-2 md:order-1">
            <img
              alt="Product Image"
              className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
              height={600}
              src="/placeholder.svg"
              width={600}
            />
          </div>
          <div className="space-y-4 md:space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Introducing the WhimsiMug
              </h1>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  4.3 (124 reviews)
                </span>
              </div>
            </div>
            <div className="grid gap-4 text-sm leading-loose">
              <p>
                Introducing the WhimsiMug, a delightful companion for your daily
                sips of joy.
              </p>
              <p>
                The magic truly lies in the design - a burst of vibrant colors
                and whimsical patterns that dance across the mug's surface,
                telling a story of wonder and creativity. Every sip from the
                WhimsiMug is like stepping into a world of imagination, where
                the ordinary transforms into the extraordinary.
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
                Order Now
              </Button>
              <Button
                className="border-primary text-primary hover:bg-primary/10 focus:ring-primary"
                size="lg"
                variant="outline"
              >
                <div className="mr-2">
                  <HeartIcon />
                </div>
                Add to wishlist
              </Button>
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

function HeartIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}

function StarIcon() {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
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
