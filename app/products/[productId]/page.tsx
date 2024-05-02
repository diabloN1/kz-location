"use client"
import { Product } from "@/components/component/product";



export default function page({ params }: { params: { productId: string } }) {
  return <div>
            <Product id={params.productId}/>
        </div>
}


