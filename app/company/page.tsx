"use client"

import React from "react"

const CompanyPage = () => {
  return (
    <div>
      <br />
      <header>
        <h1 className="text-4xl font-bold text-center mt-4">
          Qui sommes-nous?
        </h1>
      </header>
      <br /> <br /> <br /> 
      <main className="flex flex-col md:flex-row items-start md:items-center">
        <div className="flex-1 ml-40 w-1/3">
          <h2 className="text-5xl font-semibold mb-10 text-orange-500">
            Notre Entreprise
          </h2>
          <p className="text-lg justify-between">
            Notre SARL marocaine incarne l'excellence, l'innovation et le
            service clientèle de qualité. Engagés envers la satisfaction de nos
            clients, nous contribuons au dynamisme économique du Maroc tout en
            représentant le savoir-faire local à l'international.
          </p>
        </div>
        <img
          loading="lazy"
          src="https://placekitten.com/200/300"
          alt="A cute kitten"
          className=" md:w-auto md:ml-6 mr-40 w-2/3"
        />
      </main>
      <br /> <br />
      <main className="flex flex-col md:flex-row items-start md:items-center">
        <img
          loading="lazy"
          src="https://placekitten.com/200/300"
          alt="A cute kitten"
          className="md:w-auto md:mr-6 ml-40 w-1/3"
        />
        <div className="flex-1 mr-40 w-2/3">
          <h2 className="text-5xl font-semibold mb-10 text-orange-500">
            Notre objectif
          </h2>
          <p className="text-lg justify-between">
            Notre entreprise SARL s'engage à prospérer économiquement en offrant
            des produits / services de qualité qui répondent aux besoins et aux
            attentes de nos clients. Nous aspirons à favoriser la croissance de
            notre entreprise tout en maintenant un environnement de travail
            positif pour notre personnel. Nous accordons une importance
            primordiale au respect des normes légales et éthiques, ce qui
            garantit notre crédibilité et notre légitimité sur le marché. Notre
            objectif ultime est de devenir un acteur de premier plan dans notre
            secteur d'activité tout en contribuant au développement durable de
            notre communauté et de notre économie.
          </p>
        </div>
      </main>
      <main className="flex flex-col md:flex-row items-start md:items-center">
        <div className="flex-1 ml-40 w-1/3">
          <h2 className="text-5xl font-semibold mb-10 text-orange-500">
            Entreprise
          </h2>
          <p className="text-lg justify-between">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
            perspiciatis blanditiis laboriosam exercitationem maxime, magnam est
            vel ex, tempora, quia excepturi? Autem dolorum fugiat cupiditate
            laudantium vero dolore nostrum quia.
          </p>
        </div>
        <img
          loading="lazy"
          src="https://placekitten.com/200/300"
          alt="A cute kitten"
          className=" md:w-auto md:ml-6 mr-40 w-2/3"
        />
      </main>
      <br /> <br />
      <main className="flex flex-col md:flex-row items-start md:items-center">
        <img
          loading="lazy"
          src="https://placekitten.com/200/300"
          alt="A cute kitten"
          className="md:w-auto md:mr-6 ml-40 w-1/3"
        />
        <div className="flex-1 mr-40 w-2/3">
          <h2 className="text-5xl font-semibold mb-10 text-orange-500">
            Entreprise
          </h2>
          <p className="text-lg justify-between">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
            perspiciatis blanditiis laboriosam exercitationem maxime, magnam est
            vel ex, tempora, quia excepturi? Autem dolorum fugiat cupiditate
            laudantium vero dolore nostrum quia.
          </p>
        </div>
      </main>
    </div>
  )
}

export default CompanyPage
