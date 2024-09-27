"use client"

import { useState } from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"

import { cn } from "@/lib/utils"

export const HoverEffectCard = ({
  items,
  search,
  min,
  max,
  className,
}: {
  items: {
    product: string
    description: string
    id: string
    price: any
    img: any
    categorie: any
    niche: any
    discount: any
  }[]
  search: string
  className?: string
  min : any
  max : any
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4  py-10",
        className
      )}
    >
      {items
        .filter((item) => {
          return search.toLowerCase() === ""
            ? item
            : (
                item.product.toLowerCase().includes(search.toLowerCase()) ||
                item.categorie.toLowerCase().includes(search.toLowerCase()) ||
                item.description.toLowerCase().includes(search.toLowerCase()) ||
                item.niche.toLowerCase().includes(search.toLowerCase())
              ) 
              && 
              (
                (min == "" && max == "") ||
                (parseInt(min) <= parseInt(item.price) && parseInt(item.price) <= parseInt(max)) ||
                (parseInt(min) <= parseInt(item.price) && max == "")
              )
        })
        .map((item, idx) => (
          <Link
            href={"/products/" + item?.id}
            key={item?.id}
            className="relative group  block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <Card>
              <img
                src={
                  item.img.length > 0
                    ? item.img[0].url
                    : "https://i.ibb.co/1zC9b9m/No-Product-White.jpg"
                }
                alt=""
                className="rounded w-full  h-72 object-cover"
              />
              <div className="">
                <CardTitle>{item.product}</CardTitle>

                <CardDescription className="text-right mt-auto pt-2">
                  {item.discount == null ? (
                    <span className="font-bold">{item.price} MAD</span>
                  ) : (
                    <>
                      <span className="line-through">{item.price} MAD</span>
                      <span className="font-bold">
                        {" "}
                        {item.price - (item.price * item.discount) / 100} MAD
                      </span>
                    </>
                  )}
                </CardDescription>
              </div>
            </Card>
          </Link>
        ))}
    </div>
  )
}

export const Card = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full overflow-hidden bg-gray-200 dark:bg-black border border-orange-900 dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  )
}
export const CardTitle = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <h4
      className={cn(
        "text-black dark:text-zinc-100 font-bold tracking-wide mt-4",
        className
      )}
    >
      {children}
    </h4>
  )
}
export const CardDescription = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-black dark:text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  )
}
