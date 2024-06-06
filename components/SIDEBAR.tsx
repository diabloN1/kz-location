import React, { useState } from "react";



import { ServiceCard } from "@/components/ServiceCard";





const Dashboard: React.FC = () => {
  const [selectedService, setSelectedService] = useState("")

  const services = [
    {
      id: 1,
      title: "Construction",
      link: "/construction",
      image: "/service1.png",
      description:
        "Nous offrons des services de construction complets, y compris la construction de nouvelles structures et la rénovation des structures existantes. Notre équipe est expérimentée et s'engage à fournir des résultats de haute qualité dans les délais et le budget impartis.",
    },
    {
      id: 2,
      title: "Travaux Divers",
      link: "/travauxdivers",
      image: "/service2.png",
      description:
        "Nos services diversifiés couvrent un large éventail de tâches, allant de l'aménagement paysager et du jardinage à la planification d'événements et à la logistique. Nous sommes fiers de notre polyvalence et de notre capacité à nous adapter aux besoins de chaque projet.",
    },
    {
      id: 3,
      title: "Negoce",
      link: "/negoce",
      image: "/service3.jpg",
      description:
        "Nous sommes spécialisés dans la recherche et la négociation des meilleures offres pour une grande variété de biens et de services. Notre expertise sur le marché nous permet de fournir à nos clients la meilleure valeur et qualité.",
    },
    {
      id: 4,
      title: "Exportation-Importation",
      link: "/exportationimportation",
      image: "/service4.png",
      description:
        "Nous gérons tous les aspects de l'exportation et de l'importation, de la logistique et du dédouanement au transport et à l'entreposage. Notre équipe garantit des opérations fluides et efficaces pour vos besoins en commerce international.",
    },
    {
      id: 5,
      title: "Developpement",
      link: "/developpement",
      image: "/service4.png",
      description:
        "Nous développons des solutions innovantes pour répondre aux besoins spécifiques de nos clients. Notre équipe crée des produits, améliore des services et intègre des technologies avancées, garantissant des résultats de qualité dans les délais et budgets impartis.",
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
            className="hidden lg:block text-3xl font-semibold cursor-pointer"
            onClick={resetSelectedService}
          >
            Services
          </h1>
        </div>
        <div className="mx-auto grid w-full max-w-6xl items-start gap-6 lg:grid-cols-[250px_1fr]">
          <nav
            className="grid gap-4 text-sm text-muted-foreground"
            x-chunk="dashboard-04-chunk-0"
          >
            {services.map((service) => (
              <div key={service.id} className="hidden lg:block">
              <a
                key={service.id}
                onClick={() => scrollToService(service.title)}
                className={`${
                  service.title === selectedService
                    ? "font-semibold text-primary"
                    : ""
                }`}
              >
                {service.title}
              </a>
              </div>
            ))}
          </nav>
          <div className="grid grid-cols-1 gap-4">
            {services.map((service) => (
              <div key={service.id}>
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
                  id={service.id}
                />
              </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard