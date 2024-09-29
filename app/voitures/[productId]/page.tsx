"use client"
import { Product } from "@/components/component/product";
import { Reviewsmodel } from "@/components/component/reviews model";



export default function page({ params }: { params: { productId: string } }) {
  return <div>
            <Reviewsmodel idItem={params.productId} />
        </div>
}


