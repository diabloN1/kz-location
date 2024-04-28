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
    <div className="flex flex-col items-center p-4 bg-black shadow-lg rounded-lg border-2 border-white">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover mb-4 rounded-lg"
      />
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>

      <DialogDemo onCancel={handleCancel} onSubmit={handleSubmit} />
    </div>
  )
}