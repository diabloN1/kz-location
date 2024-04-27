"use client"

import React, { useState } from "react"

import { ServiceCard } from "@/components/ServiceCard"

interface Service {
  image: string
  title: string
  description: string
  link: string
}

const ServicesPage: React.FC = () => {
  const [showDemande, setShowDemande] = useState(false)

  const handleButtonClick = (serviceTitle: string) => {
    console.log(`Learn more about ${serviceTitle}`)
    setShowDemande(true) // Update the state to show the Demande component
    console.log(`showDemande state: ${showDemande}`) // Add this line to check the state
  }
  const services: Service[] = [
    {
      title: "Construction",
      link: "/construction",
      image: "/service1.png",
      description:
        "We offer comprehensive construction services, including building new structures and renovating existing ones. Our team is experienced and committed to delivering high-quality results on time and within budget.",
    },
    {
      title: "Travaux Divers",
      link: "/travauxdivers",
      image: "/service2.png",
      description:
        "Our diversified services cover a wide range of tasks, from landscaping and gardening to event planning and logistics. We pride ourselves on our versatility and ability to adapt to any project's needs.",
    },
    {
      title: "Negoce",
      link: "/negoce",
      image: "/service3.jpg",
      description:
        "We specialize in sourcing and negotiating the best deals for a wide variety of goods and services. Our expertise in the market allows us to provide our clients with the best value and quality.",
    },
    {
      title: "Exportation-Importation",
      link: "/exportationimportation",
      image: "/service4.png",
      description:
        "We handle all aspects of exportation and importation, from logistics and customs clearance to transportation and warehousing. Our team ensures smooth and efficient operations for your international trade needs.",
    },
  ]
  return (
    <div className="flex flex-col items-center p-4">
      <h1 className=" md:mt-10 text-7xl font-bold xl  leading-tight tracking-tighter md:text-5xl xl:text-6xl sm:text-2xl xs:text-xl">
        Services fournis
      </h1>
      <p className="w-[100%] lg:w-2/3 text-left mt-10 xs:w-[100%] lg:max-w-[800px] text-lg text-muted-foreground ">
        Pour accéder à ces services, veuillez cliquer sur le service souhaité et
        envoyer un message décrivant vos besoins.
      </p>
      <br />
      <div className="w-full md:w-3/4 lg:w-1/2 mx-auto">
        {" "}
        {/* Adjust the container width */}
        <div className="grid grid-cols-1 gap-4">
          {services.map((service) => (
            <div key={service.title} className="w-full">
              <ServiceCard
                image={service.image}
                title={service.title}
                description={service.description}
                onButtonClick={() => handleButtonClick(service.title)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServicesPage
