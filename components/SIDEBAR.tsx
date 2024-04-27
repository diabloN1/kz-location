import React, { useState } from "react"

import { ServiceCard } from "@/components/ServiceCard"

interface Service {
  image: string
  title: string
  description: string
  link: string
}

const Dashboard: React.FC = () => {
  const [selectedService, setSelectedService] = useState("")

  const handleButtonClick = (serviceTitle: string) => {
    console.log(`Learn more about ${serviceTitle}`)
    setSelectedService(serviceTitle)
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
  const scrollToService = (serviceTitle: string) => {
    const element = document.getElementById(serviceTitle)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setSelectedService(serviceTitle)
    }
  }
  const resetSelectedService = () => {
    setSelectedService("")
  }
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
        <div className="mx-auto grid w-full max-w-6xl gap-2">
          <h1
            className="text-3xl font-semibold cursor-pointer"
            onClick={resetSelectedService}
          >
            Services
          </h1>
        </div>
        <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
          <nav
            className="grid gap-4 text-sm text-muted-foreground"
            x-chunk="dashboard-04-chunk-0"
          >
            {services.map((service) => (
              <a
                key={service.title}
                onClick={() => scrollToService(service.title)}
                className={`${
                  service.title === selectedService
                    ? "font-semibold text-primary"
                    : ""
                }`}
              >
                {service.title}
              </a>
            ))}
          </nav>
          <div className="grid grid-cols-1 gap-4">
            {services.map((service) => (
              <div
                key={service.title}
                id={service.title}
                className={`w-full ${
                  selectedService && service.title !== selectedService
                    ? "blur-sm"
                    : ""
                }`}
              >
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
      </main>
    </div>
  )
}

export default Dashboard
