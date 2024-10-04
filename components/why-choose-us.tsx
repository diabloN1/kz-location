'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Car, Clock, CreditCard, Headphones, ShieldCheck, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function WhyChooseUsComponent() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const features = [
    {
      icon: <Car className="w-6 h-6" />,
      title: "Extensive Fleet",
      description: "From compact cars to luxury SUVs, we have the perfect vehicle for every need and budget."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instant Booking",
      description: "Reserve your ideal car in seconds with our streamlined, user-friendly online system."
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Comprehensive Insurance",
      description: "Drive with peace of mind, knowing you're protected by our extensive coverage options."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Our dedicated team is always available to assist you, ensuring a smooth rental experience."
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Transparent Pricing",
      description: "Enjoy competitive rates with no hidden fees, guaranteeing the best value for your money."
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Premium Service",
      description: "Experience top-notch customer care from reservation to return, tailored to your needs."
    }
  ]

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12 text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why Choose Our Car Rental Service
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(null)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Card className="h-full transition-shadow duration-300 hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="p-2 bg-primary rounded-full">
                      {feature.icon}
                    </div>
                    <span>{feature.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                  <motion.div
                    className="w-full h-1 bg-primary rounded-full mt-4"
                    initial={{ width: 0 }}
                    animate={{ width: hoveredIndex === index ? '100%' : '0%' }}
                    transition={{ duration: 0.3 }}
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button size="lg" className="font-semibold">
            Reserve Your Car Now
          </Button>
        </div>
      </div>
    </section>
  )
}