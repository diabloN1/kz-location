"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useUser } from "@auth0/nextjs-auth0/client"
import axios from "axios"
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
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

import { DialogDemo } from "../ProduitDemande"
import { Card, CardContent } from "../ui/card"
import RotatingDotsLoader from "../ui/loading"

export function Reviewsmodel({ idItem }: { idItem: any }) {
  const [id, setId] = useState(idItem || window.location.pathname.split("/")[2])
  console.log(idItem || window.location.pathname.split("/")[2])
  //start count
  const [starCount, setStarCount] = useState(1)
  //average Start for Product
  const [avgRating, setAvgRating] = useState(5)
  //user info auth0
  const { user } = useUser()

  //get products
  const { data, error } = useSWR("/api/xataClient", fetcher)
  //get and post reviews
  const { data: reviewsData, error: err } = useSWR(
    "/api/xataClientReviews",
    fetcher
  )
  const product = data?.find((item: any) => item.id === id)
  //set each product reviews individualy
  // const [productReviews, setProductReviews] = useState([])
  // useEffect(() => {
  //   const pr =reviewsData?.filter((review: any) => id === review.product)
  //   setProductReviews(pr)
  //   console.log(pr)
  // }, [reviewsData])
  const [newComment, setComment] = useState("")
  const [newReview, setNewReview] = useState({})

  useEffect(() => {
    setNewReview({
      comment: newComment,
      product: id,
      user: user ? user.name : "Anonymous",
      img: user && user.picture ? user.picture : "placeholder-user.jpg",
      rate: starCount,
    })
  }, [newComment, id])

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    try {
      const response = await axios.post("/api/xataPostReview", newReview)
      console.log("Review created:", response.data)
      setComment("")
      setStarCount(1)
      // Update state or perform other actions as needed
    } catch (error) {
      console.error("Error creating review:", error)
      // Handle errors as needed
    }
  }

  useEffect(() => {
    if (reviewsData && reviewsData.length > 0) {
      let sum = 0
      reviewsData
        ?.filter((review: any) => review.product == id)
        .map((review: any) => {
          sum += review.rate
          console.log(sum + " " + review.rate)
        })
      setAvgRating(
        sum / reviewsData?.filter((review: any) => review.product == id).length
      )
    }
  }, [reviewsData])

  if (error || err) return <div>Failed to load products or categories</div>
  else if (!data || !reviewsData)
    return (
      <div>
        <RotatingDotsLoader />
      </div>
    )
  else
    return (
      <>
        <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6">
          <div className="grid gap-4 md:gap-10 items-start">
            <Carousel className="w-full max-w-md mx-auto">
              <CarouselContent>
                {product.img?.length > 0 ? (
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
          <div className="grid gap-4 md:gap-10 items-start">
            <div className="grid gap-4">
              <p className="text-orange-900 dark:text-orange-400">
                {product.categorie}
              </p>
              <h1 className="font-bold text-3xl lg:text-4xl">
                {product.product}
              </h1>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-0.5">
                  <StarIcon fill={avgRating >= 1 ? "gold" : "none"} />
                  <StarIcon fill={avgRating >= 2 ? "gold" : "none"} />
                  <StarIcon fill={avgRating >= 3 ? "gold" : "none"} />
                  <StarIcon fill={avgRating >= 4 ? "gold" : "none"} />
                  <StarIcon fill={avgRating >= 5 ? "gold" : "none"} />
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  (
                  {
                    reviewsData?.filter((review: any) => review.product == id)
                      .length
                  }
                  )
                </span>
              </div>
              <div className="grid gap-4 text-sm leading-loose">
                <p>{product.description}</p>
              </div>
              <div className="flex items-center gap-4">
                {product.discount == null ? (
                  <div className="text-4xl font-bold">{product.price} MAD</div>
                ) : (
                  <>
                    <div className="text-4xl font-bold">
                      {product.price - (product.price * product.discount) / 100}{" "}
                      MAD{" "}
                    </div>
                    <div className="text-4xl line-through">
                      {product.price} MAD
                    </div>
                  </>
                )}
              </div>
              <DialogDemo id={id} name={product.product} />
            </div>
            <hr />

            {/* reviews section */}
            <div className="grid gap-4">
              <h2 className="font-bold text-xl">Reviews</h2>
              {reviewsData
                ?.filter((review: any) => review.product == id)
                .map((review: any) => {
                  console.log(review.product)
                  console.log(product.id)
                  return (
                    <div className="grid gap-6">
                      <div className="flex gap-4">
                        <Avatar className="w-10 h-10 border">
                          <AvatarImage alt="" src={review.img} />
                          <AvatarFallback>U</AvatarFallback>
                        </Avatar>
                        <div className="grid gap-2">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-0.5">
                              <StarIcon
                                fill={review.rate >= 1 ? "gold" : "none"}
                              />
                              <StarIcon
                                fill={review.rate >= 2 ? "gold" : "none"}
                              />
                              <StarIcon
                                fill={review.rate >= 3 ? "gold" : "none"}
                              />
                              <StarIcon
                                fill={review.rate >= 4 ? "gold" : "none"}
                              />
                              <StarIcon
                                fill={review.rate >= 5 ? "gold" : "none"}
                              />
                            </div>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              1 week ago
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="font-semibold">{review.user}</div>
                          </div>
                          <p className="text-sm leading-loose text-gray-500 dark:text-gray-400">
                            {review.comment}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              <hr />

              {/* make a review */}
              <div className="grid gap-4">
                <h2 className="font-bold text-xl">Leave a Review</h2>
                <form className="grid gap-4" onSubmit={(e) => handleSubmit(e)}>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">
                      Rate this product
                    </span>
                    <br />
                    <div className="flex items-center gap-0.5">
                      <button
                        className="hover:text-primary"
                        type="button"
                        title="1 star"
                        onClick={() => setStarCount(1)}
                      >
                        <StarIcon fill={starCount >= 1 ? "gold" : "none"} />
                      </button>
                      <button
                        className="hover:text-primary"
                        type="button"
                        title="2 stars"
                        onClick={() => setStarCount(2)}
                      >
                        <StarIcon fill={starCount >= 2 ? "gold" : "none"} />
                      </button>
                      <button
                        className="hover:text-primary"
                        type="button"
                        title="3 stars"
                        onClick={() => setStarCount(3)}
                      >
                        <StarIcon fill={starCount >= 3 ? "gold" : "none"} />
                      </button>
                      <button
                        className="hover:text-primary"
                        type="button"
                        title="4 stars"
                        onClick={() => setStarCount(4)}
                      >
                        <StarIcon fill={starCount >= 4 ? "gold" : "none"} />
                      </button>
                      <button
                        className="hover:text-primary"
                        type="button"
                        title="5 stars"
                        onClick={() => setStarCount(5)}
                      >
                        <StarIcon fill={starCount >= 5 ? "gold" : "none"} />
                      </button>
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="comment">Your Review</Label>
                    <Textarea
                      id="comment"
                      placeholder="Share your thoughts about this product..."
                      onChange={(e) => setComment(e.target.value)}
                      value={newComment}
                    />
                  </div>
                  <Button type="submit" variant={"outline"}>
                    Submit Review
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* footer bellow */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container grid items-center justify-center gap-4 px-4 md:px-6">
            <div className="space-y-3">
              {/* here start the footer section */}
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Experience the magic of the WhimsiMug
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Elevate your daily routine with the WhimsiMug, a captivating
                blend of form and function.
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

function StarIcon(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={props.fill || "none"}
      fillOpacity={props.fillOpacity || 1}
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
