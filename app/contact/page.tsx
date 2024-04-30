import React from "react"

const contact = () => {
  return (
    <div>
      <br />
      <br /> <br /> <br />
      <header>
        <h1 className="text-4xl font-bold text-center mt-4">Contactez Nous</h1>
      </header>
      <br />
      <br />
      <main  className="flex flex-col justify-center items-center">
        <h2 className="font-bold  text-amber-900 dark:text-orange-600 ">Tele</h2>
        
        <p> 0708162668 </p>
        <br />
        <p> 0708014286 </p>
        <br />
        <br />
        <h2 className="font-bold text-amber-900 dark:text-orange-500">Email</h2>
        <p> orientalbuildingstrategy@gmail.com </p>
        <br /><br />
        <h2 className="font-bold text-amber-900 dark:text-orange-500">Adresse</h2>
        <p> 244 Q.I SIDI GHANEM BUREAU A GAUCHE ETAGE 1 MARRAKECH </p>
      </main>
    </div>
  )
}

export default contact
