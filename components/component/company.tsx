import React from "react"

export function Company() {
  return (
    <div>
      <header className="w-full py-12 md:py-24 lg:py-32 ">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Qui sommes-nous ?
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Une SARL marocaine incarne l'excellence, l'innovation et le
                service clientèle de qualité. Engagés envers la satisfaction de
                nos clients, nous contribuons au dynamisme économique du Maroc
                tout en représentant le savoir-faire local à l'international.
              </p>
            </div>
          </div>
        </div>
      </header>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
            <img
              alt="Notre entreprise"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              height="310"
              src="/placeholder.svg"
              width="550"
            />
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-amber-900 dark:text-orange-500">
                Notre entreprise
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Notre entreprise SARL s'engage à prospérer économiquement en
                offrant des produits / services de qualité qui répondent aux
                besoins et aux attentes de nos clients. Nous aspirons à
                favoriser la croissance de notre entreprise tout en maintenant
                un environnement de travail positif pour notre personnel. Nous
                accordons une importance primordiale au respect des normes
                légales et éthiques, ce qui garantit notre crédibilité et notre
                légitimité sur le marché. Notre objectif ultime est de devenir
                un acteur de premier plan dans notre secteur d'activité tout en
                contribuant au développement durable de notre communauté et de
                notre économie.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg px-3 py-1 text-sm bg-amber-900 dark:bg-orange-500">
                Nos objectifs
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl ">
                Nos ambitions pour l'avenir
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Nous avons pour objectif de devenir le leader de notre secteur
                d'activité. Nous investissons dans la recherche et le
                développement afin de toujours proposer des produits innovants
                et de qualité à nos clients.
              </p>
            </div>
            <div className="space-y-2">
              <div className="inline-block rounded-lg  px-3 py-1 text-sm bg-amber-900 dark:bg-orange-500">
                Notre équipe
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl ">
                Des experts à votre service
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Notre équipe est composée d'experts dans leur domaine. Ils
                travaillent en étroite collaboration pour vous offrir les
                meilleures solutions possibles. Nous sommes fiers de notre
                équipe et de leur engagement envers nos clients.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-6xl font-bold mb-6 md:text-3xl lg:text-4xl text-amber-900 dark:text-orange-500">
            Nos principes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-3xl font-bold mb-4">Qualité</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Offrir des produits et services de la plus haute qualité à nos
                clients.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Être à la pointe de l'innovation pour répondre aux besoins
                changeants de nos clients.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4">Durabilité</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Adopter des pratiques durables pour minimiser notre impact
                environnemental.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
