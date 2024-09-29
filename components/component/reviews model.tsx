"use client"

import { useEffect, useState, useRef } from "react"
import { useUser } from "@auth0/nextjs-auth0/client"
import { Cross2Icon, ReloadIcon } from "@radix-ui/react-icons"
import axios from "axios"
import toast, { Toaster } from "react-hot-toast"
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
import { Textarea } from "@/components/ui/textarea"

import { DialogDemo } from "../ProduitDemande"
import { Card, CardContent } from "../ui/card"
import RotatingDotsLoader from "../ui/loading"

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Slider } from "@/components/ui/slider"
import { ZoomIn, ZoomOut } from "lucide-react"

export function Reviewsmodel({ idItem }: { idItem: any }) {
  const [id, setId] = useState(idItem || window.location.pathname.split("/")[2])
  console.log(idItem || window.location.pathname.split("/")[2])
  //start count
  const [starCount, setStarCount] = useState(1)
  //average Start for Product
  const [avgRating, setAvgRating] = useState(5)
  //user info auth0
  const { user } = useUser()

  const notify = () =>
    toast.success("Merci pour votre commentaire !", {
      style: {
        border: "1px solid #713200",
        color: "#713200",
      },
      iconTheme: {
        primary: "#fb923c",
        secondary: "#FFFAEE",
      },
      duration: 12000,
    })

  //get products
  const { data, error } = useSWR("/api/xataClient", fetcher)
  //get and post reviews
  const {
    data: reviewsData,
    mutate,
    error: err,
  } = useSWR("/api/xataClientReviews", fetcher)
  const product = data?.find((item: any) => item.id === id)
  const [newComment, setComment] = useState("")
  const [newReview, setNewReview] = useState({})

  const [isLoadingReview, setIsLoadingReview] = useState(false)

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
    setIsLoadingReview(true)
    try {
      const response = await axios.post("/api/xataPostReview", newReview)
      console.log("Review created:", response.data)
      setComment("")
      setStarCount(1)
      mutate([...(reviewsData || []), response.data], false)
      // Update state or perform other actions as needed
    } catch (error) {
      console.error("Error creating review:", error)
      // Handle errors as needed
    } finally {
      setIsLoadingReview(false) // Set loading state to false after the comment is added or an error occurs
      notify()
    }
  }
  const dateReview = (timestamp: string) => {
    // Convert the timestamp string to a Date object
    const date = new Date(timestamp)

    // Get the current time
    const now = new Date()

    // Calculate the difference in milliseconds
    const diffMillis = now.getTime() - date.getTime()

    // Calculate hours, minutes, seconds, days, and weeks
    const hours = Math.floor(diffMillis / (1000 * 60 * 60))
    const minutes = Math.floor((diffMillis % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor(
      ((diffMillis % (1000 * 60 * 60)) % (1000 * 60)) / 1000
    )
    const days = Math.floor(diffMillis / (1000 * 60 * 60 * 24))
    const weeks = Math.floor(days / 7)
    const months = Math.floor(days / 30) // Approximation, actual calculation would require more complex logic
    const years = Math.floor(days / 365) // Approximation

    // Format the output
    let elapsedTime = ""
    if (years > 0) elapsedTime = `${weeks}w ago`
    if (years == 0) {
      if (months > 0) elapsedTime = `${months}w ago`
    }
    if (months == 0) {
      if (weeks > 0) elapsedTime = `${weeks}w ago`
    }
    if (weeks == 0) {
      if (days > 0) elapsedTime = `${days}d ago`
    }
    if (days == 0) {
      if (hours > 0) elapsedTime = `${hours}h ago`
    }
    if (hours == 0) {
      if (minutes > 0) elapsedTime = `${minutes}m ago`
    }
    if (minutes == 0) {
      if (seconds > 0) elapsedTime = `${seconds}s ago`
    }

    return <div>{elapsedTime}</div>
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


  // ------------------- Here are the section for zomming a pic ------------------- 
  const [open, setOpen] = useState(false)
  const [zoomLevel, setZoomLevel] = useState(1)
  const imageRef = useRef<HTMLImageElement>(null)

  const handleZoomIn = () => setZoomLevel(prev => Math.min(prev + 0.1, 2.5))
  const handleZoomOut = () => setZoomLevel(prev => Math.max(prev - 0.1, 0.8))

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (imageRef.current) {
      const { left, top, width, height } = imageRef.current.getBoundingClientRect()
      const x = (e.clientX - left) / width
      const y = (e.clientY - top) / height
      imageRef.current.style.transformOrigin = `${x * 100}% ${y * 100}%`
    }
  }
  // -------------------------------------------------------------------------------

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
            <Carousel className="w-[80%] max-w-md mx-auto">
              <CarouselContent>
                {product.img?.length > 0 ? (
                  Array.from({ length: product.img.length }).map((_, index) => (
                  <>
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
                                onClick={()=>setOpen(true)}
                              />
                            </span>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                    {/* Zomming image code */}
                    <Dialog open={open} onOpenChange={setOpen}>
                    <DialogContent className="max-w-3xl w-full h-[80vh] flex flex-col p-0">
                      <div className="flex-grow overflow-hidden" onMouseMove={handleMouseMove}>
                        <img
                          ref={imageRef}
                          src={product.img[index].url}
                          alt={product.img[index].name}
                          className="w-full h-full object-contain transition-transform duration-100 ease-linear"
                          style={{ transform: `scale(${zoomLevel})` }}
                        />
                      </div>
                      <div className="hidden sm:flex items-center justify-center space-x-4 p-4 bg-background">
                        <Button variant="outline" size="icon" onClick={handleZoomOut}>
                          <ZoomOut className="h-4 w-4" />
                        </Button>
                        <Slider
                          className="w-64"
                          min={0.8}
                          max={2.5}
                          step={0.1}
                          value={[zoomLevel]}
                          onValueChange={(value) => setZoomLevel(value[0])}
                        />
                        <Button variant="outline" size="icon" onClick={handleZoomIn}>
                          <ZoomIn className="h-4 w-4" />
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                  </>
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
              <p className="text-orange-900 dark:text-yellow-400">
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

            {/* reviews section */}
            <div className="grid gap-4">
              {reviewsData?.filter((review: any) => review.product == id)
                .length ? (
                <>
                  <hr />
                  <h2 className="font-bold text-xl">Commentaires</h2>
                </>
              ) : null}
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
                          <AvatarFallback>X</AvatarFallback>
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
                              {dateReview(review.xata.createdAt)}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="font-semibold">{review.user}</div>
                          </div>
                          <p className="text-sm leading-loose text-gray-500 dark:text-gray-400">
                            {review.comment}
                          </p>
                        </div>

                        {/* delete button for a comment */}
                        {/* {user?.name === review.user ? (
                          <Button
                            variant="ghost"
                            size="icon"
                            className="xl: ml-auto"
                            onClick={() => {
                              handleDelReview(review.id)
                            }}
                          >
                            <Cross2Icon className="h-4 w-4" />
                          </Button>
                        ) : null} */}
                      </div>
                    </div>
                  )
                })}
              <hr />

              {/* make a review */}
              <div className="grid gap-4">
                <h2 className="font-bold text-xl">Laisser un commentaire</h2>
                <form className="grid gap-4" onSubmit={(e) => handleSubmit(e)}>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">
                      Évaluez ce produit
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
                    {/* <Label htmlFor="comment">Ajouter votre avis</Label> */}
                    <Textarea
                      id="comment"
                      placeholder="Partagez votre avis sur ce produit..."
                      onChange={(e) => setComment(e.target.value)}
                      value={newComment}
                    />
                  </div>
                  {isLoadingReview ? (
                    <Button variant={"outline"} disabled>
                      <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                      Please wait
                    </Button>
                  ) : (
                    <Button type="submit" variant={"outline"}>
                      Poster-le
                    </Button>
                  )}
                  {/* <Button type="submit" variant={"outline"}>
                    Poster-le
                  </Button>
                  <Button variant={"outline"} disabled>
                    <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                    Please wait
                  </Button> */}
                </form>
              </div>
            </div>
          </div>
        </div>
        <Toaster position="top-center" reverseOrder={false} />
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
