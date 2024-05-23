"use client";

import { useState } from "react";



import { DialogDemo } from "./ServiceDemande";

interface ServiceCardProps {
  id: number
  image: string
  title: string
  description: string
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  id,
  image,
  title,
  description,
}) => {
  const [showDemande, setShowDemande] = useState(false)

  const handleCancel = () => {
    setShowDemande(false)
  }
  const handleSubmit = () => {
    console.log("Submit event triggered")
    // Add your submit logic here
  }
  return (
     <div className="flex flex-col md:flex-row items-center">
      <img src={image} alt={title} className="mb-2 w-full rounded md:w-1/2" />
      <div className="mb-2 md:ml-4 md:mb-0">
        <h2 className="text-xl font-bold">{title}</h2>
        <br />
        <p className="mt-2">{description}</p>
        <br />
      <DialogDemo onCancel={handleCancel} onSubmit={handleSubmit} id={id}/>
      </div>
    </div>
  )
}