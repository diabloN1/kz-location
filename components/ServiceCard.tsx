"use client";

import { useState } from "react";



import { DialogDemo } from "./ServiceDemande";


interface ServiceCardProps {
  image: string
  title: string
  description: string

  onButtonClick?: () => void
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  image,
  title,
  description,
  onButtonClick,
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
      <img src={image} alt={title} className="w-full md:w-1/2" />
      <div className="md:ml-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <br />
        <p className="mt-2">{description}</p>
        <br />
      <DialogDemo onCancel={handleCancel} onSubmit={handleSubmit} />
      </div>
    </div>
  )
}