import { useRef } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const reviews = [
  {
    id: 1,
    name: "Emily J.",
    avatar: "/placeholder.svg?height=40&width=40",
    comment: "Absolutely love this product! It's a game-changer for my daily routine.",
    rating: 5,
    position: "Verified Buyer",
  },
  {
    id: 2,
    name: "Michael C.",
    avatar: "/placeholder.svg?height=40&width=40",
    comment: "Great quality and excellent customer service. Highly recommend!",
    rating: 5,
    position: "Loyal Customer",
  },
  {
    id: 3,
    name: "Sarah T.",
    avatar: "/placeholder.svg?height=40&width=40",
    comment: "Exceeded all my expectations. Worth every penny!",
    rating: 5,
    position: "New Customer",
  },
  {
    id: 4,
    name: "David R.",
    avatar: "/placeholder.svg?height=40&width=40",
    comment: "Impressive product and fast shipping. Will buy again!",
    rating: 5,
    position: "Verified Buyer",
  },
  {
    id: 5,
    name: "Lisa M.",
    avatar: "/placeholder.svg?height=40&width=40",
    comment: "Outstanding quality and customer support. Highly satisfied!",
    rating: 5,
    position: "Repeat Customer",
  },
]

export function InlineReviewSectionComponent() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320 // Adjust this value based on card width + margin
      const currentScroll = scrollContainerRef.current.scrollLeft
      const newScroll = direction === "left" ? currentScroll - scrollAmount : currentScroll + scrollAmount
      scrollContainerRef.current.scrollTo({
        left: newScroll,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-foreground mb-2">What Our Customers Say</h2>
          <p className="text-muted-foreground">Don't just take our word for it</p>
        </div>
        <div className="relative">
          <div className="overflow-hidden" ref={scrollContainerRef}>
            <div className="flex">
              {reviews.map((review) => (
                <Card key={review.id} className="w-[300px] mx-4 flex-shrink-0 bg-card">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Avatar className="h-10 w-10 mr-4">
                        <AvatarImage src={review.avatar} alt={review.name} />
                        <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold text-foreground">{review.name}</h3>
                        <p className="text-sm text-muted-foreground">{review.position}</p>
                      </div>
                    </div>
                    <p className="text-foreground mb-4">"{review.comment}"</p>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <Button
            size="icon"
            variant="outline"
            className="absolute top-1/2 left-4 transform -translate-y-1/2 rounded-full bg-background"
            onClick={() => scroll("left")}
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            size="icon"
            variant="outline"
            className="absolute top-1/2 right-4 transform -translate-y-1/2 rounded-full bg-background"
            onClick={() => scroll("right")}
            aria-label="Scroll right"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}