import React from "react"

import { TextGenerateEffect } from "../textgenerateeffect"

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
              <TextGenerateEffect
                className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"
                words="
                Chez KZ Loc Voiture, nous sommes une équipe dédiée à offrir des solutions de mobilité fiables et accessibles. 
                Forte d'une expérience dans le secteur, notre mission est de vous proposer des véhicules adaptés à tous vos besoins,
                que ce soit pour un court trajet ou une longue aventure. Avec un engagement envers la qualité et la satisfaction de nos clients,
                nous mettons tout en œuvre pour rendre votre expérience de location simple, rapide et agréable.
                "
              />
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
              src="https://www.hertz.com/content/dam/hertz/global/blog-articles/resources/one-way-rental.jpg"
              width="550"
            />
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-yellow-400 dark:text-yellow-400">
                Notre entreprise
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              KZ Loc Voiture est une entreprise spécialisée dans la location de véhicules, fondée avec la mission de rendre la mobilité accessible à tous.
              Nous offrons une large gamme de voitures modernes et bien entretenues, adaptées à toutes les occasions : voyages d'affaires, vacances en famille, 
              ou déplacements quotidiens. Notre priorité est de garantir un service de qualité, rapide et flexible, tout en maintenant des prix compétitifs. 
              Chez KZ LocVoiture, nous plaçons la satisfaction de nos clients au cœur de nos valeurs, avec un service personnalisé qui répond à tous vos besoins.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg px-3 py-1 text-sm bg-yellow-400 dark:bg-yellow-400 text-black">
                Nos objectifs
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl ">
               Chez KZ LocVoiture
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Notre objectif est de vous offrir une expérience de location fluide et sur-mesure. 
              Nous mettons à votre disposition des véhicules de qualité à des prix attractifs, 
              avec un service rapide et personnalisé,pour assurer votre confort et votre satisfaction à chaque trajet.
              </p>
            </div>
            <div className="space-y-2">
              <div className="inline-block rounded-lg px-3 py-1 text-sm bg-yellow-400 dark:bg-yellow-400 text-black">
                Notre équipe
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl ">
               L'équipe de KZ Loc 
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              est composée de professionnels dévoués à vous offrir un service rapide, personnalisé et sans tracas. 
              Nous sommes là pour répondre à vos besoins et garantir une expérience de location réussie.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-yellow-400 dark:text-yellow-400 mb-10">
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
            <hr className="sm:hidden"/>
            <div>
              <h3 className="text-3xl font-bold mb-4">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Être à la pointe de l'innovation pour répondre aux besoins
                changeants de nos clients.
              </p>
            </div>
            <hr className="sm:hidden"/>
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
