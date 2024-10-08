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
      title: "Réservation Instantanée",
      description: "Réservez votre voiture idéale en quelques secondes grâce à notre système en ligne simplifié et convivial."
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Assurance",
      description: "Conduisez en toute tranquillité, sachant que vous êtes protégé par nos options de couverture étendues."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Support 24/7",
      description: "Notre équipe dédiée est toujours disponible pour vous aider, assurant une expérience de location en douceur."
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Prix transparents",
      description: "Profitez de tarifs compétitifs sans frais cachés, garantissant le meilleur rapport qualité-prix."
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Service Premium",
      description: "Profitez d’un service client de premier ordre, de la réservation au retour, adapté à vos besoins."
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
          Pourquoi choisir notre service 
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
            Reserve Maintenant
          </Button>
        </div>
      </div>
    </section>
  )
}