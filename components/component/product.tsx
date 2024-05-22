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
  return (
    <>
      <section>
        <Reviewsmodel id={id} />
      </section>
    
    </>
  )
}
